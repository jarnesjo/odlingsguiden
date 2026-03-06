/**
 * seasonData.ts (web)
 *
 * Tunn async wrapper kring shared seasonData.
 * Importerar loadAllCrops från web-specifik crop loader.
 */

import type { Zone, SeasonGroup } from '@odlingsguiden/shared'
import { getSeasonActivitiesSync } from '@odlingsguiden/shared'
import { loadAllCrops } from '../data/crops'

export type { SeasonActivity, SeasonGroup } from '@odlingsguiden/shared'
export { getClosestTimelineZone, getSeasonActivitiesSync } from '@odlingsguiden/shared'

/**
 * Hämtar alla säsongsaktiviteter för en given månad och zon.
 * Returnerar grupperade aktiviteter i naturlig säsongsordning.
 */
export async function getSeasonActivities(month: number, zone: Zone): Promise<SeasonGroup[]> {
  const CROPS = await loadAllCrops()
  return getSeasonActivitiesSync(month, zone, CROPS)
}
