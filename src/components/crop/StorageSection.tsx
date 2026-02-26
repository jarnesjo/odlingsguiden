import type { Storage } from '../../data/types'
import { Section } from '../ui'
import styles from './StorageSection.module.css'

interface StorageSectionProps {
  storage: Storage
}

export function StorageSection({ storage }: StorageSectionProps) {
  return (
    <Section title="🏺 Lagring" defaultOpen={false}>
      <div className={styles.shelfBadge}>
        <span className={styles.shelfPill}>Håller: {storage.shelfLife}</span>
      </div>
      {storage.methods.map((m, i) => (
        <div
          key={i}
          className={`${styles.methodCard} ${m.best ? styles.methodBest : styles.methodDefault}`}
        >
          {m.best && <span className={styles.bestLabel}>Rekommenderat</span>}
          <div className={styles.methodHeader}>
            <span className={styles.methodIcon}>{m.icon}</span>
            <div className={styles.methodName}>{m.method}</div>
          </div>
          <div className={styles.methodDuration}>{m.duration}</div>
          <div className={styles.methodDesc}>{m.description}</div>
        </div>
      ))}
      {storage.tips.length > 0 && (
        <>
          <div className={styles.tipsTitle}>Lagringstips</div>
          {storage.tips.map((tip, i) => (
            <div key={i} className={styles.tip}>
              <span className={styles.tipIcon}>💡</span> {tip}
            </div>
          ))}
        </>
      )}
    </Section>
  )
}
