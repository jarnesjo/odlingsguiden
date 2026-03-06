import type { SeasonGroup } from './seasonData'

/** Global cache för säsongsdata under SSR. Fylls av entry-server.tsx. */
export const ssrSeasonCache = new Map<number, SeasonGroup[]>()
