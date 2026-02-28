import type { ComponentType } from 'react'
import type { Category } from '../../data/types'
import { CarrotIllustration, CarrotIcon } from './CarrotIllustration'
import { TomatoIllustration, TomatoIcon } from './TomatoIllustration'
import { RaspberryIllustration, RaspberryIcon } from './RaspberryIllustration'
import { BasilIllustration, BasilIcon } from './BasilIllustration'
import { PotatoIllustration, PotatoIcon } from './PotatoIllustration'
import { PeaIllustration, PeaIcon } from './PeaIllustration'
import { SquashIllustration, SquashIcon } from './SquashIllustration'
import { LettuceIllustration, LettuceIcon } from './LettuceIllustration'
import { OnionIllustration, OnionIcon } from './OnionIllustration'
import { KaleIllustration, KaleIcon } from './KaleIllustration'
import { RadishIllustration, RadishIcon } from './RadishIllustration'
import { FavaBeanIllustration, FavaBeanIcon } from './FavaBeanIllustration'
import { StrawberryIllustration, StrawberryIcon } from './StrawberryIllustration'
import { ParsleyIllustration, ParsleyIcon } from './ParsleyIllustration'
import { BlackcurrantIllustration, BlackcurrantIcon } from './BlackcurrantIllustration'
import { DillIllustration, DillIcon } from './DillIllustration'
import { BeetrootIllustration, BeetrootIcon } from './BeetrootIllustration'
import { RhubarbIllustration, RhubarbIcon } from './RhubarbIllustration'
import { SweetcornIllustration, SweetcornIcon } from './SweetcornIllustration'
import { AsparagusIllustration, AsparagusIcon } from './AsparagusIllustration'
import { CucumberIllustration, CucumberIcon } from './CucumberIllustration'
import { SpinachIllustration, SpinachIcon } from './SpinachIllustration'
import { BroccoliIllustration, BroccoliIcon } from './BroccoliIllustration'
import { LeekIllustration, LeekIcon } from './LeekIllustration'
import { GarlicIllustration, GarlicIcon } from './GarlicIllustration'
import { PepperIllustration, PepperIcon } from './PepperIllustration'
import { ChivesIllustration, ChivesIcon } from './ChivesIllustration'
import { GooseberryIllustration, GooseberryIcon } from './GooseberryIllustration'
import { ThymeIllustration, ThymeIcon } from './ThymeIllustration'
import { MintIllustration, MintIcon } from './MintIllustration'
import { RedcurrantIllustration, RedcurrantIcon } from './RedcurrantIllustration'
import { PumpkinIllustration, PumpkinIcon } from './PumpkinIllustration'
import { BlackberryIllustration, BlackberryIcon } from './BlackberryIllustration'
import { OreganoIllustration, OreganoIcon } from './OreganoIllustration'
import { RosemaryIllustration, RosemaryIcon } from './RosemaryIllustration'
import { CauliflowerIllustration, CauliflowerIcon } from './CauliflowerIllustration'
import { VegetableIcon, BerryIcon, HerbIcon, FlowerIcon } from '../icons'

interface SizeProps {
  size?: number
}

const ILLUSTRATIONS: Record<string, { large: ComponentType<SizeProps>; small: ComponentType<SizeProps> }> = {
  morot: { large: CarrotIllustration, small: CarrotIcon },
  tomat: { large: TomatoIllustration, small: TomatoIcon },
  potatis: { large: PotatoIllustration, small: PotatoIcon },
  hallon: { large: RaspberryIllustration, small: RaspberryIcon },
  basilika: { large: BasilIllustration, small: BasilIcon },
  artor: { large: PeaIllustration, small: PeaIcon },
  squash: { large: SquashIllustration, small: SquashIcon },
  sallat: { large: LettuceIllustration, small: LettuceIcon },
  lok: { large: OnionIllustration, small: OnionIcon },
  gronkal: { large: KaleIllustration, small: KaleIcon },
  radisa: { large: RadishIllustration, small: RadishIcon },
  bondbona: { large: FavaBeanIllustration, small: FavaBeanIcon },
  jordgubbar: { large: StrawberryIllustration, small: StrawberryIcon },
  persilja: { large: ParsleyIllustration, small: ParsleyIcon },
  'svarta-vinbar': { large: BlackcurrantIllustration, small: BlackcurrantIcon },
  dill: { large: DillIllustration, small: DillIcon },
  rodbeta: { large: BeetrootIllustration, small: BeetrootIcon },
  rabarber: { large: RhubarbIllustration, small: RhubarbIcon },
  sockermajs: { large: SweetcornIllustration, small: SweetcornIcon },
  sparris: { large: AsparagusIllustration, small: AsparagusIcon },
  gurka: { large: CucumberIllustration, small: CucumberIcon },
  spenat: { large: SpinachIllustration, small: SpinachIcon },
  broccoli: { large: BroccoliIllustration, small: BroccoliIcon },
  purjolok: { large: LeekIllustration, small: LeekIcon },
  vitlok: { large: GarlicIllustration, small: GarlicIcon },
  paprika: { large: PepperIllustration, small: PepperIcon },
  graslok: { large: ChivesIllustration, small: ChivesIcon },
  krusbar: { large: GooseberryIllustration, small: GooseberryIcon },
  timjan: { large: ThymeIllustration, small: ThymeIcon },
  mynta: { large: MintIllustration, small: MintIcon },
  'roda-vinbar': { large: RedcurrantIllustration, small: RedcurrantIcon },
  pumpa: { large: PumpkinIllustration, small: PumpkinIcon },
  bjornbar: { large: BlackberryIllustration, small: BlackberryIcon },
  oregano: { large: OreganoIllustration, small: OreganoIcon },
  rosmarin: { large: RosemaryIllustration, small: RosemaryIcon },
  blomkal: { large: CauliflowerIllustration, small: CauliflowerIcon },
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

export function CropGraphic({ id, size = 48, category }: Props) {
  const entry = ILLUSTRATIONS[id]
  if (entry) {
    const Component = size >= 100 ? entry.large : entry.small
    return <Component size={size} />
  }
  // Fallback to category icon for crops without illustrations
  const FallbackIcon = category ? CATEGORY_ICONS[category] : VegetableIcon
  return <FallbackIcon size={size} />
}
