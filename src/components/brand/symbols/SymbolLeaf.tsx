import { colors } from '../../../theme/tokens'

interface SymbolLeafProps {
  size?: number
  accent?: string
  warm?: string
}

/** "Bladet" - stiliserat blad med ådror, minimalistiskt */
export function SymbolLeaf({
  size = 64,
  accent = colors.accent,
  warm = colors.warm,
}: SymbolLeafProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Bladform */}
      <path d="M32 6 C18 14, 8 28, 10 42 C12 52, 22 58, 32 58 C42 58, 52 52, 54 42 C56 28, 46 14, 32 6Z" fill={accent} opacity="0.1" />
      <path d="M32 6 C18 14, 8 28, 10 42 C12 52, 22 58, 32 58 C42 58, 52 52, 54 42 C56 28, 46 14, 32 6Z" stroke={accent} strokeWidth="2" fill="none" />
      {/* Huvudnerv */}
      <path d="M32 10 C32 20, 32 40, 32 56" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      {/* Sidnerver - vänster */}
      <path d="M32 22 C26 18, 18 18, 14 22" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 32 C24 28, 16 28, 12 34" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M32 42 C26 40, 18 40, 14 44" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Sidnerver - höger */}
      <path d="M32 22 C38 18, 46 18, 50 22" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 32 C40 28, 48 28, 52 34" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M32 42 C38 40, 46 40, 50 44" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Liten sol/prick */}
      <circle cx="48" cy="12" r="2.5" fill={warm} opacity="0.35" />
    </svg>
  )
}
