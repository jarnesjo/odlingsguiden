/**
 * Prerender-script: renderar alla routes till statisk HTML efter vite build.
 *
 * Flöde:
 * 1. Bygg SSR-bundle med Vite (entry-server.tsx -> dist-ssr/)
 * 2. Läs dist/index.html som mall
 * 3. För varje route: rendera HTML, injicera i mallen, spara till dist/
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'
import { CROP_LIST } from '@odlingsguiden/shared'
import { toSlug } from '@odlingsguiden/shared'
import { MONTH_NAMES, MONTH_SLUGS } from '@odlingsguiden/shared'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const BASE_PATH = '/odlingsguiden'
const BASE_URL = 'https://lillabosgarden.se/odlingsguiden'

function getAllRoutes(): string[] {
  const routes: string[] = []

  // Kategori-sidor
  routes.push('/')
  routes.push('/kryddor', '/bär', '/frukt')

  // Säsong (alla 12 månader)
  routes.push('/säsong')
  for (let m = 1; m <= 12; m++) {
    routes.push(`/säsong/${MONTH_SLUGS[m]}`)
  }

  // Alla grödprofiler
  const unlocked = CROP_LIST.filter(c => !c.locked)
  for (const crop of unlocked) {
    routes.push(`/${toSlug(crop.name)}`)
  }

  return routes
}

async function prerender() {
  console.log('Building SSR bundle...')
  await build({
    root,
    configFile: false,
    plugins: [(await import('@vitejs/plugin-react')).default()],
    build: {
      ssr: true,
      outDir: 'dist-ssr',
      rollupOptions: {
        input: resolve(root, 'src/entry-server.tsx'),
      },
    },
    logLevel: 'warn',
  })

  // Importera render-funktionen och helpers från SSR-bundlen
  const { render, loadAllCrops, getCachedCrop, SLUG_TO_ID, getSeasonActivities } = await import(resolve(root, 'dist-ssr/entry-server.js'))

  // Ladda alla grödor en gång (cachas internt)
  await loadAllCrops()

  // Läs den byggda index.html som mall (innan den skrivs över av /-routen)
  let template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

  if (!template.includes('<div id="root"></div>')) {
    console.error('Template saknar <div id="root"></div> - kör npm run build först')
    process.exit(1)
  }

  // Hitta alla CSS-filer i dist/assets/ och lägg till de som saknas i <head>
  // Förhindrar FOUC för lazy-laddade komponenter (CropPage, SeasonView, etc.)
  const allCssFiles = readdirSync(resolve(root, 'dist/assets'))
    .filter(f => f.endsWith('.css'))
  const missingCss = allCssFiles
    .filter(f => !template.includes(f))
    .map(f => `<link rel="stylesheet" crossorigin href="${BASE_PATH}/assets/${f}">`)
  if (missingCss.length > 0) {
    template = template.replace('</head>', `  ${missingCss.join('\n  ')}\n  </head>`)
    console.log(`Injected ${missingCss.length} lazy CSS files into template`)
  }

  const routes = getAllRoutes()
  console.log(`Prerendering ${routes.length} routes...`)

  let count = 0
  for (const route of routes) {
    const html = await render(BASE_PATH + route)

    // Bädda in data som JSON för hydration (undviker flash)
    const dataScripts: string[] = []
    let title = 'Odlingsguiden - Allt du behöver veta, en gröda i taget'
    let description = 'Zonanpassad odlingsguide för svenska trädgårdar. Djupa profiler för grönsaker, bär och kryddor med sortval, tidslinjer och skördetips.'

    // Gröddata för grödprofiler
    const slug = route.slice(1) // ta bort ledande /
    const cropId = SLUG_TO_ID[slug] ?? slug
    const cropData = getCachedCrop(cropId)
    if (cropData) {
      dataScripts.push(`<script id="__CROP_DATA__" type="application/json">${JSON.stringify({ [cropId]: cropData })}</script>`)
      title = `${cropData.name} - Odlingsguiden`
      description = `Odla ${cropData.name.toLowerCase()} i Sverige. Zonanpassad guide med sortval, tidslinje, samodling och skördetips.`
    }

    // Kategori-sidor
    const categoryTitles: Record<string, string> = {
      '/kryddor': 'Kryddor - Odlingsguiden',
      '/bär': 'Bär - Odlingsguiden',
      '/frukt': 'Frukt - Odlingsguiden',
    }
    if (categoryTitles[route]) {
      title = categoryTitles[route]
    }

    // Säsongsdata
    if (route.startsWith('/säsong')) {
      const monthSlug = route.split('/')[2]
      const monthNum = monthSlug
        ? MONTH_SLUGS.indexOf(monthSlug)
        : new Date().getMonth() + 1
      if (monthNum > 0) {
        const seasonData = await getSeasonActivities(monthNum, 4)
        dataScripts.push(`<script id="__SEASON_DATA__" type="application/json">${JSON.stringify(seasonData)}</script>`)
        title = `${MONTH_NAMES[monthNum]} - Säsongsguide - Odlingsguiden`
        description = `Vad kan du så, plantera och skörda i ${MONTH_NAMES[monthNum].toLowerCase()}? Säsongsguide för zon 4.`
      }
    }

    // OG-metadata
    const ogUrl = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`

    // Injicera renderad HTML, title, description, OG-taggar och data
    const page = template
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${title}</title>`
      )
      .replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${description}"`
      )
      .replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${title}"`
      )
      .replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${description}"`
      )
      .replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${ogUrl}"`
      )
      .replace(
        '</body>',
        `${dataScripts.join('\n')}</body>`
      )

    // Bestäm filsökväg
    const filePath = route === '/'
      ? resolve(root, 'dist/index.html')
      : resolve(root, `dist${route}/index.html`)

    const dir = dirname(filePath)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }

    writeFileSync(filePath, page)
    count++
    if (count % 20 === 0) {
      console.log(`  ${count}/${routes.length} routes...`)
    }
  }

  // Rensa temporär SSR-bundle
  rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

  console.log(`Prerendered ${count} pages.`)
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
