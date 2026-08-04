import { createFileRoute } from '@tanstack/react-router'
import { LLMS_TXT } from '@/features/site/llms-content'

// `/llms.txt` — LLM-friendly company facts card (see https://llmstxt.org).
const handler = () =>
  new Response(LLMS_TXT, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })

export const Route = createFileRoute('/llms.txt')({
  server: { handlers: { GET: handler } },
})
