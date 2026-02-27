import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function PeaIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Stem */}
      <path d="M90 170 C88 150, 85 130, 88 110 C91 90, 95 75, 100 60" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 60 C102 50, 105 42, 110 35" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Tendrils */}
      <path d="M110 35 C115 30, 120 28, 125 30 C130 32, 128 36, 124 34 C120 32, 118 35, 122 38" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M95 72 C88 65, 82 60, 76 58 C70 56, 68 60, 72 62 C76 64, 74 67, 70 66" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Upper leaf pair */}
      <path d="M100 60 C94 52, 80 48, 72 50 C64 52, 66 60, 74 58 C82 56, 92 58, 100 60Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 60 C94 52, 80 48, 72 50 C64 52, 66 60, 74 58 C82 56, 92 58, 100 60" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M100 60 C106 52, 120 48, 128 50 C136 52, 134 60, 126 58 C118 56, 108 58, 100 60Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 60 C106 52, 120 48, 128 50 C136 52, 134 60, 126 58 C118 56, 108 58, 100 60" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Middle leaf */}
      <path d="M88 110 C80 104, 66 102, 58 106 C50 110, 54 118, 62 115 C70 112, 82 112, 88 110Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M88 110 C80 104, 66 102, 58 106 C50 110, 54 118, 62 115 C70 112, 82 112, 88 110" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Leaf vein */}
      <path d="M88 110 C80 108, 68 108, 60 110" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Main pea pod - large, curved */}
      <path d="M92 80 C86 82, 80 90, 78 100 C76 110, 78 125, 84 135 C88 142, 94 146, 100 145 C106 144, 112 138, 116 130 C122 118, 124 105, 120 95 C116 85, 108 78, 100 78 Z" fill="#6B8E4E" opacity="0.15" />
      <path d="M92 80 C86 82, 80 90, 78 100 C76 110, 78 125, 84 135 C88 142, 94 146, 100 145 C106 144, 112 138, 116 130 C122 118, 124 105, 120 95 C116 85, 108 78, 100 78" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Pod seam line */}
      <path d="M96 80 C90 90, 86 105, 86 115 C86 125, 88 135, 92 143" stroke="#4A7A3D" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Peas visible through pod - subtle bumps */}
      <circle cx="93" cy="96" r="8" fill="#6B8E4E" opacity="0.12" />
      <circle cx="93" cy="96" r="8" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="96" cy="113" r="9" fill="#6B8E4E" opacity="0.12" />
      <circle cx="96" cy="113" r="9" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="97" cy="130" r="8" fill="#6B8E4E" opacity="0.12" />
      <circle cx="97" cy="130" r="8" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Pod highlight */}
      <path d="M106 85 C108 95, 108 110, 106 125" stroke="#8CAF6E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Small flower at top */}
      <path d="M108 40 C112 36, 118 35, 120 38 C122 41, 118 44, 114 42 C110 40, 108 40, 108 40Z" fill="#E8D5E0" opacity="0.4" />
      <path d="M108 40 C112 36, 118 35, 120 38 C122 41, 118 44, 114 42" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Ground dots */}
      <circle cx="78" cy="172" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="102" cy="175" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="115" cy="170" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function PeaIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M20 40 C19 34, 18 28, 20 22 C22 16, 24 12, 26 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Tendril */}
      <path d="M26 8 C28 6, 31 5, 33 7 C35 9, 33 11, 31 10" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* Leaf */}
      <path d="M20 22 C16 18, 10 17, 8 19 C6 21, 8 24, 12 23 C16 22, 18 22, 20 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M20 22 C16 18, 10 17, 8 19 C6 21, 8 24, 12 23 C16 22, 18 22, 20 22" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Pea pod */}
      <path d="M22 15 C18 16, 16 20, 15 25 C14 30, 16 36, 19 39 C21 41, 24 42, 26 41 C28 40, 30 37, 31 33 C33 28, 33 22, 31 18 C29 14, 25 13, 22 15Z" fill="#6B8E4E" opacity="0.15" />
      <path d="M22 15 C18 16, 16 20, 15 25 C14 30, 16 36, 19 39 C21 41, 24 42, 26 41 C28 40, 30 37, 31 33 C33 28, 33 22, 31 18 C29 14, 25 13, 22 15" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Pea bumps */}
      <circle cx="22" cy="22" r="3.5" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="23" cy="30" r="3.5" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="23" cy="37" r="3" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.3" />

      {/* Pod highlight */}
      <path d="M28 18 C29 22, 29 28, 28 34" stroke="#8CAF6E" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
