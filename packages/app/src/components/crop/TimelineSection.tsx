import { View, Text, ScrollView, StyleSheet } from 'react-native'
import type { TimelineEntry, Zone, ZoneInfo } from '@odlingsguiden/shared'
import { parseMonthRange } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { CalendarIcon } from '../icons'
import { Section } from './Section'

interface TimelineSectionProps {
  timeline: TimelineEntry[]
  userZone: Zone
  zoneInfo: ZoneInfo
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

const PHASE_COLORS: Record<string, { bg: string; border: string }> = {
  seedling:  { bg: '#FFF8E7', border: '#D4A843' },
  indoor:    { bg: '#FFF8E7', border: '#D4A843' },
  growth:    { bg: '#EDF7F0', border: '#7BAF8E' },
  leaf:      { bg: '#EDF7F0', border: '#7BAF8E' },
  hardening: { bg: '#EDF7F0', border: '#7BAF8E' },
  water:     { bg: '#E6F4F1', border: '#5BA89D' },
  harvest:   { bg: '#FFF0E5', border: '#C4956A' },
  scissors:  { bg: '#F0EDE8', border: '#8B8578' },
  snowflake: { bg: '#E8F0F8', border: '#7AADE6' },
  bloom:     { bg: '#FBE8F0', border: '#C47BA0' },
  stake:     { bg: '#F5F0E8', border: '#A89070' },
}

const DEFAULT_COLOR = { bg: '#F5F2EB', border: '#C4956A' }

const CELL_WIDTH = 32
const LABEL_WIDTH = 80

export function TimelineSection({ timeline, userZone, zoneInfo }: TimelineSectionProps) {
  const parsed = timeline.map(t => ({
    ...t,
    months_arr: parseMonthRange(t.months),
  }))

  const hasWrap = parsed.some(p => {
    if (p.months_arr.length < 2) return false
    for (let i = 1; i < p.months_arr.length; i++) {
      if (p.months_arr[i]! < p.months_arr[i - 1]!) return true
    }
    return false
  })

  let minMonth: number
  let maxMonth: number
  if (hasWrap) {
    minMonth = 0
    maxMonth = 11
  } else {
    const allMonths = parsed.flatMap(p => p.months_arr)
    const minVal = Math.min(...allMonths)
    const maxVal = Math.max(...allMonths)
    minMonth = Math.max(0, minVal - 2)
    maxMonth = Math.min(11, maxVal)
  }

  const displayRange = Array.from({ length: maxMonth - minMonth + 1 }, (_, i) => minMonth + i)

  return (
    <Section title={`Odlingskalender (zon ${userZone})`} icon={<CalendarIcon size={20} />}>
      <View style={styles.zoneBanner}>
        <Text style={styles.zoneBannerText}>
          Anpassad för odlingszon {userZone} - {zoneInfo.region}
        </Text>
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

          {/* Bar rows */}
          {parsed.map((entry, idx) => {
            const color = PHASE_COLORS[entry.icon] || DEFAULT_COLOR
            const activePositions = new Set(
              entry.months_arr.map(m => m - 1).filter(p => p >= minMonth && p <= maxMonth)
            )
            const sortedPositions = [...activePositions].sort((a, b) => a - b)
            const firstActive = sortedPositions[0] ?? -1
            const lastActive = sortedPositions[sortedPositions.length - 1] ?? -1

            return (
              <View key={idx} style={styles.row}>
                <View style={styles.labelCell}>
                  <Icon name={entry.icon} size={14} />
                  <Text style={styles.labelText} numberOfLines={1}>{entry.phase}</Text>
                </View>
                {displayRange.map(m => {
                  const isActive = activePositions.has(m)
                  return (
                    <View
                      key={m}
                      style={[
                        styles.barCell,
                        isActive && {
                          backgroundColor: color.bg,
                          borderColor: color.border,
                          borderTopWidth: 2,
                          borderBottomWidth: 2,
                          borderLeftWidth: m === firstActive ? 2 : 0,
                          borderRightWidth: m === lastActive ? 2 : 0,
                          borderTopLeftRadius: m === firstActive ? 6 : 0,
                          borderBottomLeftRadius: m === firstActive ? 6 : 0,
                          borderTopRightRadius: m === lastActive ? 6 : 0,
                          borderBottomRightRadius: m === lastActive ? 6 : 0,
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
    </Section>
  )
}

const styles = StyleSheet.create({
  zoneBanner: {
    backgroundColor: colors.accent + '10',
    borderRadius: radii.cardSmall,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  zoneBannerText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.accent,
    textAlign: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingRight: spacing.xs,
  },
  labelText: {
    flex: 1,
    fontSize: 10,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  barCell: {
    width: CELL_WIDTH,
    height: 22,
  },
})
