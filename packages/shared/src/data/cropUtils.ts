import { CROP_LIST } from './cropList'

const PROFILE_IDS = new Set(
  CROP_LIST.filter(c => !c.locked).map(c => c.id)
)

export function hasProfile(id: string): boolean {
  return PROFILE_IDS.has(id)
}
