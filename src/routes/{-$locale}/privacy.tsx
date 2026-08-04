import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getOptionalUser } from '@/features/auth/middleware'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { LegalPage } from '@/components/marketing/legal-page'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/privacy')({
  // Placeholder content — keep it out of search until you write a real policy.
  loader: async () => ({ origin: await getOrigin(), loggedIn: !!(await getOptionalUser()) }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/privacy',
      title: locale === 'es' ? 'Política de privacidad — SUPsfactory' : 'Privacy Policy — SUPsfactory',
      description:
        locale === 'es'
          ? 'Política de privacidad de SUPsfactory.'
          : 'SUPsfactory’s privacy policy.',
    })
    return { meta: [...meta, { name: 'robots', content: 'noindex' }], links }
  },
  component: Privacy,
})

function Privacy() {
  const { loggedIn } = Route.useLoaderData()
  const { theme } = rootRoute.useLoaderData()
  const { t } = useTranslation()
  return <LegalPage theme={theme} loggedIn={loggedIn} title={t('legal.privacyTitle')} />
}
