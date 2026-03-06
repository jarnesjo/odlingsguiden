import { useState, useEffect } from 'react'
import type { Zone } from '../../data/types'
import { MONTH_NAMES } from '../../utils/monthParser'
import { getSeasonActivities, type SeasonGroup } from '../../utils/seasonData'
import { ssrSeasonCache } from '../../utils/ssrSeasonCache'
import { Icon } from '../icons/Icon'
import { CropIcon } from '../illustrations/CropIcon'
import styles from './SeasonView.module.css'

interface SeasonViewProps {
  userZone: Zone
  currentMonth: number
  onMonthChange: (month: number) => void
  onSelect: (cropId: string) => void
}

const PREVIEW_COUNT = 3

export function SeasonView({ userZone, currentMonth, onMonthChange, onSelect }: SeasonViewProps) {
  const [groups, setGroups] = useState<SeasonGroup[]>(() => {
    // SSR: läs från SSR-cache (fylld av entry-server.tsx)
    const ssrData = ssrSeasonCache.get(currentMonth)
    if (ssrData) return ssrData
    // Klient: hydrera från inbäddad JSON (satt av prerender-scriptet)
    if (typeof document !== 'undefined') {
      const el = document.getElementById('__SEASON_DATA__')
      if (el?.textContent) {
        try { return JSON.parse(el.textContent) as SeasonGroup[] } catch { /* ignorera */ }
      }
    }
    return []
  })
  const [loaded, setLoaded] = useState(() => groups.length > 0)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  useEffect(() => {
    setLoaded(false)
    getSeasonActivities(currentMonth, userZone).then((data) => {
      setGroups(data)
      setLoaded(true)
    })
    setExpanded(new Set())
  }, [currentMonth, userZone])

  function prevMonth() {
    onMonthChange(currentMonth === 1 ? 12 : currentMonth - 1)
  }

  function nextMonth() {
    onMonthChange(currentMonth === 12 ? 1 : currentMonth + 1)
  }

  return (
    <div>
      {/* Månadsnavigering */}
      <div className={styles.monthNav}>
        <button className={styles.monthButton} onClick={prevMonth} aria-label="Föregående månad">
          ←
        </button>
        <span className={styles.monthLabel}>{MONTH_NAMES[currentMonth]}</span>
        <button className={styles.monthButton} onClick={nextMonth} aria-label="Nästa månad">
          →
        </button>
      </div>

      {/* Aktivitetsgrupper */}
      {!loaded && groups.length === 0 ? null : groups.length > 0 ? (
        groups.map(group => (
          <div key={group.key} className={styles.group}>
            <div className={styles.groupHeader}>
              <span className={styles.groupIcon}>
                <Icon name={group.icon} size={20} />
              </span>
              <span className={styles.groupLabel}>{group.label}</span>
              <span className={styles.groupCount}>{group.activities.length}</span>
            </div>

            {(() => {
              const isExpanded = expanded.has(group.key)
              const visible = isExpanded ? group.activities : group.activities.slice(0, PREVIEW_COUNT)
              const remaining = group.activities.length - PREVIEW_COUNT
              return (
                <>
                  {visible.map(activity => (
                    <button
                      key={`${activity.cropId}-${activity.phase}`}
                      className={styles.activityRow}
                      onClick={() => onSelect(activity.cropId)}
                    >
                      <div className={styles.activityIcon}>
                        <CropIcon id={activity.cropId} size={40} category={activity.category} />
                      </div>
                      <div className={styles.activityInfo}>
                        <div className={styles.activityName}>{activity.cropName}</div>
                        <div className={styles.activityMeta}>{activity.phase} · {activity.months}</div>
                      </div>
                      <span className={styles.activityArrow}>→</span>
                    </button>
                  ))}
                  {remaining > 0 && !isExpanded && (
                    <button
                      className={styles.showMore}
                      onClick={() => setExpanded(prev => new Set(prev).add(group.key))}
                    >
                      Visa {remaining} till
                    </button>
                  )}
                </>
              )
            })()}
          </div>
        ))
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <Icon name="snowflake" size={48} />
          </div>
          <div className={styles.emptyTitle}>Lugnt i trädgården</div>
          <div className={styles.emptyText}>
            Inga aktiviteter i {(MONTH_NAMES[currentMonth] ?? '').toLowerCase()} för zon {userZone}.
            <br />
            Bläddra till en annan månad för att se vad som händer!
          </div>
        </div>
      )}
    </div>
  )
}
