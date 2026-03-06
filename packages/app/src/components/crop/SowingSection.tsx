import { View, Text, StyleSheet } from 'react-native'
import type { SowingInfo, SowingMethod } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { SeedlingIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface SowingSectionProps {
  sowing: SowingInfo
}

const METHOD_CONFIG: Record<SowingMethod, { icon: string; label: string }> = {
  direct: { icon: 'seedling', label: 'Direktsådd' },
  indoor: { icon: 'indoor', label: 'Förodling' },
  both: { icon: 'seedling', label: 'Direktsådd & förodling' },
}

export function SowingSection({ sowing }: SowingSectionProps) {
  const config = METHOD_CONFIG[sowing.method]

  return (
    <Section title="Sådd" icon={<SeedlingIcon size={20} />}>
      <View style={styles.methodCard}>
        <View style={styles.methodHeader}>
          <Icon name={config.icon} size={18} />
          <Text style={styles.methodLabel}>{config.label}</Text>
        </View>
        {sowing.indoorWeeks && (
          <Text style={styles.indoorWeeks}>Förodla {sowing.indoorWeeks} veckor innan utplantering</Text>
        )}
      </View>

      <Text style={styles.description}>{sowing.description}</Text>

      {sowing.steps.length > 0 && (
        <View style={styles.steps}>
          <Text style={styles.stepsTitle}>Steg för steg</Text>
          {sowing.steps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      )}

      {sowing.tips.length > 0 && (
        <View style={styles.tips}>
          {sowing.tips.map((tip, i) => (
            <View key={i} style={styles.tipRow}>
              <TipIcon size={14} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  methodCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  methodLabel: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  indoorWeeks: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
    marginLeft: spacing.xl + spacing.sm,
  },
  description: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  steps: {
    marginBottom: spacing.md,
  },
  stepsTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  stepNumber: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.accent + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  stepText: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  tips: {
    marginTop: spacing.sm,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  tipText: {
    flex: 1,
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
