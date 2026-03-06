import type { Crop } from '../types'

// Eager glob: alla grödprofiler bundlas direkt
const cropModules = import.meta.glob<Record<string, Crop>>(
  ['./*.ts', '!./index.ts'],
  { eager: true }
)

// Crop id -> glob-nyckel (filnamn)
const ID_TO_PATH: Record<string, string> = {
  morot: './morot.ts',
  tomat: './tomat.ts',
  potatis: './potatis.ts',
  hallon: './hallon.ts',
  basilika: './basilika.ts',
  artor: './artor.ts',
  squash: './squash.ts',
  sallat: './sallat.ts',
  lok: './lok.ts',
  gronkal: './gronkal.ts',
  radisa: './radisa.ts',
  bondbona: './bondbona.ts',
  jordgubbar: './jordgubbar.ts',
  persilja: './persilja.ts',
  'svarta-vinbar': './svarta-vinbar.ts',
  dill: './dill.ts',
  rodbeta: './rodbeta.ts',
  rabarber: './rabarber.ts',
  sockermajs: './sockermajs.ts',
  sparris: './sparris.ts',
  gurka: './gurka.ts',
  spenat: './spenat.ts',
  broccoli: './broccoli.ts',
  purjolok: './purjolok.ts',
  vitlok: './vitlok.ts',
  paprika: './paprika.ts',
  graslok: './graslok.ts',
  krusbar: './krusbar.ts',
  timjan: './timjan.ts',
  mynta: './mynta.ts',
  'roda-vinbar': './roda-vinbar.ts',
  pumpa: './pumpa.ts',
  bjornbar: './bjornbar.ts',
  blomkal: './blomkal.ts',
  rosmarin: './rosmarin.ts',
  oregano: './oregano.ts',
  mullbar: './mullbar.ts',
  mangold: './mangold.ts',
  kalrabbi: './kalrabbi.ts',
  palsternacka: './palsternacka.ts',
  brytbona: './brytbona.ts',
  vitkal: './vitkal.ts',
  chili: './chili.ts',
  koriander: './koriander.ts',
  salvia: './salvia.ts',
  citronmeliss: './citronmeliss.ts',
  kummin: './kummin.ts',
  krasse: './krasse.ts',
  lagerblad: './lagerblad.ts',
  mejram: './mejram.ts',
  libbsticka: './libbsticka.ts',
  ramslok: './ramslok.ts',
  dragon: './dragon.ts',
  rodkal: './rodkal.ts',
  majrova: './majrova.ts',
  storbona: './storbona.ts',
  schalottenlok: './schalottenlok.ts',
  jordartskocka: './jordartskocka.ts',
  brysselkal: './brysselkal.ts',
  'pak-choi': './pak-choi.ts',
  kinakal: './kinakal.ts',
  fankal: './fankal.ts',
  selleri: './selleri.ts',
  rotselleri: './rotselleri.ts',
  savoykal: './savoykal.ts',
  melon: './melon.ts',
  kronartskocka: './kronartskocka.ts',
  endiv: './endiv.ts',
  lingon: './lingon.ts',
  blabar: './blabar.ts',
  havtorn: './havtorn.ts',
  aronia: './aronia.ts',
  tayberry: './tayberry.ts',
  'vita-vinbar': './vita-vinbar.ts',
  guldvinbar: './guldvinbar.ts',
  tranbar: './tranbar.ts',
  honungsbar: './honungsbar.ts',
  apple: './apple.ts',
  paron: './paron.ts',
  plommon: './plommon.ts',
  korsbar: './korsbar.ts',
  fikon: './fikon.ts',
  valnot: './valnot.ts',
  hasselnut: './hasselnut.ts',
  vindruva: './vindruva.ts',
}

// Bygg synkron lookup från eager glob
const cropCache = new Map<string, Crop>()
for (const [id, path] of Object.entries(ID_TO_PATH)) {
  const mod = cropModules[path]
  if (!mod) continue
  const crop = Object.values(mod)[0] as Crop
  cropCache.set(id, crop)
}

/** Hämta en gröda synkront */
export function getCachedCrop(id: string): Crop | undefined {
  return cropCache.get(id)
}

/** Ladda en enskild gröda (synkron med eager, behåller async-signatur för kompatibilitet) */
export async function loadCrop(id: string): Promise<Crop | undefined> {
  return cropCache.get(id)
}

/** Hämta alla grödor (synkron med eager, behåller async-signatur för kompatibilitet) */
export async function loadAllCrops(): Promise<Record<string, Crop>> {
  return Object.fromEntries(cropCache)
}
