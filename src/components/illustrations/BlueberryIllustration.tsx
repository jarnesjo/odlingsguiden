import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BlueberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <path d="M80 170 Q82 155, 85 140 Q88 125, 92 110 Q95 100, 97 88" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork left */}
      <path d="M97 88 Q92 76, 85 65 Q80 58, 72 50" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upper branch fork right */}
      <path d="M97 88 Q103 76, 112 65 Q118 58, 126 52" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Small side branch */}
      <path d="M88 125 Q82 118, 72 112" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left leaf (oval, blueberry-typical) */}
      <path d="M72 50 Q60 42, 46 40 Q38 40, 32 46 Q36 38, 44 36 Q56 34, 68 42 Q74 46, 72 50Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M72 50 Q60 42, 46 40 Q38 40, 32 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 46 Q36 38, 44 36 Q56 34, 68 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Left leaf midrib */}
      <path d="M72 50 Q54 44, 38 43" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Left leaf side veins */}
      <path d="M60 44 Q56 39, 50 36" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M52 43 Q50 38, 44 36" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Right leaf */}
      <path d="M126 52 Q138 44, 152 42 Q160 42, 166 48 Q162 40, 154 38 Q142 36, 130 44 Q124 48, 126 52Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M126 52 Q138 44, 152 42 Q160 42, 166 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M166 48 Q162 40, 154 38 Q142 36, 130 44" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right leaf midrib */}
      <path d="M126 52 Q144 46, 160 45" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Right leaf side veins */}
      <path d="M140 45 Q143 40, 148 38" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Side leaf on lower branch */}
      <path d="M72 112 Q60 106, 46 106 Q40 108, 36 114" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M36 114 Q40 107, 48 105 Q58 104, 68 108" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M72 112 Q56 108, 42 109" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Berry cluster stems from upper left branch */}
      <path d="M85 65 Q80 70, 74 76" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M85 65 Q88 72, 90 78" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M82 70 Q76 78, 68 84" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

      {/* Berry cluster stems from right branch */}
      <path d="M112 65 Q116 72, 120 78" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M115 68 Q120 74, 128 80" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

      {/* Berry cluster stems from side branch */}
      <path d="M80 118 Q76 124, 72 130" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M82 120 Q84 126, 88 132" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* --- Left cluster berries --- */}

      {/* Berry 1 - ripe, deep blue */}
      <circle cx="70" cy="84" r="11" fill="#3B5998" opacity="0.3" />
      <circle cx="70" cy="84" r="11" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      {/* Dusty bloom */}
      <circle cx="70" cy="84" r="9" stroke="#8FA4C8" strokeWidth="0.5" fill="none" opacity="0.25" />
      {/* Highlight */}
      <ellipse cx="66" cy="80" rx="3.5" ry="4" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx (star-shaped crown on blueberry) */}
      <path d="M66 74 L64 72 M70 73 L70 71 M74 74 L76 72 M68 74 L67 71 M72 74 L73 71" stroke="#2D4373" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 2 - ripe */}
      <circle cx="88" cy="86" r="10" fill="#3B5998" opacity="0.3" />
      <circle cx="88" cy="86" r="10" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      <circle cx="88" cy="86" r="8" stroke="#8FA4C8" strokeWidth="0.5" fill="none" opacity="0.2" />
      <ellipse cx="84" cy="82" rx="3" ry="3.5" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx */}
      <path d="M85 77 L83 75 M88 76 L88 74 M91 77 L93 75" stroke="#2D4373" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 3 - unripe, lighter blue-green */}
      <circle cx="76" cy="100" r="9" fill="#6B8BA8" opacity="0.25" />
      <circle cx="76" cy="100" r="9" stroke="#4A6B80" strokeWidth="1.8" fill="none" />
      <ellipse cx="73" cy="97" rx="2.5" ry="3" fill="#8BAAC0" opacity="0.3" />
      {/* Calyx */}
      <path d="M73 92 L72 90 M76 91 L76 89 M79 92 L80 90" stroke="#4A6B80" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* --- Right cluster berries --- */}

      {/* Berry 4 - ripe */}
      <circle cx="122" cy="84" r="10.5" fill="#3B5998" opacity="0.3" />
      <circle cx="122" cy="84" r="10.5" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      <circle cx="122" cy="84" r="8.5" stroke="#8FA4C8" strokeWidth="0.5" fill="none" opacity="0.22" />
      <ellipse cx="118" cy="80" rx="3" ry="3.5" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx */}
      <path d="M119 74 L117 72 M122 73 L122 71 M125 74 L127 72" stroke="#2D4373" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 5 - semi-ripe, medium blue */}
      <circle cx="136" cy="88" r="9.5" fill="#4A6B98" opacity="0.28" />
      <circle cx="136" cy="88" r="9.5" stroke="#3B5580" strokeWidth="1.8" fill="none" />
      <ellipse cx="132" cy="84" rx="2.5" ry="3" fill="#7B9CC8" opacity="0.25" />
      {/* Calyx */}
      <path d="M133 79 L132 77 M136 78 L136 76 M139 79 L140 77" stroke="#3B5580" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* --- Lower cluster berries --- */}

      {/* Berry 6 - ripe */}
      <circle cx="72" cy="138" r="10" fill="#3B5998" opacity="0.3" />
      <circle cx="72" cy="138" r="10" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      <circle cx="72" cy="138" r="8" stroke="#8FA4C8" strokeWidth="0.5" fill="none" opacity="0.2" />
      <ellipse cx="68" cy="134" rx="3" ry="3.5" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx */}
      <path d="M69 129 L68 127 M72 128 L72 126 M75 129 L76 127" stroke="#2D4373" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Berry 7 - small, unripe green-blue */}
      <circle cx="90" cy="140" r="8.5" fill="#7A9B6B" opacity="0.22" />
      <circle cx="90" cy="140" r="8.5" stroke="#5A7B50" strokeWidth="1.8" fill="none" />
      <ellipse cx="87" cy="137" rx="2" ry="2.5" fill="#98B888" opacity="0.3" />
      {/* Calyx */}
      <path d="M87 132 L86 130 M90 131 L90 129 M93 132 L94 130" stroke="#5A7B50" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Ground dots */}
      <circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="88" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="130" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function BlueberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Short stem */}
      <path d="M24 6 Q24 10, 24 14" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small leaf */}
      <path d="M24 10 Q29 7, 35 7 Q32 5, 27 7" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Berry stems */}
      <path d="M24 14 Q20 18, 16 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M24 14 Q28 18, 32 22" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M24 14 Q24 20, 24 24" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left - ripe blue */}
      <circle cx="14" cy="28" r="6.5" fill="#3B5998" opacity="0.3" />
      <circle cx="14" cy="28" r="6.5" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      <circle cx="14" cy="28" r="5" stroke="#8FA4C8" strokeWidth="0.4" fill="none" opacity="0.2" />
      <ellipse cx="12" cy="26" rx="2" ry="2.5" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx */}
      <path d="M12 22 L11 20 M14 21 L14 19 M16 22 L17 20" stroke="#2D4373" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry right - ripe blue */}
      <circle cx="34" cy="28" r="6.5" fill="#3B5998" opacity="0.3" />
      <circle cx="34" cy="28" r="6.5" stroke="#2D4373" strokeWidth="1.8" fill="none" />
      <circle cx="34" cy="28" r="5" stroke="#8FA4C8" strokeWidth="0.4" fill="none" opacity="0.2" />
      <ellipse cx="32" cy="26" rx="2" ry="2.5" fill="#7B9CC8" opacity="0.3" />
      {/* Calyx */}
      <path d="M32 22 L31 20 M34 21 L34 19 M36 22 L37 20" stroke="#2D4373" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry center-bottom - semi-ripe */}
      <circle cx="24" cy="36" r="6" fill="#4A6B98" opacity="0.28" />
      <circle cx="24" cy="36" r="6" stroke="#3B5580" strokeWidth="1.8" fill="none" />
      <ellipse cx="22" cy="34" rx="1.8" ry="2" fill="#7B9CC8" opacity="0.25" />
      {/* Calyx */}
      <path d="M22 30 L21 28 M24 30 L24 28 M26 30 L27 28" stroke="#3B5580" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />

      {/* Berry small behind - unripe */}
      <circle cx="24" cy="24" r="4.5" fill="#6B8BA8" opacity="0.2" />
      <circle cx="24" cy="24" r="4.5" stroke="#4A6B80" strokeWidth="1.5" fill="none" opacity="0.7" />
    </svg>
  )
}
