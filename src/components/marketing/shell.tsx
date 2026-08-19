import { getRouteApi } from '@tanstack/react-router'
import { SiteNav } from './site-nav'
import { Footer } from './footer'

const rootRoute = getRouteApi('__root__')

/**
 * Shared marketing shell for pages rendered as fragments (solution pages,
 * projects, knowledge, entity hub): sticky nav + footer around the content.
 * Mirrors the shell the older pages (products, who-we-serve, about) render
 * individually.
 */
export function MarketingShell({ children }: { children: React.ReactNode }) {
  const { theme, user } = rootRoute.useLoaderData()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <main id="main-content">
        {children}
      </main>
      <Footer theme={theme} />
    </div>
  )
}
