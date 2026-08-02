import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { createDb } from '@/db/client'
import { assertAdmin } from '@/features/admin/assert-admin.server'
import { listInquiries, type InquiryRow } from '@/features/inquiry/inquiry.server'

function cell(v: string): string {
  // Neutralize spreadsheet formula prefixes (CSV injection) — same as waitlist export.
  const safe = /^[=+\-@\t\r]/.test(v) ? `'${v}` : v
  return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe
}

export function inquiriesToCsv(rows: InquiryRow[]): string {
  const header = 'name,company,country,email,whatsapp,business_type,quantity,requirements,logo,status,locale,created_at'
  const body = rows.map((r) => {
    const created = r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt)
    return [
      cell(r.name), cell(r.company), cell(r.country), cell(r.email), cell(r.whatsapp),
      cell(r.businessType), cell(r.quantity), cell(r.requirements), cell(r.logoKey ?? ''),
      cell(r.status), cell(r.locale), cell(created),
    ].join(',')
  })
  return [header, ...body].join('\n') + '\n'
}

const handler = async () => {
  try {
    await assertAdmin()
  } catch {
    return new Response('Not Found', { status: 404 })
  }
  const { rows } = await listInquiries(createDb(env.DB), { page: 0, pageSize: 100000 })
  return new Response(inquiriesToCsv(rows), {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="inquiries.csv"',
      'cache-control': 'no-store',
    },
  })
}

export const Route = createFileRoute('/admin/inquiries.csv')({
  server: { handlers: { GET: handler } },
})
