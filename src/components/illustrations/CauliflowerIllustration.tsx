import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function CauliflowerIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Main stem */}
      <path d="M100 175 L100 115" stroke="#8B7355" strokeWidth="4" strokeLinecap="round" />
      {/* Stem highlight */}
      <path d="M97 170 L97 118" stroke="#96694A" strokeWidth="1.5" strokeLinecap="round" opacity="0.20" />

      {/* Left outer wrapping leaf */}
      <path d="M95 165 Q55 155 40 130 Q35 118 45 105 Q55 95 70 100 Q78 103 82 110" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M95 165 Q55 155 40 130 Q35 118 45 105 Q55 95 70 100 Q78 103 82 110 L90 130 Z" fill="#3D6B4F" opacity="0.12" />
      {/* Left leaf vein */}
      <path d="M90 155 Q62 145 48 125" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M85 148 Q65 140 55 125" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

      {/* Right outer wrapping leaf */}
      <path d="M105 165 Q145 155 160 130 Q165 118 155 105 Q145 95 130 100 Q122 103 118 110" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M105 165 Q145 155 160 130 Q165 118 155 105 Q145 95 130 100 Q122 103 118 110 L110 130 Z" fill="#3D6B4F" opacity="0.12" />
      {/* Right leaf vein */}
      <path d="M110 155 Q138 145 152 125" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M115 148 Q135 140 145 125" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

      {/* Left inner wrapping leaf (curving over head) */}
      <path d="M88 140 Q60 130 55 110 Q52 98 62 88 Q72 82 82 88" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M88 140 Q60 130 55 110 Q52 98 62 88 Q72 82 82 88 L86 110 Z" fill="#3D6B5A" opacity="0.10" />

      {/* Right inner wrapping leaf (curving over head) */}
      <path d="M112 140 Q140 130 145 110 Q148 98 138 88 Q128 82 118 88" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M112 140 Q140 130 145 110 Q148 98 138 88 Q128 82 118 88 L114 110 Z" fill="#3D6B5A" opacity="0.10" />

      {/* Cauliflower head - base layer (deeper cream, behind) */}
      <circle cx="78" cy="100" r="14" fill="#E8E0D5" opacity="0.50" />
      <circle cx="122" cy="100" r="14" fill="#E8E0D5" opacity="0.50" />
      <circle cx="100" cy="75" r="13" fill="#E8E0D5" opacity="0.45" />
      <circle cx="85" cy="82" r="12" fill="#E8E0D5" opacity="0.40" />
      <circle cx="115" cy="82" r="12" fill="#E8E0D5" opacity="0.40" />

      {/* Cauliflower head - middle layer */}
      <circle cx="100" cy="88" r="18" fill="#F0EBE3" opacity="0.60" />
      <circle cx="84" cy="92" r="14" fill="#F0EBE3" opacity="0.55" />
      <circle cx="116" cy="92" r="14" fill="#F0EBE3" opacity="0.55" />
      <circle cx="92" cy="78" r="12" fill="#F0EBE3" opacity="0.50" />
      <circle cx="108" cy="78" r="12" fill="#F0EBE3" opacity="0.50" />

      {/* Cauliflower head - front layer (lightest, creamy white) */}
      <circle cx="100" cy="85" r="16" fill="#F5F2EB" opacity="0.70" />
      <circle cx="88" cy="88" r="12" fill="#F5F2EB" opacity="0.65" />
      <circle cx="112" cy="88" r="12" fill="#F5F2EB" opacity="0.65" />
      <circle cx="96" cy="74" r="10" fill="#F5F2EB" opacity="0.60" />
      <circle cx="104" cy="74" r="10" fill="#F5F2EB" opacity="0.60" />

      {/* Head highlights (bright white touches) */}
      <circle cx="95" cy="82" r="7" fill="#FEFDFB" opacity="0.40" />
      <circle cx="105" cy="80" r="6" fill="#FEFDFB" opacity="0.38" />
      <circle cx="100" cy="72" r="5" fill="#FEFDFB" opacity="0.30" />

      {/* Head outline for definition */}
      <path d="M70 105 Q67 88 78 74 Q88 62 100 60 Q112 62 122 74 Q133 88 130 105 Q128 112 118 108 Q110 102 100 100 Q90 102 82 108 Q72 112 70 105Z" stroke="#E0D5C5" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Tiny floret texture bumps */}
      <circle cx="93" cy="86" r="2" fill="#E0D5C5" opacity="0.25" />
      <circle cx="107" cy="84" r="2" fill="#E0D5C5" opacity="0.25" />
      <circle cx="100" cy="78" r="1.5" fill="#E0D5C5" opacity="0.22" />
      <circle cx="86" cy="94" r="1.8" fill="#E0D5C5" opacity="0.20" />
      <circle cx="114" cy="94" r="1.8" fill="#E0D5C5" opacity="0.20" />
      <circle cx="95" cy="70" r="1.5" fill="#E0D5C5" opacity="0.18" />
      <circle cx="105" cy="69" r="1.5" fill="#E0D5C5" opacity="0.18" />
      <circle cx="100" cy="92" r="1.8" fill="#E0D5C5" opacity="0.20" />

      {/* Ground dots */}
      <circle cx="75" cy="180" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="125" cy="178" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="90" cy="185" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="112" cy="183" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function CauliflowerIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Main stem */}
      <path d="M24 43 L24 26" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left wrapping leaf */}
      <path d="M22 38 Q13 35 11 28 Q10 24 14 21 Q17 19 20 22" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M22 38 Q13 35 11 28 Q10 24 14 21 Q17 19 20 22 L21 30 Z" fill="#3D6B4F" opacity="0.10" />

      {/* Right wrapping leaf */}
      <path d="M26 38 Q35 35 37 28 Q38 24 34 21 Q31 19 28 22" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M26 38 Q35 35 37 28 Q38 24 34 21 Q31 19 28 22 L27 30 Z" fill="#3D6B4F" opacity="0.10" />

      {/* Cauliflower head - base */}
      <circle cx="18" cy="22" r="5.5" fill="#E8E0D5" opacity="0.50" />
      <circle cx="30" cy="22" r="5.5" fill="#E8E0D5" opacity="0.50" />
      <circle cx="24" cy="16" r="5" fill="#E8E0D5" opacity="0.45" />

      {/* Head - middle */}
      <circle cx="20" cy="20" r="5.5" fill="#F0EBE3" opacity="0.55" />
      <circle cx="28" cy="20" r="5.5" fill="#F0EBE3" opacity="0.55" />
      <circle cx="24" cy="18" r="6.5" fill="#F0EBE3" opacity="0.60" />

      {/* Head - highlights */}
      <circle cx="22" cy="18" r="3.5" fill="#F5F2EB" opacity="0.65" />
      <circle cx="26" cy="17" r="3" fill="#F5F2EB" opacity="0.60" />
      <circle cx="24" cy="14" r="2.5" fill="#FEFDFB" opacity="0.35" />

      {/* Head outline */}
      <path d="M15 24 Q14 18 18 14 Q22 10 24 9 Q26 10 30 14 Q34 18 33 24 Q31 26 28 24 Q26 22 24 22 Q22 22 20 24 Q17 26 15 24Z" stroke="#E0D5C5" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Texture dots */}
      <circle cx="22" cy="19" r="1" fill="#E0D5C5" opacity="0.25" />
      <circle cx="26" cy="18" r="1" fill="#E0D5C5" opacity="0.25" />
      <circle cx="24" cy="15" r="0.8" fill="#E0D5C5" opacity="0.20" />
    </svg>
  )
}
