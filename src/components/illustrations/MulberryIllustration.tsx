import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function MulberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Trunk */}
      <path d="M100 180 L100 165 Q98 150, 96 135 Q94 120, 95 110" stroke="#6B5040" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 180 L102 165 Q104 150, 104 135 Q105 120, 104 110" stroke="#7B6050" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

      {/* Main branches */}
      <path d="M95 110 Q85 95, 72 82 Q62 72, 55 65" stroke="#6B5040" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M104 110 Q115 95, 128 82 Q138 72, 145 65" stroke="#6B5040" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 120 Q88 110, 75 105" stroke="#6B5040" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M102 120 Q112 110, 125 105" stroke="#6B5040" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Crown - large heart-shaped leaves */}
      {/* Left leaf cluster */}
      <path d="M55 65 Q45 55, 38 48 Q32 58, 40 68 Q48 72, 55 65Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M55 65 Q45 55, 38 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38 48 Q32 58, 40 68" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M55 65 Q45 58, 38 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Top center leaves */}
      <path d="M88 68 Q82 52, 78 40 Q86 34, 96 40 Q100 50, 96 62 Q92 68, 88 68Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M88 68 Q82 52, 78 40 Q86 34, 96 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M96 40 Q100 50, 96 62" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Leaf vein */}
      <path d="M88 68 Q84 54, 86 42" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      <path d="M108 68 Q112 52, 118 40 Q126 34, 130 42 Q128 54, 118 64 Q112 68, 108 68Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M108 68 Q112 52, 118 40 Q126 34, 130 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 42 Q128 54, 118 64" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M108 68 Q116 52, 122 42" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf cluster */}
      <path d="M145 65 Q155 55, 162 48 Q168 58, 160 68 Q152 72, 145 65Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M145 65 Q155 55, 162 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M162 48 Q168 58, 160 68" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Lower leaves */}
      <path d="M75 105 Q65 96, 58 88 Q54 96, 60 104 Q68 108, 75 105Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M75 105 Q65 96, 58 88" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      <path d="M125 105 Q135 96, 142 88 Q146 96, 140 104 Q132 108, 125 105Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M125 105 Q135 96, 142 88" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Berry cluster - left (hanging from branch) */}
      <path d="M75 105 Q74 110, 72 114" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Elongated mulberry shape - stacked drupelets */}
      <ellipse cx="72" cy="120" rx="5" ry="3.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="72" cy="120" rx="5" ry="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="72" cy="126" rx="5.5" ry="4" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="72" cy="126" rx="5.5" ry="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="72" cy="132" rx="5" ry="3.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="72" cy="132" rx="5" ry="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="72" cy="137" rx="4" ry="3" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="72" cy="137" rx="4" ry="3" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      {/* Shine */}
      <circle cx="69" cy="119" r="2" fill="#B87DA0" opacity="0.25" />
      <circle cx="69" cy="125" r="1.5" fill="#B87DA0" opacity="0.2" />
      <circle cx="69" cy="131" r="1.5" fill="#B87DA0" opacity="0.2" />

      {/* Berry cluster - right (hanging from branch) */}
      <path d="M125 105 Q126 110, 128 114" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="128" cy="120" rx="5" ry="3.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="128" cy="120" rx="5" ry="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="128" cy="126" rx="5.5" ry="4" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="128" cy="126" rx="5.5" ry="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="128" cy="132" rx="5" ry="3.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="128" cy="132" rx="5" ry="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="128" cy="137" rx="4" ry="3" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="128" cy="137" rx="4" ry="3" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      {/* Shine */}
      <circle cx="125" cy="119" r="2" fill="#B87DA0" opacity="0.25" />
      <circle cx="125" cy="125" r="1.5" fill="#B87DA0" opacity="0.2" />
      <circle cx="125" cy="131" r="1.5" fill="#B87DA0" opacity="0.2" />

      {/* Center berry cluster (larger, more prominent) */}
      <path d="M100 130 Q100 136, 100 140" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="100" cy="145" rx="6" ry="4" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="100" cy="145" rx="6" ry="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="100" cy="152" rx="6.5" ry="4.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="100" cy="152" rx="6.5" ry="4.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="100" cy="159" rx="6" ry="4" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="100" cy="159" rx="6" ry="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="100" cy="165" rx="5" ry="3.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="100" cy="165" rx="5" ry="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      {/* Shine */}
      <circle cx="96" cy="144" r="2.5" fill="#B87DA0" opacity="0.25" />
      <circle cx="96" cy="151" r="2" fill="#B87DA0" opacity="0.2" />
      <circle cx="96" cy="158" r="2" fill="#B87DA0" opacity="0.2" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="182" rx="35" ry="3" fill={colors.earth} opacity="0.08" />

      {/* Ground dots */}
      <circle cx="60" cy="184" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="186" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="118" cy="185" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="140" cy="184" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function MulberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Trunk */}
      <path d="M24 44 L24 28 Q23 22, 22 18" stroke="#6B5040" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left branch */}
      <path d="M22 18 Q18 14, 14 10" stroke="#6B5040" strokeWidth="2" strokeLinecap="round" />
      {/* Right branch */}
      <path d="M22 18 Q28 14, 34 10" stroke="#6B5040" strokeWidth="2" strokeLinecap="round" />

      {/* Leaves (simplified) */}
      <path d="M14 10 Q9 6, 8 10 Q10 14, 14 10" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 10 Q39 6, 40 10 Q38 14, 34 10" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M22 14 Q20 8, 22 4 Q26 8, 24 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Left berry */}
      <ellipse cx="16" cy="22" rx="3.5" ry="2.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="16" cy="22" rx="3.5" ry="2.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="16" cy="27" rx="3.5" ry="2.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="16" cy="27" rx="3.5" ry="2.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="16" cy="31" rx="3" ry="2" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="16" cy="31" rx="3" ry="2" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Right berry */}
      <ellipse cx="32" cy="22" rx="3.5" ry="2.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="32" cy="22" rx="3.5" ry="2.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="32" cy="27" rx="3.5" ry="2.5" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="32" cy="27" rx="3.5" ry="2.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <ellipse cx="32" cy="31" rx="3" ry="2" fill="#7B4B6A" opacity="0.22" />
      <ellipse cx="32" cy="31" rx="3" ry="2" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <circle cx="14" cy="21" r="1.5" fill="#B87DA0" opacity="0.25" />
      <circle cx="30" cy="21" r="1.5" fill="#B87DA0" opacity="0.25" />
    </svg>
  )
}
