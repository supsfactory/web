import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/sup-oem-moq-lead-time')({
  ...contentSingleRoute('/sup-oem-moq-lead-time'),
})