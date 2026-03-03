import { useState, useEffect, useRef } from 'react'
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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const info = DIFFICULTY_INFO[difficulty]
  const dotColor = info.color === '#B7E4C7' ? '#3D6B4F' : info.color === '#FFF3CD' ? '#B8860B' : '#B54A3F'
  const label = difficulty === 'Enkel' ? 'Lättodlad' : difficulty === 'Medel' ? 'Kräver lite omsorg' : 'Kräver extra omsorg'

  useEffect(() => {
    if (!showTip) return
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowTip(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [showTip])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={styles.pill}
        style={{ '--badge-color': info.color } as React.CSSProperties}
        onClick={() => setShowTip(!showTip)}
      >
        <span style={{ color: dotColor }}><DifficultyDot color={dotColor} /> {label}</span>
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
