import { colors } from '../../theme/tokens'

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

      {/* Main cucumber body - elongated, slightly curved */}
      <path d="M76 88 C72 94, 66 108, 62 125 C58 142, 58 158, 64 168 C68 176, 76 180, 86 182 C96 184, 108 182, 116 178 C124 174, 130 166, 132 155 C136 140, 134 120, 128 104 C124 94, 118 86, 112 84 C104 80, 84 82, 76 88Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M76 88 C72 94, 66 108, 62 125 C58 142, 58 158, 64 168 C68 176, 76 180, 86 182 C96 184, 108 182, 116 178 C124 174, 130 166, 132 155 C136 140, 134 120, 128 104 C124 94, 118 86, 112 84 C104 80, 84 82, 76 88" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Cucumber stripes/ridges */}
      <path d="M84 84 C78 98, 72 120, 70 142 C68 158, 72 172, 78 180" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M95 82 C90 98, 86 120, 84 142 C82 158, 84 172, 90 182" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M106 82 C108 98, 110 120, 108 142 C106 158, 104 172, 100 182" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M116 86 C120 98, 124 118, 124 138 C124 155, 122 168, 116 176" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Highlight on cucumber */}
      <path d="M118 90 C122 105, 126 125, 124 148" stroke="#8CAF6E" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />

      {/* Small bumps/texture on skin */}
      <circle cx="80" cy="100" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="110" cy="108" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="76" cy="130" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="118" cy="125" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="85" cy="145" r="1.2" fill="#3D6B4F" opacity="0.15" />
      <circle cx="104" cy="155" r="1" fill="#3D6B4F" opacity="0.12" />
      <circle cx="92" cy="120" r="0.8" fill="#3D6B4F" opacity="0.1" />
      <circle cx="114" cy="145" r="0.8" fill="#3D6B4F" opacity="0.1" />

      {/* Blossom end remnant */}
      <path d="M82 180 C86 184, 92 186, 96 186" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M108 178 C104 184, 98 186, 96 186" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

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

      {/* Cucumber body - slightly curved elongated shape */}
      <path d="M18 14 C16 17, 14 22, 13 28 C12 34, 12 38, 15 42 C17 44, 21 45, 24 45 C27 45, 31 44, 33 42 C36 38, 36 34, 35 28 C34 22, 32 17, 30 14 C28 12, 20 12, 18 14Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M18 14 C16 17, 14 22, 13 28 C12 34, 12 38, 15 42 C17 44, 21 45, 24 45 C27 45, 31 44, 33 42 C36 38, 36 34, 35 28 C34 22, 32 17, 30 14 C28 12, 20 12, 18 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ridges */}
      <path d="M21 13 C19 20, 18 28, 19 38" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M27 13 C29 20, 30 28, 29 38" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Small bumps */}
      <circle cx="20" cy="22" r="0.7" fill="#3D6B4F" opacity="0.15" />
      <circle cx="28" cy="30" r="0.7" fill="#3D6B4F" opacity="0.12" />
      <circle cx="22" cy="35" r="0.7" fill="#3D6B4F" opacity="0.12" />

      {/* Highlight */}
      <path d="M30 17 C31 23, 31 30, 30 37" stroke="#8CAF6E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
