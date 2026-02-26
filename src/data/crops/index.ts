import type { Crop, CropListEntry } from '../types'
import { morot } from './morot'
import { tomat } from './tomat'
import { potatis } from './potatis'
import { hallon } from './hallon'
import { basilika } from './basilika'

export const CROPS: Record<string, Crop> = {
  morot,
  tomat,
  potatis,
  hallon,
  basilika,
}

export const CROP_LIST: CropListEntry[] = [
  // Grönsaker
  { id: 'morot', name: 'Morot', emoji: '🥕', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'tomat', name: 'Tomat', emoji: '🍅', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'potatis', name: 'Potatis', emoji: '🥔', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'artor', name: 'Ärtor', emoji: '🫛', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'squash', name: 'Squash', emoji: '🎃', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'sallat', name: 'Sallat', emoji: '🥬', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'lok', name: 'Lök', emoji: '🧅', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'gronkal', name: 'Grönkål', emoji: '🥬', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'radisa', name: 'Rädisa', emoji: '🔴', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'bondbona', name: 'Bondböna', emoji: '🫘', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Bär
  { id: 'hallon', name: 'Hallon', emoji: '🫐', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'jordgubbar', name: 'Jordgubbar', emoji: '🍓', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'svarta-vinbar', name: 'Svarta vinbär', emoji: '🫐', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'krusbar', name: 'Krusbär', emoji: '🟢', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'blabar', name: 'Blåbär (odlade)', emoji: '🫐', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär', locked: true },
  // Kryddor
  { id: 'basilika', name: 'Basilika', emoji: '🌿', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'persilja', name: 'Persilja', emoji: '🌿', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'dill', name: 'Dill', emoji: '🌿', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'graslok', name: 'Gräslök', emoji: '🌿', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'timjan', name: 'Timjan', emoji: '🌿', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
]

export { morot, tomat, potatis, hallon, basilika }
