import { createFileRoute, notFound } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import type { ProjectData } from '@/product/projects'
import { ProjectPage } from '@/components/marketing/project-page'

export const Route = createFileRoute('/{-$locale}/projects/$slug')({
  loader: async ({ params }) => {
    const { locale, slug } = params as { locale?: string; slug: string }
    const l = (locale ?? 'en') as Locale
    const { getProject, relatedProjects } = await import('@/product/projects')
    const page = getProject(l, slug)
    if (!page) throw notFound()
    const origin = await getOrigin()
    return { origin, page, related: relatedProjects(page, l) }
  },
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const { locale } = params as { locale?: string; slug: string }
    const page: ProjectData | undefined = loaderData?.page
    if (!page) return {}
    const { meta, links } = localeHead({
      origin,
      locale: (locale ?? 'en') as Locale,
      path: `/projects/${page.slug}`,
      title: page.metaTitle,
      description: page.metaDescription,
    })
    return { meta, links }
  },
  component: ProjectDynamicPage,
})

function ProjectDynamicPage() {
  const { page, related } = Route.useLoaderData()
  if (!page) return null
  return <ProjectPage page={page} related={related} />
}