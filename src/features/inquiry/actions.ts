import { createServerFn } from '@tanstack/react-start'
import type { Inquiry } from './inquiry.schema'

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'invalid' | 'captcha' | 'rate-limited' | 'file' | 'failed' }

/**
 * Public, unauthenticated endpoint: accepts the inquiry form as FormData
 * (fields + optional logo file). Validator hardens the fields; the handler
 * rate-limits per IP, verifies Turnstile, stores the logo in R2, persists the
 * inquiry to D1 and notifies the admin email list.
 */
export const submitInquiry = createServerFn({ method: 'POST' })
  .validator((d: FormData) => d)
  .handler(async ({ data }): Promise<SubmitResult> => {
    const { env } = await import('@/lib/env')
    const { createDb } = await import('@/db/client')
    const { getRequestHeader } = await import('@tanstack/react-start/server')
    const { fixedWindowLimit } = await import('@/features/waitlist/rate-limit')
    const { verifyTurnstile } = await import('@/features/waitlist/turnstile')
    const { clampInquiryInput, isValidInquiry, checkLogoFile } = await import('./inquiry.shared')
    const { putInquiryLogo } = await import('./inquiry.server')
    const { inquiry } = await import('./inquiry.schema')
    const { sendInquiryNotification } = await import('./notify')

    // 每 IP 5 次 / 10 分钟：容得下真人修改重试，挡得住脚本刷库。KV 故障时放行（fail-open）。
    try {
      const ip = getRequestHeader('cf-connecting-ip') ?? 'unknown'
      const allowed = await fixedWindowLimit(env.CACHE, `inquiry:${ip}`, 5, 600, Date.now())
      if (!allowed) return { ok: false, reason: 'rate-limited' }
    } catch (err) {
      console.error('[inquiry] rate limit check failed (allowing)', err)
    }

    const input = clampInquiryInput({
      name: data.get('name'),
      company: data.get('company'),
      country: data.get('country'),
      email: data.get('email'),
      whatsapp: data.get('whatsapp'),
      businessType: data.get('businessType'),
      quantity: data.get('quantity'),
      requirements: data.get('requirements'),
    })
    const locale = data.get('locale') === 'zh' ? 'zh' : 'en'

    // 字段校验先于 Turnstile：token 一经 siteverify 即作废（见 waitlist 注释）。
    if (!isValidInquiry(input)) return { ok: false, reason: 'invalid' }

    const ok = await verifyTurnstile(
      typeof data.get('turnstileToken') === 'string' ? (data.get('turnstileToken') as string) : '',
      env.TURNSTILE_SECRET_KEY,
    )
    if (!ok) return { ok: false, reason: 'captcha' }

    const file = data.get('logo')
    if (file instanceof File && file.size > 0) {
      const check = checkLogoFile(file)
      if (!check.ok) return { ok: false, reason: 'file' }
    }

    const id = crypto.randomUUID()
    const now = new Date()

    let logoKey: string | null = null
    try {
      if (file instanceof File && file.size > 0) {
        const bytes = await file.arrayBuffer()
        logoKey = await putInquiryLogo(env.BUCKET, id, bytes, file.type)
      }
    } catch (err) {
      console.error('[inquiry] logo upload failed', err)
      return { ok: false, reason: 'failed' }
    }

    const row: Inquiry = {
      id,
      ...input,
      logoKey,
      status: 'new',
      locale,
      createdAt: now,
    }
    try {
      await createDb(env.DB).insert(inquiry).values(row)
    } catch (err) {
      console.error('[inquiry] insert failed', err)
      return { ok: false, reason: 'failed' }
    }

    // Notification is best-effort — a mail outage must not block the submission.
    try {
      const admins = (env.ADMIN_EMAILS || '').split(',').map((e) => e.trim()).filter(Boolean)
      await sendInquiryNotification(env.RESEND_API_KEY || null, env.EMAIL_FROM || 'SUPsfactory <hello@supsfactory.com>', admins, {
        inquiry: row,
        logoUrl: logoKey ? `${new URL(env.BETTER_AUTH_URL).origin}/api/inquiry-logo/${id}` : null,
        origin: new URL(env.BETTER_AUTH_URL).origin,
      })
    } catch (err) {
      console.error('[inquiry] admin notification failed', err)
    }

    return { ok: true }
  })
