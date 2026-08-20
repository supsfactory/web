import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/sup-compliance-by-market')({
  ...contentSingleRoute('/sup-compliance-by-market'),
})
