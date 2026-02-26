import type { Zone, ZoneInfo } from './types'

export const ZONE_INFO: Record<Zone, ZoneInfo> = {
  1: { name: 'Zon 1', region: 'Skånes kust, Halland', frost: 'Sista vårfrost: ~mitten av april', season: '~200 frostfria dagar' },
  2: { name: 'Zon 2', region: 'Sydvästra Sverige, Öland, Gotland', frost: 'Sista vårfrost: ~slutet av april', season: '~180 frostfria dagar' },
  3: { name: 'Zon 3', region: 'Sydöstra Sverige, Västkusten', frost: 'Sista vårfrost: ~början av maj', season: '~165 frostfria dagar' },
  4: { name: 'Zon 4', region: 'Mellansverige, Mälardalen', frost: 'Sista vårfrost: ~mitten av maj', season: '~150 frostfria dagar' },
  5: { name: 'Zon 5', region: 'Södra Norrland, Dalarna', frost: 'Sista vårfrost: ~slutet av maj', season: '~130 frostfria dagar' },
  6: { name: 'Zon 6', region: 'Mellersta Norrland', frost: 'Sista vårfrost: ~början av juni', season: '~110 frostfria dagar' },
  7: { name: 'Zon 7', region: 'Övre Norrland', frost: 'Sista vårfrost: ~mitten av juni', season: '~90 frostfria dagar' },
  8: { name: 'Zon 8', region: 'Fjälltrakter', frost: 'Sista vårfrost: ~slutet av juni', season: '~70 frostfria dagar' },
}
