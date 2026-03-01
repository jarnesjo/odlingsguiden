import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SnapBeanIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Main stem rising from center */}
      <path d="M100 168 C100 155, 100 140, 98 125 C96 110, 94 100, 92 88" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Branch left - holds pod group */}
      <path d="M92 88 C84 80, 76 76, 72 70" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Branch right - holds pod group */}
      <path d="M95 100 C104 92, 112 88, 118 84" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Stem tip - upper */}
      <path d="M92 88 C91 78, 90 68, 90 58" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Trifoliate leaf - left cluster (3 heart-shaped leaflets) */}
      {/* Center leaflet */}
      <path d="M72 70 C68 60, 56 56, 48 60 C40 64, 44 74, 52 72 C60 70, 68 68, 72 70Z" fill="#3D6B4F" opacity="0.11" />
      <path d="M72 70 C68 60, 56 56, 48 60 C40 64, 44 74, 52 72 C60 70, 68 68, 72 70" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M72 70 C66 66, 56 64, 50 66" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Upper leaflet */}
      <path d="M72 70 C70 60, 72 50, 78 46 C84 42, 90 46, 88 52 C86 58, 78 62, 72 70Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M72 70 C70 60, 72 50, 78 46 C84 42, 90 46, 88 52 C86 58, 78 62, 72 70" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      {/* Lower leaflet */}
      <path d="M72 70 C64 72, 56 78, 54 86 C52 94, 58 98, 64 94 C70 90, 72 80, 72 70Z" fill="#3D6B4F" opacity="0.09" />
      <path d="M72 70 C64 72, 56 78, 54 86 C52 94, 58 98, 64 94 C70 90, 72 80, 72 70" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Trifoliate leaf - right cluster */}
      {/* Center leaflet */}
      <path d="M118 84 C124 76, 136 74, 144 78 C152 82, 150 92, 142 90 C134 88, 124 86, 118 84Z" fill="#3D6B4F" opacity="0.11" />
      <path d="M118 84 C124 76, 136 74, 144 78 C152 82, 150 92, 142 90 C134 88, 124 86, 118 84" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M118 84 C128 82, 138 82, 144 84" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Upper leaflet */}
      <path d="M118 84 C120 74, 124 64, 130 60 C136 56, 142 60, 140 66 C138 72, 128 76, 118 84Z" fill="#3D6B4F" opacity="0.09" />
      <path d="M118 84 C120 74, 124 64, 130 60 C136 56, 142 60, 140 66 C138 72, 128 76, 118 84" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.50" />

      {/* Small flower bud at stem tip */}
      <path d="M90 58 C86 52, 82 48, 84 44 C86 40, 92 42, 92 48 C92 52, 90 58, 90 58Z" fill="#E8D5E0" opacity="0.35" />
      <path d="M90 58 C86 52, 82 48, 84 44 C86 40, 92 42, 92 48 C92 52, 90 58, 90 58" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <circle cx="89" cy="46" r="2.5" fill="#E8D5E0" opacity="0.5" />

      {/* Pod 1 - hangs from left branch, slightly curved */}
      <path d="M72 70 C70 78, 68 90, 67 102 C66 114, 66 126, 68 136 C70 143, 74 147, 78 147 C82 147, 84 143, 84 136 C85 126, 83 112, 81 100 C79 88, 76 78, 72 70Z" fill="#7AAA5F" opacity="0.16" />
      <path d="M72 70 C70 78, 68 90, 67 102 C66 114, 66 126, 68 136 C70 143, 74 147, 78 147 C82 147, 84 143, 84 136 C85 126, 83 112, 81 100 C79 88, 76 78, 72 70" stroke="#5A8A3F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Pod 1 seam */}
      <path d="M75 72 C74 84, 73 98, 73 110 C73 124, 74 136, 76 145" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      {/* Pod 1 highlight */}
      <path d="M80 80 C81 94, 81 110, 80 126" stroke="#9ACA7F" strokeWidth="1.4" strokeLinecap="round" opacity="0.22" />
      {/* Pod 1 tip */}
      <path d="M75 147 C74 152, 76 156, 78 155 C80 154, 80 150, 78 147" stroke="#5A8A3F" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

      {/* Pod 2 - hangs from right branch, slightly curved other way */}
      <path d="M118 84 C120 92, 122 106, 122 118 C122 130, 120 142, 118 150 C116 156, 112 159, 109 158 C106 157, 104 153, 104 146 C104 135, 106 122, 108 110 C110 98, 114 90, 118 84Z" fill="#7AAA5F" opacity="0.16" />
      <path d="M118 84 C120 92, 122 106, 122 118 C122 130, 120 142, 118 150 C116 156, 112 159, 109 158 C106 157, 104 153, 104 146 C104 135, 106 122, 108 110 C110 98, 114 90, 118 84" stroke="#5A8A3F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Pod 2 seam */}
      <path d="M114 86 C115 100, 116 114, 116 128 C116 140, 115 150, 114 156" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      {/* Pod 2 highlight */}
      <path d="M108 92 C107 106, 107 120, 108 136" stroke="#9ACA7F" strokeWidth="1.4" strokeLinecap="round" opacity="0.22" />
      {/* Pod 2 tip */}
      <path d="M113 158 C112 163, 110 165, 109 163 C108 161, 109 158, 111 158" stroke="#5A8A3F" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

      {/* Pod 3 - center, shorter, hangs from main stem */}
      <path d="M96 110 C94 118, 92 128, 92 138 C92 146, 94 152, 98 153 C102 154, 106 150, 107 142 C108 134, 106 122, 103 114 C100 106, 98 108, 96 110Z" fill="#7AAA5F" opacity="0.14" />
      <path d="M96 110 C94 118, 92 128, 92 138 C92 146, 94 152, 98 153 C102 154, 106 150, 107 142 C108 134, 106 122, 103 114 C100 106, 98 108, 96 110" stroke="#5A8A3F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Pod 3 seam */}
      <path d="M99 112 C98 122, 97 134, 98 144 C99 150, 100 153, 100 153" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      {/* Pod 3 highlight */}
      <path d="M104 116 C105 126, 105 136, 104 144" stroke="#9ACA7F" strokeWidth="1.2" strokeLinecap="round" opacity="0.20" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="178" rx="38" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Soil dots */}
      <circle cx="76" cy="174" r="1.4" fill={colors.earth} opacity="0.18" />
      <circle cx="100" cy="177" r="1" fill={colors.earth} opacity="0.14" />
      <circle cx="122" cy="174" r="1.2" fill={colors.earth} opacity="0.16" />
    </svg>
  )
}

export function SnapBeanIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 40 C24 34, 23 28, 22 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Branch left */}
      <path d="M22 22 C18 19, 14 17, 12 14" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Branch right */}
      <path d="M22 26 C26 23, 30 21, 32 19" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Trifoliate leaf - simplified */}
      <path d="M12 14 C8 10, 2 10, 2 14 C2 18, 8 18, 12 14Z" fill="#3D6B4F" opacity="0.11" />
      <path d="M12 14 C8 10, 2 10, 2 14 C2 18, 8 18, 12 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.60" />
      <path d="M32 19 C36 15, 42 15, 42 19 C42 23, 36 23, 32 19Z" fill="#3D6B4F" opacity="0.11" />
      <path d="M32 19 C36 15, 42 15, 42 19 C42 23, 36 23, 32 19" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.60" />

      {/* Pod 1 - left, hangs down */}
      <path d="M12 14 C11 19, 10 25, 10 31 C10 36, 12 39, 14 39 C16 39, 17 36, 17 31 C17 25, 16 19, 14 16 C13 15, 12 14, 12 14Z" fill="#7AAA5F" opacity="0.16" />
      <path d="M12 14 C11 19, 10 25, 10 31 C10 36, 12 39, 14 39 C16 39, 17 36, 17 31 C17 25, 16 19, 14 16 C13 15, 12 14, 12 14" stroke="#5A8A3F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Pod 1 seam */}
      <path d="M13 16 C13 22, 12 30, 13 37" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" />

      {/* Pod 2 - right, hangs down */}
      <path d="M32 19 C33 24, 34 30, 34 36 C34 40, 32 43, 30 42 C28 41, 27 38, 27 34 C27 28, 29 22, 31 18 C31 18, 32 19, 32 19Z" fill="#7AAA5F" opacity="0.16" />
      <path d="M32 19 C33 24, 34 30, 34 36 C34 40, 32 43, 30 42 C28 41, 27 38, 27 34 C27 28, 29 22, 31 18 C31 18, 32 19, 32 19" stroke="#5A8A3F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Pod 2 seam */}
      <path d="M31 20 C31 26, 31 34, 31 40" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" />
    </svg>
  )
}
