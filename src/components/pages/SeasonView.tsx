import { useState, useEffect } from 'react'
import type { Zone } from '../../data/types'
import { MONTH_NAMES } from '../../utils/monthParser'
import { getSeasonActivities, type SeasonGroup } from '../../utils/seasonData'
import { Icon } from '../icons/Icon'
import { CropIcon } from '../illustrations/CropIcon'
import styles from './SeasonView.module.css'

interface SeasonViewProps {
  userZone: Zone
  currentMonth: number
  onMonthChange: (month: number) => void
  onSelect: (cropId: string) => void
}

export function SeasonView({ userZone, currentMonth, onMonthChange, onSelect }: SeasonViewProps) {
  const [groups, setGroups] = useState<SeasonGroup[]>([])

  useEffect(() => {
    getSeasonActivities(currentMonth, userZone).then(setGroups)
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
      {groups.length > 0 ? (
        groups.map(group => (
          <div key={group.key} className={styles.group}>
            <div className={styles.groupHeader}>
              <span className={styles.groupIcon}>
                <Icon name={group.icon} size={20} />
              </span>
              <span className={styles.groupLabel}>{group.label}</span>
              <span className={styles.groupCount}>{group.activities.length}</span>
            </div>

            {group.activities.map(activity => (
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
