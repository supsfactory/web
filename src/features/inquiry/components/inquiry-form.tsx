import { useState } from 'react'
import { ChevronDown, UploadCloud, X } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useTurnstile } from '@/features/auth/components/turnstile'
import { submitInquiry, type SubmitResult } from '../actions'

/** B2B project inquiry form (name → company → country → email → WhatsApp →
 *  business type → quantity → requirements → logo upload). Modeled on the
 *  waitlist form: Turnstile + status-union result mapping to i18n strings. */
export function InquiryForm({ turnstileSiteKey }: { turnstileSiteKey: string | null }) {
  const { t, locale } = useTranslation()
  const { token, widget, reset } = useTurnstile(turnstileSiteKey)

  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [fileError, setFileError] = useState(false)

  function mapResult(r: SubmitResult) {
    if (r.ok) return { kind: 'ok' as const, text: t('inquiry.ok') }
    switch (r.reason) {
      case 'invalid':
        return { kind: 'err' as const, text: t('inquiry.invalid') }
      case 'rate-limited':
        return { kind: 'err' as const, text: t('inquiry.rateLimited') }
      case 'file':
        return { kind: 'err' as const, text: t('inquiry.fileType') }
      default:
        return { kind: 'err' as const, text: t('inquiry.captcha') }
    }
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    setMsg(null)
    setFileError(false)
    try {
      const form = e.currentTarget
      const fd = new FormData(form)
      fd.set('turnstileToken', token ?? '')
      fd.set('locale', locale)
      const r = await submitInquiry({ data: fd })
      setMsg(mapResult(r))
      if (r.ok) {
        form.reset()
        setFileName(null)
      } else if (r.reason !== 'invalid') {
        reset()
      }
    } catch {
      setMsg({ kind: 'err', text: t('inquiry.failed') })
      reset()
    } finally {
      setBusy(false)
    }
  }

  function onFileChange(files: FileList | null) {
    const f = files?.[0]
    if (!f) {
      setFileName(null)
      setFileError(false)
      return
    }
    const okType = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp'].includes(f.type)
    const okSize = f.size <= 5 * 1024 * 1024
    setFileError(!okType || !okSize)
    setFileName(f.name)
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <Label htmlFor="inq-name">{t('inquiry.name')} <span className="req">*</span></Label>
          <Input id="inq-name" name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </div>
        <div className="field">
          <Label htmlFor="inq-company">{t('inquiry.company')}</Label>
          <Input id="inq-company" name="company" maxLength={120} autoComplete="organization" />
        </div>
        <div className="field">
          <Label htmlFor="inq-country">{t('inquiry.country')}</Label>
          <Input id="inq-country" name="country" maxLength={80} autoComplete="country-name" />
        </div>
        <div className="field">
          <Label htmlFor="inq-email">{t('inquiry.email')} <span className="req">*</span></Label>
          <Input id="inq-email" name="email" type="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <Label htmlFor="inq-whatsapp">{t('inquiry.whatsapp')}</Label>
          <Input id="inq-whatsapp" name="whatsapp" maxLength={60} autoComplete="tel" placeholder="+86 138 0000 0000" />
        </div>
        <div className="field">
          <Label htmlFor="inq-type">{t('inquiry.businessType')} <span className="req">*</span></Label>
          <Select name="businessType" defaultValue="brand" required>
            <option value="brand">{t('inquiry.businessOptions.brand')}</option>
            <option value="resort">{t('inquiry.businessOptions.resort')}</option>
            <option value="club">{t('inquiry.businessOptions.club')}</option>
            <option value="corporate">{t('inquiry.businessOptions.corporate')}</option>
            <option value="other">{t('inquiry.businessOptions.other')}</option>
          </Select>
        </div>
        <div className="field sm:col-span-2">
          <Label htmlFor="inq-qty">{t('inquiry.quantity')} <span className="req">*</span></Label>
          <Select name="quantity" defaultValue="unsure" required>
            <option value="q50">{t('inquiry.quantityOptions.q50')}</option>
            <option value="q100">{t('inquiry.quantityOptions.q100')}</option>
            <option value="q300">{t('inquiry.quantityOptions.q300')}</option>
            <option value="q500">{t('inquiry.quantityOptions.q500')}</option>
            <option value="unsure">{t('inquiry.quantityOptions.unsure')}</option>
          </Select>
        </div>
      </div>

      <div className="field">
        <Label htmlFor="inq-req">{t('inquiry.requirements')}</Label>
        <Textarea id="inq-req" name="requirements" rows={4} maxLength={2000} placeholder={t('inquiry.requirementsPlaceholder')} />
      </div>

      <div className="field">
        <Label htmlFor="inq-logo">{t('inquiry.logo')}</Label>
        <div className="flex items-center gap-3">
          <label
            className="inline-flex h-[42px] cursor-pointer items-center gap-2 rounded-[7px] border border-dashed border-input px-4 text-sm font-medium text-fg-2 transition-colors hover:border-primary hover:text-foreground"
          >
            <UploadCloud size={16} />
            {fileName ?? 'Upload'}
            <input
              id="inq-logo"
              name="logo"
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              className="sr-only"
              onChange={(e) => onFileChange(e.target.files)}
            />
          </label>
          {fileName && (
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-fg-3 hover:text-destructive"
              onClick={() => {
                setFileName(null)
                setFileError(false)
                const input = document.getElementById('inq-logo') as HTMLInputElement | null
                if (input) input.value = ''
              }}
            >
              <X size={14} /> {fileName}
            </button>
          )}
        </div>
        <span className={`field-hint ${fileError ? 'err' : ''}`}>{t('inquiry.logoHint')}</span>
      </div>

      {widget}
      {msg && <p className={msg.kind === 'ok' ? 'text-sm font-medium text-success' : 'text-sm font-medium text-destructive'}>{msg.text}</p>}

      <Button type="submit" disabled={busy} className="mt-1 h-12 rounded-[7px] text-[15px] font-bold">
        {busy ? t('inquiry.submitting') : t('inquiry.submit')}
      </Button>
    </form>
  )
}

/** Native select styled to match the app's inputs. */
function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className="h-[42px] w-full appearance-none rounded-[7px] border border-input bg-background px-3 pr-9 text-sm text-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring"
      >
        {props.children}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fg-3" />
    </div>
  )
}
