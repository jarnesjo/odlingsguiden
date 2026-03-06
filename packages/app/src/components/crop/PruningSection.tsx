import { View, Text, StyleSheet } from 'react-native'
import type { Pruning } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { ScissorsIcon } from '../icons'
import { Section } from './Section'

interface PruningSectionProps {
  pruning: Pruning
}

export function PruningSection({ pruning }: PruningSectionProps) {
  const types = Object.values(pruning.types)

  return (
    <Section title="Beskärning" icon={<ScissorsIcon size={20} />}>
      {types.map((type, i) => (
        <View key={i} style={styles.typeBlock}>
          <View style={[styles.typeHeader, i > 0 && styles.typeHeaderAlt]}>
            <ScissorsIcon size={16} />
            <Text style={styles.typeName}>{type.name}</Text>
          </View>
          <Text style={styles.typeWhen}>{type.when}</Text>
          <Text style={styles.typeDesc}>{type.description}</Text>
          {type.steps.length > 0 && (
            <View style={styles.steps}>
              {type.steps.map((step, j) => (
                <View key={j} style={styles.stepRow}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{j + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </Section>
  )
}

const styles = StyleSheet.create({
  typeBlock: {
    marginBottom: spacing.lg,
  },
  typeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  typeHeaderAlt: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  typeName: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  typeWhen: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  typeDesc: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  steps: {
    marginTop: spacing.xs,
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
})
