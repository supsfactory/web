/**
 * 默认 404 页（router 的 defaultNotFoundComponent）。
 * 可能渲染在 I18nProvider / locale 布局之外，故用 useLocation 推断 /es 前缀，
 * 渲染西语文案 + 普通 <a> 回首页（`/` 始终解析到默认语言；用普通 anchor
 * 避免 typed-route 约束，404 整页跳转可接受）。
 * React 19 会把 <title>/<meta> 提升到 <head>，SSR 即输出正确标题（此前
 * useEffect 只在客户端改 document.title，预渲染看到的是首页营销 title）。 */
import { useLocation } from '@tanstack/react-router'
import { isEsPath } from '@/features/i18n/locale'

export function NotFound() {
  const { pathname } = useLocation()
  const es = isEsPath(pathname)
  return (
    <>
      <title>{es ? 'Página no encontrada' : 'Page not found'} — SUPsfactory</title>
      <meta name="robots" content="noindex" />
      <main className="grid-bg flex min-h-screen flex-col items-center justify-center gap-[18px] p-8 text-center">
      <span className="kicker">// {es ? 'ruta no encontrada' : 'route not found'}</span>
      <div className="font-display text-[120px] font-bold leading-none tracking-[-4px] text-primary">404</div>
      <h1 className="font-display text-[28px] font-semibold tracking-[-0.6px]">
        {es ? 'Página no encontrada' : 'Page not found'}
      </h1>
      <p className="m-0 max-w-[30em] text-base leading-relaxed text-fg-2">
        {es
          ? 'Esta ruta nunca se publicó. Revisa la URL o vuelve a puerto seguro.'
          : 'This route never shipped. Check the URL or head back to safe harbor.'}
      </p>
      <a
        href={es ? '/es' : '/'}
        className="inline-flex h-13 items-center gap-2 rounded-[6px] bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        {es ? 'Volver al inicio' : 'Back to home'}
      </a>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href={es ? '/es/products' : '/products'} className="rounded-[6px] border border-border-2 px-5 py-2.5 text-sm font-semibold text-fg-2 transition-colors hover:border-primary/40 hover:text-primary">
          {es ? 'Explorar plataformas' : 'Browse platforms'}
        </a>
        <a href={es ? '/es/contact' : '/contact'} className="rounded-[6px] border border-border-2 px-5 py-2.5 text-sm font-semibold text-fg-2 transition-colors hover:border-primary/40 hover:text-primary">
          {es ? 'Contactar' : 'Contact us'}
        </a>
      </div>
      </main>
    </>
  )
}