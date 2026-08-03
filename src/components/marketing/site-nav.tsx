import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/features/theme/theme-toggle'
import { LangSwitch } from '@/features/i18n/lang-switch'
import { useTranslation } from '@/features/i18n/provider'

/** Sticky marketing header for the SUPsfactory site. Links + CTA collapse into a hamburger menu on mobile. */
export function SiteNav({ theme, loggedIn }: { theme: 'light' | 'dark'; loggedIn: boolean }) {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const linkCls = 'rounded-md px-2 py-3 text-sm font-medium text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground md:py-2'

  const navLinks = (
    <>
      <Link to="/{-$locale}/solutions" className={linkCls}>{t('sup.nav.solutions')}</Link>
      <Link to="/{-$locale}/products" className={linkCls}>{t('sup.nav.products')}</Link>
      <Link to="/$" params={{ _splat: 'factory' }} className={linkCls}>{t('sup.nav.factory')}</Link>
      <Link to="/$" params={{ _splat: 'technology' }} className={linkCls}>{t('sup.nav.technology')}</Link>
      <Link to="/$" params={{ _splat: 'academy' }} className={linkCls}>{t('sup.nav.academy')}</Link>
      <Link to="/$" params={{ _splat: 'news' }} className={linkCls}>{t('sup.nav.news')}</Link>
      <Link to="/{-$locale}/who-we-serve" className={linkCls}>{t('sup.nav.whoWeServe')}</Link>
      <Link to="/{-$locale}/how-it-works" className={linkCls}>{t('sup.nav.howItWorks')}</Link>
      <Link to="/{-$locale}/contact" className={linkCls}>{t('sup.nav.contact')}</Link>
    </>
  )

  const cta = (
    <Link to="/{-$locale}/contact" className={buttonVariants({ size: 'sm' })}>
      {t('sup.nav.cta')}
    </Link>
  )

  const authLink = loggedIn ? (
    <Link to="/{-$locale}/app" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
      {t('sup.nav.app')}
    </Link>
  ) : (
    <Link to="/{-$locale}/login" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
      {t('sup.nav.login')}
    </Link>
  )

  return (
    <header
      className="sticky top-0 z-30 border-b border-border/80 shadow-[var(--shadow-sm)] backdrop-blur"
      style={{ background: 'color-mix(in srgb, var(--background) 82%, transparent)' }}
    >
      <nav className="flex h-16 items-center gap-3 px-4 md:px-7">
        <Link to="/{-$locale}" aria-label="SUPsfactory" className="shrink-0">
          <Logo />
        </Link>
        <div className="flex-1" />

        {/* desktop */}
        <div className="hidden items-center gap-1 lg:flex">{navLinks}</div>
        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} />
          <LangSwitch />
        </div>
        <div className="hidden lg:block">{authLink}</div>
        <div className="hidden lg:block">{cta}</div>

        {/* mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-lg text-fg-2 hover:bg-bg-alt hover:text-foreground lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden" onClick={() => setOpen(false)}>
          {navLinks}
          <div className="mt-2 flex items-center gap-3">
            {authLink}
            {cta}
          </div>
        </div>
      )}
    </header>
  )
}
