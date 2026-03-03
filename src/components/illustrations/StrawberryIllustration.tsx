interface Props {
  size?: number
}

export function StrawberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#E8D1DF" opacity="0.15" />

      {/* Main stem curving down to berry */}
      <path d="M58 30 C64 40, 74 52, 82 62 C88 70, 94 78, 98 84" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* === Left trifoliate leaf - large, serrated, characteristic === */}
      {/* Center leaflet */}
      <path d="M68 46 Q56 36, 42 32 Q36 30, 32 34 Q36 28, 44 28 Q54 28, 64 38" fill="#3D6B4F" opacity="0.10" />
      <path d="M68 46 Q56 36, 42 32 Q36 30, 32 34" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 34 Q36 28, 44 28 Q54 28, 64 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Serrated edges - small teeth */}
      <path d="M50 34 L48 31 M44 32 L42 29 M38 32 L36 30" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Leaf vein */}
      <path d="M66 44 Q52 36, 36 32" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Left leaflet */}
      <path d="M66 48 Q54 48, 42 52 Q36 54, 34 58 Q38 52, 46 48 Q56 44, 66 46" fill="#3D6B4F" opacity="0.08" />
      <path d="M66 48 Q54 48, 42 52 Q36 54, 34 58" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Serrated edge */}
      <path d="M48 50 L46 53 M42 52 L40 55" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Right leaflet */}
      <path d="M70 44 Q60 34, 52 24 Q50 20, 54 18 Q54 22, 58 28 Q64 36, 70 42" fill="#3D6B4F" opacity="0.08" />
      <path d="M70 44 Q60 34, 52 24 Q50 20, 54 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* === Right leaf cluster - smaller === */}
      <path d="M90 72 Q102 64, 116 62 Q124 60, 128 64 Q124 58, 116 58 Q106 58, 96 66" fill="#3D6B4F" opacity="0.10" />
      <path d="M90 72 Q102 64, 116 62 Q124 60, 128 64" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M128 64 Q124 58, 116 58 Q106 58, 96 66" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Serrated edges */}
      <path d="M110 62 L112 59 M116 62 L118 59 M122 62 L124 60" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Leaf vein */}
      <path d="M94 70 Q108 64, 124 62" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* === Small white flower === */}
      <path d="M128 64 Q134 60, 140 58" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Petals */}
      <circle cx="144" cy="54" r="4" fill="#F5F2EB" opacity="0.6" />
      <circle cx="148" cy="58" r="4" fill="#F5F2EB" opacity="0.5" />
      <circle cx="144" cy="62" r="4" fill="#F5F2EB" opacity="0.5" />
      <circle cx="140" cy="58" r="4" fill="#F5F2EB" opacity="0.45" />
      <circle cx="140" cy="54" r="4" fill="#F5F2EB" opacity="0.45" />
      {/* Petal outlines */}
      <circle cx="144" cy="54" r="4" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="148" cy="58" r="4" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.25" />
      <circle cx="144" cy="62" r="4" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.25" />
      <circle cx="140" cy="58" r="4" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.2" />
      <circle cx="140" cy="54" r="4" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.2" />
      {/* Pistil center */}
      <circle cx="144" cy="58" r="2.5" fill="#D4A040" opacity="0.4" />
      <circle cx="144" cy="58" r="2.5" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.3" />

      {/* Calyx on main berry */}
      <path d="M90 82 C86 78, 82 80, 84 84" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M106 82 C110 78, 114 80, 112 84" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M94 80 C92 76, 94 72, 98 74" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M102 80 C104 76, 102 72, 98 74" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

      {/* === Berry body - heart/cone shape === */}
      <path
        d="M98 82 Q74 86 66 102 Q60 116 66 130 Q74 148 98 162 Q122 148 130 130 Q136 116 130 102 Q122 86 98 82"
        fill="#C45050"
        opacity="0.18"
      />
      <path
        d="M98 82 Q74 86 66 102 Q60 116 66 130 Q74 148 98 162 Q122 148 130 130 Q136 116 130 102 Q122 86 98 82"
        stroke="#B04040"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Highlight on berry */}
      <path d="M80 92 Q76 100 75 110" stroke="#D88080" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />

      {/* Seeds - in small indentations */}
      <circle cx="82" cy="96" r="1.2" fill="#D4A040" opacity="0.45" />
      <circle cx="92" cy="92" r="1.2" fill="#D4A040" opacity="0.45" />
      <circle cx="106" cy="92" r="1.2" fill="#D4A040" opacity="0.45" />
      <circle cx="116" cy="96" r="1.2" fill="#D4A040" opacity="0.45" />
      <circle cx="76" cy="108" r="1.2" fill="#D4A040" opacity="0.4" />
      <circle cx="88" cy="104" r="1.2" fill="#D4A040" opacity="0.4" />
      <circle cx="98" cy="100" r="1.2" fill="#D4A040" opacity="0.4" />
      <circle cx="110" cy="104" r="1.2" fill="#D4A040" opacity="0.4" />
      <circle cx="122" cy="108" r="1.2" fill="#D4A040" opacity="0.4" />
      <circle cx="74" cy="120" r="1.2" fill="#D4A040" opacity="0.35" />
      <circle cx="86" cy="116" r="1.2" fill="#D4A040" opacity="0.35" />
      <circle cx="98" cy="114" r="1.2" fill="#D4A040" opacity="0.35" />
      <circle cx="112" cy="116" r="1.2" fill="#D4A040" opacity="0.35" />
      <circle cx="124" cy="120" r="1.2" fill="#D4A040" opacity="0.35" />
      <circle cx="82" cy="132" r="1.2" fill="#D4A040" opacity="0.3" />
      <circle cx="96" cy="128" r="1.2" fill="#D4A040" opacity="0.3" />
      <circle cx="108" cy="128" r="1.2" fill="#D4A040" opacity="0.3" />
      <circle cx="118" cy="132" r="1.2" fill="#D4A040" opacity="0.3" />
      <circle cx="92" cy="142" r="1" fill="#D4A040" opacity="0.25" />
      <circle cx="104" cy="142" r="1" fill="#D4A040" opacity="0.25" />
      <circle cx="98" cy="152" r="0.8" fill="#D4A040" opacity="0.2" />

      {/* === Runner (reva) - characteristic === */}
      <path d="M82 62 Q70 66, 56 72 Q44 78, 36 86 Q32 92, 34 96" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Small plantlet at runner tip */}
      <path d="M34 96 Q30 92, 26 90" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M34 96 Q38 92, 40 90" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M34 96 Q34 92, 34 88" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Ground shadow */}
      <ellipse cx="98" cy="172" rx="30" ry="4" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function StrawberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M14 6 C16 10, 20 14, 24 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Trifoliate leaf */}
      <path d="M17 10 C13 7, 9 6, 7 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M7 8 C9 6, 13 6, 15 8" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Right leaf */}
      <path d="M22 16 C26 13, 32 12, 34 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Calyx */}
      <path d="M20 20 C18 18, 20 16, 22 18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M28 20 C30 18, 28 16, 26 18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Berry body */}
      <path
        d="M24 18 Q16 19 13 24 Q10 28 12 34 Q15 40 24 44 Q33 40 36 34 Q38 28 35 24 Q32 19 24 18"
        fill="#C45050"
        opacity="0.18"
      />
      <path
        d="M24 18 Q16 19 13 24 Q10 28 12 34 Q15 40 24 44 Q33 40 36 34 Q38 28 35 24 Q32 19 24 18"
        stroke="#B04040"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Seeds */}
      <circle cx="18" cy="26" r="0.8" fill="#D4A040" opacity="0.45" />
      <circle cx="30" cy="26" r="0.8" fill="#D4A040" opacity="0.45" />
      <circle cx="16" cy="32" r="0.8" fill="#D4A040" opacity="0.4" />
      <circle cx="24" cy="30" r="0.8" fill="#D4A040" opacity="0.4" />
      <circle cx="32" cy="32" r="0.8" fill="#D4A040" opacity="0.4" />
      <circle cx="20" cy="38" r="0.7" fill="#D4A040" opacity="0.35" />
      <circle cx="28" cy="38" r="0.7" fill="#D4A040" opacity="0.35" />

      {/* Highlight */}
      <path d="M17 22 Q16 26 16 28" stroke="#D88080" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
