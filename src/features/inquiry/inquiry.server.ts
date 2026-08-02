/** R2 + D1 persistence for project inquiries. Thin wrappers — validation lives in inquiry.shared.ts. */
import { desc, eq } from 'drizzle-orm'
import type { DB } from '@/db/client'
import { inquiry, type Inquiry } from './inquiry.schema'
import type { InquiryStatus } from './inquiry.shared'

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
  return bucket.get(`${LOGO_PREFIX}${id}`)
}

/** Paginated admin list, newest first. */
export async function listInquiries(
  db: DB,
  input: { page: number; pageSize: number },
): Promise<{ rows: InquiryRow[]; total: number }> {
  const { page, pageSize } = input
  const [rows, countRow] = await Promise.all([
    db.select().from(inquiry).orderBy(desc(inquiry.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    db.select({ n: inquiry.id }).from(inquiry),
  ])
  return { rows, total: countRow.length }
}

export async function setInquiryStatus(
  db: DB,
  id: string,
  status: InquiryStatus,
): Promise<void> {
  await db.update(inquiry).set({ status }).where(eq(inquiry.id, id))
}
