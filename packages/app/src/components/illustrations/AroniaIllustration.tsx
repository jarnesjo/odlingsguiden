import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function AroniaIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <Path d="M90 170 Q92 155, 94 140 Q96 125, 98 110 Q99 100, 100 88" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork left */}
      <Path d="M100 88 Q94 76, 85 65 Q78 56, 68 48" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upper branch fork right */}
      <Path d="M100 88 Q106 76, 115 65 Q122 56, 132 48" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Side branch left */}
      <Path d="M96 125 Q86 118, 72 114" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left leaf - broad, elliptical (aronia-typical) */}
      <Path d="M68 48 Q54 40, 40 38 Q32 40, 28 46 Q34 36, 44 34 Q56 32, 66 42Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M68 48 Q54 40, 40 38 Q32 40, 28 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M28 46 Q34 36, 44 34 Q56 32, 66 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Left leaf midrib */}
      <Path d="M68 48 Q50 42, 34 43" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Left leaf veins */}
      <Path d="M58 43 Q54 38, 48 36" stroke="#3D6B4F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <Path d="M50 43 Q48 38, 42 36" stroke="#3D6B4F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />

      {/* Right leaf */}
      <Path d="M132 48 Q146 40, 160 38 Q168 40, 172 46 Q166 36, 156 34 Q144 32, 134 42Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M132 48 Q146 40, 160 38 Q168 40, 172 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M172 46 Q166 36, 156 34 Q144 32, 134 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Right leaf midrib */}
      <Path d="M132 48 Q150 42, 166 43" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Side leaf on lower branch */}
      <Path d="M72 114 Q60 108, 46 108 Q40 110, 36 116" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M36 116 Q42 108, 50 106 Q60 106, 68 110" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Berry cluster stems from upper left */}
      <Path d="M85 65 Q80 72, 74 78" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M85 65 Q88 74, 92 80" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M82 70 Q76 76, 70 84" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <Path d="M84 72 Q86 80, 82 88" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* Berry cluster stems from upper right */}
      <Path d="M115 65 Q118 72, 122 78" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M118 68 Q124 74, 130 80" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <Path d="M116 70 Q114 78, 112 86" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* Berry cluster stems from side branch */}
      <Path d="M80 118 Q76 124, 74 132" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M82 120 Q86 126, 88 134" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* --- Left cluster berries (dark purple-black aronia) --- */}

      {/* Berry 1 */}
      <Circle cx="70" cy="86" r="9.5" fill="#2D1B38" opacity="0.35" />
      <Circle cx="70" cy="86" r="9.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="66" cy="82" rx="3" ry="3.5" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M67 77 L65 75 M70 76 L70 74 M73 77 L75 75" stroke="#2D1B38" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 2 */}
      <Circle cx="90" cy="88" r="9" fill="#2D1B38" opacity="0.35" />
      <Circle cx="90" cy="88" r="9" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="86" cy="84" rx="2.5" ry="3" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M87 80 L86 78 M90 79 L90 77 M93 80 L94 78" stroke="#2D1B38" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 3 */}
      <Circle cx="80" cy="98" r="8" fill="#2D1B38" opacity="0.3" />
      <Circle cx="80" cy="98" r="8" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="77" cy="95" rx="2.5" ry="3" fill="#6B4A8A" opacity="0.22" />

      {/* --- Right cluster berries --- */}

      {/* Berry 4 */}
      <Circle cx="124" cy="84" r="9.5" fill="#2D1B38" opacity="0.35" />
      <Circle cx="124" cy="84" r="9.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="120" cy="80" rx="3" ry="3.5" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M121 75 L119 73 M124 74 L124 72 M127 75 L129 73" stroke="#2D1B38" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 5 */}
      <Circle cx="136" cy="88" r="8.5" fill="#2D1B38" opacity="0.3" />
      <Circle cx="136" cy="88" r="8.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="132" cy="84" rx="2.5" ry="3" fill="#6B4A8A" opacity="0.22" />

      {/* Berry 6 */}
      <Circle cx="114" cy="92" r="8" fill="#2D1B38" opacity="0.3" />
      <Circle cx="114" cy="92" r="8" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="111" cy="89" rx="2" ry="2.5" fill="#6B4A8A" opacity="0.2" />

      {/* --- Lower cluster berries --- */}

      {/* Berry 7 */}
      <Circle cx="74" cy="138" r="8.5" fill="#2D1B38" opacity="0.35" />
      <Circle cx="74" cy="138" r="8.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="70" cy="134" rx="2.5" ry="3" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M71 130 L69 128 M74 130 L74 128 M77 130 L79 128" stroke="#2D1B38" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 8 */}
      <Circle cx="90" cy="140" r="8" fill="#2D1B38" opacity="0.3" />
      <Circle cx="90" cy="140" r="8" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="87" cy="137" rx="2.5" ry="3" fill="#6B4A8A" opacity="0.22" />

      {/* Autumn leaf accent - aronia is famous for autumn color */}
      <Path d="M130 110 Q140 104, 150 104 Q144 100, 134 104" fill="#C84030" opacity="0.15" />
      <Path d="M130 110 Q140 104, 150 104" stroke="#C84030" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Ground dots */}
      <Circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="130" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function AroniaIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <Path d="M24 6 Q24 10, 24 14" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small leaf */}
      <Path d="M24 10 Q29 7, 35 7 Q32 5, 27 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Berry stems */}
      <Path d="M24 14 Q20 18, 16 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M24 14 Q28 18, 32 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M24 14 Q24 20, 24 24" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left - dark purple-black */}
      <Circle cx="14" cy="28" r="6.5" fill="#2D1B38" opacity="0.35" />
      <Circle cx="14" cy="28" r="6.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="12" cy="26" rx="2" ry="2.5" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M12 22 L11 20 M14 21 L14 19 M16 22 L17 20" stroke="#2D1B38" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry right */}
      <Circle cx="34" cy="28" r="6.5" fill="#2D1B38" opacity="0.35" />
      <Circle cx="34" cy="28" r="6.5" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="32" cy="26" rx="2" ry="2.5" fill="#6B4A8A" opacity="0.25" />
      {/* Calyx */}
      <Path d="M32 22 L31 20 M34 21 L34 19 M36 22 L37 20" stroke="#2D1B38" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry center-bottom */}
      <Circle cx="24" cy="36" r="6" fill="#2D1B38" opacity="0.3" />
      <Circle cx="24" cy="36" r="6" stroke="#1A0F22" strokeWidth="1.8" fill="none" />
      <Ellipse cx="22" cy="34" rx="1.8" ry="2" fill="#6B4A8A" opacity="0.22" />

      {/* Berry small behind */}
      <Circle cx="24" cy="24" r="4.5" fill="#2D1B38" opacity="0.25" />
      <Circle cx="24" cy="24" r="4.5" stroke="#1A0F22" strokeWidth="1.5" fill="none" opacity="0.7" />
    </Svg>
  )
}
