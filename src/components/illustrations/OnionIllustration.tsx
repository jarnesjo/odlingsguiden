import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function OnionIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      {/* Green shoots from top */}
      <path d="M100 68 L100 30" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 30 Q97 18 90 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 30 Q103 18 110 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M96 50 Q90 38 82 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M104 50 Q110 38 118 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Leaf tips curving outward */}
      <path d="M90 8 Q88 4 85 3" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M110 8 Q112 4 115 3" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Main onion bulb - papery skin fill */}
      <path d="M100 68 Q72 72 62 100 Q56 122 64 142 Q72 160 88 170 Q96 175 100 176 Q104 175 112 170 Q128 160 136 142 Q144 122 138 100 Q128 72 100 68 Z" fill="#C4956A" opacity="0.2" />
      {/* Bulb outline */}
      <path d="M100 68 Q72 72 62 100 Q56 122 64 142 Q72 160 88 170 Q96 175 100 176 Q104 175 112 170 Q128 160 136 142 Q144 122 138 100 Q128 72 100 68" stroke="#B8864A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Papery skin layer lines */}
      <path d="M78 90 Q72 110 76 135 Q82 155 96 168" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M122 90 Q128 110 124 135 Q118 155 104 168" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M84 82 Q76 105 80 132 Q86 158 100 172" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M116 82 Q124 105 120 132 Q114 158 100 172" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      {/* Horizontal ring lines (onion layers visible through skin) */}
      <path d="M68 105 Q84 100 100 102 Q116 100 132 105" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M64 120 Q82 116 100 118 Q118 116 136 120" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M66 135 Q84 132 100 133 Q116 132 134 135" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M72 150 Q88 147 100 148 Q112 147 128 150" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
      {/* Light highlight on bulb */}
      <path d="M82 95 Q84 110 86 130" stroke="#E8D4B0" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
      {/* Neck detail at top of bulb */}
      <path d="M92 72 Q100 68 108 72" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Small roots at bottom */}
      <path d="M100 176 L100 188" stroke="#B8864A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M96 175 Q92 182 88 188" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M104 175 Q108 182 112 188" stroke="#B8864A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M94 174 Q88 180 84 184" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M106 174 Q112 180 116 184" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      {/* Soil dots */}
      <circle cx="78" cy="185" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="122" cy="182" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="92" cy="192" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="110" cy="190" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function OnionIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Green shoots */}
      <path d="M24 14 L24 6" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 6 Q22.5 3 20 2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 6 Q25.5 3 28 2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22.5 10 Q20 6 17 4" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M25.5 10 Q28 6 31 4" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Onion bulb fill */}
      <path d="M24 14 Q16 16 13 24 Q11 30 14 36 Q17 40 22 42 Q24 43 24 43 Q24 43 26 42 Q31 40 34 36 Q37 30 35 24 Q32 16 24 14 Z" fill="#C4956A" opacity="0.2" />
      {/* Bulb outline */}
      <path d="M24 14 Q16 16 13 24 Q11 30 14 36 Q17 40 22 42 Q24 43 24 43 Q24 43 26 42 Q31 40 34 36 Q37 30 35 24 Q32 16 24 14" stroke="#B8864A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Skin layer lines */}
      <path d="M17 21 Q14.5 28 16 34 Q19 40 24 42" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M31 21 Q33.5 28 32 34 Q29 40 24 42" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      {/* Horizontal ring */}
      <path d="M14 27 Q19 25.5 24 26 Q29 25.5 34 27" stroke="#B8864A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Highlight */}
      <path d="M18 22 Q18.5 26 19 32" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      {/* Roots */}
      <path d="M24 43 L24 46" stroke="#B8864A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M22 42.5 Q20 44 19 46" stroke="#B8864A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      <path d="M26 42.5 Q28 44 29 46" stroke="#B8864A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
