/**
 * D1 coverage for the admin inquiry list: pagination, tier filter and the
 * free-text LIKE search (with %/_-escape) against a hand-created table —
 * the workers pool does not auto-apply drizzle migrations (repo convention).
 */
import { test, expect, beforeAll } from 'vitest'
import { env } from 'cloudflare:test'
import { createDb } from '@/db/client'
import { inquiry } from '@/features/inquiry/inquiry.schema'
import { listInquiries } from '@/features/inquiry/inquiry.server'

beforeAll(async () => {
  await env.DB.prepare(
    `CREATE TABLE IF NOT EXISTS "inquiry" (
      "id" TEXT PRIMARY KEY NOT NULL, "name" TEXT NOT NULL, "company" TEXT NOT NULL DEFAULT '',
      "website" TEXT NOT NULL DEFAULT '', "country" TEXT NOT NULL DEFAULT '',
      "email" TEXT NOT NULL, "whatsapp" TEXT NOT NULL DEFAULT '',
      "business_type" TEXT NOT NULL DEFAULT 'other', "quantity" TEXT NOT NULL DEFAULT 'unsure',
      "product_type" TEXT NOT NULL DEFAULT 'unsure', "model" TEXT NOT NULL DEFAULT 'unsure',
      "timeline" TEXT NOT NULL DEFAULT 'now', "target_market" TEXT NOT NULL DEFAULT '',
      "project_stage" TEXT NOT NULL DEFAULT '', "role" TEXT NOT NULL DEFAULT '',
      "board_platform" TEXT NOT NULL DEFAULT '', "construction" TEXT NOT NULL DEFAULT '',
      "customization" TEXT NOT NULL DEFAULT '', "packaging" TEXT NOT NULL DEFAULT '',
      "compliance" TEXT NOT NULL DEFAULT '', "docs" TEXT NOT NULL DEFAULT '',
      "annual_volume" TEXT NOT NULL DEFAULT '', "budget" TEXT NOT NULL DEFAULT '',
      "nda" TEXT NOT NULL DEFAULT 'no', "consent" TEXT NOT NULL DEFAULT '',
      "score" INTEGER NOT NULL DEFAULT 0, "tier" TEXT NOT NULL DEFAULT 'C',
      "requirements" TEXT NOT NULL DEFAULT '', "logo_key" TEXT,
      "status" TEXT NOT NULL DEFAULT 'new', "locale" TEXT NOT NULL,
      "created_at" INTEGER NOT NULL)`,
  ).run()
  const db = createDb(env.DB)
  await db.insert(inquiry).values([
    { id: 'i1', name: 'x', company: 'Acme Boards', email: 'a@acme.com', locale: 'en', tier: 'A', score: 80, requirements: 'Need 500 race boards', createdAt: new Date('2026-08-01T00:00:00Z') },
    { id: 'i2', name: 'x', company: 'BlueWave', email: 'b@bluewave.com', locale: 'en', tier: 'B', score: 55, requirements: 'Cotton tote bags', createdAt: new Date('2026-08-02T00:00:00Z') },
    { id: 'i3', name: 'x', company: 'Acme Retail GmbH', email: 'c@gmail.com', locale: 'de', tier: 'C', score: 20, requirements: 'price?', createdAt: new Date('2026-08-03T00:00:00Z') },
  ])
})

test('paginates newest first', async () => {
  const { rows, total } = await listInquiries(createDb(env.DB), { page: 1, pageSize: 2 })
  expect(total).toBe(3)
  expect(rows.map((r) => r.id)).toEqual(['i3', 'i2'])
})

test('tier filter narrows rows and total', async () => {
  const all = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, tier: 'A' })
  expect(all.total).toBe(1)
  expect(all.rows[0].id).toBe('i1')
})

test('free-text search matches company, email and requirements', async () => {
  const byCompany = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, q: 'acme' })
  expect(byCompany.total).toBe(2)
  expect(byCompany.rows.map((r) => r.id).sort()).toEqual(['i1', 'i3'])

  const byEmail = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, q: 'bluewave.com' })
  expect(byEmail.total).toBe(1)

  const byReq = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, q: 'price' })
  expect(byReq.total).toBe(1)
  expect(byReq.rows[0].id).toBe('i3')
})

test('LIKE metacharacters in the query are escaped, not wildcards', async () => {
  const { total } = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, q: '%' })
  expect(total).toBe(0)
  const { total: under } = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, q: '_' })
  expect(under).toBe(0)
})

test('tier + search combine with AND', async () => {
  const { rows } = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, tier: 'A', q: 'acme' })
  expect(rows.map((r) => r.id)).toEqual(['i1'])
  const { total } = await listInquiries(createDb(env.DB), { page: 1, pageSize: 20, tier: 'C', q: 'acme' })
  expect(total).toBe(1)
})