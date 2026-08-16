import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/new-brand-trial-order')({
  ...afarerSingleRoute('/new-brand-trial-order'),
})