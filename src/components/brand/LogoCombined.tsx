import type { ComponentType } from 'react'
import { colors, fonts, fontWeights } from '../../theme/tokens'

interface SymbolProps {
  size?: number
  accent?: string
  warm?: string
}

interface LogoCombinedProps {
  name: string
  tagline?: string
  symbol: ComponentType<SymbolProps>
  layout?: 'horizontal' | 'vertical'
  dark?: boolean
}

/** Kombinerad logotyp: symbol + namn + valfri tagline */
export function LogoCombined({
  name,
  tagline,
  symbol: Symbol,
  layout = 'horizontal',
  dark = false,
}: LogoCombinedProps) {
  const textColor = dark ? '#fff' : colors.text
  const mutedColor = dark ? 'rgba(255,255,255,0.6)' : colors.textMuted
  const symbolAccent = dark ? '#fff' : colors.accent
  const symbolWarm = dark ? colors.warmLight : colors.warm

  if (layout === 'vertical') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Symbol size={56} accent={symbolAccent} warm={symbolWarm} />
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: fonts.heading,
              fontSize: 24,
              fontWeight: fontWeights.extrabold,
              color: textColor,
              lineHeight: 1.1,
            }}
          >
            {name}
          </div>
          {tagline && (
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: 11,
                color: mutedColor,
                marginTop: 2,
              }}
            >
              {tagline}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <Symbol size={56} accent={symbolAccent} warm={symbolWarm} />
      <div>
        <div
          style={{
            fontFamily: fonts.heading,
            fontSize: 26,
            fontWeight: fontWeights.extrabold,
            color: textColor,
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        {tagline && (
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: 13,
              color: mutedColor,
              marginTop: 2,
            }}
          >
            {tagline}
          </div>
        )}
      </div>
    </div>
  )
}
