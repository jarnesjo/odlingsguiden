import type { SowingInfo } from '../../data/types'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { SeedlingIcon, TipIcon } from '../icons'
import styles from './SowingSection.module.css'

interface SowingSectionProps {
  sowing: SowingInfo
}

const METHOD_CONFIG = {
  direct: { className: 'methodDirect', icon: 'seed', label: 'Direktsådd' },
  indoor: { className: 'methodIndoor', icon: 'indoor', label: 'Förodling inomhus' },
  both: { className: 'methodBoth', icon: 'seed', label: 'Direktsådd eller förodling' },
} as const

export function SowingSection({ sowing }: SowingSectionProps) {
  const config = METHOD_CONFIG[sowing.method]

  return (
    <Section title={sowing.label} icon={<SeedlingIcon size={20} />}>
      <div className={`${styles.methodCard} ${styles[config.className]}`}>
        <span className={styles.methodIcon}><Icon name={config.icon} size={20} /></span>
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
              <span className={styles.tipIcon}><TipIcon size={14} /></span> {tip}
            </div>
          ))}
        </>
      )}
    </Section>
  )
}
