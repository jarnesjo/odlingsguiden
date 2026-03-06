import type { ComponentType } from 'react'
import type { Category } from '../../data/types'
import { VegetableIcon, BerryIcon, HerbIcon, FruitIcon, FlowerIcon } from '../icons'

interface SizeProps {
  size?: number
}

// Eager glob: alla illustrationer bundlas direkt
const modules = import.meta.glob<Record<string, ComponentType<SizeProps>>>(
  './*Illustration.tsx',
  { eager: true }
)

// Crop id (svenska) → glob-nyckel (engelska filnamn)
const ID_TO_PATH: Record<string, string> = {
  morot: './CarrotIllustration.tsx',
  tomat: './TomatoIllustration.tsx',
  potatis: './PotatoIllustration.tsx',
  hallon: './RaspberryIllustration.tsx',
  basilika: './BasilIllustration.tsx',
  artor: './PeaIllustration.tsx',
  squash: './SquashIllustration.tsx',
  sallat: './LettuceIllustration.tsx',
  lok: './OnionIllustration.tsx',
  gronkal: './KaleIllustration.tsx',
  radisa: './RadishIllustration.tsx',
  bondbona: './FavaBeanIllustration.tsx',
  jordgubbar: './StrawberryIllustration.tsx',
  persilja: './ParsleyIllustration.tsx',
  'svarta-vinbar': './BlackcurrantIllustration.tsx',
  dill: './DillIllustration.tsx',
  rodbeta: './BeetrootIllustration.tsx',
  rabarber: './RhubarbIllustration.tsx',
  sockermajs: './SweetcornIllustration.tsx',
  sparris: './AsparagusIllustration.tsx',
  gurka: './CucumberIllustration.tsx',
  spenat: './SpinachIllustration.tsx',
  broccoli: './BroccoliIllustration.tsx',
  purjolok: './LeekIllustration.tsx',
  vitlok: './GarlicIllustration.tsx',
  paprika: './PepperIllustration.tsx',
  graslok: './ChivesIllustration.tsx',
  krusbar: './GooseberryIllustration.tsx',
  timjan: './ThymeIllustration.tsx',
  mynta: './MintIllustration.tsx',
  'roda-vinbar': './RedcurrantIllustration.tsx',
  pumpa: './PumpkinIllustration.tsx',
  bjornbar: './BlackberryIllustration.tsx',
  oregano: './OreganoIllustration.tsx',
  rosmarin: './RosemaryIllustration.tsx',
  blomkal: './CauliflowerIllustration.tsx',
  mullbar: './MulberryIllustration.tsx',
  chili: './ChiliIllustration.tsx',
  vitkal: './CabbageIllustration.tsx',
  mangold: './ChardIllustration.tsx',
  kalrabbi: './KohlrabiIllustration.tsx',
  palsternacka: './ParsnipIllustration.tsx',
  brytbona: './SnapBeanIllustration.tsx',
  koriander: './CorianderIllustration.tsx',
  salvia: './SageIllustration.tsx',
  citronmeliss: './LemonBalmIllustration.tsx',
  kummin: './KumminIllustration.tsx',
  krasse: './CressIllustration.tsx',
  lagerblad: './BayLeafIllustration.tsx',
  mejram: './MarjoramIllustration.tsx',
  libbsticka: './LovageIllustration.tsx',
  ramslok: './WildGarlicIllustration.tsx',
  dragon: './TarragonIllustration.tsx',
  rodkal: './RedCabbageIllustration.tsx',
  majrova: './TurnipIllustration.tsx',
  storbona: './PoleBeanIllustration.tsx',
  schalottenlok: './ShallotIllustration.tsx',
  'pak-choi': './PakChoiIllustration.tsx',
  kinakal: './KinakalIllustration.tsx',
  brysselkal: './BrusselsSproutsIllustration.tsx',
  jordartskocka: './JerusalemArtichokeIllustration.tsx',
  fankal: './FennelIllustration.tsx',
  selleri: './CeleryIllustration.tsx',
  rotselleri: './RotselleriIllustration.tsx',
  savoykal: './SavoykalIllustration.tsx',
  melon: './MelonIllustration.tsx',
  kronartskocka: './KronartskockaIllustration.tsx',
  endiv: './EndivIllustration.tsx',
  blabar: './BlueberryIllustration.tsx',
  lingon: './LingonIllustration.tsx',
  havtorn: './SeaBuckthornIllustration.tsx',
  aronia: './AroniaIllustration.tsx',
  tayberry: './TayberryIllustration.tsx',
  'vita-vinbar': './WhiteCurrantIllustration.tsx',
  guldvinbar: './GoldCurrantIllustration.tsx',
  tranbar: './CranberryIllustration.tsx',
  honungsbar: './HoneyberryIllustration.tsx',
  apple: './AppleIllustration.tsx',
  paron: './PearIllustration.tsx',
  plommon: './PlumIllustration.tsx',
  korsbar: './CherryIllustration.tsx',
  fikon: './FigIllustration.tsx',
  valnot: './WalnutIllustration.tsx',
  hasselnut: './HazelnutIllustration.tsx',
  vindruva: './GrapeIllustration.tsx',
}

// Bygg synkron lookup: crop id → komponent
const iconMap = new Map<string, ComponentType<SizeProps>>()
for (const [id, path] of Object.entries(ID_TO_PATH)) {
  const mod = modules[path]
  if (!mod) continue
  const iconExport = Object.entries(mod).find(([name]) => name.endsWith('Icon'))
  if (iconExport) {
    iconMap.set(id, iconExport[1] as ComponentType<SizeProps>)
  }
}

const CATEGORY_ICONS: Record<Category, ComponentType<SizeProps>> = {
  'grönsaker': VegetableIcon,
  'bär': BerryIcon,
  'kryddor': HerbIcon,
  'frukt': FruitIcon,
  'blommor': FlowerIcon,
}

interface Props {
  id: string
  size?: number
  category?: Category
}

export function CropIcon({ id, size = 48, category }: Props) {
  const Icon = iconMap.get(id)
  if (Icon) return <Icon size={size} />
  const FallbackIcon = category ? CATEGORY_ICONS[category] : VegetableIcon
  return <FallbackIcon size={size} />
}
