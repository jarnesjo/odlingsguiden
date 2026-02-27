import type { GoodToKnow as GoodToKnowType } from '../../data/types'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { TipIcon } from '../icons'
import styles from './GoodToKnow.module.css'

interface GoodToKnowProps {
  items: GoodToKnowType[]
}

export function GoodToKnow({ items }: GoodToKnowProps) {
  return (
    <Section title="Bra att veta" icon={<TipIcon size={20} />}>
      <p className={styles.intro}>
        Saker som erfarna odlare vet - och nybörjare ofta lär sig the hard way.
      </p>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.card} ${item.severity === 'warning' ? styles.cardWarning : styles.cardTip}`}
        >
          <div className={styles.cardTitle}>
            <Icon name={item.icon} size={18} /> {item.title}
          </div>
          <div className={styles.cardText}>{item.text}</div>
        </div>
      ))}
    </Section>
  )
}
