import type { Pruning } from '../../data/types'
import { Section } from '../ui'
import styles from './PruningSection.module.css'

interface PruningSectionProps {
  pruning: Pruning
}

export function PruningSection({ pruning }: PruningSectionProps) {
  const types = Object.values(pruning.types)

  return (
    <Section title={`✂️ ${pruning.label}`}>
      {types.map((type, idx) => (
        <div key={idx} className={styles.typeBlock}>
          <div className={`${styles.typeHeader} ${idx === 0 ? styles.typeHeaderFirst : styles.typeHeaderAlt}`}>
            <span className={styles.typeIcon}>✂️</span>
            <div>
              <div className={styles.typeName}>{type.name}</div>
              <div className={styles.typeWhen}>{type.when}</div>
            </div>
          </div>
          <p className={styles.description}>{type.description}</p>
          <div className={styles.stepsTitle}>Steg för steg</div>
          {type.steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNumber}>{i + 1}</div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      ))}
    </Section>
  )
}
