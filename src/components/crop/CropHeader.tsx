import type { Crop, Zone } from '../../data/types'
import { DifficultyBadge, ZoneBadge } from '../ui'
import { CropGraphic } from '../illustrations/CropGraphic'
import { BackArrowIcon } from '../icons'
import styles from './CropHeader.module.css'

interface CropHeaderProps {
  crop: Crop
  userZone: Zone
  onBack: () => void
}

export function CropHeader({ crop, userZone, onBack }: CropHeaderProps) {
  const isBerry = crop.category === 'bär'

  const stats = isBerry
    ? [
        { label: 'Plantavstånd', value: crop.spacing },
        { label: 'Radavstånd', value: crop.rowSpacing },
        { label: 'Plantering', value: crop.depth },
      ]
    : [
        { label: 'Avstånd', value: crop.spacing },
        { label: 'Radavstånd', value: crop.rowSpacing },
        { label: 'Sådjup', value: crop.depth },
      ]

  return (
    <>
      <button className={styles.backButton} onClick={onBack}>
        <BackArrowIcon size={18} /> Tillbaka
      </button>

      <div className={styles.hero}>
        <div className={styles.illustration}>
          <CropGraphic id={crop.icon} size={120} category={crop.category} />
        </div>
        <h1 className={styles.name}>{crop.name}</h1>
        <div className={styles.family}>
          {crop.familyLatin} <span className={styles.familySwedish}>({crop.family})</span>
        </div>
        <div className={styles.badges}>
          <div className={styles.badgeRow}>
            <DifficultyBadge difficulty={crop.difficulty} why={crop.difficultyWhy} />
            <span className={`${styles.pill} ${styles.daysPill}`}>
              {isBerry ? crop.days : `${crop.days} dagar till skörd`}
            </span>
            {crop.perennial && (
              <span className={`${styles.pill} ${styles.perennialPill}`}>
                Flerårig · {crop.lifespan}
              </span>
            )}
          </div>
          <ZoneBadge zones={crop.zones} userZone={userZone} />
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statValue}>{s.value}</div>
          </div>
        ))}
      </div>
    </>
  )
}
