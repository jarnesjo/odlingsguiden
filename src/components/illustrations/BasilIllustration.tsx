import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BasilIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      <path d="M100 185 C100 175, 100 155, 100 130 C100 115, 100 95, 100 75 C100 65, 100 55, 98 45" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Bladpar 1 */}
      <path d="M96 135 C84 130, 55 125, 42 115 C36 110, 38 100, 46 98 C54 96, 68 100, 82 110 C90 118, 94 128, 96 135Z" fill="#5A8A3F" opacity="0.14" />
      <path d="M96 135 C84 130, 55 125, 42 115 C36 110, 38 100, 46 98 C54 96, 68 100, 82 110" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M94 132 C80 124, 60 114, 44 108" stroke="#3D7A2F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M85 126 C78 118, 68 110, 56 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <path d="M80 130 C74 124, 64 118, 52 116" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      <path d="M104 135 C116 130, 145 125, 158 115 C164 110, 162 100, 154 98 C146 96, 132 100, 118 110 C110 118, 106 128, 104 135Z" fill="#5A8A3F" opacity="0.12" />
      <path d="M104 135 C116 130, 145 125, 158 115 C164 110, 162 100, 154 98 C146 96, 132 100, 118 110" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M106 132 C120 124, 140 114, 156 108" stroke="#3D7A2F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M115 126 C122 118, 132 110, 144 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      {/* Bladpar 2 */}
      <path d="M97 105 C86 100, 65 96, 52 88 C47 84, 50 76, 56 75 C64 74, 76 78, 86 88 C92 94, 96 100, 97 105Z" fill="#5A8A3F" opacity="0.16" />
      <path d="M97 105 C86 100, 65 96, 52 88 C47 84, 50 76, 56 75 C64 74, 76 78, 86 88" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M95 102 C84 96, 68 88, 54 82" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <path d="M103 105 C114 100, 135 96, 148 88 C153 84, 150 76, 144 75 C136 74, 124 78, 114 88 C108 94, 104 100, 103 105Z" fill="#5A8A3F" opacity="0.14" />
      <path d="M103 105 C114 100, 135 96, 148 88 C153 84, 150 76, 144 75 C136 74, 124 78, 114 88" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M105 102 C116 96, 132 88, 146 82" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Bladpar 3 */}
      <path d="M98 78 C90 74, 74 70, 65 64 C61 60, 64 54, 68 54 C74 54, 82 58, 90 66 C94 70, 97 74, 98 78Z" fill="#6B9E4A" opacity="0.15" />
      <path d="M98 78 C90 74, 74 70, 65 64 C61 60, 64 54, 68 54 C74 54, 82 58, 90 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M102 78 C110 74, 126 70, 135 64 C139 60, 136 54, 132 54 C126 54, 118 58, 110 66 C106 70, 103 74, 102 78Z" fill="#6B9E4A" opacity="0.13" />
      <path d="M102 78 C110 74, 126 70, 135 64 C139 60, 136 54, 132 54 C126 54, 118 58, 110 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Toppskott */}
      <path d="M98 52 C94 48, 86 44, 82 40 C80 38, 82 34, 86 35 C90 36, 94 40, 97 46" stroke="#6B9E4A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M82 40 C80 38, 82 34, 86 35 C90 36, 94 40, 97 46 C94 40, 86 36, 82 40" fill="#6B9E4A" opacity="0.1" />
      <path d="M100 52 C104 48, 112 44, 116 40 C118 38, 116 34, 112 35 C108 36, 104 40, 101 46" stroke="#6B9E4A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M116 40 C118 38, 116 34, 112 35 C108 36, 104 40, 101 46 C104 40, 112 36, 116 40" fill="#6B9E4A" opacity="0.1" />
      <path d="M98 44 C96 38, 98 32, 100 30 C102 32, 104 38, 102 44" stroke="#7AAE55" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M98 44 C96 38, 98 32, 100 30 C102 32, 104 38, 102 44" fill="#7AAE55" opacity="0.12" />
      {/* Ljusreflex */}
      <ellipse cx="72" cy="108" rx="6" ry="10" fill="#A8D48A" opacity="0.15" transform="rotate(-30 72 108)" />
      <ellipse cx="130" cy="108" rx="5" ry="8" fill="#A8D48A" opacity="0.12" transform="rotate(30 130 108)" />
      <ellipse cx="62" cy="122" rx="8" ry="12" fill="#A8D48A" opacity="0.12" transform="rotate(-20 62 122)" />
      {/* Noddetaljer */}
      <ellipse cx="100" cy="135" rx="3" ry="2" fill="#3D7A2F" opacity="0.12" />
      <ellipse cx="100" cy="105" rx="2.5" ry="1.8" fill="#3D7A2F" opacity="0.12" />
      <ellipse cx="99" cy="78" rx="2" ry="1.5" fill="#3D7A2F" opacity="0.1" />
      {/* Kruka */}
      <path d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185" fill={colors.warm} opacity="0.1" />
      <line x1="80" y1="185" x2="120" y2="185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M86 174 C90 172, 96 171, 100 171 C104 171, 110 172, 114 174" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="92" cy="173" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="108" cy="173" r="0.8" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function BasilIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 44 L24 14" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 34 C18 32, 10 30, 7 26 C5 24, 7 20, 10 20 C14 20, 19 24, 22 30" fill="#5A8A3F" opacity="0.14" />
      <path d="M23 34 C18 32, 10 30, 7 26 C5 24, 7 20, 10 20 C14 20, 19 24, 22 30" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M25 34 C30 32, 38 30, 41 26 C43 24, 41 20, 38 20 C34 20, 29 24, 26 30" fill="#5A8A3F" opacity="0.12" />
      <path d="M25 34 C30 32, 38 30, 41 26 C43 24, 41 20, 38 20 C34 20, 29 24, 26 30" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M23 24 C19 22, 13 20, 10 16 C9 14, 11 12, 14 12 C17 12, 21 16, 23 20" fill="#6B9E4A" opacity="0.14" />
      <path d="M23 24 C19 22, 13 20, 10 16 C9 14, 11 12, 14 12 C17 12, 21 16, 23 20" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M25 24 C29 22, 35 20, 38 16 C39 14, 37 12, 34 12 C31 12, 27 16, 25 20" fill="#6B9E4A" opacity="0.12" />
      <path d="M25 24 C29 22, 35 20, 38 16 C39 14, 37 12, 34 12 C31 12, 27 16, 25 20" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M23 16 C21 12, 23 8, 24 6 C25 8, 27 12, 25 16" stroke="#7AAE55" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23 16 C21 12, 23 8, 24 6 C25 8, 27 12, 25 16" fill="#7AAE55" opacity="0.1" />
    </svg>
  )
}
