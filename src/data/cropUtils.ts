import { CROPS } from './crops'

export function hasProfile(id: string): boolean {
  return id in CROPS
}
