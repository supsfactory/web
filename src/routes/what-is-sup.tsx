import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/what-is-sup')({
  ...afarerSingleRoute('/what-is-sup'),
})
