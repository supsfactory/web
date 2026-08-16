import { createFileRoute } from '@tanstack/react-router'
import { afarerSingleRoute } from '@/features/content/afarer-single'

export const Route = createFileRoute('/sup-oem-moq-lead-time')({
  ...afarerSingleRoute('/sup-oem-moq-lead-time'),
})