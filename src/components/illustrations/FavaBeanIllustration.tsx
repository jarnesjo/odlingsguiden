import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function FavaBeanIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Main stem - thick, upright */}
      <path d="M100 170 C99 155, 98 140, 98 125 C98 110, 99 95, 100 80 C101 65, 102 50, 103 38" stroke="#3D6B4F" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left branch */}
      <path d="M99 120 C95 115, 90 112, 85 110" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Right branch */}
      <path d="M100 90 C104 85, 110 82, 116 80" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Lower left leaf - broad, oval (characteristic) */}
      <path d="M85 110 C78 104, 65 100, 56 103 Q48 106, 52 114 C56 120, 68 118, 78 114 Q85 112, 85 110Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M85 110 C78 104, 65 100, 56 103 Q48 106, 52 114 C56 120, 68 118, 78 114 Q85 112, 85 110" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf vein */}
      <path d="M85 110 C76 108, 66 108, 56 110" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Upper right leaf */}
      <path d="M116 80 C122 74, 134 70, 142 73 Q150 76, 146 84 C142 90, 130 88, 122 84 Q116 82, 116 80Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M116 80 C122 74, 134 70, 142 73 Q150 76, 146 84 C142 90, 130 88, 122 84 Q116 82, 116 80" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf vein */}
      <path d="M116 80 C124 78, 134 78, 142 80" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Small upper leaf pair near top */}
      <path d="M103 50 C96 44, 86 42, 80 45 Q76 48, 80 52 C84 56, 92 54, 98 50 Q103 50, 103 50Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M103 50 C96 44, 86 42, 80 45 Q76 48, 80 52 C84 56, 92 54, 98 50" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M103 50 C110 44, 120 42, 126 45 Q130 48, 126 52 C122 56, 114 54, 108 50 Q103 50, 103 50Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M103 50 C110 44, 120 42, 126 45 Q130 48, 126 52 C122 56, 114 54, 108 50" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Main pod - left side, thick and chunky with bean bumps */}
      <path d="M82 105 C76 108, 70 118, 68 130 C66 142, 70 156, 76 164 Q80 170, 86 168 C92 166, 96 158, 98 148 C100 138, 100 124, 96 114 Q92 104, 86 104 Z" fill="#6B8E4E" opacity="0.15" />
      <path d="M82 105 C76 108, 70 118, 68 130 C66 142, 70 156, 76 164 Q80 170, 86 168 C92 166, 96 158, 98 148 C100 138, 100 124, 96 114 Q92 104, 86 104" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Pod seam line */}
      <path d="M84 108 C78 118, 74 132, 74 145 Q74 156, 78 165" stroke="#4A7A3D" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Bean bumps in pod - larger than peas */}
      <circle cx="84" cy="120" r="9" fill="#6B8E4E" opacity="0.12" />
      <circle cx="84" cy="120" r="9" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="82" cy="138" r="10" fill="#6B8E4E" opacity="0.12" />
      <circle cx="82" cy="138" r="10" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="80" cy="156" r="9" fill="#6B8E4E" opacity="0.12" />
      <circle cx="80" cy="156" r="9" stroke="#4A7A3D" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Pod highlight */}
      <path d="M93 110 C94 122, 94 138, 92 155" stroke="#8CAF6E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Second smaller pod - right side */}
      <path d="M118 78 C114 80, 110 88, 109 96 C108 104, 110 114, 114 120 Q117 124, 121 122 C125 120, 128 114, 129 106 C130 98, 128 88, 124 82 Q121 76, 118 78 Z" fill="#6B8E4E" opacity="0.12" />
      <path d="M118 78 C114 80, 110 88, 109 96 C108 104, 110 114, 114 120 Q117 124, 121 122 C125 120, 128 114, 129 106 C130 98, 128 88, 124 82 Q121 76, 118 78" stroke="#4A7A3D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Bean bumps in smaller pod */}
      <circle cx="118" cy="92" r="6" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.2" />
      <circle cx="117" cy="106" r="7" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.2" />

      {/* Flower cluster at top - black and white characteristic */}
      {/* Flower 1 */}
      <path d="M103 38 C98 32, 94 28, 92 30 Q90 32, 92 35 C94 38, 98 38, 103 38Z" fill="#F5F2EB" opacity="0.6" />
      <path d="M103 38 C98 32, 94 28, 92 30 Q90 32, 92 35" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Dark spot on petal */}
      <circle cx="94" cy="32" r="1.5" fill="#2C3028" opacity="0.35" />

      {/* Flower 2 */}
      <path d="M103 38 C108 32, 112 28, 114 30 Q116 32, 114 35 C112 38, 108 38, 103 38Z" fill="#F5F2EB" opacity="0.5" />
      <path d="M103 38 C108 32, 112 28, 114 30 Q116 32, 114 35" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Dark spot on petal */}
      <circle cx="112" cy="32" r="1.5" fill="#2C3028" opacity="0.3" />

      {/* Flower bud */}
      <path d="M103 38 C104 34, 106 30, 105 26" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="105" cy="25" r="2.5" fill="#F5F2EB" opacity="0.4" stroke="#3D6B4F" strokeWidth="0.8" />

      {/* Ground dots */}
      <circle cx="80" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="108" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="120" cy="172" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="92" cy="178" r="0.8" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function FavaBeanIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem - thick, upright */}
      <path d="M22 42 C22 36, 22 30, 22 24 C22 18, 23 12, 24 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M22 24 C18 20, 12 19, 9 21 Q7 23, 9 25 C11 27, 16 26, 20 24 Q22 24, 22 24Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M22 24 C18 20, 12 19, 9 21 Q7 23, 9 25 C11 27, 16 26, 20 24" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Right leaf */}
      <path d="M23 16 C27 13, 32 12, 35 14 Q37 16, 35 18 C33 20, 28 19, 25 17 Q23 16, 23 16Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M23 16 C27 13, 32 12, 35 14 Q37 16, 35 18 C33 20, 28 19, 25 17" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Main pod - thick and chunky */}
      <path d="M18 22 C15 24, 12 28, 11 33 C10 38, 13 42, 16 43 Q18 44, 20 42 C22 40, 24 36, 24 31 C24 26, 22 22, 20 21 Q18 20, 18 22Z" fill="#6B8E4E" opacity="0.15" />
      <path d="M18 22 C15 24, 12 28, 11 33 C10 38, 13 42, 16 43 Q18 44, 20 42 C22 40, 24 36, 24 31 C24 26, 22 22, 20 21 Q18 20, 18 22" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Bean bumps */}
      <circle cx="17" cy="28" r="3.5" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="16" cy="36" r="4" stroke="#4A7A3D" strokeWidth="0.8" fill="none" opacity="0.3" />

      {/* Pod highlight */}
      <path d="M22 24 C22 28, 22 34, 21 40" stroke="#8CAF6E" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Flower hint at top */}
      <path d="M24 8 C22 6, 20 5, 19 6 Q18 7, 19 8" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="19" cy="6" r="1.5" fill="#F5F2EB" opacity="0.4" stroke="#3D6B4F" strokeWidth="0.6" />
    </svg>
  )
}
