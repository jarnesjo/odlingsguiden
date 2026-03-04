import type { RipeningGuide } from '../../data/types'
import { Section } from '../ui'
import { HarvestIcon } from '../icons'
import styles from './RipeningSection.module.css'

interface RipeningSectionProps {
  guide: RipeningGuide
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']

const TYPE_COLORS: Record<string, { bg: string; border: string }> = {
  // Äpple
  'Sommaräpple': { bg: '#FFF8E7', border: '#E6C97A' },
  'Höstäpple': { bg: '#EDF7F0', border: '#7BAF8E' },
  'Vinteräpple': { bg: '#E3F2FD', border: '#7AADE6' },
  // Päron (gul -> grön -> orange -> blå, tydligt skilda)
  'Sommarpäron': { bg: '#FFF8E7', border: '#D4A843' },
  'Höstpäron': { bg: '#EDF7F0', border: '#7BAF8E' },
  'Sent höstpäron': { bg: '#FFF0E5', border: '#C4784A' },
  'Vinterpäron': { bg: '#E3F2FD', border: '#7AADE6' },
  // Plommon (rosa -> lila -> terrakotta -> blågrön, tydligt skilda)
  'Tidigt plommon': { bg: '#FCE8F0', border: '#D47A9B' },
  'Sommarplommon': { bg: '#F0E4F5', border: '#9660A8' },
  'Höstplommon': { bg: '#FFF0E5', border: '#B8653B' },
  'Sent plommon': { bg: '#E5F0F0', border: '#5A8F8F' },
}

const DEFAULT_COLOR = { bg: '#F5F2EB', border: '#C4956A' }

function monthIndex(m: string): number {
  return MONTHS.indexOf(m.toLowerCase())
}

export function RipeningSection({ guide }: RipeningSectionProps) {
  // Find the range of months to display
  const allFrom = guide.entries.map(e => monthIndex(e.from))
  const allTo = guide.entries.map(e => monthIndex(e.to))
  const minMonth = Math.max(0, Math.min(...allFrom) - 1)
  const maxMonth = Math.min(11, Math.max(...allTo) + 1)
  const displayMonths = MONTHS.slice(minMonth, maxMonth + 1)
  const totalCols = displayMonths.length

  // Group entries by type
  const types = [...new Set(guide.entries.map(e => e.type))]

  return (
    <Section title="Mognadsklocka" icon={<HarvestIcon size={20} />}>
      <p className={styles.description}>{guide.description}</p>

      <div className={styles.legend}>
        {types.map(type => {
          const color = TYPE_COLORS[type] || DEFAULT_COLOR
          return (
            <div key={type} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: color.border }} />
              <span>{type}</span>
            </div>
          )
        })}
      </div>

      <div className={styles.chart}>
        {/* Month headers */}
        <div className={styles.monthRow}>
          <div className={styles.labelCell} />
          {displayMonths.map(m => (
            <div key={m} className={styles.monthCell}>
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </div>
          ))}
        </div>

        {/* Bars per entry */}
        {guide.entries.map((entry, idx) => {
          const from = monthIndex(entry.from) - minMonth
          const to = monthIndex(entry.to) - minMonth
          const color = TYPE_COLORS[entry.type] || DEFAULT_COLOR

          return (
            <div key={idx} className={styles.barRow}>
              <div className={styles.labelCell}>{entry.variety}</div>
              <div className={styles.barTrack} style={{ gridTemplateColumns: `repeat(${totalCols}, 1fr)` }}>
                {displayMonths.map((_, i) => {
                  const isActive = i >= from && i <= to
                  return (
                    <div
                      key={i}
                      className={`${styles.barCell} ${isActive ? styles.barActive : ''}`}
                      style={isActive ? {
                        background: color.bg,
                        borderColor: color.border,
                        borderLeftWidth: i === from ? '2px' : '0',
                        borderRightWidth: i === to ? '2px' : '0',
                        borderTopWidth: '2px',
                        borderBottomWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: i === from && i === to ? '6px' :
                          i === from ? '6px 0 0 6px' :
                          i === to ? '0 6px 6px 0' : '0',
                      } : undefined}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.tipCard}>
        <HarvestIcon size={16} />
        <span>{guide.tip}</span>
      </div>
    </Section>
  )
}
