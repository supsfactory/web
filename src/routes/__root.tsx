import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { isLocale, defaultLocale } from '@/features/i18n/locale'
import { getPreferences } from '@/server/preferences'
import { getOptionalUser } from '@/features/auth/middleware'
import { getAnalyticsToken } from '@/features/analytics/analytics'
import { getNonce } from '@/lib/csp'
import { Toaster } from '@/components/ui/sonner'
import { useResolvedTheme } from '@/features/theme/use-resolved-theme'
import { JsonLd, siteLd } from '@/features/seo/jsonld'
import appCss from '@/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'SUPsfactory — Launch Your Own SUP Brand' },
      {
        name: 'description',
        content:
          'Create your own SUP brand without building your own factory. Custom SUP manufacturing for startups, clubs, resorts and businesses — low MOQ from 50pcs, full customization and design support.',
      },
      { property: 'og:title', content: 'SUPsfactory — Launch Your Own SUP Brand' },
      {
        property: 'og:description',
        content:
          'Custom SUP manufacturing with low MOQ from 50pcs, full customization and professional design support. For startups, clubs, resorts and businesses.',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      // Hero LCP + 页内图片大多来自 assets.supsfactory.com（跨域 R2 CDN），
      // 提前建连能省掉一次 TCP+TLS 往返，直接缩短 LCP。
      { rel: 'preconnect', href: 'https://assets.supsfactory.com' },
      { rel: 'dns-prefetch', href: 'https://assets.supsfactory.com' },
      { rel: 'preload', href: '/fonts/manrope-latin-700-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/manrope-latin-800-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-400-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-500-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', type: 'image/png', href: '/logo192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  loader: async () => {
    // Never throw here: if the root loader errors, the error page replaces
    // RootComponent — i.e. the <html>/<head> shell and stylesheet — and every
    // page on the site renders as an unstyled fragment. All three values are
    // cosmetic/optional (theme cookie, header user, analytics token), so a
    // failure (e.g. a D1 blip in getOptionalUser) degrades to defaults instead.
    try {
      const { theme, themeFromCookie } = await getPreferences()
      const user = await getOptionalUser()
      const analyticsToken = await getAnalyticsToken()
      return { theme, themeFromCookie, user, analyticsToken }
    } catch {
      return { theme: 'light' as const, themeFromCookie: false, user: null, analyticsToken: null }
    }
  },
  component: RootComponent,
})

/* Pre-paint theme resolution for cookie-less visitors: SSR defaults to light
 * (brand), this flips to dark when the OS prefers it — before first paint, so
 * there is no flash. It deliberately does NOT write a cookie: visitors keep
 * following their system until they click the toggle (which does write one). */
const THEME_BOOT_SCRIPT = `(function(){try{if(!/(?:^|;\\s*)theme=/.test(document.cookie)&&matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.replace('light','dark')}}catch(e){}})()`

function RootComponent() {
  const { theme, analyticsToken } = Route.useLoaderData()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  // Locale from the URL's first segment: this works for both the {-$locale}
  // template routes and the /$ catch-all (whose params carry `_splat`, not
  // `locale` — otherwise every /es/* afarer page would render lang="en").
  // /docs 在 locale 组外且内容目前只有中文——lang 跟内容走，别向搜索引擎/读屏标错语言
  // （docs 翻译成英文时同步改这里）。
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  const lang = isLocale(firstSegment) ? firstSegment : pathname.startsWith('/docs') ? 'zh' : defaultLocale
  const resolvedTheme = useResolvedTheme(theme)
  // CSP nonce for the two inline scripts (theme boot + hydration); undefined in
  // dev, where no CSP is enforced anyway (see src/lib/security-headers.ts).
  const nonce = getNonce()
  return (
    <html lang={lang} className={theme} suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {/* Site-wide Organization/WebSite schema (SSR, CSP-nonce'd). */}
        {siteLd().map((d) => (
          <JsonLd key={d['@id'] as string} data={d} />
        ))}
        <Outlet />
        <Scripts />
        <Toaster theme={resolvedTheme} />
        {/* Cloudflare Web Analytics — only when a beacon token is configured. */}
        {analyticsToken && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: analyticsToken })}
          />
        )}
      </body>
    </html>
  )
}
