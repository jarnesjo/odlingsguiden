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

  let suitColor: string

  if (canGrowOutdoor) {
    suitColor = colors.accent
  } else if (canGrowGreenhouse) {
    suitColor = colors.zoneGreenhouseText
  } else {
    suitColor = colors.warning
  }

  const outdoorRange = zones.outdoor
    ? `Zon ${Math.min(...zones.outdoor)}-${Math.max(...zones.outdoor)}`
    : null
  const greenhouseRange = zones.greenhouse
    ? `Växthus ${Math.min(...zones.greenhouse)}-${Math.max(...zones.greenhouse)}`
    : null

  return (
    <div className={styles.zone} style={{ '--zone-color': suitColor } as React.CSSProperties}>
      {outdoorRange}
      {outdoorRange && greenhouseRange && ' · '}
      {greenhouseRange}
    </div>
  )
}
