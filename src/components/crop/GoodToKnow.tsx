import type { GoodToKnow as GoodToKnowType } from '../../data/types'
import { Section } from '../ui'
import styles from './GoodToKnow.module.css'

interface GoodToKnowProps {
  items: GoodToKnowType[]
}

export function GoodToKnow({ items }: GoodToKnowProps) {
  return (
    <Section title="💡 Bra att veta">
      <p className={styles.intro}>
        Saker som erfarna odlare vet – och nybörjare ofta lär sig the hard way.
      </p>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.card} ${item.severity === 'warning' ? styles.cardWarning : styles.cardTip}`}
        >
          <div className={styles.cardTitle}>
            <span>{item.icon}</span> {item.title}
          </div>
          <div className={styles.cardText}>{item.text}</div>
        </div>
      ))}
    </Section>
  )
}
