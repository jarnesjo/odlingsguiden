import { colors } from '../../../theme/tokens'

interface SymbolSproutProps {
  size?: number
  accent?: string
  warm?: string
}

/** "Grodden" - ett fro som spirar, enkelt och organiskt (primar symbol) */
export function SymbolSprout({
  size = 64,
  accent = colors.accent,
  warm = colors.warm,
}: SymbolSproutProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Jordcirkel */}
      <circle cx="32" cy="42" r="18" fill={accent} opacity="0.08" />
      {/* Fro i jorden */}
      <ellipse cx="32" cy="46" rx="6" ry="4.5" fill={colors.earth} opacity="0.2" />
      <ellipse cx="32" cy="46" rx="6" ry="4.5" stroke={colors.earth} strokeWidth="1.8" fill="none" />
      {/* Huvudstjalk */}
      <path d="M32 42 C32 34, 32 26, 30 18" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      {/* Forsta bladparet */}
      <path d="M31 28 C26 22, 16 18, 12 20 C16 16, 24 14, 30 22" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 20 C16 16, 24 14, 30 22 C24 14, 16 16, 12 20" fill={accent} opacity="0.1" />
      <path d="M31 28 C36 22, 46 20, 50 22 C46 18, 38 16, 32 22" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M50 22 C46 18, 38 16, 32 22 C38 16, 46 18, 50 22" fill={accent} opacity="0.1" />
      {/* Toppblad */}
      <path d="M30 18 C28 12, 30 6, 32 4 C34 6, 36 12, 34 18" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 18 C28 12, 30 6, 32 4 C34 6, 36 12, 34 18" fill={accent} opacity="0.08" />
      {/* Solstrale (varm accent) */}
      <circle cx="48" cy="10" r="3" fill={warm} opacity="0.2" />
      <circle cx="48" cy="10" r="3" stroke={warm} strokeWidth="1.2" fill="none" opacity="0.5" />
      {/* Liten rot */}
      <path d="M32 50 C30 54, 28 56" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M32 50 C34 53, 36 55" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
