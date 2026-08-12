import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { getTurnstileSiteKey } from '@/features/auth/middleware'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, products, productsPage } from '@/features/site/content'
import { JsonLd, itemListLd } from '@/features/seo/jsonld'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { ProductsSection } from '@/components/marketing/products-section'
import { CatalogDownload } from '@/components/marketing/catalog-download'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/products')({
  validateSearch: (s: Record<string, unknown>): { platform?: string } => ({
    platform: typeof s.platform === 'string' ? s.platform : undefined,
  }),
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
      path: '/products',
      title: locale === 'es' ? 'Productos SUP | 10 series personalizables — SUPsfactory' : 'SUP Products | 10 Customizable Series — SUPsfactory',
      description:
        locale === 'es'
          ? 'Diez series de SUP probadas, de clásicos polivalentes a ediciones de diseño, cada una como plataforma de fabricación personalizable para marcas, resorts y clubes.'
          : 'Ten proven SUP series — from all-around classics to designer editions, each a customization-ready manufacturing platform for brands, resorts and clubs.',
    })
    return { meta, links }
  },
  component: ProductsPage,
})

function ProductsPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(productsPage, locale)
  const { turnstileSiteKey } = Route.useLoaderData()
  const { platform } = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />

      <ProductsSection
        heading={null}
        active={platform}
        onActiveChange={(key) =>
          navigate({
            search: (prev) => ({ ...prev, platform: key === 'all' ? undefined : key }),
            replace: true,
          })
        }
      />
      <JsonLd
        data={itemListLd(pick(products, locale).items.map((p) => ({ name: p.name, path: `/products/${p.slug}` })))}
      />

      {/* everything is customizable */}
      <section className="border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight md:text-3xl">{c.customTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14.5px] leading-relaxed text-fg-2">{c.customBody}</p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {c.customPoints.map((p) => (
              <li key={p} className="marine-card flex items-center gap-3 px-5 py-3.5">
                <Check size={16} className="shrink-0 text-primary" />
                <span className="text-[14px] font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CatalogDownload turnstileSiteKey={turnstileSiteKey} />

      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
