import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { getInquiryLogo } from '@/features/inquiry/inquiry.server'

/**
 * Stream a submitted inquiry logo from R2 for admins. R2 objects aren't public
 * by default, so this route is the read side. Logos contain customer brand
 * material — admin-gated (404 for everyone else).
 */
const handler = async ({ request }: { request: Request }) => {
  const { assertAdmin } = await import('@/features/admin/assert-admin.server')
  await assertAdmin()

  let id = ''
  try {
    id = decodeURIComponent(new URL(request.url).pathname.split('/').pop() ?? '')
  } catch {
    // 畸形百分号编码 → 404，而不是未捕获的 URIError 500
  }
  const object = id ? await getInquiryLogo(env.BUCKET, id) : null
  if (!object) return new Response('Not found', { status: 404 })

  const headers = new Headers()
  if (object.httpMetadata?.contentType) headers.set('Content-Type', object.httpMetadata.contentType)
  headers.set('ETag', object.httpEtag)
  headers.set('Cache-Control', 'private, max-age=60')
  // 上传的 logo 是原始用户内容：对服务端发的响应强制沙箱 + 禁所有默认加载源，
  // 防止以顶层文档打开恶意 SVG 时执行内联脚本（<img> 内嵌渲染本就不跑脚本）。
  headers.set('Content-Security-Policy', "default-src 'none'; sandbox")
  headers.set('X-Content-Type-Options', 'nosniff')
  return new Response(object.body, { headers })
}

export const Route = createFileRoute('/api/inquiry-logo/$')({
  server: { handlers: { GET: handler } },
})
