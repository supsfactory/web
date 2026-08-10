/**
 * afarer content model — data ported verbatim from the afarer marketing site
 * (YAML page sources + MDX article sources in src/content/afarer/) and parsed
 * at build time via Vite `?raw` glob imports. afarer stays the canonical
 * source: content updates = file copies, no re-transcription.
 *
 * Pages are rendered generically: the pages.yaml registry declares which
 * sections (key + type) a page has, and the section renderer maps each to a
 * widget by key/type/shape.
 */

export interface AfarerSectionDef {
  key: string
  type: string
  label?: string
}

export interface AfarerPageMeta {
  title?: string
  description?: string
  keywords?: string[]
  /** TechArticle schema fields for long-form research articles. */
  author?: string
  datePublished?: string
  dateModified?: string
}

export interface AfarerPage {
  slug: string
  label: string
  path: string
  meta?: AfarerPageMeta
  sections: AfarerSectionDef[]
  /** Parsed page YAML: section key → section value (shape varies per widget). */
  content: Record<string, any>
}

export interface AfarerGalleryImage {
  url: string
  alt?: string
}

export interface AfarerSpec {
  label: string
  value: string
}

export interface AfarerPrice {
  amount: string
  currency: string
  note?: string
}

export interface AfarerProductMeta {
  title?: string
  description?: string
}

export interface AfarerProduct {
  slug: string
  title: string
  sku?: string
  summary?: string
  description?: string
  image?: string
  gallery?: AfarerGalleryImage[]
  category?: string
  tags?: string[]
  specs?: AfarerSpec[]
  price?: AfarerPrice
  /** Product-specific FAQ entries (rendered with a shared fallback pool). */
  faqs?: { q: string; a: string }[]
  inStock?: boolean
  featured?: boolean
  metadata?: AfarerProductMeta
  /** Markdown body (ported from the source MDX). */
  body: string
}

export interface AfarerPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
  category?: string
  author?: string
  tags?: string[]
  metadata?: AfarerProductMeta
  body: string
}

export interface AfarerArticle {
  slug: string
  title: string
  summary?: string
  description?: string
  category?: string
  tags?: string[]
  body: string
  dateModified?: string
}

export interface AfarerCaseUse extends AfarerArticle {
  environment?: string
  skill?: string
  products?: string[]
}

export interface AfarerResearchTopic {
  slug: string
  category: string
  readTime: string
}
