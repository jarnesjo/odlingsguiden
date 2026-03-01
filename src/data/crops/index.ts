import type { Crop } from '../types'
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
import { vitlok } from './vitlok'
import { paprika } from './paprika'
import { graslok } from './graslok'
import { krusbar } from './krusbar'
import { timjan } from './timjan'
import { mynta } from './mynta'
import { rodaVinbar } from './roda-vinbar'
import { pumpa } from './pumpa'
import { bjornbar } from './bjornbar'
import { blomkal } from './blomkal'
import { rosmarin } from './rosmarin'
import { oregano } from './oregano'
import { mullbar } from './mullbar'

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
  vitlok,
  paprika,
  graslok,
  krusbar,
  timjan,
  mynta,
  'roda-vinbar': rodaVinbar,
  pumpa,
  bjornbar,
  blomkal,
  rosmarin,
  oregano,
  mullbar,
}
