import type { Rotation } from '../../data/types'
import { Section } from '../ui'
import { RotationIcon } from '../icons'
import styles from './RotationSection.module.css'

interface RotationSectionProps {
  rotation: Rotation
}

export function RotationSection({ rotation }: RotationSectionProps) {
  return (
    <Section title="Växtföljd" icon={<RotationIcon size={20} />}>
      <div className={`${styles.card} ${styles.avoidCard}`}>
        <div className={`${styles.cardTitle} ${styles.avoidTitle}`}>
          Undvik efter: {rotation.avoid.join(', ')}
        </div>
        <div className={styles.cardText}>{rotation.avoidWhy}</div>
      </div>
      <div className={`${styles.card} ${styles.beforeCard}`}>
        <div className={`${styles.cardTitle} ${styles.beforeTitle}`}>
          Bra föregångare: {rotation.goodBefore.join(', ')}
        </div>
        <div className={styles.cardText}>{rotation.goodBeforeWhy}</div>
      </div>
      <div className={`${styles.card} ${styles.afterCard}`}>
        <div className={`${styles.cardTitle} ${styles.afterTitle}`}>
          Bra efterföljare: {rotation.goodAfter.join(', ')}
        </div>
        <div className={styles.cardText}>{rotation.goodAfterWhy}</div>
      </div>
    </Section>
  )
}
