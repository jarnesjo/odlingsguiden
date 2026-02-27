import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function RadishIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      {/* Leaves - tall green tops */}
      <path d="M100 62 L100 22" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 22 Q95 12 88 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 22 Q105 12 112 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Left leaf cluster */}
      <path d="M96 50 Q84 35 70 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M70 22 Q74 28 72 34 Q70 40 65 36 Q60 32 64 26 Q68 22 70 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M94 45 Q80 32 65 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M92 55 Q78 48 62 44" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Right leaf cluster */}
      <path d="M104 50 Q116 35 130 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 22 Q126 28 128 34 Q130 40 135 36 Q140 32 136 26 Q132 22 130 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M106 45 Q120 32 135 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M108 55 Q122 48 138 44" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Leaf tips */}
      <path d="M88 8 Q85 5 83 8" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M112 8 Q115 5 117 8" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Radish body - round/oval shape, red-pink */}
      <path d="M72 80 Q68 80 66 92 Q62 110 68 128 Q72 140 82 150 Q90 158 100 162 Q110 158 118 150 Q128 140 132 128 Q138 110 134 92 Q132 80 128 80 Z" fill="#C45A5A" opacity="0.2" />
      <path d="M72 80 Q68 80 66 92 Q62 110 68 128 Q72 140 82 150 Q90 158 100 162 Q110 158 118 150 Q128 140 132 128 Q138 110 134 92 Q132 80 128 80" stroke="#C45A5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* White root tip */}
      <path d="M92 155 Q96 162 100 172 Q104 162 108 155" stroke="#D4C4AD" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M100 172 Q100 178 100 184" stroke="#D4C4AD" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 184 Q99 188 100 190" stroke="#D4C4AD" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Radish body highlights and details */}
      <path d="M80 92 Q88 88 112 88 Q120 92 120 92" stroke="#D46B6B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M74 108 Q84 104 116 104 Q126 108 126 108" stroke="#D46B6B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M76 124 Q86 120 114 120 Q124 124 124 124" stroke="#D46B6B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M82 138 Q90 134 110 134 Q118 138 118 138" stroke="#D46B6B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      {/* Highlight shine */}
      <path d="M82 88 Q80 100 82 118 Q84 130 88 140" stroke="#F5C8C8" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
      {/* Small root hairs */}
      <path d="M94 162 Q90 164 88 162" stroke="#D4C4AD" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M106 162 Q110 164 112 162" stroke="#D4C4AD" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Ground dots */}
      <circle cx="68" cy="172" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="132" cy="170" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="82" cy="188" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="118" cy="186" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function RadishIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Leaves */}
      <path d="M24 14 L24 6 Q23 3 20 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 6 Q25 3 28 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 10 Q18 6 14 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M26 10 Q30 6 34 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Radish body - round */}
      <path d="M17 16 Q15 16 14 22 Q13 28 16 34 Q18 38 22 40 Q24 42 24 42 Q24 42 26 40 Q30 38 32 34 Q35 28 34 22 Q33 16 31 16 Z" fill="#C45A5A" opacity="0.2" />
      <path d="M17 16 Q15 16 14 22 Q13 28 16 34 Q18 38 22 40 Q24 42 24 42 Q24 42 26 40 Q30 38 32 34 Q35 28 34 22 Q33 16 31 16" stroke="#C45A5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* White tip */}
      <path d="M22 40 Q24 44 26 40" stroke="#D4C4AD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 44 L24 46" stroke="#D4C4AD" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Body lines */}
      <path d="M16.5 24 Q20 22 28 22 Q31.5 24 31.5 24" stroke="#D46B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M15.5 30 Q20 28 28 28 Q32.5 30 32.5 30" stroke="#D46B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M18 36 Q22 34 26 34 Q30 36 30 36" stroke="#D46B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
