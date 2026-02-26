import type { OptimalConditions as OptimalConditionsType, Watering } from '../../data/types'
import { Section } from '../ui'
import styles from './OptimalConditions.module.css'

interface OptimalConditionsProps {
  conditions: OptimalConditionsType
  watering: Watering
}

export function OptimalConditions({ conditions, watering }: OptimalConditionsProps) {
  const items = [
    { label: 'Solbehov', icon: conditions.sun.icon, value: conditions.sun.level, detail: conditions.sun.detail },
    { label: 'Temperatur', icon: '🌡️', value: conditions.temperature.ideal, detail: conditions.temperature.detail },
    { label: 'Vind', icon: '💨', value: conditions.wind.level, detail: conditions.wind.detail },
    { label: 'Vattenbehov', icon: watering.icon, value: watering.need, detail: watering.summary },
  ]

  return (
    <Section title="☀️ Trivs bäst">
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
            <div className={styles.detail}>{item.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
