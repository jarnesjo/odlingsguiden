import { useState } from 'react'
import type { Difficulty } from '../../data/types'
import { DIFFICULTY_INFO } from '../../data/difficulty'
import { DifficultyDot } from '../icons'
import styles from './DifficultyBadge.module.css'

interface DifficultyBadgeProps {
  difficulty: Difficulty
  why: string
}

export function DifficultyBadge({ difficulty, why }: DifficultyBadgeProps) {
  const [showTip, setShowTip] = useState(false)
  const info = DIFFICULTY_INFO[difficulty]
  const dotColor = info.color === '#B7E4C7' ? '#3D6B4F' : info.color === '#FFF3CD' ? '#B8860B' : '#B54A3F'

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.pill}
        style={{ '--badge-color': info.color } as React.CSSProperties}
        onClick={() => setShowTip(!showTip)}
      >
        <DifficultyDot color={dotColor} /> Svårighetsgrad: {difficulty}
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
