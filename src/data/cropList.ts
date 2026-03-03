import type { CropListEntry } from './types'

export const CROP_LIST: CropListEntry[] = [
  // Grönsaker - Apiaceae (Flockblommiga)
  { id: 'morot', name: 'Morot', icon: 'morot', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'palsternacka', name: 'Palsternacka', icon: 'palsternacka', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'selleri', name: 'Selleri', icon: 'selleri', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  { id: 'rotselleri', name: 'Rotselleri', icon: 'rotselleri', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  { id: 'fankal', name: 'Fänkål', icon: 'fankal', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Medel', category: 'grönsaker' },
  // Grönsaker - Solanaceae (Potatisväxter)
  { id: 'tomat', name: 'Tomat', icon: 'tomat', family: 'Potatisväxter', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'potatis', name: 'Potatis', icon: 'potatis', family: 'Potatisväxter', familyLatin: 'Solanaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'paprika', name: 'Paprika', icon: 'paprika', family: 'Potatisväxter', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'chili', name: 'Chili', icon: 'chili', family: 'Potatisväxter', familyLatin: 'Solanaceae', difficulty: 'Medel', category: 'grönsaker' },
  // Grönsaker - Brassicaceae (Korsblommiga)
  { id: 'gronkal', name: 'Grönkål', icon: 'gronkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'radisa', name: 'Rädisa', icon: 'radisa', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'vitkal', name: 'Vitkål', icon: 'vitkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'rodkal', name: 'Rödkål', icon: 'rodkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'broccoli', name: 'Broccoli', icon: 'broccoli', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'blomkal', name: 'Blomkål', icon: 'blomkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  { id: 'pak-choi', name: 'Pak choi', icon: 'pak-choi', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'kinakal', name: 'Kinakål', icon: 'kinakal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'brysselkal', name: 'Brysselkål', icon: 'brysselkal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'kalrabbi', name: 'Kålrabbi', icon: 'kalrabbi', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'savoykal', name: 'Savoykål', icon: 'savoykal', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'majrova', name: 'Majrova', icon: 'majrova', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker - Cucurbitaceae (Gurkväxter)
  { id: 'squash', name: 'Squash', icon: 'squash', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'gurka', name: 'Gurka', icon: 'gurka', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'pumpa', name: 'Pumpa', icon: 'pumpa', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'melon', name: 'Melon', icon: 'melon', family: 'Gurkväxter', familyLatin: 'Cucurbitaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  // Grönsaker - Fabaceae (Baljväxter)
  { id: 'artor', name: 'Ärtor', icon: 'artor', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'bondbona', name: 'Bondböna', icon: 'bondbona', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'brytbona', name: 'Brytböna', icon: 'brytbona', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'storbona', name: 'Störböna', icon: 'storbona', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker - Amaryllidaceae (Lökväxter)
  { id: 'lok', name: 'Lök', icon: 'lok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'purjolok', name: 'Purjolök', icon: 'purjolok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'vitlok', name: 'Vitlök', icon: 'vitlok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Medel', category: 'grönsaker' },
  { id: 'schalottenlok', name: 'Schalottenlök', icon: 'schalottenlok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker - Amaranthaceae (Mållväxter)
  { id: 'rodbeta', name: 'Rödbeta', icon: 'rodbeta', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'spenat', name: 'Spenat', icon: 'spenat', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'mangold', name: 'Mangold', icon: 'mangold', family: 'Mållväxter', familyLatin: 'Amaranthaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker - Asteraceae (Korgblommiga)
  { id: 'sallat', name: 'Sallat', icon: 'sallat', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'kronartskocka', name: 'Kronärtskocka', icon: 'kronartskocka', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Avancerad', category: 'grönsaker' },
  { id: 'jordartskocka', name: 'Jordärtskocka', icon: 'jordartskocka', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'grönsaker' },
  { id: 'endiv', name: 'Endiv', icon: 'endiv', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Medel', category: 'grönsaker' },
  // Grönsaker - Poaceae (Gräs)
  { id: 'sockermajs', name: 'Sockermajs', icon: 'sockermajs', family: 'Gräs', familyLatin: 'Poaceae', difficulty: 'Medel', category: 'grönsaker' },
  // Grönsaker - Polygonaceae (Slideväxter)
  { id: 'rabarber', name: 'Rabarber', icon: 'rabarber', family: 'Slideväxter', familyLatin: 'Polygonaceae', difficulty: 'Enkel', category: 'grönsaker' },
  // Grönsaker - Asparagaceae (Sparrisväxter)
  { id: 'sparris', name: 'Sparris', icon: 'sparris', family: 'Sparrisväxter', familyLatin: 'Asparagaceae', difficulty: 'Avancerad', category: 'grönsaker' },
  // Bär - Rosaceae (Rosväxter)
  { id: 'hallon', name: 'Hallon', icon: 'hallon', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'jordgubbar', name: 'Jordgubbar', icon: 'jordgubbar', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'bjornbar', name: 'Björnbär', icon: 'bjornbar', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'aronia', name: 'Aronia', icon: 'aronia', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'tayberry', name: 'Björnbärshallon', icon: 'tayberry', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Enkel', category: 'bär' },
  // Bär - Grossulariaceae (Ripsväxter)
  { id: 'svarta-vinbar', name: 'Svarta vinbär', icon: 'svarta-vinbar', family: 'Ripsväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'roda-vinbar', name: 'Röda vinbär', icon: 'roda-vinbar', family: 'Ripsväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'vita-vinbar', name: 'Vita vinbär', icon: 'vita-vinbar', family: 'Ripsväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'krusbar', name: 'Krusbär', icon: 'krusbar', family: 'Ripsväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  { id: 'guldvinbar', name: 'Guldvinbär', icon: 'guldvinbar', family: 'Ripsväxter', familyLatin: 'Grossulariaceae', difficulty: 'Enkel', category: 'bär' },
  // Bär - Moraceae (Mullbärsväxter)
  { id: 'mullbar', name: 'Mullbär', icon: 'mullbar', family: 'Mullbärsväxter', familyLatin: 'Moraceae', difficulty: 'Enkel', category: 'bär' },
  // Bär - Ericaceae (Ljungväxter)
  { id: 'blabar', name: 'Blåbär (odlade)', icon: 'blabar', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär' },
  { id: 'lingon', name: 'Lingon', icon: 'lingon', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Medel', category: 'bär' },
  { id: 'tranbar', name: 'Tranbär', icon: 'tranbar', family: 'Ljungväxter', familyLatin: 'Ericaceae', difficulty: 'Avancerad', category: 'bär' },
  // Bär - Elaeagnaceae (Havtornsväxter)
  { id: 'havtorn', name: 'Havtorn', icon: 'havtorn', family: 'Havtornsväxter', familyLatin: 'Elaeagnaceae', difficulty: 'Medel', category: 'bär' },
  // Bär - Caprifoliaceae (Kaprifolväxter)
  { id: 'honungsbar', name: 'Honungsbär', icon: 'honungsbar', family: 'Kaprifolväxter', familyLatin: 'Caprifoliaceae', difficulty: 'Enkel', category: 'bär' },
  // Kryddor - Lamiaceae (Kransblommiga)
  { id: 'basilika', name: 'Basilika', icon: 'basilika', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'timjan', name: 'Timjan', icon: 'timjan', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'oregano', name: 'Oregano', icon: 'oregano', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'rosmarin', name: 'Rosmarin', icon: 'rosmarin', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'salvia', name: 'Salvia', icon: 'salvia', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'mynta', name: 'Mynta', icon: 'mynta', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'mejram', name: 'Mejram', icon: 'mejram', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Medel', category: 'kryddor' },
  { id: 'citronmeliss', name: 'Citronmeliss', icon: 'citronmeliss', family: 'Kransblommiga', familyLatin: 'Lamiaceae', difficulty: 'Enkel', category: 'kryddor' },
  // Kryddor - Apiaceae (Flockblommiga)
  { id: 'persilja', name: 'Persilja', icon: 'persilja', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'dill', name: 'Dill', icon: 'dill', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'koriander', name: 'Koriander', icon: 'koriander', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'libbsticka', name: 'Libbsticka', icon: 'libbsticka', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'kummin', name: 'Kummin', icon: 'kummin', family: 'Flockblommiga', familyLatin: 'Apiaceae', difficulty: 'Enkel', category: 'kryddor' },
  // Kryddor - Amaryllidaceae (Lökväxter)
  { id: 'graslok', name: 'Gräslök', icon: 'graslok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor' },
  { id: 'ramslok', name: 'Ramslök', icon: 'ramslok', family: 'Lökväxter', familyLatin: 'Amaryllidaceae', difficulty: 'Enkel', category: 'kryddor' },
  // Kryddor - Asteraceae (Korgblommiga)
  { id: 'dragon', name: 'Dragon', icon: 'dragon', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Medel', category: 'kryddor' },
  // Kryddor - Brassicaceae (Korsblommiga)
  { id: 'krasse', name: 'Krasse', icon: 'krasse', family: 'Korsblommiga', familyLatin: 'Brassicaceae', difficulty: 'Enkel', category: 'kryddor' },
  // Kryddor - Lauraceae (Lagerväxter)
  { id: 'lagerblad', name: 'Lagerblad', icon: 'lagerblad', family: 'Lagerväxter', familyLatin: 'Lauraceae', difficulty: 'Avancerad', category: 'kryddor' },
  // Frukt - Rosaceae (Rosväxter)
  { id: 'apple', name: 'Äpple', icon: 'apple', family: 'Rosväxter', familyLatin: 'Rosaceae', difficulty: 'Medel', category: 'frukt' },
  // Blommor - Asteraceae (Korgblommiga)
  { id: 'ringblomma', name: 'Ringblomma', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  { id: 'solros', name: 'Solros', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor - Tropaeolaceae (Indiankrasseväxter)
  { id: 'indiankrasse', name: 'Indiankrasse', icon: 'flower', family: 'Indiankrasseväxter', familyLatin: 'Tropaeolaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor - Boraginaceae (Strävbladiga)
  { id: 'gurkort', name: 'Gurkört', icon: 'flower', family: 'Strävbladiga', familyLatin: 'Boraginaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor - Fabaceae (Baljväxter)
  { id: 'lupin', name: 'Lupin', icon: 'flower', family: 'Baljväxter', familyLatin: 'Fabaceae', difficulty: 'Enkel', category: 'blommor', locked: true },
  // Blommor - Asteraceae (Korgblommiga)
  { id: 'tagetes', name: 'Tagetes', icon: 'flower', family: 'Korgblommiga', familyLatin: 'Asteraceae', difficulty: 'Enkel', category: 'blommor', locked: true },
]
