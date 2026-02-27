import type { Watering } from '../../data/types'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { WaterIcon, TipIcon } from '../icons'
import styles from './WateringSection.module.css'

interface WateringSectionProps {
  watering: Watering
}

function getNeedColor(need: string): string {
  if (need.includes('Hög')) return '#1565C0'
  if (need.includes('Medel')) return '#4A90D9'
  return '#90CAF9'
}

export function WateringSection({ watering }: WateringSectionProps) {
  return (
    <Section title="Vattning" icon={<WaterIcon size={20} />}>
      <div className={styles.header}>
        <span className={styles.headerIcon}><Icon name={watering.icon} size={24} /></span>
        <div>
          <div className={styles.headerTitle}>Vattenbehov: {watering.need}</div>
          <div className={styles.headerSummary}>{watering.summary}</div>
        </div>
      </div>
      <div className={styles.phasesTitle}>Per tillväxtfas</div>
      {watering.phases.map((phase, i) => {
        const needColor = getNeedColor(phase.need)
        return (
          <div
            key={i}
            className={styles.phaseCard}
            style={{ '--need-color': needColor } as React.CSSProperties}
          >
            <div className={styles.phaseHeader}>
              <span className={styles.phaseName}>{phase.phase}</span>
              <span className={styles.needBadge}>{phase.need}</span>
            </div>
            <div className={styles.phaseTip}>{phase.tip}</div>
          </div>
        )
      })}
      <div className={styles.mistakesTitle}>Vanliga vattenmisstag</div>
      {watering.mistakes.map((m, i) => (
        <div key={i} className={styles.mistake}>
          <span className={styles.mistakeIcon}>✗</span> {m}
        </div>
      ))}
      <div className={styles.bestTip}>
        <div className={styles.bestTipTitle}><TipIcon size={16} /> Bästa tipset</div>
        <div className={styles.bestTipText}>{watering.tip}</div>
      </div>
    </Section>
  )
}
