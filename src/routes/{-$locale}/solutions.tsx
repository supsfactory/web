import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { SiteNav } from '@/components/marketing/site-nav'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/solutions')({
  component: SolutionsLayout,
})

function SolutionsLayout() {
  const { theme, user } = rootRoute.useLoaderData()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <Outlet />
      <Footer theme={theme} />
    </div>
  )
}
