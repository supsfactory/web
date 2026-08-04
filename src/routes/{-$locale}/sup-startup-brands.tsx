import { createFileRoute, redirect } from '@tanstack/react-router'
import { localizePath, type Locale } from '@/features/i18n/locale'

/**
 * Legacy landing page — superseded by the Solutions system
 * (/custom-sup-development: custom product development with low-MOQ first runs).
 * Permanent 301 so indexed URLs and any inbound links consolidate.
 */
export const Route = createFileRoute('/{-$locale}/sup-startup-brands')({
  loader: ({ params }) => {
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    throw redirect({ href: localizePath(locale, '/custom-sup-development'), statusCode: 301 })
  },
  component: () => null,
})
