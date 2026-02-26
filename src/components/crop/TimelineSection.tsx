import type { TimelineEntry, Zone, ZoneInfo } from '../../data/types'
import { Section } from '../ui'
import styles from './TimelineSection.module.css'

interface TimelineSectionProps {
  timeline: TimelineEntry[]
  userZone: Zone
  zoneInfo: ZoneInfo
}

export function TimelineSection({ timeline, userZone, zoneInfo }: TimelineSectionProps) {
  return (
    <Section title={`📅 Tidslinje för din zon (${userZone})`} defaultOpen={false}>
      <div className={styles.zoneBanner}>
        Anpassad för odlingszon {userZone} · {zoneInfo.region}
      </div>
      <div className={styles.timeline}>
        <div className={styles.line} />
        {timeline.map((t, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.dot}>{t.icon}</div>
            <div>
              <div className={styles.phase}>{t.phase}</div>
              <div className={styles.months}>{t.months}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
