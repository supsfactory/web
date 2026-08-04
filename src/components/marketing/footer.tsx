import { Link } from '@tanstack/react-router'
import { Mail, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { Logo } from '@/components/brand/logo'
import { ThemeToggle } from '@/features/theme/theme-toggle'
import { LangSwitch } from '@/features/i18n/lang-switch'

export function Footer({ theme }: { theme: 'light' | 'dark' }) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-bg-alt px-5 pb-12 pt-16 md:px-7">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-aqua/50 to-sun/40" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3.5 max-w-[24em] text-[13.5px] leading-relaxed text-fg-3">{t('sup.footer.tagline')}</p>
          <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-fg-3">{t('sup.footer.poweredBy')}</p>
          <div className="mt-5 flex flex-col gap-2 text-[13.5px] text-fg-2">
            <a href="mailto:info@supsfactory.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Mail size={15} className="text-primary" /> info@supsfactory.com
            </a>
            <Link to="/{-$locale}/contact" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <MessageCircle size={15} className="text-primary" /> {t('sup.footer.inquiryForm')}
            </Link>
          </div>
        </div>

        {/* Solutions */}
        <FooterCol title={t('sup.footer.colSolutions')}>
          <Link className="foot-link" to="/{-$locale}/custom-sup-development">{t('sup.footer.customSup')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/private-label-sup">{t('sup.footer.privateLabel')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/resort-sup">{t('sup.footer.resortSolutions')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/club-sup">{t('sup.footer.clubSup')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/school-sup">{t('sup.footer.schoolSup')}</Link>
          <Link className="foot-link" to="/{-$locale}/contact">{t('sup.footer.organizationProjects')}</Link>
        </FooterCol>

        {/* Resources */}
        <FooterCol title={t('sup.footer.colResources')}>
          <Link className="foot-link" to="/{-$locale}/knowledge">{t('sup.nav.guides')}</Link>
          <Link className="foot-link" to="/{-$locale}/projects">{t('sup.nav.projects')}</Link>
          <Link className="foot-link" to="/$" params={{ _splat: 'faq' }}>{t('sup.footer.faq')}</Link>
          <Link className="foot-link" to="/{-$locale}/how-it-works">{t('sup.footer.process')}</Link>
          <Link className="foot-link" to="/$" params={{ _splat: 'news' }}>{t('sup.footer.news')}</Link>
        </FooterCol>

        {/* Company */}
        <FooterCol title={t('sup.footer.colCompany')}>
          <Link className="foot-link" to="/{-$locale}/about/supsfactory-entity">{t('sup.nav.aboutAfarer')}</Link>
          <Link className="foot-link" to="/{-$locale}/about">{t('sup.footer.about')}</Link>
          <Link className="foot-link" to="/$" params={{ _splat: 'factory' }}>{t('sup.footer.factory')}</Link>
          <Link className="foot-link" to="/{-$locale}/contact">{t('sup.footer.contact')}</Link>
        </FooterCol>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-[13px] text-fg-3">
            &copy; {year} {t('common.appName')}. {t('sup.footer.rights')}
          </p>
          <p className="mt-1 text-[12.5px] text-fg-3/80">{t('sup.footer.owner')}</p>
          <div className="mt-2 flex items-center gap-4 text-[12.5px]">
            <Link className="foot-link text-fg-3 hover:text-foreground" to="/{-$locale}/terms">{t('sup.footer.terms')}</Link>
            <Link className="foot-link text-fg-3 hover:text-foreground" to="/{-$locale}/privacy">{t('sup.footer.privacy')}</Link>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} />
          <LangSwitch />
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg-3">{title}</h4>
      <div className="flex flex-col gap-0.5 [&_.foot-link]:py-2 md:[&_.foot-link]:py-1 [&_.foot-link]:text-sm [&_.foot-link]:text-fg-2 [&_.foot-link:hover]:text-foreground [&_.foot-link]:transition-colors">
        {children}
      </div>
    </div>
  )
}