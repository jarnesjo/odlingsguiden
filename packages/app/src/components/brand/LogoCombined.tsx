import type { ComponentType } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@odlingsguiden/shared'
import { fontFamily, fontWeights } from '../../theme/tokens'

interface SymbolProps {
  size?: number
  accent?: string
  warm?: string
}

interface Props {
  name: string
  tagline?: string
  symbol: ComponentType<SymbolProps>
  dark?: boolean
}

export function LogoCombined({ name, tagline, symbol: Symbol, dark = false }: Props) {
  const textColor = dark ? '#fff' : colors.text
  const mutedColor = dark ? 'rgba(255,255,255,0.6)' : colors.textMuted
  const symbolAccent = dark ? '#fff' : colors.accent
  const symbolWarm = dark ? colors.warmLight : colors.warm

  return (
    <View style={styles.container}>
      <Symbol size={56} accent={symbolAccent} warm={symbolWarm} />
      <View style={styles.textWrap}>
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
        {tagline && (
          <Text style={[styles.tagline, { color: mutedColor }]}>{tagline}</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  textWrap: {},
  name: {
    fontFamily: fontFamily.headingExtraBold,
    fontSize: 26,
    fontWeight: String(fontWeights.extrabold) as any,
    lineHeight: 30,
  },
  tagline: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    marginTop: 2,
  },
})
