import type { Companions } from '../../data/types'
import { Section } from '../ui'
import styles from './CompanionSection.module.css'

interface CompanionSectionProps {
  companions: Companions
}

export function CompanionSection({ companions }: CompanionSectionProps) {
  return (
    <Section title="🌱 Companion planting" defaultOpen={false}>
      <div className={`${styles.sectionTitle} ${styles.goodTitle}`}>Bra grannar</div>
      {companions.good.map((comp, i) => (
        <div key={i} className={`${styles.card} ${styles.goodCard}`}>
          <div className={styles.companionName}>{comp.emoji} {comp.name}</div>
          <div className={styles.companionWhy}>{comp.why}</div>
        </div>
      ))}
      <div className={`${styles.sectionTitle} ${styles.badTitle}`}>Dåliga grannar</div>
      {companions.bad.map((comp, i) => (
        <div key={i} className={`${styles.card} ${styles.badCard}`}>
          <div className={styles.companionName}>{comp.emoji} {comp.name}</div>
          <div className={styles.companionWhy}>{comp.why}</div>
        </div>
      ))}
    </Section>
  )
}
