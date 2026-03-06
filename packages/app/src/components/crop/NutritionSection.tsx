import { View, Text, StyleSheet } from 'react-native'
import type { NutritionDataPoint, NutritionTip } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { ChartIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface NutritionSectionProps {
  cropName: string
  data: NutritionDataPoint[]
  tips: NutritionTip[]
}

export function NutritionSection({ cropName, data, tips }: NutritionSectionProps) {
  return (
    <Section title="Näring" icon={<ChartIcon size={20} />}>
      <Text style={styles.intro}>
        Näringsbehov för {cropName.toLowerCase()} varierar under säsongen.
      </Text>

      {/* Simplified data view (chart comes in v2) */}
      {data.length > 0 && (
        <View style={styles.dataGrid}>
          <View style={styles.dataHeader}>
            <Text style={[styles.dataHeaderText, { flex: 1.5 }]}>Månad</Text>
            <Text style={styles.dataHeaderText}>N</Text>
            <Text style={styles.dataHeaderText}>P</Text>
            <Text style={styles.dataHeaderText}>K</Text>
          </View>
          {data.map((d, i) => (
            <View key={i} style={[styles.dataRow, i % 2 === 0 && styles.dataRowEven]}>
              <Text style={[styles.dataCell, { flex: 1.5 }]}>{d.month}</Text>
              <NutrientBar value={d.N} color="#3D6B4F" />
              <NutrientBar value={d.P} color="#7B4B6A" />
              <NutrientBar value={d.K} color="#C4956A" />
            </View>
          ))}
        </View>
      )}

      <View style={styles.legend}>
        <LegendItem color="#3D6B4F" label="Kväve (N)" />
        <LegendItem color="#7B4B6A" label="Fosfor (P)" />
        <LegendItem color="#C4956A" label="Kalium (K)" />
      </View>

      {tips.length > 0 && (
        <View style={styles.tips}>
          <Text style={styles.tipsTitle}>Gödslingstips</Text>
          {tips.map((tip, i) => (
            <View key={i} style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <TipIcon size={14} />
                <Text style={styles.tipTiming}>{tip.timing}</Text>
              </View>
              <Text style={styles.tipText}>{tip.tip}</Text>
            </View>
          ))}
        </View>
      )}
    </Section>
  )
}

function NutrientBar({ value, color }: { value: number; color: string }) {
  return (
    <View style={styles.nutrientCell}>
      <View style={styles.nutrientBarBg}>
        <View style={[styles.nutrientBar, { width: `${value}%`, backgroundColor: color }]} />
      </View>
    </View>
  )
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  intro: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  dataGrid: {
    marginBottom: spacing.md,
  },
  dataHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  dataHeaderText: {
    flex: 1,
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.textMuted,
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 4,
  },
  dataRowEven: {
    backgroundColor: colors.background,
  },
  dataCell: {
    flex: 1,
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  nutrientCell: {
    flex: 1,
    paddingHorizontal: 2,
  },
  nutrientBarBg: {
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: 'hidden',
  },
  nutrientBar: {
    height: '100%',
    borderRadius: 4,
  },
  legend: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  tips: {
    marginTop: spacing.xs,
  },
  tipsTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  tipCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  tipTiming: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  tipText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
