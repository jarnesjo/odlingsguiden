import { useState } from "react";

/* ═══════════════════════════════════════════════════
   GRÖDGUIDEN – SVG-ILLUSTRATIONER
   Detaljerade grödbilder i designguidens handritade stil
   ═══════════════════════════════════════════════════ */

// Google Fonts
const FontLoader = () => (
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
);

// ── Palette (Jord & Grönska) ──
const c = {
  bg: "#F5F2EB",
  card: "#FEFDFB",
  accent: "#3D6B4F",
  accentLight: "#C8DEC9",
  warm: "#C4956A",
  warmLight: "#F0E4D5",
  earth: "#8B7355",
  earthLight: "#D4C4AD",
  text: "#2C3028",
  textMuted: "#7A7568",
  border: "#E2DDD4",
};

// ── Morot – Detaljerad illustration ──
const CarrotIllustration = ({ size = 200 }) => {
  const scale = size / 200;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill={c.accentLight} opacity="0.15" />

      {/* Blast – flera blad som växer uppåt */}
      {/* Mittenstjälk */}
      <path d="M100 75 L100 28" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 28 C98 18, 92 12, 85 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 28 C102 18, 108 12, 115 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Vänster blad-cluster */}
      <path d="M96 55 C90 42, 78 30, 65 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M96 55 C88 45, 74 38, 60 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M65 22 C70 24, 72 30, 68 36 C64 42, 58 38, 60 32 C62 26, 63 23, 65 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M96 50 C86 38, 70 28, 58 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Höger blad-cluster */}
      <path d="M104 55 C110 42, 122 30, 135 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M104 55 C112 45, 126 38, 140 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M135 22 C130 24, 128 30, 132 36 C136 42, 142 38, 140 32 C138 26, 137 23, 135 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M104 50 C114 38, 130 28, 142 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Bladspetsar – detaljer */}
      <path d="M85 8 C82 6, 80 8, 81 11" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M115 8 C118 6, 120 8, 119 11" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* Moroten – huvudkropp */}
      <path
        d="M84 78 C82 78, 80 82, 79 88 L74 120 C72 132, 76 148, 82 160 C86 168, 92 175, 98 180 C100 182, 100 182, 102 180 C108 175, 114 168, 118 160 C124 148, 128 132, 126 120 L121 88 C120 82, 118 78, 116 78 Z"
        fill="#E8943A"
        opacity="0.2"
      />
      <path
        d="M84 78 C82 78, 80 82, 79 88 L74 120 C72 132, 76 148, 82 160 C86 168, 92 175, 98 180 C100 182, 100 182, 102 180 C108 175, 114 168, 118 160 C124 148, 128 132, 126 120 L121 88 C120 82, 118 78, 116 78"
        stroke="#D4782A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Morotens spets – avsmalnar */}
      <path d="M98 180 C99 184, 100 188, 100 192" stroke="#D4782A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M102 180 C101 184, 100 188, 100 192" stroke="#D4782A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Ränder/linjer på moroten – ger textur */}
      <path d="M88 90 C92 88, 108 88, 112 90" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M86 102 C90 100, 110 100, 114 102" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M80 118 C84 116, 116 116, 120 118" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M82 134 C86 132, 114 132, 118 134" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M86 148 C90 146, 110 146, 114 148" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M90 162 C94 160, 106 160, 110 162" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Ljusreflex – ger volym */}
      <path d="M92 85 C90 95, 88 115, 90 140" stroke="#F5C882" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />

      {/* Liten rot-hår detalj */}
      <path d="M86 110 C82 112, 80 110" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M114 125 C118 127, 120 125" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M84 140 C80 142, 78 140" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Jordpartiklar vid basen */}
      <circle cx="76" cy="168" r="1.5" fill={c.earth} opacity="0.2" />
      <circle cx="124" cy="165" r="1" fill={c.earth} opacity="0.15" />
      <circle cx="90" cy="185" r="1.2" fill={c.earth} opacity="0.2" />
      <circle cx="112" cy="182" r="0.8" fill={c.earth} opacity="0.15" />
    </svg>
  );
};

// ── Tomat – Detaljerad illustration ──
const TomatoIllustration = ({ size = 200 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="105" r="90" fill="#F5DDD9" opacity="0.15" />

      {/* Stjälk */}
      <path d="M100 58 L100 35 C100 30, 98 25, 95 22" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 35 C102 30, 105 26, 108 24" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Bladsepaler (gröna blad kring toppen) */}
      <path d="M100 62 C92 55, 78 52, 70 56 C74 52, 82 48, 92 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M70 56 C74 52, 82 48, 92 52" fill="#3D6B4F" opacity="0.1" />

      <path d="M100 62 C108 55, 122 52, 130 56 C126 52, 118 48, 108 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 56 C126 52, 118 48, 108 52" fill="#3D6B4F" opacity="0.1" />

      <path d="M100 60 C95 52, 85 46, 76 48 C80 45, 88 42, 96 48" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 60 C105 52, 115 46, 124 48 C120 45, 112 42, 104 48" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Mitt-sepal som pekar uppåt */}
      <path d="M98 60 C97 54, 99 48, 100 44 C101 48, 103 54, 102 60" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M98 60 C97 54, 99 48, 100 44 C101 48, 103 54, 102 60" fill="#3D6B4F" opacity="0.08" />

      {/* Tomaten – huvudkropp med lober */}
      <path
        d="M48 105 C48 75, 65 58, 100 58 C135 58, 152 75, 152 105 C152 140, 135 165, 100 168 C65 165, 48 140, 48 105Z"
        fill="#D94F3B"
        opacity="0.15"
      />

      {/* Vänster lob */}
      <path
        d="M100 58 C75 58, 55 72, 50 95 C45 118, 55 148, 72 160 C82 167, 92 168, 100 168"
        stroke="#C0392B"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Höger lob */}
      <path
        d="M100 58 C125 58, 145 72, 150 95 C155 118, 145 148, 128 160 C118 167, 108 168, 100 168"
        stroke="#C0392B"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lobindelning – vertikal linje */}
      <path d="M100 62 C100 90, 100 130, 100 165" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

      {/* Sido-lob-linjer */}
      <path d="M76 65 C72 85, 68 110, 74 145" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
      <path d="M124 65 C128 85, 132 110, 126 145" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

      {/* Ljusreflex – ger glans */}
      <ellipse cx="78" cy="90" rx="12" ry="18" fill="#F5A89A" opacity="0.2" transform="rotate(-15 78 90)" />
      <ellipse cx="74" cy="85" rx="5" ry="8" fill="#FCEAE7" opacity="0.25" transform="rotate(-15 74 85)" />

      {/* Botten-skugga/form */}
      <path d="M75 158 C82 166, 92 168, 100 168 C108 168, 118 166, 125 158" stroke="#C0392B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

      {/* Liten navel i botten */}
      <circle cx="100" cy="166" r="2" stroke="#C0392B" strokeWidth="1" opacity="0.3" fill="none" />

      {/* Skugga under */}
      <ellipse cx="100" cy="182" rx="35" ry="5" fill={c.earth} opacity="0.08" />
    </svg>
  );
};

// ── Liten ikon-version för crop list ──
const CarrotIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Blast */}
    <path d="M24 16 L24 8 C23 5, 20 3, 18 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 8 C25 5, 28 3, 30 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 12 C19 8, 14 5, 12 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M26 12 C29 8, 34 5, 36 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Morot */}
    <path d="M20 17 C19 17, 18 19, 17.5 22 L16 30 C15.5 34, 17 38, 20 42 C22 44, 24 45, 24 45 C24 45, 26 44, 28 42 C31 38, 32.5 34, 32 30 L30.5 22 C30 19, 29 17, 28 17" fill="#E8943A" opacity="0.2" />
    <path d="M20 17 C19 17, 18 19, 17.5 22 L16 30 C15.5 34, 17 38, 20 42 C22 44, 24 45, 24 45 C24 45, 26 44, 28 42 C31 38, 32.5 34, 32 30 L30.5 22 C30 19, 29 17, 28 17" stroke="#D4782A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Ränder */}
    <path d="M19.5 24 C21 23, 27 23, 28.5 24" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    <path d="M18 30 C20 29, 28 29, 30 30" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M19 36 C21 35, 27 35, 29 36" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
  </svg>
);

const TomatoIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stjälk */}
    <path d="M24 14 L24 8 C24 6, 23 4, 22 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    {/* Sepaler */}
    <path d="M24 15 C21 12, 16 11, 13 12" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 15 C27 12, 32 11, 35 12" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 14 C22 11, 23 8, 24 7 C25 8, 26 11, 25 14" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
    {/* Tomat */}
    <path d="M10 25 C10 17, 15 13, 24 13 C33 13, 38 17, 38 25 C38 35, 33 41, 24 42 C15 41, 10 35, 10 25Z" fill="#D94F3B" opacity="0.15" />
    <path d="M24 13 C17 13, 12 17, 11 24 C10 31, 13 37, 18 40 C21 42, 23 42, 24 42" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M24 13 C31 13, 36 17, 37 24 C38 31, 35 37, 30 40 C27 42, 25 42, 24 42" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Lob-linje */}
    <path d="M24 14 C24 22, 24 34, 24 41" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
    {/* Glans */}
    <ellipse cx="18" cy="22" rx="3" ry="5" fill="#F5A89A" opacity="0.2" transform="rotate(-10 18 22)" />
  </svg>
);

// ── Hallon (Raspberry) – Detaljerad illustration ──
// Bär: kluster av små druper på en kvist med taggar och trefingrade blad
const RaspberryIllustration = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Bakgrundscirkel – bär-kategori */}
    <circle cx="100" cy="100" r="90" fill="#E8D1DF" opacity="0.15" />

    {/* Huvudkvist – böjd, med små taggar */}
    <path d="M55 30 C65 40, 80 55, 90 75 C95 85, 100 100, 100 105" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 105 C100 115, 98 130, 95 140" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

    {/* Taggar på kvisten */}
    <path d="M68 42 L65 38" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <path d="M78 55 L75 51" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <path d="M88 72 L85 68" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <path d="M96 92 L93 89" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

    {/* Blad – trefingrade, typiska hallonblad */}
    {/* Vänster blad (uppåt) */}
    <path d="M72 48 C62 42, 48 38, 40 40 C44 34, 54 30, 64 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M72 48 C66 40, 52 32, 42 28 C48 26, 58 28, 66 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M40 40 C44 34, 54 30, 64 36 C58 28, 48 26, 42 28" fill="#3D6B4F" opacity="0.08" />
    {/* Bladnerv */}
    <path d="M70 47 C60 40, 50 36, 42 34" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

    {/* Höger blad (vid bäret) */}
    <path d="M95 82 C108 76, 122 74, 132 78 C126 72, 116 68, 104 74" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M95 82 C110 78, 126 80, 138 86 C130 78, 118 72, 106 76" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M132 78 C126 72, 116 68, 104 74 C110 78, 126 80, 138 86 C130 78, 126 74, 132 78" fill="#3D6B4F" opacity="0.08" />
    {/* Bladnerv */}
    <path d="M98 82 C110 78, 122 76, 134 80" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

    {/* Litet blad nedåt */}
    <path d="M98 118 C108 122, 118 128, 120 136 C116 128, 108 120, 100 120" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* ── Hallonbäret – kluster av druper ── */}
    {/* Kalk (lilla gröna bladrosetten på toppen) */}
    <path d="M88 100 C84 96, 80 98, 82 102" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M112 100 C116 96, 120 98, 118 102" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M96 98 C94 94, 96 90, 100 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    <path d="M104 98 C106 94, 104 90, 100 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

    {/* Druper – rad 1 (topp, 3 st) */}
    <circle cx="92" cy="110" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="92" cy="110" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="100" cy="107" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="100" cy="107" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="108" cy="110" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="108" cy="110" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />

    {/* Druper – rad 2 (4 st, bredare) */}
    <circle cx="87" cy="122" r="7.5" fill="#C4506A" opacity="0.18" />
    <circle cx="87" cy="122" r="7.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="96" cy="120" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="96" cy="120" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="104" cy="120" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="104" cy="120" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="113" cy="122" r="7.5" fill="#C4506A" opacity="0.18" />
    <circle cx="113" cy="122" r="7.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />

    {/* Druper – rad 3 (3 st) */}
    <circle cx="91" cy="133" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="91" cy="133" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="100" cy="131" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="100" cy="131" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="109" cy="133" r="7" fill="#C4506A" opacity="0.18" />
    <circle cx="109" cy="133" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />

    {/* Druper – botten (2 st) */}
    <circle cx="95" cy="142" r="6" fill="#C4506A" opacity="0.18" />
    <circle cx="95" cy="142" r="6" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="105" cy="142" r="6" fill="#C4506A" opacity="0.18" />
    <circle cx="105" cy="142" r="6" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />

    {/* Ljusreflex på druper */}
    <circle cx="89" cy="108" r="2.5" fill="#E8A0B8" opacity="0.3" />
    <circle cx="97" cy="105" r="2" fill="#E8A0B8" opacity="0.25" />
    <circle cx="84" cy="120" r="2" fill="#E8A0B8" opacity="0.25" />

    {/* Liten drup-textur (prickar) */}
    <circle cx="106" cy="108" r="1" fill="#9B3A5A" opacity="0.15" />
    <circle cx="100" cy="119" r="1" fill="#9B3A5A" opacity="0.15" />
    <circle cx="92" cy="131" r="1" fill="#9B3A5A" opacity="0.15" />
    <circle cx="108" cy="131" r="1" fill="#9B3A5A" opacity="0.12" />

    {/* Skugga */}
    <ellipse cx="100" cy="162" rx="28" ry="4" fill="#8B7355" opacity="0.08" />
  </svg>
);

// ── Krusbär (Gooseberry) – Detaljerad illustration ──
// Bär: rundade, randiga bär med hårig yta, hänger från kvist med rundade blad
const GooseberryIllustration = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Bakgrundscirkel – bär-kategori */}
    <circle cx="100" cy="100" r="90" fill="#E8D1DF" opacity="0.15" />

    {/* Huvudkvist */}
    <path d="M60 22 C70 35, 85 50, 95 68" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
    <path d="M95 68 C100 78, 102 88, 100 95" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

    {/* Sidokvist höger */}
    <path d="M85 55 C95 50, 110 48, 125 52" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

    {/* Taggar (krusbär har taggar!) */}
    <path d="M70 35 C67 32, 66 30, 68 28" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M80 48 C77 45, 76 42, 78 40" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M92 63 C89 60, 88 57, 90 56" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

    {/* Blad – rundade, 3–5 flikar (typiskt krusbärsblad) */}
    {/* Vänster blad */}
    <path d="M68 38 C56 32, 42 30, 35 34 C32 38, 34 44, 40 48 C46 52, 56 48, 62 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M35 34 C32 38, 34 44, 40 48 C46 52, 56 48, 62 42 C56 32, 42 30, 35 34" fill="#3D6B4F" opacity="0.1" />
    {/* Bladflikar-antydan */}
    <path d="M42 34 C44 38, 46 42, 50 44" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M38 40 C42 42, 46 42" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

    {/* Höger blad */}
    <path d="M110 50 C120 42, 134 38, 142 42 C146 48, 142 56, 134 58 C126 60, 118 56, 112 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M142 42 C146 48, 142 56, 134 58 C126 60, 118 56, 112 52 C120 42, 134 38, 142 42" fill="#3D6B4F" opacity="0.1" />
    <path d="M132 44 C132 48, 130 52, 126 56" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

    {/* Litet blad */}
    <path d="M96 75 C88 70, 78 68, 72 72 C76 66, 84 64, 92 70" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* ── Krusbäret – stort, runt, randigt ── */}
    {/* Bärstjälk */}
    <path d="M100 95 L100 105" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

    {/* Liten kalk/sepaler överst */}
    <path d="M94 106 C92 102, 94 100, 97 102" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M106 106 C108 102, 106 100, 103 102" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

    {/* Bärkropp – oval/rund */}
    <ellipse cx="100" cy="135" rx="28" ry="30" fill="#8BAA5A" opacity="0.18" />
    <ellipse cx="100" cy="135" rx="28" ry="30" stroke="#5A7A3A" strokeWidth="1.8" fill="none" />

    {/* Ränder (krusbärets karakteristiska "meridianer") */}
    <path d="M100 105 C100 115, 100 148, 100 165" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M86 108 C82 120, 78 138, 82 158" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
    <path d="M114 108 C118 120, 122 138, 118 158" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
    <path d="M76 118 C74 130, 74 145, 78 155" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />
    <path d="M124 118 C126 130, 126 145, 122 155" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />

    {/* Hår/borst (krusbärets textur – korta streck utåt) */}
    <path d="M78 120 L74 118" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M82 112 L79 109" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M120 118 L124 116" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M118 112 L121 109" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    <path d="M90 108 L89 104" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M110 108 L111 104" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M76 135 L72 134" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M124 135 L128 134" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M80 150 L76 150" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M120 150 L124 150" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

    {/* Ljusreflex */}
    <ellipse cx="88" cy="125" rx="8" ry="14" fill="#C5D99A" opacity="0.2" transform="rotate(-10 88 125)" />
    <ellipse cx="85" cy="120" rx="4" ry="7" fill="#E0EEBC" opacity="0.25" transform="rotate(-10 85 120)" />

    {/* Litet torkblomma-rest i botten */}
    <path d="M96 164 C98 168, 100 170, 102 168" stroke="#5A7A3A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M98 164 C99 167, 100 168, 101 166" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

    {/* ── Andra (litet) krusbär bakom ── */}
    <ellipse cx="140" cy="120" rx="16" ry="18" fill="#8BAA5A" opacity="0.1" />
    <ellipse cx="140" cy="120" rx="16" ry="18" stroke="#5A7A3A" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M140 102 C140 108, 140 130, 140 138" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />
    {/* Stjälk till lilla bäret */}
    <path d="M125 52 C130 65, 136 80, 140 102" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

    {/* Skugga */}
    <ellipse cx="100" cy="178" rx="30" ry="4" fill="#8B7355" opacity="0.08" />
  </svg>
);

// ── Hallon – Listikon ──
const RaspberryIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Kvist */}
    <path d="M14 6 C16 10, 20 16, 24 20" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    {/* Blad */}
    <path d="M17 10 C13 8, 9 8, 8 10" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M22 16 C26 14, 30 13, 33 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Kalk */}
    <path d="M20 22 C18 20, 20 18, 22 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M28 22 C30 20, 28 18, 26 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
    {/* Druper – rad 1 */}
    <circle cx="21" cy="27" r="4" fill="#C4506A" opacity="0.18" />
    <circle cx="21" cy="27" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="27" cy="27" r="4" fill="#C4506A" opacity="0.18" />
    <circle cx="27" cy="27" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    {/* Druper – rad 2 */}
    <circle cx="18" cy="34" r="4" fill="#C4506A" opacity="0.18" />
    <circle cx="18" cy="34" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="24" cy="33" r="3.5" fill="#C4506A" opacity="0.18" />
    <circle cx="24" cy="33" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="30" cy="34" r="4" fill="#C4506A" opacity="0.18" />
    <circle cx="30" cy="34" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    {/* Druper – botten */}
    <circle cx="21" cy="40" r="3.5" fill="#C4506A" opacity="0.18" />
    <circle cx="21" cy="40" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    <circle cx="27" cy="40" r="3.5" fill="#C4506A" opacity="0.18" />
    <circle cx="27" cy="40" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
    {/* Ljusreflex */}
    <circle cx="19" cy="26" r="1.5" fill="#E8A0B8" opacity="0.3" />
  </svg>
);

// ── Krusbär – Listikon ──
const GooseberryIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Kvist */}
    <path d="M16 5 C18 10, 22 16, 24 20" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    {/* Tagg */}
    <path d="M19 10 L17 7" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    {/* Blad */}
    <path d="M17 12 C12 9, 8 10, 7 13 C10 10, 14 10, 16 12" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M22 17 C27 14, 32 14, 34 16 C30 14, 26 14, 23 17" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Bärstjälk */}
    <path d="M24 20 L24 24" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    {/* Kalk */}
    <path d="M21 24 C20 22, 22 21, 23 22" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" />
    <path d="M27 24 C28 22, 26 21, 25 22" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" />
    {/* Bärkropp */}
    <ellipse cx="24" cy="34" rx="11" ry="12" fill="#8BAA5A" opacity="0.18" />
    <ellipse cx="24" cy="34" rx="11" ry="12" stroke="#5A7A3A" strokeWidth="1.8" fill="none" />
    {/* Ränder */}
    <path d="M24 22 C24 28, 24 40, 24 46" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
    <path d="M17 26 C16 32, 16 38, 18 44" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />
    <path d="M31 26 C32 32, 32 38, 30 44" stroke="#5A7A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />
    {/* Hår */}
    <path d="M15 28 L13 27" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M33 28 L35 27" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M14 35 L12 35" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M34 35 L36 35" stroke="#5A7A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    {/* Ljusreflex */}
    <ellipse cx="20" cy="30" rx="3" ry="5" fill="#C5D99A" opacity="0.2" transform="rotate(-10 20 30)" />
  </svg>
);

// ── Äpple (Apple) – Detaljerad illustration ──
// Frukt: enkel rund form – utmaningen är att skapa intresse med subtiliteter
const AppleIllustration = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Bakgrundscirkel – frukt-kategori */}
    <circle cx="100" cy="105" r="90" fill="#F0DDD0" opacity="0.15" />

    {/* Gren som äpplet hänger från */}
    <path d="M130 8 C125 14, 115 22, 108 30 C104 36, 102 42, 102 48" stroke="#8B7355" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M130 8 C128 12, 132 10, 135 6" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* Blad – stort, typiskt äppelblad med sågad kant */}
    <path d="M106 36 C112 28, 124 22, 138 24 C144 26, 148 32, 146 38 C144 44, 136 48, 126 46 C116 44, 110 40, 106 36Z" fill="#3D6B4F" opacity="0.12" />
    <path d="M106 36 C112 28, 124 22, 138 24 C144 26, 148 32, 146 38 C144 44, 136 48, 126 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    {/* Bladnerv */}
    <path d="M108 37 C116 34, 128 30, 140 28" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    <path d="M115 34 C118 38, 120 42" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
    <path d="M125 31 C127 35, 128 40" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
    <path d="M134 28 C135 32, 134 37" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

    {/* Litet blad på andra sidan */}
    <path d="M96 40 C90 34, 80 30, 72 32 C76 28, 84 26, 92 32" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M72 32 C76 28, 84 26, 92 32 C84 30, 78 30, 72 32" fill="#3D6B4F" opacity="0.06" />

    {/* Stjälk ner i äpplet */}
    <path d="M102 48 C101 52, 100 56, 100 60" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" />

    {/* ── Äpplet – huvudkropp ── */}
    {/* Gropen vid stjälken (den lilla indragningen) */}
    <path d="M88 65 C92 60, 96 58, 100 60 C104 58, 108 60, 112 65" stroke="#C0392B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

    {/* Vänster halva – röd */}
    <path
      d="M88 65 C78 68, 58 80, 54 100 C50 120, 56 145, 70 158 C80 166, 90 170, 100 170"
      fill="#D94F3B"
      opacity="0.15"
    />
    <path
      d="M88 65 C78 68, 58 80, 54 100 C50 120, 56 145, 70 158 C80 166, 90 170, 100 170"
      stroke="#C0392B"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Höger halva – med grön antydan */}
    <path
      d="M112 65 C122 68, 142 80, 146 100 C150 120, 144 145, 130 158 C120 166, 110 170, 100 170"
      fill="#D94F3B"
      opacity="0.12"
    />
    <path
      d="M112 65 C122 68, 142 80, 146 100 C150 120, 144 145, 130 158 C120 166, 110 170, 100 170"
      stroke="#C0392B"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Grön fläck (solsidan – där äpplet inte mognat helt) */}
    <path d="M130 80 C138 88, 142 100, 140 112 C136 104, 130 92, 126 84" fill="#6B8E3A" opacity="0.08" />

    {/* Färgövergång – röd till gul-grön (subtila streck) */}
    <path d="M56 95 C60 90, 66 86, 74 82" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    <path d="M58 108 C62 104, 70 98, 80 94" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />
    <path d="M128 82 C136 86, 140 92, 144 100" stroke="#6B8E3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />

    {/* Vertikal mitt-linje (äpplets symmetri) */}
    <path d="M100 62 C100 90, 100 140, 100 168" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />

    {/* Ljusreflex – stor, mjuk */}
    <ellipse cx="78" cy="95" rx="14" ry="22" fill="#F5A89A" opacity="0.18" transform="rotate(-15 78 95)" />
    <ellipse cx="74" cy="88" rx="6" ry="10" fill="#FCEAE7" opacity="0.25" transform="rotate(-15 74 88)" />

    {/* Liten "kindrost" – den varma färgen på kinden */}
    <ellipse cx="80" cy="130" rx="12" ry="8" fill="#C0392B" opacity="0.06" transform="rotate(-5 80 130)" />

    {/* Botten – liten blomrest/navel */}
    <path d="M96 168 C98 172, 100 173, 102 172" stroke="#C0392B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M98 168 C99 170, 101 170, 102 168" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <circle cx="100" cy="170" r="1.5" fill="#C0392B" opacity="0.15" />

    {/* Fräknar/lenticeller (typiska prickar på äppelskalet) */}
    <circle cx="70" cy="105" r="0.8" fill="#96694A" opacity="0.15" />
    <circle cx="85" cy="140" r="0.6" fill="#96694A" opacity="0.12" />
    <circle cx="120" cy="100" r="0.7" fill="#96694A" opacity="0.12" />
    <circle cx="115" cy="135" r="0.6" fill="#96694A" opacity="0.1" />
    <circle cx="75" cy="120" r="0.5" fill="#96694A" opacity="0.1" />
    <circle cx="130" cy="115" r="0.7" fill="#96694A" opacity="0.08" />

    {/* Skugga */}
    <ellipse cx="100" cy="182" rx="38" ry="5" fill="#8B7355" opacity="0.08" />
  </svg>
);

// ── Basilika (Basil) – Detaljerad illustration ──
// Krydda: grönt på grönt – utmaningen är att skilja blad från stjälk
const BasilIllustration = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Bakgrundscirkel – kryddor-kategori */}
    <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />

    {/* Huvudstjälk – kantig, fyrkantig (typiskt för kransblommiga) */}
    <path d="M100 185 C100 175, 100 155, 100 130 C100 115, 100 95, 100 75 C100 65, 100 55, 98 45" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />

    {/* ── Bladpar 1 (nederst, störst) ── */}
    {/* Vänster blad – stort, ovalt, kupat */}
    <path d="M96 135 C84 130, 55 125, 42 115 C36 110, 38 100, 46 98 C54 96, 68 100, 82 110 C90 118, 94 128, 96 135Z" fill="#5A8A3F" opacity="0.14" />
    <path d="M96 135 C84 130, 55 125, 42 115 C36 110, 38 100, 46 98 C54 96, 68 100, 82 110" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Bladnerver */}
    <path d="M94 132 C80 124, 60 114, 44 108" stroke="#3D7A2F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M85 126 C78 118, 68 110, 56 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
    <path d="M80 130 C74 124, 64 118, 52 116" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />

    {/* Höger blad – spegelvänt */}
    <path d="M104 135 C116 130, 145 125, 158 115 C164 110, 162 100, 154 98 C146 96, 132 100, 118 110 C110 118, 106 128, 104 135Z" fill="#5A8A3F" opacity="0.12" />
    <path d="M104 135 C116 130, 145 125, 158 115 C164 110, 162 100, 154 98 C146 96, 132 100, 118 110" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Bladnerver */}
    <path d="M106 132 C120 124, 140 114, 156 108" stroke="#3D7A2F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M115 126 C122 118, 132 110, 144 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

    {/* ── Bladpar 2 (mitten) ── */}
    {/* Vänster */}
    <path d="M97 105 C86 100, 65 96, 52 88 C47 84, 50 76, 56 75 C64 74, 76 78, 86 88 C92 94, 96 100, 97 105Z" fill="#5A8A3F" opacity="0.16" />
    <path d="M97 105 C86 100, 65 96, 52 88 C47 84, 50 76, 56 75 C64 74, 76 78, 86 88" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M95 102 C84 96, 68 88, 54 82" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />

    {/* Höger */}
    <path d="M103 105 C114 100, 135 96, 148 88 C153 84, 150 76, 144 75 C136 74, 124 78, 114 88 C108 94, 104 100, 103 105Z" fill="#5A8A3F" opacity="0.14" />
    <path d="M103 105 C114 100, 135 96, 148 88 C153 84, 150 76, 144 75 C136 74, 124 78, 114 88" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M105 102 C116 96, 132 88, 146 82" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />

    {/* ── Bladpar 3 (övre, mindre) ── */}
    {/* Vänster */}
    <path d="M98 78 C90 74, 74 70, 65 64 C61 60, 64 54, 68 54 C74 54, 82 58, 90 66 C94 70, 97 74, 98 78Z" fill="#6B9E4A" opacity="0.15" />
    <path d="M98 78 C90 74, 74 70, 65 64 C61 60, 64 54, 68 54 C74 54, 82 58, 90 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />

    {/* Höger */}
    <path d="M102 78 C110 74, 126 70, 135 64 C139 60, 136 54, 132 54 C126 54, 118 58, 110 66 C106 70, 103 74, 102 78Z" fill="#6B9E4A" opacity="0.13" />
    <path d="M102 78 C110 74, 126 70, 135 64 C139 60, 136 54, 132 54 C126 54, 118 58, 110 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />

    {/* ── Toppskott (unga blad, ljusare) ── */}
    <path d="M98 52 C94 48, 86 44, 82 40 C80 38, 82 34, 86 35 C90 36, 94 40, 97 46" stroke="#6B9E4A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M82 40 C80 38, 82 34, 86 35 C90 36, 94 40, 97 46 C94 40, 86 36, 82 40" fill="#6B9E4A" opacity="0.1" />

    <path d="M100 52 C104 48, 112 44, 116 40 C118 38, 116 34, 112 35 C108 36, 104 40, 101 46" stroke="#6B9E4A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M116 40 C118 38, 116 34, 112 35 C108 36, 104 40, 101 46 C104 40, 112 36, 116 40" fill="#6B9E4A" opacity="0.1" />

    {/* Allra yttersta toppblad – liten knopp */}
    <path d="M98 44 C96 38, 98 32, 100 30 C102 32, 104 38, 102 44" stroke="#7AAE55" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M98 44 C96 38, 98 32, 100 30 C102 32, 104 38, 102 44" fill="#7AAE55" opacity="0.12" />

    {/* Ljusreflex på blad */}
    <ellipse cx="72" cy="108" rx="6" ry="10" fill="#A8D48A" opacity="0.15" transform="rotate(-30 72 108)" />
    <ellipse cx="130" cy="108" rx="5" ry="8" fill="#A8D48A" opacity="0.12" transform="rotate(30 130 108)" />
    <ellipse cx="62" cy="122" rx="8" ry="12" fill="#A8D48A" opacity="0.12" transform="rotate(-20 62 122)" />

    {/* Nod-detaljer på stjälken (typiskt för kransblommiga – lite tjockare vid bladfästena) */}
    <ellipse cx="100" cy="135" rx="3" ry="2" fill="#3D7A2F" opacity="0.12" />
    <ellipse cx="100" cy="105" rx="2.5" ry="1.8" fill="#3D7A2F" opacity="0.12" />
    <ellipse cx="99" cy="78" rx="2" ry="1.5" fill="#3D7A2F" opacity="0.1" />

    {/* Kruka/jord-antydan i botten */}
    <path d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185" stroke="#C4956A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185" fill="#C4956A" opacity="0.1" />
    <line x1="80" y1="185" x2="120" y2="185" stroke="#C4956A" strokeWidth="1.8" strokeLinecap="round" />
    {/* Jordyta i krukan */}
    <path d="M86 174 C90 172, 96 171, 100 171 C104 171, 110 172, 114 174" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <circle cx="92" cy="173" r="1" fill="#8B7355" opacity="0.15" />
    <circle cx="108" cy="173" r="0.8" fill="#8B7355" opacity="0.12" />
  </svg>
);

// ── Äpple – Listikon ──
const AppleIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stjälk */}
    <path d="M26 5 C25 7, 24 10, 24 13" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
    {/* Blad */}
    <path d="M25 9 C28 6, 33 5, 36 6 C34 4, 30 3, 26 6" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 6 C34 4, 30 3, 26 6 C28 6, 33 5, 36 6" fill="#3D6B4F" opacity="0.08" />
    {/* Grop vid stjälk */}
    <path d="M19 15 C21 13, 23 12, 24 13 C25 12, 27 13, 29 15" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    {/* Äpple – vänster */}
    <path d="M19 15 C14 17, 8 22, 8 29 C8 36, 12 42, 18 44 C21 45, 23 45, 24 45" fill="#D94F3B" opacity="0.15" />
    <path d="M19 15 C14 17, 8 22, 8 29 C8 36, 12 42, 18 44 C21 45, 23 45, 24 45" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Äpple – höger */}
    <path d="M29 15 C34 17, 40 22, 40 29 C40 36, 36 42, 30 44 C27 45, 25 45, 24 45" fill="#D94F3B" opacity="0.12" />
    <path d="M29 15 C34 17, 40 22, 40 29 C40 36, 36 42, 30 44 C27 45, 25 45, 24 45" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Ljusreflex */}
    <ellipse cx="16" cy="26" rx="3" ry="6" fill="#F5A89A" opacity="0.2" transform="rotate(-10 16 26)" />
    {/* Botten */}
    <circle cx="24" cy="44.5" r="1" fill="#C0392B" opacity="0.2" />
  </svg>
);

// ── Basilika – Listikon ──
const BasilIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stjälk */}
    <path d="M24 44 L24 14" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
    {/* Bladpar 1 (nederst, störst) */}
    <path d="M23 34 C18 32, 10 30, 7 26 C5 24, 7 20, 10 20 C14 20, 19 24, 22 30" fill="#5A8A3F" opacity="0.14" />
    <path d="M23 34 C18 32, 10 30, 7 26 C5 24, 7 20, 10 20 C14 20, 19 24, 22 30" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M25 34 C30 32, 38 30, 41 26 C43 24, 41 20, 38 20 C34 20, 29 24, 26 30" fill="#5A8A3F" opacity="0.12" />
    <path d="M25 34 C30 32, 38 30, 41 26 C43 24, 41 20, 38 20 C34 20, 29 24, 26 30" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Bladpar 2 (mitten) */}
    <path d="M23 24 C19 22, 13 20, 10 16 C9 14, 11 12, 14 12 C17 12, 21 16, 23 20" fill="#6B9E4A" opacity="0.14" />
    <path d="M23 24 C19 22, 13 20, 10 16 C9 14, 11 12, 14 12 C17 12, 21 16, 23 20" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M25 24 C29 22, 35 20, 38 16 C39 14, 37 12, 34 12 C31 12, 27 16, 25 20" fill="#6B9E4A" opacity="0.12" />
    <path d="M25 24 C29 22, 35 20, 38 16 C39 14, 37 12, 34 12 C31 12, 27 16, 25 20" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    {/* Toppblad */}
    <path d="M23 16 C21 12, 23 8, 24 6 C25 8, 27 12, 25 16" stroke="#7AAE55" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M23 16 C21 12, 23 8, 24 6 C25 8, 27 12, 25 16" fill="#7AAE55" opacity="0.1" />
  </svg>
);

// ═══════════════════════════════════════
// PREVIEW PAGE
// ═══════════════════════════════════════
export default function IllustrationPreview() {
  const [activeSize, setActiveSize] = useState(200);

  return (
    <div style={{
      maxWidth: 900, margin: "0 auto", padding: "32px 20px 60px",
      fontFamily: "'Lora', serif", background: c.bg, minHeight: "100vh",
    }}>
      <FontLoader />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 800, color: c.text, margin: "0 0 8px" }}>
          Grödguiden – Illustrationer
        </h1>
        <p style={{ fontSize: 14, color: c.textMuted, margin: 0 }}>
          SVG-illustrationer i designguidens handritade stil
        </p>
      </div>

      {/* ── Stora illustrationer ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Profilbilder
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Detaljerade illustrationer som visas högst upp på varje grödprofil. Skala: 120–200px.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {[120, 160, 200].map(s => (
            <button key={s} onClick={() => setActiveSize(s)} style={{
              padding: "8px 16px", borderRadius: 12, border: "none", cursor: "pointer",
              background: activeSize === s ? c.accent : c.card,
              color: activeSize === s ? "#fff" : c.text,
              fontSize: 13, fontWeight: 600,
              boxShadow: activeSize === s ? "0 2px 8px rgba(0,0,0,0.15)" : `0 0 0 1px ${c.border}`,
            }}>
              {s}px
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {/* Morot */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <CarrotIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Morot</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Apiaceae (Flockblommiga)</div>
          </div>

          {/* Tomat */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <TomatoIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Tomat</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Solanaceae (Nattskatta)</div>
          </div>

          {/* Hallon */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <RaspberryIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Hallon</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Rosaceae (Rosväxter)</div>
          </div>

          {/* Krusbär */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <GooseberryIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Krusbär</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Grossulariaceae (Ripsväxter)</div>
          </div>

          {/* Äpple */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <AppleIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Äpple</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Rosaceae (Rosväxter)</div>
          </div>

          {/* Basilika */}
          <div style={{
            background: c.card, borderRadius: 20, padding: 24,
            border: `1px solid ${c.border}`, textAlign: "center",
            flex: "0 0 auto",
          }}>
            <BasilIllustration size={activeSize} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: c.text, marginTop: 12 }}>Basilika</div>
            <div style={{ fontSize: 12, color: c.textMuted }}>Lamiaceae (Kransblommiga)</div>
          </div>
        </div>
      </div>

      {/* ── Listikoner ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Listikoner
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Mindre versioner för crop-listan. Ersätter emoji. Storlek: 40–48px.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 400 }}>
          {/* Morot list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <CarrotIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Morot</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Apiaceae · Enkel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>

          {/* Tomat list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <TomatoIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Tomat</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Solanaceae · Medel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>

          {/* Hallon list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <RaspberryIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Hallon</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Rosaceae · Enkel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>

          {/* Krusbär list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <GooseberryIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Krusbär</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Grossulariaceae · Medel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>

          {/* Äpple list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <AppleIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Äpple</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Rosaceae · Medel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>

          {/* Basilika list item */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
          }}>
            <BasilIcon size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text }}>Basilika</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted }}>Lamiaceae · Medel</div>
            </div>
            <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
          </div>
        </div>
      </div>

      {/* ── Mock profile header ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          I profilsidan
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Så här ser illustrationen ut i en riktig profilheader.
        </p>

        <div style={{
          maxWidth: 400, background: c.card, borderRadius: 24, overflow: "hidden",
          border: `1px solid ${c.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          {/* Header med illustration */}
          <div style={{
            background: `linear-gradient(180deg, ${c.accentLight}44 0%, ${c.card} 100%)`,
            padding: "24px 20px 16px", textAlign: "center",
          }}>
            <CarrotIllustration size={140} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: c.text, margin: "8px 0 4px" }}>
              Morot
            </h1>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted }}>
              Apiaceae <span style={{ opacity: 0.5 }}>(Flockblommiga)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.accentLight, color: c.accent,
              }}>Enkel</span>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.warmLight, color: c.earth,
              }}>Zon 1–8</span>
            </div>
          </div>

          {/* Content preview */}
          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text, marginBottom: 6 }}>
              Trivs bäst
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: c.text, lineHeight: 1.7 }}>
              Morötter blir faktiskt sötare efter en lätt frost! Du kan lämna dem i jorden långt in på hösten...
            </div>
          </div>
        </div>
      </div>

      {/* ── Äpple profilheader (frukt-kategori) ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Frukt-profil: Äpple
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Den svåraste illustrationen – en enkel form som behöver leva av subtiliteter: gropen, ljusreflexen, fräknarna.
        </p>

        <div style={{
          maxWidth: 400, background: c.card, borderRadius: 24, overflow: "hidden",
          border: `1px solid ${c.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            background: `linear-gradient(180deg, #F0DDD044 0%, ${c.card} 100%)`,
            padding: "24px 20px 16px", textAlign: "center",
          }}>
            <AppleIllustration size={140} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: c.text, margin: "8px 0 4px" }}>
              Äpple
            </h1>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted }}>
              Rosaceae <span style={{ opacity: 0.5 }}>(Rosväxter)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.warmLight, color: c.earth,
              }}>Medel</span>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: "#F0DDD0", color: "#B8653B",
              }}>Flerårig</span>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.warmLight, color: c.earth,
              }}>Zon 1–5</span>
            </div>
          </div>

          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text, marginBottom: 6 }}>
              Pollinationspartners
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: c.text, lineHeight: 1.7 }}>
              De flesta äppelsorter behöver en kompis för att sätta frukt. Ett ensamt träd ger sällan äpplen...
            </div>
          </div>
        </div>
      </div>

      {/* ── Hallon profilheader ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Bär-profil: Hallon
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Så här ser en bär-profilheader ut med hallonillustrationen och bär-kategorifärger.
        </p>

        <div style={{
          maxWidth: 400, background: c.card, borderRadius: 24, overflow: "hidden",
          border: `1px solid ${c.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            background: `linear-gradient(180deg, #E8D1DF44 0%, ${c.card} 100%)`,
            padding: "24px 20px 16px", textAlign: "center",
          }}>
            <RaspberryIllustration size={140} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: c.text, margin: "8px 0 4px" }}>
              Hallon
            </h1>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: c.textMuted }}>
              Rosaceae <span style={{ opacity: 0.5 }}>(Rosväxter)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.accentLight, color: c.accent,
              }}>Enkel</span>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: "#E8D1DF", color: "#7B4B6A",
              }}>Flerårig</span>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                background: c.warmLight, color: c.earth,
              }}>Zon 1–6</span>
            </div>
          </div>

          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: c.text, marginBottom: 6 }}>
              Beskärning
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: c.text, lineHeight: 1.7 }}>
              Sommarhallon bär frukt på fjolårets skott – klipp bort dem efter skörd så de nya får plats att växa...
            </div>
          </div>
        </div>
      </div>

      {/* ── Jämförelse emoji vs SVG ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 4 }}>
          Emoji vs SVG-illustration
        </h2>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20, lineHeight: 1.6 }}>
          Sida vid sida – varför egna illustrationer gör skillnad.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 500 }}>
          {/* Emoji */}
          <div style={{
            background: c.card, borderRadius: 16, padding: 20,
            border: `1px solid ${c.border}`, textAlign: "center",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Emoji</div>
            <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 8 }}>🥕</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: c.text }}>Morot</div>
            <div style={{ fontSize: 11, color: c.textMuted, marginTop: 8, lineHeight: 1.5 }}>
              Plattformsberoende, generisk, ingen kontroll över stil
            </div>
          </div>

          {/* SVG */}
          <div style={{
            background: c.card, borderRadius: 16, padding: 20,
            border: `2px solid ${c.accent}`, textAlign: "center",
            boxShadow: `0 0 0 4px ${c.accentLight}44`,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.accent, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>SVG ★</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CarrotIcon size={64} />
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: c.text, marginTop: 8 }}>Morot</div>
            <div style={{ fontSize: 11, color: c.textMuted, marginTop: 8, lineHeight: 1.5 }}>
              Konsekvent, skalbar, matchar designsystemet
            </div>
          </div>
        </div>
      </div>

      {/* ── Stilguide för illustrationer ── */}
      <div style={{
        background: c.card, borderRadius: 20, padding: 28,
        border: `1px solid ${c.border}`, marginBottom: 40,
      }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: c.text, marginBottom: 16 }}>
          Stilregler för illustrationer
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { title: "Linjer", desc: "1.8px strokeWidth, strokeLinecap=\"round\". Samma som ikoner men mer detalj." },
            { title: "Fyllning", desc: "Opacity 0.12–0.20 för bakgrundsfärg. Aldrig solid fill. Ge volym med ljusreflex." },
            { title: "Färger", desc: "Grödans naturliga färg (morot = orange, tomat = röd) men dämpad. Aldrig grella/mättade." },
            { title: "Blast & blad", desc: "Alltid accent-grönt (#3D6B4F). Flera lager med avtagande opacity. Ger liv." },
            { title: "Textur", desc: "Subtila linjer/ränder (opacity 0.15–0.30) ger handritad känsla utan att bli plottrigt." },
            { title: "Bakgrund", desc: "Valfri cirkel/ellips i accentLight med opacity 0.15 centrerad bakom grödan." },
            { title: "Storlekar", desc: "Profil: 120–200px, Lista: 40–48px, Miniatyr: 24–32px. Samma SVG, skalad." },
            { title: "Detalj-nivå", desc: "Profil: full detalj. Lista: förenklad silhuett. Miniatyr: som ikoner i designguiden." },
          ].map((rule, i) => (
            <div key={i} style={{ padding: "12px 14px", background: c.bg, borderRadius: 12, border: `1px solid ${c.border}` }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 13, fontWeight: 700, color: c.text, marginBottom: 4 }}>{rule.title}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: c.textMuted, lineHeight: 1.5 }}>{rule.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", color: c.textMuted, fontSize: 12 }}>
        Grödguiden Illustrationer · v1.0 · Februari 2026
      </div>
    </div>
  );
}
