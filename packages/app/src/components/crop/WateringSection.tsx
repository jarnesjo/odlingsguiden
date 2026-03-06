import { View, Text, StyleSheet } from 'react-native'
import type { Watering } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { WateringCanIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface WateringSectionProps {
  watering: Watering
}

function getNeedColor(need: string): string {
  if (need.includes('Hög')) return '#1565C0'
  if (need.includes('Medel')) return '#4A90D9'
  return '#90CAF9'
}

export function WateringSection({ watering }: WateringSectionProps) {
  return (
    <Section title="Vattning" icon={<WateringCanIcon size={20} />}>
      <View style={styles.header}>
        <Icon name={watering.icon} size={20} />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Vattenbehov: {watering.need}</Text>
          <Text style={styles.headerSummary}>{watering.summary}</Text>
        </View>
      </View>

      <Text style={styles.phasesTitle}>Per tillväxtfas</Text>
      {watering.phases.map((phase, i) => {
        const needColor = getNeedColor(phase.need)
        return (
          <View
            key={i}
            style={[styles.phaseCard, { borderLeftColor: needColor }]}
          >
            <View style={styles.phaseHeader}>
              <Text style={styles.phaseName}>{phase.phase}</Text>
              <View style={[styles.needBadge, { backgroundColor: needColor + '20' }]}>
                <Text style={[styles.needText, { color: needColor }]}>{phase.need}</Text>
              </View>
            </View>
            <Text style={styles.phaseTip}>{phase.tip}</Text>
          </View>
        )
      })}

      <Text style={styles.mistakesTitle}>Vanliga vattenmisstag</Text>
      {watering.mistakes.map((m, i) => (
        <View key={i} style={styles.mistakeRow}>
          <Text style={styles.mistakeIcon}>✗</Text>
          <Text style={styles.mistakeText}>{m}</Text>
        </View>
      ))}

      <View style={styles.tipCard}>
        <View style={styles.tipHeader}>
          <TipIcon size={14} />
          <Text style={styles.tipTitle}>Bästa tipset</Text>
        </View>
        <Text style={styles.tipText}>{watering.tip}</Text>
      </View>
    </Section>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  headerSummary: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: 2,
    lineHeight: 16,
  },
  phasesTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  phaseCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderLeftWidth: 3,
  },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  phaseName: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  needBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.badge,
  },
  needText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
  },
  phaseTip: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
  mistakesTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  mistakeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  mistakeIcon: {
    fontSize: fontSize.body,
    color: '#B54A3F',
    fontFamily: fontFamily.bodyBold,
  },
  mistakeText: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: colors.accent + '08',
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  tipTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  tipText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
})
