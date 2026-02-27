import type { Propagation } from '../../data/types'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { SeedlingIcon, DifficultyDot, TipIcon } from '../icons'
import styles from './PropagationSection.module.css'

interface PropagationSectionProps {
  propagation: Propagation
}

export function PropagationSection({ propagation }: PropagationSectionProps) {
  const diffInfo = DIFFICULTY_INFO[propagation.difficulty]
  const dotColor = diffInfo.color === '#B7E4C7' ? '#3D6B4F' : diffInfo.color === '#FFF3CD' ? '#B8860B' : '#B54A3F'

  return (
    <Section title="Förökning" icon={<SeedlingIcon size={20} />} defaultOpen={false}>
      <div className={styles.badges}>
        <span className={styles.badge} style={{ background: diffInfo.color }}>
          <DifficultyDot color={dotColor} /> {propagation.difficulty}
        </span>
      </div>
      {propagation.methods.map((m, i) => (
        <div key={i} className={styles.methodCard}>
          <div className={styles.methodHeader}>
            <span className={styles.methodIcon}><Icon name={m.icon} size={20} /></span>
            <div className={styles.methodName}>{m.method}</div>
          </div>
          <div className={styles.methodDesc}>{m.description}</div>
        </div>
      ))}
      <div className={styles.tipCard}>
        <div className={styles.tipTitle}><TipIcon size={14} /> Tips</div>
        <div className={styles.tipText}>{propagation.tip}</div>
      </div>
    </Section>
  )
}
