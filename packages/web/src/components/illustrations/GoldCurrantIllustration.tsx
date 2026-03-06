import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function GoldCurrantIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <path d="M85 170 Q88 155, 90 138 Q92 122, 95 108 Q97 96, 100 82" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Branch fork left */}
      <path d="M100 82 Q94 70, 84 58 Q78 50, 68 42" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Branch fork right */}
      <path d="M100 82 Q108 70, 118 60 Q126 52, 136 46" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M68 42 Q54 34, 38 32 Q30 34, 26 40 Q32 32, 42 28 Q56 26, 66 36Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M68 42 Q54 34, 38 32 Q30 34, 26 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M26 40 Q32 32, 42 28 Q56 26, 66 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M68 42 Q48 36, 32 36" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf */}
      <path d="M136 46 Q150 38, 164 36 Q172 38, 176 44 Q170 34, 158 32 Q146 30, 138 40Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M136 46 Q150 38, 164 36 Q172 38, 176 44" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M176 44 Q170 34, 158 32 Q146 30, 138 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Fragrant flowers on left branch (golden-yellow, tubular) */}
      <path d="M82 56 Q78 52, 72 50" stroke="#D4A844" strokeWidth="1" strokeLinecap="round" />
      <circle cx="70" cy="48" r="4" fill="#E8C84C" opacity="0.3" />
      <circle cx="70" cy="48" r="4" stroke="#D4A844" strokeWidth="1" fill="none" />
      <circle cx="70" cy="48" r="2" fill="#F0D868" opacity="0.4" />

      <path d="M86 60 Q82 56, 76 55" stroke="#D4A844" strokeWidth="1" strokeLinecap="round" />
      <circle cx="74" cy="53" r="3.5" fill="#E8C84C" opacity="0.3" />
      <circle cx="74" cy="53" r="3.5" stroke="#D4A844" strokeWidth="1" fill="none" />

      {/* Berry cluster stems */}
      <path d="M95 108 Q90 114, 84 120" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M95 108 Q96 116, 98 124" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M92 112 Q86 118, 78 126" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <path d="M94 114 Q96 122, 92 130" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* Right side berry stems */}
      <path d="M118 60 Q122 68, 124 76" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M120 64 Q126 72, 132 78" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <path d="M122 68 Q118 76, 116 84" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* --- Left cluster berries (golden-orange, round) --- */}

      {/* Berry 1 - ripe golden */}
      <circle cx="80" cy="126" r="9" fill="#E8A830" opacity="0.25" />
      <circle cx="80" cy="126" r="9" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="76" cy="122" rx="3" ry="3.5" fill="#F0D060" opacity="0.3" />
      {/* Calyx */}
      <path d="M77 118 L75 116 M80 117 L80 115 M83 118 L85 116" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 2 */}
      <circle cx="96" cy="130" r="8.5" fill="#E8A830" opacity="0.25" />
      <circle cx="96" cy="130" r="8.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="92" cy="126" rx="2.5" ry="3" fill="#F0D060" opacity="0.3" />

      {/* Berry 3 - slightly darker/riper */}
      <circle cx="76" cy="138" r="8" fill="#D08820" opacity="0.25" />
      <circle cx="76" cy="138" r="8" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <ellipse cx="73" cy="135" rx="2.5" ry="3" fill="#E8B040" opacity="0.25" />

      {/* Berry 4 - small, behind */}
      <circle cx="90" cy="140" r="7" fill="#E8A830" opacity="0.2" />
      <circle cx="90" cy="140" r="7" stroke="#C88820" strokeWidth="1.8" fill="none" />

      {/* --- Right cluster berries --- */}

      {/* Berry 5 */}
      <circle cx="126" cy="82" r="8.5" fill="#E8A830" opacity="0.25" />
      <circle cx="126" cy="82" r="8.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="122" cy="78" rx="2.5" ry="3" fill="#F0D060" opacity="0.3" />
      {/* Calyx */}
      <path d="M123 74 L121 72 M126 73 L126 71 M129 74 L131 72" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 6 */}
      <circle cx="136" cy="84" r="8" fill="#D08820" opacity="0.25" />
      <circle cx="136" cy="84" r="8" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <ellipse cx="132" cy="80" rx="2.5" ry="3" fill="#E8B040" opacity="0.25" />

      {/* Berry 7 */}
      <circle cx="118" cy="90" r="7.5" fill="#E8A830" opacity="0.22" />
      <circle cx="118" cy="90" r="7.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="115" cy="87" rx="2" ry="2.5" fill="#F0D060" opacity="0.25" />

      {/* Autumn leaf accent */}
      <path d="M130 110 Q140 104, 150 104 Q144 100, 134 104" fill="#C84030" opacity="0.12" />
      <path d="M130 110 Q140 104, 150 104" stroke="#C84030" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.25" />

      {/* Ground dots */}
      <circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="135" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function GoldCurrantIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 4 Q24 10, 24 14" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small flower bud */}
      <circle cx="30" cy="8" r="3" fill="#E8C84C" opacity="0.3" />
      <circle cx="30" cy="8" r="3" stroke="#D4A844" strokeWidth="0.8" fill="none" />

      {/* Berry stems */}
      <path d="M24 14 Q20 18, 16 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M24 14 Q28 18, 32 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M24 14 Q24 20, 24 26" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left - golden */}
      <circle cx="14" cy="28" r="6.5" fill="#E8A830" opacity="0.25" />
      <circle cx="14" cy="28" r="6.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="12" cy="26" rx="2" ry="2.5" fill="#F0D060" opacity="0.3" />

      {/* Berry right - golden */}
      <circle cx="34" cy="28" r="6.5" fill="#E8A830" opacity="0.25" />
      <circle cx="34" cy="28" r="6.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <ellipse cx="32" cy="26" rx="2" ry="2.5" fill="#F0D060" opacity="0.3" />

      {/* Berry center-bottom - darker ripe */}
      <circle cx="24" cy="36" r="6" fill="#D08820" opacity="0.25" />
      <circle cx="24" cy="36" r="6" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <ellipse cx="22" cy="34" rx="1.8" ry="2" fill="#E8B040" opacity="0.25" />
    </svg>
  )
}
