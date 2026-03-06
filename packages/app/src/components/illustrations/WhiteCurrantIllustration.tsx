import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function WhiteCurrantIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <Path d="M85 170 Q88 155, 90 140 Q92 125, 94 110 Q96 98, 98 85" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Branch fork left */}
      <Path d="M98 85 Q92 72, 82 60 Q76 52, 66 44" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Branch fork right */}
      <Path d="M98 85 Q106 72, 116 62 Q124 54, 134 48" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf - vinbär-typical, palmate */}
      <Path d="M66 44 Q54 36, 40 34 Q32 36, 28 42 Q34 34, 44 30 Q56 28, 64 38Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M66 44 Q54 36, 40 34 Q32 36, 28 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M28 42 Q34 34, 44 30 Q56 28, 64 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Leaf midrib and veins */}
      <Path d="M66 44 Q48 38, 34 38" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      <Path d="M56 40 Q52 34, 46 30" stroke="#3D6B4F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />

      {/* Right leaf */}
      <Path d="M134 48 Q148 40, 162 38 Q168 40, 172 46 Q166 36, 156 34 Q144 32, 136 42Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M134 48 Q148 40, 162 38 Q168 40, 172 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M172 46 Q166 36, 156 34 Q144 32, 136 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* --- Hanging grape-like clusters (klasar) --- */}

      {/* Left cluster stem (hanging) */}
      <Path d="M82 60 Q78 68, 74 76 Q72 82, 70 90 Q68 98, 66 108" stroke="#8B9B6B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Right cluster stem */}
      <Path d="M116 62 Q120 70, 122 78 Q124 86, 126 94 Q127 100, 128 108" stroke="#8B9B6B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Berry stems from cluster */}
      <Path d="M74 76 Q70 78, 66 80" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M74 76 Q78 78, 82 80" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M72 82 Q66 85, 62 88" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <Path d="M72 82 Q76 86, 80 90" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <Path d="M70 90 Q64 93, 60 96" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M70 90 Q74 94, 78 98" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M68 98 Q64 102, 60 106" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <Path d="M68 98 Q72 102, 76 106" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

      {/* Right cluster berry stems */}
      <Path d="M122 78 Q118 80, 114 82" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M122 78 Q126 80, 130 82" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M124 86 Q120 89, 116 92" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <Path d="M124 86 Q128 89, 132 92" stroke="#8B9B6B" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <Path d="M126 94 Q122 97, 118 100" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M126 94 Q130 97, 134 100" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />

      {/* --- Left cluster berries - translucent golden-white --- */}

      {/* Berry L1 */}
      <Circle cx="64" cy="82" r="7" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="64" cy="82" r="7" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="61" cy="79" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.35" />
      {/* Seed visible through skin */}
      <Circle cx="65" cy="84" r="1.5" stroke="#BCA860" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Berry L2 */}
      <Circle cx="82" cy="84" r="7.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="82" cy="84" r="7.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="79" cy="81" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.35" />
      <Circle cx="83" cy="86" r="1.5" stroke="#BCA860" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Berry L3 */}
      <Circle cx="60" cy="94" r="6.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="60" cy="94" r="6.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="57" cy="91" rx="2" ry="2.5" fill="#FFFBE8" opacity="0.3" />

      {/* Berry L4 */}
      <Circle cx="78" cy="96" r="7" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="78" cy="96" r="7" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="75" cy="93" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.3" />

      {/* Berry L5 */}
      <Circle cx="58" cy="106" r="6" fill="#E8D8A0" opacity="0.18" />
      <Circle cx="58" cy="106" r="6" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="56" cy="103" rx="2" ry="2.5" fill="#FFFBE8" opacity="0.28" />

      {/* Berry L6 */}
      <Circle cx="76" cy="108" r="6" fill="#E8D8A0" opacity="0.18" />
      <Circle cx="76" cy="108" r="6" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="74" cy="106" rx="2" ry="2.5" fill="#FFFBE8" opacity="0.25" />

      {/* --- Right cluster berries --- */}

      {/* Berry R1 */}
      <Circle cx="114" cy="84" r="7" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="114" cy="84" r="7" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="111" cy="81" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.35" />
      <Circle cx="115" cy="86" r="1.5" stroke="#BCA860" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Berry R2 */}
      <Circle cx="132" cy="86" r="7.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="132" cy="86" r="7.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="129" cy="83" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.35" />
      <Circle cx="133" cy="88" r="1.5" stroke="#BCA860" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Berry R3 */}
      <Circle cx="116" cy="96" r="6.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="116" cy="96" r="6.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="113" cy="93" rx="2" ry="2.5" fill="#FFFBE8" opacity="0.3" />

      {/* Berry R4 */}
      <Circle cx="134" cy="98" r="6.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="134" cy="98" r="6.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="131" cy="95" rx="2.5" ry="3" fill="#FFFBE8" opacity="0.3" />

      {/* Berry R5 */}
      <Circle cx="118" cy="104" r="5.5" fill="#E8D8A0" opacity="0.18" />
      <Circle cx="118" cy="104" r="5.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />

      {/* Ground dots */}
      <Circle cx="60" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="85" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="110" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="135" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function WhiteCurrantIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Cluster stem */}
      <Path d="M24 4 Q24 10, 23 16 Q22 22, 22 28" stroke="#8B9B6B" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small leaf */}
      <Path d="M24 8 Q29 5, 35 5 Q31 3, 25 5" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Berry stems */}
      <Path d="M23 14 Q19 16, 15 18" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M23 14 Q27 16, 31 18" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M23 20 Q18 22, 14 26" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <Path d="M23 20 Q27 23, 32 26" stroke="#8B9B6B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />

      {/* Berry top-left */}
      <Circle cx="13" cy="22" r="5.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="13" cy="22" r="5.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="11" cy="20" rx="1.8" ry="2.2" fill="#FFFBE8" opacity="0.35" />

      {/* Berry top-right */}
      <Circle cx="33" cy="22" r="5.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="33" cy="22" r="5.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="31" cy="20" rx="1.8" ry="2.2" fill="#FFFBE8" opacity="0.35" />

      {/* Berry mid-left */}
      <Circle cx="12" cy="32" r="5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="12" cy="32" r="5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="10" cy="30" rx="1.5" ry="2" fill="#FFFBE8" opacity="0.3" />

      {/* Berry mid-right */}
      <Circle cx="34" cy="32" r="5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="34" cy="32" r="5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="32" cy="30" rx="1.5" ry="2" fill="#FFFBE8" opacity="0.3" />

      {/* Berry bottom center */}
      <Circle cx="22" cy="36" r="5.5" fill="#E8D8A0" opacity="0.2" />
      <Circle cx="22" cy="36" r="5.5" stroke="#C8B870" strokeWidth="1.5" fill="none" />
      <Ellipse cx="20" cy="34" rx="1.8" ry="2" fill="#FFFBE8" opacity="0.3" />
    </Svg>
  )
}
