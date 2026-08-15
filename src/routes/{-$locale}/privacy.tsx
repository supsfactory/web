import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getOptionalUser } from '@/features/auth/middleware'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { dictionaries } from '@/features/i18n/locale'
import { LegalPage } from '@/components/marketing/legal-page'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/privacy')({
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
          ? 'Cómo SUPsfactory (Qingdao Vatrad Group) recoge, usa y protege tus datos en los formularios de consulta y RFQ.'
          : 'How SUPsfactory (Qingdao Vatrad Group) collects, uses and protects your data from inquiry and RFQ forms.',
    })
    return { meta, links }
  },
  component: Privacy,
})

function Privacy() {
  const { loggedIn } = Route.useLoaderData()
  const { theme } = rootRoute.useLoaderData()
  const { t, locale } = useTranslation()
  return (
    <LegalPage
      theme={theme}
      loggedIn={loggedIn}
      title={t('legal.privacyTitle')}
      sections={dictionaries[locale].legal.privacySections}
    />
  )
}
