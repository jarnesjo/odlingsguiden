import { View, Text, StyleSheet } from 'react-native'
import type { Establishment } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { SeedlingIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface EstablishmentSectionProps {
  establishment: Establishment
}

export function EstablishmentSection({ establishment }: EstablishmentSectionProps) {
  return (
    <Section title="Etablering" icon={<SeedlingIcon size={20} />}>
      <Text style={styles.description}>{establishment.description}</Text>

      {establishment.years.map((year, i) => (
        <View key={i} style={styles.yearBlock}>
          <View style={[styles.yearHeader, i % 2 === 0 ? styles.yearHeaderEven : styles.yearHeaderOdd]}>
            <SeedlingIcon size={14} color={i % 2 === 0 ? colors.accent : '#C4956A'} />
            <Text style={styles.yearTitle}>{year.year}</Text>
          </View>
          {year.tasks.map((task, j) => (
            <View key={j} style={styles.taskRow}>
              <View style={styles.taskDot} />
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </View>
      ))}

      {establishment.protection.length > 0 && (
        <View style={styles.protectionCard}>
          <Text style={styles.protectionTitle}>Skydd</Text>
          {establishment.protection.map((p, i) => (
            <View key={i} style={styles.taskRow}>
              <View style={styles.taskDot} />
              <Text style={styles.taskText}>{p}</Text>
            </View>
          ))}
        </View>
      )}

      {establishment.tip && (
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <TipIcon size={14} />
            <Text style={styles.tipTitle}>Tips</Text>
          </View>
          <Text style={styles.tipText}>{establishment.tip}</Text>
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  yearBlock: {
    marginBottom: spacing.md,
  },
  yearHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radii.cardSmall,
    marginBottom: spacing.sm,
  },
  yearHeaderEven: {
    backgroundColor: colors.accent + '10',
  },
  yearHeaderOdd: {
    backgroundColor: '#C4956A15',
  },
  yearTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.xs,
    paddingLeft: spacing.sm,
  },
  taskDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.textMuted,
    marginTop: 7,
  },
  taskText: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  protectionCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  protectionTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
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
