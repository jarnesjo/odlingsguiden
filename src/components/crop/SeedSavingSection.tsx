import type { SeedSaving } from '../../data/types'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import { Section } from '../ui'
import styles from './SeedSavingSection.module.css'

interface SeedSavingSectionProps {
  seedSaving: SeedSaving
}

export function SeedSavingSection({ seedSaving }: SeedSavingSectionProps) {
  const diffInfo = DIFFICULTY_INFO[seedSaving.difficulty]
  const isSelfPollinator = seedSaving.type === 'Självpollinerare'

  return (
    <Section title="🌾 Ta eget frö" defaultOpen={false}>
      <div className={styles.badges}>
        <span className={styles.badge} style={{ background: diffInfo.color }}>
          {diffInfo.icon} {seedSaving.difficulty}
        </span>
        <span className={`${styles.badge} ${isSelfPollinator ? styles.selfPollinator : styles.crossPollinator}`}>
          {isSelfPollinator ? '✓' : '⚠'} {seedSaving.type}
        </span>
        {seedSaving.biennial && (
          <span className={`${styles.badge} ${styles.biennial}`}>Tvåårig</span>
        )}
        <span className={`${styles.badge} ${styles.storageBadge}`}>
          Håller {seedSaving.storageYears}
        </span>
      </div>
      <p className={styles.description}>{seedSaving.description}</p>
      <div className={styles.stepsTitle}>Steg för steg</div>
      {seedSaving.steps.map((step, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.stepNumber}>{i + 1}</div>
          <div>{step}</div>
        </div>
      ))}
      <div className={`${styles.infoCard} ${styles.isolationCard}`}>
        <div className={styles.infoTitle}>⚠ Korspollinering</div>
        <div className={styles.infoText}>{seedSaving.isolation}</div>
      </div>
      <div className={`${styles.infoCard} ${styles.tipCard}`}>
        <div className={styles.infoTitle}>💡 Tips</div>
        <div className={styles.infoText}>{seedSaving.tip}</div>
      </div>
    </Section>
  )
}
