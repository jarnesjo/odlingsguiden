import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function ChardIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="178" rx="38" ry="5" fill={colors.earth} opacity="0.08" />

      {/* === BACK LEAVES (deepest layer) === */}

      {/* Back left leaf - broad blade fanning out to the left */}
      <path
        d="M88 148 Q70 130 55 108 Q42 88 48 68 Q54 50 66 46 Q78 44 84 60 Q90 76 88 110 Q87 132 88 148Z"
        fill="#3D6B5A"
        opacity="0.08"
      />
      <path
        d="M88 148 Q70 130 55 108 Q42 88 48 68 Q54 50 66 46 Q78 44 84 60"
        stroke="#3D6B5A"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.30"
      />

      {/* Back right leaf - broad blade fanning out to the right */}
      <path
        d="M112 148 Q130 130 145 108 Q158 88 152 68 Q146 50 134 46 Q122 44 116 60 Q110 76 112 110 Q113 132 112 148Z"
        fill="#3D6B5A"
        opacity="0.08"
      />
      <path
        d="M112 148 Q130 130 145 108 Q158 88 152 68 Q146 50 134 46 Q122 44 116 60"
        stroke="#3D6B5A"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.30"
      />

      {/* === LEFT LEAF - prominent, mid-layer === */}

      {/* Left leaf blade */}
      <path
        d="M92 150 Q72 132 54 110 Q38 90 44 65 Q50 44 64 40 Q78 37 86 56 Q94 74 92 112 Q91 134 92 150Z"
        fill="#3D6B5A"
        opacity="0.12"
      />
      <path
        d="M92 150 Q72 132 54 110 Q38 90 44 65 Q50 44 64 40 Q78 37 86 56"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      {/* Left leaf - right edge */}
      <path
        d="M86 56 Q92 74 92 150"
        stroke="#3D6B5A"
        strokeWidth="1.0"
        strokeLinecap="round"
        fill="none"
        opacity="0.30"
      />

      {/* Left leaf mid-vein */}
      <path
        d="M88 148 Q72 128 58 108 Q46 90 50 68 Q54 52 64 46"
        stroke="#3D6B5A"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.28"
      />
      {/* Left leaf side veins */}
      <path d="M72 130 Q62 128 55 130" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M65 112 Q57 112 50 115" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M58 94 Q52 95 46 99" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M54 76 Q49 78 46 82" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />

      {/* Left leaf stem - thick red/orange, the signature feature */}
      <path
        d="M92 150 Q90 158 90 168"
        stroke="#C4564A"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M92 150 Q90 158 90 168"
        stroke="#C4564A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.20"
        fill="none"
      />
      {/* Stem light reflection */}
      <path
        d="M91 152 Q89 160 89 166"
        stroke="#E8897F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.30"
      />

      {/* === RIGHT LEAF - prominent, mid-layer === */}

      {/* Right leaf blade */}
      <path
        d="M108 150 Q128 132 146 110 Q162 90 156 65 Q150 44 136 40 Q122 37 114 56 Q106 74 108 112 Q109 134 108 150Z"
        fill="#3D6B5A"
        opacity="0.12"
      />
      <path
        d="M108 150 Q128 132 146 110 Q162 90 156 65 Q150 44 136 40 Q122 37 114 56"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      {/* Right leaf - left edge */}
      <path
        d="M114 56 Q108 74 108 150"
        stroke="#3D6B5A"
        strokeWidth="1.0"
        strokeLinecap="round"
        fill="none"
        opacity="0.30"
      />

      {/* Right leaf mid-vein */}
      <path
        d="M112 148 Q128 128 142 108 Q154 90 150 68 Q146 52 136 46"
        stroke="#3D6B5A"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.28"
      />
      {/* Right leaf side veins */}
      <path d="M128 130 Q138 128 145 130" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M135 112 Q143 112 150 115" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M142 94 Q148 95 154 99" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M146 76 Q151 78 154 82" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />

      {/* Right leaf stem - thick red/orange */}
      <path
        d="M108 150 Q110 158 110 168"
        stroke="#C4564A"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Stem light reflection */}
      <path
        d="M109 152 Q111 160 111 166"
        stroke="#E8897F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.30"
      />

      {/* === CENTER LEAF - front, most prominent === */}

      {/* Center leaf blade - large, upright */}
      <path
        d="M100 145 Q82 128 74 105 Q68 84 74 62 Q80 42 90 36 Q96 32 100 32 Q104 32 110 36 Q120 42 126 62 Q132 84 126 105 Q118 128 100 145Z"
        fill="#4A7A5E"
        opacity="0.15"
      />
      <path
        d="M100 145 Q82 128 74 105 Q68 84 74 62 Q80 42 90 36 Q96 32 100 32"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 32 Q104 32 110 36 Q120 42 126 62 Q132 84 126 105 Q118 128 100 145"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.80"
      />

      {/* Center leaf mid-vein */}
      <path
        d="M100 140 Q92 120 88 100 Q84 80 88 60 Q92 44 100 36"
        stroke="#3D6B5A"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.30"
      />
      {/* Center leaf side veins - right */}
      <path d="M98 125 Q108 122 116 124" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" />
      <path d="M96 108 Q106 104 114 105" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" />
      <path d="M94 90 Q104 86 112 86" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M92 72 Q101 68 108 68" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Center leaf side veins - left */}
      <path d="M98 125 Q90 122 84 124" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" />
      <path d="M96 108 Q87 104 80 106" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" />
      <path d="M94 90 Q86 86 80 87" stroke="#3D6B5A" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />

      {/* Light reflection on center leaf */}
      <path
        d="M95 115 Q91 95 94 72 Q96 56 100 44"
        stroke="#A8D8B8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* Center leaf stem - thick red/orange, widest */}
      <path
        d="M100 145 Q100 156 100 168"
        stroke="#C4564A"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.80"
      />
      {/* Center stem highlight */}
      <path
        d="M99 147 Q99 157 99 166"
        stroke="#E8897F"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.28"
      />

      {/* === BASE / ROOT AREA === */}

      {/* Stems converging into base */}
      <path
        d="M90 168 Q93 172 100 174"
        stroke="#C4564A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.50"
      />
      <path
        d="M110 168 Q107 172 100 174"
        stroke="#C4564A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.50"
      />
      <path
        d="M100 168 Q100 172 100 175"
        stroke="#C4564A"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Thin root tendrils */}
      <path d="M98 175 Q94 180 92 184" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M100 175 Q100 180 100 185" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M102 175 Q106 180 108 184" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Ground texture dots */}
      <circle cx="68" cy="174" r="1.5" fill={colors.earth} opacity="0.18" />
      <circle cx="132" cy="172" r="1.2" fill={colors.earth} opacity="0.15" />
      <circle cx="84" cy="178" r="1.0" fill={colors.earth} opacity="0.14" />
      <circle cx="116" cy="177" r="0.8" fill={colors.earth} opacity="0.13" />
    </svg>
  )
}

export function ChardIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Left leaf */}
      <path
        d="M22 36 Q12 28 8 18 Q6 10 12 6 Q18 3 21 12 Q23 20 22 36Z"
        fill="#3D6B5A"
        opacity="0.12"
      />
      <path
        d="M22 36 Q12 28 8 18 Q6 10 12 6 Q18 3 21 12"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaf mid-vein */}
      <path d="M21 34 Q13 26 10 18 Q8 12 12 7" stroke="#3D6B5A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Left stem */}
      <path d="M22 36 Q22 40 21 44" stroke="#C4564A" strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />

      {/* Center leaf */}
      <path
        d="M24 34 Q18 24 18 14 Q18 6 24 4 Q30 6 30 14 Q30 24 24 34Z"
        fill="#4A7A5E"
        opacity="0.15"
      />
      <path
        d="M24 34 Q18 24 18 14 Q18 6 24 4"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 4 Q30 6 30 14 Q30 24 24 34"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.80"
      />
      {/* Center mid-vein */}
      <path d="M24 32 Q22 22 22 14 Q22 8 24 5" stroke="#3D6B5A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Center stem */}
      <path d="M24 34 Q24 39 24 44" stroke="#C4564A" strokeWidth="4.5" strokeLinecap="round" opacity="0.80" />

      {/* Right leaf */}
      <path
        d="M26 36 Q36 28 40 18 Q42 10 36 6 Q30 3 27 12 Q25 20 26 36Z"
        fill="#3D6B5A"
        opacity="0.12"
      />
      <path
        d="M26 36 Q36 28 40 18 Q42 10 36 6 Q30 3 27 12"
        stroke="#3D6B5A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right leaf mid-vein */}
      <path d="M27 34 Q35 26 38 18 Q40 12 36 7" stroke="#3D6B5A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Right stem */}
      <path d="M26 36 Q26 40 27 44" stroke="#C4564A" strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}
