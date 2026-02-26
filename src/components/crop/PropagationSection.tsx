import type { Propagation } from '../../data/types'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import { Section } from '../ui'
import styles from './PropagationSection.module.css'

interface PropagationSectionProps {
  propagation: Propagation
}

export function PropagationSection({ propagation }: PropagationSectionProps) {
  const diffInfo = DIFFICULTY_INFO[propagation.difficulty]

  return (
    <Section title="🌱 Förökning" defaultOpen={false}>
      <div className={styles.badges}>
        <span className={styles.badge} style={{ background: diffInfo.color }}>
          {diffInfo.icon} {propagation.difficulty}
        </span>
      </div>
      {propagation.methods.map((m, i) => (
        <div key={i} className={styles.methodCard}>
          <div className={styles.methodHeader}>
            <span className={styles.methodIcon}>{m.icon}</span>
            <div className={styles.methodName}>{m.method}</div>
          </div>
          <div className={styles.methodDesc}>{m.description}</div>
        </div>
      ))}
      <div className={styles.tipCard}>
        <div className={styles.tipTitle}>💡 Tips</div>
        <div className={styles.tipText}>{propagation.tip}</div>
      </div>
    </Section>
  )
}
