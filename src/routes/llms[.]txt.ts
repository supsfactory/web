import { createFileRoute } from '@tanstack/react-router'

// `/llms.txt` — LLM-friendly company facts card plus a full navigation index
// to every live page (see https://llmstxt.org). Index links are absolute URLs
// (per the spec) so LLMs can fetch pages directly. Derived sections share the
// sitemap rule: edge/legacy-301'd paths never appear as canonical URLs.
//
// The heavy data module (`llm.ts`, which pulls in the full product corpus) and
// the build-time `LLMS_TXT` blob are loaded via dynamic import so they never
// enter the client bundle — this route only ever executes server-side.
const handler = async () => {
  const [{ env }, { LLMS_TXT }, llm] = await Promise.all([
    import('@/lib/env'),
    import('@/product/llms-content'),
    import('@/features/site/llm'),
  ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  return new Response(
    LLMS_TXT +
      llm.llmAfarierIndex(origin) +
      llm.llmProductsIndex(origin) +
      llm.llmSolutionsIndex(origin) +
      llm.llmProjectsIndex(origin) +
      llm.llmKnowledgeIndex(origin) +
      llm.llmSpanishIndex(origin),
    { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } },
  )
}

export const Route = createFileRoute('/llms.txt')({
  server: { handlers: { GET: handler } },
})