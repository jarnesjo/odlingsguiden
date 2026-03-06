import type { TimelineEntry, Zone, ZoneInfo } from '@odlingsguiden/shared'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { CalendarIcon } from '../icons'
import { parseMonthRange } from '@odlingsguiden/shared'
import styles from './TimelineSection.module.css'

interface TimelineSectionProps {
  timeline: TimelineEntry[]
  userZone: Zone
  zoneInfo: ZoneInfo
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

const PHASE_COLORS: Record<string, { bg: string; border: string }> = {
  seedling: { bg: '#FFF8E7', border: '#D4A843' },
  indoor:   { bg: '#FFF8E7', border: '#D4A843' },
  growth:   { bg: '#EDF7F0', border: '#7BAF8E' },
  leaf:     { bg: '#EDF7F0', border: '#7BAF8E' },
  hardening:{ bg: '#EDF7F0', border: '#7BAF8E' },
  water:    { bg: '#E6F4F1', border: '#5BA89D' },
  harvest:  { bg: '#FFF0E5', border: '#C4956A' },
  scissors: { bg: '#F0EDE8', border: '#8B8578' },
  snowflake:{ bg: '#E8F0F8', border: '#7AADE6' },
  bloom:    { bg: '#FBE8F0', border: '#C47BA0' },
  stake:    { bg: '#F5F0E8', border: '#A89070' },
}

const DEFAULT_COLOR = { bg: '#F5F2EB', border: '#C4956A' }

export function TimelineSection({ timeline, userZone, zoneInfo }: TimelineSectionProps) {
  // Parse month ranges for all entries
  const parsed = timeline.map(t => ({
    ...t,
    months_arr: parseMonthRange(t.months),
  }))

  // Check if any entry wraps around (e.g. Nov-Feb)
  const hasWrap = parsed.some(p => {
    if (p.months_arr.length < 2) return false
    for (let i = 1; i < p.months_arr.length; i++) {
      if (p.months_arr[i]! < p.months_arr[i - 1]!) return true
    }
    return false
  })

  // Determine which months to display (0-indexed)
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
  const totalCols = displayRange.length

  return (
    <Section title={`Odlingskalender (zon ${userZone})`} icon={<CalendarIcon size={20} />}>
      <div className={styles.zoneBanner}>
        Anpassad för odlingszon {userZone} - {zoneInfo.region}
      </div>

      <div className={styles.chart}>
        {/* Month headers */}
        <div className={styles.barRow}>
          <div className={styles.labelCell} />
          <div className={styles.monthTrack} style={{ gridTemplateColumns: `repeat(${totalCols}, 1fr)` }}>
            {displayRange.map(m => (
              <div key={m} className={styles.monthCell}>
                {MONTHS[m]!}
              </div>
            ))}
          </div>
        </div>

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
            <div key={idx} className={styles.barRow}>
              <div className={styles.labelCell} title={entry.phase}>
                <Icon name={entry.icon} size={14} />
                <span className={styles.labelText}>{entry.phase}</span>
              </div>
              <div className={styles.barTrack} style={{ gridTemplateColumns: `repeat(${totalCols}, 1fr)` }}>
                {displayRange.map(m => {
                  const isActive = activePositions.has(m)
                  return (
                    <div
                      key={m}
                      className={`${styles.barCell} ${isActive ? styles.barActive : ''}`}
                      style={isActive ? {
                        background: color.bg,
                        borderColor: color.border,
                        borderLeftWidth: m === firstActive ? '2px' : '0',
                        borderRightWidth: m === lastActive ? '2px' : '0',
                        borderTopWidth: '2px',
                        borderBottomWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: m === firstActive && m === lastActive ? '6px' :
                          m === firstActive ? '6px 0 0 6px' :
                          m === lastActive ? '0 6px 6px 0' : '0',
                      } : undefined}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
