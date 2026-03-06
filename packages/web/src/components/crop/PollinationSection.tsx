import type { Pollination } from '@odlingsguiden/shared'
import { Section } from '../ui'
import { BloomIcon } from '../icons'
import styles from './PollinationSection.module.css'

interface PollinationSectionProps {
  pollination: Pollination
}

export function PollinationSection({ pollination }: PollinationSectionProps) {
  return (
    <Section title="Pollinationspartners" icon={<BloomIcon size={20} />}>
      <div className={`${styles.statusBadge} ${pollination.selfFertile ? styles.selfFertile : styles.needsPartner}`}>
        {pollination.selfFertile ? 'Självfertil' : 'Behöver pollinatör'}
      </div>

      <p className={styles.description}>{pollination.description}</p>

      {pollination.groups.map((group, idx) => (
        <div key={idx} className={styles.group}>
          <div className={styles.groupName}>{group.name}</div>
          <div className={styles.varieties}>
            {group.varieties.map((v, i) => (
              <span key={i} className={styles.varietyPill}>{v}</span>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.tipCard}>
        <BloomIcon size={16} />
        <span>{pollination.tip}</span>
      </div>
    </Section>
  )
}
