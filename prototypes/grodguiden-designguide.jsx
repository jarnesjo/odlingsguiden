import { useState } from "react";

/* ═══════════════════════════════════════════════════
   GRÖDGUIDEN – DESIGNGUIDE & VISUELL IDENTITET
   ═══════════════════════════════════════════════════ */

// ── Current palette (what we have) ──
const CURRENT = {
  bg: "#F7F5F0",
  card: "#FFFFFF",
  accent: "#2D6A4F",
  accentLight: "#B7E4C7",
  warm: "#D4A373",
  warmLight: "#FAEBD7",
  text: "#2C3E2D",
  textMuted: "#6B7C6B",
  border: "#E8E4DD",
};

// ── Proposed palettes ──
const PALETTES = {
  jord: {
    name: "Jord & Grönska",
    description: "Varm, jordnära känsla. Mörk skog möter lerigt trädgårdsarbete. Den \"fötterna i myllan\"-känsla vi vill ha.",
    colors: {
      bg: "#F5F2EB",
      card: "#FEFDFB",
      accent: "#3D6B4F",
      accentLight: "#C8DEC9",
      accentDark: "#2A4A36",
      warm: "#C4956A",
      warmLight: "#F0E4D5",
      warmDark: "#96694A",
      earth: "#8B7355",
      earthLight: "#D4C4AD",
      berry: "#7B4B6A",
      berryLight: "#E8D1DF",
      herb: "#6B7D3E",
      herbLight: "#DDE5C8",
      text: "#2C3028",
      textMuted: "#7A7568",
      border: "#E2DDD4",
      danger: "#B54A3F",
      dangerLight: "#F5DDD9",
    },
  },
  skog: {
    name: "Nordisk Skog",
    description: "Djupare, mörkare grönt. Skandinavisk känsla med mossa, granskog och blåbärsris. Mer \"vild natur\" än \"trädgård\".",
    colors: {
      bg: "#F0EDE6",
      card: "#FAFAF7",
      accent: "#2F5A3F",
      accentLight: "#B8CEBC",
      accentDark: "#1E3D2B",
      warm: "#BF8A5E",
      warmLight: "#EDE0D0",
      warmDark: "#8C5E3A",
      earth: "#7A6B55",
      earthLight: "#CFC3AD",
      berry: "#6D4060",
      berryLight: "#E0C8D8",
      herb: "#5A7035",
      herbLight: "#D5DFBF",
      text: "#252822",
      textMuted: "#6E6B62",
      border: "#DAD5CB",
      danger: "#A84438",
      dangerLight: "#F0D8D3",
    },
  },
  solnedgang: {
    name: "Solnedgång & Lera",
    description: "Varmare och ljusare. Kvällssol över en odlingslott. Mer terrakotta och honung. Inbjudande och mjuk.",
    colors: {
      bg: "#FAF6EF",
      card: "#FFFEFA",
      accent: "#4A7A5A",
      accentLight: "#C5DECA",
      accentDark: "#356348",
      warm: "#D4956A",
      warmLight: "#F5E6D5",
      warmDark: "#A06840",
      earth: "#9A7F60",
      earthLight: "#DED0BB",
      berry: "#8B5070",
      berryLight: "#ECD5E2",
      herb: "#7A8B42",
      herbLight: "#E0E8C8",
      text: "#33302A",
      textMuted: "#857E72",
      border: "#E8E2D6",
      danger: "#C05040",
      dangerLight: "#F8DEDA",
    },
  },
};

// ── Custom SVG Icons ──
const Icons = {
  // Grönsaker category
  vegetable: (color = "#3D6B4F", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C9 2 7 4 7 7c0 1 .3 2 .8 2.8C6 10.5 5 12 5 14c0 3.3 3.1 6 7 6s7-2.7 7-6c0-2-.8-3.5-2.8-4.2.5-.8.8-1.8.8-2.8 0-3-2-5-5-5z" fill={color} opacity="0.15"/>
      <path d="M12 3c-2.5 0-4 1.8-4 4 0 1.2.5 2.3 1.3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 3c2.5 0 4 1.8 4 4 0 1.2-.5 2.3-1.3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M6 14c0 3 2.7 5 6 5s6-2 6-5c0-2.5-2-4-4-4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 9.5C8 10 6 11.5 6 14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="2" x2="12" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  // Bär category
  berry: (color = "#7B4B6A", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="14" r="4" fill={color} opacity="0.15"/>
      <circle cx="15" cy="13" r="3.5" fill={color} opacity="0.15"/>
      <circle cx="12" cy="17" r="3" fill={color} opacity="0.15"/>
      <circle cx="9" cy="14" r="4" stroke={color} strokeWidth="1.8"/>
      <circle cx="15" cy="13" r="3.5" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="17" r="3" stroke={color} strokeWidth="1.8"/>
      <path d="M11 6C9 4 10 2 12 2s3 2 1 4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 6v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  // Kryddor category
  herb: (color = "#6B7D3E", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 22V8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 8C12 8 8 6 6 3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 8C12 8 16 6 18 3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 12C12 12 8 10 5 8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 12C12 12 16 10 19 8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 16C12 16 9 14 7 12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 16C12 16 15 14 17 12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M6 3c0 2 2 4 6 5" fill={color} opacity="0.12"/>
      <path d="M18 3c0 2-2 4-6 5" fill={color} opacity="0.12"/>
    </svg>
  ),
  // Sol
  sun: (color = "#C4956A", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill={color} opacity="0.2"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8"/>
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = angle * Math.PI / 180;
        const x1 = 12 + Math.cos(rad) * 6.5;
        const y1 = 12 + Math.sin(rad) * 6.5;
        const x2 = 12 + Math.cos(rad) * 8.5;
        const y2 = 12 + Math.sin(rad) * 8.5;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.8" strokeLinecap="round"/>;
      })}
    </svg>
  ),
  // Vatten
  water: (color = "#4A7A8A", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L7 12c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5L12 3z" fill={color} opacity="0.15"/>
      <path d="M12 3L7 12c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5L12 3z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9.5 13c.5 1.5 2 2.5 3.5 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  // Jord
  soil: (color = "#8B7355", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="18" height="7" rx="2" fill={color} opacity="0.15"/>
      <rect x="3" y="14" width="18" height="7" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M7 14v-2c0-1 1-2 2-2s2 1 2 2v2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M13 14v-4c0-1 1-2 2-2s2 1 2 2v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="8" cy="17" r="1" fill={color} opacity="0.3"/>
      <circle cx="14" cy="16.5" r="0.8" fill={color} opacity="0.3"/>
      <circle cx="18" cy="17.5" r="0.6" fill={color} opacity="0.3"/>
    </svg>
  ),
  // Sax (beskärning)
  scissors: (color = "#3D6B4F", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="17" r="3" stroke={color} strokeWidth="1.8"/>
      <circle cx="17" cy="17" r="3" stroke={color} strokeWidth="1.8"/>
      <path d="M9.5 15L17 5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14.5 15L7 5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  // Kalender
  calendar: (color = "#3D6B4F", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8"/>
      <line x1="8" y1="3" x2="8" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="3" x2="16" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="8" cy="14" r="1.2" fill={color}/>
      <circle cx="12" cy="14" r="1.2" fill={color}/>
      <circle cx="16" cy="14" r="1.2" fill={color} opacity="0.3"/>
      <circle cx="8" cy="17.5" r="1.2" fill={color} opacity="0.3"/>
    </svg>
  ),
  // Frö
  seed: (color = "#8B7355", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="14" rx="5" ry="7" fill={color} opacity="0.12" transform="rotate(-15 12 14)"/>
      <ellipse cx="12" cy="14" rx="5" ry="7" stroke={color} strokeWidth="1.8" transform="rotate(-15 12 14)"/>
      <path d="M12 7c0-3 2-5 4-5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 10c2-1 4-1 5 1" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  // Zon / Karta
  zone: (color = "#3D6B4F", size = 24) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 2 5 5.5 5 10c0 5 7 12 7 12s7-7 7-12c0-4.5-3-8-7-8z" fill={color} opacity="0.12"/>
      <path d="M12 2C8 2 5 5.5 5 10c0 5 7 12 7 12s7-7 7-12c0-4.5-3-8-7-8z" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.8"/>
    </svg>
  ),
  // Logo
  logo: (accent = "#3D6B4F", warm = "#C4956A", size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="28" r="16" fill={accent} opacity="0.08"/>
      <path d="M24 8c-3 0-6 3-6 7 0 2 .8 3.5 2 4.5C16 21 13 24 13 28c0 5 4.9 9 11 9s11-4 11-9c0-4-3-7-7-8.5 1.2-1 2-2.5 2-4.5 0-4-3-7-6-7z"
        fill={accent} opacity="0.15"/>
      <path d="M24 8c-3 0-5 2.5-5 6 0 1.8.8 3.2 2 4" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M24 8c3 0 5 2.5 5 6 0 1.8-.8 3.2-2 4" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M14 28c0 4.5 4.5 8 10 8s10-3.5 10-8c0-3.5-3-6.5-6.5-7" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M17.5 21c-2 1.5-3.5 4-3.5 7" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="24" y1="5" x2="24" y2="10" stroke={warm} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M21 6c1-1 2-1.5 3-1.5s2 .5 3 1.5" stroke={warm} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// ── Color Swatch Component ──
const Swatch = ({ color, name, hex, large }) => (
  <div style={{ textAlign: "center", flex: large ? "0 0 100px" : "0 0 70px" }}>
    <div style={{
      width: large ? 80 : 56, height: large ? 80 : 56, borderRadius: large ? 20 : 14,
      background: hex, border: `2px solid ${hex === "#FEFDFB" || hex === "#FFFEFA" || hex === "#FAFAF7" ? "#E0DDD6" : hex}`,
      margin: "0 auto 6px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }} />
    <div style={{ fontSize: 11, fontWeight: 700, color: "#2C3028" }}>{name}</div>
    <div style={{ fontSize: 10, color: "#7A7568", fontFamily: "monospace" }}>{hex}</div>
  </div>
);

// ── Icon Card ──
const IconCard = ({ icon, label, sublabel, bg = "#F5F2EB" }) => (
  <div style={{
    display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
    padding: "16px 12px", background: bg, borderRadius: 16, minWidth: 90,
    border: "1px solid #E2DDD4",
  }}>
    {icon}
    <div style={{ fontSize: 12, fontWeight: 700, color: "#2C3028" }}>{label}</div>
    {sublabel && <div style={{ fontSize: 10, color: "#7A7568" }}>{sublabel}</div>}
  </div>
);

// ── Section Header ──
const SectionHeader = ({ children, subtitle }) => (
  <div style={{ marginBottom: 20, marginTop: 40 }}>
    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#2C3028", margin: "0 0 4px", fontFamily: "system-ui" }}>{children}</h2>
    {subtitle && <p style={{ fontSize: 13, color: "#7A7568", margin: 0, lineHeight: 1.5 }}>{subtitle}</p>}
  </div>
);

// ── Mock App Preview ──
const AppPreview = ({ palette, paletteName }) => {
  const c = palette;
  return (
    <div style={{
      width: 320, background: c.bg, borderRadius: 24, padding: 20,
      border: `1px solid ${c.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      fontFamily: "system-ui",
    }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        {Icons.logo(c.accent, c.warm, 40)}
        <div style={{ fontSize: 20, fontWeight: 800, color: c.text, marginTop: 4 }}>Grödguiden</div>
        <div style={{ fontSize: 11, color: c.textMuted }}>Allt du behöver veta – en gröda i taget</div>
      </div>

      {/* Category toggle */}
      <div style={{ display: "flex", gap: 0, marginBottom: 12, background: c.card, borderRadius: 14, border: `1px solid ${c.border}`, overflow: "hidden" }}>
        {[
          { label: "Grönsaker", icon: Icons.vegetable(c.accent, 18), color: c.accent, active: true },
          { label: "Bär", icon: Icons.berry(c.berry, 18), color: c.berry },
          { label: "Kryddor", icon: Icons.herb(c.herb, 18), color: c.herb },
        ].map((cat, i) => (
          <div key={i} style={{
            flex: 1, padding: "10px 6px", textAlign: "center", cursor: "pointer",
            background: cat.active ? cat.color : "transparent",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
          }}>
            {cat.active ? Icons.vegetable("#fff", 18) : cat.icon}
            <span style={{ fontSize: 11, fontWeight: 700, color: cat.active ? "#fff" : c.textMuted }}>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Crop card */}
      {[
        { name: "Morot", family: "Apiaceae", diff: "Enkel", diffColor: c.accentLight, icon: "🥕" },
        { name: "Tomat", family: "Solanaceae", diff: "Medel", diffColor: c.warmLight, icon: "🍅" },
      ].map((crop, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
          background: c.card, border: `1px solid ${c.border}`, borderRadius: 14, marginBottom: 6,
        }}>
          <span style={{ fontSize: 28 }}>{crop.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{crop.name}</div>
            <div style={{ fontSize: 11, color: c.textMuted }}>{crop.family} · {crop.diff}</div>
          </div>
          <span style={{ fontSize: 14, color: c.textMuted }}>→</span>
        </div>
      ))}

      {/* Section preview */}
      <div style={{ background: c.card, borderRadius: 14, padding: 14, marginTop: 10, border: `1px solid ${c.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          {Icons.sun(c.warm, 20)}
          <span style={{ fontSize: 13, fontWeight: 700, color: c.text }}>Trivs bäst</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            { icon: Icons.sun(c.warm, 16), label: "Sol", value: "Full sol" },
            { icon: Icons.water("#4A7A8A", 16), label: "Vatten", value: "Medel" },
          ].map((item, i) => (
            <div key={i} style={{ background: c.bg, borderRadius: 10, padding: "8px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                {item.icon}
                <span style={{ fontSize: 10, color: c.textMuted }}>{item.label}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: c.text }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <span style={{ fontSize: 10, color: c.textMuted, fontStyle: "italic" }}>Palett: {paletteName}</span>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// MAIN DESIGN GUIDE
// ═══════════════════════════════════════
export default function DesignGuide() {
  const [selectedPalette, setSelectedPalette] = useState("jord");
  const palette = PALETTES[selectedPalette];

  return (
    <div style={{
      maxWidth: 900, margin: "0 auto", padding: "32px 20px 60px",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "#FAFAF7", minHeight: "100vh",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        {Icons.logo("#3D6B4F", "#C4956A", 56)}
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#2C3028", margin: "12px 0 4px" }}>
          Grödguiden Designguide
        </h1>
        <p style={{ fontSize: 15, color: "#7A7568", margin: 0 }}>
          Visuell identitet, färgpalett och ikonstil
        </p>
      </div>

      {/* ── DESIGN PHILOSOPHY ── */}
      <SectionHeader subtitle="Grundprinciperna bakom det visuella">Designfilosofi</SectionHeader>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
        {[
          { title: "Jordnära", text: "Färger hämtade från naturen – mörk skog, varm lera, solbränd jord. Ingen neongrön \"tech-känsla\"." },
          { title: "Varm & inbjudande", text: "Samma tonalitet som texterna – som att öppna en odlingsbok med vackra illustrationer." },
          { title: "Tydlig men inte skrikig", text: "Kontrast utan att skrika. Informationen ska synas – men designen ska inte konkurrera med innehållet." },
          { title: "Kategorierna har egna färger", text: "Grönt för grönsaker, lila/rödbrunt för bär, olivgrönt/guld för kryddor. Omedelbar igenkänning." },
        ].map((item, i) => (
          <div key={i} style={{
            background: "#FEFDFB", borderRadius: 16, padding: "18px 16px",
            border: "1px solid #E2DDD4",
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#2C3028", marginBottom: 6 }}>{item.title}</div>
            <div style={{ fontSize: 12, color: "#7A7568", lineHeight: 1.6 }}>{item.text}</div>
          </div>
        ))}
      </div>

      {/* ── PALETTE SELECTOR ── */}
      <SectionHeader subtitle="Tre förslag – klicka för att jämföra. Alla bygger på jord/natur men med olika temperatur.">
        Färgpaletter
      </SectionHeader>

      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {Object.entries(PALETTES).map(([key, p]) => (
          <button key={key} onClick={() => setSelectedPalette(key)} style={{
            padding: "10px 20px", borderRadius: 14, border: "none", cursor: "pointer",
            background: selectedPalette === key ? p.colors.accent : "#FEFDFB",
            color: selectedPalette === key ? "#fff" : "#2C3028",
            fontSize: 14, fontWeight: 700,
            boxShadow: selectedPalette === key ? "0 2px 12px rgba(0,0,0,0.15)" : "0 0 0 1px #E2DDD4",
            transition: "all 0.2s",
          }}>
            {p.name}
          </button>
        ))}
      </div>

      <div style={{
        background: "#FEFDFB", borderRadius: 20, padding: 24, marginBottom: 20,
        border: "1px solid #E2DDD4",
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#2C3028", marginBottom: 4 }}>{palette.name}</div>
        <div style={{ fontSize: 13, color: "#7A7568", marginBottom: 20, lineHeight: 1.5 }}>{palette.description}</div>

        {/* Primary colors */}
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          Primära
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
          <Swatch name="Accent" hex={palette.colors.accent} large />
          <Swatch name="Accent ljus" hex={palette.colors.accentLight} large />
          <Swatch name="Accent mörk" hex={palette.colors.accentDark} large />
          <Swatch name="Varm" hex={palette.colors.warm} large />
          <Swatch name="Varm ljus" hex={palette.colors.warmLight} large />
          <Swatch name="Jord" hex={palette.colors.earth} large />
        </div>

        {/* Category colors */}
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          Kategorifärger
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
          <Swatch name="Grönsaker" hex={palette.colors.accent} large />
          <Swatch name="Bär" hex={palette.colors.berry} large />
          <Swatch name="Bär ljus" hex={palette.colors.berryLight} large />
          <Swatch name="Kryddor" hex={palette.colors.herb} large />
          <Swatch name="Kryddor ljus" hex={palette.colors.herbLight} large />
        </div>

        {/* UI colors */}
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          UI & Text
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Swatch name="Bakgrund" hex={palette.colors.bg} />
          <Swatch name="Kort" hex={palette.colors.card} />
          <Swatch name="Text" hex={palette.colors.text} />
          <Swatch name="Text dämpad" hex={palette.colors.textMuted} />
          <Swatch name="Ram" hex={palette.colors.border} />
          <Swatch name="Varning" hex={palette.colors.danger} />
          <Swatch name="Varning ljus" hex={palette.colors.dangerLight} />
        </div>
      </div>

      {/* ── ICON SYSTEM ── */}
      <SectionHeader subtitle="Handritad känsla, tunna linjer, mjuka former. Samma stil genomgående – aldrig emoji i produktionen.">
        Ikonstil
      </SectionHeader>

      <div style={{
        background: "#FEFDFB", borderRadius: 20, padding: 24, marginBottom: 20,
        border: "1px solid #E2DDD4",
      }}>
        <div style={{ fontSize: 13, color: "#7A7568", marginBottom: 16, lineHeight: 1.6 }}>
          Ikonerna ska kännas som enkla blyertsskisser i en odlingsdagbok – inte som sterila tech-ikoner.
          Tunna linjer (1.8px), avrundade hörn, subtila fyllningar med opacity. Varje kategori har sin färg.
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          Kategorier
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
          <IconCard icon={Icons.vegetable(palette.colors.accent, 32)} label="Grönsaker" sublabel="Accent" />
          <IconCard icon={Icons.berry(palette.colors.berry, 32)} label="Bär" sublabel="Berry" />
          <IconCard icon={Icons.herb(palette.colors.herb, 32)} label="Kryddor" sublabel="Herb" />
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          Sektionsikoner
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
          <IconCard icon={Icons.sun(palette.colors.warm, 32)} label="Trivs bäst" />
          <IconCard icon={Icons.water("#4A7A8A", 32)} label="Vattning" />
          <IconCard icon={Icons.soil(palette.colors.earth, 32)} label="Jord & pH" />
          <IconCard icon={Icons.scissors(palette.colors.accent, 32)} label="Beskärning" />
          <IconCard icon={Icons.seed(palette.colors.earth, 32)} label="Frö & Sådd" />
          <IconCard icon={Icons.calendar(palette.colors.accent, 32)} label="Tidslinje" />
          <IconCard icon={Icons.zone(palette.colors.accent, 32)} label="Zon" />
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          Logo
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ background: palette.colors.bg, borderRadius: 20, padding: 20, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${palette.colors.border}` }}>
            {Icons.logo(palette.colors.accent, palette.colors.warm, 48)}
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.colors.text }}>Grödguiden</div>
              <div style={{ fontSize: 11, color: palette.colors.textMuted }}>Allt du behöver veta – en gröda i taget</div>
            </div>
          </div>
          <div style={{ background: palette.colors.accent, borderRadius: 20, padding: 20, display: "flex", alignItems: "center", gap: 12 }}>
            {Icons.logo("#fff", palette.colors.warmLight, 48)}
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Grödguiden</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Allt du behöver veta – en gröda i taget</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIVE PREVIEW ── */}
      <SectionHeader subtitle="Så här ser appen ut med den valda paletten – jämför genom att byta palett ovan.">
        App-förhandsvisning
      </SectionHeader>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
        <AppPreview palette={palette.colors} paletteName={palette.name} />
      </div>

      {/* ── TYPOGRAPHY ── */}
      <SectionHeader subtitle="Fraunces för rubriker, Lora för brödtext. Organiskt, bokaktigt, varmt.">
        Typografi
      </SectionHeader>

      {/* Google Fonts loader */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />

      {/* Font pairing overview */}
      <div style={{
        background: "#FEFDFB", borderRadius: 20, padding: 28, marginBottom: 16,
        border: "1px solid #E2DDD4",
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
          Typsnittskombination
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
          <div style={{ background: palette.colors.bg, borderRadius: 16, padding: 20, border: `1px solid ${palette.colors.border}` }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: palette.colors.textMuted, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Rubriker</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 800, color: palette.colors.text, lineHeight: 1.2, marginBottom: 8 }}>Fraunces</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 400, color: palette.colors.textMuted, lineHeight: 1.5 }}>
              Organisk serif med mjuka kurvor och lekfull karaktär. Variabel font med "wonky"-axel som ger handgjord känsla.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Google Fonts", "Gratis", "Variabel"].map(tag => (
                <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: palette.colors.accentLight, color: palette.colors.accentDark || palette.colors.accent }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: palette.colors.bg, borderRadius: 16, padding: 20, border: `1px solid ${palette.colors.border}` }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: palette.colors.textMuted, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Brödtext</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: palette.colors.text, lineHeight: 1.2, marginBottom: 8 }}>Lora</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, fontWeight: 400, color: palette.colors.textMuted, lineHeight: 1.5 }}>
              Elegant och lättläst serif med bokaktig känsla. Perfekt för längre texter – som att läsa en fin trädgårdsbok.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Google Fonts", "Gratis", "Kursiv ingår"].map(tag => (
                <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: palette.colors.warmLight, color: palette.colors.warmDark || palette.colors.warm }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Why this pairing */}
        <div style={{
          background: `linear-gradient(135deg, ${palette.colors.accentLight}44, ${palette.colors.warmLight}66)`,
          borderRadius: 14, padding: "16px 20px", marginBottom: 24, border: `1px solid ${palette.colors.border}`,
        }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: palette.colors.text, marginBottom: 4 }}>
            Varför just Fraunces + Lora?
          </div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: palette.colors.text, lineHeight: 1.7 }}>
            Fraunces har en organisk, nästan botanisk karaktär som matchar vår "kompis vid trädgårdsbordet"-ton.
            Lora är klassisk och pålitlig utan att kännas stel – som en bra trädgårdsbok du aldrig vill lägga ner.
            Tillsammans skapar de en känsla av handgjord kvalitet utan att tappa läsbarhet.
          </div>
        </div>

        {/* Type scale */}
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>
          Typografisk skala
        </div>
        {[
          { label: "H1 – Sidtitel", family: "'Fraunces', serif", size: 28, weight: 800, color: palette.colors.text, example: "Morot" },
          { label: "H2 – Sektionstitel", family: "'Fraunces', serif", size: 18, weight: 700, color: palette.colors.text, example: "Trivs bäst" },
          { label: "H3 – Underrubrik", family: "'Fraunces', serif", size: 15, weight: 600, color: palette.colors.text, example: "Sådd & förkultivering" },
          { label: "Body – Brödtext", family: "'Lora', serif", size: 14, weight: 400, color: palette.colors.text, example: "Morötter blir faktiskt sötare efter en lätt frost! Du kan lämna dem i jorden långt in på hösten." },
          { label: "Body kursiv – Citat/tips", family: "'Lora', serif", size: 14, weight: 400, color: palette.colors.textMuted, example: "Hon älskar att stå varmt och skyddat – gärna intill en södervägg.", italic: true },
          { label: "Small – Metadata", family: "'Lora', serif", size: 12, weight: 400, color: palette.colors.textMuted, example: "Apiaceae (Flockblommiga) · Enkel" },
          { label: "Badge – Etikett", family: "system-ui, sans-serif", size: 12, weight: 600, color: palette.colors.accent, example: "Odlingszon 4" },
          { label: "Data – Siffror", family: "'Fraunces', serif", size: 24, weight: 700, color: palette.colors.accent, example: "4.2–8.0 kg" },
        ].map((t, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "baseline", gap: 16, padding: "14px 0",
            borderBottom: i < 7 ? `1px solid ${palette.colors.border}` : "none",
          }}>
            <div style={{ minWidth: 150, fontSize: 11, color: "#7A7568", fontWeight: 600 }}>{t.label}</div>
            <div style={{ fontFamily: t.family, fontSize: t.size, fontWeight: t.weight, color: t.color, lineHeight: 1.5, fontStyle: t.italic ? "italic" : "normal" }}>{t.example}</div>
          </div>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>
        Jämförelse: System-font vs Fraunces + Lora
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {/* System font version */}
        <div style={{
          background: "#FEFDFB", borderRadius: 20, padding: 24,
          border: "1px solid #E2DDD4",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: "#aaa", display: "inline-block", padding: "2px 8px", borderRadius: 6, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>System-font</div>
          <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.colors.text, marginBottom: 4 }}>Morot</div>
            <div style={{ fontSize: 11, color: palette.colors.textMuted, marginBottom: 12 }}>Apiaceae (Flockblommiga) · Enkel</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: palette.colors.text, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              {Icons.sun(palette.colors.warm, 18)} Trivs bäst
            </div>
            <div style={{ fontSize: 13, color: palette.colors.text, lineHeight: 1.7, marginBottom: 12 }}>
              Morötter blir faktiskt sötare efter en lätt frost! Du kan lämna dem i jorden långt in på hösten – bara lägg lite extra halm över så jorden inte fryser till helt.
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: palette.colors.text, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              {Icons.seed(palette.colors.earth, 18)} Sådd
            </div>
            <div style={{ fontSize: 13, color: palette.colors.text, lineHeight: 1.7 }}>
              Så direkt ute i maj. Moroten är lite av en diva när det gäller jordkvalitet – hon vill ha det fint, djupt och stensfritt.
            </div>
          </div>
        </div>
        {/* Fraunces + Lora version */}
        <div style={{
          background: "#FEFDFB", borderRadius: 20, padding: 24,
          border: `2px solid ${palette.colors.accent}`,
          boxShadow: `0 0 0 4px ${palette.colors.accentLight}44`,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: palette.colors.accent, display: "inline-block", padding: "2px 8px", borderRadius: 6, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Fraunces + Lora ★</div>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 800, color: palette.colors.text, marginBottom: 4 }}>Morot</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 11, color: palette.colors.textMuted, marginBottom: 12 }}>Apiaceae (Flockblommiga) · Enkel</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: palette.colors.text, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              {Icons.sun(palette.colors.warm, 18)} Trivs bäst
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: palette.colors.text, lineHeight: 1.7, marginBottom: 12 }}>
              Morötter blir faktiskt sötare efter en lätt frost! Du kan lämna dem i jorden långt in på hösten – bara lägg lite extra halm över så jorden inte fryser till helt.
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: palette.colors.text, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              {Icons.seed(palette.colors.earth, 18)} Sådd
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: palette.colors.text, lineHeight: 1.7 }}>
              Så direkt ute i maj. Moroten är lite av en diva när det gäller jordkvalitet – hon vill ha det fint, djupt och stensfritt.
            </div>
          </div>
        </div>
      </div>

      {/* Alternative fonts */}
      <div style={{
        background: "#FEFDFB", borderRadius: 20, padding: 24,
        border: "1px solid #E2DDD4",
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#7A7568", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
          Alternativa typsnitt (om Fraunces + Lora inte passar)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { name: "DM Serif Display", role: "Rubriker", desc: "Enklare, mer klassisk serif. Mindre lekfull men elegant." },
            { name: "Source Serif 4", role: "Brödtext", desc: "Modern serif med bra läsbarhet. Lite mer neutral än Lora." },
            { name: "Newsreader", role: "Brödtext", desc: "Tidningskänsla – professionell och tydlig. Bra kursiv." },
          ].map((f, i) => (
            <div key={i} style={{ background: palette.colors.bg, borderRadius: 14, padding: "14px 16px", border: `1px solid ${palette.colors.border}` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: palette.colors.text, marginBottom: 2 }}>{f.name}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: palette.colors.accent, marginBottom: 6, textTransform: "uppercase" }}>{f.role}</div>
              <div style={{ fontSize: 12, color: palette.colors.textMuted, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RECOMMENDATION ── */}
      <SectionHeader>Rekommendation</SectionHeader>
      <div style={{
        background: palette.colors.accentDark || palette.colors.accent,
        borderRadius: 20, padding: 28, color: "#fff",
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Vi rekommenderar: Jord & Grönska</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
          Den varma, jordnära paletten passar bäst med appens tonalitet – "kompisen vid trädgårdsbordet".
          Den är tillräckligt mörk för bra kontrast, tillräckligt varm för att kännas inbjudande, och
          kategorifärgerna (grönt / lila / oliv) skapar tydlig igenkänning utan att bråka med varandra.
          Nordisk Skog är ett starkt alternativ om vi vill ha en mer "premium" känsla.
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "40px 0 0", color: "#7A7568", fontSize: 12 }}>
        Grödguiden Designguide · v1.0 · Februari 2026
      </div>
    </div>
  );
}
