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
      title: locale === 'zh' ? '联系我们 | 开始你的定制 SUP 项目 — SUPsfactory' : 'Contact | Start Your Custom SUP Project — SUPsfactory',
      description:
        locale === 'zh'
          ? '告诉我们你的 SUP 项目想法——最低 50 片起订、全面定制与设计支持。提交询盘，1 个工作日内回复。'
          : 'Tell us about your custom SUP project — low MOQ from 50pcs, full customization and design support. Submit an inquiry and get a reply within one business day.',
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
              <ShieldCheck size={16} className="shrink-0 text-primary" /> {locale === 'zh' ? '您的信息仅用于项目沟通，绝不会泄露给第三方。' : 'Your details are used for project communication only — never shared with third parties.'}
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
