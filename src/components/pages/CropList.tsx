import { useState, useRef, useEffect, lazy, Suspense } from "react"
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

const SeasonView = lazy(() => import('./SeasonView').then(m => ({ default: m.SeasonView })))

type View = 'sasong' | Category

interface CropListProps {
  userZone: Zone
  view: View
  currentMonth: number
  onViewChange: (view: View) => void
  onMonthChange: (month: number) => void
  onSelect: (cropId: string) => void
  onZoneClick: () => void
}

export function CropList({ userZone, view, currentMonth, onViewChange, onMonthChange, onSelect, onZoneClick }: CropListProps) {
  useDocumentMeta(
    'Odlingsguiden - Allt du behöver veta, en gröda i taget',
    'Zonanpassad odlingsguide för svenska trädgårdar. Djupa profiler för grönsaker, bär och kryddor med sortval, tidslinjer och skördetips.',
  )

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("Alla")
  const searchRef = useRef<HTMLInputElement>(null)

  const isSeason = view === 'sasong'

  const visibleCategories = CATEGORIES.filter((c) => !c.hidden)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (!isSeason && searchRef.current) {
          searchRef.current.focus()
          searchRef.current.select()
        }
        return
      }

      // 1-4 byter kategori (ren siffra eller CMD/Ctrl+siffra i sökinput)
      const inSearch = document.activeElement === searchRef.current
      if (inSearch && !(e.metaKey || e.ctrlKey)) return
      if (!inSearch && (e.metaKey || e.ctrlKey || e.altKey)) return
      const views: View[] = ['sasong', ...visibleCategories.map((c) => c.id as Category)]
      const idx = Number(e.key) - 1
      const target = views[idx]
      if (target) {
        e.preventDefault()
        onViewChange(target)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSeason, onViewChange, visibleCategories])
  const category = isSeason ? 'grönsaker' : view as Category
  const catCrops = CROP_LIST.filter((c) => c.category === category)
  const families = ["Alla", ...new Set(catCrops.map((c) => c.familyLatin))]
  const filtered = catCrops
    .filter((c) => (filter === "Alla" || c.familyLatin === filter) && c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.locked !== b.locked) return a.locked ? 1 : -1
      return a.name.localeCompare(b.name, 'sv')
    })

  const activeCat = CATEGORIES.find((c) => c.id === category)!

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoCombined name="Odlingsguiden" tagline="Allt du behöver veta - en gröda i taget" symbol={SymbolSprout} />
        <button className={styles.zonePill} onClick={onZoneClick}>
          Zon {userZone} · {ZONE_INFO[userZone].region} ▾
        </button>
      </div>

      {/* Unified Toggle: Säsong | Grönsaker | Kryddor | Bär */}
      <div className={styles.categoryToggle}>
        <button
          className={`${styles.categoryButton} ${isSeason ? styles.categoryActive : styles.categoryInactive}`}
          style={{ "--cat-color": "var(--color-accent)" } as React.CSSProperties}
          onClick={() => onViewChange('sasong')}
        >
          <span className={styles.categoryIcon}>
            <Icon name="calendar" size={22} color={isSeason ? "#fff" : "var(--color-accent)"} />
          </span>
          <span>Säsong</span>
        </button>
        {visibleCategories.map((cat) => {
          const isActive = view === cat.id
          return (
            <button
              key={cat.id}
              className={`${styles.categoryButton} ${isActive ? styles.categoryActive : styles.categoryInactive}`}
              style={{ "--cat-color": cat.color } as React.CSSProperties}
              onClick={() => {
                onViewChange(cat.id)
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

      {isSeason ? (
        <Suspense fallback={<div style={{ textAlign: 'center', padding: 40, color: 'var(--color-text-muted)' }}>Laddar...</div>}>
          <SeasonView userZone={userZone} currentMonth={currentMonth} onMonthChange={onMonthChange} onSelect={onSelect} />
        </Suspense>
      ) : (
        <>
          {/* Search */}
          <div className={styles.searchWrapper}>
            <input
              ref={searchRef}
              type="search"
              placeholder={`Sök ${activeCat.label.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>
              <SearchIcon size={16} color="#999" />
            </span>
            <kbd className={styles.searchHint}>{navigator.platform?.includes('Mac') ? '⌘K' : 'Ctrl+K'}</kbd>
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
            const diffLabel = crop.difficulty === 'Enkel' ? 'Lättodlad' : crop.difficulty === 'Medel' ? 'Kräver lite omsorg' : 'Kräver extra omsorg'
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
                      <DifficultyDot color={dotColor} /> {diffLabel}
                    </span>
                  </div>
                </div>
                {crop.locked ? <span className={styles.soonBadge}>Snart</span> : <span className={styles.arrow}>→</span>}
              </button>
            )
          })}

        </>
      )}
    </div>
  )
}
