import type { ComponentType } from 'react'
import type { Category } from '../../data/types'
import { CarrotIllustration, CarrotIcon } from './CarrotIllustration'
import { TomatoIllustration, TomatoIcon } from './TomatoIllustration'
import { RaspberryIllustration, RaspberryIcon } from './RaspberryIllustration'
import { BasilIllustration, BasilIcon } from './BasilIllustration'
import { PotatoIllustration, PotatoIcon } from './PotatoIllustration'
import { VegetableIcon, BerryIcon, HerbIcon } from '../icons'

interface SizeProps {
  size?: number
}

const ILLUSTRATIONS: Record<string, { large: ComponentType<SizeProps>; small: ComponentType<SizeProps> }> = {
  morot: { large: CarrotIllustration, small: CarrotIcon },
  tomat: { large: TomatoIllustration, small: TomatoIcon },
  potatis: { large: PotatoIllustration, small: PotatoIcon },
  hallon: { large: RaspberryIllustration, small: RaspberryIcon },
  basilika: { large: BasilIllustration, small: BasilIcon },
}

const CATEGORY_ICONS: Record<Category, ComponentType<SizeProps>> = {
  'grönsaker': VegetableIcon,
  'bär': BerryIcon,
  'kryddor': HerbIcon,
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
