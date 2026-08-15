import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getOptionalUser } from '@/features/auth/middleware'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { dictionaries } from '@/features/i18n/locale'
import { LegalPage } from '@/components/marketing/legal-page'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/terms')({
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
          ? 'Términos que rigen presupuestos, muestras y pedidos OEM/ODM con SUPsfactory (Qingdao Vatrad Group Co., Ltd.).'
          : 'Terms governing quotations, samples and OEM/ODM orders with SUPsfactory (Qingdao Vatrad Group Co., Ltd.).',
    })
    return { meta, links }
  },
  component: Terms,
})

function Terms() {
  const { loggedIn } = Route.useLoaderData()
  const { theme } = rootRoute.useLoaderData()
  const { t, locale } = useTranslation()
  return (
    <LegalPage
      theme={theme}
      loggedIn={loggedIn}
      title={t('legal.termsTitle')}
      sections={dictionaries[locale].legal.termsSections}
    />
  )
}
