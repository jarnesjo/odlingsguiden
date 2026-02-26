import type { SowingInfo } from '../../data/types'
import { Section } from '../ui'
import styles from './SowingSection.module.css'

interface SowingSectionProps {
  sowing: SowingInfo
}

const METHOD_CONFIG = {
  direct: { className: 'methodDirect', icon: '🌾', label: 'Direktsådd' },
  indoor: { className: 'methodIndoor', icon: '🏠', label: 'Förodling inomhus' },
  both: { className: 'methodBoth', icon: '🌾🏠', label: 'Direktsådd eller förodling' },
} as const

export function SowingSection({ sowing }: SowingSectionProps) {
  const config = METHOD_CONFIG[sowing.method]

  return (
    <Section title={`🌱 ${sowing.label}`}>
      <div className={`${styles.methodCard} ${styles[config.className]}`}>
        <span className={styles.methodIcon}>{config.icon}</span>
        <div>
          <div className={styles.methodTitle}>{config.label}</div>
          {sowing.indoorWeeks && (
            <div className={styles.methodSub}>Förodla {sowing.indoorWeeks} före utplantering</div>
          )}
        </div>
      </div>
      <p className={styles.description}>{sowing.description}</p>
      <div className={styles.stepsTitle}>Steg för steg</div>
      {sowing.steps.map((step, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.stepNumber}>{i + 1}</div>
          <div>{step}</div>
        </div>
      ))}
      {sowing.tips && sowing.tips.length > 0 && (
        <>
          <div className={styles.tipsTitle}>Tips</div>
          {sowing.tips.map((tip, i) => (
            <div key={i} className={styles.tip}>
              <span className={styles.tipIcon}>💡</span> {tip}
            </div>
          ))}
        </>
      )}
    </Section>
  )
}
