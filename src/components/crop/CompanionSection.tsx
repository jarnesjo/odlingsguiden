import type { Companion, Companions } from '../../data/types'
import { hasProfile } from '../../data/cropUtils'
import { CROP_LIST } from '../../data/crops'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { CropGraphic } from '../illustrations/CropGraphic'
import { SeedlingIcon } from '../icons'
import styles from './CompanionSection.module.css'

interface CompanionSectionProps {
  companions: Companions
  onNavigate?: (cropId: string) => void
}

function CompanionIcon({ comp }: { comp: Companion }) {
  if (comp.id) {
    const entry = CROP_LIST.find(c => c.id === comp.id)
    if (entry) return <CropGraphic id={entry.icon} size={18} category={entry.category} />
  }
  return <Icon name={comp.icon} size={18} />
}

export function CompanionSection({ companions, onNavigate }: CompanionSectionProps) {
  const renderCompanion = (comp: Companion, cardClass: string | undefined) => {
    const cropId = comp.id
    const clickable = !!(cropId && onNavigate && hasProfile(cropId))

    const handleClick = clickable ? () => onNavigate(cropId) : undefined
    const handleKeyDown = clickable ? (e: React.KeyboardEvent) => { if (e.key === 'Enter') onNavigate(cropId) } : undefined

    return (
      <div
        key={comp.name}
        className={`${styles.card} ${cardClass}${clickable ? ` ${styles.clickable}` : ''}`}
        onClick={handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.companionName}>
          <CompanionIcon comp={comp} />
          <span>{comp.name}</span>
          {clickable && <Icon name="chevron-right" size={14} />}
        </div>
        <div className={styles.companionWhy}>{comp.why}</div>
      </div>
    )
  }

  return (
    <Section title="Samodling" icon={<SeedlingIcon size={20} />}>
      <div className={`${styles.sectionTitle} ${styles.goodTitle}`}>Bra grannar</div>
      {companions.good.map((comp) => renderCompanion(comp, styles.goodCard))}
      <div className={`${styles.sectionTitle} ${styles.badTitle}`}>Dåliga grannar</div>
      {companions.bad.map((comp) => renderCompanion(comp, styles.badCard))}
    </Section>
  )
}
