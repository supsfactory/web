import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/inflatable-vs-hardboard')({
  ...afarerSingleRoute('/inflatable-vs-hardboard'),
})
