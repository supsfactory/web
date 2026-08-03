import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'
import { AfarerCatchAll } from '@/features/content/catchall'

export const Route = createFileRoute('/maritime-safety-defense')({
  ...afarerSingleRoute('/maritime-safety-defense'),
  component: Page,
})

function Page() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}