import type { HarvestCalc as HarvestCalcData } from '../../data/types'
import { Section, HarvestCalc } from '../ui'

interface HarvestCalcSectionProps {
  calc: HarvestCalcData
  cropName: string
}

export function HarvestCalcSection({ calc, cropName }: HarvestCalcSectionProps) {
  return (
    <Section title="📊 Skördekalkylator" defaultOpen={false}>
      <HarvestCalc calc={calc} cropName={cropName} />
    </Section>
  )
}
