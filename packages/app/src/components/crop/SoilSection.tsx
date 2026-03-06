import { View, Text, StyleSheet } from 'react-native'
import type { PhRange } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily } from '../../theme/tokens'
import { SoilIcon, TipIcon } from '../icons'
import { Section } from './Section'
import { PhBar } from './PhBar'

interface SoilSectionProps {
  soil: string
  ph: PhRange
  soilTips: string[]
}

export function SoilSection({ soil, ph, soilTips }: SoilSectionProps) {
  return (
    <Section title="Jord" icon={<SoilIcon size={20} />}>
      <Text style={styles.description}>{soil}</Text>

      <PhBar ph={ph} />

      {soilTips.length > 0 && (
        <View style={styles.tips}>
          {soilTips.map((tip, i) => (
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
  description: {
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
