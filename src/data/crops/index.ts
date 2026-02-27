import type { Crop, CropListEntry } from '../types'
import { morot } from './morot'
import { tomat } from './tomat'
import { potatis } from './potatis'
import { hallon } from './hallon'
import { basilika } from './basilika'
import { artor } from './artor'
import { squash } from './squash'
import { sallat } from './sallat'
import { lok } from './lok'
import { gronkal } from './gronkal'
import { radisa } from './radisa'
import { bondbona } from './bondbona'
import { jordgubbar } from './jordgubbar'
import { persilja } from './persilja'
import { svartaVinbar } from './svarta-vinbar'
import { dill } from './dill'
import { rodbeta } from './rodbeta'
import { rabarber } from './rabarber'
import { sockermajs } from './sockermajs'
import { sparris } from './sparris'
import { gurka } from './gurka'
import { spenat } from './spenat'
import { broccoli } from './broccoli'
import { purjolok } from './purjolok'

export const CROPS: Record<string, Crop> = {
  morot,
  tomat,
  potatis,
  hallon,
  basilika,
  artor,
  squash,
  sallat,
  lok,
  gronkal,
  radisa,
  bondbona,
  jordgubbar,
  persilja,
  'svarta-vinbar': svartaVinbar,
  dill,
  rodbeta,
  rabarber,
  sockermajs,
  sparris,
  gurka,
  spenat,
  broccoli,
  purjolok,
}

export const CROP_LIST: CropListEntry[] = [
  // Grönsaker — Apiaceae (Flockblommiga)
  { id: 'morot', name: 'Morot', icon: 'morot', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'palsternacka', name: 'Palsternacka', icon: 'vegetable', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'selleri', name: 'Selleri', icon: 'vegetable', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Avancerad', category: 'grönsaker', locked: true },
  { id: 'rotselleri', name: 'Rotselleri', icon: 'vegetable', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Avancerad', category: 'grönsaker', locked: true },
  { id: 'fankal', name: 'Fänkål', icon: 'vegetable', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  // Grönsaker — Solanaceae (Nattskatta)
  { id: 'tomat', name: 'Tomat', icon: 'tomat', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'potatis', name: 'Potatis', icon: 'potatis', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'paprika', name: 'Paprika', icon: 'vegetable', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'chili', name: 'Chili', icon: 'vegetable', family: 'Nattskatta', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  // Grönsaker — Brassicaceae (Korsblommiga)
  { id: 'gronkal', name: 'Grönkål', icon: 'gronkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'radisa', name: 'Rädisa', icon: 'radisa', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'vitkal', name: 'Vitkål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'rodkal', name: 'Rödkål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'broccoli', name: 'Broccoli', icon: 'broccoli', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'blomkal', name: 'Blomkål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Avancerad', category: 'grönsaker', locked: true },
  { id: 'pak-choi', name: 'Pak choi', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'kinakal', name: 'Kinakål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'brysselkal', name: 'Brysselkål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'kalrabbi', name: 'Kålrabbi', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'savoykal', name: 'Savoykål', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'majrova', name: 'Majrova', icon: 'vegetable', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Grönsaker — Cucurbitaceae (Gurkväxter)
  { id: 'squash', name: 'Squash', icon: 'squash', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'gurka', name: 'Gurka', icon: 'gurka', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'pumpa', name: 'Pumpa', icon: 'vegetable', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'melon', name: 'Melon', icon: 'vegetable', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Avancerad', category: 'grönsaker', locked: true },
  // Grönsaker — Fabaceae (Baljväxter)
  { id: 'artor', name: 'Ärtor', icon: 'artor', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'bondbona', name: 'Bondböna', icon: 'bondbona', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'brytbona', name: 'Brytböna', icon: 'vegetable', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'storbona', name: 'Störböna', icon: 'vegetable', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Grönsaker — Amaryllidaceae (Lökväxter)
  { id: 'lok', name: 'Lök', icon: 'lok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'purjolok', name: 'Purjolök', icon: 'purjolok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'vitlok', name: 'Vitlök', icon: 'vegetable', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  { id: 'schalottenlok', name: 'Schalottenlök', icon: 'vegetable', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Grönsaker — Amaranthaceae (Mållväxter)
  { id: 'rodbeta', name: 'Rödbeta', icon: 'rodbeta', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'spenat', name: 'Spenat', icon: 'spenat', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'mangold', name: 'Mangold', icon: 'vegetable', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  // Grönsaker — Asteraceae (Korgblommiga)
  { id: 'sallat', name: 'Sallat', icon: 'sallat', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'kronartskocka', name: 'Kronärtskocka', icon: 'vegetable', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Avancerad', category: 'grönsaker', locked: true },
  { id: 'jordartskocka', name: 'Jordärtskocka', icon: 'vegetable', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker', locked: true },
  { id: 'endiv', name: 'Endiv', icon: 'vegetable', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Medel', category: 'grönsaker', locked: true },
  // Grönsaker — Poaceae (Gräs)
  { id: 'sockermajs', name: 'Sockermajs', icon: 'sockermajs', family: 'Gräs', familyLatin: 'Poaceae', difficulty: 'Medel', category: 'grönsaker' },
  // Grönsaker — Polygonaceae (Slideväxter)
  { id: 'rabarber', name: 'Rabarber', icon: 'rabarber', family: 'Slideväxter', familyLatin: 'Polygonaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker — Asparagaceae (Sparrisväxter)
  { id: 'sparris', name: 'Sparris', icon: 'sparris', family: 'Sparrisväxter', familyLatin: 'Asparagaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  // Bär — Rosaceae (Rosväxter)
  { id: 'hallon', name: 'Hallon', icon: 'hallon', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'jordgubbar', name: 'Jordgubbar', icon: 'jordgubbar', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'bjornbar', name: 'Björnbär', icon: 'berry', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'aronia', name: 'Aronia', icon: 'berry', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'tayberry', name: 'Tayberry', icon: 'berry', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  // Bär — Grossulariaceae (Krusväxter)
  { id: 'svarta-vinbar', name: 'Svarta vinbär', icon: 'svarta-vinbar', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'roda-vinbar', name: 'Röda vinbär', icon: 'berry', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'vita-vinbar', name: 'Vita vinbär', icon: 'berry', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'krusbar', name: 'Krusbär', icon: 'berry', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  { id: 'guldvinbar', name: 'Guldvinbär', icon: 'berry', family: 'Krusväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  // Bär — Ericaceae (Ljungväxter)
  { id: 'blabar', name: 'Blåbär (odlade)', icon: 'berry', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär', locked: true },
  { id: 'lingon', name: 'Lingon', icon: 'berry', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär', locked: true },
  { id: 'tranbar', name: 'Tranbär', icon: 'berry', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Avancerad', category: 'bär', locked: true },
  // Bär — Elaeagnaceae (Havtornsväxter)
  { id: 'havtorn', name: 'Havtorn', icon: 'berry', family: 'Havtornsväxter', familyLatin: 'Elaeagnaceae', difficulty: 'Medel', category: 'bär', locked: true },
  // Bär — Caprifoliaceae (Kaprifolväxter)
  { id: 'honungsbar', name: 'Honungsbär', icon: 'berry', family: 'Kaprifolväxter', familyLatin: 'Caprifoliaceae', difficulty: 'Enkel', category: 'bär', locked: true },
  // Kryddor — Lamiaceae (Kransblommiga)
  { id: 'basilika', name: 'Basilika', icon: 'basilika', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'timjan', name: 'Timjan', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'oregano', name: 'Oregano', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'rosmarin', name: 'Rosmarin', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor', locked: true },
  { id: 'salvia', name: 'Salvia', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'mynta', name: 'Mynta', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'mejram', name: 'Mejram', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor', locked: true },
  { id: 'citronmeliss', name: 'Citronmeliss', icon: 'herb', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  // Kryddor — Apiaceae (Flockblommiga)
  { id: 'persilja', name: 'Persilja', icon: 'persilja', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'dill', name: 'Dill', icon: 'dill', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'koriander', name: 'Koriander', icon: 'herb', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'libbsticka', name: 'Libbsticka', icon: 'herb', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'kummin', name: 'Kummin', icon: 'herb', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  // Kryddor — Amaryllidaceae (Lökväxter)
  { id: 'graslok', name: 'Gräslök', icon: 'herb', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  { id: 'ramslok', name: 'Ramslök', icon: 'herb', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  // Kryddor — Asteraceae (Korgblommiga)
  { id: 'dragon', name: 'Dragon', icon: 'herb', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Medel', category: 'kryddor', locked: true },
  // Kryddor — Brassicaceae (Korsblommiga)
  { id: 'krasse', name: 'Krasse', icon: 'herb', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'kryddor', locked: true },
  // Kryddor — Lauraceae (Lagerväxter)
  { id: 'lagerblad', name: 'Lagerblad', icon: 'herb', family: 'Lagerväxter', familyLatin: 'Lauraceae', difficulty: 'Avancerad', category: 'kryddor', locked: true },
  // Blommor — Asteraceae (Korgblommiga)
  { id: 'ringblomma', name: 'Ringblomma', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  { id: 'solros', name: 'Solros', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor — Tropaeolaceae (Indiankrasseväxter)
  { id: 'indiankrasse', name: 'Indiankrasse', icon: 'flower', family: 'Indiankrasseväxter', familyLatin: 'Tropaeolaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor — Boraginaceae (Strävbladiga)
  { id: 'gurkort', name: 'Gurkört', icon: 'flower', family: 'Strävbladiga', familyLatin: 'Boraginaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor — Fabaceae (Baljväxter)
  { id: 'lupin', name: 'Lupin', icon: 'flower', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor — Asteraceae (Korgblommiga)
  { id: 'tagetes', name: 'Tagetes', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
]

export { morot, tomat, potatis, hallon, basilika, lok, gronkal, radisa, bondbona, jordgubbar, persilja, svartaVinbar, dill, rodbeta, rabarber, sockermajs, sparris, gurka, spenat, broccoli, purjolok }
