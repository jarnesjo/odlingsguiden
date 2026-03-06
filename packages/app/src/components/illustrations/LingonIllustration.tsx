import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function LingonIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Ground line - lingon grows low */}
      <Path d="M25 155 Q60 152, 100 154 Q140 156, 175 153" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Main creeping stem - horizontal, low-growing */}
      <Path d="M30 140 Q50 138, 75 136 Q100 134, 125 136 Q150 138, 170 140" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />

      {/* Upright sprig left */}
      <Path d="M60 137 Q58 125, 55 112 Q53 102, 50 90" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upright sprig center */}
      <Path d="M100 135 Q99 122, 97 108 Q96 96, 95 82" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upright sprig right */}
      <Path d="M140 137 Q138 126, 136 114 Q134 104, 132 92" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left sprig leaves - small, oval, evergreen */}
      {/* Leaf left-1 (left side) */}
      <Path d="M55 112 Q45 106, 38 104 Q44 100, 55 106" fill="#2D5A3F" opacity="0.12" />
      <Path d="M55 112 Q45 106, 38 104" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M38 104 Q44 100, 55 106" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M55 112 Q47 107, 40 105" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Leaf left-2 (right side) */}
      <Path d="M56 108 Q64 102, 72 100 Q66 98, 56 102" fill="#2D5A3F" opacity="0.12" />
      <Path d="M56 108 Q64 102, 72 100" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M72 100 Q66 98, 56 102" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Leaf left-3 (left side, upper) */}
      <Path d="M52 98 Q42 94, 34 93 Q40 90, 50 93" fill="#2D5A3F" opacity="0.10" />
      <Path d="M52 98 Q42 94, 34 93" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M34 93 Q40 90, 50 93" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Leaf left-4 (right side, upper) */}
      <Path d="M53 94 Q60 88, 68 86 Q62 85, 53 89" fill="#2D5A3F" opacity="0.10" />
      <Path d="M53 94 Q60 88, 68 86" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M68 86 Q62 85, 53 89" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Center sprig leaves */}
      {/* Leaf center-1 (left) */}
      <Path d="M97 108 Q87 103, 80 102 Q86 99, 96 103" fill="#2D5A3F" opacity="0.12" />
      <Path d="M97 108 Q87 103, 80 102" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M80 102 Q86 99, 96 103" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Leaf center-2 (right) */}
      <Path d="M98 104 Q108 98, 116 96 Q110 95, 98 99" fill="#2D5A3F" opacity="0.12" />
      <Path d="M98 104 Q108 98, 116 96" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M116 96 Q110 95, 98 99" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Leaf center-3 (left, upper) */}
      <Path d="M96 94 Q86 90, 78 89 Q84 87, 94 90" fill="#2D5A3F" opacity="0.10" />
      <Path d="M96 94 Q86 90, 78 89" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M78 89 Q84 87, 94 90" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Leaf center-4 (right, upper) */}
      <Path d="M96 90 Q104 84, 112 82 Q106 82, 96 86" fill="#2D5A3F" opacity="0.10" />
      <Path d="M96 90 Q104 84, 112 82" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M112 82 Q106 82, 96 86" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Right sprig leaves */}
      {/* Leaf right-1 (left) */}
      <Path d="M136 114 Q126 109, 118 108 Q124 106, 134 109" fill="#2D5A3F" opacity="0.12" />
      <Path d="M136 114 Q126 109, 118 108" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M118 108 Q124 106, 134 109" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Leaf right-2 (right) */}
      <Path d="M137 110 Q146 104, 154 102 Q148 101, 137 105" fill="#2D5A3F" opacity="0.12" />
      <Path d="M137 110 Q146 104, 154 102" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M154 102 Q148 101, 137 105" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Leaf right-3 (left, upper) */}
      <Path d="M134 100 Q124 96, 118 96 Q124 93, 132 96" fill="#2D5A3F" opacity="0.10" />
      <Path d="M134 100 Q124 96, 118 96" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M118 96 Q124 93, 132 96" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Leaf right-4 (right, upper) */}
      <Path d="M134 96 Q142 90, 150 88 Q144 88, 134 92" fill="#2D5A3F" opacity="0.10" />
      <Path d="M134 96 Q142 90, 150 88" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M150 88 Q144 88, 134 92" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Berry cluster left - stems */}
      <Path d="M55 112 Q52 116, 48 120" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M55 112 Q56 117, 58 122" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M55 112 Q50 118, 44 125" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

      {/* Berry left-1 */}
      <Circle cx="45" cy="125" r="7" fill="#C62828" opacity="0.3" />
      <Circle cx="45" cy="125" r="7" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="42" cy="122" rx="2.5" ry="3" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M42 119 L40 117 M45 118 L45 116 M48 119 L50 117" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry left-2 */}
      <Circle cx="58" cy="128" r="7.5" fill="#C62828" opacity="0.3" />
      <Circle cx="58" cy="128" r="7.5" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="55" cy="125" rx="2.5" ry="3" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M55 121 L53 119 M58 121 L58 118 M61 121 L63 119" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry left-3 (slightly behind) */}
      <Circle cx="50" cy="132" r="6" fill="#C62828" opacity="0.25" />
      <Circle cx="50" cy="132" r="6" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="48" cy="130" rx="2" ry="2.5" fill="#E86060" opacity="0.25" />

      {/* Berry cluster center - stems */}
      <Path d="M97 108 Q93 113, 88 118" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M97 108 Q98 114, 100 120" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M97 108 Q100 115, 106 120" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <Path d="M97 108 Q94 116, 92 124" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

      {/* Berry center-1 */}
      <Circle cx="86" cy="124" r="8" fill="#C62828" opacity="0.3" />
      <Circle cx="86" cy="124" r="8" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="83" cy="121" rx="3" ry="3.5" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M83 117 L81 115 M86 116 L86 114 M89 117 L91 115" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry center-2 */}
      <Circle cx="100" cy="126" r="8" fill="#C62828" opacity="0.3" />
      <Circle cx="100" cy="126" r="8" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="97" cy="123" rx="3" ry="3.5" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M97 119 L95 117 M100 118 L100 116 M103 119 L105 117" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry center-3 */}
      <Circle cx="108" cy="124" r="7" fill="#C62828" opacity="0.3" />
      <Circle cx="108" cy="124" r="7" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="105" cy="121" rx="2.5" ry="3" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M105 118 L103 116 M108 117 L108 115 M111 118 L113 116" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry center-4 (below, slightly smaller) */}
      <Circle cx="93" cy="133" r="6.5" fill="#C62828" opacity="0.25" />
      <Circle cx="93" cy="133" r="6.5" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="91" cy="131" rx="2" ry="2.5" fill="#E86060" opacity="0.25" />

      {/* Berry cluster right - stems */}
      <Path d="M136 114 Q132 118, 128 122" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M136 114 Q138 120, 140 126" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M136 114 Q142 120, 148 124" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

      {/* Berry right-1 */}
      <Circle cx="126" cy="128" r="7.5" fill="#C62828" opacity="0.3" />
      <Circle cx="126" cy="128" r="7.5" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="123" cy="125" rx="2.5" ry="3" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M123 121 L121 119 M126 121 L126 118 M129 121 L131 119" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry right-2 */}
      <Circle cx="140" cy="130" r="7" fill="#C62828" opacity="0.3" />
      <Circle cx="140" cy="130" r="7" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="137" cy="127" rx="2.5" ry="3" fill="#E86060" opacity="0.3" />
      {/* Calyx */}
      <Path d="M137 124 L135 122 M140 123 L140 121 M143 124 L145 122" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Berry right-3 (behind) */}
      <Circle cx="150" cy="128" r="6" fill="#C62828" opacity="0.25" />
      <Circle cx="150" cy="128" r="6" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="148" cy="126" rx="2" ry="2.5" fill="#E86060" opacity="0.25" />

      {/* Ground dots */}
      <Circle cx="40" cy="158" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="70" cy="156" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="100" cy="158" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="130" cy="156" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="160" cy="157" r="1.3" fill={colors.earth} opacity="0.16" />
    </Svg>
  )
}

export function LingonIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Creeping stem */}
      <Path d="M8 28 Q16 26, 24 27 Q32 28, 40 27" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small upright sprig */}
      <Path d="M24 27 Q23 20, 22 14" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left leaf */}
      <Path d="M22 18 Q16 15, 12 15 Q16 13, 22 16" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Right leaf */}
      <Path d="M23 16 Q28 12, 34 12 Q30 11, 24 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Berry stems */}
      <Path d="M22 18 Q20 22, 17 25" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M23 19 Q24 23, 24 26" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M23 18 Q27 22, 30 25" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left */}
      <Circle cx="15" cy="31" r="5.5" fill="#C62828" opacity="0.3" />
      <Circle cx="15" cy="31" r="5.5" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="13" cy="29" rx="1.8" ry="2.2" fill="#E86060" opacity="0.3" />

      {/* Berry center */}
      <Circle cx="24" cy="33" r="6" fill="#C62828" opacity="0.3" />
      <Circle cx="24" cy="33" r="6" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="22" cy="31" rx="2" ry="2.5" fill="#E86060" opacity="0.3" />

      {/* Berry right */}
      <Circle cx="32" cy="31" r="5.5" fill="#C62828" opacity="0.3" />
      <Circle cx="32" cy="31" r="5.5" stroke="#A82020" strokeWidth="1.8" fill="none" />
      <Ellipse cx="30" cy="29" rx="1.8" ry="2.2" fill="#E86060" opacity="0.3" />

      {/* Calyx hints */}
      <Path d="M14 26 L13 24 M16 26 L17 24" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M23 28 L22 26 M25 28 L26 26" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M31 26 L30 24 M33 26 L34 24" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </Svg>
  )
}
