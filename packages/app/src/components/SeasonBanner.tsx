import { Text, Pressable, StyleSheet } from 'react-native'
import { MONTH_NAMES } from '@odlingsguiden/shared'
import { spacing, fontSize, fontFamily, radii } from '../theme/tokens'

interface Props {
  active: boolean
  currentMonth: number
  onPress: () => void
}

export function SeasonBanner({ active, currentMonth, onPress }: Props) {
  const monthName = MONTH_NAMES[currentMonth - 1]?.toLowerCase() ?? ''

  return (
    <Pressable
      style={[styles.banner, active && styles.bannerActive]}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.textActive]}>
        Vad ska jag göra i {monthName}?
      </Text>
      {!active && <Text style={styles.arrow}>{'\u2192'}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radii.card,
    backgroundColor: '#F0E4D5',
  },
  bannerActive: {
    backgroundColor: '#96694A',
  },
  text: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: '#6B4D35',
    flex: 1,
  },
  textActive: {
    color: '#fff',
  },
  arrow: {
    fontSize: 18,
    color: '#6B4D35',
  },
})
