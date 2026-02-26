import { useState } from 'react'
import type { Category, Zone } from '../../data/types'
import { CATEGORIES } from '../../data/categories'
import { CROP_LIST } from '../../data/crops'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import { ZONE_INFO } from '../../data/zones'
import styles from './CropList.module.css'

interface CropListProps {
  userZone: Zone
  onSelect: (cropId: string) => void
  onZoneClick: () => void
}

export function CropList({ userZone, onSelect, onZoneClick }: CropListProps) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Alla')
  const [category, setCategory] = useState<Category>('grönsaker')

  const catCrops = CROP_LIST.filter((c) => c.category === category)
  const families = ['Alla', ...new Set(catCrops.map((c) => c.familyLatin))]
  const filtered = catCrops.filter(
    (c) =>
      (filter === 'Alla' || c.familyLatin === filter) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  )

  const activeCat = CATEGORIES.find((c) => c.id === category)!
  const unlockedCount = filtered.filter((c) => !c.locked).length
  const lockedCount = filtered.filter((c) => c.locked).length

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>🌱</div>
        <h1 className={styles.title}>Odlingsguiden</h1>
        <p className={styles.subtitle}>Allt du behöver veta – en gröda i taget</p>
      </div>

      {/* Category Toggle */}
      <div className={styles.categoryToggle}>
        {CATEGORIES.map((cat) => {
          const isActive = category === cat.id
          const count = CROP_LIST.filter((c) => c.category === cat.id).length
          return (
            <button
              key={cat.id}
              className={`${styles.categoryButton} ${isActive ? styles.categoryActive : styles.categoryInactive}`}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
              onClick={() => {
                setCategory(cat.id)
                setFilter('Alla')
              }}
            >
              <span className={styles.categoryEmoji}>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={styles.categoryCount}>{count} st</span>
            </button>
          )
        })}
      </div>

      {/* Zone selector button */}
      <button className={styles.zoneButton} onClick={onZoneClick}>
        <div className={styles.zoneLeft}>
          <div className={styles.zoneBadge}>{userZone}</div>
          <div>
            <div className={styles.zoneLabel}>Odlingszon {userZone}</div>
            <div className={styles.zoneSub}>{ZONE_INFO[userZone].region} · Tryck för att byta</div>
          </div>
        </div>
        <span className={styles.zoneChange}>Byt ›</span>
      </button>

      {/* Search */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder={`Sök ${activeCat.label.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>

      {/* Family filters */}
      {families.length > 2 && (
        <div className={styles.familyFilters}>
          {families.map((f) => (
            <button
              key={f}
              className={`${styles.familyButton} ${filter === f ? styles.familyActive : styles.familyInactive}`}
              style={{ '--cat-color': activeCat.color } as React.CSSProperties}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Crop rows */}
      {filtered.map((crop) => {
        const d = DIFFICULTY_INFO[crop.difficulty]
        return (
          <button
            key={crop.id}
            className={`${styles.cropButton} ${crop.locked ? styles.cropLocked : styles.cropUnlocked}`}
            onClick={() => !crop.locked && onSelect(crop.id)}
          >
            <div className={styles.cropEmoji}>{crop.emoji}</div>
            <div className={styles.cropInfo}>
              <div className={styles.cropName}>{crop.name}</div>
              <div className={styles.cropMeta}>
                {crop.familyLatin} ({crop.family}) · <span style={{ color: d.color === '#B7E4C7' ? '#3D6B4F' : d.color === '#FFF3CD' ? '#B8860B' : '#B54A3F' }}>{d.icon} {crop.difficulty}</span>
              </div>
            </div>
            {crop.locked ? (
              <span className={styles.soonBadge}>Snart</span>
            ) : (
              <span className={styles.arrow}>→</span>
            )}
          </button>
        )
      })}

      {/* Footer */}
      <div className={styles.footer}>
        {unlockedCount} {activeCat.label.toLowerCase()} tillgängliga · {lockedCount} kommer snart
        <br />
        <span className={styles.footerSub}>
          Klicka på en olåst {category === 'grönsaker' ? 'gröda' : category === 'bär' ? 'bärbuske' : 'krydda'} för att se demo
        </span>
      </div>
    </div>
  )
}
