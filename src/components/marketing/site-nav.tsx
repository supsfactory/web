import * as React from 'react'
import { Menu, X, ChevronDown, Search as SearchIcon } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/features/theme/theme-toggle'
import { LangSwitch } from '@/features/i18n/lang-switch'
import { SearchDialog } from '@/components/marketing/search-dialog'
import { useTranslation } from '@/features/i18n/provider'
import { SITE_NAME } from '@/config/site'
import { ENTITY_PAGE_PATH } from '@/config/navigation'

interface NavItem {
  label: string
  to?: string
  /** Raw path for top-level (non-locale-group) routes — localized at render. */
  href?: string
  items?: { label: string; to?: string; href?: string }[]
}

/** Sticky marketing header: utility top bar (auth) + main bar with dropdown
 * navigation (6 top-level items — desktop from xl to fit), search, theme and
 * language controls. */
export function SiteNav({ theme, loggedIn }: { theme: 'light' | 'dark'; loggedIn: boolean }) {
  const { t, locale } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [drop, setDrop] = React.useState<string | null>(null)
  const [mobileDrop, setMobileDrop] = React.useState<string | null>(null)

  const linkCls =
    'rounded-md px-3 py-2 text-sm font-medium text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground'

  /** Localize a raw path (top-level afarer routes resolve via the catch-all). */
  const l = (path: string): string => (locale === 'en' ? path : path === '/' ? '/es' : `/es${path}`)

  const navItems: NavItem[] = [
    {
      label: t('sup.nav.products'),
      items: [
        { label: t('sup.nav.productsDropdown.all'), href: '/products' },
        { label: t('sup.nav.productsDropdown.customizer'), href: '/customizer' },
        { label: t('sup.nav.productsDropdown.oemPaddle'), href: '/oem-paddle' },
        { label: t('sup.nav.oemDropdown.productDevelopment'), href: '/product-development' },
        { label: t('sup.nav.oemDropdown.manufacturer'), href: '/oem-manufacturing' },
        { label: t('sup.nav.oemDropdown.moqGuide'), href: '/oem-moq-guide' },
        { label: t('sup.nav.oemDropdown.moqLeadTime'), href: '/sup-oem-moq-lead-time' },
        { label: t('sup.nav.oemDropdown.newBrandTrial'), href: '/new-brand-trial-order' },
        { label: t('sup.nav.oemDropdown.trust'), href: '/oem-trust-assurance' },
        { label: t('sup.nav.oemDropdown.privateLabel'), href: '/solutions/private-label-sup' },
      ],
    },
    {
      label: t('sup.nav.industries'),
      items: [
        { label: t('sup.nav.industriesDropdown.overview'), href: '/who-we-serve' },
        { label: t('sup.nav.industriesDropdown.resorts'), href: '/solutions/resort-sup' },
        { label: t('sup.nav.industriesDropdown.clubs'), href: '/solutions/club-sup' },
        { label: t('sup.nav.industriesDropdown.rental'), href: '/solutions/rental-operators' },
        { label: t('sup.nav.industriesDropdown.distributors'), href: '/solutions/distributors' },
        { label: t('sup.nav.industriesDropdown.retail'), href: '/solutions/retail-partners' },
      ],
    },
    {
      label: t('sup.nav.manufacturing'),
      items: [
        { label: t('sup.nav.manufacturingDropdown.factory'), href: '/factory' },
        { label: t('sup.nav.manufacturingDropdown.proofCenter'), href: '/proof-center' },
        { label: t('sup.nav.manufacturingDropdown.quality'), href: '/quality' },
        { label: t('sup.nav.manufacturingDropdown.qualityInspection'), href: '/factory/quality-inspection' },
        { label: t('sup.nav.manufacturingDropdown.changeControl'), href: '/factory/quality-change-control' },
        { label: t('sup.nav.manufacturingDropdown.nonConformingControl'), href: '/factory/non-conforming-control' },
        { label: t('sup.nav.manufacturingDropdown.technology'), href: '/technology' },
        { label: t('sup.nav.manufacturingDropdown.warranty'), href: '/warranty' },
      ],
    },
    {
      label: t('sup.nav.caseStudies'),
      items: [
        { label: t('sup.nav.caseStudiesDropdown.projects'), href: '/projects' },
        { label: t('sup.nav.caseStudiesDropdown.gallery'), href: '/gallery' },
        { label: t('sup.nav.caseStudiesDropdown.evidence'), href: '/evidence/case-studies' },
      ],
    },
    {
      label: t('sup.nav.resources'),
      items: [
        { label: t('sup.nav.resourcesDropdown.knowledge'), href: '/knowledge' },
        { label: t('sup.nav.resourcesDropdown.faq'), href: '/faq' },
        { label: t('sup.nav.resourcesDropdown.sizeGuide'), href: '/size-guide' },
        { label: t('sup.nav.resourcesDropdown.whatIsSup'), href: '/what-is-sup' },
        { label: t('sup.nav.resourcesDropdown.b2bMatrix'), href: '/b2b-solutions-matrix' },
        { label: t('sup.nav.resourcesDropdown.news'), href: '/news' },
      ],
    },
    {
      label: t('sup.nav.about'),
      items: [
        { label: t('sup.nav.aboutDropdown.about'), href: '/about' },
        { label: t('sup.nav.aboutDropdown.entity'), href: ENTITY_PAGE_PATH },
        { label: t('sup.nav.aboutDropdown.partners'), href: '/partners' },
        { label: t('sup.nav.aboutDropdown.howItWorks'), href: '/how-it-works' },
        { label: t('sup.nav.contact'), href: '/contact' },
      ],
    },
  ]

  const authLink = loggedIn ? (
    <a href={l('/app')} className="text-[13px] font-semibold text-fg-2 transition-colors hover:text-foreground">
      {t('sup.nav.app')}
    </a>
  ) : (
    <a href={l('/login')} className="text-[13px] font-semibold text-fg-2 transition-colors hover:text-foreground">
      {t('common.signIn')}
    </a>
  )

  const cta = (
    <a href={l('/contact')} className={buttonVariants({ size: 'sm' })}>
      {t('sup.nav.cta')}
    </a>
  )

  const renderNavLink = (item: { label: string; href?: string }, onNavigate?: () => void) => (
    <a href={l(item.href as string)} className={linkCls} onClick={onNavigate}>
      {item.label}
    </a>
  )

  const renderDesktopItem = (item: NavItem) => {
    if (!item.items) {
      return renderNavLink(item)
    }
    const isOpen = drop === item.label
    return (
      <div
        className="relative"
        onMouseEnter={() => setDrop(item.label)}
        onMouseLeave={() => setDrop(null)}
      >
        <button
          type="button"
          className={`${linkCls} inline-flex items-center gap-1`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setDrop(isOpen ? null : item.label)}
        >
          {item.label}
          <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute left-0 top-full pt-2">
            <div className="min-w-[230px] rounded-xl border border-border bg-card p-1.5 shadow-[var(--shadow-lg)]">
              {item.items.map((sub) => (
                <div key={sub.label}>
                  {renderNavLink(sub, () => setDrop(null))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderMobileItems = (items: NavItem[]) =>
    items.map((item) => {
      if (!item.items) {
        return <div key={item.label}>{renderNavLink(item, () => setOpen(false))}</div>
      }
      const isOpen = mobileDrop === item.label
      return (
        <div key={item.label} className="flex flex-col">
          <button
            type="button"
            className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-foreground"
            onClick={(e) => { e.stopPropagation(); setMobileDrop(isOpen ? null : item.label) }}
            aria-expanded={isOpen}
          >
            {item.label}
            <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className="flex flex-col border-l border-border pl-3">
              {item.items.map((sub) => (
                <div key={sub.label}>{renderNavLink(sub, () => setOpen(false))}</div>
              ))}
            </div>
          )}
        </div>
      )
    })

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg">
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-border/80 shadow-[var(--shadow-sm)] backdrop-blur">
        {/* top bar — auth utilities above the main nav */}
        <div className="flex h-9 items-center justify-end gap-4 border-b border-border/60 px-4 md:px-7">
          {authLink}
        </div>
        <nav aria-label="Main navigation" className="flex h-16 items-center gap-3 px-4 md:px-7">
          <a href={l('/')} aria-label={SITE_NAME} className="shrink-0">
            <div className="flex flex-col leading-tight">
              <Logo />
              <span className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-fg-3">{t('sup.nav.poweredBy')}</span>
            </div>
          </a>
          <div className="flex-1" />

          {/* desktop nav with dropdowns */}
          <div className="hidden items-center gap-0.5 lg:flex">{navItems.map(renderDesktopItem)}</div>

          {/* theme · search · language (search sits between the two) */}
          <div className="flex items-center gap-1">
            <ThemeToggle theme={theme} />
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={t('common.search')}
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-lg text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground"
            >
              <SearchIcon />
            </button>
            <LangSwitch />
          </div>
          <div className="hidden lg:block">{cta}</div>

          {/* mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-lg text-fg-2 hover:bg-bg-alt hover:text-foreground lg:hidden"
            aria-label={t('common.menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div
            className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}
            role="dialog"
            aria-modal="true"
            aria-label={t('common.menu')}
          >
            {renderMobileItems(navItems)}
            <div className="mt-2 flex items-center gap-3">{cta}</div>
          </div>
        )}
      </header>
      <SearchDialog open={searchOpen} onOpen={() => setSearchOpen(true)} onClose={() => setSearchOpen(false)} />
    </>
  )
}
