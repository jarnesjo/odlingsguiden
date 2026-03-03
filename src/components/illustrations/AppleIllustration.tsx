// Äpple - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt

interface SizeProps {
  size?: number
}

export function AppleIllustration({ size = 200 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Stjälk */}
      <path d="M100 52V36" stroke="#6B4E3D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Blad */}
      <path d="M100 40c8-6 20-8 28-4-4 8-14 12-28 4z" fill="#3D6B4F" opacity="0.15" />
      <path d="M100 40c8-6 20-8 28-4-4 8-14 12-28 4z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerv */}
      <path d="M104 39c4-2 10-3 16-2" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Huvudkropp - äpple */}
      <path d="M100 160c-30 0-52-22-52-50 0-22 12-38 24-46 6-4 12-7 18-8a16 16 0 0120 0c6 1 12 4 18 8 12 8 24 24 24 46 0 28-22 50-52 50z" fill="#C0392B" opacity="0.15" />
      <path d="M100 160c-30 0-52-22-52-50 0-22 12-38 24-46 6-4 12-7 18-8a16 16 0 0120 0c6 1 12 4 18 8 12 8 24 24 24 46 0 28-22 50-52 50z" stroke="#A0302B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Mittlinje (äpplets karaktäristiska indelning) */}
      <path d="M100 56v104" stroke="#A0302B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

      {/* Ljusreflex - vänster */}
      <ellipse cx="78" cy="95" rx="12" ry="20" fill="#E8C4B0" opacity="0.2" transform="rotate(-15 78 95)" />

      {/* Ljusreflex - höger, subtil */}
      <ellipse cx="118" cy="100" rx="8" ry="14" fill="#E8C4B0" opacity="0.12" transform="rotate(10 118 100)" />

      {/* Rödare yta (solsida) */}
      <path d="M115 70c15 10 25 28 25 42 0 15-8 30-22 40" stroke="#A0302B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Texturlinjer - subtila kurvor */}
      <path d="M65 85c5 15 5 35 0 50" stroke="#A0302B" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M135 85c-5 15-5 35 0 50" stroke="#A0302B" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

      {/* Blomfäste (botten) */}
      <circle cx="100" cy="157" r="3" stroke="#6B4E3D" strokeWidth="1.2" opacity="0.3" />
      <path d="M97 157h6" stroke="#6B4E3D" strokeWidth="0.8" opacity="0.3" />

      {/* Liten droppe/prick som detalj */}
      <circle cx="112" cy="85" r="1.5" fill="#E8C4B0" opacity="0.3" />

      {/* Skugga */}
      <ellipse cx="100" cy="185" rx="35" ry="5" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function AppleIcon({ size = 48 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälk */}
      <path d="M24 13V8" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad */}
      <path d="M24 10c3-2 7-3 10-1-2 3-5 4-10 1z" fill="#3D6B4F" opacity="0.15" />
      <path d="M24 10c3-2 7-3 10-1-2 3-5 4-10 1z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Äpplekropp */}
      <path d="M24 40c-9 0-15-7-15-15 0-6 3.5-11 7-13.5 1.5-1 3-1.5 4.5-2a5 5 0 017 0c1.5.5 3 1 4.5 2 3.5 2.5 7 7.5 7 13.5 0 8-6 15-15 15z" fill="#C0392B" opacity="0.18" />
      <path d="M24 40c-9 0-15-7-15-15 0-6 3.5-11 7-13.5 1.5-1 3-1.5 4.5-2a5 5 0 017 0c1.5.5 3 1 4.5 2 3.5 2.5 7 7.5 7 13.5 0 8-6 15-15 15z" stroke="#A0302B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ljusreflex */}
      <ellipse cx="19" cy="23" rx="3" ry="5" fill="#E8C4B0" opacity="0.2" transform="rotate(-10 19 23)" />

      {/* Mittlinje */}
      <path d="M24 14v26" stroke="#A0302B" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
