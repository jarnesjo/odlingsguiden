// Plommon - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt

interface SizeProps {
  size?: number
}

export function PlumIllustration({ size = 200 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Stjälk */}
      <path d="M100 52V35" stroke="#6B4E3D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Blad */}
      <path d="M100 38c7-5 17-7 24-3-3 7-12 11-24 3z" fill="#3D6B4F" opacity="0.15" />
      <path d="M100 38c7-5 17-7 24-3-3 7-12 11-24 3z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerv */}
      <path d="M104 37c3-1 8-2 14-1" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Huvudkropp - oval plommonform */}
      <path d="M100 162c-28 0-46-22-46-50 0-28 18-52 46-52s46 24 46 52c0 28-18 50-46 50z" fill="#6B4B7D" opacity="0.12" />
      <path d="M100 162c-28 0-46-22-46-50 0-28 18-52 46-52s46 24 46 52c0 28-18 50-46 50z" stroke="#5A3D6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Mittfåra (plommonets karaktäristiska indelning) */}
      <path d="M100 56c-2 12-3 38-2 55 1 17 2 32 2 50" stroke="#5A3D6B" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />

      {/* Ljusreflex - vänster */}
      <ellipse cx="80" cy="100" rx="12" ry="22" fill="#C4A8D0" opacity="0.18" transform="rotate(-10 80 100)" />

      {/* Ljusreflex - höger, subtil */}
      <ellipse cx="118" cy="105" rx="7" ry="14" fill="#C4A8D0" opacity="0.1" transform="rotate(8 118 105)" />

      {/* Vaxdagg-effekt (karaktäristiskt för plommon) */}
      <ellipse cx="85" cy="85" rx="18" ry="12" fill="#B8A0C8" opacity="0.08" transform="rotate(-5 85 85)" />
      <ellipse cx="112" cy="125" rx="14" ry="10" fill="#B8A0C8" opacity="0.06" transform="rotate(10 112 125)" />

      {/* Texturlinjer - plommonets mjuka kurvor */}
      <path d="M65 80c3 15 2 35-2 50" stroke="#5A3D6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.12" />
      <path d="M135 80c-3 15-2 35 2 50" stroke="#5A3D6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.12" />

      {/* Liten prick som detalj */}
      <circle cx="88" cy="90" r="1.5" fill="#C4A8D0" opacity="0.25" />

      {/* Blomfäste (botten) */}
      <circle cx="100" cy="160" r="2.5" stroke="#6B4E3D" strokeWidth="1" opacity="0.25" />

      {/* Skugga */}
      <ellipse cx="100" cy="185" rx="33" ry="5" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function PlumIcon({ size = 48 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälk */}
      <path d="M24 13V8" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad */}
      <path d="M24 10c3-2 6-2 8-1-1 3-4 4-8 1z" fill="#3D6B4F" opacity="0.15" />
      <path d="M24 10c3-2 6-2 8-1-1 3-4 4-8 1z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Plommonkropp (oval) */}
      <path d="M24 41c-8 0-13-7-13-15 0-8 5-15 13-15s13 7 13 15c0 8-5 15-13 15z" fill="#6B4B7D" opacity="0.15" />
      <path d="M24 41c-8 0-13-7-13-15 0-8 5-15 13-15s13 7 13 15c0 8-5 15-13 15z" stroke="#5A3D6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ljusreflex */}
      <ellipse cx="20" cy="24" rx="3" ry="5" fill="#C4A8D0" opacity="0.2" transform="rotate(-8 20 24)" />

      {/* Mittfåra */}
      <path d="M24 13c-1 4-1 12 0 18 0 4 0 7 0 10" stroke="#5A3D6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
