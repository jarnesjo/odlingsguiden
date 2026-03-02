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

  let icon: string
  let suitColor: string
  let title: string

  if (canGrowOutdoor) {
    icon = '✓'
    suitColor = colors.accent
    title = 'Passar din zon'
  } else if (canGrowGreenhouse) {
    icon = '⚠'
    suitColor = colors.zoneGreenhouseText
    title = 'Kräver växthus/tunnel i din zon'
  } else {
    icon = '✗'
    suitColor = colors.warning
    title = 'Svårt i din zon'
  }

  const outdoorRange = zones.outdoor
    ? `Zon ${Math.min(...zones.outdoor)}-${Math.max(...zones.outdoor)}`
    : null
  const greenhouseRange = zones.greenhouse
    ? `Växthus ${Math.min(...zones.greenhouse)}-${Math.max(...zones.greenhouse)}`
    : null

  return (
    <div className={styles.zone}>
      <span className={styles.zoneRange}>
        {outdoorRange}
        {outdoorRange && greenhouseRange && ' · '}
        {greenhouseRange}
      </span>
      <span
        className={styles.suitIcon}
        style={{ '--suit-color': suitColor } as React.CSSProperties}
        title={title}
      >
        {icon}
      </span>
    </div>
  )
}
