import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/b2b-solutions-matrix')({
  ...afarerSingleRoute('/b2b-solutions-matrix'),
})
