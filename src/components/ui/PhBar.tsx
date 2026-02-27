import type { PhRange } from '../../data/types'
import styles from './PhBar.module.css'

interface PhBarProps {
  ph: PhRange
}

export function PhBar({ ph }: PhBarProps) {
  const range = 14
  const leftPct = (ph.min / range) * 100
  const widthPct = ((ph.max - ph.min) / range) * 100
  const idealPct = (ph.ideal / range) * 100

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.range} style={{ left: `${leftPct}%`, width: `${widthPct}%` }} />
        <div className={styles.idealLine} style={{ left: `${idealPct}%` }} />
      </div>
      <div className={styles.axis}>
        <span>0 (surt)</span>
        <span>7 (neutralt)</span>
        <span>14 (basiskt)</span>
      </div>
      <div className={styles.idealText}>
        Idealiskt: <strong>pH {ph.ideal}</strong> (intervall: {ph.min}-{ph.max})
      </div>
    </div>
  )
}
