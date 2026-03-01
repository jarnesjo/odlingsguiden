import { CROP_LIST } from '../src/data/crops/index.ts'
import { writeFileSync } from 'fs'

const BASE_URL = 'https://lillabosgarden.se/odlingsguiden'

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
}

const today = new Date().toISOString().split('T')[0]

const unlockedCrops = CROP_LIST.filter(c => !c.locked)

const urls = [
  `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>`,
  ...unlockedCrops.map(crop => {
    const slug = toSlug(crop.name)
    return `  <url>
    <loc>${BASE_URL}/${encodeURI(slug)}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>`
  }),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', sitemap)
console.log(`Sitemap generated with ${urls.length} URLs`)
