import { createFileRoute } from '@tanstack/react-router'

/**
 * Docs 全文搜索（GET /api/search）——纯 server 路由。fumadocs/orama 依赖全部
 * 在 handler 内动态加载：路由定义会被 routeTree 静态 import，若顶层引入文档栈
 * 会把它拖进 client bundle 并进入全站 preload 图。
 */
export const Route = createFileRoute('/api/search')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const [{ createFromSource }, { createTokenizer }, { stopwords: mandarinStopwords }, { source }] =
          await Promise.all([
            import('fumadocs-core/search/server'),
            import('@orama/tokenizers/mandarin'),
            import('@orama/stopwords/mandarin'),
            import('@/features/docs/source'),
          ])
        // Docs are Chinese, so index/query with a Mandarin tokenizer — Orama's default
        // tokenizer splits on whitespace and can't segment CJK, so 中文 queries返回空.
        // `createFromSource` reads each page's compiled `structuredData` (bundled, not
        // filesystem — safe on workerd) and defers indexing.
        const server = createFromSource(source, {
          tokenizer: createTokenizer({ language: 'mandarin', stopWords: mandarinStopwords }),
          search: { threshold: 0, tolerance: 0 },
        })
        return server.GET(request)
      },
    },
  },
})
