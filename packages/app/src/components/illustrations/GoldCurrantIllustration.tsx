import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function GoldCurrantIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <Path d="M85 170 Q88 155, 90 138 Q92 122, 95 108 Q97 96, 100 82" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Branch fork left */}
      <Path d="M100 82 Q94 70, 84 58 Q78 50, 68 42" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Branch fork right */}
      <Path d="M100 82 Q108 70, 118 60 Q126 52, 136 46" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <Path d="M68 42 Q54 34, 38 32 Q30 34, 26 40 Q32 32, 42 28 Q56 26, 66 36Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M68 42 Q54 34, 38 32 Q30 34, 26 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M26 40 Q32 32, 42 28 Q56 26, 66 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M68 42 Q48 36, 32 36" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf */}
      <Path d="M136 46 Q150 38, 164 36 Q172 38, 176 44 Q170 34, 158 32 Q146 30, 138 40Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M136 46 Q150 38, 164 36 Q172 38, 176 44" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M176 44 Q170 34, 158 32 Q146 30, 138 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Fragrant flowers on left branch (golden-yellow, tubular) */}
      <Path d="M82 56 Q78 52, 72 50" stroke="#D4A844" strokeWidth="1" strokeLinecap="round" />
      <Circle cx="70" cy="48" r="4" fill="#E8C84C" opacity="0.3" />
      <Circle cx="70" cy="48" r="4" stroke="#D4A844" strokeWidth="1" fill="none" />
      <Circle cx="70" cy="48" r="2" fill="#F0D868" opacity="0.4" />

      <Path d="M86 60 Q82 56, 76 55" stroke="#D4A844" strokeWidth="1" strokeLinecap="round" />
      <Circle cx="74" cy="53" r="3.5" fill="#E8C84C" opacity="0.3" />
      <Circle cx="74" cy="53" r="3.5" stroke="#D4A844" strokeWidth="1" fill="none" />

      {/* Berry cluster stems */}
      <Path d="M95 108 Q90 114, 84 120" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M95 108 Q96 116, 98 124" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M92 112 Q86 118, 78 126" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <Path d="M94 114 Q96 122, 92 130" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* Right side berry stems */}
      <Path d="M118 60 Q122 68, 124 76" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M120 64 Q126 72, 132 78" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <Path d="M122 68 Q118 76, 116 84" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* --- Left cluster berries (golden-orange, round) --- */}

      {/* Berry 1 - ripe golden */}
      <Circle cx="80" cy="126" r="9" fill="#E8A830" opacity="0.25" />
      <Circle cx="80" cy="126" r="9" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="76" cy="122" rx="3" ry="3.5" fill="#F0D060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M77 118 L75 116 M80 117 L80 115 M83 118 L85 116" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 2 */}
      <Circle cx="96" cy="130" r="8.5" fill="#E8A830" opacity="0.25" />
      <Circle cx="96" cy="130" r="8.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="92" cy="126" rx="2.5" ry="3" fill="#F0D060" opacity="0.3" />

      {/* Berry 3 - slightly darker/riper */}
      <Circle cx="76" cy="138" r="8" fill="#D08820" opacity="0.25" />
      <Circle cx="76" cy="138" r="8" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <Ellipse cx="73" cy="135" rx="2.5" ry="3" fill="#E8B040" opacity="0.25" />

      {/* Berry 4 - small, behind */}
      <Circle cx="90" cy="140" r="7" fill="#E8A830" opacity="0.2" />
      <Circle cx="90" cy="140" r="7" stroke="#C88820" strokeWidth="1.8" fill="none" />

      {/* --- Right cluster berries --- */}

      {/* Berry 5 */}
      <Circle cx="126" cy="82" r="8.5" fill="#E8A830" opacity="0.25" />
      <Circle cx="126" cy="82" r="8.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="122" cy="78" rx="2.5" ry="3" fill="#F0D060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M123 74 L121 72 M126 73 L126 71 M129 74 L131 72" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 6 */}
      <Circle cx="136" cy="84" r="8" fill="#D08820" opacity="0.25" />
      <Circle cx="136" cy="84" r="8" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <Ellipse cx="132" cy="80" rx="2.5" ry="3" fill="#E8B040" opacity="0.25" />

      {/* Berry 7 */}
      <Circle cx="118" cy="90" r="7.5" fill="#E8A830" opacity="0.22" />
      <Circle cx="118" cy="90" r="7.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="115" cy="87" rx="2" ry="2.5" fill="#F0D060" opacity="0.25" />

      {/* Autumn leaf accent */}
      <Path d="M130 110 Q140 104, 150 104 Q144 100, 134 104" fill="#C84030" opacity="0.12" />
      <Path d="M130 110 Q140 104, 150 104" stroke="#C84030" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.25" />

      {/* Ground dots */}
      <Circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="135" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function GoldCurrantIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <Path d="M24 4 Q24 10, 24 14" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small flower bud */}
      <Circle cx="30" cy="8" r="3" fill="#E8C84C" opacity="0.3" />
      <Circle cx="30" cy="8" r="3" stroke="#D4A844" strokeWidth="0.8" fill="none" />

      {/* Berry stems */}
      <Path d="M24 14 Q20 18, 16 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M24 14 Q28 18, 32 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M24 14 Q24 20, 24 26" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left - golden */}
      <Circle cx="14" cy="28" r="6.5" fill="#E8A830" opacity="0.25" />
      <Circle cx="14" cy="28" r="6.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="12" cy="26" rx="2" ry="2.5" fill="#F0D060" opacity="0.3" />

      {/* Berry right - golden */}
      <Circle cx="34" cy="28" r="6.5" fill="#E8A830" opacity="0.25" />
      <Circle cx="34" cy="28" r="6.5" stroke="#C88820" strokeWidth="1.8" fill="none" />
      <Ellipse cx="32" cy="26" rx="2" ry="2.5" fill="#F0D060" opacity="0.3" />

      {/* Berry center-bottom - darker ripe */}
      <Circle cx="24" cy="36" r="6" fill="#D08820" opacity="0.25" />
      <Circle cx="24" cy="36" r="6" stroke="#B07018" strokeWidth="1.8" fill="none" />
      <Ellipse cx="22" cy="34" rx="1.8" ry="2" fill="#E8B040" opacity="0.25" />
    </Svg>
  )
}
