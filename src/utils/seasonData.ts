/**
 * seasonData.ts
 *
 * Aggregerar timeline-data tvärs över alla grödor för en given månad/zon.
 * Grupperar per aktivitetstyp i naturlig säsongsordning.
 */

import type { Zone, TimelineZone, Category } from '../data/types'
import { loadAllCrops } from '../data/crops'
import { CROP_LIST } from '../data/cropList'
import { parseMonthRange } from './monthParser'

export interface SeasonActivity {
  cropId: string
  cropName: string
  cropIcon: string
  category: Category
  phase: string
  phaseIcon: string
  months: string
}

export interface SeasonGroup {
  key: string
  label: string
  icon: string
  activities: SeasonActivity[]
}

interface GroupDef {
  key: string
  label: string
  icon: string
  matches: string[]
}

const GROUP_DEFS: GroupDef[] = [
  { key: 'indoor', label: 'Förodla inomhus', icon: 'indoor', matches: ['förodla', 'förrodla'] },
  { key: 'sow', label: 'Så och plantera', icon: 'seedling', matches: ['direktså', 'så', 'sätt'] },
  { key: 'plant', label: 'Plantera ut', icon: 'transplant', matches: ['plantera', 'utplantering'] },
  { key: 'harden', label: 'Härda av', icon: 'hardening', matches: ['härda'] },
  { key: 'tend', label: 'Sköta och gödsla', icon: 'water', matches: ['gödsla', 'kupa', 'gallra', 'stöd', 'toppa', 'sidoskott', 'rensa', 'beskär'] },
  { key: 'bloom', label: 'Blomning', icon: 'bloom', matches: ['blomning'] },
  { key: 'harvest', label: 'Skörda', icon: 'harvest', matches: ['skörd', 'huvudskörd'] },
  { key: 'seed', label: 'Frön och förvaring', icon: 'seed', matches: ['frötagning'] },
  { key: 'winter', label: 'Vintervila', icon: 'snowflake', matches: ['vinterskydd', 'övervintring', 'nedklippning', 'vila', 'nedvissnande'] },
]

/**
 * Hittar närmaste timeline-zon (1, 4 eller 6) för en given användarzon.
 * Samma logik som CropPage.
 */
export function getClosestTimelineZone(userZone: Zone, availableZones: TimelineZone[]): TimelineZone {
  const sorted = [...availableZones].sort((a, b) => a - b)
  return sorted.reduce((prev, curr) =>
    Math.abs(curr - userZone) < Math.abs(prev - userZone) ? curr : prev
  )
}

function matchGroup(phase: string): GroupDef | undefined {
  const lower = phase.toLowerCase()
  return GROUP_DEFS.find(g =>
    g.matches.some(m => lower.includes(m))
  )
}

/** Synkron version - fungerar bara om cropCache redan är fylld (SSR) */
export function getSeasonActivitiesSync(month: number, zone: Zone, allCrops: Record<string, import('../data/types').Crop>): SeasonGroup[] {
  return buildSeasonGroups(month, zone, allCrops)
}

/**
 * Hämtar alla säsongsaktiviteter för en given månad och zon.
 * Returnerar grupperade aktiviteter i naturlig säsongsordning.
 */
export async function getSeasonActivities(month: number, zone: Zone): Promise<SeasonGroup[]> {
  const CROPS = await loadAllCrops()
  return buildSeasonGroups(month, zone, CROPS)
}

function buildSeasonGroups(month: number, zone: Zone, CROPS: Record<string, import('../data/types').Crop>): SeasonGroup[] {
  const groups = new Map<string, SeasonGroup>()

  // Initiera alla grupper (behåller ordningen)
  for (const def of GROUP_DEFS) {
    groups.set(def.key, { key: def.key, label: def.label, icon: def.icon, activities: [] })
  }

  // Bygg en snabb lookup: cropId -> CropListEntry
  const listLookup = new Map(CROP_LIST.map(c => [c.id, c]))

  for (const [cropId, crop] of Object.entries(CROPS)) {
    const listEntry = listLookup.get(cropId)
    if (!listEntry) continue

    const timelineKeys = (Object.keys(crop.timeline).map(Number) as TimelineZone[])
    if (timelineKeys.length === 0) continue

    const closestZone = getClosestTimelineZone(zone, timelineKeys)
    const timeline = crop.timeline[closestZone] ?? []

    for (const entry of timeline) {
      const monthNums = parseMonthRange(entry.months)
      if (!monthNums.includes(month)) continue

      const groupDef = matchGroup(entry.phase)
      if (!groupDef) continue

      const group = groups.get(groupDef.key)!
      group.activities.push({
        cropId,
        cropName: listEntry.name,
        cropIcon: listEntry.icon,
        category: listEntry.category,
        phase: entry.phase,
        phaseIcon: entry.icon,
        months: entry.months,
      })
    }
  }

  // Returnera bara grupper som har aktiviteter, sortera aktiviteter per namn
  return [...groups.values()]
    .filter(g => g.activities.length > 0)
    .map(g => ({
      ...g,
      activities: g.activities.sort((a, b) => a.cropName.localeCompare(b.cropName, 'sv')),
    }))
}
