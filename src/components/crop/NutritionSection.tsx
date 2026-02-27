import type { NutritionDataPoint, NutritionTip } from '../../data/types'
import { Section, NutritionChart } from '../ui'
import { ChartIcon } from '../icons'
import styles from './NutritionSection.module.css'

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
      <NutritionChart data={data} />
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
