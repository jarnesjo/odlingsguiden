/**
 * Converts web SVG illustration/icon components to react-native-svg format.
 *
 * Usage: npx tsx scripts/convert-svg-to-rn.ts
 *
 * Transforms:
 * - <svg> → <Svg>, <path> → <Path>, <circle> → <Circle>, etc.
 * - Adds react-native-svg imports
 * - Handles xmlns removal
 * - Copies to packages/app/src/components/illustrations/
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const WEB_ILLUSTRATIONS = join(import.meta.dirname, '../packages/web/src/components/illustrations')
const WEB_ICONS = join(import.meta.dirname, '../packages/web/src/components/icons')
const WEB_BRAND = join(import.meta.dirname, '../packages/web/src/components/brand')
const APP_ILLUSTRATIONS = join(import.meta.dirname, '../packages/app/src/components/illustrations')
const APP_ICONS = join(import.meta.dirname, '../packages/app/src/components/icons')
const APP_BRAND = join(import.meta.dirname, '../packages/app/src/components/brand')

// SVG element mapping: web JSX → react-native-svg
const ELEMENT_MAP: Record<string, string> = {
  'svg': 'Svg',
  'path': 'Path',
  'circle': 'Circle',
  'ellipse': 'Ellipse',
  'line': 'Line',
  'rect': 'Rect',
  'text': 'SvgText',
  'g': 'G',
}

function convertSvgToRN(source: string): string {
  let result = source

  // Track which RN SVG elements are used
  const usedElements = new Set<string>()

  // Replace opening tags: <svg → <Svg, <path → <Path, etc.
  for (const [web, rn] of Object.entries(ELEMENT_MAP)) {
    // Opening tags: <svg, <path, etc. (with space, newline, or > after)
    const openRegex = new RegExp(`<${web}(\\s|>|\\/)`, 'g')
    if (openRegex.test(result)) {
      usedElements.add(rn)
      result = result.replace(new RegExp(`<${web}(\\s|>|\\/)`, 'g'), `<${rn}$1`)
    }
    // Closing tags: </svg>, </path>, etc.
    result = result.replace(new RegExp(`</${web}>`, 'g'), `</${rn}>`)
  }

  // Remove xmlns attribute (not valid in react-native-svg)
  result = result.replace(/\s+xmlns="[^"]*"/g, '')

  // Add react-native-svg import if SVG elements are used
  if (usedElements.size > 0) {
    const sortedElements = [...usedElements].sort()
    const importLine = `import { ${sortedElements.join(', ')} } from 'react-native-svg'`

    // Check if there's already a react-native-svg import
    if (!result.includes('react-native-svg')) {
      // Add after the last import line
      const importMatch = result.match(/^(import .+\n)+/m)
      if (importMatch) {
        const lastImportEnd = (importMatch.index ?? 0) + importMatch[0].length
        result = result.slice(0, lastImportEnd) + importLine + '\n' + result.slice(lastImportEnd)
      } else {
        // No imports found, add at top
        result = importLine + '\n' + result
      }
    }
  }

  return result
}

async function convertDirectory(srcDir: string, destDir: string, filter: (f: string) => boolean) {
  await mkdir(destDir, { recursive: true })

  const files = await readdir(srcDir)
  const targetFiles = files.filter(f => f.endsWith('.tsx') && filter(f))

  let converted = 0
  for (const file of targetFiles) {
    const source = await readFile(join(srcDir, file), 'utf-8')
    const result = convertSvgToRN(source)
    await writeFile(join(destDir, file), result)
    converted++
  }

  return converted
}

async function main() {
  console.log('Converting SVG components to react-native-svg...\n')

  // 1. Illustrations (85 files with dual exports)
  const illustrationCount = await convertDirectory(
    WEB_ILLUSTRATIONS,
    APP_ILLUSTRATIONS,
    f => f.endsWith('Illustration.tsx') && f !== 'CropIcon.tsx' && f !== 'CropGraphic.tsx',
  )
  console.log(`  Illustrations: ${illustrationCount} files`)

  // 2. Icons (index.tsx with all icon components)
  const iconCount = await convertDirectory(
    WEB_ICONS,
    APP_ICONS,
    f => f === 'index.tsx' || f === 'Icon.tsx',
  )
  console.log(`  Icons: ${iconCount} files`)

  // 3. Brand symbols
  await mkdir(join(APP_BRAND, 'symbols'), { recursive: true })
  const symbolCount = await convertDirectory(
    join(WEB_BRAND, 'symbols'),
    join(APP_BRAND, 'symbols'),
    f => f.startsWith('Symbol'),
  )
  console.log(`  Brand symbols: ${symbolCount} files`)

  console.log(`\nTotal: ${illustrationCount + iconCount + symbolCount} files converted`)

  // 4. Write CropIcon dispatcher for RN (no import.meta.glob)
  await writeCropIconDispatcher()
  console.log('  CropIcon dispatcher written')

  // 5. Write LogoCombined for RN
  await writeLogoCombined()
  console.log('  LogoCombined written')
}

async function writeCropIconDispatcher() {
  // Read the web CropIcon to get ID_TO_PATH mapping
  const webSource = await readFile(join(WEB_ILLUSTRATIONS, 'CropIcon.tsx'), 'utf-8')

  // Extract ID_TO_PATH entries
  const mapMatch = webSource.match(/const ID_TO_PATH[^{]*{([^}]+)}/s)
  if (!mapMatch) throw new Error('Could not parse ID_TO_PATH from CropIcon.tsx')

  const entries = [...mapMatch[1].matchAll(/['"]?([^'":,\s]+)['"]?:\s*'\.\/([^']+)'/g)]

  // Build static imports and map
  const imports: string[] = []
  const mapEntries: string[] = []

  for (const [, id, filename] of entries) {
    const moduleName = filename.replace('Illustration.tsx', '')
    const iconName = `${moduleName}Icon`
    const illustrationName = `${moduleName}Illustration`
    imports.push(`import { ${illustrationName}, ${iconName} } from './${filename.replace('.tsx', '')}'`)
    mapEntries.push(`  '${id}': { large: ${illustrationName}, small: ${iconName} },`)
  }

  const output = `import type { ComponentType } from 'react'
import type { Category } from '@odlingsguiden/shared'
import { VegetableIcon, BerryIcon, HerbIcon, FruitIcon, FlowerIcon } from '../icons'
${imports.join('\n')}

interface SizeProps {
  size?: number
}

const cropMap: Record<string, { large: ComponentType<SizeProps>; small: ComponentType<SizeProps> }> = {
${mapEntries.join('\n')}
}

const CATEGORY_ICONS: Record<Category, ComponentType<SizeProps>> = {
  'grönsaker': VegetableIcon,
  'bär': BerryIcon,
  'kryddor': HerbIcon,
  'frukt': FruitIcon,
  'blommor': FlowerIcon,
}

interface Props {
  id: string
  size?: number
  category?: Category
}

export function CropIcon({ id, size = 48, category }: Props) {
  const entry = cropMap[id]
  if (entry) {
    const Component = size >= 100 ? entry.large : entry.small
    return <Component size={size} />
  }
  const FallbackIcon = category ? CATEGORY_ICONS[category] : VegetableIcon
  return <FallbackIcon size={size} />
}

export function CropGraphic({ id, size = 200, category }: Props) {
  return <CropIcon id={id} size={size} category={category} />
}
`

  await writeFile(join(APP_ILLUSTRATIONS, 'CropIcon.tsx'), output)
}

async function writeLogoCombined() {
  const output = `import type { ComponentType } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@odlingsguiden/shared'
import { fontFamily, fontWeights } from '../../theme/tokens'

interface SymbolProps {
  size?: number
  accent?: string
  warm?: string
}

interface Props {
  name: string
  tagline?: string
  symbol: ComponentType<SymbolProps>
  dark?: boolean
}

export function LogoCombined({ name, tagline, symbol: Symbol, dark = false }: Props) {
  const textColor = dark ? '#fff' : colors.text
  const mutedColor = dark ? 'rgba(255,255,255,0.6)' : colors.textMuted
  const symbolAccent = dark ? '#fff' : colors.accent
  const symbolWarm = dark ? colors.warmLight : colors.warm

  return (
    <View style={styles.container}>
      <Symbol size={56} accent={symbolAccent} warm={symbolWarm} />
      <View style={styles.textWrap}>
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
        {tagline && (
          <Text style={[styles.tagline, { color: mutedColor }]}>{tagline}</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  textWrap: {},
  name: {
    fontFamily: fontFamily.headingExtraBold,
    fontSize: 26,
    fontWeight: String(fontWeights.extrabold) as any,
    lineHeight: 30,
  },
  tagline: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    marginTop: 2,
  },
})
`

  await writeFile(join(APP_BRAND, 'LogoCombined.tsx'), output)
}

main().catch(console.error)
