import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SpinachIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Back leaves - deeper layer */}
      {/* Back left leaf */}
      <path d="M52 110 Q42 85 48 60 Q54 42 68 38 Q78 35 82 50 Q86 65 78 90 Q72 108 52 110Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M52 110 Q42 85 48 60 Q54 42 68 38" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Back right leaf */}
      <path d="M148 110 Q158 85 152 60 Q146 42 132 38 Q122 35 118 50 Q114 65 122 90 Q128 108 148 110Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M148 110 Q158 85 152 60 Q146 42 132 38" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Middle left leaf */}
      <path d="M58 125 Q44 100 48 72 Q52 50 66 44 Q80 40 85 58 Q90 76 82 102 Q76 122 58 125Z" fill="#4A7A3F" opacity="0.12" />
      <path d="M58 125 Q44 100 48 72 Q52 50 66 44 Q80 40 85 58" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf vein */}
      <path d="M62 120 Q50 95 55 70 Q58 55 68 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Side veins */}
      <path d="M60 105 Q54 100 50 98" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M57 88 Q52 84 48 82" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Middle right leaf */}
      <path d="M142 125 Q156 100 152 72 Q148 50 134 44 Q120 40 115 58 Q110 76 118 102 Q124 122 142 125Z" fill="#4A7A3F" opacity="0.12" />
      <path d="M142 125 Q156 100 152 72 Q148 50 134 44 Q120 40 115 58" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf vein */}
      <path d="M138 120 Q150 95 145 70 Q142 55 132 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Side veins */}
      <path d="M140 105 Q146 100 150 98" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M143 88 Q148 84 152 82" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Inner left leaf - prominent */}
      <path d="M70 135 Q58 112 62 85 Q66 62 80 55 Q92 50 96 68 Q100 86 94 112 Q88 132 70 135Z" fill="#5A8B3E" opacity="0.15" />
      <path d="M70 135 Q58 112 62 85 Q66 62 80 55 Q92 50 96 68" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf vein */}
      <path d="M74 130 Q64 108 68 85 Q72 68 82 58" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Side veins */}
      <path d="M72 118 Q66 112 62 110" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M68 100 Q64 96 60 94" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Inner right leaf - prominent */}
      <path d="M130 135 Q142 112 138 85 Q134 62 120 55 Q108 50 104 68 Q100 86 106 112 Q112 132 130 135Z" fill="#5A8B3E" opacity="0.15" />
      <path d="M130 135 Q142 112 138 85 Q134 62 120 55 Q108 50 104 68" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf vein */}
      <path d="M126 130 Q136 108 132 85 Q128 68 118 58" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Side veins */}
      <path d="M128 118 Q134 112 138 110" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M132 100 Q136 96 140 94" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Center top leaf */}
      <path d="M100 70 Q96 50 94 35 Q92 22 98 18 Q100 16 102 18 Q108 22 106 35 Q104 50 100 70Z" fill="#5A8B3E" opacity="0.12" />
      <path d="M100 70 Q96 50 94 35 Q92 22 98 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M102 18 Q108 22 106 35 Q104 50 100 70" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Center vein */}
      <path d="M100 65 Q98 45 96 28" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />

      {/* Center heart - young leaves curling */}
      <path d="M92 100 Q88 88 92 76 Q96 66 100 64 Q104 66 108 76 Q112 88 108 100 Q104 108 96 108 Q92 106 92 100Z" fill="#6B9E4A" opacity="0.18" />
      <path d="M92 100 Q88 88 92 76 Q96 66 100 64 Q104 66 108 76 Q112 88 108 100" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Light reflection on left leaf */}
      <path d="M72 100 Q68 88 72 76" stroke="#A8D88A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Light reflection on right leaf */}
      <path d="M128 100 Q132 88 128 76" stroke="#A8D88A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Root area - short stems converging */}
      <path d="M95 135 Q96 145 95 152" stroke={colors.earth} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M100 133 Q100 143 100 155" stroke={colors.earth} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M105 135 Q104 145 105 152" stroke={colors.earth} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Thin root tendrils */}
      <path d="M98 155 Q94 160 92 165" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M102 155 Q106 160 108 165" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Ground dots */}
      <circle cx="65" cy="162" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="135" cy="160" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="170" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="80" cy="168" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function SpinachIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Left leaf */}
      <path d="M14 32 Q8 22 12 12 Q16 6 22 8 Q26 10 24 20 Q22 28 14 32Z" fill="#4A7A3F" opacity="0.15" />
      <path d="M14 32 Q8 22 12 12 Q16 6 22 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf vein */}
      <path d="M16 28 Q12 20 14 14" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf */}
      <path d="M34 32 Q40 22 36 12 Q32 6 26 8 Q22 10 24 20 Q26 28 34 32Z" fill="#4A7A3F" opacity="0.15" />
      <path d="M34 32 Q40 22 36 12 Q32 6 26 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf vein */}
      <path d="M32 28 Q36 20 34 14" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Center leaf */}
      <path d="M24 24 Q22 14 22 8 Q23 4 24 3 Q25 4 26 8 Q26 14 24 24Z" fill="#5A8B3E" opacity="0.15" />
      <path d="M24 24 Q22 14 22 8 Q23 4 24 3" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 3 Q25 4 26 8 Q26 14 24 24" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Center heart */}
      <path d="M21 24 Q20 18 22 14 Q24 12 26 14 Q28 18 27 24" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M21 24 Q20 18 22 14 Q24 12 26 14 Q28 18 27 24 Q25 28 23 28 Q21 27 21 24Z" fill="#6B9E4A" opacity="0.18" />

      {/* Root hints */}
      <path d="M23 32 Q22 37 21 42" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M25 32 Q26 37 27 42" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
