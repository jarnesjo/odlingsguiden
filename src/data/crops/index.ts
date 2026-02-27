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
  { id: 'morot', name: 'Morot', icon: 'morot', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'tomat', name: 'Tomat', icon: 'tomat', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'potatis', name: 'Potatis', icon: 'potatis', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'artor', name: 'Ärtor', icon: 'artor', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'squash', name: 'Squash', icon: 'squash', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'sallat', name: 'Sallat', icon: 'sallat', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'lok', name: 'Lök', icon: 'lok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'gronkal', name: 'Grönkål', icon: 'gronkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'radisa', name: 'Rädisa', icon: 'radisa', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'bondbona', name: 'Bondböna', icon: 'bondbona', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Bär
  { id: 'hallon', name: 'Hallon', icon: 'hallon', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'jordgubbar', name: 'Jordgubbar', icon: 'jordgubbar', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'svarta-vinbar', name: 'Svarta vinbär', icon: 'svarta-vinbar', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'krusbar', name: 'Krusbär', icon: 'krusbar', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'blabar', name: 'Blåbär (odlade)', icon: 'blabar', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär', locked: true },
  // Kryddor
  { id: 'basilika', name: 'Basilika', icon: 'basilika', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'persilja', name: 'Persilja', icon: 'persilja', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'dill', name: 'Dill', icon: 'dill', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'graslok', name: 'Gräslök', icon: 'graslok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'timjan', name: 'Timjan', icon: 'timjan', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
]

export { morot, tomat, potatis, hallon, basilika }
