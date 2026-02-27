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
      {/* Left leaf lobe details */}
      <path d="M56 48 Q48 40, 40 36" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M62 46 Q58 36, 56 28" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Left leaf vein */}
      <path d="M74 58 Q60 50, 44 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right upper leaf */}
      <path d="M118 56 Q128 48, 140 46 Q150 44, 156 48 Q152 42, 142 40 Q130 38, 120 44 Q116 50, 118 56Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M118 56 Q128 48, 140 46 Q150 44, 156 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M156 48 Q152 42, 142 40 Q130 38, 120 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right leaf lobe */}
      <path d="M138 46 Q144 38, 150 34" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Right leaf vein */}
      <path d="M118 56 Q132 48, 148 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Side leaf on branch */}
      <path d="M86 118 Q76 112, 64 112 Q54 112, 48 116 Q54 114, 64 114 Q76 115, 86 118Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M86 118 Q76 112, 64 112 Q54 112, 48 116" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M86 118 Q72 114, 56 114" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Berry cluster stem (klase) hanging from branch */}
      <path d="M90 110 Q93 115, 96 120" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* Individual berry stems */}
      <path d="M96 120 Q94 123, 91 126" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M96 120 Q98 124, 101 126" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M96 120 Q96 125, 96 128" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M96 120 Q93 126, 88 132" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M96 120 Q100 126, 104 132" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Berry cluster - top row (translucent red) */}
      <circle cx="91" cy="128" r="6.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="91" cy="128" r="6.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="101" cy="127" r="6.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="101" cy="127" r="6.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - middle row */}
      <circle cx="86" cy="138" r="7" fill="#C43C3C" opacity="0.25" />
      <circle cx="86" cy="138" r="7" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="96" cy="137" r="6.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="96" cy="137" r="6.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="106" cy="138" r="7" fill="#C43C3C" opacity="0.25" />
      <circle cx="106" cy="138" r="7" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - lower row */}
      <circle cx="90" cy="149" r="6.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="90" cy="149" r="6.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="100" cy="148" r="6.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="100" cy="148" r="6.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="110" cy="149" r="6" fill="#C43C3C" opacity="0.25" />
      <circle cx="110" cy="149" r="6" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Bottom berries */}
      <circle cx="95" cy="158" r="5.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="95" cy="158" r="5.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="104" cy="157" r="5.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="104" cy="157" r="5.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Berry shine highlights - translucent effect */}
      <circle cx="88" cy="126" r="2.5" fill="#E8A0A0" opacity="0.35" />
      <circle cx="98" cy="125" r="2" fill="#E8A0A0" opacity="0.3" />
      <circle cx="83" cy="136" r="2" fill="#E8A0A0" opacity="0.3" />
      <circle cx="103" cy="136" r="2.5" fill="#E8A0A0" opacity="0.35" />
      <circle cx="87" cy="147" r="2" fill="#E8A0A0" opacity="0.3" />
      <circle cx="97" cy="146" r="2" fill="#E8A0A0" opacity="0.3" />
      <circle cx="92" cy="156" r="1.5" fill="#E8A0A0" opacity="0.3" />

      {/* Berry dark accents - seed shadows visible through skin */}
      <circle cx="94" cy="130" r="1" fill="#7A2020" opacity="0.15" />
      <circle cx="104" cy="129" r="1" fill="#7A2020" opacity="0.12" />
      <circle cx="89" cy="140" r="1" fill="#7A2020" opacity="0.12" />
      <circle cx="99" cy="139" r="1" fill="#7A2020" opacity="0.15" />
      <circle cx="109" cy="140" r="1" fill="#7A2020" opacity="0.12" />
      <circle cx="103" cy="150" r="1" fill="#7A2020" opacity="0.12" />

      {/* Small dried flower remnants on top berries */}
      <path d="M91 121 L91 119 M89 120 L93 120" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M101 120 L101 118 M99 119 L103 119" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

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

      {/* Cluster stems */}
      <path d="M24 22 Q23 24, 21 26" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M24 22 Q25 24, 27 26" stroke="#8B3A3A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Top berry row */}
      <circle cx="20" cy="28" r="4" fill="#C43C3C" opacity="0.25" />
      <circle cx="20" cy="28" r="4" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="28" r="4" fill="#C43C3C" opacity="0.25" />
      <circle cx="28" cy="28" r="4" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Middle berry row */}
      <circle cx="17" cy="35" r="4" fill="#C43C3C" opacity="0.25" />
      <circle cx="17" cy="35" r="4" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="24" cy="34" r="3.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="24" cy="34" r="3.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="31" cy="35" r="4" fill="#C43C3C" opacity="0.25" />
      <circle cx="31" cy="35" r="4" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Bottom berry row */}
      <circle cx="21" cy="42" r="3.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="21" cy="42" r="3.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="42" r="3.5" fill="#C43C3C" opacity="0.25" />
      <circle cx="28" cy="42" r="3.5" stroke="#9B2E2E" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <circle cx="18" cy="27" r="1.5" fill="#E8A0A0" opacity="0.35" />
      <circle cx="26" cy="27" r="1.5" fill="#E8A0A0" opacity="0.3" />
      <circle cx="15" cy="34" r="1.5" fill="#E8A0A0" opacity="0.3" />
    </svg>
  )
}
