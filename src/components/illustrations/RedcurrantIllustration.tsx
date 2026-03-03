import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function RedcurrantIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <path d="M75 170 Q78 155, 82 140 Q86 125, 90 110 Q93 100, 95 90" stroke="#3D6B4F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork left */}
      <path d="M95 90 Q90 80, 82 70 Q78 64, 74 58" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upper branch fork right */}
      <path d="M95 90 Q100 78, 108 68 Q112 62, 118 56" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Small buds on branch */}
      <path d="M80 135 L77 132" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M86 118 L83 115" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Left palmate leaf */}
      <path d="M74 58 Q64 48, 50 46 Q40 44, 34 48 Q38 42, 48 40 Q58 38, 68 44 Q74 50, 74 58Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M74 58 Q64 48, 50 46 Q40 44, 34 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M34 48 Q38 42, 48 40 Q58 38, 68 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M56 48 Q48 40, 40 36" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M62 46 Q58 36, 56 28" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M74 58 Q60 50, 44 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right upper leaf */}
      <path d="M118 56 Q128 48, 140 46 Q150 44, 156 48 Q152 42, 142 40 Q130 38, 120 44 Q116 50, 118 56Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M118 56 Q128 48, 140 46 Q150 44, 156 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M156 48 Q152 42, 142 40 Q130 38, 120 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M138 46 Q144 38, 150 34" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M118 56 Q132 48, 148 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Side leaf on branch */}
      <path d="M86 118 Q76 112, 64 112 Q54 112, 48 116 Q54 114, 64 114 Q76 115, 86 118Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M86 118 Q76 112, 64 112 Q54 112, 48 116" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M86 118 Q72 114, 56 114" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* === Berry cluster (klase) - long dangling raceme === */}
      {/* Central raceme stem */}
      <path d="M90 110 Q92 116, 94 122 Q95 130, 96 138 Q96 146, 96 152 Q96 158, 95 162" stroke="#8B3A3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Individual berry stems */}
      <path d="M93 118 Q89 120, 86 122" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M93 119 Q97 121, 101 122" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M95 128 Q91 130, 87 132" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M95 129 Q99 131, 103 132" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 137 Q92 139, 89 141" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 138 Q100 140, 103 141" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 146 Q93 148, 91 150" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 147 Q99 149, 101 150" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 154 Q94 156, 92 158" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Berries - small, round, translucent red - staggered along raceme */}
      {/* Pair 1 */}
      <circle cx="84" cy="123" r="5" fill="#C43C3C" opacity="0.3" />
      <circle cx="84" cy="123" r="5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="103" cy="123" r="4.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="103" cy="123" r="4.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      {/* Pair 2 */}
      <circle cx="85" cy="133" r="5" fill="#C43C3C" opacity="0.3" />
      <circle cx="85" cy="133" r="5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="105" cy="133" r="4.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="105" cy="133" r="4.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      {/* Pair 3 */}
      <circle cx="87" cy="142" r="4.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="87" cy="142" r="4.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="105" cy="142" r="4.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="105" cy="142" r="4.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      {/* Pair 4 */}
      <circle cx="89" cy="151" r="4.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="89" cy="151" r="4.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="103" cy="151" r="4" fill="#C43C3C" opacity="0.3" />
      <circle cx="103" cy="151" r="4" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      {/* Tip berry */}
      <circle cx="91" cy="159" r="3.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="91" cy="159" r="3.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Berry shine highlights - translucent gloss */}
      <circle cx="81" cy="121" r="2.2" fill="#F0C0C0" opacity="0.4" />
      <circle cx="100" cy="121" r="1.8" fill="#F0C0C0" opacity="0.35" />
      <circle cx="82" cy="131" r="1.8" fill="#F0C0C0" opacity="0.35" />
      <circle cx="102" cy="131" r="1.8" fill="#F0C0C0" opacity="0.35" />
      <circle cx="84" cy="140" r="1.5" fill="#F0C0C0" opacity="0.3" />
      <circle cx="86" cy="149" r="1.5" fill="#F0C0C0" opacity="0.3" />
      <circle cx="88" cy="157" r="1.2" fill="#F0C0C0" opacity="0.3" />

      {/* Seed shadows visible through translucent skin */}
      <circle cx="86" cy="125" r="0.8" fill="#7A2020" opacity="0.15" />
      <circle cx="105" cy="125" r="0.8" fill="#7A2020" opacity="0.12" />
      <circle cx="87" cy="135" r="0.8" fill="#7A2020" opacity="0.12" />
      <circle cx="107" cy="135" r="0.8" fill="#7A2020" opacity="0.12" />

      {/* Dried flower remnants on top berries */}
      <path d="M84 118 L84 116 M82 117 L86 117" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M103 118 L103 116 M101 117 L105 117" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="68" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="128" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function RedcurrantIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Branch */}
      <path d="M16 4 Q18 10, 22 16 Q24 20, 24 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M18 10 Q14 7, 9 7 Q12 5, 16 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <path d="M22 16 Q27 14, 32 14 Q29 12, 25 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Raceme stem */}
      <path d="M24 22 Q24 28, 24 34 Q24 38, 24 42" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Berry stems */}
      <path d="M24 24 Q21 25, 19 26" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M24 24 Q27 25, 29 26" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M24 30 Q21 31, 19 32" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M24 30 Q27 31, 29 32" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M24 36 Q22 37, 20 38" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M24 36 Q26 37, 28 38" stroke="#8B3A3A" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry pairs along raceme */}
      <circle cx="18" cy="27" r="3" fill="#C43C3C" opacity="0.3" />
      <circle cx="18" cy="27" r="3" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="30" cy="27" r="3" fill="#C43C3C" opacity="0.3" />
      <circle cx="30" cy="27" r="3" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="18" cy="33" r="3" fill="#C43C3C" opacity="0.3" />
      <circle cx="18" cy="33" r="3" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="30" cy="33" r="3" fill="#C43C3C" opacity="0.3" />
      <circle cx="30" cy="33" r="3" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="19" cy="39" r="2.8" fill="#C43C3C" opacity="0.3" />
      <circle cx="19" cy="39" r="2.8" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="29" cy="39" r="2.8" fill="#C43C3C" opacity="0.3" />
      <circle cx="29" cy="39" r="2.8" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      {/* Tip berry */}
      <circle cx="24" cy="44" r="2.5" fill="#C43C3C" opacity="0.3" />
      <circle cx="24" cy="44" r="2.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <circle cx="16" cy="26" r="1.2" fill="#F0C0C0" opacity="0.4" />
      <circle cx="28" cy="26" r="1" fill="#F0C0C0" opacity="0.35" />
      <circle cx="16" cy="32" r="1" fill="#F0C0C0" opacity="0.3" />
    </svg>
  )
}
