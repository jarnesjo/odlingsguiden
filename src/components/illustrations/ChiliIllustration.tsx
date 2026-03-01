import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function ChiliIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="186" rx="36" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Stem - curves upward from calyx */}
      <path d="M108 48 Q112 36 115 26 Q114 20 110 16" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Small side branch from stem */}
      <path d="M113 30 Q118 25 122 22" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Calyx - small sepal leaves at top of fruit */}
      <path d="M100 52 Q94 42 90 36 Q95 42 103 50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M90 36 Q95 42 103 50" fill="#3D6B4F" opacity="0.08" />
      <path d="M103 50 Q108 40 112 34 Q108 40 106 50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M112 34 Q108 40 106 50" fill="#3D6B4F" opacity="0.08" />
      {/* Center calyx point */}
      <path d="M101 51 Q100 42 103 34 Q106 42 105 51" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M101 51 Q100 42 103 34 Q106 42 105 51" fill="#3D6B4F" opacity="0.06" />

      {/* Chili body - long, slender, curved, hanging downward */}
      {/* Main fill - the full curved chili shape */}
      <path
        d="M97 54 Q88 56 83 68 Q76 88 74 112 Q72 136 76 156 Q80 172 88 180 Q93 184 98 183 Q104 182 108 178 Q114 170 114 156 Q116 136 114 112 Q112 88 107 68 Q103 56 97 54Z"
        fill="#D94F3B" opacity="0.16"
      />
      {/* Left outline - from calyx down the left side to tip */}
      <path
        d="M97 54 Q88 56 83 68 Q76 88 74 112 Q72 136 76 156 Q80 172 88 180 Q93 184 98 183"
        stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Right outline - from calyx down the right side to tip */}
      <path
        d="M103 54 Q112 56 116 68 Q122 88 124 112 Q126 136 122 156 Q118 172 110 180 Q106 183 102 183 Q100 183 98 183"
        stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />

      {/* Texture lines along the fruit - subtle longitudinal lines */}
      <path d="M98 58 Q96 100 96 170" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M101 56 Q100 100 100 178" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      <path d="M87 72 Q84 108 85 150" stroke="#C0392B" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
      <path d="M112 72 Q114 108 112 148" stroke="#C0392B" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />

      {/* Subtle cross-section wrinkle hints at top and mid */}
      <path d="M83 80 Q98 76 115 80" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      <path d="M74 116 Q98 112 124 116" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.10" />

      {/* Tip detail - slight indent at very bottom point */}
      <path d="M94 180 Q98 184 100 185 Q102 184 106 180" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Highlight / light reflection - left upper area */}
      <ellipse cx="86" cy="90" rx="5" ry="18" fill="#F0A090" opacity="0.20" transform="rotate(-6 86 90)" />
      <ellipse cx="83" cy="84" rx="2.5" ry="8" fill="#FDE8E3" opacity="0.25" transform="rotate(-6 83 84)" />
    </svg>
  )
}

export function ChiliIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M26 12 Q28 8 29 5 Q28 3 27 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Calyx leaves */}
      <path d="M23 13 Q20 9 18 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 12 Q27 8 29 6" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 12 Q24 8 26 5 Q27 8 26 12" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Chili body - long slender curved fill */}
      <path
        d="M22 13 Q18 15 16 21 Q13 30 13 37 Q14 42 18 44 Q22 46 25 44 Q29 42 29 37 Q30 30 28 21 Q27 15 24 13Z"
        fill="#D94F3B" opacity="0.16"
      />
      {/* Left body outline */}
      <path
        d="M22 13 Q18 15 16 21 Q13 30 13 37 Q14 42 18 44 Q21 46 23 45"
        stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Right body outline */}
      <path
        d="M24 13 Q28 15 29 21 Q31 30 30 37 Q29 42 26 44 Q24 46 23 45"
        stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />

      {/* Subtle center texture line */}
      <path d="M23 15 Q23 28 23 43" stroke="#C0392B" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />

      {/* Small highlight */}
      <ellipse cx="18" cy="26" rx="2" ry="6" fill="#F0A090" opacity="0.20" transform="rotate(-5 18 26)" />
    </svg>
  )
}
