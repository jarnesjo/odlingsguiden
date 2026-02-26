import type { Zone, ZoneAvailability } from '../../data/types'
import { colors } from '../../theme/tokens'
import styles from './ZoneBadge.module.css'

interface ZoneBadgeProps {
  zones: ZoneAvailability
  userZone: Zone
}

export function ZoneBadge({ zones, userZone }: ZoneBadgeProps) {
  const canGrowOutdoor = zones.outdoor?.includes(userZone)
  const canGrowGreenhouse = zones.greenhouse?.includes(userZone)

  let label: string
  let bg: string
  let detail: string
  let suitColor: string

  if (canGrowOutdoor) {
    label = `Odlingszon ${Math.min(...zones.outdoor!)}–${Math.max(...zones.outdoor!)}`
    bg = colors.zoneOutdoor
    detail = '✓ Passar din zon'
    suitColor = colors.accent
  } else if (canGrowGreenhouse) {
    label = 'Växthus i din zon'
    bg = colors.zoneGreenhouse
    detail = '⚠ Kräver växthus/tunnel i din zon'
    suitColor = colors.zoneGreenhouseText
  } else {
    const fallback = zones.outdoor || zones.greenhouse || []
    label = `Odlingszon ${Math.min(...fallback)}–${Math.max(...fallback)}`
    bg = colors.warningLight
    detail = '✗ Svårt i din zon'
    suitColor = colors.warning
  }

  return (
    <div>
      <span className={styles.badge} style={{ '--badge-bg': bg } as React.CSSProperties}>
        {label}
      </span>
      {zones.greenhouse && zones.outdoor && (
        <div className={styles.greenhouseInfo}>
          Utomhus: zon {Math.min(...zones.outdoor)}–{Math.max(...zones.outdoor)} · Växthus: zon{' '}
          {Math.min(...zones.greenhouse)}–{Math.max(...zones.greenhouse)}
        </div>
      )}
      <div className={styles.suitability} style={{ '--suit-color': suitColor } as React.CSSProperties}>
        {detail}
      </div>
    </div>
  )
}
