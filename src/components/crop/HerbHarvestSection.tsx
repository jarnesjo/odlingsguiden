import type { HarvestInfo } from '../../data/types'
import { Section } from '../ui'
import { HerbIcon, ScissorsIcon } from '../icons'
import styles from './HerbHarvestSection.module.css'

interface HerbHarvestSectionProps {
  harvest: HarvestInfo
}

export function HerbHarvestSection({ harvest }: HerbHarvestSectionProps) {
  return (
    <Section title={harvest.label} icon={<HerbIcon size={20} />}>
      <div className={styles.methodCard}>
        <span className={styles.methodIcon}><ScissorsIcon size={18} /></span>
        <div>
          <div className={styles.methodTitle}>{harvest.method}</div>
        </div>
      </div>
      <p className={styles.description}>{harvest.description}</p>
      <div className={styles.usesTitle}>Användning</div>
      {harvest.uses.map((u, i) => (
        <div key={i} className={styles.useCard}>
          <div className={styles.useName}>{u.use}</div>
          <div className={styles.useTip}>{u.tip}</div>
        </div>
      ))}
    </Section>
  )
}
