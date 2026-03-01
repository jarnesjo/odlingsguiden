import { Link } from 'react-router-dom'
import type { Crop, Zone } from '../../data/types'
import { DifficultyBadge, ZoneBadge } from '../ui'
import { CropGraphic } from '../illustrations/CropGraphic'
import { BackArrowIcon } from '../icons'
import { SymbolSprout } from '../brand'
import styles from './CropHeader.module.css'

interface CropHeaderProps {
  crop: Crop
  userZone: Zone
  onBack: () => void
  onZoneClick: () => void
}

export function CropHeader({ crop, userZone, onBack, onZoneClick }: CropHeaderProps) {
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
      <nav className={styles.navbar}>
        <button className={styles.backButton} onClick={onBack} aria-label="Tillbaka">
          <BackArrowIcon size={18} />
        </button>
        <Link to="/" className={styles.brand}>
          <SymbolSprout size={24} />
          <span className={styles.brandName}>Odlingsguiden</span>
        </Link>
        <button className={styles.zonePill} onClick={onZoneClick}>
          Zon {userZone} ▾
        </button>
      </nav>

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
