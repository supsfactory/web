import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { authClient } from '@/features/auth/auth.client'
import { AppShell } from '@/components/app/app-shell'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/features/i18n/provider'
import { fmtDateTime } from '@/lib/format-date'
import { getInquiriesFn, setInquiryStatusFn } from '@/features/admin/middleware'
import { STATUSES, type InquiryStatus } from '@/features/inquiry/inquiry.shared'
import { useState } from 'react'

interface InquirySearch {
  page?: number
  pageSize?: number
}

export const Route = createFileRoute('/{-$locale}/admin/inquiries')({
  validateSearch: (s: Record<string, unknown>): InquirySearch => {
    const out: InquirySearch = {}
    if (typeof s.page === 'number') out.page = s.page
    if (typeof s.pageSize === 'number') out.pageSize = s.pageSize
    return out
  },
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getInquiriesFn({ data: { page: deps.page ?? 0, pageSize: deps.pageSize ?? 20 } }),
  component: InquiriesAdmin,
})

function InquiriesAdmin() {
  const { rows, total } = Route.useLoaderData()
  const search = Route.useSearch()
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const { t } = useTranslation()
  const [saving, setSaving] = useState<string | null>(null)
  const page = search.page ?? 0
  const pageSize = search.pageSize ?? 20
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  function setSearch(patch: Partial<InquirySearch>) {
    void router.navigate({ to: '/{-$locale}/admin/inquiries', search: { ...search, ...patch } })
  }

  async function updateStatus(id: string, status: InquiryStatus) {
    setSaving(id)
    try {
      await setInquiryStatusFn({ data: { id, status } })
      await router.invalidate()
    } finally {
      setSaving(null)
    }
  }

  const statusLabel = (s: string) => t(`inquiry.statuses.${s}` as `inquiry.statuses.${InquiryStatus}`)

  return (
    <AppShell
      user={{
        name: session?.user?.name,
        email: session?.user?.email ?? '',
        role: session?.user?.role ?? 'admin',
        image: session?.user?.image ?? null,
      }}
      active="admin-inquiries"
      crumb={t('admin.navAdmin')}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t('admin.inquiries')} ({total})</h1>
        <a href="/admin/inquiries.csv" className="text-sm text-primary hover:underline">{t('admin.inquiryExport')}</a>
      </div>
      <Card className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-fg-3">
              <th className="px-4 py-2">{t('admin.inquiryName')}</th>
              <th className="px-4 py-2">{t('admin.inquiryCompany')}</th>
              <th className="px-4 py-2">{t('admin.inquiryCountry')}</th>
              <th className="px-4 py-2">{t('admin.inquiryEmail')}</th>
              <th className="px-4 py-2">{t('admin.inquiryType')}</th>
              <th className="px-4 py-2">{t('admin.inquiryTimeline')}</th>
              <th className="px-4 py-2">{t('admin.inquiryQty')}</th>
              <th className="px-4 py-2">{t('admin.inquiryReq')}</th>
              <th className="px-4 py-2">{t('admin.inquiryLogo')}</th>
              <th className="px-4 py-2">{t('admin.inquiryStatus')}</th>
              <th className="px-4 py-2">{t('admin.inquirySubmitted')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border align-top">
                <td className="px-4 py-3 font-medium">{r.name}</td>
                <td className="px-4 py-3">{r.company || '—'}</td>
                <td className="px-4 py-3">{r.country || '—'}</td>
                <td className="px-4 py-3">
                  <a className="text-primary hover:underline" href={`mailto:${r.email}`}>{r.email}</a>
                  {r.whatsapp && <p className="text-xs text-fg-3">{r.whatsapp}</p>}
                </td>
                <td className="px-4 py-3 text-xs">{r.businessType}</td>
                <td className="px-4 py-3 text-xs">{r.timeline}</td>
                <td className="px-4 py-3 text-xs">{r.quantity}</td>
                <td className="max-w-[240px] px-4 py-3 text-xs leading-relaxed text-fg-2">{r.requirements || '—'}</td>
                <td className="px-4 py-3">
                  {r.logoKey ? (
                    <a className="text-primary hover:underline" href={`/api/inquiry-logo/${r.id}`} target="_blank" rel="noreferrer">
                      {t('admin.inquiryLogo')}
                    </a>
                  ) : (
                    <span className="text-fg-3">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={r.status}
                    disabled={saving === r.id}
                    onChange={(e) => void updateStatus(r.id, e.target.value as InquiryStatus)}
                    className="h-8 rounded-md border border-border bg-background px-2 text-xs font-medium"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{statusLabel(s)}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 text-xs text-fg-3">{fmtDateTime(r.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="p-6 text-sm text-fg-3">{t('admin.noInquiries')}</p>}
      </Card>
      <div className="mt-4 flex items-center justify-end gap-2">
        <span className="text-sm text-fg-3">{t('admin.pageOf', { page: page + 1, total: totalPages })}</span>
        <Button variant="outline" size="sm" disabled={page === 0} onClick={() => setSearch({ page: page - 1, pageSize })}>
          <ChevronLeft size={15} />
        </Button>
        <Button variant="outline" size="sm" disabled={page + 1 >= totalPages} onClick={() => setSearch({ page: page + 1, pageSize })}>
          <ChevronRight size={15} />
        </Button>
      </div>
    </AppShell>
  )
}
