import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/news')({
  ...afarerSingleRoute('/news'),
})
