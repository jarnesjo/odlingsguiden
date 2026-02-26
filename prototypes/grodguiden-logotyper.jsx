import { useState } from "react";

/* ═══════════════════════════════════════════════════
   GRÖDGUIDEN / ODLINGSGUIDEN – LOGOTYPER & GRAFISK PROFIL
   App-ikoner, favicons, logotyper i designguidens stil
   ═══════════════════════════════════════════════════ */

const FontLoader = () => (
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
);

const c = {
  bg: "#F5F2EB",
  card: "#FEFDFB",
  accent: "#3D6B4F",
  accentLight: "#C8DEC9",
  accentDark: "#2A4A36",
  warm: "#C4956A",
  warmLight: "#F0E4D5",
  warmDark: "#96694A",
  earth: "#8B7355",
  berry: "#7B4B6A",
  herb: "#6B7D3E",
  fruit: "#B8653B",
  text: "#2C3028",
  textMuted: "#7A7568",
  border: "#E2DDD4",
};

// ═══════════════════════════════════════
// LOGO SYMBOLS (ikon-delen av logon)
// ═══════════════════════════════════════

// Koncept 1: "Grodden" – ett frö som spirar, enkelt och organiskt
const SymbolSprout = ({ size = 64, accent = c.accent, warm = c.warm }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Jordcirkel */}
    <circle cx="32" cy="42" r="18" fill={accent} opacity="0.08" />
    {/* Frö i jorden */}
    <ellipse cx="32" cy="46" rx="6" ry="4.5" fill={c.earth} opacity="0.2" />
    <ellipse cx="32" cy="46" rx="6" ry="4.5" stroke={c.earth} strokeWidth="1.8" fill="none" />
    {/* Huvudstjälk */}
    <path d="M32 42 C32 34, 32 26, 30 18" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
    {/* Första bladparet */}
    <path d="M31 28 C26 22, 16 18, 12 20 C16 16, 24 14, 30 22" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 20 C16 16, 24 14, 30 22 C24 14, 16 16, 12 20" fill={accent} opacity="0.1" />
    <path d="M31 28 C36 22, 46 20, 50 22 C46 18, 38 16, 32 22" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M50 22 C46 18, 38 16, 32 22 C38 16, 46 18, 50 22" fill={accent} opacity="0.1" />
    {/* Toppblad – ungt, ljusare */}
    <path d="M30 18 C28 12, 30 6, 32 4 C34 6, 36 12, 34 18" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M30 18 C28 12, 30 6, 32 4 C34 6, 36 12, 34 18" fill={accent} opacity="0.08" />
    {/* Solstråle (varm accent) */}
    <circle cx="48" cy="10" r="3" fill={warm} opacity="0.2" />
    <circle cx="48" cy="10" r="3" stroke={warm} strokeWidth="1.2" fill="none" opacity="0.5" />
    {/* Liten rot */}
    <path d="M32 50 C30 54, 28 56" stroke={c.earth} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M32 50 C34 53, 36 55" stroke={c.earth} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
  </svg>
);

// Koncept 2: "Bladet" – ett stiliserat blad med ådror, minimalistiskt
const SymbolLeaf = ({ size = 64, accent = c.accent, warm = c.warm }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Bladform */}
    <path d="M32 6 C18 14, 8 28, 10 42 C12 52, 22 58, 32 58 C42 58, 52 52, 54 42 C56 28, 46 14, 32 6Z" fill={accent} opacity="0.1" />
    <path d="M32 6 C18 14, 8 28, 10 42 C12 52, 22 58, 32 58 C42 58, 52 52, 54 42 C56 28, 46 14, 32 6Z" stroke={accent} strokeWidth="2" fill="none" />
    {/* Huvudnerv */}
    <path d="M32 10 C32 20, 32 40, 32 56" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    {/* Sidnerver – vänster */}
    <path d="M32 22 C26 18, 18 18, 14 22" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M32 32 C24 28, 16 28, 12 34" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    <path d="M32 42 C26 40, 18 40, 14 44" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    {/* Sidnerver – höger */}
    <path d="M32 22 C38 18, 46 18, 50 22" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M32 32 C40 28, 48 28, 52 34" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    <path d="M32 42 C38 40, 46 40, 50 44" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    {/* Liten sol/prick i övre hörnet */}
    <circle cx="48" cy="12" r="2.5" fill={warm} opacity="0.35" />
  </svg>
);

// Koncept 3: "Grödan" – en stiliserad gröda/frukt med blast, den vi redan har men förfinad
const SymbolCrop = ({ size = 64, accent = c.accent, warm = c.warm }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Bakgrundscirkel */}
    <circle cx="32" cy="36" r="24" fill={accent} opacity="0.06" />
    {/* Blast – tre grenar uppåt */}
    <path d="M32 24 L32 10" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M32 10 C30 6, 26 4, 22 2" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 10 C34 6, 38 4, 42 2" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    {/* Blad vid blasten */}
    <path d="M30 16 C26 12, 18 10, 14 12 C18 8, 24 8, 28 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M34 16 C38 12, 46 10, 50 12 C46 8, 40 8, 36 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Huvudkropp – rund form (kan vara vad som helst: tomat, äpple, gröda) */}
    <path d="M18 30 C18 24, 22 20, 32 20 C42 20, 46 24, 46 30 C46 42, 42 52, 32 54 C22 52, 18 42, 18 30Z" fill={accent} opacity="0.1" />
    <path d="M32 20 C24 20, 19 24, 18 30 C17 38, 20 48, 28 52 C30 53, 31 54, 32 54" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M32 20 C40 20, 45 24, 46 30 C47 38, 44 48, 36 52 C34 53, 33 54, 32 54" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Mitt-linje */}
    <path d="M32 22 C32 30, 32 44, 32 52" stroke={accent} strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
    {/* Ljusreflex */}
    <ellipse cx="26" cy="32" rx="4" ry="7" fill={accent} opacity="0.08" transform="rotate(-10 26 32)" />
    {/* Varm accent – liten prick */}
    <circle cx="26" cy="28" r="2" fill={warm} opacity="0.2" />
  </svg>
);

// Koncept 4: "Solen & Bladet" – sol bakom ett blad, varm och inbjudande
const SymbolSunLeaf = ({ size = 64, accent = c.accent, warm = c.warm }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Sol i bakgrunden */}
    <circle cx="36" cy="24" r="14" fill={warm} opacity="0.12" />
    <circle cx="36" cy="24" r="14" stroke={warm} strokeWidth="1.5" fill="none" opacity="0.3" />
    {/* Solstrålar */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = angle * Math.PI / 180;
      const x1 = 36 + Math.cos(rad) * 17;
      const y1 = 24 + Math.sin(rad) * 17;
      const x2 = 36 + Math.cos(rad) * 20;
      const y2 = 24 + Math.sin(rad) * 20;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={warm} strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />;
    })}
    {/* Blad – framför solen */}
    <path d="M24 56 C14 48, 8 34, 12 22 C14 16, 20 12, 28 14 C36 16, 40 24, 38 34 C36 44, 30 52, 24 56Z" fill={accent} opacity="0.15" />
    <path d="M24 56 C14 48, 8 34, 12 22 C14 16, 20 12, 28 14 C36 16, 40 24, 38 34 C36 44, 30 52, 24 56Z" stroke={accent} strokeWidth="2" fill="none" />
    {/* Bladnerv */}
    <path d="M26 16 C24 24, 24 40, 24 54" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M26 28 C20 24, 14 24" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M25 38 C20 36, 14 36" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <path d="M26 28 C32 26, 36 28" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
  </svg>
);

// ═══════════════════════════════════════
// APP ICONS (rounded square, 1024x1024 conceptually, shown at various sizes)
// ═══════════════════════════════════════

const AppIcon = ({ symbol: Symbol, bg = c.accent, size = 120 }) => (
  <div style={{
    width: size, height: size, borderRadius: size * 0.22,
    background: bg, display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    position: "relative", overflow: "hidden",
  }}>
    {/* Subtle gradient overlay */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.05) 100%)",
      borderRadius: size * 0.22,
    }} />
    <div style={{ position: "relative" }}>
      <Symbol size={size * 0.6} accent="#fff" warm="#F0E4D5" />
    </div>
  </div>
);

const AppIconLight = ({ symbol: Symbol, size = 120 }) => (
  <div style={{
    width: size, height: size, borderRadius: size * 0.22,
    background: c.card, display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    border: `1px solid ${c.border}`,
    position: "relative", overflow: "hidden",
  }}>
    <div style={{ position: "relative" }}>
      <Symbol size={size * 0.6} accent={c.accent} warm={c.warm} />
    </div>
  </div>
);

// Favicon – extra förenklad, 32x32 / 16x16
const FaviconSprout = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill={c.accent} />
    <path d="M16 22 C16 16, 16 12, 15 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15 14 C12 10, 7 9, 5 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    <path d="M15 14 C18 10, 23 9, 25 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    <path d="M15 8 C14 4, 15 2, 16 1 C17 2, 18 4, 17 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <ellipse cx="16" cy="25" rx="4" ry="3" fill="#fff" opacity="0.15" />
  </svg>
);

const FaviconLeaf = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill={c.accent} />
    <path d="M16 4 C10 8, 6 16, 7 22 C8 26, 12 28, 16 28 C20 28, 24 26, 25 22 C26 16, 22 8, 16 4Z" fill="#fff" opacity="0.15" />
    <path d="M16 4 C10 8, 6 16, 7 22 C8 26, 12 28, 16 28 C20 28, 24 26, 25 22 C26 16, 22 8, 16 4Z" stroke="#fff" strokeWidth="1.8" fill="none" />
    <path d="M16 6 L16 27" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const FaviconCrop = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill={c.accent} />
    <path d="M16 12 L16 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 4 C14 2, 12 1, 10 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M16 4 C18 2, 20 1, 22 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M9 16 C9 12, 11 10, 16 10 C21 10, 23 12, 23 16 C23 22, 21 27, 16 28 C11 27, 9 22, 9 16Z" fill="#fff" opacity="0.15" />
    <path d="M16 10 C12 10, 10 12, 9 16 C8 20, 10 25, 14 27 C15 28, 16 28, 16 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M16 10 C20 10, 22 12, 23 16 C24 20, 22 25, 18 27 C17 28, 16 28, 16 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

// ═══════════════════════════════════════
// COMBINED LOGOS (symbol + text)
// ═══════════════════════════════════════

const LogoCombined = ({ name, tagline, Symbol, layout = "horizontal", dark = false }) => {
  const textColor = dark ? "#fff" : c.text;
  const mutedColor = dark ? "rgba(255,255,255,0.6)" : c.textMuted;
  const symbolAccent = dark ? "#fff" : c.accent;
  const symbolWarm = dark ? c.warmLight : c.warm;

  if (layout === "vertical") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Symbol size={56} accent={symbolAccent} warm={symbolWarm} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 800, color: textColor, lineHeight: 1.1 }}>{name}</div>
          {tagline && <div style={{ fontFamily: "'Lora', serif", fontSize: 11, color: mutedColor, marginTop: 2 }}>{tagline}</div>}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Symbol size={48} accent={symbolAccent} warm={symbolWarm} />
      <div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 800, color: textColor, lineHeight: 1.1 }}>{name}</div>
        {tagline && <div style={{ fontFamily: "'Lora', serif", fontSize: 11, color: mutedColor, marginTop: 1 }}>{tagline}</div>}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// PREVIEW PAGE
// ═══════════════════════════════════════
export default function LogoPreview() {
  const [activeName, setActiveName] = useState("grodguiden");
  const names = {
    grodguiden: { name: "Grödguiden", tagline: "Allt du behöver veta – en gröda i taget" },
    odlingsguiden: { name: "Odlingsguiden", tagline: "Från Lilla Bosgården" },
  };
  const current = names[activeName];

  return (
    <div style={{
      maxWidth: 960, margin: "0 auto", padding: "32px 20px 60px",
      fontFamily: "'Lora', serif", background: c.bg, minHeight: "100vh",
    }}>
      <FontLoader />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 800, color: c.text, margin: "0 0 8px" }}>
          Logotyper & Grafisk Profil
        </h1>
        <p style={{ fontSize: 14, color: c.textMuted, margin: 0 }}>
          Fyra symbolkoncept, två namnförslag, app-ikoner och favicons
        </p>
      </div>

      {/* Name toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32, justifyContent: "center" }}>
        {Object.entries(names).map(([key, n]) => (
          <button key={key} onClick={() => setActiveName(key)} style={{
            padding: "10px 24px", borderRadius: 14, border: "none", cursor: "pointer",
            background: activeName === key ? c.accent : c.card,
            color: activeName === key ? "#fff" : c.text,
            fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700,
            boxShadow: activeName === key ? "0 2px 12px rgba(0,0,0,0.15)" : `0 0 0 1px ${c.border}`,
          }}>
            {n.name}
          </button>
        ))}
      </div>

      {/* ── SYMBOL CONCEPTS ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Symbolkoncept
        </h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Fyra riktningar – alla i designguidens handritade stil med 1.8px streck och mjuka former.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { Symbol: SymbolSprout, title: "Grodden", desc: "Ett frö som spirar. Symboliserar tillväxt, ny början, odlingens kärna. Enkel, igenkännbar, fungerar i alla storlekar." },
            { Symbol: SymbolLeaf, title: "Bladet", desc: "Stiliserat blad med ådror. Minimalistiskt och elegant. Starkt botaniskt formspråk. Tidlöst." },
            { Symbol: SymbolCrop, title: "Grödan", desc: "En generisk gröda med blast – kan tolkas som tomat, äpple eller vad som helst. Varm och lekfull." },
            { Symbol: SymbolSunLeaf, title: "Sol & Blad", desc: "Sol bakom ett blad. Berättar om odlingens förutsättningar: ljus och växt. Varm och inbjudande." },
          ].map((concept, i) => (
            <div key={i} style={{
              background: c.card, borderRadius: 20, padding: 24,
              border: `1px solid ${c.border}`,
            }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: c.bg, borderRadius: 16, padding: 12, border: `1px solid ${c.border}` }}>
                  <concept.Symbol size={64} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: c.text, marginBottom: 4 }}>{concept.title}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted, lineHeight: 1.6 }}>{concept.desc}</div>
                </div>
              </div>
              {/* Combined logo preview */}
              <div style={{ background: c.bg, borderRadius: 14, padding: 16, border: `1px solid ${c.border}` }}>
                <LogoCombined name={current.name} tagline={current.tagline} Symbol={concept.Symbol} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMBINED LOGOS ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Logotyp i användning
        </h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          "Grodden" som rekommenderad symbol – visad i horisontell och vertikal variant, ljus och mörk bakgrund.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          {/* Horizontal light */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 28,
            border: `1px solid ${c.border}`, display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>Horisontell – ljus</div>
            <LogoCombined name={current.name} tagline={current.tagline} Symbol={SymbolSprout} />
          </div>

          {/* Horizontal dark */}
          <div style={{
            background: c.accentDark, borderRadius: 20, padding: 28,
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Horisontell – mörk</div>
            <LogoCombined name={current.name} tagline={current.tagline} Symbol={SymbolSprout} dark />
          </div>

          {/* Vertical light */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 28,
            border: `1px solid ${c.border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>Vertikal – ljus</div>
            <LogoCombined name={current.name} tagline={current.tagline} Symbol={SymbolSprout} layout="vertical" />
          </div>

          {/* Vertical dark */}
          <div style={{
            background: c.accentDark, borderRadius: 20, padding: 28,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Vertikal – mörk</div>
            <LogoCombined name={current.name} tagline={current.tagline} Symbol={SymbolSprout} layout="vertical" dark />
          </div>
        </div>

        {/* Minimal – only symbol */}
        <div style={{
          background: c.card, borderRadius: 20, padding: 24,
          border: `1px solid ${c.border}`,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Bara symbol – när namnet redan är känt</div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <SymbolSprout size={48} />
            <SymbolSprout size={36} />
            <SymbolSprout size={24} />
            <span style={{ color: c.textMuted, fontSize: 12, marginLeft: 8 }}>48px / 36px / 24px</span>
          </div>
        </div>
      </div>

      {/* ── APP ICONS ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          App-ikoner
        </h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Rundade kvadrater som de visas i App Store / Google Play. Mörk och ljus variant.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 20, justifyContent: "start", marginBottom: 20 }}>
          {[
            { Symbol: SymbolSprout, label: "Grodden" },
            { Symbol: SymbolLeaf, label: "Bladet" },
            { Symbol: SymbolCrop, label: "Grödan" },
            { Symbol: SymbolSunLeaf, label: "Sol & Blad" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <AppIcon symbol={item.Symbol} size={100} />
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 12, fontWeight: 600, color: c.text, marginTop: 8 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Ljus variant */}
        <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Ljus variant</div>
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          {[SymbolSprout, SymbolLeaf, SymbolCrop, SymbolSunLeaf].map((Symbol, i) => (
            <AppIconLight key={i} symbol={Symbol} size={100} />
          ))}
        </div>

        {/* Size comparison */}
        <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Storleksjämförelse (Grodden)</div>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
          {[120, 80, 60, 40].map(s => (
            <div key={s} style={{ textAlign: "center" }}>
              <AppIcon symbol={SymbolSprout} size={s} />
              <div style={{ fontSize: 10, color: c.textMuted, marginTop: 4 }}>{s}px</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAVICONS ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Favicons
        </h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Extra förenklade för 32×32 och 16×16. Måste vara igenkännbara även i webbläsarens flik.
        </p>

        <div style={{
          background: c.card, borderRadius: 20, padding: 24,
          border: `1px solid ${c.border}`,
        }}>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-end", marginBottom: 20 }}>
            {[
              { Icon: FaviconSprout, label: "Grodden" },
              { Icon: FaviconLeaf, label: "Bladet" },
              { Icon: FaviconCrop, label: "Grödan" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
                  <item.Icon size={32} />
                  <item.Icon size={16} />
                </div>
                <div style={{ fontSize: 11, color: c.textMuted, marginTop: 6 }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Browser tab simulation */}
          <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Simulerad webbläsarflik</div>
          <div style={{ display: "flex", gap: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 16px 8px 12px",
              background: "#fff", borderRadius: "8px 8px 0 0",
              border: `1px solid ${c.border}`, borderBottom: "none",
            }}>
              <FaviconSprout size={16} />
              <span style={{ fontSize: 12, color: c.text }}>{current.name} – Morot</span>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 16px 8px 12px",
              background: c.bg, borderRadius: "8px 8px 0 0",
              border: `1px solid ${c.border}`, borderBottom: "none", opacity: 0.6,
            }}>
              <FaviconSprout size={16} />
              <span style={{ fontSize: 12, color: c.textMuted }}>Lilla Bosgården</span>
            </div>
          </div>
          <div style={{ height: 2, background: c.border, borderRadius: 1 }} />
        </div>
      </div>

      {/* ── USAGE IN CONTEXT ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          I kontext
        </h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Så här ser logon ut i appen, på webben och i App Store.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* App splash screen */}
          <div style={{
            background: c.accentDark, borderRadius: 24, padding: "48px 24px",
            textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 24 }}>App – Splash screen</div>
            <SymbolSprout size={80} accent="#fff" warm={c.warmLight} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: "#fff", marginTop: 16, lineHeight: 1.1 }}>{current.name}</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{current.tagline}</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 24 }}>Från Lilla Bosgården</div>
          </div>

          {/* Website header */}
          <div style={{
            background: c.card, borderRadius: 24, overflow: "hidden",
            border: `1px solid ${c.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, padding: "16px 20px 0" }}>Webb – Header</div>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 20px", borderBottom: `1px solid ${c.border}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <SymbolSprout size={32} />
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 800, color: c.text }}>{current.name}</span>
              </div>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: c.textMuted }}>
                <span>Grönsaker</span>
                <span>Bär</span>
                <span>Kryddor</span>
                <span>Frukt</span>
              </div>
            </div>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 800, color: c.text, marginBottom: 8 }}>
                Odla smartare – en gröda i taget
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, lineHeight: 1.6, maxWidth: 300, margin: "0 auto" }}>
                Zonanpassade guider för grönsaker, bär, kryddor och frukt. Från Lilla Bosgården i Kalmar.
              </div>
            </div>
          </div>

          {/* App Store listing */}
          <div style={{
            background: c.card, borderRadius: 24, padding: 20,
            border: `1px solid ${c.border}`, gridColumn: "span 2",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>App Store</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <AppIcon symbol={SymbolSprout} size={80} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 800, color: c.text }}>{current.name}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted, marginTop: 2 }}>Lilla Bosgården · Referens</div>
                <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} style={{ color: c.warm, fontSize: 14 }}>{s}</span>
                  ))}
                  <span style={{ fontSize: 12, color: c.textMuted, marginLeft: 4 }}>5.0 (42)</span>
                </div>
              </div>
              <div style={{
                padding: "8px 20px", borderRadius: 20, background: c.accent, color: "#fff",
                fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700,
              }}>69 kr</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RECOMMENDATION ── */}
      <div style={{
        background: c.accentDark, borderRadius: 20, padding: 28, color: "#fff", marginBottom: 20,
      }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Rekommendation</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
          <strong>Symbol:</strong> "Grodden" – den spirande plantan funkar bäst. Den är enkel nog att fungera som favicon (16px),
          tillräckligt detaljerad för att vara intressant i stor storlek, och symboliserar exakt vad appen handlar om: att hjälpa
          saker växa. Den har också en naturlig koppling till Lilla Bosgården.
        </div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.7, opacity: 0.9, marginTop: 12 }}>
          <strong>Namn:</strong> Båda fungerar. "Grödguiden" är mer unikt och minnesvärt. "Odlingsguiden" är bredare och tydligare
          men svårare att äga som varumärke. Byt mellan namnen ovan för att se och känn efter.
        </div>
      </div>

      <div style={{ textAlign: "center", color: c.textMuted, fontSize: 12 }}>
        Grödguiden/Odlingsguiden – Logotyper & Grafisk Profil · v1.0 · Februari 2026
      </div>
    </div>
  );
}
