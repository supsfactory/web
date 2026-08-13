import { createLazyFileRoute } from '@tanstack/react-router'
import { AfarerCatchAll } from '@/features/content/catchall'

export const Route = createLazyFileRoute('/$')({ component: CatchAll })

function CatchAll() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}
