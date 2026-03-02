import type { Zone, ZoneInfo } from './types'

export const ZONE_INFO: Record<Zone, ZoneInfo> = {
  1: { name: 'Zon 1', region: 'Skåne, Blekinge, Hallandskusten, Öland, Gotland', frost: 'Sista vårfrost: ~slutet av april', season: '~200 frostfria dagar' },
  2: { name: 'Zon 2', region: 'Göteborg, Stockholm, Mälardalen, Östgöta-/Västgötaslätten', frost: 'Sista vårfrost: ~slutet av april', season: '~180 frostfria dagar' },
  3: { name: 'Zon 3', region: 'Örebro, Växjö, Karlstad, inre Småland', frost: 'Sista vårfrost: ~början av maj', season: '~165 frostfria dagar' },
  4: { name: 'Zon 4', region: 'Smålands höglänta, Dalsland, Gävle, Sundsvall', frost: 'Sista vårfrost: ~mitten av maj', season: '~150 frostfria dagar' },
  5: { name: 'Zon 5', region: 'Dalarna, Norrlandskusten, Umeå', frost: 'Sista vårfrost: ~slutet av maj', season: '~130 frostfria dagar' },
  6: { name: 'Zon 6', region: 'Östersund, Luleå, norra Värmland', frost: 'Sista vårfrost: ~början av juni', season: '~110 frostfria dagar' },
  7: { name: 'Zon 7', region: 'Inlands-Norrland, nedre fjälltrakterna', frost: 'Sista vårfrost: ~mitten av juni', season: '~90 frostfria dagar' },
  8: { name: 'Zon 8', region: 'Fjälltrakterna, Kiruna', frost: 'Sista vårfrost: ~slutet av juni', season: '~70 frostfria dagar' },
}
