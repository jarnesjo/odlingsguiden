import { useState } from 'react'
import type { Zone, ZoneAvailability } from '../../data/types'
import { colors } from '../../theme/tokens'
import styles from './ZoneBadge.module.css'

interface ZoneBadgeProps {
  zones: ZoneAvailability
  userZone: Zone
}

export function ZoneBadge({ zones, userZone }: ZoneBadgeProps) {
  const [showTip, setShowTip] = useState(false)
  const canGrowOutdoor = zones.outdoor?.includes(userZone)
  const canGrowGreenhouse = zones.greenhouse?.includes(userZone)

  let suitColor: string
  let tip: string

  if (canGrowOutdoor) {
    suitColor = colors.accent
    tip = `Passar i zon ${userZone} utomhus.`
  } else if (canGrowGreenhouse) {
    suitColor = colors.zoneGreenhouseText
    tip = `Zon ${userZone} kräver växthus eller tunnel.`
  } else {
    suitColor = colors.warning
    tip = `Svårt att odla i zon ${userZone} - även med växthus.`
  }

  const outdoorRange = zones.outdoor
    ? `Zon ${Math.min(...zones.outdoor)}-${Math.max(...zones.outdoor)}`
    : null
  const greenhouseRange = zones.greenhouse
    ? `Växthus ${Math.min(...zones.greenhouse)}-${Math.max(...zones.greenhouse)}`
    : null

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.zone}
        style={{ '--zone-color': suitColor } as React.CSSProperties}
        onClick={() => setShowTip(!showTip)}
      >
        {outdoorRange}
        {outdoorRange && greenhouseRange && ' · '}
        {greenhouseRange}
        <span className={styles.infoIcon}>ⓘ</span>
      </button>
      {showTip && (
        <div className={styles.tooltip}>
          {tip}
          <div className={styles.tooltipArrow} />
        </div>
      )}
    </div>
  )
}
