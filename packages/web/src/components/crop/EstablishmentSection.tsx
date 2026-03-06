import type { Establishment } from '@odlingsguiden/shared'
import { Section } from '../ui'
import { SeedlingIcon } from '../icons'
import styles from './EstablishmentSection.module.css'

interface EstablishmentSectionProps {
  establishment: Establishment
}

export function EstablishmentSection({ establishment }: EstablishmentSectionProps) {
  return (
    <Section title="Etablering - Första åren" icon={<SeedlingIcon size={20} />}>
      <p className={styles.description}>{establishment.description}</p>

      {establishment.years.map((yearBlock, idx) => (
        <div key={idx} className={styles.yearBlock}>
          <div className={`${styles.yearHeader} ${idx === 0 ? styles.yearHeaderFirst : styles.yearHeaderAlt}`}>
            <div className={styles.yearBadge}>{yearBlock.year}</div>
          </div>
          {yearBlock.tasks.map((task, i) => (
            <div key={i} className={styles.task}>
              <div className={styles.taskDot} />
              <div>{task}</div>
            </div>
          ))}
        </div>
      ))}

      {establishment.protection.length > 0 && (
        <div className={styles.protectionBlock}>
          <div className={styles.protectionTitle}>Skydd</div>
          {establishment.protection.map((item, i) => (
            <div key={i} className={styles.task}>
              <div className={styles.taskDot} />
              <div>{item}</div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.tipCard}>
        <SeedlingIcon size={16} />
        <span>{establishment.tip}</span>
      </div>
    </Section>
  )
}
