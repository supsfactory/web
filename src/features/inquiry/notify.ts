/**
 * Admin notification for new project inquiries. Uses Resend when configured,
 * falls back to the console-capturing dev transport otherwise — matching the
 * project's graceful-degradation convention (see features/email).
 */
import { createDevTransport, type SentEmail } from '@/features/email/dev-transport'
import type { Inquiry } from './inquiry.schema'

export interface InquiryNotifyData {
  inquiry: Inquiry
  logoUrl: string | null
  origin: string
}

export async function sendInquiryNotification(apiKey: string | null, from: string, to: string[], data: InquiryNotifyData): Promise<void> {
  if (to.length === 0) return
  const transport: { send(email: SentEmail): Promise<void> } = apiKey
    ? {
        async send(email) {
          const { Resend } = await import('resend')
          const resend = new Resend(apiKey)
          const { error } = await resend.emails.send({ from, to, subject: email.subject, html: email.html, text: email.text })
          if (error) throw new Error(`Resend send failed: ${error.name}: ${error.message}`)
        },
      }
    : createDevTransport({ redactBody: import.meta.env.PROD })

  const i = data.inquiry
  const subject = `[SUPsfactory] New project inquiry: ${i.name} (${i.businessType})`
  const text = [
    `New inquiry from ${i.name}`,
    `Company: ${i.company || '—'}`,
    `Country: ${i.country || '—'}`,
    `Email: ${i.email}`,
    `WhatsApp: ${i.whatsapp || '—'}`,
    `Business type: ${i.businessType}`,
    `Estimated quantity: ${i.quantity}`,
    `Requirements: ${i.requirements || '—'}`,
    `Logo: ${data.logoUrl ?? 'none'}`,
    `Submitted: ${i.createdAt.toISOString()}`,
  ].join('\n')
  const html = [
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">',
    `<h2 style="color:#0b2540">New project inquiry — ${i.name}</h2>`,
    '<table style="border-collapse:collapse;width:100%;font-size:14px">',
    row('Company', i.company),
    row('Country', i.country),
    row('Email', `<a href="mailto:${i.email}">${i.email}</a>`),
    row('WhatsApp', i.whatsapp),
    row('Business type', i.businessType),
    row('Estimated quantity', i.quantity),
    row('Requirements', i.requirements),
    row('Logo', data.logoUrl ? `<a href="${data.logoUrl}">View logo</a>` : '—'),
    '</table>',
    `<p style="color:#7c8b9c;font-size:12px">Submitted at ${i.createdAt.toISOString()} · locale ${i.locale}</p>`,
    '</div>',
  ].join('')
  await transport.send({ to: to[0], subject, html, text })
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e4e0d4;color:#46586c;font-weight:700;white-space:nowrap">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e4e0d4">${value || '—'}</td></tr>`
}
