import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import type { HarvestCalc } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { HarvestIcon } from '../icons'
import { Section } from './Section'

interface HarvestCalcSectionProps {
  calc: HarvestCalc
  cropName: string
}

export function HarvestCalcSection({ calc, cropName }: HarvestCalcSectionProps) {
  const [sqm, setSqm] = useState(4)
  const minYield = (sqm * calc.minPerSqm).toFixed(1)
  const maxYield = (sqm * calc.maxPerSqm).toFixed(1)

  const decrease = () => setSqm(prev => Math.max(1, prev - 1))
  const increase = () => setSqm(prev => Math.min(20, prev + 1))

  return (
    <Section title="Skörderäknare" icon={<HarvestIcon size={20} />}>
      <Text style={styles.intro}>
        Hur mycket {cropName.toLowerCase()} kan du skörda?
      </Text>

      <View style={styles.stepper}>
        <Pressable
          style={({ pressed }) => [styles.stepperButton, pressed && styles.stepperPressed]}
          onPress={decrease}
        >
          <Text style={styles.stepperButtonText}>-</Text>
        </Pressable>
        <View style={styles.stepperValue}>
          <Text style={styles.sqmNumber}>{sqm}</Text>
          <Text style={styles.sqmLabel}>m²</Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.stepperButton, pressed && styles.stepperPressed]}
          onPress={increase}
        >
          <Text style={styles.stepperButtonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.result}>
        <Text style={styles.resultLabel}>Förväntad skörd</Text>
        <Text style={styles.resultValue}>
          {minYield} - {maxYield} {calc.unit}
        </Text>
      </View>

      <Text style={styles.note}>
        Baserat på {calc.minPerSqm}-{calc.maxPerSqm} {calc.unit}/m². Verklig skörd beror på sort, jord, väder och skötsel.
      </Text>
    </Section>
  )
}

const styles = StyleSheet.create({
  intro: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
    marginBottom: spacing.lg,
  },
  stepperButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.accent + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperPressed: {
    backgroundColor: colors.accent + '30',
  },
  stepperButtonText: {
    fontSize: 22,
    fontFamily: fontFamily.headingBold,
    color: colors.accent,
  },
  stepperValue: {
    alignItems: 'center',
  },
  sqmNumber: {
    fontSize: fontSize.dataLarge,
    fontFamily: fontFamily.headingExtraBold,
    color: colors.text,
  },
  sqmLabel: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  result: {
    backgroundColor: colors.accent + '10',
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  resultLabel: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  resultValue: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.accent,
  },
  note: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
    textAlign: 'center',
  },
})
