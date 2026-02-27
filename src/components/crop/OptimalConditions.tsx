import type { OptimalConditions as OptimalConditionsType, Watering } from '../../data/types'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { SunIcon } from '../icons'
import styles from './OptimalConditions.module.css'

interface OptimalConditionsProps {
  conditions: OptimalConditionsType
  watering: Watering
}

export function OptimalConditions({ conditions, watering }: OptimalConditionsProps) {
  const items = [
    { label: 'Solbehov', iconName: conditions.sun.icon, value: conditions.sun.level, detail: conditions.sun.detail },
    { label: 'Temperatur', iconName: 'temperature', value: conditions.temperature.ideal, detail: conditions.temperature.detail },
    { label: 'Vind', iconName: 'wind', value: conditions.wind.level, detail: conditions.wind.detail },
    { label: 'Vattenbehov', iconName: watering.icon, value: watering.need, detail: watering.summary },
  ]

  return (
    <Section title="Trivs bäst" icon={<SunIcon size={20} />}>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}><Icon name={item.iconName} size={20} /></span>
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
