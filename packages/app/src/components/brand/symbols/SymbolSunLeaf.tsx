import { colors } from '@odlingsguiden/shared'
import { Circle, Line, Path, Svg } from 'react-native-svg'

interface SymbolSunLeafProps {
  size?: number
  accent?: string
  warm?: string
}

/** "Solen & Bladet" - sol bakom ett blad, varm och inbjudande */
export function SymbolSunLeaf({
  size = 64,
  accent = colors.accent,
  warm = colors.warm,
}: SymbolSunLeafProps) {
  const sunRays = [0, 45, 90, 135, 180, 225, 270, 315]

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Sol i bakgrunden */}
      <Circle cx="36" cy="24" r="14" fill={warm} opacity="0.12" />
      <Circle cx="36" cy="24" r="14" stroke={warm} strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Solstralar */}
      {sunRays.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 36 + Math.cos(rad) * 17
        const y1 = 24 + Math.sin(rad) * 17
        const x2 = 36 + Math.cos(rad) * 20
        const y2 = 24 + Math.sin(rad) * 20
        return (
          <Line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={warm}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.2"
          />
        )
      })}
      {/* Blad - framfor solen */}
      <Path d="M24 56 C14 48, 8 34, 12 22 C14 16, 20 12, 28 14 C36 16, 40 24, 38 34 C36 44, 30 52, 24 56Z" fill={accent} opacity="0.15" />
      <Path d="M24 56 C14 48, 8 34, 12 22 C14 16, 20 12, 28 14 C36 16, 40 24, 38 34 C36 44, 30 52, 24 56Z" stroke={accent} strokeWidth="2" fill="none" />
      {/* Bladnerv */}
      <Path d="M26 16 C24 24, 24 40, 24 54" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M26 28 C20 24, 14 24" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <Path d="M25 38 C20 36, 14 36" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <Path d="M26 28 C32 26, 36 28" stroke={accent} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    </Svg>
  )
}
