import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function HoneyberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <path d="M85 170 Q88 155, 90 138 Q92 122, 94 108 Q96 96, 98 82" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Branch fork left */}
      <path d="M98 82 Q92 68, 82 56 Q76 48, 66 40" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Branch fork right */}
      <path d="M98 82 Q106 68, 118 58 Q128 50, 138 44" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Side branch */}
      <path d="M94 108 Q84 100, 72 96" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left leaf - oval, opposite pairs */}
      <path d="M66 40 Q52 32, 38 30 Q30 32, 26 38 Q32 30, 42 26 Q56 24, 64 34Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M66 40 Q52 32, 38 30 Q30 32, 26 38" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M26 38 Q32 30, 42 26 Q56 24, 64 34" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M66 40 Q48 34, 32 34" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf */}
      <path d="M138 44 Q152 36, 168 34 Q174 36, 178 42 Q172 32, 162 30 Q148 28, 140 38Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M138 44 Q152 36, 168 34 Q174 36, 178 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M178 42 Q172 32, 162 30 Q148 28, 140 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Side leaf */}
      <path d="M72 96 Q60 90, 46 90 Q40 92, 36 98" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M36 98 Q42 90, 50 88 Q60 88, 68 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Berry stems */}
      <path d="M82 56 Q78 62, 72 68" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M82 56 Q84 64, 86 72" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M80 60 Q74 66, 66 74" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

      <path d="M118 58 Q120 66, 122 74" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M120 62 Q126 68, 134 74" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

      <path d="M80 100 Q76 108, 72 116" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M82 102 Q84 110, 88 118" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* --- Honeyberries - elongated oval, blue-purple with bloom --- */}

      {/* Berry 1 - ripe, elongated */}
      <ellipse cx="70" cy="74" rx="6" ry="10" transform="rotate(-10 70 74)" fill="#3B4898" opacity="0.3" />
      <ellipse cx="70" cy="74" rx="6" ry="10" transform="rotate(-10 70 74)" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      {/* Dusty bloom */}
      <ellipse cx="70" cy="74" rx="4.5" ry="8" transform="rotate(-10 70 74)" stroke="#8090C8" strokeWidth="0.5" fill="none" opacity="0.2" />
      {/* Highlight */}
      <ellipse cx="66" cy="69" rx="2.5" ry="3.5" fill="#7B8CC8" opacity="0.25" />
      {/* Calyx */}
      <path d="M66 65 L64 62 M69 64 L69 61 M73 65 L75 62" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 2 */}
      <ellipse cx="88" cy="78" rx="5.5" ry="9.5" transform="rotate(5 88 78)" fill="#3B4898" opacity="0.3" />
      <ellipse cx="88" cy="78" rx="5.5" ry="9.5" transform="rotate(5 88 78)" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="88" cy="78" rx="4" ry="7.5" transform="rotate(5 88 78)" stroke="#8090C8" strokeWidth="0.5" fill="none" opacity="0.18" />
      <ellipse cx="84" cy="73" rx="2" ry="3" fill="#7B8CC8" opacity="0.25" />
      {/* Calyx */}
      <path d="M84 69 L83 66 M87 68 L87 65 M91 69 L92 66" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Berry 3 - slightly unripe */}
      <ellipse cx="64" cy="86" rx="5" ry="8.5" transform="rotate(-15 64 86)" fill="#4A5898" opacity="0.25" />
      <ellipse cx="64" cy="86" rx="5" ry="8.5" transform="rotate(-15 64 86)" stroke="#3B4580" strokeWidth="1.8" fill="none" />
      <ellipse cx="60" cy="81" rx="2" ry="2.5" fill="#7B8CC8" opacity="0.2" />

      {/* Berry 4 - right cluster */}
      <ellipse cx="124" cy="80" rx="6" ry="10.5" transform="rotate(8 124 80)" fill="#3B4898" opacity="0.3" />
      <ellipse cx="124" cy="80" rx="6" ry="10.5" transform="rotate(8 124 80)" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="124" cy="80" rx="4.5" ry="8.5" transform="rotate(8 124 80)" stroke="#8090C8" strokeWidth="0.5" fill="none" opacity="0.2" />
      <ellipse cx="120" cy="74" rx="2.5" ry="3.5" fill="#7B8CC8" opacity="0.25" />
      {/* Calyx */}
      <path d="M120 70 L118 67 M123 69 L123 66 M127 70 L129 67" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 5 */}
      <ellipse cx="138" cy="80" rx="5.5" ry="9" transform="rotate(-5 138 80)" fill="#3B4898" opacity="0.28" />
      <ellipse cx="138" cy="80" rx="5.5" ry="9" transform="rotate(-5 138 80)" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="134" cy="75" rx="2" ry="3" fill="#7B8CC8" opacity="0.22" />

      {/* Berry 6 - lower cluster */}
      <ellipse cx="74" cy="122" rx="5.5" ry="9.5" transform="rotate(-5 74 122)" fill="#3B4898" opacity="0.28" />
      <ellipse cx="74" cy="122" rx="5.5" ry="9.5" transform="rotate(-5 74 122)" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="70" cy="117" rx="2" ry="3" fill="#7B8CC8" opacity="0.22" />
      {/* Calyx */}
      <path d="M70 113 L68 110 M73 112 L73 109 M77 113 L79 110" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Berry 7 */}
      <ellipse cx="90" cy="124" rx="5" ry="8.5" transform="rotate(10 90 124)" fill="#3B4898" opacity="0.25" />
      <ellipse cx="90" cy="124" rx="5" ry="8.5" transform="rotate(10 90 124)" stroke="#2D3573" strokeWidth="1.8" fill="none" />

      {/* Ground dots */}
      <circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="130" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function HoneyberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 4 Q24 8, 24 12" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small leaf pair */}
      <path d="M24 8 Q29 5, 35 5 Q31 3, 25 5" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M24 10 Q18 7, 12 8 Q16 6, 23 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Berry stems */}
      <path d="M24 12 Q19 16, 14 20" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M24 12 Q29 16, 34 20" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left - elongated blue */}
      <ellipse cx="12" cy="28" rx="5" ry="8.5" fill="#3B4898" opacity="0.3" />
      <ellipse cx="12" cy="28" rx="5" ry="8.5" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="12" cy="28" rx="3.5" ry="6.5" stroke="#8090C8" strokeWidth="0.4" fill="none" opacity="0.2" />
      <ellipse cx="10" cy="24" rx="1.8" ry="2.5" fill="#7B8CC8" opacity="0.25" />

      {/* Berry right - elongated blue */}
      <ellipse cx="36" cy="28" rx="5" ry="8.5" fill="#3B4898" opacity="0.3" />
      <ellipse cx="36" cy="28" rx="5" ry="8.5" stroke="#2D3573" strokeWidth="1.8" fill="none" />
      <ellipse cx="36" cy="28" rx="3.5" ry="6.5" stroke="#8090C8" strokeWidth="0.4" fill="none" opacity="0.2" />
      <ellipse cx="34" cy="24" rx="1.8" ry="2.5" fill="#7B8CC8" opacity="0.25" />

      {/* Calyx hints */}
      <path d="M10 20 L9 18 M12 19 L12 17 M14 20 L15 18" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M34 20 L33 18 M36 19 L36 17 M38 20 L39 18" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
