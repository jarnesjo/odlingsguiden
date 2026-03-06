import type { PhRange } from '@odlingsguiden/shared'
import { Section, PhBar } from '../ui'
import { SoilIcon } from '../icons'
import styles from './SoilSection.module.css'

interface SoilSectionProps {
  soil: string
  ph: PhRange
  soilTips: string[]
}

export function SoilSection({ soil, ph, soilTips }: SoilSectionProps) {
  return (
    <Section title="Jord & pH-krav" icon={<SoilIcon size={20} />}>
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
