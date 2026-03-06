import { colors } from '@odlingsguiden/shared'
import { Circle, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function BlackcurrantIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <Path d="M70 170 C72 155, 75 140, 80 125 Q85 110, 90 95 Q93 85, 95 75" stroke="#3D6B4F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork */}
      <Path d="M95 75 Q98 65, 105 55 Q108 48, 112 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M95 75 Q88 68, 78 62 Q72 58, 68 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Small buds on branch */}
      <Path d="M76 138 L73 135" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <Path d="M82 118 L79 115" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Left palmate leaf */}
      <Path d="M78 62 Q68 52, 55 48 Q45 45, 38 48 Q42 42, 52 40 Q62 38, 72 44 Q78 50, 78 62Z" fill="#3D6B4F" opacity="0.10" />
      <Path d="M78 62 Q68 52, 55 48 Q45 45, 38 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M38 48 Q42 42, 52 40 Q62 38, 72 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <Path d="M60 50 Q52 42, 42 38" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <Path d="M66 48 Q60 38, 58 30" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <Path d="M78 62 Q65 54, 48 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right upper leaf */}
      <Path d="M105 55 Q115 48, 128 46 Q138 44, 145 48 Q140 42, 130 40 Q118 39, 108 45 Q102 50, 105 55Z" fill="#3D6B4F" opacity="0.10" />
      <Path d="M105 55 Q115 48, 128 46 Q138 44, 145 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M145 48 Q140 42, 130 40 Q118 39, 108 45" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <Path d="M125 46 Q132 38, 140 34" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <Path d="M105 55 Q120 48, 138 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Side leaf on branch */}
      <Path d="M82 118 Q72 112, 60 112 Q50 112, 46 118 Q52 114, 62 114 Q72 115, 82 118Z" fill="#3D6B4F" opacity="0.08" />
      <Path d="M82 118 Q72 112, 60 112 Q50 112, 46 118" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M82 118 Q68 114, 52 114" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* === Berry cluster (klase) - long dangling raceme === */}
      {/* Central raceme stem */}
      <Path d="M90 95 Q92 100, 94 108 Q95 116, 96 124 Q97 132, 97 140 Q97 148, 96 155" stroke="#4A3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Individual berry stems branching from raceme */}
      <Path d="M93 108 Q89 110, 86 112" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M93 110 Q97 112, 101 113" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M94 118 Q90 120, 87 122" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M95 119 Q99 121, 103 122" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M95 126 Q91 129, 88 131" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M96 127 Q100 129, 104 131" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M96 135 Q93 138, 91 140" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M97 136 Q100 138, 102 140" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M97 144 Q95 147, 93 149" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M97 145 Q99 147, 100 149" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Berries - small, round, opaque dark purple - staggered along raceme */}
      {/* Pair 1 */}
      <Circle cx="84" cy="113" r="5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="84" cy="113" r="5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="103" cy="114" r="4.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="103" cy="114" r="4.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Pair 2 */}
      <Circle cx="85" cy="123" r="5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="85" cy="123" r="5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="105" cy="123" r="4.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="105" cy="123" r="4.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Pair 3 */}
      <Circle cx="86" cy="132" r="5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="86" cy="132" r="5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="106" cy="132" r="4.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="106" cy="132" r="4.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Pair 4 */}
      <Circle cx="89" cy="141" r="4.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="89" cy="141" r="4.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="104" cy="141" r="4.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="104" cy="141" r="4.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Pair 5 (bottom) */}
      <Circle cx="91" cy="150" r="4" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="91" cy="150" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="102" cy="150" r="4" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="102" cy="150" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Tip berry */}
      <Circle cx="96" cy="157" r="3.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="96" cy="157" r="3.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry shine highlights */}
      <Circle cx="82" cy="111" r="2" fill="#8B6EA0" opacity="0.25" />
      <Circle cx="101" cy="112" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="83" cy="121" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="103" cy="121" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="84" cy="130" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="87" cy="139" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="89" cy="148" r="1.5" fill="#8B6EA0" opacity="0.2" />

      {/* Dried flower remnants on top berries */}
      <Path d="M84 108 L84 106 M82 107 L86 107" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M103 109 L103 107 M101 108 L105 108" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <Circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="85" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="108" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="125" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function BlackcurrantIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Branch */}
      <Path d="M16 4 Q18 10, 22 16 Q24 20, 24 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <Path d="M18 10 Q14 7, 9 7 Q12 5, 16 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <Path d="M22 16 Q27 14, 32 14 Q29 12, 25 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Raceme stem */}
      <Path d="M24 22 Q24 28, 24 34 Q24 38, 24 42" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Berry stems */}
      <Path d="M24 24 Q21 25, 19 26" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 24 Q27 25, 29 26" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 30 Q21 31, 19 32" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 30 Q27 31, 29 32" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 36 Q22 37, 20 38" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 36 Q26 37, 28 38" stroke="#4A3558" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry pairs along raceme */}
      <Circle cx="18" cy="27" r="3" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="18" cy="27" r="3" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="30" cy="27" r="3" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="30" cy="27" r="3" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="18" cy="33" r="3" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="18" cy="33" r="3" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="30" cy="33" r="3" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="30" cy="33" r="3" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="19" cy="39" r="2.8" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="19" cy="39" r="2.8" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <Circle cx="29" cy="39" r="2.8" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="29" cy="39" r="2.8" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      {/* Tip berry */}
      <Circle cx="24" cy="44" r="2.5" fill="#3D2E4A" opacity="0.25" />
      <Circle cx="24" cy="44" r="2.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <Circle cx="16" cy="26" r="1.2" fill="#8B6EA0" opacity="0.25" />
      <Circle cx="28" cy="26" r="1" fill="#8B6EA0" opacity="0.2" />
      <Circle cx="16" cy="32" r="1" fill="#8B6EA0" opacity="0.2" />
    </Svg>
  )
}
