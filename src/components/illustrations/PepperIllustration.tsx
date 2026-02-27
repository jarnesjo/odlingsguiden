import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function PepperIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Ground shadow */}
      <ellipse cx="100" cy="186" rx="40" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Stem */}
      <path d="M100 55 L100 30 Q98 22 94 18" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 30 Q103 24 107 20" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Calyx (green top) */}
      <path d="M88 60 Q82 50 78 44 Q83 48 90 55" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M78 44 Q83 48 90 55" fill="#3D6B4F" opacity="0.08" />
      <path d="M112 60 Q118 50 122 44 Q117 48 110 55" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M122 44 Q117 48 110 55" fill="#3D6B4F" opacity="0.08" />
      <path d="M95 58 Q92 48 88 40 Q93 46 97 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M105 58 Q108 48 112 40 Q107 46 103 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Center calyx leaf */}
      <path d="M98 56 Q97 48 100 40 Q103 48 102 56" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M98 56 Q97 48 100 40 Q103 48 102 56" fill="#3D6B4F" opacity="0.06" />

      {/* Bell pepper body - main fill */}
      <path
        d="M68 100 Q60 72 80 56 Q90 50 100 54 Q110 50 120 56 Q140 72 132 100 Q136 130 125 150 Q118 168 105 172 Q100 174 95 172 Q82 168 75 150 Q64 130 68 100Z"
        fill="#CC4433" opacity="0.15"
      />
      {/* Body outline - left side */}
      <path
        d="M100 54 Q88 50 78 58 Q62 72 66 100 Q64 130 75 150 Q82 166 95 172 Q98 173 100 174"
        stroke="#B83A2A" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Body outline - right side */}
      <path
        d="M100 54 Q112 50 122 58 Q138 72 134 100 Q136 130 125 150 Q118 166 105 172 Q102 173 100 174"
        stroke="#B83A2A" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />

      {/* Vertical lobe lines */}
      <path d="M100 58 Q100 100 100 170" stroke="#B83A2A" strokeWidth="0.7" strokeLinecap="round" opacity="0.12" />
      <path d="M82 62 Q76 100 80 150" stroke="#B83A2A" strokeWidth="0.7" strokeLinecap="round" opacity="0.1" />
      <path d="M118 62 Q124 100 120 150" stroke="#B83A2A" strokeWidth="0.7" strokeLinecap="round" opacity="0.1" />

      {/* Highlight / reflection */}
      <ellipse cx="82" cy="88" rx="10" ry="18" fill="#F0A090" opacity="0.2" transform="rotate(-10 82 88)" />
      <ellipse cx="78" cy="82" rx="4" ry="8" fill="#FDE8E3" opacity="0.25" transform="rotate(-10 78 82)" />

      {/* Bottom indent */}
      <path d="M90 168 Q95 174 100 174 Q105 174 110 168" stroke="#B83A2A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Subtle lobe roundness on sides */}
      <path d="M66 100 Q64 90 68 80" stroke="#B83A2A" strokeWidth="0.6" strokeLinecap="round" opacity="0.08" />
      <path d="M134 100 Q136 90 132 80" stroke="#B83A2A" strokeWidth="0.6" strokeLinecap="round" opacity="0.08" />
    </svg>
  )
}

export function PepperIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 13 L24 7 Q23 4 22 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Calyx leaves */}
      <path d="M21 14 Q18 10 16 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 14 Q30 10 32 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 13 Q23 9 24 6 Q25 9 25 13" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Bell pepper body - fill */}
      <path
        d="M16 24 Q13 17 19 13 Q21 12 24 13 Q27 12 29 13 Q35 17 32 24 Q33 32 30 37 Q27 41 25 42 Q24 42 23 42 Q21 41 18 37 Q15 32 16 24Z"
        fill="#CC4433" opacity="0.15"
      />
      {/* Body outline left */}
      <path
        d="M24 13 Q20 12 18 14 Q13 18 15 25 Q15 32 18 37 Q21 41 23 42 Q24 42 24 42"
        stroke="#B83A2A" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Body outline right */}
      <path
        d="M24 13 Q28 12 30 14 Q35 18 33 25 Q33 32 30 37 Q27 41 25 42 Q24 42 24 42"
        stroke="#B83A2A" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />

      {/* Center line */}
      <path d="M24 14 Q24 26 24 41" stroke="#B83A2A" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />

      {/* Highlight */}
      <ellipse cx="19" cy="22" rx="3" ry="5" fill="#F0A090" opacity="0.2" transform="rotate(-10 19 22)" />
    </svg>
  )
}
