/**
 * Prerender-script: renderar alla routes till statisk HTML efter vite build.
 *
 * Flöde:
 * 1. Bygg SSR-bundle med Vite (entry-server.tsx -> dist-ssr/)
 * 2. Läs dist/index.html som mall
 * 3. För varje route: rendera HTML, injicera i mallen, spara till dist/
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'
import { CROP_LIST } from '../src/data/cropList.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
}

function getAllRoutes(): string[] {
  const routes: string[] = []

  // Kategori-sidor
  routes.push('/')
  routes.push('/kryddor', '/bär', '/frukt')

  // Säsong
  routes.push('/säsong')

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

  // Importera render-funktionen från SSR-bundlen
  const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))

  // Läs den byggda index.html som mall
  const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

  const routes = getAllRoutes()
  console.log(`Prerendering ${routes.length} routes...`)

  let count = 0
  for (const route of routes) {
    const html = await render(route)

    // Injicera renderad HTML i root-diven
    const page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
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
  }

  console.log(`Prerendered ${count} pages.`)
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
