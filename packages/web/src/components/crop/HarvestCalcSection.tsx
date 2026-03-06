import type { HarvestCalc as HarvestCalcData } from '@odlingsguiden/shared'
import { Section, HarvestCalc } from '../ui'
import { HarvestIcon } from '../icons'

interface HarvestCalcSectionProps {
  calc: HarvestCalcData
  cropName: string
}

export function HarvestCalcSection({ calc, cropName }: HarvestCalcSectionProps) {
  return (
    <Section title="Skördekalkylator" icon={<HarvestIcon size={20} />}>
      <HarvestCalc calc={calc} cropName={cropName} />
    </Section>
  )
}
