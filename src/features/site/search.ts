import { createServerFn } from '@tanstack/react-start'
import type { Locale } from '@/features/i18n/locale'

/**
 * Site search index entry types and the `/search` page server fn.
 *
 * Building the index statically would drag the whole afarer corpus into the
 * client bundle, so the heavy build lives in search-index.server.ts and is
 * imported dynamically inside the handler only.
 */
export type SearchEntryType = 'solution' | 'guide' | 'project' | 'page'

export interface SearchEntry {
  url: string
  title: string
  excerpt: string
  type: SearchEntryType
  locale: Locale
}

/** Server-resolved search index for one locale, consumed by the `/search` page loader. */
export const searchIndexServer = createServerFn({ method: 'GET' })
  .validator((input: { locale: Locale }) => input)
  .handler(async ({ data }) => {
    const { buildExtendedIndex } = await import('./search-index.server')
    return buildExtendedIndex(data.locale)
  })
