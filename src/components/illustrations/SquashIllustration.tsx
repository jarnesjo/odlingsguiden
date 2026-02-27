import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SquashIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Stem */}
      <path d="M100 70 C98 60, 96 50, 98 42" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M98 42 C97 38, 95 34, 92 30" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Large leaf left */}
      <path d="M92 30 C80 24, 62 22, 50 28 C38 34, 40 48, 52 46 C64 44, 80 38, 92 30Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M92 30 C80 24, 62 22, 50 28 C38 34, 40 48, 52 46 C64 44, 80 38, 92 30" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf veins */}
      <path d="M92 30 C78 32, 62 36, 50 38" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M82 28 C76 34, 68 40, 58 44" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Large leaf right */}
      <path d="M98 42 C110 34, 128 30, 140 34 C152 38, 150 52, 138 48 C126 44, 110 42, 98 42Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M98 42 C110 34, 128 30, 140 34 C152 38, 150 52, 138 48 C126 44, 110 42, 98 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M98 42 C112 40, 128 40, 140 42" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Flower */}
      <path d="M92 30 C88 24, 84 20, 80 18 C76 16, 74 18, 76 22 C78 26, 82 28, 86 28" stroke="#C4956A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M80 18 C78 14, 82 12, 84 16" fill="#F5D67B" opacity="0.3" />

      {/* Main squash body - elongated zucchini shape */}
      <path d="M82 75 C78 78, 72 88, 68 100 C64 115, 62 135, 66 150 C68 158, 74 165, 82 170 C90 175, 110 175, 118 170 C126 165, 132 158, 134 150 C138 135, 136 115, 132 100 C128 88, 122 78, 118 75 C112 70, 88 70, 82 75Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M82 75 C78 78, 72 88, 68 100 C64 115, 62 135, 66 150 C68 158, 74 165, 82 170 C90 175, 110 175, 118 170 C126 165, 132 158, 134 150 C138 135, 136 115, 132 100 C128 88, 122 78, 118 75 C112 70, 88 70, 82 75" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Squash stripes/ridges */}
      <path d="M90 72 C86 85, 82 110, 80 135 C78 150, 80 162, 85 172" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M100 70 C98 85, 96 110, 95 135 C94 150, 96 162, 100 174" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M110 72 C114 85, 118 110, 120 135 C122 150, 120 162, 115 172" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Highlight */}
      <path d="M112 80 C116 95, 118 115, 116 140" stroke="#8CAF6E" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Small speckles on skin */}
      <circle cx="88" cy="95" r="1" fill="#3D6B4F" opacity="0.15" />
      <circle cx="108" cy="105" r="0.8" fill="#3D6B4F" opacity="0.12" />
      <circle cx="92" cy="125" r="1" fill="#3D6B4F" opacity="0.15" />
      <circle cx="112" cy="140" r="0.8" fill="#3D6B4F" opacity="0.12" />
      <circle cx="85" cy="150" r="1" fill="#3D6B4F" opacity="0.1" />

      {/* Blossom end */}
      <path d="M88 170 C92 176, 98 178, 100 178" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M112 170 C108 176, 102 178, 100 178" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="60" cy="178" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="140" cy="180" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="185" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function SquashIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 14 C23 10, 22 7, 20 5" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Leaf */}
      <path d="M20 5 C15 3, 10 4, 9 7 C8 10, 10 13, 14 12 C18 11, 20 8, 20 5Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M20 5 C15 3, 10 4, 9 7 C8 10, 10 13, 14 12 C18 11, 20 8, 20 5" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Squash body */}
      <path d="M18 16 C16 18, 14 22, 13 28 C12 34, 13 39, 16 42 C18 44, 22 45, 24 45 C26 45, 30 44, 32 42 C35 39, 36 34, 35 28 C34 22, 32 18, 30 16 C28 14, 20 14, 18 16Z" fill="#4A7A3D" opacity="0.15" />
      <path d="M18 16 C16 18, 14 22, 13 28 C12 34, 13 39, 16 42 C18 44, 22 45, 24 45 C26 45, 30 44, 32 42 C35 39, 36 34, 35 28 C34 22, 32 18, 30 16 C28 14, 20 14, 18 16" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ridges */}
      <path d="M21 15 C19 22, 18 30, 19 40" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M27 15 C29 22, 30 30, 29 40" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Highlight */}
      <path d="M29 18 C30 24, 30 32, 29 38" stroke="#8CAF6E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
