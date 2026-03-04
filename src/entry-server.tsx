import React from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App'
import { loadAllCrops } from './data/crops'

export async function render(url: string): Promise<string> {
  // Preladda alla grödor i cache innan rendering
  // Då hittar CropPage sin data synkront via cropCache
  await loadAllCrops()

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
