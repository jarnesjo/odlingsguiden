import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function GarlicIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      {/* Dried stem/neck at top */}
      <path d="M100 60 L100 28" stroke="#B8864A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 28 Q100 20 102 28" stroke="#B8864A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Dry leaf remnants curving from stem */}
      <path d="M100 40 Q94 32 88 22" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M100 40 Q106 32 112 22" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M100 48 Q92 40 84 32" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M100 48 Q108 40 116 32" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Main garlic bulb - papery white fill */}
      <path d="M100 60 Q68 66 58 100 Q52 128 62 150 Q72 166 90 174 Q96 177 100 178 Q104 177 110 174 Q128 166 138 150 Q148 128 142 100 Q132 66 100 60 Z" fill="#F5F2EB" opacity="0.6" />
      {/* Bulb outline */}
      <path d="M100 60 Q68 66 58 100 Q52 128 62 150 Q72 166 90 174 Q96 177 100 178 Q104 177 110 174 Q128 166 138 150 Q148 128 142 100 Q132 66 100 60" stroke="#B8864A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Clove division lines - the characteristic garlic segments */}
      {/* Center clove */}
      <path d="M100 62 Q100 100 100 175" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Left cloves */}
      <path d="M88 66 Q76 100 72 140 Q70 158 82 172" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M76 74 Q64 108 62 138 Q60 154 68 166" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      {/* Right cloves */}
      <path d="M112 66 Q124 100 128 140 Q130 158 118 172" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M124 74 Q136 108 138 138 Q140 154 132 166" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      {/* Clove bulge highlights - subtle 3D effect showing individual cloves */}
      <path d="M82 90 Q78 115 80 140 Q82 155 90 168" stroke="#E8D4B0" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M94 80 Q92 110 93 145 Q94 160 100 172" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M118 90 Q122 115 120 140 Q118 155 110 168" stroke="#E8D4B0" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M106 80 Q108 110 107 145 Q106 160 100 172" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      {/* Papery skin texture - horizontal wisps */}
      <path d="M65 110 Q82 106 100 108 Q118 106 135 110" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <path d="M60 125 Q80 121 100 123 Q120 121 140 125" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      <path d="M62 140 Q82 137 100 138 Q118 137 138 140" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />
      {/* Neck detail where stem meets bulb */}
      <path d="M90 64 Q100 60 110 64" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M93 62 Q100 59 107 62" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      {/* Light highlight on left side */}
      <path d="M72 95 Q70 115 72 135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
      {/* Small roots at bottom */}
      <path d="M100 178 L100 192" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M96 177 Q90 184 86 192" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M104 177 Q110 184 114 192" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M93 176 Q86 182 80 188" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M107 176 Q114 182 120 188" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M98 177 Q96 186 94 192" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M102 177 Q104 186 106 192" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Soil dots */}
      <circle cx="76" cy="190" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="124" cy="188" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="90" cy="196" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="112" cy="194" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function GarlicIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Dried stem */}
      <path d="M24 12 L24 5" stroke="#B8864A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8 Q21.5 5 19 3" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M24 8 Q26.5 5 29 3" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Garlic bulb fill */}
      <path d="M24 12 Q15 14 12 24 Q10 31 13 37 Q16 41 22 43 Q24 44 24 44 Q24 44 26 43 Q32 41 35 37 Q38 31 36 24 Q33 14 24 12 Z" fill="#F5F2EB" opacity="0.6" />
      {/* Bulb outline */}
      <path d="M24 12 Q15 14 12 24 Q10 31 13 37 Q16 41 22 43 Q24 44 24 44 Q24 44 26 43 Q32 41 35 37 Q38 31 36 24 Q33 14 24 12" stroke="#B8864A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Clove division lines */}
      <path d="M20 14 Q16 24 16 34 Q16 39 20 42" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M28 14 Q32 24 32 34 Q32 39 28 42" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M24 13 Q24 28 24 43" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Clove highlight */}
      <path d="M18 20 Q17 27 18 34" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      {/* Roots */}
      <path d="M24 44 L24 47" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M22 43.5 Q20 45 18 47" stroke="#B8864A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      <path d="M26 43.5 Q28 45 30 47" stroke="#B8864A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
