import { CROP_LIST } from './crops'

/** Convert a crop name to a URL-friendly slug, preserving åäö */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
}

/** Map from URL slug (with åäö) to crop id */
export const SLUG_TO_ID: Record<string, string> = {}

/** Map from crop id to URL slug (with åäö) */
export const ID_TO_SLUG: Record<string, string> = {}

for (const crop of CROP_LIST) {
  const slug = toSlug(crop.name)
  SLUG_TO_ID[slug] = crop.id
  ID_TO_SLUG[crop.id] = slug
}
