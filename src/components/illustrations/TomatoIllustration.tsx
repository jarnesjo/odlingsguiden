import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function TomatoIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="105" r="90" fill="#F5DDD9" opacity="0.15" />
      <path d="M100 58 L100 35 C100 30, 98 25, 95 22" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 35 C102 30, 105 26, 108 24" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M100 62 C92 55, 78 52, 70 56 C74 52, 82 48, 92 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M70 56 C74 52, 82 48, 92 52" fill="#3D6B4F" opacity="0.1" />
      <path d="M100 62 C108 55, 122 52, 130 56 C126 52, 118 48, 108 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 56 C126 52, 118 48, 108 52" fill="#3D6B4F" opacity="0.1" />
      <path d="M100 60 C95 52, 85 46, 76 48 C80 45, 88 42, 96 48" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M100 60 C105 52, 115 46, 124 48 C120 45, 112 42, 104 48" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M98 60 C97 54, 99 48, 100 44 C101 48, 103 54, 102 60" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M98 60 C97 54, 99 48, 100 44 C101 48, 103 54, 102 60" fill="#3D6B4F" opacity="0.08" />
      <path d="M48 105 C48 75, 65 58, 100 58 C135 58, 152 75, 152 105 C152 140, 135 165, 100 168 C65 165, 48 140, 48 105Z" fill="#D94F3B" opacity="0.15" />
      <path d="M100 58 C75 58, 55 72, 50 95 C45 118, 55 148, 72 160 C82 167, 92 168, 100 168" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M100 58 C125 58, 145 72, 150 95 C155 118, 145 148, 128 160 C118 167, 108 168, 100 168" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M100 62 C100 90, 100 130, 100 165" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M76 65 C72 85, 68 110, 74 145" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
      <path d="M124 65 C128 85, 132 110, 126 145" stroke="#C0392B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
      <ellipse cx="78" cy="90" rx="12" ry="18" fill="#F5A89A" opacity="0.2" transform="rotate(-15 78 90)" />
      <ellipse cx="74" cy="85" rx="5" ry="8" fill="#FCEAE7" opacity="0.25" transform="rotate(-15 74 85)" />
      <path d="M75 158 C82 166, 92 168, 100 168 C108 168, 118 166, 125 158" stroke="#C0392B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <circle cx="100" cy="166" r="2" stroke="#C0392B" strokeWidth="1" opacity="0.3" fill="none" />
      <ellipse cx="100" cy="182" rx="35" ry="5" fill={colors.earth} opacity="0.08" />
    </svg>
  )
}

export function TomatoIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 14 L24 8 C24 6, 23 4, 22 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 15 C21 12, 16 11, 13 12" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 15 C27 12, 32 11, 35 12" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 14 C22 11, 23 8, 24 7 C25 8, 26 11, 25 14" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 25 C10 17, 15 13, 24 13 C33 13, 38 17, 38 25 C38 35, 33 41, 24 42 C15 41, 10 35, 10 25Z" fill="#D94F3B" opacity="0.15" />
      <path d="M24 13 C17 13, 12 17, 11 24 C10 31, 13 37, 18 40 C21 42, 23 42, 24 42" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M24 13 C31 13, 36 17, 37 24 C38 31, 35 37, 30 40 C27 42, 25 42, 24 42" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M24 14 C24 22, 24 34, 24 41" stroke="#C0392B" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      <ellipse cx="18" cy="22" rx="3" ry="5" fill="#F5A89A" opacity="0.2" transform="rotate(-10 18 22)" />
    </svg>
  )
}
