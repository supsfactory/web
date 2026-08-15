/** R2 + D1 persistence for project inquiries. Thin wrappers — validation lives in inquiry.shared.ts. */
import { and, desc, eq, or, sql } from 'drizzle-orm'
import type { DB } from '@/db/client'
import { inquiry, type Inquiry } from './inquiry.schema'
import type { InquiryStatus, InquiryTier } from './inquiry.shared'

export type InquiryRow = Inquiry

const LOGO_PREFIX = 'inquiry-logos/'

export function logoObjectKey(id: string, ext: string): string {
  return `${LOGO_PREFIX}${id}.${ext}`
}

export function logoExt(contentType: string): string {
  switch (contentType) {
    case 'image/png':
      return 'png'
    case 'image/jpeg':
      return 'jpg'
    case 'image/svg+xml':
      return 'svg'
    default:
      return 'webp'
  }
}

/** Store a submitted logo. Returns the R2 object key. */
export async function putInquiryLogo(
  bucket: R2Bucket,
  id: string,
  body: ArrayBuffer,
  contentType: string,
): Promise<string> {
  const key = logoObjectKey(id, logoExt(contentType))
  await bucket.put(key, body, { httpMetadata: { contentType } })
  return key
}

export async function getInquiryLogo(
  bucket: R2Bucket,
  id: string,
): Promise<R2ObjectBody | null> {
  const base = `${LOGO_PREFIX}${id}`
  const direct = await bucket.get(base)
  if (direct) return direct
  // putInquiryLogo stores `{id}.{ext}` — try every known extension so legacy
  // bare-key objects and current keys both resolve.
  for (const ext of ['png', 'jpg', 'svg', 'webp']) {
    const obj = await bucket.get(`${base}.${ext}`)
    if (obj) return obj
  }
  return null
}

/** Paginated admin list, newest first. Optional tier filter + free-text search. */
export async function listInquiries(
  db: DB,
  input: { page: number; pageSize: number; tier?: InquiryTier | ''; q?: string },
): Promise<{ rows: InquiryRow[]; total: number }> {
  const { page, pageSize, tier, q } = input
  const pattern = q ? `%${q.replace(/[%_!]/g, '!$&')}%` : null
  const searchWhere = pattern
    ? or(
        sql`${inquiry.company} LIKE ${pattern} ESCAPE '!'`,
        sql`${inquiry.email} LIKE ${pattern} ESCAPE '!'`,
        sql`${inquiry.requirements} LIKE ${pattern} ESCAPE '!'`,
      )
    : undefined
  const where = tier && searchWhere ? and(eq(inquiry.tier, tier), searchWhere) : tier ? eq(inquiry.tier, tier) : searchWhere
  const [rows, countRows] = await Promise.all([
    db.select().from(inquiry).where(where).orderBy(desc(inquiry.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    db.select({ n: inquiry.id }).from(inquiry).where(where),
  ])
  return { rows, total: countRows.length }
}

export async function setInquiryStatus(
  db: DB,
  id: string,
  status: InquiryStatus,
): Promise<void> {
  await db.update(inquiry).set({ status }).where(eq(inquiry.id, id))
}
