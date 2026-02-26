import { colors } from '../../theme/tokens'

interface FaviconProps {
  size?: number
}

/** Favicon - Grodden (forenklad for 32x32 / 16x16) */
export function FaviconSprout({ size = 32 }: FaviconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill={colors.accent} />
      <path d="M16 22 C16 16, 16 12, 15 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 14 C12 10, 7 9, 5 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <path d="M15 14 C18 10, 23 9, 25 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <path d="M15 8 C14 4, 15 2, 16 1 C17 2, 18 4, 17 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="16" cy="25" rx="4" ry="3" fill="#fff" opacity="0.15" />
    </svg>
  )
}

/** Favicon - Bladet (forenklad for 32x32 / 16x16) */
export function FaviconLeaf({ size = 32 }: FaviconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill={colors.accent} />
      <path d="M16 4 C10 8, 6 16, 7 22 C8 26, 12 28, 16 28 C20 28, 24 26, 25 22 C26 16, 22 8, 16 4Z" fill="#fff" opacity="0.15" />
      <path d="M16 4 C10 8, 6 16, 7 22 C8 26, 12 28, 16 28 C20 28, 24 26, 25 22 C26 16, 22 8, 16 4Z" stroke="#fff" strokeWidth="1.8" fill="none" />
      <path d="M16 6 L16 27" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/** Favicon - Grodan (forenklad for 32x32 / 16x16) */
export function FaviconCrop({ size = 32 }: FaviconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill={colors.accent} />
      <path d="M16 12 L16 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 4 C14 2, 12 1, 10 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M16 4 C18 2, 20 1, 22 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M9 16 C9 12, 11 10, 16 10 C21 10, 23 12, 23 16 C23 22, 21 27, 16 28 C11 27, 9 22, 9 16Z" fill="#fff" opacity="0.15" />
      <path d="M16 10 C12 10, 10 12, 9 16 C8 20, 10 25, 14 27 C15 28, 16 28, 16 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M16 10 C20 10, 22 12, 23 16 C24 20, 22 25, 18 27 C17 28, 16 28, 16 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  )
}
