import { colors } from '../../../theme/tokens'

interface SymbolCropProps {
  size?: number
  accent?: string
  warm?: string
}

/** "Grodan" - en stiliserad groda/frukt med blast */
export function SymbolCrop({
  size = 64,
  accent = colors.accent,
  warm = colors.warm,
}: SymbolCropProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="32" cy="36" r="24" fill={accent} opacity="0.06" />
      {/* Blast */}
      <path d="M32 24 L32 10" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M32 10 C30 6, 26 4, 22 2" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 10 C34 6, 38 4, 42 2" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      {/* Blad vid blasten */}
      <path d="M30 16 C26 12, 18 10, 14 12 C18 8, 24 8, 28 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 16 C38 12, 46 10, 50 12 C46 8, 40 8, 36 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Huvudkropp */}
      <path d="M18 30 C18 24, 22 20, 32 20 C42 20, 46 24, 46 30 C46 42, 42 52, 32 54 C22 52, 18 42, 18 30Z" fill={accent} opacity="0.1" />
      <path d="M32 20 C24 20, 19 24, 18 30 C17 38, 20 48, 28 52 C30 53, 31 54, 32 54" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 20 C40 20, 45 24, 46 30 C47 38, 44 48, 36 52 C34 53, 33 54, 32 54" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Mitt-linje */}
      <path d="M32 22 C32 30, 32 44, 32 52" stroke={accent} strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      {/* Ljusreflex */}
      <ellipse cx="26" cy="32" rx="4" ry="7" fill={accent} opacity="0.08" transform="rotate(-10 26 32)" />
      {/* Varm accent */}
      <circle cx="26" cy="28" r="2" fill={warm} opacity="0.2" />
    </svg>
  )
}
