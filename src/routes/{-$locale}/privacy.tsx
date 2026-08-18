import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getOptionalUser } from '@/features/auth/middleware'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { dictionaries } from '@/features/i18n/locale'
import { LegalPage } from '@/components/marketing/legal-page'
import { SITE_NAME, BRAND_COMPANY_NAME } from '@/config'

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
      title: locale === 'es' ? `Política de privacidad \u2014 ${SITE_NAME}` : `Privacy Policy \u2014 ${SITE_NAME}`,
      description:
        locale === 'es'
          ? `Cómo ${SITE_NAME} (${BRAND_COMPANY_NAME}) recoge, usa y protege tus datos en los formularios de consulta y RFQ.`
          : `How ${SITE_NAME} (${BRAND_COMPANY_NAME}) collects, uses and protects your data from inquiry and RFQ forms.`,
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
