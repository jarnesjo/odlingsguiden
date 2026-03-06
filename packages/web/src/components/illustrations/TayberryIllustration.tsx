import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function TayberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main cane - arching from upper left down to center, like raspberry */}
      <path d="M50 28 C60 38, 75 55, 85 72 C92 84, 96 95, 98 100" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Cane continues down past berry */}
      <path d="M98 100 C99 108, 97 118, 94 126" stroke="#5C4033" strokeWidth="2" strokeLinecap="round" />

      {/* Side spur for second berry */}
      <path d="M78 60 C72 56, 64 54, 58 56" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

      {/* Small thorns on cane */}
      <path d="M65 42 L61 39" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M82 66 L78 64" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M94 92 L90 90" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Leaf cluster - upper left, trifoliate */}
      <path d="M68 48 C58 42, 44 38, 36 40 C40 34, 50 30, 60 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M68 48 C62 40, 48 32, 38 28 C44 26, 54 28, 62 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M36 40 C40 34, 50 30, 60 36 C54 28, 44 26, 38 28" fill="#3D6B4F" opacity="0.08" />
      <path d="M66 47 C56 40, 46 36, 38 34" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Leaf cluster - right side */}
      <path d="M92 80 C105 74, 120 72, 130 76 C124 70, 114 66, 102 72" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M92 80 C108 76, 124 78, 136 84 C128 76, 116 70, 104 74" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M130 76 C124 70, 114 66, 102 72 C108 76, 124 78, 136 84 C128 76, 124 72, 130 76" fill="#3D6B4F" opacity="0.08" />

      {/* Small leaf near second berry */}
      <path d="M64 54 C58 48, 46 46, 40 50" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M40 50 C44 46, 52 44, 58 48" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Calyx on main berry */}
      <path d="M90 98 C86 94, 82 96, 84 100" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M106 98 C110 94, 114 96, 112 100" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M94 96 C92 92, 94 88, 98 90" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M102 96 C104 92, 102 88, 98 90" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

      {/* === Main berry - elongated drupelet cluster hanging down === */}
      {/* Row 1 (top, widest) */}
      <circle cx="91" cy="106" r="6.5" fill="#8B3068" opacity="0.18" />
      <circle cx="91" cy="106" r="6.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="98" cy="104" r="6.5" fill="#8B3068" opacity="0.18" />
      <circle cx="98" cy="104" r="6.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="105" cy="106" r="6.5" fill="#8B3068" opacity="0.18" />
      <circle cx="105" cy="106" r="6.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 2 */}
      <circle cx="88" cy="117" r="6.5" fill="#8B3068" opacity="0.18" />
      <circle cx="88" cy="117" r="6.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="96" cy="116" r="6" fill="#8B3068" opacity="0.18" />
      <circle cx="96" cy="116" r="6" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="104" cy="117" r="6.5" fill="#8B3068" opacity="0.18" />
      <circle cx="104" cy="117" r="6.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 3 (narrowing) */}
      <circle cx="90" cy="128" r="6" fill="#8B3068" opacity="0.18" />
      <circle cx="90" cy="128" r="6" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="98" cy="127" r="6" fill="#8B3068" opacity="0.18" />
      <circle cx="98" cy="127" r="6" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="106" cy="128" r="6" fill="#8B3068" opacity="0.18" />
      <circle cx="106" cy="128" r="6" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 4 */}
      <circle cx="92" cy="138" r="5.5" fill="#8B3068" opacity="0.18" />
      <circle cx="92" cy="138" r="5.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="100" cy="137" r="5.5" fill="#8B3068" opacity="0.18" />
      <circle cx="100" cy="137" r="5.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 5 (narrowing more) */}
      <circle cx="94" cy="147" r="5" fill="#8B3068" opacity="0.18" />
      <circle cx="94" cy="147" r="5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="102" cy="147" r="5" fill="#8B3068" opacity="0.18" />
      <circle cx="102" cy="147" r="5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 6 (tip) */}
      <circle cx="98" cy="155" r="4" fill="#8B3068" opacity="0.18" />
      <circle cx="98" cy="155" r="4" stroke="#7B2858" strokeWidth="1.8" fill="none" />

      {/* Highlights on main berry */}
      <circle cx="88" cy="104" r="2.5" fill="#C070A0" opacity="0.3" />
      <circle cx="85" cy="115" r="2" fill="#C070A0" opacity="0.25" />
      {/* Shadows */}
      <circle cx="106" cy="116" r="1" fill="#7B2858" opacity="0.15" />
      <circle cx="100" cy="136" r="1" fill="#7B2858" opacity="0.12" />

      {/* === Second berry - smaller, semi-ripe, on side spur === */}
      {/* Calyx */}
      <path d="M52 56 C50 52, 48 54, 50 58" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M62 56 C64 52, 62 50, 58 52" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Row 1 */}
      <circle cx="53" cy="62" r="5" fill="#A85080" opacity="0.16" />
      <circle cx="53" cy="62" r="5" stroke="#8B4068" strokeWidth="1.8" fill="none" />
      <circle cx="60" cy="61" r="5" fill="#A85080" opacity="0.16" />
      <circle cx="60" cy="61" r="5" stroke="#8B4068" strokeWidth="1.8" fill="none" />
      {/* Row 2 */}
      <circle cx="54" cy="71" r="5" fill="#A85080" opacity="0.16" />
      <circle cx="54" cy="71" r="5" stroke="#8B4068" strokeWidth="1.8" fill="none" />
      <circle cx="61" cy="70" r="4.5" fill="#A85080" opacity="0.16" />
      <circle cx="61" cy="70" r="4.5" stroke="#8B4068" strokeWidth="1.8" fill="none" />
      {/* Row 3 (tip) */}
      <circle cx="56" cy="79" r="4" fill="#A85080" opacity="0.16" />
      <circle cx="56" cy="79" r="4" stroke="#8B4068" strokeWidth="1.8" fill="none" />
      {/* Highlight */}
      <circle cx="51" cy="61" r="1.8" fill="#C888A8" opacity="0.25" />

      {/* Ground shadow */}
      <ellipse cx="98" cy="170" rx="30" ry="4" fill="#8B7355" opacity="0.08" />
    </svg>
  )
}

export function TayberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M14 4 C16 8, 20 14, 24 18" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small leaf */}
      <path d="M17 9 C13 7, 9 7, 8 9" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Calyx */}
      <path d="M20 20 C18 18, 20 16, 22 18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M28 20 C30 18, 28 16, 26 18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Elongated drupelet cluster hanging down */}
      {/* Row 1 */}
      <circle cx="21" cy="24" r="4" fill="#8B3068" opacity="0.18" />
      <circle cx="21" cy="24" r="4" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="24" r="4" fill="#8B3068" opacity="0.18" />
      <circle cx="27" cy="24" r="4" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 2 */}
      <circle cx="21" cy="31" r="3.8" fill="#8B3068" opacity="0.18" />
      <circle cx="21" cy="31" r="3.8" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="31" r="3.8" fill="#8B3068" opacity="0.18" />
      <circle cx="27" cy="31" r="3.8" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 3 (narrowing) */}
      <circle cx="22" cy="37.5" r="3.5" fill="#8B3068" opacity="0.18" />
      <circle cx="22" cy="37.5" r="3.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="37.5" r="3.5" fill="#8B3068" opacity="0.18" />
      <circle cx="27" cy="37.5" r="3.5" stroke="#7B2858" strokeWidth="1.8" fill="none" />
      {/* Row 4 (tip) */}
      <circle cx="24" cy="43" r="3" fill="#8B3068" opacity="0.18" />
      <circle cx="24" cy="43" r="3" stroke="#7B2858" strokeWidth="1.8" fill="none" />

      {/* Highlight */}
      <circle cx="19" cy="23" r="1.5" fill="#C070A0" opacity="0.3" />
    </svg>
  )
}
