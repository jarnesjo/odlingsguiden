import { useEffect, useRef } from 'react'
import type { Zone } from '../../data/types'
import { ZONE_INFO } from '../../data/zones'
import styles from './ZoneSelector.module.css'

interface ZoneSelectorProps {
  currentZone: Zone
  onSelect: (zone: Zone) => void
  onClose: () => void
}

export function ZoneSelector({ currentZone, onSelect, onClose }: ZoneSelectorProps) {
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.sheet} ref={sheetRef}>
        <div className={styles.header}>
          <h2 className={styles.title}>Välj din odlingszon</h2>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
        </div>
        <p className={styles.description}>
          Odlingszoner i Sverige (1-8) anger hur kallt klimatet är i ditt område. Zon 1 är mildast
          (Skåne), zon 8 kallast (fjällen). Appen anpassar tidslinjer och sortrekommendationer efter
          din zon.
        </p>
        {(Object.entries(ZONE_INFO) as [string, typeof ZONE_INFO[Zone]][]).map(([z, info]) => {
          const zone = Number(z) as Zone
          const isActive = zone === currentZone
          return (
            <button
              key={z}
              className={`${styles.zoneButton} ${isActive ? styles.zoneActive : styles.zoneDefault}`}
              onClick={() => {
                onSelect(zone)
                onClose()
              }}
            >
              <div className={`${styles.zoneBadge} ${isActive ? styles.zoneBadgeActive : styles.zoneBadgeDefault}`}>
                {z}
              </div>
              <div className={styles.zoneInfo}>
                <div className={styles.zoneRegion}>{info.region}</div>
                <div className={styles.zoneFrost}>{info.frost} · {info.season}</div>
              </div>
              {isActive && <span className={styles.checkmark}>✓</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
