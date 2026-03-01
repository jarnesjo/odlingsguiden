import { useState } from "react"
import type { Category, Zone } from "../../data/types"
import { useDocumentMeta } from "../../hooks/useDocumentMeta"
import { CATEGORIES } from "../../data/categories"
import { CROP_LIST } from "../../data/cropList"
import { DIFFICULTY_INFO } from "../../data/difficulty"
import { ZONE_INFO } from "../../data/zones"
import { Icon } from "../icons/Icon"
import { SearchIcon, DifficultyDot } from "../icons"
import { LogoCombined } from "../brand"
import { SymbolSprout } from "../brand"
import { CropIcon } from "../illustrations/CropIcon"
import styles from "./CropList.module.css"

interface CropListProps {
  userZone: Zone
  onSelect: (cropId: string) => void
  onZoneClick: () => void
}

export function CropList({ userZone, onSelect, onZoneClick }: CropListProps) {
  useDocumentMeta(
    'Odlingsguiden - Allt du behöver veta, en gröda i taget',
    'Zonanpassad odlingsguide för svenska trädgårdar. Djupa profiler för grönsaker, bär och kryddor med sortval, tidslinjer och skördetips.',
  )

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("Alla")
  const [category, setCategory] = useState<Category>("grönsaker")

  const catCrops = CROP_LIST.filter((c) => c.category === category)
  const families = ["Alla", ...new Set(catCrops.map((c) => c.familyLatin))]
  const filtered = catCrops
    .filter((c) => (filter === "Alla" || c.familyLatin === filter) && c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.locked !== b.locked) return a.locked ? 1 : -1
      return a.name.localeCompare(b.name, 'sv')
    })

  const activeCat = CATEGORIES.find((c) => c.id === category)!
  const unlockedCount = filtered.filter((c) => !c.locked).length
  const lockedCount = filtered.filter((c) => c.locked).length

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoCombined name="Odlingsguiden" tagline="Allt du behöver veta - en gröda i taget" symbol={SymbolSprout} />
        <button className={styles.zonePill} onClick={onZoneClick}>
          Zon {userZone} · {ZONE_INFO[userZone].region} ▾
        </button>
      </div>

      {/* Category Toggle */}
      <div className={styles.categoryToggle}>
        {CATEGORIES.filter((c) => !c.hidden).map((cat) => {
          const isActive = category === cat.id
          return (
            <button
              key={cat.id}
              className={`${styles.categoryButton} ${isActive ? styles.categoryActive : styles.categoryInactive}`}
              style={{ "--cat-color": cat.color } as React.CSSProperties}
              onClick={() => {
                setCategory(cat.id)
                setFilter("Alla")
              }}
            >
              <span className={styles.categoryIcon}>
                <Icon name={cat.icon} size={22} color={isActive ? "#fff" : cat.color} />
              </span>
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* Search */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder={`Sök ${activeCat.label.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}>
          <SearchIcon size={16} color="#999" />
        </span>
      </div>

      {/* Family filters */}
      {families.length > 2 && (
        <div className={styles.familyFilters}>
          {families.map((f) => (
            <button
              key={f}
              className={`${styles.familyButton} ${filter === f ? styles.familyActive : styles.familyInactive}`}
              style={{ "--cat-color": activeCat.color } as React.CSSProperties}
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
        const dotColor = d.color === "#B7E4C7" ? "#3D6B4F" : d.color === "#FFF3CD" ? "#B8860B" : "#B54A3F"
        return (
          <button
            key={crop.id}
            className={`${styles.cropButton} ${crop.locked ? styles.cropLocked : styles.cropUnlocked}`}
            onClick={() => !crop.locked && onSelect(crop.id)}
          >
            <div className={styles.cropGraphic}>
              <CropIcon id={crop.id} size={40} category={crop.category} />
            </div>
            <div className={styles.cropInfo}>
              <div className={styles.cropName}>{crop.name}</div>
              <div className={styles.cropMeta}>
                {crop.familyLatin} ({crop.family}) ·{" "}
                <span style={{ color: dotColor }}>
                  <DifficultyDot color={dotColor} /> {crop.difficulty}
                </span>
              </div>
            </div>
            {crop.locked ? <span className={styles.soonBadge}>Snart</span> : <span className={styles.arrow}>→</span>}
          </button>
        )
      })}

      {/* Footer */}
      <div className={styles.footer}>
        {unlockedCount} {activeCat.label.toLowerCase()} tillgängliga · {lockedCount} kommer snart
        <br />
        <span className={styles.footerSub}>
          Skapad med omtanke av{" "}
          <a href="https://lillabosgarden.se" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            Lilla Bosgården
          </a>
        </span>
      </div>
    </div>
  )
}
