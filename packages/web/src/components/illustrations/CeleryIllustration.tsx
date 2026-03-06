import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function CeleryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* 1. Bakgrundscirkel - grönsak */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* 2. Blad - toppblad på stjälkarna */}
      {/* Vänster bladgrupp */}
      <path d="M68 38 C62 25, 50 15, 40 12 C38 18, 42 28, 52 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />
      <path d="M72 42 C64 30, 48 22, 38 22 C38 28, 46 36, 58 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" fill="#3D6B4F" fillOpacity="0.08" />

      {/* Centrala blad */}
      <path d="M92 30 C88 16, 82 6, 76 2 C74 8, 78 20, 86 30" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />
      <path d="M100 26 C100 12, 100 4, 100 0 C102 6, 104 16, 104 26" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.08" />
      <path d="M108 30 C112 16, 118 6, 124 2 C126 8, 122 20, 114 30" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />

      {/* Höger bladgrupp */}
      <path d="M132 38 C138 25, 150 15, 160 12 C162 18, 158 28, 148 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />
      <path d="M128 42 C136 30, 152 22, 162 22 C162 28, 154 36, 142 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" fill="#3D6B4F" fillOpacity="0.08" />

      {/* Små bladflikar högre upp */}
      <path d="M84 24 C78 14, 68 8, 58 8" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M116 24 C122 14, 132 8, 142 8" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />

      {/* 3. Stjälkar - sellerins karaktäristiska ribbade stjälkar */}
      {/* Vänster yttre stjälk */}
      <path
        d="M64 55 C60 70, 58 100, 56 130 C54 155, 55 170, 56 182"
        fill="#8BB870"
        opacity="0.15"
        stroke="#5A8A4A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M76 52 C72 70, 70 100, 68 130 C66 155, 67 170, 68 182"
        fill="#8BB870"
        opacity="0.15"
        stroke="#5A8A4A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Centrala stjälkar (ljusare - inre stjälkar) */}
      <path
        d="M86 48 C84 70, 82 100, 80 130 C79 155, 79 170, 80 182"
        fill="#B5D8A0"
        opacity="0.18"
        stroke="#6A9A58"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M96 44 C95 65, 93 100, 92 130 C91 155, 91 170, 92 182"
        fill="#C4E0B0"
        opacity="0.18"
        stroke="#6A9A58"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M104 44 C105 65, 107 100, 108 130 C109 155, 109 170, 108 182"
        fill="#C4E0B0"
        opacity="0.18"
        stroke="#6A9A58"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M114 48 C116 70, 118 100, 120 130 C121 155, 121 170, 120 182"
        fill="#B5D8A0"
        opacity="0.18"
        stroke="#6A9A58"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Höger yttre stjälk */}
      <path
        d="M124 52 C128 70, 130 100, 132 130 C134 155, 133 170, 132 182"
        fill="#8BB870"
        opacity="0.15"
        stroke="#5A8A4A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M136 55 C140 70, 142 100, 144 130 C146 155, 145 170, 144 182"
        fill="#8BB870"
        opacity="0.15"
        stroke="#5A8A4A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 4. Ribbor/textur i stjälkarna - vertikala ränder */}
      <path d="M62 80 L58 160" stroke="#5A8A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M74 78 L70 160" stroke="#5A8A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M84 72 L82 160" stroke="#6A9A58" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M95 66 L93 160" stroke="#6A9A58" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M105 66 L107 160" stroke="#6A9A58" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M116 72 L118 160" stroke="#6A9A58" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M126 78 L130 160" stroke="#5A8A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M138 80 L142 160" stroke="#5A8A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* 5. Ljusreflex - ger volym på centrala stjälkar */}
      <path d="M98 60 C97 90, 96 130, 95 165" stroke="#D4ECC4" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
      <path d="M108 60 C109 90, 110 130, 111 165" stroke="#D4ECC4" strokeWidth="2.5" strokeLinecap="round" opacity="0.18" />

      {/* 6. Bas - stjälkarna möts vid basen */}
      <path d="M56 182 C70 186, 90 188, 100 188 C110 188, 130 186, 144 182" stroke="#5A8A4A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Liten rotbas */}
      <path d="M94 188 C96 192, 98 195, 100 197" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M106 188 C104 192, 102 195, 100 197" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />

      {/* Tunna rothår */}
      <path d="M96 194 Q90 196 86 194" stroke="#8B7355" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      <path d="M104 194 Q110 196 114 194" stroke="#8B7355" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* 7. Markskugga */}
      <ellipse cx="100" cy="192" rx="40" ry="5" fill={colors.earth} opacity="0.08" />
    </svg>
  )
}

export function CeleryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Blad - förenklat */}
      <path d="M16 12 C14 6, 10 3, 7 2 C7 5, 10 9, 14 12" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />
      <path d="M24 8 C24 3, 24 1, 24 0 C25 2, 26 5, 26 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 12 C34 6, 38 3, 41 2 C41 5, 38 9, 34 12" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="#3D6B4F" fillOpacity="0.10" />

      {/* Stjälkar - förenklat till 4 stjälkar */}
      {/* Vänster yttre */}
      <path d="M14 14 C13 22, 12 32, 12 44" fill="#8BB870" opacity="0.18" stroke="#5A8A4A" strokeWidth="1.8" strokeLinecap="round" />
      {/* Vänster inre */}
      <path d="M20 12 C19 22, 19 32, 18 44" fill="#B5D8A0" opacity="0.18" stroke="#6A9A58" strokeWidth="1.8" strokeLinecap="round" />
      {/* Höger inre */}
      <path d="M28 12 C29 22, 29 32, 30 44" fill="#B5D8A0" opacity="0.18" stroke="#6A9A58" strokeWidth="1.8" strokeLinecap="round" />
      {/* Höger yttre */}
      <path d="M34 14 C35 22, 36 32, 36 44" fill="#8BB870" opacity="0.18" stroke="#5A8A4A" strokeWidth="1.8" strokeLinecap="round" />

      {/* Texturlinjer i stjälkarna */}
      <path d="M15 20 L13 40" stroke="#5A8A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" />
      <path d="M21 18 L19 40" stroke="#6A9A58" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <path d="M29 18 L30 40" stroke="#6A9A58" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <path d="M35 20 L36 40" stroke="#5A8A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" />
    </svg>
  )
}
