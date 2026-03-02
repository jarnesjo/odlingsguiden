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
  let title: string

  if (canGrowOutdoor) {
    suitColor = colors.accent
    title = 'Passar din zon'
  } else if (canGrowGreenhouse) {
    suitColor = colors.zoneGreenhouseText
    title = 'Kräver växthus eller tunnel i din zon'
  } else {
    suitColor = colors.warning
    title = 'Svårt att odla i din zon'
  }

  const outdoorRange = zones.outdoor
    ? `Zon ${Math.min(...zones.outdoor)}-${Math.max(...zones.outdoor)}`
    : null
  const greenhouseRange = zones.greenhouse
    ? `Växthus ${Math.min(...zones.greenhouse)}-${Math.max(...zones.greenhouse)}`
    : null

  return (
    <div className={styles.zone} style={{ '--zone-color': suitColor } as React.CSSProperties} title={title}>
      {outdoorRange}
      {outdoorRange && greenhouseRange && ' · '}
      {greenhouseRange}
    </div>
  )
}
