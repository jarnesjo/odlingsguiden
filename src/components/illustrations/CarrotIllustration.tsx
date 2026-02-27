import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function CarrotIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      <path d="M100 75 L100 28" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 28 C98 18, 92 12, 85 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 28 C102 18, 108 12, 115 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M96 55 C90 42, 78 30, 65 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M96 55 C88 45, 74 38, 60 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M65 22 C70 24, 72 30, 68 36 C64 42, 58 38, 60 32 C62 26, 63 23, 65 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M96 50 C86 38, 70 28, 58 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M104 55 C110 42, 122 30, 135 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M104 55 C112 45, 126 38, 140 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M135 22 C130 24, 128 30, 132 36 C136 42, 142 38, 140 32 C138 26, 137 23, 135 22Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M104 50 C114 38, 130 28, 142 18" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M85 8 C82 6, 80 8, 81 11" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M115 8 C118 6, 120 8, 119 11" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M84 78 C82 78, 80 82, 79 88 L74 120 C72 132, 76 148, 82 160 C86 168, 92 175, 98 180 C100 182, 100 182, 102 180 C108 175, 114 168, 118 160 C124 148, 128 132, 126 120 L121 88 C120 82, 118 78, 116 78 Z" fill="#E8943A" opacity="0.2" />
      <path d="M84 78 C82 78, 80 82, 79 88 L74 120 C72 132, 76 148, 82 160 C86 168, 92 175, 98 180 C100 182, 100 182, 102 180 C108 175, 114 168, 118 160 C124 148, 128 132, 126 120 L121 88 C120 82, 118 78, 116 78" stroke="#D4782A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M98 180 C99 184, 100 188, 100 192" stroke="#D4782A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M102 180 C101 184, 100 188, 100 192" stroke="#D4782A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M88 90 C92 88, 108 88, 112 90" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M86 102 C90 100, 110 100, 114 102" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M80 118 C84 116, 116 116, 120 118" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M82 134 C86 132, 114 132, 118 134" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M86 148 C90 146, 110 146, 114 148" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M90 162 C94 160, 106 160, 110 162" stroke="#D4782A" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M92 85 C90 95, 88 115, 90 140" stroke="#F5C882" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
      <path d="M86 110 Q82 112 80 110" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M114 125 Q118 127 120 125" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M84 140 Q80 142 78 140" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <circle cx="76" cy="168" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="124" cy="165" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="90" cy="185" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="112" cy="182" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function CarrotIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 16 L24 8 C23 5, 20 3, 18 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8 C25 5, 28 3, 30 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 12 C19 8, 14 5, 12 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M26 12 C29 8, 34 5, 36 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M20 17 C19 17, 18 19, 17.5 22 L16 30 C15.5 34, 17 38, 20 42 C22 44, 24 45, 24 45 C24 45, 26 44, 28 42 C31 38, 32.5 34, 32 30 L30.5 22 C30 19, 29 17, 28 17" fill="#E8943A" opacity="0.2" />
      <path d="M20 17 C19 17, 18 19, 17.5 22 L16 30 C15.5 34, 17 38, 20 42 C22 44, 24 45, 24 45 C24 45, 26 44, 28 42 C31 38, 32.5 34, 32 30 L30.5 22 C30 19, 29 17, 28 17" stroke="#D4782A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M19.5 24 C21 23, 27 23, 28.5 24" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M18 30 C20 29, 28 29, 30 30" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M19 36 C21 35, 27 35, 29 36" stroke="#D4782A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
