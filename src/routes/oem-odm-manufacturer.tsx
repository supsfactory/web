import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/oem-odm-manufacturer')({
  ...afarerSingleRoute('/oem-odm-manufacturer'),
})
