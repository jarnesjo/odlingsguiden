import { View, Text, StyleSheet } from 'react-native'
import type { HarvestInfo } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { HerbIcon, ScissorsIcon } from '../icons'
import { Section } from './Section'

interface HerbHarvestSectionProps {
  harvest: HarvestInfo
}

export function HerbHarvestSection({ harvest }: HerbHarvestSectionProps) {
  return (
    <Section title="Skörd och användning" icon={<HerbIcon size={20} />}>
      <View style={styles.methodCard}>
        <View style={styles.methodHeader}>
          <ScissorsIcon size={16} />
          <Text style={styles.methodLabel}>{harvest.method}</Text>
        </View>
      </View>

      <Text style={styles.description}>{harvest.description}</Text>

      {harvest.uses.length > 0 && (
        <View style={styles.uses}>
          <Text style={styles.usesTitle}>Användning</Text>
          {harvest.uses.map((u, i) => (
            <View key={i} style={styles.useCard}>
              <Text style={styles.useName}>{u.use}</Text>
              <Text style={styles.useTip}>{u.tip}</Text>
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
  description: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  uses: {
    marginTop: spacing.xs,
  },
  usesTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  useCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  useName: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  useTip: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
