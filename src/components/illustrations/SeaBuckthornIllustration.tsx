import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SeaBuckthornIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch - slightly diagonal */}
      <path d="M60 170 Q68 150, 78 130 Q85 115, 92 100 Q98 88, 105 75 Q110 65, 115 55" stroke="#5C4033" strokeWidth="2.5" strokeLinecap="round" />

      {/* Secondary branch forking right */}
      <path d="M92 100 Q100 92, 110 85 Q118 80, 128 76" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Secondary branch forking left-up */}
      <path d="M105 75 Q98 68, 88 60 Q83 56, 78 52" stroke="#5C4033" strokeWidth="1.6" strokeLinecap="round" />

      {/* Thorns on main branch */}
      <path d="M70 148 L65 144" stroke="#5C4033" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M76 135 L80 130" stroke="#5C4033" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M86 112 L82 108" stroke="#5C4033" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      <path d="M96 94 L100 90" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />
      <path d="M108 70 L104 67" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />

      {/* Thorns on secondary branches */}
      <path d="M104 90 L107 86" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />
      <path d="M120 80 L123 76" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />
      <path d="M92 64 L88 61" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />

      {/* Narrow silvery-green leaves (willow-like) */}
      {/* Leaf top-left */}
      <path d="M78 52 Q68 44, 56 42 Q50 41, 44 44" fill="#7A9B6B" opacity="0.12" stroke="#7A9B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 44 Q50 39, 58 40 Q68 42, 78 52" stroke="#7A9B6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Leaf vein */}
      <path d="M78 52 Q62 46, 48 43" stroke="#7A9B6B" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Leaf top-right */}
      <path d="M115 55 Q122 48, 132 44 Q138 42, 145 44" fill="#7A9B6B" opacity="0.12" stroke="#7A9B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M145 44 Q140 40, 132 40 Q124 42, 115 55" stroke="#7A9B6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M115 55 Q128 47, 140 43" stroke="#7A9B6B" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Leaf mid-right (from secondary branch) */}
      <path d="M128 76 Q136 70, 146 68 Q152 67, 158 70" fill="#7A9B6B" opacity="0.10" stroke="#7A9B6B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M158 70 Q154 66, 146 65 Q138 66, 128 76" stroke="#7A9B6B" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Leaf mid-left (hanging from main branch) */}
      <path d="M82 120 Q72 116, 60 116 Q54 117, 48 120" fill="#7A9B6B" opacity="0.10" stroke="#7A9B6B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M48 120 Q54 114, 62 114 Q72 114, 82 120" stroke="#7A9B6B" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Small leaf lower */}
      <path d="M72 142 Q64 138, 54 138 Q50 139, 46 142" stroke="#7A9B6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* === Dense berry cluster on main branch === */}

      {/* Berry row 1 - around y=90-100 area */}
      <circle cx="88" cy="96" r="5.5" fill="#E8820C" opacity="0.35" />
      <circle cx="88" cy="96" r="5.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="86" cy="94" rx="2" ry="2.5" fill="#F5C040" opacity="0.3" />

      <circle cx="98" cy="93" r="5" fill="#E8820C" opacity="0.35" />
      <circle cx="98" cy="93" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="96" cy="91" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.3" />

      <circle cx="82" cy="103" r="5" fill="#E8820C" opacity="0.3" />
      <circle cx="82" cy="103" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="80" cy="101" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      <circle cx="93" cy="104" r="5.5" fill="#E8820C" opacity="0.35" />
      <circle cx="93" cy="104" r="5.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="91" cy="102" rx="2" ry="2.5" fill="#F5C040" opacity="0.3" />

      {/* Berry row 2 - around y=108-118 */}
      <circle cx="78" cy="112" r="5" fill="#E8820C" opacity="0.3" />
      <circle cx="78" cy="112" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="76" cy="110" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      <circle cx="88" cy="113" r="5.5" fill="#E8820C" opacity="0.35" />
      <circle cx="88" cy="113" r="5.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="86" cy="111" rx="2" ry="2.5" fill="#F5C040" opacity="0.3" />

      <circle cx="97" cy="111" r="5" fill="#E8820C" opacity="0.32" />
      <circle cx="97" cy="111" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="95" cy="109" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      {/* Berry row 3 - around y=120-128 */}
      <circle cx="74" cy="122" r="5" fill="#E8820C" opacity="0.3" />
      <circle cx="74" cy="122" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="72" cy="120" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      <circle cx="84" cy="123" r="5.5" fill="#E8820C" opacity="0.35" />
      <circle cx="84" cy="123" r="5.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="82" cy="121" rx="2" ry="2.5" fill="#F5C040" opacity="0.3" />

      <circle cx="93" cy="120" r="5" fill="#E8820C" opacity="0.32" />
      <circle cx="93" cy="120" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="91" cy="118" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      {/* Berry row 4 - lower cluster y=130-138 */}
      <circle cx="70" cy="132" r="4.5" fill="#E8820C" opacity="0.28" />
      <circle cx="70" cy="132" r="4.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="68" cy="130" rx="1.5" ry="2" fill="#F5C040" opacity="0.25" />

      <circle cx="80" cy="133" r="5" fill="#E8820C" opacity="0.32" />
      <circle cx="80" cy="133" r="5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="78" cy="131" rx="1.8" ry="2.2" fill="#F5C040" opacity="0.28" />

      {/* === Berries on secondary branch (right) === */}
      <circle cx="106" cy="86" r="4.5" fill="#E8820C" opacity="0.3" />
      <circle cx="106" cy="86" r="4.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="104" cy="84" rx="1.5" ry="2" fill="#F5C040" opacity="0.25" />

      <circle cx="114" cy="82" r="4.5" fill="#E8820C" opacity="0.3" />
      <circle cx="114" cy="82" r="4.5" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="112" cy="80" rx="1.5" ry="2" fill="#F5C040" opacity="0.25" />

      <circle cx="122" cy="79" r="4" fill="#E8820C" opacity="0.28" />
      <circle cx="122" cy="79" r="4" stroke="#D07008" strokeWidth="1.8" fill="none" />
      <ellipse cx="120" cy="77" rx="1.3" ry="1.8" fill="#F5C040" opacity="0.22" />

      {/* Scattered small berries for density */}
      <circle cx="103" cy="99" r="3.5" fill="#E8820C" opacity="0.25" />
      <circle cx="103" cy="99" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />

      <circle cx="76" cy="96" r="3.5" fill="#E8820C" opacity="0.25" />
      <circle cx="76" cy="96" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />

      <circle cx="86" cy="135" r="3.5" fill="#E8820C" opacity="0.25" />
      <circle cx="86" cy="135" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />

      {/* Ground dots */}
      <circle cx="55" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="75" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="120" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function SeaBuckthornIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Branch */}
      <path d="M14 6 Q17 12, 20 18 Q22 22, 24 26 Q26 30, 28 34" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Thorns */}
      <path d="M16 10 L13 8" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M22 20 L25 18" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Left leaf (narrow, silvery-green) */}
      <path d="M17 14 Q11 11, 6 11 Q9 9, 14 11" stroke="#7A9B6B" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <path d="M26 28 Q32 26, 38 27 Q34 24, 29 26" stroke="#7A9B6B" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

      {/* Dense berry cluster - tightly packed on branch */}
      {/* Top berries */}
      <circle cx="18" cy="19" r="3.5" fill="#E8820C" opacity="0.35" />
      <circle cx="18" cy="19" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="17" cy="18" rx="1.2" ry="1.5" fill="#F5C040" opacity="0.3" />

      <circle cx="24" cy="20" r="3.5" fill="#E8820C" opacity="0.35" />
      <circle cx="24" cy="20" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="23" cy="19" rx="1.2" ry="1.5" fill="#F5C040" opacity="0.3" />

      {/* Middle berries */}
      <circle cx="15" cy="25" r="3.5" fill="#E8820C" opacity="0.32" />
      <circle cx="15" cy="25" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="14" cy="24" rx="1.2" ry="1.5" fill="#F5C040" opacity="0.28" />

      <circle cx="21" cy="26" r="3.8" fill="#E8820C" opacity="0.35" />
      <circle cx="21" cy="26" r="3.8" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="25" rx="1.3" ry="1.6" fill="#F5C040" opacity="0.3" />

      <circle cx="27" cy="25" r="3.2" fill="#E8820C" opacity="0.3" />
      <circle cx="27" cy="25" r="3.2" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="26" cy="24" rx="1" ry="1.3" fill="#F5C040" opacity="0.25" />

      {/* Bottom berries */}
      <circle cx="18" cy="32" r="3.5" fill="#E8820C" opacity="0.32" />
      <circle cx="18" cy="32" r="3.5" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="17" cy="31" rx="1.2" ry="1.5" fill="#F5C040" opacity="0.28" />

      <circle cx="24" cy="33" r="3.2" fill="#E8820C" opacity="0.3" />
      <circle cx="24" cy="33" r="3.2" stroke="#D07008" strokeWidth="1.5" fill="none" />
      <ellipse cx="23" cy="32" rx="1" ry="1.3" fill="#F5C040" opacity="0.25" />

      {/* Small fill berry */}
      <circle cx="28" cy="31" r="2.5" fill="#E8820C" opacity="0.25" />
      <circle cx="28" cy="31" r="2.5" stroke="#D07008" strokeWidth="1.2" fill="none" />
    </svg>
  )
}
