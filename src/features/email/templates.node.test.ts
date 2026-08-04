import { test, expect } from 'vitest'
import { renderEmail } from '@/features/email/templates'

test('verify-email 模板渲染 i18n 文案 + 注入链接', async () => {
  const out = await renderEmail({ template: 'verify-email', locale: 'en', data: { url: 'https://app/verify?token=abc' } })
  expect(out.subject).toBe('Verify your email')
  expect(out.html).toContain('https://app/verify?token=abc')
  expect(out.html).toContain('Verify email')
  expect(out.text).toContain('https://app/verify?token=abc')
})

test('reset-password 模板支持西班牙语', async () => {
  const out = await renderEmail({ template: 'reset-password', locale: 'es', data: { url: 'https://app/reset?token=xyz' } })
  expect(out.subject).toBe('Restablece tu contraseña')
  expect(out.html).toContain('https://app/reset?token=xyz')
})
