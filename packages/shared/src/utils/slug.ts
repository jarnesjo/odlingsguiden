/** Convert a crop name to a URL-friendly slug, preserving åäö */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
}
