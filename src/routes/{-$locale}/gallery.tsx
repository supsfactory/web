import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, galleryPage } from '@/features/site/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { GallerySection } from '@/components/marketing/gallery-section'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/gallery')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/gallery',
      title: locale === 'es' ? 'Galería de proyectos SUP | SUPsfactory' : 'Project Gallery | Custom SUP Projects — SUPsfactory',
      description:
        locale === 'es'
          ? 'Proyectos de fabricación de SUP de SUPsfactory para marcas, distribuidores, resorts y clubes: de los gráficos a las líneas de producción completas.'
          : 'Custom SUP manufacturing projects built by SUPsfactory for brands, distributors, resorts and clubs — from board graphics to full production lines.',
    })
    return { meta, links }
  },
  component: GalleryPage,
})

function GalleryPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(galleryPage, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <GallerySection heading={null} />

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center md:px-7">
        <p className="text-[15px] font-medium text-fg-2">{c.note}</p>
      </section>

      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
