interface Props {
  size?: number
}

export function StrawberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#E8D1DF" opacity="0.15" />

      {/* Stem */}
      <path d="M100 42 L100 70" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Calyx (green top leaves) */}
      <path d="M100 58 Q85 48 74 38 Q82 50 100 58" fill="#3D6B4F" opacity="0.15" />
      <path d="M100 58 Q85 48 74 38" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 58 Q115 48 126 38 Q118 50 100 58" fill="#3D6B4F" opacity="0.15" />
      <path d="M100 58 Q115 48 126 38" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 58 Q90 44 86 30 Q94 46 100 58" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 58 Q90 44 86 30" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 58 Q110 44 114 30 Q106 46 100 58" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 58 Q110 44 114 30" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 58 Q100 42 100 28" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Berry body - heart/cone shape */}
      <path
        d="M100 60 Q72 62 62 82 Q54 100 60 118 Q68 140 100 158 Q132 140 140 118 Q146 100 138 82 Q128 62 100 60"
        fill="#C45050"
        opacity="0.18"
      />
      <path
        d="M100 60 Q72 62 62 82 Q54 100 60 118 Q68 140 100 158 Q132 140 140 118 Q146 100 138 82 Q128 62 100 60"
        stroke="#B04040"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Highlight on berry */}
      <path
        d="M80 74 Q76 82 75 94"
        stroke="#D46060"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Seeds (tiny dots across the surface) */}
      <circle cx="82" cy="78" r="1.5" fill="#D4A040" opacity="0.5" />
      <circle cx="90" cy="72" r="1.5" fill="#D4A040" opacity="0.5" />
      <circle cx="110" cy="72" r="1.5" fill="#D4A040" opacity="0.5" />
      <circle cx="118" cy="78" r="1.5" fill="#D4A040" opacity="0.5" />
      <circle cx="76" cy="92" r="1.5" fill="#D4A040" opacity="0.45" />
      <circle cx="88" cy="88" r="1.5" fill="#D4A040" opacity="0.45" />
      <circle cx="100" cy="84" r="1.5" fill="#D4A040" opacity="0.45" />
      <circle cx="112" cy="88" r="1.5" fill="#D4A040" opacity="0.45" />
      <circle cx="124" cy="92" r="1.5" fill="#D4A040" opacity="0.45" />
      <circle cx="72" cy="106" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="84" cy="102" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="96" cy="98" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="108" cy="98" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="120" cy="102" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="132" cy="106" r="1.5" fill="#D4A040" opacity="0.4" />
      <circle cx="78" cy="118" r="1.5" fill="#D4A040" opacity="0.35" />
      <circle cx="90" cy="114" r="1.5" fill="#D4A040" opacity="0.35" />
      <circle cx="102" cy="112" r="1.5" fill="#D4A040" opacity="0.35" />
      <circle cx="114" cy="114" r="1.5" fill="#D4A040" opacity="0.35" />
      <circle cx="126" cy="118" r="1.5" fill="#D4A040" opacity="0.35" />
      <circle cx="86" cy="128" r="1.5" fill="#D4A040" opacity="0.3" />
      <circle cx="98" cy="126" r="1.5" fill="#D4A040" opacity="0.3" />
      <circle cx="110" cy="126" r="1.5" fill="#D4A040" opacity="0.3" />
      <circle cx="120" cy="130" r="1.5" fill="#D4A040" opacity="0.3" />
      <circle cx="94" cy="140" r="1.2" fill="#D4A040" opacity="0.25" />
      <circle cx="106" cy="140" r="1.2" fill="#D4A040" opacity="0.25" />
      <circle cx="100" cy="150" r="1" fill="#D4A040" opacity="0.2" />

      {/* Trifoliate leaf on left */}
      <path d="M72 42 Q58 36 46 40 Q54 32 68 36" fill="#3D6B4F" opacity="0.1" />
      <path d="M72 42 Q58 36 46 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M68 36 Q56 28 44 28 Q52 24 64 30" fill="#3D6B4F" opacity="0.08" />
      <path d="M68 36 Q56 28 44 28" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M70 40 Q54 44 44 50 Q50 40 66 38" fill="#3D6B4F" opacity="0.08" />
      <path d="M70 40 Q54 44 44 50" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Leaf veins */}
      <path d="M68 38 Q58 34 50 34" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Runner hint (right side) */}
      <path d="M130 44 Q142 42 152 46 Q156 48 158 52" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <circle cx="158" cy="52" r="2" fill="#3D6B4F" opacity="0.15" />
      <path d="M156 50 Q162 48 164 52" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M156 50 Q160 54 158 58" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="170" rx="30" ry="4" fill="#8B7355" opacity="0.08" />

      {/* Ground dots */}
      <circle cx="80" cy="172" r="1.2" fill="#8B7355" opacity="0.15" />
      <circle cx="100" cy="174" r="1" fill="#8B7355" opacity="0.12" />
      <circle cx="118" cy="172" r="1.2" fill="#8B7355" opacity="0.15" />
    </svg>
  )
}

export function StrawberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 8 L24 16" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Calyx */}
      <path d="M24 14 Q18 10 14 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M24 14 Q30 10 34 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M24 14 Q21 8 20 4" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M24 14 Q27 8 28 4" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Berry body */}
      <path
        d="M24 14 Q14 15 11 22 Q8 28 10 34 Q13 40 24 44 Q35 40 38 34 Q40 28 37 22 Q34 15 24 14"
        fill="#C45050"
        opacity="0.18"
      />
      <path
        d="M24 14 Q14 15 11 22 Q8 28 10 34 Q13 40 24 44 Q35 40 38 34 Q40 28 37 22 Q34 15 24 14"
        stroke="#B04040"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Seeds */}
      <circle cx="18" cy="22" r="1" fill="#D4A040" opacity="0.5" />
      <circle cx="30" cy="22" r="1" fill="#D4A040" opacity="0.5" />
      <circle cx="15" cy="28" r="1" fill="#D4A040" opacity="0.45" />
      <circle cx="24" cy="26" r="1" fill="#D4A040" opacity="0.45" />
      <circle cx="33" cy="28" r="1" fill="#D4A040" opacity="0.45" />
      <circle cx="18" cy="34" r="1" fill="#D4A040" opacity="0.4" />
      <circle cx="28" cy="33" r="1" fill="#D4A040" opacity="0.4" />
      <circle cx="24" cy="39" r="0.8" fill="#D4A040" opacity="0.35" />

      {/* Highlight */}
      <path d="M17 20 Q16 24 16 27" stroke="#D46060" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}
