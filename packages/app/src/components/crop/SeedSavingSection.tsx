import { View, Text, StyleSheet } from 'react-native'
import type { SeedSaving } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { SeedIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface SeedSavingSectionProps {
  seedSaving: SeedSaving
}

const DIFF_COLORS: Record<string, string> = {
  Enkel: '#3D6B4F',
  Medel: '#C4956A',
  Avancerad: '#B54A3F',
}

export function SeedSavingSection({ seedSaving }: SeedSavingSectionProps) {
  const diffColor = DIFF_COLORS[seedSaving.difficulty] ?? colors.text

  return (
    <Section title="Fröbesparing" icon={<SeedIcon size={20} />}>
      <View style={styles.badges}>
        <View style={[styles.badge, { backgroundColor: diffColor + '15' }]}>
          <View style={[styles.diffDot, { backgroundColor: diffColor }]} />
          <Text style={[styles.badgeText, { color: diffColor }]}>{seedSaving.difficulty}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {seedSaving.type === 'self' ? '✓ Självpollinerare' : '⚠ Korspollinerare'}
          </Text>
        </View>
        {seedSaving.biennial && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Tvåårig</Text>
          </View>
        )}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Hållbarhet: {seedSaving.storageYears}</Text>
        </View>
      </View>

      <Text style={styles.description}>{seedSaving.description}</Text>

      {seedSaving.steps.length > 0 && (
        <View style={styles.steps}>
          <Text style={styles.stepsTitle}>Steg för steg</Text>
          {seedSaving.steps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      )}

      {seedSaving.isolation && (
        <View style={styles.isolationCard}>
          <Text style={styles.isolationTitle}>Isoleringsavstånd</Text>
          <Text style={styles.isolationText}>{seedSaving.isolation}</Text>
        </View>
      )}

      {seedSaving.tip && (
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <TipIcon size={14} />
            <Text style={styles.tipTitle}>Tips</Text>
          </View>
          <Text style={styles.tipText}>{seedSaving.tip}</Text>
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  badge: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
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
  isolationCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  isolationTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  isolationText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: colors.accent + '08',
    borderRadius: radii.cardSmall,
    padding: spacing.md,
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
