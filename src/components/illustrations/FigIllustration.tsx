// Fikon - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt

interface SizeProps {
  size?: number
}

export function FigIllustration({ size = 200 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Stjälk */}
      <path d="M100 35c0 15 2 25 0 40" stroke="#6B4E3D" strokeWidth="2" strokeLinecap="round" />

      {/* Blad (stort, flikigt fikonblad) */}
      <path d="M95 40c-20-8-30-2-35 8 5 8 15 12 30 5" fill="#3D6B4F" opacity="0.12" />
      <path d="M95 40c-20-8-30-2-35 8 5 8 15 12 30 5" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 40c20-8 30-2 35 8-5 8-15 12-30 5" fill="#3D6B4F" opacity="0.12" />
      <path d="M105 40c20-8 30-2 35 8-5 8-15 12-30 5" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerver */}
      <path d="M92 42c-8-2-16 0-22 4" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M108 42c8-2 16 0 22 4" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Fikonets kropp - droppform/päronform */}
      <path d="M75 95c-5 20-3 40 5 52 8 12 18 18 20 18s12-6 20-18c8-12 10-32 5-52-5-18-15-28-25-28s-20 10-25 28z" fill="#6B4050" opacity="0.15" />
      <path d="M75 95c-5 20-3 40 5 52 8 12 18 18 20 18s12-6 20-18c8-12 10-32 5-52-5-18-15-28-25-28s-20 10-25 28z" stroke="#5A3545" strokeWidth="1.8" strokeLinecap="round" />

      {/* Ljusreflex */}
      <ellipse cx="88" cy="100" rx="8" ry="18" fill="#A07080" opacity="0.2" transform="rotate(-10 88 100)" />
      <ellipse cx="112" cy="110" rx="5" ry="12" fill="#A07080" opacity="0.1" transform="rotate(5 112 110)" />

      {/* Fikonen opening (stjärnformat) i botten */}
      <circle cx="100" cy="158" r="5" stroke="#5A3545" strokeWidth="1" opacity="0.3" />
      <path d="M97 156l3 4 3-4" stroke="#5A3545" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Subtil vertikal fåra */}
      <path d="M100 70c-1 15-1 40 0 60 1 15 1 20 0 30" stroke="#5A3545" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />

      {/* Skugga */}
      <ellipse cx="100" cy="185" rx="35" ry="5" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function FigIcon({ size = 48 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälk */}
      <path d="M24 6c0 4 0 8 0 10" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad */}
      <path d="M23 8c-5-2-9 0-10 3 2 2 5 3 10 1" fill="#3D6B4F" opacity="0.15" />
      <path d="M23 8c-5-2-9 0-10 3 2 2 5 3 10 1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Fikonets kropp */}
      <path d="M17 24c-1 6 0 11 2 14 2 3 4 5 5 5s3-2 5-5c2-3 3-8 2-14-1-5-4-8-7-8s-6 3-7 8z" fill="#6B4050" opacity="0.15" />
      <path d="M17 24c-1 6 0 11 2 14 2 3 4 5 5 5s3-2 5-5c2-3 3-8 2-14-1-5-4-8-7-8s-6 3-7 8z" stroke="#5A3545" strokeWidth="1.8" />

      {/* Ljusreflex */}
      <ellipse cx="21" cy="25" rx="2" ry="5" fill="#A07080" opacity="0.2" />
    </svg>
  )
}
