import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function LettuceIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Outer leaves - layered rosette */}
      {/* Back left leaf */}
      <path d="M60 120 C50 100, 48 80, 55 65 C62 50, 75 48, 82 55 C89 62, 85 80, 80 95 C75 110, 70 120, 60 120Z" fill="#6B8E4E" opacity="0.12" />
      <path d="M60 120 C50 100, 48 80, 55 65 C62 50, 75 48, 82 55 C89 62, 85 80, 80 95" stroke="#5A7E3E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Back right leaf */}
      <path d="M140 120 C150 100, 152 80, 145 65 C138 50, 125 48, 118 55 C111 62, 115 80, 120 95 C125 110, 130 120, 140 120Z" fill="#6B8E4E" opacity="0.12" />
      <path d="M140 120 C150 100, 152 80, 145 65 C138 50, 125 48, 118 55 C111 62, 115 80, 120 95" stroke="#5A7E3E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Back center leaf */}
      <path d="M100 55 C95 45, 92 35, 95 28 C98 21, 102 21, 105 28 C108 35, 105 45, 100 55Z" fill="#6B8E4E" opacity="0.10" />
      <path d="M100 55 C95 45, 92 35, 95 28 C98 21, 102 21, 105 28 C108 35, 105 45, 100 55" stroke="#5A7E3E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Middle left leaf */}
      <path d="M65 130 C55 115, 52 95, 58 78 C64 61, 78 58, 88 68 C98 78, 92 100, 85 115 C78 130, 75 135, 65 130Z" fill="#7BA35C" opacity="0.15" />
      <path d="M65 130 C55 115, 52 95, 58 78 C64 61, 78 58, 88 68" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf ruffled edge */}
      <path d="M65 130 C60 126, 58 120, 62 118 C66 116, 68 122, 65 130" stroke="#5A7E3E" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Middle right leaf */}
      <path d="M135 130 C145 115, 148 95, 142 78 C136 61, 122 58, 112 68 C102 78, 108 100, 115 115 C122 130, 125 135, 135 130Z" fill="#7BA35C" opacity="0.15" />
      <path d="M135 130 C145 115, 148 95, 142 78 C136 61, 122 58, 112 68" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M135 130 C140 126, 142 120, 138 118 C134 116, 132 122, 135 130" stroke="#5A7E3E" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Inner left leaf */}
      <path d="M75 135 C68 120, 66 100, 72 85 C78 70, 90 70, 95 82 C100 94, 96 115, 90 128 C84 138, 80 140, 75 135Z" fill="#8CAF6E" opacity="0.18" />
      <path d="M75 135 C68 120, 66 100, 72 85 C78 70, 90 70, 95 82" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf vein */}
      <path d="M80 130 C76 115, 74 100, 78 88" stroke="#5A7E3E" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Inner right leaf */}
      <path d="M125 135 C132 120, 134 100, 128 85 C122 70, 110 70, 105 82 C100 94, 104 115, 110 128 C116 138, 120 140, 125 135Z" fill="#8CAF6E" opacity="0.18" />
      <path d="M125 135 C132 120, 134 100, 128 85 C122 70, 110 70, 105 82" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M120 130 C124 115, 126 100, 122 88" stroke="#5A7E3E" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Center heart */}
      <path d="M92 110 C88 100, 88 88, 93 80 C98 72, 102 72, 107 80 C112 88, 112 100, 108 110 C104 118, 96 118, 92 110Z" fill="#A8C98A" opacity="0.2" />
      <path d="M92 110 C88 100, 88 88, 93 80 C98 72, 102 72, 107 80 C112 88, 112 100, 108 110" stroke="#5A7E3E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Center vein */}
      <path d="M100 115 C100 105, 100 95, 100 82" stroke="#5A7E3E" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Root area */}
      <path d="M95 140 C94 148, 92 155, 90 160" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M105 140 C106 148, 108 155, 110 160" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.2" />

      {/* Ground dots */}
      <circle cx="70" cy="155" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="130" cy="158" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="165" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function LettuceIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Outer left leaf */}
      <path d="M14 32 C10 24, 10 16, 14 10 C18 6, 22 8, 24 14" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M14 32 C10 24, 10 16, 14 10 C18 6, 22 8, 24 14 C22 22, 18 28, 14 32Z" fill="#7BA35C" opacity="0.15" />

      {/* Outer right leaf */}
      <path d="M34 32 C38 24, 38 16, 34 10 C30 6, 26 8, 24 14" stroke="#5A7E3E" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M34 32 C38 24, 38 16, 34 10 C30 6, 26 8, 24 14 C26 22, 30 28, 34 32Z" fill="#7BA35C" opacity="0.15" />

      {/* Inner left leaf */}
      <path d="M17 30 C14 22, 14 14, 18 10 C22 6, 24 10, 24 16" stroke="#5A7E3E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M17 30 C14 22, 14 14, 18 10 C22 6, 24 10, 24 16 C22 22, 20 28, 17 30Z" fill="#8CAF6E" opacity="0.18" />

      {/* Inner right leaf */}
      <path d="M31 30 C34 22, 34 14, 30 10 C26 6, 24 10, 24 16" stroke="#5A7E3E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M31 30 C34 22, 34 14, 30 10 C26 6, 24 10, 24 16 C26 22, 28 28, 31 30Z" fill="#8CAF6E" opacity="0.18" />

      {/* Center heart */}
      <path d="M21 26 C20 20, 21 14, 24 12 C27 14, 28 20, 27 26 C26 30, 22 30, 21 26Z" fill="#A8C98A" opacity="0.2" />
      <path d="M21 26 C20 20, 21 14, 24 12 C27 14, 28 20, 27 26" stroke="#5A7E3E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Root hints */}
      <path d="M22 32 C21 36, 20 40, 19 42" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M26 32 C27 36, 28 40, 29 42" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
