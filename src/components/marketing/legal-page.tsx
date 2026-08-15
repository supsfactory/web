import { useTranslation } from '@/features/i18n/provider'
import { SiteNav } from '@/components/marketing/site-nav'
import { Footer } from '@/components/marketing/footer'

export interface LegalSection {
  heading: string
  body: string
}

/** Shared shell for the legal pages (/terms, /privacy). */
export function LegalPage({
  theme,
  loggedIn,
  title,
  sections,
}: {
  theme: 'light' | 'dark'
  loggedIn: boolean
  title: string
  sections: readonly LegalSection[]
}) {
  const { t, locale } = useTranslation()
  const fl = (path: string): string => (locale === 'en' ? path : path === '/' ? '/es' : `/es${path}`)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={loggedIn} />
      <main className="mx-auto max-w-[760px] px-5 md:px-7 py-16">
        <h1 className="page-h">{title}</h1>
        <p className="mt-2 text-sm text-fg-3">{t('legal.lastUpdated')}</p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-lg font-semibold">{s.heading}</h2>
            <p className="mt-2 leading-relaxed text-fg-2">{s.body}</p>
          </section>
        ))}
        <p className="mt-12">
          <a href={fl('/')} className="font-semibold text-primary">
            ← {t('legal.backHome')}
          </a>
        </p>
      </main>
      <Footer theme={theme} />
    </div>
  )
}
