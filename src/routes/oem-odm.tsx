import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/oem-odm')({
  ...afarerSingleRoute('/oem-odm'),
})
