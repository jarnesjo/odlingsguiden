import type { ComponentType } from 'react'
import type { Category } from '../../data/types'
import { CarrotIcon } from './CarrotIllustration'
import { TomatoIcon } from './TomatoIllustration'
import { RaspberryIcon } from './RaspberryIllustration'
import { BasilIcon } from './BasilIllustration'
import { PotatoIcon } from './PotatoIllustration'
import { PeaIcon } from './PeaIllustration'
import { SquashIcon } from './SquashIllustration'
import { LettuceIcon } from './LettuceIllustration'
import { OnionIcon } from './OnionIllustration'
import { KaleIcon } from './KaleIllustration'
import { RadishIcon } from './RadishIllustration'
import { FavaBeanIcon } from './FavaBeanIllustration'
import { StrawberryIcon } from './StrawberryIllustration'
import { ParsleyIcon } from './ParsleyIllustration'
import { BlackcurrantIcon } from './BlackcurrantIllustration'
import { DillIcon } from './DillIllustration'
import { BeetrootIcon } from './BeetrootIllustration'
import { RhubarbIcon } from './RhubarbIllustration'
import { SweetcornIcon } from './SweetcornIllustration'
import { AsparagusIcon } from './AsparagusIllustration'
import { CucumberIcon } from './CucumberIllustration'
import { SpinachIcon } from './SpinachIllustration'
import { BroccoliIcon } from './BroccoliIllustration'
import { LeekIcon } from './LeekIllustration'
import { GarlicIcon } from './GarlicIllustration'
import { PepperIcon } from './PepperIllustration'
import { ChivesIcon } from './ChivesIllustration'
import { GooseberryIcon } from './GooseberryIllustration'
import { ThymeIcon } from './ThymeIllustration'
import { MintIcon } from './MintIllustration'
import { RedcurrantIcon } from './RedcurrantIllustration'
import { PumpkinIcon } from './PumpkinIllustration'
import { BlackberryIcon } from './BlackberryIllustration'
import { OreganoIcon } from './OreganoIllustration'
import { RosemaryIcon } from './RosemaryIllustration'
import { CauliflowerIcon } from './CauliflowerIllustration'
import { MulberryIcon } from './MulberryIllustration'
import { VegetableIcon, BerryIcon, HerbIcon, FlowerIcon } from '../icons'

interface SizeProps {
  size?: number
}

const ICONS: Record<string, ComponentType<SizeProps>> = {
  morot: CarrotIcon,
  tomat: TomatoIcon,
  potatis: PotatoIcon,
  hallon: RaspberryIcon,
  basilika: BasilIcon,
  artor: PeaIcon,
  squash: SquashIcon,
  sallat: LettuceIcon,
  lok: OnionIcon,
  gronkal: KaleIcon,
  radisa: RadishIcon,
  bondbona: FavaBeanIcon,
  jordgubbar: StrawberryIcon,
  persilja: ParsleyIcon,
  'svarta-vinbar': BlackcurrantIcon,
  dill: DillIcon,
  rodbeta: BeetrootIcon,
  rabarber: RhubarbIcon,
  sockermajs: SweetcornIcon,
  sparris: AsparagusIcon,
  gurka: CucumberIcon,
  spenat: SpinachIcon,
  broccoli: BroccoliIcon,
  purjolok: LeekIcon,
  vitlok: GarlicIcon,
  paprika: PepperIcon,
  graslok: ChivesIcon,
  krusbar: GooseberryIcon,
  timjan: ThymeIcon,
  mynta: MintIcon,
  'roda-vinbar': RedcurrantIcon,
  pumpa: PumpkinIcon,
  bjornbar: BlackberryIcon,
  oregano: OreganoIcon,
  rosmarin: RosemaryIcon,
  blomkal: CauliflowerIcon,
  mullbar: MulberryIcon,
}

const CATEGORY_ICONS: Record<Category, ComponentType<SizeProps>> = {
  'grönsaker': VegetableIcon,
  'bär': BerryIcon,
  'kryddor': HerbIcon,
  'blommor': FlowerIcon,
}

interface Props {
  id: string
  size?: number
  category?: Category
}

export function CropIcon({ id, size = 48, category }: Props) {
  const Icon = ICONS[id]
  if (Icon) {
    return <Icon size={size} />
  }
  const FallbackIcon = category ? CATEGORY_ICONS[category] : VegetableIcon
  return <FallbackIcon size={size} />
}
