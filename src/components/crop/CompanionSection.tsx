import type { Companions } from '../../data/types'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { SeedlingIcon } from '../icons'
import styles from './CompanionSection.module.css'

interface CompanionSectionProps {
  companions: Companions
}

export function CompanionSection({ companions }: CompanionSectionProps) {
  return (
    <Section title="Companion planting" icon={<SeedlingIcon size={20} />}>
      <div className={`${styles.sectionTitle} ${styles.goodTitle}`}>Bra grannar</div>
      {companions.good.map((comp, i) => (
        <div key={i} className={`${styles.card} ${styles.goodCard}`}>
          <div className={styles.companionName}><Icon name={comp.icon} size={18} /> {comp.name}</div>
          <div className={styles.companionWhy}>{comp.why}</div>
        </div>
      ))}
      <div className={`${styles.sectionTitle} ${styles.badTitle}`}>Dåliga grannar</div>
      {companions.bad.map((comp, i) => (
        <div key={i} className={`${styles.card} ${styles.badCard}`}>
          <div className={styles.companionName}><Icon name={comp.icon} size={18} /> {comp.name}</div>
          <div className={styles.companionWhy}>{comp.why}</div>
        </div>
      ))}
    </Section>
  )
}
