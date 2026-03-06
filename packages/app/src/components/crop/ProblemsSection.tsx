import { View, Text, StyleSheet } from 'react-native'
import type { Problem } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { BugIcon } from '../icons'
import { Section } from './Section'

interface ProblemsSectionProps {
  problems: Problem[]
}

export function ProblemsSection({ problems }: ProblemsSectionProps) {
  if (problems.length === 0) return null

  return (
    <Section title="Problem och sjukdomar" icon={<BugIcon size={20} />}>
      {problems.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.name}>{p.name}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Symptom:</Text>
            <Text style={styles.text}>{p.symptom}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Åtgärd:</Text>
            <Text style={styles.text}>{p.fix}</Text>
          </View>
        </View>
      ))}
    </Section>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  row: {
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.textMuted,
    marginBottom: 2,
  },
  text: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
})
