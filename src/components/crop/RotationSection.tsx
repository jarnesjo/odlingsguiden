import type { Rotation, RotationItem } from '../../data/types'
import { hasProfile } from '../../data/cropUtils'
import { CROP_LIST } from '../../data/crops'
import { Section } from '../ui'
import { CropGraphic } from '../illustrations/CropGraphic'
import { RotationIcon } from '../icons'
import styles from './RotationSection.module.css'

interface RotationSectionProps {
  rotation: Rotation
  onNavigate?: (cropId: string) => void
}

function RotationItemIcon({ item }: { item: RotationItem }) {
  if (item.id) {
    const entry = CROP_LIST.find(c => c.id === item.id)
    if (entry) return <CropGraphic id={entry.icon} size={14} category={entry.category} />
  }
  const category = item.category ?? 'grönsaker'
  return <CropGraphic id="" size={14} category={category} />
}

function RotationPills({ items, onNavigate }: { items: RotationItem[], onNavigate?: (cropId: string) => void }) {
  return (
    <div className={styles.pills}>
      {items.map((item) => {
        const clickable = !!(item.id && onNavigate && hasProfile(item.id))
        const cropId = item.id

        const handleClick = clickable && cropId ? () => onNavigate(cropId) : undefined
        const handleKeyDown = clickable && cropId ? (e: React.KeyboardEvent) => { if (e.key === 'Enter') onNavigate(cropId) } : undefined

        return (
          <span
            key={item.name}
            className={`${styles.pill}${clickable ? ` ${styles.clickable}` : ''}`}
            onClick={handleClick}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            onKeyDown={handleKeyDown}
          >
            <RotationItemIcon item={item} />
            {item.name}
          </span>
        )
      })}
    </div>
  )
}

export function RotationSection({ rotation, onNavigate }: RotationSectionProps) {
  return (
    <Section title="Växtföljd" icon={<RotationIcon size={20} />}>
      <div className={`${styles.card} ${styles.avoidCard}`}>
        <div className={`${styles.cardTitle} ${styles.avoidTitle}`}>Undvik efter</div>
        <RotationPills items={rotation.avoid} onNavigate={onNavigate} />
        <div className={styles.cardText}>{rotation.avoidWhy}</div>
      </div>
      <div className={`${styles.card} ${styles.beforeCard}`}>
        <div className={`${styles.cardTitle} ${styles.beforeTitle}`}>Bra föregångare</div>
        <RotationPills items={rotation.goodBefore} onNavigate={onNavigate} />
        <div className={styles.cardText}>{rotation.goodBeforeWhy}</div>
      </div>
      <div className={`${styles.card} ${styles.afterCard}`}>
        <div className={`${styles.cardTitle} ${styles.afterTitle}`}>Bra efterföljare</div>
        <RotationPills items={rotation.goodAfter} onNavigate={onNavigate} />
        <div className={styles.cardText}>{rotation.goodAfterWhy}</div>
      </div>
    </Section>
  )
}
