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

  let detail: string
  let suitColor: string

  if (canGrowOutdoor) {
    detail = '✓ Passar din zon'
    suitColor = colors.accent
  } else if (canGrowGreenhouse) {
    detail = '⚠ Kräver växthus/tunnel i din zon'
    suitColor = colors.zoneGreenhouseText
  } else {
    detail = '✗ Svårt i din zon'
    suitColor = colors.warning
  }

  const outdoorRange = zones.outdoor
    ? `Zon ${Math.min(...zones.outdoor)}-${Math.max(...zones.outdoor)}`
    : null
  const greenhouseRange = zones.greenhouse
    ? `Växthus ${Math.min(...zones.greenhouse)}-${Math.max(...zones.greenhouse)}`
    : null

  return (
    <div className={styles.zone}>
      <div className={styles.zoneRange}>
        {outdoorRange}
        {outdoorRange && greenhouseRange && ' · '}
        {greenhouseRange}
      </div>
      <div className={styles.suitability} style={{ '--suit-color': suitColor } as React.CSSProperties}>
        {detail}
      </div>
    </div>
  )
}
