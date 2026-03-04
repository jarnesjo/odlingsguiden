/**
 * monthParser.ts
 *
 * Parsar svenska månadssträngar från timeline-data till månadsnummer.
 * "Mars-april" → [3, 4], "Maj" → [5], "Aug-Sep" → [8, 9]
 */

const SWEDISH_MONTHS: Record<string, number> = {
  jan: 1,
  januari: 1,
  feb: 2,
  februari: 2,
  mar: 3,
  mars: 3,
  apr: 4,
  april: 4,
  maj: 5,
  jun: 6,
  juni: 6,
  midsommar: 6,
  jul: 7,
  juli: 7,
  aug: 8,
  augusti: 8,
  sep: 9,
  sept: 9,
  september: 9,
  okt: 10,
  oktober: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
}

export const MONTH_NAMES = [
  '',
  'Januari',
  'Februari',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
  'December',
] as const

/** Lowercase month slugs for URLs: index 1 = 'januari', etc. */
export const MONTH_SLUGS = [
  '',
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
] as const

/** Lookup slug → month number. Handles both full names and abbreviations. */
export function monthSlugToNumber(slug: string): number | null {
  return SWEDISH_MONTHS[slug.toLowerCase()] ?? null
}

/**
 * Parsar en månadssträng till en array av månadsnummer (1-12).
 *
 * Hanterar:
 * - Enskilda månader: "Maj" → [5]
 * - Intervall: "Mar-Apr" → [3, 4], "Okt-Feb" → [10, 11, 12, 1, 2]
 * - Förkortningar: "Aug", "Sep", "Sept"
 * - Prefix: "Slutet av maj" → [5], "Mitten av juni" → [6]
 * - Parenteser: "Maj (efter frost)" → [5]
 * - Flera separerade: "Mar/Apr" → [3, 4]
 */
export function parseMonthRange(months: string): number[] {
  if (!months) return []

  // Ta bort parenteser och deras innehåll
  let clean = months.replace(/\([^)]*\)/g, '').trim()

  // Ta bort vanliga prefix
  clean = clean
    .replace(/^(slutet av|mitten av|början av|tidig|sen|tidigt|sent)\s*/gi, '')
    .trim()

  // Hantera "/" som separator: "Mar/Apr"
  if (clean.includes('/')) {
    const parts = clean.split('/')
    const result: number[] = []
    for (const part of parts) {
      result.push(...parseMonthRange(part.trim()))
    }
    return [...new Set(result)].sort((a, b) => a - b)
  }

  // Hantera intervall: "Mar-Apr", "Okt-Feb"
  const rangeParts = clean.split(/\s*[-–]\s*/)
  if (rangeParts.length === 2) {
    const start = lookupMonth(rangeParts[0]!)
    const end = lookupMonth(rangeParts[1]!)
    if (start && end) {
      return expandRange(start, end)
    }
  }

  // Enskild månad
  const single = lookupMonth(clean)
  if (single) return [single]

  return []
}

function lookupMonth(str: string): number | null {
  const normalized = str.trim().toLowerCase()
  return SWEDISH_MONTHS[normalized] ?? null
}

/**
 * Returnerar start- och slutmånad (1-12) för en månadssträng.
 * Används för rundade hörn på bar-endpoints i tidslinjen.
 */
export function parseMonthEdges(months: string): { start: number; end: number } | null {
  const range = parseMonthRange(months)
  if (range.length === 0) return null
  return { start: range[0]!, end: range[range.length - 1]! }
}

function expandRange(start: number, end: number): number[] {
  const result: number[] = []
  if (start <= end) {
    for (let i = start; i <= end; i++) result.push(i)
  } else {
    // Wrap-around: okt-feb → [10, 11, 12, 1, 2]
    for (let i = start; i <= 12; i++) result.push(i)
    for (let i = 1; i <= end; i++) result.push(i)
  }
  return result
}
