import React from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App'
import { loadAllCrops, getCachedCrop } from './data/crops'
import { SLUG_TO_ID } from './data/cropSlugs'
import { getSeasonActivities } from './utils/seasonData'
import { ssrSeasonCache } from './utils/ssrSeasonCache'

export { getCachedCrop, SLUG_TO_ID, getSeasonActivities }

export async function render(url: string): Promise<string> {
  // Preladda alla grödor i cache innan rendering
  // Då hittar CropPage sin data synkront via cropCache
  await loadAllCrops()

  // Fyll SSR-cache för säsongsdata om det är en säsongsroute
  if (url.startsWith('/säsong')) {
    const { monthSlugToNumber } = await import('./utils/monthParser')
    const monthSlug = url.split('/')[2]
    const month = monthSlug ? (monthSlugToNumber(monthSlug) ?? new Date().getMonth() + 1) : new Date().getMonth() + 1
    const seasonData = await getSeasonActivities(month, 4)
    ssrSeasonCache.set(month, seasonData)
  }

  const { prelude } = await prerender(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  )

  const reader = prelude.getReader()
  const chunks: string[] = []
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(decoder.decode(value, { stream: true }))
  }
  chunks.push(decoder.decode())

  return chunks.join('')
}
