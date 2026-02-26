import { useState } from 'react'
import type { Difficulty } from '../../data/types'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import styles from './DifficultyBadge.module.css'

interface DifficultyBadgeProps {
  difficulty: Difficulty
  why: string
}

export function DifficultyBadge({ difficulty, why }: DifficultyBadgeProps) {
  const [showTip, setShowTip] = useState(false)
  const info = DIFFICULTY_INFO[difficulty]

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.pill}
        style={{ '--badge-color': info.color } as React.CSSProperties}
        onClick={() => setShowTip(!showTip)}
      >
        {info.icon} Svårighetsgrad: {difficulty}
        <span className={styles.infoIcon}>ⓘ</span>
      </button>
      {showTip && (
        <div className={styles.tooltip}>
          <strong>{difficulty}:</strong> {info.description}
          {why && <div className={styles.tooltipWhy}>Denna gröda: {why}</div>}
          <div className={styles.tooltipArrow} />
        </div>
      )}
    </div>
  )
}
