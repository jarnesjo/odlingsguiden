import type { PhRange } from '../../data/types'
import { Section, PhBar } from '../ui'
import styles from './SoilSection.module.css'

interface SoilSectionProps {
  soil: string
  ph: PhRange
  soilTips: string[]
}

export function SoilSection({ soil, ph, soilTips }: SoilSectionProps) {
  return (
    <Section title="🌡️ Jord & pH-krav" defaultOpen={false}>
      <p className={styles.description}>{soil}</p>
      <PhBar ph={ph} />
      <div className={styles.tips}>
        {soilTips.map((tip, i) => (
          <div key={i} className={styles.tip}>
            <span className={styles.tipBullet}>•</span> {tip}
          </div>
        ))}
      </div>
    </Section>
  )
}
