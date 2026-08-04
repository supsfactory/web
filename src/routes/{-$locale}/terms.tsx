import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getOptionalUser } from '@/features/auth/middleware'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { LegalPage } from '@/components/marketing/legal-page'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/terms')({
  // Placeholder content — keep it out of search until you write real terms.
  loader: async () => ({ origin: await getOrigin(), loggedIn: !!(await getOptionalUser()) }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/terms',
      title: locale === 'es' ? 'Términos del servicio — SUPsfactory' : 'Terms of Service — SUPsfactory',
      description:
        locale === 'es'
          ? 'Términos del servicio de SUPsfactory.'
          : 'SUPsfactory’s terms of service.',
    })
    return { meta: [...meta, { name: 'robots', content: 'noindex' }], links }
  },
  component: Terms,
})

function Terms() {
  const { loggedIn } = Route.useLoaderData()
  const { theme } = rootRoute.useLoaderData()
  const { t } = useTranslation()
  return <LegalPage theme={theme} loggedIn={loggedIn} title={t('legal.termsTitle')} />
}
