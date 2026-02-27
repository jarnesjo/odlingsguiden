import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BlackcurrantIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <path d="M70 170 C72 155, 75 140, 80 125 Q85 110, 90 95 Q93 85, 95 75" stroke="#3D6B4F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork */}
      <path d="M95 75 Q98 65, 105 55 Q108 48, 112 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M95 75 Q88 68, 78 62 Q72 58, 68 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Thorns/buds on branch */}
      <path d="M76 138 L73 135" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M82 118 L79 115" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Left palmate leaf */}
      <path d="M78 62 Q68 52, 55 48 Q45 45, 38 48 Q42 42, 52 40 Q62 38, 72 44 Q78 50, 78 62Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M78 62 Q68 52, 55 48 Q45 45, 38 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M38 48 Q42 42, 52 40 Q62 38, 72 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Left leaf lobes */}
      <path d="M60 50 Q52 42, 42 38" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M66 48 Q60 38, 58 30" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Left leaf veins */}
      <path d="M78 62 Q65 54, 48 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right upper leaf */}
      <path d="M105 55 Q115 48, 128 46 Q138 44, 145 48 Q140 42, 130 40 Q118 39, 108 45 Q102 50, 105 55Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M105 55 Q115 48, 128 46 Q138 44, 145 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M145 48 Q140 42, 130 40 Q118 39, 108 45" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right leaf lobes */}
      <path d="M125 46 Q132 38, 140 34" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Right leaf veins */}
      <path d="M105 55 Q120 48, 138 46" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Side leaf on branch */}
      <path d="M82 118 Q72 112, 60 112 Q50 112, 46 118 Q52 114, 62 114 Q72 115, 82 118Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M82 118 Q72 112, 60 112 Q50 112, 46 118" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M82 118 Q68 114, 52 114" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Berry cluster stem (klase) hanging from branch */}
      <path d="M90 95 Q92 100, 95 105" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M95 105 Q93 108, 90 112" stroke="#4A3558" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M95 105 Q97 109, 100 112" stroke="#4A3558" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M95 105 Q95 110, 95 115" stroke="#4A3558" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Berry cluster - top row */}
      <circle cx="90" cy="115" r="7" fill="#3D2E4A" opacity="0.2" />
      <circle cx="90" cy="115" r="7" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="100" cy="113" r="7" fill="#3D2E4A" opacity="0.2" />
      <circle cx="100" cy="113" r="7" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - middle row */}
      <circle cx="85" cy="126" r="7.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="85" cy="126" r="7.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="95" cy="124" r="7" fill="#3D2E4A" opacity="0.2" />
      <circle cx="95" cy="124" r="7" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="105" cy="125" r="7.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="105" cy="125" r="7.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - bottom row */}
      <circle cx="89" cy="137" r="7" fill="#3D2E4A" opacity="0.2" />
      <circle cx="89" cy="137" r="7" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="99" cy="135" r="7" fill="#3D2E4A" opacity="0.2" />
      <circle cx="99" cy="135" r="7" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="109" cy="136" r="6.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="109" cy="136" r="6.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Bottom berries */}
      <circle cx="94" cy="146" r="6" fill="#3D2E4A" opacity="0.2" />
      <circle cx="94" cy="146" r="6" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="104" cy="145" r="6" fill="#3D2E4A" opacity="0.2" />
      <circle cx="104" cy="145" r="6" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry shine highlights */}
      <circle cx="87" cy="113" r="2.5" fill="#8B6EA0" opacity="0.25" />
      <circle cx="97" cy="111" r="2" fill="#8B6EA0" opacity="0.2" />
      <circle cx="82" cy="124" r="2" fill="#8B6EA0" opacity="0.2" />
      <circle cx="102" cy="123" r="2.5" fill="#8B6EA0" opacity="0.25" />
      <circle cx="86" cy="135" r="2" fill="#8B6EA0" opacity="0.2" />
      <circle cx="96" cy="133" r="2" fill="#8B6EA0" opacity="0.2" />
      <circle cx="91" cy="144" r="1.5" fill="#8B6EA0" opacity="0.2" />

      {/* Berry dark accents */}
      <circle cx="93" cy="117" r="1" fill="#2A1F35" opacity="0.15" />
      <circle cx="103" cy="115" r="1" fill="#2A1F35" opacity="0.12" />
      <circle cx="88" cy="128" r="1" fill="#2A1F35" opacity="0.12" />
      <circle cx="98" cy="126" r="1" fill="#2A1F35" opacity="0.15" />
      <circle cx="108" cy="127" r="1" fill="#2A1F35" opacity="0.12" />
      <circle cx="102" cy="137" r="1" fill="#2A1F35" opacity="0.12" />

      {/* Small dried flower remnants on berries */}
      <path d="M90 108 L90 106 M88 107 L92 107" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M100 106 L100 104 M98 105 L102 105" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="85" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="108" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="125" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function BlackcurrantIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Branch */}
      <path d="M16 4 Q18 10, 22 16 Q24 20, 24 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M18 10 Q14 7, 9 7 Q12 5, 16 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <path d="M22 16 Q27 14, 32 14 Q29 12, 25 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Cluster stems */}
      <path d="M24 22 Q23 24, 21 26" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M24 22 Q25 24, 27 26" stroke="#4A3558" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Top berry row */}
      <circle cx="20" cy="28" r="4" fill="#3D2E4A" opacity="0.2" />
      <circle cx="20" cy="28" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="28" r="4" fill="#3D2E4A" opacity="0.2" />
      <circle cx="28" cy="28" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Middle berry row */}
      <circle cx="17" cy="35" r="4" fill="#3D2E4A" opacity="0.2" />
      <circle cx="17" cy="35" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="24" cy="34" r="3.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="24" cy="34" r="3.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="31" cy="35" r="4" fill="#3D2E4A" opacity="0.2" />
      <circle cx="31" cy="35" r="4" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Bottom berry row */}
      <circle cx="21" cy="42" r="3.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="21" cy="42" r="3.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="42" r="3.5" fill="#3D2E4A" opacity="0.2" />
      <circle cx="28" cy="42" r="3.5" stroke="#3D2E4A" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <circle cx="18" cy="27" r="1.5" fill="#8B6EA0" opacity="0.25" />
      <circle cx="26" cy="27" r="1.5" fill="#8B6EA0" opacity="0.2" />
      <circle cx="15" cy="34" r="1.5" fill="#8B6EA0" opacity="0.2" />
    </svg>
  )
}
