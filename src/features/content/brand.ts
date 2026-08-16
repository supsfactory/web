/**
 * Client-safe brand placeholder replacer.
 *
 * The full afarer corpus is server-only, so the `{count}` value is resolved on
 * the server and shipped through the route loader data. AferIndexProvider in
 * index-data.tsx applies it before the widgets render.
 */
let regionCount = 6

export function setBrandCount(n: number): void {
  regionCount = n
}

/** Replaces the afarer `{SITE}`/`{BRAND}`/`{count}` template placeholders with brand values. */
export function brandify(text: string): string {
  return text.replaceAll('{SITE}', 'SUPsfactory').replaceAll('{BRAND}', 'Afarer').replaceAll('{count}', String(regionCount))
}
