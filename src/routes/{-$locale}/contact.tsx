import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { Mail, MessageCircle, Clock3, ShieldCheck } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { getTurnstileSiteKey } from '@/features/auth/middleware'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { InquiryForm } from '@/features/inquiry/components/inquiry-form'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/contact')({
  loader: async () => {
    const [origin, turnstileSiteKey] = await Promise.all([getOrigin(), getTurnstileSiteKey()])
    return { origin, turnstileSiteKey }
  },
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/contact',
      title: locale === 'es' ? 'Contacto | Presupuesto de fabricación | SUPsfactory' : 'Contact | Request A Manufacturing Quotation — SUPsfactory',
      description:
        locale === 'es'
          ? 'Cuéntanos qué tablas quieres fabricar: MOQ por tramos desde 5–10 unidades de prueba, ingeniería y muestras, con respuesta en un día laborable.'
          : 'Tell us about the SUP boards you want to manufacture — tiered MOQ from 5–10 trial units, in-house engineering and sampling, factory production. Get a reply within one business day.',
    })
    return { meta, links }
  },
  component: ContactPage,
})

function ContactPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { t, locale } = useTranslation()
  const { turnstileSiteKey } = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={t('sup.nav.contact')} title={t('sup.contact.title')} sub={t('sup.contact.subtitle')} />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-7 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        {/* contact info */}
        <div>
          <h2 className="font-display text-xl font-extrabold tracking-tight">{t('sup.contact.infoTitle')}</h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-fg-2">{t('sup.contact.infoBody')}</p>
          <div className="mt-7 flex flex-col gap-4">
            <a
              href="mailto:info@supsfactory.com"
              className="marine-card flex items-center gap-4 p-5 transition-colors hover:border-primary/40"
            >
              <span className="icon-tile"><Mail size={19} /></span>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-fg-3">{t('sup.contact.emailLabel')}</p>
                <p className="mt-0.5 text-[15px] font-semibold">info@supsfactory.com</p>
              </div>
            </a>
            <div className="marine-card flex items-center gap-4 p-5">
              <span className="icon-tile"><MessageCircle size={19} /></span>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-fg-3">{t('sup.contact.whatsappLabel')}</p>
                <p className="mt-0.5 text-[15px] font-semibold">+86 13305324192</p>
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 rounded-xl border border-border bg-bg-alt p-5 text-[13.5px] text-fg-2">
            <p className="flex items-center gap-2.5">
              <Clock3 size={16} className="shrink-0 text-primary" /> {t('sup.contact.replyPromise')}
            </p>
            <p className="flex items-center gap-2.5">
              <ShieldCheck size={16} className="shrink-0 text-primary" /> {locale === 'es' ? 'Tus datos se usan solo para la comunicación del proyecto: nunca se comparten con terceros.' : 'Your details are used for project communication only — never shared with third parties.'}
            </p>
          </div>
        </div>

        {/* form */}
        <div className="marine-card h-fit p-6 md:p-8">
          <h2 className="font-display text-xl font-extrabold tracking-tight">{t('sup.contact.formTitle')}</h2>
          <p className="mt-1.5 text-[13px] text-fg-3">{t('sup.contact.formSubtitle')}</p>
          <div className="mt-6">
            <InquiryForm turnstileSiteKey={turnstileSiteKey} />
          </div>
        </div>
      </section>

      <Footer theme={theme} />
    </div>
  )
}
