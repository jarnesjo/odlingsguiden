// Körsbär - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt

interface SizeProps {
  size?: number
}

export function CherryIllustration({ size = 200 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Stjälkar (Y-form, två körsbär) */}
      <path d="M100 30c-3 20-12 35-25 50" stroke="#6B4E3D" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 30c3 20 12 35 25 50" stroke="#6B4E3D" strokeWidth="2" strokeLinecap="round" />

      {/* Blad vid stjälkdelningen */}
      <path d="M100 35c-6-4-14-5-20-2 2 6 10 9 20 2z" fill="#3D6B4F" opacity="0.15" />
      <path d="M100 35c-6-4-14-5-20-2 2 6 10 9 20 2z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerv */}
      <path d="M96 34c-3-1-7-1-12 0" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Andra blad */}
      <path d="M100 35c6-4 14-5 20-2-2 6-10 9-20 2z" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 35c6-4 14-5 20-2-2 6-10 9-20 2z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Vänster körsbär - huvudkropp */}
      <circle cx="72" cy="105" r="32" fill="#8B2040" opacity="0.15" />
      <circle cx="72" cy="105" r="32" stroke="#7A1A35" strokeWidth="1.8" strokeLinecap="round" />

      {/* Vänster körsbär - ljusreflex */}
      <ellipse cx="60" cy="95" rx="8" ry="10" fill="#D08090" opacity="0.2" transform="rotate(-15 60 95)" />
      <ellipse cx="80" cy="100" rx="4" ry="7" fill="#D08090" opacity="0.1" transform="rotate(10 80 100)" />

      {/* Vänster körsbär - mittfåra (subtil) */}
      <path d="M72 73c-1 8-1 24 0 32 1 10 1 18 0 32" stroke="#7A1A35" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

      {/* Höger körsbär - huvudkropp */}
      <circle cx="128" cy="105" r="32" fill="#8B2040" opacity="0.15" />
      <circle cx="128" cy="105" r="32" stroke="#7A1A35" strokeWidth="1.8" strokeLinecap="round" />

      {/* Höger körsbär - ljusreflex */}
      <ellipse cx="118" cy="95" rx="8" ry="10" fill="#D08090" opacity="0.2" transform="rotate(-10 118 95)" />
      <ellipse cx="136" cy="100" rx="4" ry="7" fill="#D08090" opacity="0.1" transform="rotate(5 136 100)" />

      {/* Höger körsbär - mittfåra */}
      <path d="M128 73c-1 8-1 24 0 32 1 10 1 18 0 32" stroke="#7A1A35" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

      {/* Körsbärens mörkare underdel */}
      <path d="M52 115c8 14 28 22 40 22" stroke="#6B1530" strokeWidth="0.7" strokeLinecap="round" opacity="0.12" />
      <path d="M108 115c8 14 28 22 40 22" stroke="#6B1530" strokeWidth="0.7" strokeLinecap="round" opacity="0.12" />

      {/* Blomfäste (botten) */}
      <circle cx="72" cy="135" r="3" stroke="#6B4E3D" strokeWidth="1" opacity="0.25" />
      <circle cx="128" cy="135" r="3" stroke="#6B4E3D" strokeWidth="1" opacity="0.25" />

      {/* Skugga */}
      <ellipse cx="100" cy="185" rx="45" ry="5" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function CherryIcon({ size = 48 }: SizeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälkar (Y-form) */}
      <path d="M24 6c-1 6-4 11-7 15" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 6c1 6 4 11 7 15" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad */}
      <path d="M24 8c-2-2-5-2-7-1 1 2 3 3 7 1z" fill="#3D6B4F" opacity="0.15" />
      <path d="M24 8c-2-2-5-2-7-1 1 2 3 3 7 1z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Vänster körsbär */}
      <circle cx="16" cy="29" r="9" fill="#8B2040" opacity="0.15" />
      <circle cx="16" cy="29" r="9" stroke="#7A1A35" strokeWidth="1.8" />

      {/* Höger körsbär */}
      <circle cx="32" cy="29" r="9" fill="#8B2040" opacity="0.15" />
      <circle cx="32" cy="29" r="9" stroke="#7A1A35" strokeWidth="1.8" />

      {/* Ljusreflex */}
      <ellipse cx="13" cy="26" rx="2" ry="3" fill="#D08090" opacity="0.2" />
      <ellipse cx="29" cy="26" rx="2" ry="3" fill="#D08090" opacity="0.2" />
    </svg>
  )
}
