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
import { MulberryIllustration, MulberryIcon } from './MulberryIllustration'
import { ChiliIllustration, ChiliIcon } from './ChiliIllustration'
import { CabbageIllustration, CabbageIcon } from './CabbageIllustration'
import { ChardIllustration, ChardIcon } from './ChardIllustration'
import { KohlrabiIllustration, KohlrabiIcon } from './KohlrabiIllustration'
import { ParsnipIllustration, ParsnipIcon } from './ParsnipIllustration'
import { SnapBeanIllustration, SnapBeanIcon } from './SnapBeanIllustration'
import { CorianderIllustration, CorianderIcon } from './CorianderIllustration'
import { SageIllustration, SageIcon } from './SageIllustration'
import { LemonBalmIllustration, LemonBalmIcon } from './LemonBalmIllustration'
import { KumminIllustration, KumminIcon } from './KumminIllustration'
import { CressIllustration, CressIcon } from './CressIllustration'
import { BayLeafIllustration, BayLeafIcon } from './BayLeafIllustration'
import { MarjoramIllustration, MarjoramIcon } from './MarjoramIllustration'
import { LovageIllustration, LovageIcon } from './LovageIllustration'
import { WildGarlicIllustration, WildGarlicIcon } from './WildGarlicIllustration'
import { TarragonIllustration, TarragonIcon } from './TarragonIllustration'
import { RedCabbageIllustration, RedCabbageIcon } from './RedCabbageIllustration'
import { TurnipIllustration, TurnipIcon } from './TurnipIllustration'
import { PoleBeanIllustration, PoleBeanIcon } from './PoleBeanIllustration'
import { ShallotIllustration, ShallotIcon } from './ShallotIllustration'
import { PakChoiIllustration, PakChoiIcon } from './PakChoiIllustration'
import { KinakalIllustration, KinakalIcon } from './KinakalIllustration'
import { BrusselsSproutsIllustration, BrusselsSproutsIcon } from './BrusselsSproutsIllustration'
import { JerusalemArtichokeIllustration, JerusalemArtichokeIcon } from './JerusalemArtichokeIllustration'
import { FennelIllustration, FennelIcon } from './FennelIllustration'
import { CeleryIllustration, CeleryIcon } from './CeleryIllustration'
import { RotselleriIllustration, RotselleriIcon } from './RotselleriIllustration'
import { SavoykalIllustration, SavoykalIcon } from './SavoykalIllustration'
import { MelonIllustration, MelonIcon } from './MelonIllustration'
import { KronartskockaIllustration, KronartskockaIcon } from './KronartskockaIllustration'
import { EndivIllustration, EndivIcon } from './EndivIllustration'
import { BlueberryIllustration, BlueberryIcon } from './BlueberryIllustration'
import { LingonIllustration, LingonIcon } from './LingonIllustration'
import { SeaBuckthornIllustration, SeaBuckthornIcon } from './SeaBuckthornIllustration'
import { AroniaIllustration, AroniaIcon } from './AroniaIllustration'
import { TayberryIllustration, TayberryIcon } from './TayberryIllustration'
import { WhiteCurrantIllustration, WhiteCurrantIcon } from './WhiteCurrantIllustration'
import { GoldCurrantIllustration, GoldCurrantIcon } from './GoldCurrantIllustration'
import { CranberryIllustration, CranberryIcon } from './CranberryIllustration'
import { HoneyberryIllustration, HoneyberryIcon } from './HoneyberryIllustration'
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
  mullbar: { large: MulberryIllustration, small: MulberryIcon },
  chili: { large: ChiliIllustration, small: ChiliIcon },
  vitkal: { large: CabbageIllustration, small: CabbageIcon },
  mangold: { large: ChardIllustration, small: ChardIcon },
  kalrabbi: { large: KohlrabiIllustration, small: KohlrabiIcon },
  palsternacka: { large: ParsnipIllustration, small: ParsnipIcon },
  brytbona: { large: SnapBeanIllustration, small: SnapBeanIcon },
  koriander: { large: CorianderIllustration, small: CorianderIcon },
  salvia: { large: SageIllustration, small: SageIcon },
  citronmeliss: { large: LemonBalmIllustration, small: LemonBalmIcon },
  kummin: { large: KumminIllustration, small: KumminIcon },
  krasse: { large: CressIllustration, small: CressIcon },
  lagerblad: { large: BayLeafIllustration, small: BayLeafIcon },
  mejram: { large: MarjoramIllustration, small: MarjoramIcon },
  libbsticka: { large: LovageIllustration, small: LovageIcon },
  ramslok: { large: WildGarlicIllustration, small: WildGarlicIcon },
  dragon: { large: TarragonIllustration, small: TarragonIcon },
  rodkal: { large: RedCabbageIllustration, small: RedCabbageIcon },
  majrova: { large: TurnipIllustration, small: TurnipIcon },
  storbona: { large: PoleBeanIllustration, small: PoleBeanIcon },
  schalottenlok: { large: ShallotIllustration, small: ShallotIcon },
  'pak-choi': { large: PakChoiIllustration, small: PakChoiIcon },
  kinakal: { large: KinakalIllustration, small: KinakalIcon },
  brysselkal: { large: BrusselsSproutsIllustration, small: BrusselsSproutsIcon },
  jordartskocka: { large: JerusalemArtichokeIllustration, small: JerusalemArtichokeIcon },
  fankal: { large: FennelIllustration, small: FennelIcon },
  selleri: { large: CeleryIllustration, small: CeleryIcon },
  rotselleri: { large: RotselleriIllustration, small: RotselleriIcon },
  savoykal: { large: SavoykalIllustration, small: SavoykalIcon },
  melon: { large: MelonIllustration, small: MelonIcon },
  kronartskocka: { large: KronartskockaIllustration, small: KronartskockaIcon },
  endiv: { large: EndivIllustration, small: EndivIcon },
  blabar: { large: BlueberryIllustration, small: BlueberryIcon },
  lingon: { large: LingonIllustration, small: LingonIcon },
  havtorn: { large: SeaBuckthornIllustration, small: SeaBuckthornIcon },
  aronia: { large: AroniaIllustration, small: AroniaIcon },
  tayberry: { large: TayberryIllustration, small: TayberryIcon },
  'vita-vinbar': { large: WhiteCurrantIllustration, small: WhiteCurrantIcon },
  guldvinbar: { large: GoldCurrantIllustration, small: GoldCurrantIcon },
  tranbar: { large: CranberryIllustration, small: CranberryIcon },
  honungsbar: { large: HoneyberryIllustration, small: HoneyberryIcon },
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
