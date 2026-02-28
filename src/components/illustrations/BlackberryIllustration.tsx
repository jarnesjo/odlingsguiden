import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BlackberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main arching cane from bottom-left */}
      <path d="M45 170 C50 155, 58 140, 68 125 Q78 110, 85 95 Q90 82, 92 72" stroke="#3D6B4F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper cane continues */}
      <path d="M92 72 Q95 62, 100 52 Q104 44, 108 38" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Side branch */}
      <path d="M85 95 Q95 88, 108 84 Q118 80, 126 82" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Thorns on main cane */}
      <path d="M58 140 L54 137" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M68 125 L64 122" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M78 108 L74 105" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Top leaf (trifoliate - 3 leaflets) */}
      <path d="M100 52 Q110 42, 124 38 Q136 35, 144 40 Q138 34, 126 32 Q114 32, 104 40 Q98 46, 100 52Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M100 52 Q110 42, 124 38 Q136 35, 144 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M144 40 Q138 34, 126 32 Q114 32, 104 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Top leaf serrations */}
      <path d="M118 38 Q126 30, 136 28" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Top leaf vein */}
      <path d="M100 52 Q116 44, 136 38" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Left leaf (smaller, on upper cane) */}
      <path d="M92 72 Q80 64, 66 62 Q54 60, 48 66 Q54 60, 66 58 Q78 58, 88 66 Q92 70, 92 72Z" fill="#3D6B4F" opacity="0.08" />
      <path d="M92 72 Q80 64, 66 62 Q54 60, 48 66" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M48 66 Q54 60, 66 58 Q78 58, 88 66" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Left leaf vein */}
      <path d="M92 72 Q76 66, 56 62" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Right side leaf */}
      <path d="M126 82 Q136 76, 148 76 Q158 76, 162 82 Q156 78, 146 78 Q136 78, 128 82" fill="#3D6B4F" opacity="0.08" />
      <path d="M126 82 Q136 76, 148 76 Q158 76, 162 82" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M126 82 Q140 78, 156 78" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Small leaf on lower cane */}
      <path d="M68 125 Q58 118, 46 118 Q38 118, 34 122 Q40 118, 50 120 Q60 121, 68 125Z" fill="#3D6B4F" opacity="0.06" />
      <path d="M68 125 Q58 118, 46 118 Q38 118, 34 122" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Berry cluster stem from side branch */}
      <path d="M108 84 Q110 90, 112 96" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M112 96 Q110 100, 106 104" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M112 96 Q114 100, 118 104" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M112 96 Q112 102, 112 108" stroke="#4A2040" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Calyx/sepals on top of cluster */}
      <path d="M104 100 C100 96, 102 92, 106 96" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M120 100 C124 96, 122 92, 118 96" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M112 98 C112 94, 114 90, 112 94" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* Berry cluster - top row (drupelets as circles) */}
      <circle cx="106" cy="107" r="6.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="106" cy="107" r="6.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="118" cy="107" r="6.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="118" cy="107" r="6.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - second row */}
      <circle cx="100" cy="118" r="7" fill="#7B4B6A" opacity="0.22" />
      <circle cx="100" cy="118" r="7" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="112" cy="116" r="6.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="112" cy="116" r="6.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="124" cy="118" r="7" fill="#7B4B6A" opacity="0.22" />
      <circle cx="124" cy="118" r="7" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - third row */}
      <circle cx="104" cy="129" r="6.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="104" cy="129" r="6.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="116" cy="128" r="6.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="116" cy="128" r="6.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry cluster - bottom row */}
      <circle cx="110" cy="138" r="5.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="110" cy="138" r="5.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Berry shine highlights */}
      <circle cx="103" cy="105" r="2.5" fill="#B87DA0" opacity="0.25" />
      <circle cx="115" cy="105" r="2" fill="#B87DA0" opacity="0.2" />
      <circle cx="97" cy="116" r="2" fill="#B87DA0" opacity="0.2" />
      <circle cx="121" cy="116" r="2.5" fill="#B87DA0" opacity="0.25" />
      <circle cx="101" cy="127" r="2" fill="#B87DA0" opacity="0.2" />
      <circle cx="113" cy="126" r="2" fill="#B87DA0" opacity="0.2" />
      <circle cx="108" cy="136" r="1.5" fill="#B87DA0" opacity="0.2" />

      {/* Berry dark accents (drupelet shadow) */}
      <circle cx="109" cy="109" r="1" fill="#3A1A30" opacity="0.15" />
      <circle cx="121" cy="109" r="1" fill="#3A1A30" opacity="0.12" />
      <circle cx="103" cy="120" r="1" fill="#3A1A30" opacity="0.12" />
      <circle cx="115" cy="118" r="1" fill="#3A1A30" opacity="0.15" />
      <circle cx="127" cy="120" r="1" fill="#3A1A30" opacity="0.12" />
      <circle cx="107" cy="131" r="1" fill="#3A1A30" opacity="0.12" />
      <circle cx="119" cy="130" r="1" fill="#3A1A30" opacity="0.12" />

      {/* Small unripe berry (red) on a short stem */}
      <path d="M85 95 Q82 98, 80 102" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="78" cy="106" r="4.5" fill="#C45050" opacity="0.12" />
      <circle cx="78" cy="106" r="4.5" stroke="#A03838" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="80" cy="110" r="4" fill="#C45050" opacity="0.12" />
      <circle cx="80" cy="110" r="4" stroke="#A03838" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="74" cy="110" r="4" fill="#C45050" opacity="0.12" />
      <circle cx="74" cy="110" r="4" stroke="#A03838" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Ground dots */}
      <circle cx="55" cy="175" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="78" cy="177" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="105" cy="174" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="130" cy="176" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="148" cy="175" r="1.5" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function BlackberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Cane */}
      <path d="M12 5 Q16 10, 20 16 Q22 20, 24 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M16 10 Q11 7, 7 8 Q10 5, 14 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <path d="M20 16 Q26 13, 32 13 Q28 11, 23 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Calyx hints */}
      <path d="M20 22 C18 20, 20 18, 22 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M28 22 C30 20, 28 18, 26 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Top berry row */}
      <circle cx="21" cy="27" r="4" fill="#7B4B6A" opacity="0.22" />
      <circle cx="21" cy="27" r="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="27" r="4" fill="#7B4B6A" opacity="0.22" />
      <circle cx="28" cy="27" r="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Middle berry row */}
      <circle cx="17" cy="34" r="4" fill="#7B4B6A" opacity="0.22" />
      <circle cx="17" cy="34" r="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="24" cy="33" r="3.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="24" cy="33" r="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="31" cy="34" r="4" fill="#7B4B6A" opacity="0.22" />
      <circle cx="31" cy="34" r="4" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Bottom berry row */}
      <circle cx="21" cy="41" r="3.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="21" cy="41" r="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />
      <circle cx="28" cy="41" r="3.5" fill="#7B4B6A" opacity="0.22" />
      <circle cx="28" cy="41" r="3.5" stroke="#5A2E4A" strokeWidth="1.8" fill="none" />

      {/* Shine highlights */}
      <circle cx="19" cy="26" r="1.5" fill="#B87DA0" opacity="0.25" />
      <circle cx="26" cy="26" r="1.5" fill="#B87DA0" opacity="0.2" />
      <circle cx="15" cy="33" r="1.5" fill="#B87DA0" opacity="0.2" />
    </svg>
  )
}
