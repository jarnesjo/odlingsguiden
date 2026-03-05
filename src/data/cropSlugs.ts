import { CROP_LIST } from './cropList'
import { toSlug } from '../utils/slug'

/** Map from URL slug (with åäö) to crop id */
export const SLUG_TO_ID: Record<string, string> = {}

/** Map from crop id to URL slug (with åäö) */
export const ID_TO_SLUG: Record<string, string> = {}

for (const crop of CROP_LIST) {
  const slug = toSlug(crop.name)
  SLUG_TO_ID[slug] = crop.id
  ID_TO_SLUG[crop.id] = slug
}
