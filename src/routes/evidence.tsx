import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'
import { AfarerCatchAll } from '@/features/content/catchall'

export const Route = createFileRoute('/evidence')({
  ...afarerSingleRoute('/evidence'),
  component: Page,
})

function Page() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}