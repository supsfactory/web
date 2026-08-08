import { Link } from '@tanstack/react-router'
import { Facebook, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { FACTS } from '@/features/site/facts'
import { Logo } from '@/components/brand/logo'
import { ThemeToggle } from '@/features/theme/theme-toggle'
import { LangSwitch } from '@/features/i18n/lang-switch'

export function Footer({ theme }: { theme: 'light' | 'dark' }) {
  const { t, locale } = useTranslation()
  const year = new Date().getFullYear()
  /** Localize a raw afarer path (served by the `/$` catch-all, es mirrors under /es). */
  const fl = (path: string): string => (locale === 'en' ? path : path === '/' ? '/es' : `/es${path}`)

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
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-3">{t('sup.footer.followUs')}</p>
            <div className="mt-2.5 flex flex-col gap-2 text-[13.5px] text-fg-2">
              <a href={FACTS.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Facebook size={15} className="text-primary" /> {t('sup.footer.facebook')}
              </a>
              <a href={FACTS.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Linkedin size={15} className="text-primary" /> {t('sup.footer.linkedin')}
              </a>
              <a href={FACTS.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Youtube size={15} className="text-primary" /> {t('sup.footer.youtube')}
              </a>
            </div>
          </div>
        </div>

        {/* Manufacturing & Quality */}
        <FooterCol title={t('sup.footer.colManufacturing')}>
          <a className="foot-link" href={fl('/oem-odm-manufacturer')}>{t('sup.nav.oemOdm')}</a>
          <a className="foot-link" href={fl('/factory')}>{t('sup.footer.factory')}</a>
          <a className="foot-link" href={fl('/factory/capacity')}>{t('sup.footer.factoryCapacity')}</a>
          <a className="foot-link" href={fl('/quality')}>{t('sup.nav.companyDropdown.quality')}</a>
          <a className="foot-link" href={fl('/warranty')}>{t('sup.nav.companyDropdown.warranty')}</a>
          <a className="foot-link" href={fl('/technology')}>{t('sup.nav.companyDropdown.technology')}</a>
        </FooterCol>

        {/* Solutions */}
        <FooterCol title={t('sup.footer.colSolutions')}>
          <Link className="foot-link" to="/{-$locale}/custom-sup-development">{t('sup.footer.customSup')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/private-label-sup">{t('sup.footer.privateLabel')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/resort-sup">{t('sup.footer.resortSolutions')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/club-sup">{t('sup.footer.clubSup')}</Link>
          <Link className="foot-link" to="/{-$locale}/solutions/school-sup">{t('sup.footer.schoolSup')}</Link>
          <a className="foot-link" href={fl('/solutions/distributors')}>{t('sup.nav.solutionsDropdown.distributors')}</a>
          <a className="foot-link" href={fl('/solutions/rental-operators')}>{t('sup.nav.solutionsDropdown.rentalOperators')}</a>
          <a className="foot-link" href={fl('/b2b-solutions-matrix')}>{t('sup.footer.b2bMatrix')}</a>
          <a className="foot-link" href={fl('/partners')}>{t('sup.footer.partners')}</a>
        </FooterCol>

        {/* Resources & Company */}
        <FooterCol title={t('sup.footer.colResources')}>
          <Link className="foot-link" to="/{-$locale}/knowledge">{t('sup.nav.guides')}</Link>
          <a className="foot-link" href={fl('/what-is-sup')}>{t('sup.footer.whatIsSup')}</a>
          <Link className="foot-link" to="/{-$locale}/projects">{t('sup.nav.projects')}</Link>
          <a className="foot-link" href={fl('/faq')}>{t('sup.footer.faq')}</a>
          <a className="foot-link" href={fl('/news')}>{t('sup.footer.news')}</a>
          <Link className="foot-link" to="/{-$locale}/about/supsfactory-entity">{t('sup.nav.aboutAfarer')}</Link>
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