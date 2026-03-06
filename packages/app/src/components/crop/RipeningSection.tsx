import { View, Text, ScrollView, StyleSheet } from 'react-native'
import type { RipeningGuide } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { HarvestIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface RipeningSectionProps {
  guide: RipeningGuide
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

const MONTH_MAP: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, Maj: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Okt: 10, Nov: 11, Dec: 12,
}

const TYPE_COLORS: Record<string, { bg: string; border: string }> = {
  sommaräpple: { bg: '#FFF0E5', border: '#C4956A' },
  höstäpple:   { bg: '#EDF7F0', border: '#7BAF8E' },
  vinteräpple: { bg: '#E8F0F8', border: '#7AADE6' },
  sommarpäron: { bg: '#FFF8E7', border: '#D4A843' },
  höstpäron:   { bg: '#EDF7F0', border: '#7BAF8E' },
  vinterpäron: { bg: '#E8F0F8', border: '#7AADE6' },
  plommon:     { bg: '#FBE8F0', border: '#C47BA0' },
  körsbär:     { bg: '#FBE8F0', border: '#C47BA0' },
  fikon:       { bg: '#FFF0E5', border: '#B8653B' },
  valnöt:      { bg: '#F5F0E8', border: '#A89070' },
  hasselnöt:   { bg: '#F5F0E8', border: '#8B7355' },
  vindruva:    { bg: '#FBE8F0', border: '#7B4B6A' },
}

const DEFAULT_TYPE_COLOR = { bg: '#F5F2EB', border: '#C4956A' }

const CELL_WIDTH = 32
const LABEL_WIDTH = 90

export function RipeningSection({ guide }: RipeningSectionProps) {
  // Find month range
  const allMonthNums = guide.entries.flatMap(e => {
    const from = MONTH_MAP[e.from] ?? 1
    const to = MONTH_MAP[e.to] ?? 12
    return [from, to]
  })
  const minMonth = Math.max(0, Math.min(...allMonthNums) - 2)
  const maxMonth = Math.min(11, Math.max(...allMonthNums))
  const displayRange = Array.from({ length: maxMonth - minMonth + 1 }, (_, i) => minMonth + i)

  // Collect unique types for legend
  const types = [...new Set(guide.entries.map(e => e.type))]

  return (
    <Section title="Mognadstid" icon={<HarvestIcon size={20} />}>
      <Text style={styles.description}>{guide.description}</Text>

      <View style={styles.legend}>
        {types.map(t => {
          const c = TYPE_COLORS[t] || DEFAULT_TYPE_COLOR
          return (
            <View key={t} style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: c.border }]} />
              <Text style={styles.legendText}>{t}</Text>
            </View>
          )
        })}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {/* Month headers */}
          <View style={styles.row}>
            <View style={{ width: LABEL_WIDTH }} />
            {displayRange.map(m => (
              <View key={m} style={styles.monthCell}>
                <Text style={styles.monthText}>{MONTHS[m]}</Text>
              </View>
            ))}
          </View>

          {/* Entry rows */}
          {guide.entries.map((entry, idx) => {
            const typeColor = TYPE_COLORS[entry.type] || DEFAULT_TYPE_COLOR
            const from = (MONTH_MAP[entry.from] ?? 1) - 1
            const to = (MONTH_MAP[entry.to] ?? 12) - 1

            return (
              <View key={idx} style={styles.row}>
                <View style={styles.labelCell}>
                  <Text style={styles.labelText} numberOfLines={1}>{entry.variety}</Text>
                </View>
                {displayRange.map(m => {
                  const isActive = m >= from && m <= to
                  const isFirst = m === from
                  const isLast = m === to
                  return (
                    <View
                      key={m}
                      style={[
                        styles.barCell,
                        isActive && {
                          backgroundColor: typeColor.bg,
                          borderColor: typeColor.border,
                          borderTopWidth: 2,
                          borderBottomWidth: 2,
                          borderLeftWidth: isFirst ? 2 : 0,
                          borderRightWidth: isLast ? 2 : 0,
                          borderTopLeftRadius: isFirst ? 6 : 0,
                          borderBottomLeftRadius: isFirst ? 6 : 0,
                          borderTopRightRadius: isLast ? 6 : 0,
                          borderBottomRightRadius: isLast ? 6 : 0,
                        },
                      ]}
                    />
                  )
                })}
              </View>
            )
          })}
        </View>
      </ScrollView>

      {guide.tip && (
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <TipIcon size={14} />
            <Text style={styles.tipTitle}>Tips</Text>
          </View>
          <Text style={styles.tipText}>{guide.tip}</Text>
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
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  monthCell: {
    width: CELL_WIDTH,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 9,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  labelCell: {
    width: LABEL_WIDTH,
    paddingRight: spacing.xs,
  },
  labelText: {
    fontSize: 10,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  barCell: {
    width: CELL_WIDTH,
    height: 22,
  },
  tipCard: {
    backgroundColor: colors.accent + '08',
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginTop: spacing.md,
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
