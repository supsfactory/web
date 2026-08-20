import { createRootRoute, ErrorComponent, HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { isLocale, defaultLocale } from '@/features/i18n/locale'
import { getPreferences } from '@/server/preferences'
import { getOptionalUser } from '@/features/auth/middleware'
import { getAnalyticsToken, getGa4MeasurementId } from '@/features/analytics/analytics'
import { trackPageView } from '@/features/analytics/events'
import { getNonce } from '@/lib/csp'
import { JsonLd, siteLd } from '@/features/seo/jsonld'
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE, BRAND_ASSETS_CDN, BRAND_OG_IMAGE } from '@/config'
import appCss from '@/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${SITE_NAME} \u2014 ${SITE_TAGLINE}` },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      { property: 'og:title', content: `${SITE_NAME} \u2014 ${SITE_TAGLINE}` },
      {
        property: 'og:description',
        content: SITE_DESCRIPTION,
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: BRAND_OG_IMAGE },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${SITE_NAME} \u2014 ${SITE_TAGLINE}` },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: BRAND_OG_IMAGE },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: BRAND_ASSETS_CDN },
      { rel: 'dns-prefetch', href: BRAND_ASSETS_CDN },
      { rel: 'preload', href: '/fonts/manrope-latin-400-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/manrope-latin-500-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/manrope-latin-700-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/manrope-latin-800-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-400-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-500-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-600-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-700-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/logo192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  loader: async () => {
    try {
      const { theme, themeFromCookie } = await getPreferences()
      const user = await getOptionalUser()
      const [analyticsToken, ga4Id] = await Promise.all([getAnalyticsToken(), getGa4MeasurementId()])
      return { theme, themeFromCookie, user, analyticsToken, ga4Id }
    } catch (e) {
      console.error('[root-loader]', e)
      return { theme: 'light' as const, themeFromCookie: false, user: null, analyticsToken: null, ga4Id: null }
    }
  },
  errorComponent: ErrorComponent,
  component: RootComponent,
})

const THEME_BOOT_SCRIPT = `(function(){try{if(!/(?:^|;\\s*)theme=/.test(document.cookie)&&matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.replace('light','dark')}}catch(e){}})()`

function RootComponent() {
  const { theme, analyticsToken, ga4Id } = Route.useLoaderData()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  const lang = isLocale(firstSegment) ? firstSegment : pathname.startsWith('/docs') ? 'zh' : defaultLocale
  const nonce = getNonce()
  return (
    <html lang={lang} className={theme} suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {siteLd().map((d) => (
          <JsonLd key={d['@id'] as string} data={d} />
        ))}
        <Outlet />
        <Scripts />
        {analyticsToken && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: analyticsToken })}
          />
        )}
        {ga4Id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} nonce={nonce} />
            <script
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:false});`,
              }}
            />
            <Ga4PageView />
          </>
        )}
      </body>
    </html>
  )
}

function Ga4PageView() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])
  return null
}
