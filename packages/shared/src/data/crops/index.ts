import type { Crop } from '../types'

import { apple } from './apple'
import { aronia } from './aronia'
import { artor } from './artor'
import { basilika } from './basilika'
import { bjornbar } from './bjornbar'
import { blabar } from './blabar'
import { blomkal } from './blomkal'
import { bondbona } from './bondbona'
import { broccoli } from './broccoli'
import { brysselkal } from './brysselkal'
import { brytbona } from './brytbona'
import { chili } from './chili'
import { citronmeliss } from './citronmeliss'
import { dill } from './dill'
import { dragon } from './dragon'
import { endiv } from './endiv'
import { fankal } from './fankal'
import { fikon } from './fikon'
import { graslok } from './graslok'
import { gronkal } from './gronkal'
import { guldvinbar } from './guldvinbar'
import { gurka } from './gurka'
import { hallon } from './hallon'
import { hasselnut } from './hasselnut'
import { havtorn } from './havtorn'
import { honungsbar } from './honungsbar'
import { jordartskocka } from './jordartskocka'
import { jordgubbar } from './jordgubbar'
import { kalrabbi } from './kalrabbi'
import { kinakal } from './kinakal'
import { koriander } from './koriander'
import { korsbar } from './korsbar'
import { krasse } from './krasse'
import { kronartskocka } from './kronartskocka'
import { krusbar } from './krusbar'
import { kummin } from './kummin'
import { lagerblad } from './lagerblad'
import { libbsticka } from './libbsticka'
import { lingon } from './lingon'
import { lok } from './lok'
import { majrova } from './majrova'
import { mangold } from './mangold'
import { mejram } from './mejram'
import { melon } from './melon'
import { morot } from './morot'
import { mullbar } from './mullbar'
import { mynta } from './mynta'
import { oregano } from './oregano'
import { pakChoi } from './pak-choi'
import { palsternacka } from './palsternacka'
import { paprika } from './paprika'
import { paron } from './paron'
import { persilja } from './persilja'
import { plommon } from './plommon'
import { potatis } from './potatis'
import { pumpa } from './pumpa'
import { purjolok } from './purjolok'
import { rabarber } from './rabarber'
import { radisa } from './radisa'
import { ramslok } from './ramslok'
import { rodaVinbar } from './roda-vinbar'
import { rodbeta } from './rodbeta'
import { rodkal } from './rodkal'
import { rosmarin } from './rosmarin'
import { rotselleri } from './rotselleri'
import { sallat } from './sallat'
import { salvia } from './salvia'
import { savoykal } from './savoykal'
import { schalottenlok } from './schalottenlok'
import { selleri } from './selleri'
import { sockermajs } from './sockermajs'
import { sparris } from './sparris'
import { spenat } from './spenat'
import { squash } from './squash'
import { storbona } from './storbona'
import { svartaVinbar } from './svarta-vinbar'
import { tayberry } from './tayberry'
import { timjan } from './timjan'
import { tomat } from './tomat'
import { tranbar } from './tranbar'
import { valnot } from './valnot'
import { vindruva } from './vindruva'
import { vitaVinbar } from './vita-vinbar'
import { vitkal } from './vitkal'
import { vitlok } from './vitlok'

export const ALL_CROPS: Record<string, Crop> = {
  'apple': apple,
  'aronia': aronia,
  'artor': artor,
  'basilika': basilika,
  'bjornbar': bjornbar,
  'blabar': blabar,
  'blomkal': blomkal,
  'bondbona': bondbona,
  'broccoli': broccoli,
  'brysselkal': brysselkal,
  'brytbona': brytbona,
  'chili': chili,
  'citronmeliss': citronmeliss,
  'dill': dill,
  'dragon': dragon,
  'endiv': endiv,
  'fankal': fankal,
  'fikon': fikon,
  'graslok': graslok,
  'gronkal': gronkal,
  'guldvinbar': guldvinbar,
  'gurka': gurka,
  'hallon': hallon,
  'hasselnut': hasselnut,
  'havtorn': havtorn,
  'honungsbar': honungsbar,
  'jordartskocka': jordartskocka,
  'jordgubbar': jordgubbar,
  'kalrabbi': kalrabbi,
  'kinakal': kinakal,
  'koriander': koriander,
  'korsbar': korsbar,
  'krasse': krasse,
  'kronartskocka': kronartskocka,
  'krusbar': krusbar,
  'kummin': kummin,
  'lagerblad': lagerblad,
  'libbsticka': libbsticka,
  'lingon': lingon,
  'lok': lok,
  'majrova': majrova,
  'mangold': mangold,
  'mejram': mejram,
  'melon': melon,
  'morot': morot,
  'mullbar': mullbar,
  'mynta': mynta,
  'oregano': oregano,
  'pak-choi': pakChoi,
  'palsternacka': palsternacka,
  'paprika': paprika,
  'paron': paron,
  'persilja': persilja,
  'plommon': plommon,
  'potatis': potatis,
  'pumpa': pumpa,
  'purjolok': purjolok,
  'rabarber': rabarber,
  'radisa': radisa,
  'ramslok': ramslok,
  'roda-vinbar': rodaVinbar,
  'rodbeta': rodbeta,
  'rodkal': rodkal,
  'rosmarin': rosmarin,
  'rotselleri': rotselleri,
  'sallat': sallat,
  'salvia': salvia,
  'savoykal': savoykal,
  'schalottenlok': schalottenlok,
  'selleri': selleri,
  'sockermajs': sockermajs,
  'sparris': sparris,
  'spenat': spenat,
  'squash': squash,
  'storbona': storbona,
  'svarta-vinbar': svartaVinbar,
  'tayberry': tayberry,
  'timjan': timjan,
  'tomat': tomat,
  'tranbar': tranbar,
  'valnot': valnot,
  'vindruva': vindruva,
  'vita-vinbar': vitaVinbar,
  'vitkal': vitkal,
  'vitlok': vitlok,
}

/** Hämta en gröda synkront */
export function getCachedCrop(id: string): Crop | undefined {
  return ALL_CROPS[id]
}

/** Ladda en enskild gröda (synkron, behåller async-signatur för kompatibilitet) */
export async function loadCrop(id: string): Promise<Crop | undefined> {
  return ALL_CROPS[id]
}

/** Hämta alla grödor (synkron, behåller async-signatur för kompatibilitet) */
export async function loadAllCrops(): Promise<Record<string, Crop>> {
  return ALL_CROPS
}
