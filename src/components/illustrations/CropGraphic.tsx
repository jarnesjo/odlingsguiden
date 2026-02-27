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
