<?php

/**
 * Odlingsguiden - Feedback endpoint
 *
 * Tar emot feedback från FeedbackWidget och skickar mail.
 * Lägg filen på servern och peka /api/feedback hit (nginx rewrite eller symlink).
 *
 * Konfigurera FEEDBACK_TO nedan med rätt mailadress.
 */

// --- Ladda .env ---
$envFile = __DIR__ . '/.env';
if (!file_exists($envFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server misconfigured']);
    exit;
}
foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    if (str_starts_with(trim($line), '#')) continue;
    if (!str_contains($line, '=')) continue;
    [$key, $val] = explode('=', $line, 2);
    $_ENV[trim($key)] = trim($val);
}

// --- Konfiguration (från .env) ---
$FEEDBACK_TO = $_ENV['FEEDBACK_TO'] ?? 'hej@lillabosgarden.se';
$FEEDBACK_SUBJECT = 'Odlingsguiden: Feedback';
$ALLOWED_ORIGINS = [
    'https://odlingsguiden.lillabosgarden.se',
    'http://localhost:5173',
];

$SMTP_HOST = $_ENV['SMTP_HOST'] ?? '';
$SMTP_PORT = (int) ($_ENV['SMTP_PORT'] ?? 587);
$SMTP_USER = $_ENV['SMTP_USER'] ?? '';
$SMTP_PASS = $_ENV['SMTP_PASS'] ?? '';
$SMTP_FROM = $_ENV['SMTP_FROM'] ?? 'noreply@lillabosgarden.se';
$SMTP_FROM_NAME = $_ENV['SMTP_FROM_NAME'] ?? 'Odlingsguiden';

// --- CORS ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Bara POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// --- Rate limiting (enkel, filbaserad) ---
$rateDir = sys_get_temp_dir() . '/odlingsguiden-feedback';
if (!is_dir($rateDir)) {
    mkdir($rateDir, 0755, true);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = $rateDir . '/' . md5($ip) . '.txt';
$now = time();
$windowSeconds = 300; // 5 minuter
$maxRequests = 3;

$timestamps = [];
if (file_exists($rateFile)) {
    $timestamps = array_filter(
        array_map('intval', file($rateFile, FILE_IGNORE_NEW_LINES)),
        fn($ts) => $ts > $now - $windowSeconds
    );
}

if (count($timestamps) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests']);
    exit;
}

// --- Läs och validera input ---
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || empty($data['message']) || empty($data['page'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing message or page']);
    exit;
}

$message = trim($data['message']);
$page = trim($data['page']);

// Grundläggande validering
if (mb_strlen($message) > 2000 || mb_strlen($page) > 200) {
    http_response_code(400);
    echo json_encode(['error' => 'Input too long']);
    exit;
}

// --- Skicka mail via SMTP ---
$body = "Sida: $page\r\n"
    . "IP: $ip\r\n"
    . "Tid: " . date('Y-m-d H:i:s') . "\r\n"
    . "\r\n"
    . "Meddelande:\r\n"
    . $message;

$sent = smtpSend(
    $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS,
    $SMTP_FROM, $SMTP_FROM_NAME,
    $FEEDBACK_TO, $FEEDBACK_SUBJECT, $body
);

if ($sent !== true) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not send email', 'detail' => $sent]);
    exit;
}

/**
 * Minimal SMTP-klient - skickar plaintext mail via STARTTLS.
 * Returnerar true vid lyckad sändning, annars felsträng.
 */
function smtpSend(
    string $host, int $port, string $user, string $pass,
    string $from, string $fromName,
    string $to, string $subject, string $body
): string|true {
    $sock = @fsockopen($host, $port, $errno, $errstr, 10);
    if (!$sock) return "Connect failed: $errstr ($errno)";

    $resp = function() use ($sock) {
        $r = '';
        while ($line = fgets($sock, 512)) {
            $r .= $line;
            if ($line[3] === ' ') break;
        }
        return $r;
    };

    $send = function(string $cmd) use ($sock, $resp) {
        fwrite($sock, $cmd . "\r\n");
        return $resp();
    };

    $resp(); // Välkomstrad
    $send("EHLO localhost");

    // STARTTLS
    $r = $send("STARTTLS");
    if (str_starts_with($r, '220')) {
        stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT);
        $send("EHLO localhost");
    }

    // AUTH LOGIN
    $send("AUTH LOGIN");
    $send(base64_encode($user));
    $r = $send(base64_encode($pass));
    if (!str_starts_with($r, '235')) {
        fclose($sock);
        return "Auth failed: $r";
    }

    $send("MAIL FROM:<$from>");
    $send("RCPT TO:<$to>");
    $send("DATA");

    $headers = "From: $fromName <$from>\r\n"
        . "To: $to\r\n"
        . "Subject: $subject\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Date: " . date('r') . "\r\n";

    $r = $send($headers . "\r\n" . $body . "\r\n.");
    if (!str_starts_with($r, '250')) {
        fclose($sock);
        return "Send failed: $r";
    }

    $send("QUIT");
    fclose($sock);
    return true;
}

// Spara rate limit
$timestamps[] = $now;
file_put_contents($rateFile, implode("\n", $timestamps));

echo json_encode(['ok' => true]);
