import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function CucumberIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Vine/tendril curling from top */}
      <path d="M105 30 C108 26, 114 24, 118 26 C122 28, 120 34, 116 32" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M118 26 C124 22, 130 24, 128 30" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Main stem */}
      <path d="M100 85 C102 72, 104 55, 105 40" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M105 40 C105 36, 105 32, 105 30" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Large leaf left */}
      <path d="M100 55 C88 44, 66 36, 48 40 Q 34 44, 38 56 C42 68, 60 66, 78 58 Q 90 52, 100 55Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 55 C88 44, 66 36, 48 40 Q 34 44, 38 56 C42 68, 60 66, 78 58 Q 90 52, 100 55" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf veins */}
      <path d="M100 55 C84 50, 66 48, 48 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M90 48 C80 52, 68 58, 56 62" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Large leaf right */}
      <path d="M105 45 C118 36, 138 32, 154 38 Q 166 44, 160 54 C154 64, 136 60, 120 52 Q 110 46, 105 45Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M105 45 C118 36, 138 32, 154 38 Q 166 44, 160 54 C154 64, 136 60, 120 52 Q 110 46, 105 45" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M105 45 C122 42, 140 42, 154 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Small flower bud on stem */}
      <path d="M105 40 C110 36, 116 34, 120 32" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M120 32 C122 28, 126 28, 126 32 C126 36, 122 36, 120 32Z" fill="#F5D67B" opacity="0.35" />
      <path d="M120 32 C118 28, 116 26, 118 24" fill="#F5D67B" opacity="0.25" />

      {/* Main cucumber body - long, slim, slightly curved */}
      <path d="M86 82 C82 90, 78 108, 76 128 C74 148, 74 164, 78 174 C80 178, 86 182, 94 184 C102 186, 110 184, 114 180 C118 174, 120 164, 120 144 C120 124, 118 104, 114 92 C112 86, 106 82, 100 80 C94 78, 88 80, 86 82Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M86 82 C82 90, 78 108, 76 128 C74 148, 74 164, 78 174 C80 178, 86 182, 94 184 C102 186, 110 184, 114 180 C118 174, 120 164, 120 144 C120 124, 118 104, 114 92 C112 86, 106 82, 100 80 C94 78, 88 80, 86 82" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Cucumber stripes/ridges */}
      <path d="M90 82 C86 98, 82 120, 80 142 C78 160, 80 172, 84 182" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M100 80 C98 98, 96 120, 96 142 C96 160, 96 172, 98 184" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M110 84 C112 100, 114 120, 114 142 C114 158, 112 170, 110 178" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Highlight on cucumber */}
      <path d="M116 92 C118 110, 118 132, 116 155" stroke="#8CAF6E" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />

      {/* Small bumps/texture on skin */}
      <circle cx="88" cy="100" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="112" cy="110" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="84" cy="135" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="114" cy="130" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="90" cy="155" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="106" cy="160" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="96" cy="120" r="0.8" fill="#3D6B4F" opacity="0.1" />
      <circle cx="108" cy="148" r="0.8" fill="#3D6B4F" opacity="0.1" />

      {/* Blossom end remnant */}
      <path d="M88 182 C92 186, 96 188, 98 188" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M108 180 C104 184, 100 188, 98 188" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="55" cy="185" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="140" cy="186" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="98" cy="192" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function CucumberIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 12 C24 9, 25 6, 25 4" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Leaf */}
      <path d="M25 4 C20 2, 14 3, 13 6 Q 12 9, 15 10 C18 11, 22 8, 25 4Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M25 4 C20 2, 14 3, 13 6 Q 12 9, 15 10 C18 11, 22 8, 25 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Cucumber body - slim, elongated */}
      <path d="M20 13 C18 17, 16 23, 16 30 C16 36, 17 40, 19 43 C21 45, 23 46, 24 46 C25 46, 27 45, 29 43 C31 40, 32 36, 32 30 C32 23, 30 17, 28 13 C26 11, 22 11, 20 13Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M20 13 C18 17, 16 23, 16 30 C16 36, 17 40, 19 43 C21 45, 23 46, 24 46 C25 46, 27 45, 29 43 C31 40, 32 36, 32 30 C32 23, 30 17, 28 13 C26 11, 22 11, 20 13" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ridges */}
      <path d="M22 12 C20 20, 19 30, 20 40" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M26 12 C28 20, 29 30, 28 40" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Small bumps */}
      <circle cx="20" cy="22" r="0.7" fill="#3D6B4F" opacity="0.15" />
      <circle cx="28" cy="30" r="0.7" fill="#3D6B4F" opacity="0.12" />
      <circle cx="21" cy="35" r="0.7" fill="#3D6B4F" opacity="0.12" />

      {/* Highlight */}
      <path d="M30 16 C30 24, 30 32, 29 40" stroke="#8CAF6E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
