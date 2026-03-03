import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function TayberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main arching cane - tayberry has long trailing canes */}
      <path d="M40 170 Q50 150, 60 130 Q75 100, 95 80 Q110 65, 130 55" stroke="#5C4033" strokeWidth="2.5" strokeLinecap="round" />
      {/* Secondary cane */}
      <path d="M60 170 Q70 148, 82 125 Q95 105, 110 90" stroke="#5C4033" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Short fruit-bearing spurs */}
      <path d="M80 108 Q75 100, 68 94" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M95 80 Q88 74, 80 70" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M110 68 Q105 60, 98 54" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M120 60 Q118 52, 115 44" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Leaves - trifoliate like Rubus */}
      {/* Leaf cluster at branch tip */}
      <path d="M130 55 Q140 48, 150 46 Q144 42, 134 48" fill="#3D6B4F" opacity="0.12" />
      <path d="M130 55 Q140 48, 150 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M150 46 Q144 42, 134 48" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      <path d="M130 55 Q138 56, 148 54 Q142 50, 132 53" fill="#3D6B4F" opacity="0.10" />
      <path d="M130 55 Q138 56, 148 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Leaf at mid-cane */}
      <path d="M95 80 Q105 74, 116 72 Q110 68, 98 74" fill="#3D6B4F" opacity="0.12" />
      <path d="M95 80 Q105 74, 116 72" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M116 72 Q110 68, 98 74" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M95 80 Q88 72, 78 68" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M78 68 Q82 65, 90 66" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Leaf at lower position */}
      <path d="M80 108 Q88 102, 98 100 Q92 97, 82 102" fill="#3D6B4F" opacity="0.10" />
      <path d="M80 108 Q88 102, 98 100" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M98 100 Q92 97, 82 102" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* --- Tayberry fruits - elongated cone shape, dark red --- */}

      {/* Berry 1 - ripe, deep dark red, conical */}
      <ellipse cx="66" cy="92" rx="7" ry="12" transform="rotate(-15 66 92)" fill="#8B1A1A" opacity="0.35" />
      <ellipse cx="66" cy="92" rx="7" ry="12" transform="rotate(-15 66 92)" stroke="#6B0F0F" strokeWidth="1.8" fill="none" />
      {/* Drupelet texture */}
      <circle cx="63" cy="86" r="2.2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.25" />
      <circle cx="68" cy="87" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="65" cy="91" r="2.2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="63" cy="96" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.18" />
      <circle cx="68" cy="94" r="2.2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      {/* Highlight */}
      <ellipse cx="62" cy="86" rx="2.5" ry="3.5" fill="#C86060" opacity="0.2" />
      {/* Calyx */}
      <path d="M60 82 L58 78 M64 81 L63 77 M68 82 L70 78 M72 83 L74 79" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 2 - ripe */}
      <ellipse cx="78" cy="68" rx="6.5" ry="11" transform="rotate(-10 78 68)" fill="#8B1A1A" opacity="0.35" />
      <ellipse cx="78" cy="68" rx="6.5" ry="11" transform="rotate(-10 78 68)" stroke="#6B0F0F" strokeWidth="1.8" fill="none" />
      {/* Drupelet texture */}
      <circle cx="76" cy="62" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.22" />
      <circle cx="80" cy="63" r="1.8" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="77" cy="68" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="80" cy="72" r="1.8" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.18" />
      {/* Highlight */}
      <ellipse cx="74" cy="62" rx="2" ry="3" fill="#C86060" opacity="0.2" />
      {/* Calyx */}
      <path d="M73 58 L71 55 M76 58 L75 54 M80 58 L82 55" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 3 - semi-ripe, lighter red */}
      <ellipse cx="96" cy="52" rx="6" ry="10" transform="rotate(-5 96 52)" fill="#A83030" opacity="0.3" />
      <ellipse cx="96" cy="52" rx="6" ry="10" transform="rotate(-5 96 52)" stroke="#8B2020" strokeWidth="1.8" fill="none" />
      {/* Drupelet texture */}
      <circle cx="94" cy="47" r="1.8" stroke="#8B2020" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="98" cy="48" r="1.8" stroke="#8B2020" strokeWidth="0.5" fill="none" opacity="0.18" />
      <circle cx="95" cy="53" r="1.8" stroke="#8B2020" strokeWidth="0.5" fill="none" opacity="0.18" />
      {/* Highlight */}
      <ellipse cx="92" cy="47" rx="2" ry="3" fill="#D08060" opacity="0.2" />
      {/* Calyx */}
      <path d="M92 43 L90 40 M95 42 L94 39 M99 43 L101 40" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Berry 4 - unripe, green-red */}
      <ellipse cx="114" cy="42" rx="5.5" ry="9" transform="rotate(5 114 42)" fill="#7A5030" opacity="0.25" />
      <ellipse cx="114" cy="42" rx="5.5" ry="9" transform="rotate(5 114 42)" stroke="#6B4020" strokeWidth="1.8" fill="none" />
      {/* Drupelet texture */}
      <circle cx="112" cy="38" r="1.5" stroke="#6B4020" strokeWidth="0.5" fill="none" opacity="0.18" />
      <circle cx="116" cy="39" r="1.5" stroke="#6B4020" strokeWidth="0.5" fill="none" opacity="0.15" />
      {/* Calyx */}
      <path d="M110 34 L108 31 M113 33 L112 30 M117 34 L119 31" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Small thorns on cane */}
      <path d="M72 118 L68 116" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M88 95 L84 93" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M105 72 L101 70" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="45" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="70" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="95" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="120" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function TayberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Short stem */}
      <path d="M24 4 Q24 8, 24 12" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Calyx leaves */}
      <path d="M20 8 L16 5 M24 7 L24 3 M28 8 L32 5" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Main berry - elongated cone shape */}
      <ellipse cx="24" cy="26" rx="9" ry="15" fill="#8B1A1A" opacity="0.35" />
      <ellipse cx="24" cy="26" rx="9" ry="15" stroke="#6B0F0F" strokeWidth="1.8" fill="none" />

      {/* Drupelet texture */}
      <circle cx="21" cy="18" r="2.5" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.22" />
      <circle cx="27" cy="19" r="2.5" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="22" cy="24" r="2.5" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="27" cy="25" r="2.5" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.18" />
      <circle cx="24" cy="30" r="2.2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.18" />
      <circle cx="21" cy="34" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.15" />
      <circle cx="27" cy="33" r="2" stroke="#6B0F0F" strokeWidth="0.5" fill="none" opacity="0.15" />

      {/* Highlight */}
      <ellipse cx="19" cy="18" rx="3" ry="4" fill="#C86060" opacity="0.2" />
    </svg>
  )
}
