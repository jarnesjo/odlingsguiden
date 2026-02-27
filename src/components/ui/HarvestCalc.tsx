import { useState } from 'react'
import type { HarvestCalc as HarvestCalcData } from '../../data/types'
import styles from './HarvestCalc.module.css'

interface HarvestCalcProps {
  calc: HarvestCalcData
  cropName: string
}

export function HarvestCalc({ calc, cropName }: HarvestCalcProps) {
  const [sqm, setSqm] = useState(4)
  const minYield = (sqm * calc.minPerSqm).toFixed(1)
  const maxYield = (sqm * calc.maxPerSqm).toFixed(1)

  return (
    <div className={styles.card}>
      <div className={styles.title}>Skördekalkylator</div>
      <div className={styles.sliderRow}>
        <span className={styles.sliderLabel}>Jag odlar på</span>
        <input
          type="range"
          min={1}
          max={20}
          value={sqm}
          onChange={(e) => setSqm(Number(e.target.value))}
          className={styles.slider}
        />
        <span className={styles.sqmValue}>{sqm} m²</span>
      </div>
      <div className={styles.yield}>
        {minYield}-{maxYield} {calc.unit} {cropName.toLowerCase()}
      </div>
      <div className={styles.note}>Uppskattad skörd under normala förhållanden</div>
    </div>
  )
}
