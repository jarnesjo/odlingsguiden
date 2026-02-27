interface Props {
  size?: number
}

export function AsparagusIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - grönsak */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Jord/mark */}
      <ellipse cx="100" cy="172" rx="50" ry="6" fill="#8B7355" opacity="0.12" />
      <path d="M50 172 Q75 168, 100 170 Q125 172, 150 170" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />

      {/* Vänstra sparrisskottet */}
      <path d="M68 170 C68 155, 66 120, 65 90 C64 70, 66 50, 68 35" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M68 170 C68 155, 66 120, 65 90 C64 70, 66 50, 68 35" stroke="#5A7A3F" strokeWidth="6" strokeLinecap="round" opacity="0.08" />
      {/* Fjäll vänster */}
      <path d="M65 140 C60 138, 56 135, 55 132" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M66 120 C72 118, 76 115, 78 112" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M65 100 C60 97, 55 95, 53 92" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M66 80 C71 77, 75 74, 77 71" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M66 60 C62 57, 58 55, 56 52" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Spets vänster */}
      <path d="M68 35 C67 28, 68 22, 70 18" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M68 35 Q66 28, 68 20 Q70 28, 68 35" fill="#5A7A3F" opacity="0.12" />

      {/* Mittensparrisskottet (huvudskott, tjockast) */}
      <path d="M100 170 C100 150, 99 115, 98 80 C97 60, 99 40, 100 22" stroke="#4A6E35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 170 C100 150, 99 115, 98 80 C97 60, 99 40, 100 22" stroke="#4A6E35" strokeWidth="8" strokeLinecap="round" opacity="0.08" />
      {/* Tjockare kropp - kontur */}
      <path d="M96 170 C95 150, 94 115, 94 80 C93 60, 95 40, 97 25" stroke="#4A6E35" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M104 170 C105 150, 104 115, 103 80 C103 60, 102 40, 101 25" stroke="#4A6E35" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      {/* Fjäll mitten */}
      <path d="M99 150 C105 147, 110 144, 113 140" stroke="#4A6E35" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M98 130 C92 127, 87 124, 84 120" stroke="#4A6E35" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M98 110 C104 107, 109 104, 112 100" stroke="#4A6E35" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M98 90 C92 87, 87 84, 85 80" stroke="#4A6E35" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M99 70 C104 67, 108 64, 110 61" stroke="#4A6E35" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M99 50 C94 47, 90 44, 88 41" stroke="#4A6E35" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Spets mitten */}
      <path d="M100 22 C99 15, 100 10, 102 6" stroke="#4A6E35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 22 Q97 14, 100 8 Q103 14, 100 22" fill="#4A6E35" opacity="0.15" />
      {/* Ljusreflex mitten */}
      <ellipse cx="97" cy="100" rx="2" ry="30" fill="#8BAF6A" opacity="0.15" />

      {/* Högra sparrisskottet */}
      <path d="M132 170 C132 158, 133 130, 134 100 C135 80, 133 55, 132 42" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M132 170 C132 158, 133 130, 134 100 C135 80, 133 55, 132 42" stroke="#5A7A3F" strokeWidth="6" strokeLinecap="round" opacity="0.08" />
      {/* Fjäll höger */}
      <path d="M133 145 C127 142, 123 139, 121 136" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M134 125 C139 122, 143 119, 145 116" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M134 105 C128 102, 124 99, 122 96" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M134 85 C139 82, 143 79, 145 76" stroke="#5A7A3F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M133 65 C129 62, 125 59, 123 56" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Spets höger */}
      <path d="M132 42 C132 35, 131 30, 130 26" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M132 42 Q130 34, 131 28 Q134 34, 132 42" fill="#5A7A3F" opacity="0.12" />

      {/* Lila toner på spetsarna (sparristypiskt) */}
      <circle cx="69" cy="22" r="3" fill="#7B5D8A" opacity="0.12" />
      <circle cx="101" cy="10" r="4" fill="#7B5D8A" opacity="0.15" />
      <circle cx="131" cy="30" r="3" fill="#7B5D8A" opacity="0.12" />

      {/* Jorddetaljer */}
      <circle cx="78" cy="174" r="1.5" fill="#8B7355" opacity="0.2" />
      <circle cx="112" cy="175" r="1" fill="#8B7355" opacity="0.18" />
      <circle cx="95" cy="176" r="1.2" fill="#8B7355" opacity="0.15" />

      {/* Skugga */}
      <ellipse cx="100" cy="178" rx="40" ry="4" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function AsparagusIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vänster skott */}
      <path d="M16 42 C16 35, 15 22, 16 10" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 28 C12 26, 10 24, 9 22" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M16 18 C18 16, 20 14, 21 12" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M16 10 Q15 6, 16 4" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Mittenskott (tjockast) */}
      <path d="M24 42 C24 34, 24 20, 24 8" stroke="#4A6E35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 30 C27 28, 29 26, 30 24" stroke="#4A6E35" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M24 20 C21 18, 19 16, 18 14" stroke="#4A6E35" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M24 8 Q23 4, 24 2" stroke="#4A6E35" strokeWidth="1.8" strokeLinecap="round" />
      {/* Lila spets */}
      <circle cx="24" cy="3" r="1.5" fill="#7B5D8A" opacity="0.18" />

      {/* Höger skott */}
      <path d="M32 42 C32 36, 33 25, 32 14" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M33 32 C36 30, 37 28, 38 26" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 22 C30 20, 28 18, 27 17" stroke="#5A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 14 Q33 10, 32 7" stroke="#5A7A3F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Mark */}
      <path d="M8 42 Q24 40, 40 42" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
