import { View, Text, StyleSheet } from 'react-native'
import type { OptimalConditions as OptimalConditionsType, Watering } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { SunIcon } from '../icons'
import { Section } from './Section'

interface OptimalConditionsProps {
  conditions: OptimalConditionsType
  watering: Watering
}

export function OptimalConditionsSection({ conditions, watering }: OptimalConditionsProps) {
  const items = [
    { label: 'Solbehov', iconName: conditions.sun.icon, value: conditions.sun.level, detail: conditions.sun.detail },
    { label: 'Temperatur', iconName: 'temperature', value: conditions.temperature.ideal, detail: conditions.temperature.detail },
    { label: 'Vind', iconName: 'wind', value: conditions.wind.level, detail: conditions.wind.detail },
    { label: 'Vattenbehov', iconName: watering.icon, value: watering.need, detail: watering.summary },
  ]

  return (
    <Section title="Trivs bäst" icon={<SunIcon size={20} />} defaultOpen>
      <View style={styles.grid}>
        {items.map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardHeader}>
              <Icon name={item.iconName} size={18} />
              <Text style={styles.label}>{item.label}</Text>
            </View>
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        ))}
      </View>
    </Section>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  card: {
    width: '48%',
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  value: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: 2,
  },
  detail: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
