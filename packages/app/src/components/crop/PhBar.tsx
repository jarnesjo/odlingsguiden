import { View, Text, StyleSheet } from 'react-native'
import type { PhRange } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'

interface PhBarProps {
  ph: PhRange
}

export function PhBar({ ph }: PhBarProps) {
  const rangeLeft = (ph.min / 14) * 100
  const rangeWidth = ((ph.max - ph.min) / 14) * 100
  const idealLeft = (ph.ideal / 14) * 100

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.label}>Surt (0)</Text>
        <Text style={styles.label}>Neutralt (7)</Text>
        <Text style={styles.label}>Basiskt (14)</Text>
      </View>
      <View style={styles.bar}>
        <View
          style={[styles.range, { left: `${rangeLeft}%`, width: `${rangeWidth}%` }]}
        />
        <View
          style={[styles.idealLine, { left: `${idealLeft}%` }]}
        />
      </View>
      <View style={styles.values}>
        <Text style={styles.rangeText}>pH {ph.min}-{ph.max}</Text>
        <Text style={styles.idealText}>Idealt: {ph.ideal}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  bar: {
    height: 12,
    backgroundColor: colors.background,
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  range: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: colors.accent + '30',
    borderRadius: 6,
  },
  idealLine: {
    position: 'absolute',
    top: -2,
    bottom: -2,
    width: 3,
    backgroundColor: colors.accent,
    borderRadius: 1.5,
    marginLeft: -1.5,
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  rangeText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  idealText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
})
