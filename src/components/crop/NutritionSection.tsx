import { lazy, Suspense } from 'react'
import type { NutritionDataPoint, NutritionTip } from '../../data/types'
import { Section } from '../ui'
import { ChartIcon } from '../icons'
import styles from './NutritionSection.module.css'

const NutritionChart = lazy(() =>
  import('../ui/NutritionChart').then(m => ({ default: m.NutritionChart }))
)

interface NutritionSectionProps {
  cropName: string
  data: NutritionDataPoint[]
  tips: NutritionTip[]
}

export function NutritionSection({ cropName, data, tips }: NutritionSectionProps) {
  return (
    <Section title="Näringskurva" icon={<ChartIcon size={20} />}>
      <p className={styles.intro}>
        Visar hur {cropName.toLowerCase()}ens behov av kväve, fosfor och kalium förändras genom säsongen.
      </p>
      <Suspense>
        <NutritionChart data={data} />
      </Suspense>
      <div className={styles.tips}>
        {tips.map((tip, i) => (
          <div key={i} className={styles.tip}>
            <div className={styles.tipBar} />
            <div>
              <strong>{tip.timing}:</strong> {tip.tip}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
