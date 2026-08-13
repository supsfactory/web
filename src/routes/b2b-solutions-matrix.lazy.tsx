import { createLazyFileRoute } from '@tanstack/react-router'
import { AfarerCatchAll } from '@/features/content/catchall'

export const Route = createLazyFileRoute('/b2b-solutions-matrix')({ component: Page })

function Page() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}
