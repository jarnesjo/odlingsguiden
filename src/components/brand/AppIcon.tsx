import type { ComponentType } from 'react'
import { colors } from '../../theme/tokens'

interface SymbolProps {
  size?: number
  accent?: string
  warm?: string
}

interface AppIconProps {
  symbol: ComponentType<SymbolProps>
  bg?: string
  size?: number
}

/** App-ikon (mork bakgrund) - rundad kvadrat som i App Store / Google Play */
export function AppIcon({ symbol: Symbol, bg = colors.accent, size = 120 }: AppIconProps) {
  const radius = size * 0.22
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.05) 100%)',
          borderRadius: radius,
        }}
      />
      <div style={{ position: 'relative' }}>
        <Symbol size={size * 0.6} accent="#fff" warm={colors.warmLight} />
      </div>
    </div>
  )
}

interface AppIconLightProps {
  symbol: ComponentType<SymbolProps>
  size?: number
}

/** App-ikon (ljus bakgrund) */
export function AppIconLight({ symbol: Symbol, size = 120 }: AppIconLightProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: colors.card,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: `1px solid ${colors.border}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative' }}>
        <Symbol size={size * 0.6} accent={colors.accent} warm={colors.warm} />
      </div>
    </div>
  )
}
