import { View, Text, StyleSheet } from 'react-native'
import type { Propagation } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { SeedlingIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface PropagationSectionProps {
  propagation: Propagation
}

const DIFF_COLORS: Record<string, string> = {
  Enkel: '#3D6B4F',
  Medel: '#C4956A',
  Avancerad: '#B54A3F',
}

export function PropagationSection({ propagation }: PropagationSectionProps) {
  const diffColor = DIFF_COLORS[propagation.difficulty] ?? colors.text

  return (
    <Section title="Förökning" icon={<SeedlingIcon size={20} />}>
      <View style={[styles.badge, { backgroundColor: diffColor + '15' }]}>
        <View style={[styles.diffDot, { backgroundColor: diffColor }]} />
        <Text style={[styles.badgeText, { color: diffColor }]}>{propagation.difficulty}</Text>
      </View>

      {propagation.methods.map((m, i) => (
        <View key={i} style={styles.methodCard}>
          <View style={styles.methodHeader}>
            <Icon name={m.icon} size={18} />
            <Text style={styles.methodName}>{m.method}</Text>
          </View>
          <Text style={styles.methodDesc}>{m.description}</Text>
        </View>
      ))}

      {propagation.tip && (
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <TipIcon size={14} />
            <Text style={styles.tipTitle}>Tips</Text>
          </View>
          <Text style={styles.tipText}>{propagation.tip}</Text>
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
    alignSelf: 'flex-start',
    gap: 4,
    marginBottom: spacing.md,
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
  },
  methodCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  methodName: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  methodDesc: {
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
