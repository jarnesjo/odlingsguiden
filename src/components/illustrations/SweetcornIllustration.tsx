import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SweetcornIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Main stalk */}
      <path d="M100 175 L100 40" stroke="#3D6B4F" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left leaf - large, arching */}
      <path d="M100 60 Q80 55 55 65 Q40 72 35 85" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 60 Q80 55 55 65 Q40 72 35 85 Q45 78 65 70 Q85 62 100 60Z" fill="#3D6B4F" opacity="0.10" />
      {/* Leaf midrib */}
      <path d="M100 60 Q78 60 55 72" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf - large, arching */}
      <path d="M100 75 Q125 70 150 78 Q162 84 168 95" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 75 Q125 70 150 78 Q162 84 168 95 Q158 88 140 82 Q118 76 100 75Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M100 75 Q128 74 155 84" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Lower left leaf */}
      <path d="M100 120 Q75 118 50 130 Q38 138 32 150" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M100 120 Q75 118 50 130 Q38 138 32 150 Q44 140 60 134 Q80 126 100 120Z" fill="#3D6B4F" opacity="0.06" />

      {/* Lower right leaf */}
      <path d="M100 135 Q120 132 142 140 Q155 148 160 158" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M100 135 Q120 132 142 140 Q155 148 160 158 Q148 148 135 142 Q118 136 100 135Z" fill="#3D6B4F" opacity="0.05" />

      {/* Tassel (vippan) at top */}
      <path d="M100 40 Q98 30 94 20" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 40 Q100 28 100 18" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 40 Q102 30 106 20" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 40 Q96 32 90 25" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M100 40 Q104 32 110 25" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Tassel tips */}
      <circle cx="94" cy="19" r="1" fill="#C4956A" opacity="0.4" />
      <circle cx="100" cy="17" r="1" fill="#C4956A" opacity="0.4" />
      <circle cx="106" cy="19" r="1" fill="#C4956A" opacity="0.4" />

      {/* Ear of corn (kolven) - attached to stalk */}
      {/* Husk leaves (svepeblad) */}
      <path d="M100 88 Q108 86 118 88 Q128 92 130 100 Q132 110 130 120 Q128 130 122 135 Q115 140 108 138 Q102 136 100 130" fill="#8CAF6E" opacity="0.12" />
      <path d="M100 88 Q108 86 118 88 Q128 92 130 100 Q132 110 130 120 Q128 130 122 135 Q115 140 108 138" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Inner husk */}
      <path d="M100 90 Q106 88 114 90 Q122 94 124 102 Q126 112 124 120 Q122 128 118 132" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Corn cob body */}
      <path d="M100 92 Q104 90 110 92 Q118 96 120 104 Q122 114 120 122 Q118 128 114 132 Q108 136 104 134 Q100 132 100 126" fill="#E8C84A" opacity="0.2" />
      <path d="M100 92 Q104 90 110 92 Q118 96 120 104 Q122 114 120 122 Q118 128 114 132 Q108 136 104 134" stroke="#C4956A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Corn kernels - rows of dots */}
      <circle cx="107" cy="98" r="2" fill="#E8C84A" opacity="0.35" />
      <circle cx="112" cy="101" r="2" fill="#E8C84A" opacity="0.3" />
      <circle cx="107" cy="104" r="2" fill="#E8C84A" opacity="0.35" />
      <circle cx="113" cy="107" r="2" fill="#E8C84A" opacity="0.3" />
      <circle cx="108" cy="110" r="2" fill="#E8C84A" opacity="0.35" />
      <circle cx="114" cy="113" r="2" fill="#E8C84A" opacity="0.3" />
      <circle cx="108" cy="116" r="2" fill="#E8C84A" opacity="0.35" />
      <circle cx="113" cy="119" r="2" fill="#E8C84A" opacity="0.28" />
      <circle cx="108" cy="122" r="2" fill="#E8C84A" opacity="0.3" />
      <circle cx="112" cy="126" r="1.8" fill="#E8C84A" opacity="0.25" />

      {/* Kernel row lines */}
      <path d="M105 95 Q106 110 106 130" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M110 94 Q112 110 111 132" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M116 98 Q118 112 116 130" stroke="#C4956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

      {/* Silk (silkena) coming out of top of ear */}
      <path d="M108 88 Q112 82 115 75" stroke="#B8925A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M110 88 Q116 80 120 72" stroke="#B8925A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M106 90 Q108 84 112 78" stroke="#B8925A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="65" cy="180" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="135" cy="182" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="185" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function SweetcornIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stalk */}
      <path d="M24 42 L24 10" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M24 16 Q16 14 10 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M24 16 Q16 14 10 18 Q16 16 24 16Z" fill="#3D6B4F" opacity="0.10" />

      {/* Right leaf */}
      <path d="M24 24 Q32 22 38 26" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M24 24 Q32 22 38 26 Q32 24 24 24Z" fill="#3D6B4F" opacity="0.08" />

      {/* Tassel */}
      <path d="M24 10 Q23 6 21 3" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M24 10 Q24 5 24 3" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M24 10 Q25 6 27 3" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* Ear of corn */}
      <path d="M24 18 Q27 17 30 19 Q33 22 33 27 Q33 32 30 35 Q28 37 26 36 Q24 35 24 32" fill="#E8C84A" opacity="0.2" />
      <path d="M24 18 Q27 17 30 19 Q33 22 33 27 Q33 32 30 35 Q28 37 26 36" stroke="#C4956A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Husk */}
      <path d="M24 18 Q28 16 32 18 Q36 21 36 27 Q36 33 32 36" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* Kernel dots */}
      <circle cx="28" cy="23" r="1.2" fill="#E8C84A" opacity="0.35" />
      <circle cx="30" cy="27" r="1.2" fill="#E8C84A" opacity="0.3" />
      <circle cx="28" cy="31" r="1.2" fill="#E8C84A" opacity="0.3" />

      {/* Silk */}
      <path d="M28 17 Q30 14 32 12" stroke="#B8925A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
