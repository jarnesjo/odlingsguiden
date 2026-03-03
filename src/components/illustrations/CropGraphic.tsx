import { useState, useEffect, type ComponentType } from 'react'
import type { Category } from '../../data/types'
import { VegetableIcon, BerryIcon, HerbIcon, FlowerIcon } from '../icons'

interface SizeProps {
  size?: number
}

interface IllustrationEntry {
  large: ComponentType<SizeProps>
  small: ComponentType<SizeProps>
}

// Lazy glob: varje illustration-fil blir en dynamic import
const modules = import.meta.glob<Record<string, ComponentType<SizeProps>>>(
  './*Illustration.tsx',
  { eager: false }
)

// Crop id (svenska) -> glob-nyckel (engelska filnamn)
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
}

// Cache laddade illustrationer
const illustrationCache = new Map<string, IllustrationEntry>()

function useIllustration(id: string): IllustrationEntry | null {
  const [entry, setEntry] = useState<IllustrationEntry | null>(
    () => illustrationCache.get(id) ?? null
  )

  useEffect(() => {
    if (illustrationCache.has(id)) {
      setEntry(illustrationCache.get(id)!)
      return
    }
    const path = ID_TO_PATH[id]
    if (!path) return

    const loader = modules[path]
    if (!loader) return

    let cancelled = false
    loader().then((mod) => {
      if (cancelled) return
      // Varje fil exporterar FooIllustration (large) och FooIcon (small)
      const exports = Object.entries(mod)
      const large = exports.find(([name]) => name.endsWith('Illustration'))?.[1] as ComponentType<SizeProps> | undefined
      const small = exports.find(([name]) => name.endsWith('Icon'))?.[1] as ComponentType<SizeProps> | undefined
      if (large && small) {
        const result = { large, small }
        illustrationCache.set(id, result)
        setEntry(result)
      }
    })
    return () => { cancelled = true }
  }, [id])

  return entry
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
  const entry = useIllustration(id)
  if (entry) {
    const Component = size >= 100 ? entry.large : entry.small
    return <Component size={size} />
  }
  const FallbackIcon = category ? CATEGORY_ICONS[category] : VegetableIcon
  return <FallbackIcon size={size} />
}
