import { Link } from 'react-router-dom'
import type { Crop, Zone } from '../../data/types'
import { DifficultyBadge, ZoneBadge } from '../ui'
import { CropGraphic } from '../illustrations/CropGraphic'
import { BackArrowIcon } from '../icons'
import { SymbolSprout } from '../brand'
import styles from './CropHeader.module.css'

interface CropHeaderProps {
  cropId: string
  crop: Crop
  userZone: Zone
  onBack: () => void
  onZoneClick: () => void
}

export function CropHeader({ cropId, crop, userZone, onBack, onZoneClick }: CropHeaderProps) {
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
          <CropGraphic id={cropId} size={120} category={crop.category} />
        </div>
        <h1 className={styles.name}>{crop.name}</h1>
        <div className={styles.family}>
          {crop.familyLatin} <span className={styles.familySwedish}>({crop.family})</span>
        </div>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.infoTop}>
          <DifficultyBadge difficulty={crop.difficulty} why={crop.difficultyWhy} />
          <span className={styles.infoMeta}>
            {crop.perennial
              ? `Flerårig · ${crop.lifespan}`
              : `${crop.days} dagar till skörd`}
          </span>
        </div>
        <ZoneBadge zones={crop.zones} userZone={userZone} />
        <div className={styles.infoStats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.infoStatCell}>
              <div className={styles.infoStatLabel}>{s.label}</div>
              <div className={styles.infoStatValue}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
