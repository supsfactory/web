import { useTranslation } from '@/features/i18n/provider'
import { pick, products, type Product } from '@/features/site/content'
import { Reveal } from './reveal'

/** Single catalog card: real product photo with sku/price chips, then brand-book details. */
export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { locale } = useTranslation()
  const fl = (path: string): string => (locale === 'en' ? path : path === '/' ? '/es' : `/es${path}`)
  return (
    <a
      href={fl(`/products/${product.slug}`)}
      className="group block h-full"
      style={{ color: 'inherit' }}
    >
      <div className="marine-card flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 group-hover:-translate-y-1">
      <div className="zoom-img relative aspect-[4/3] overflow-hidden border-b border-border-2 bg-bg-alt">
        <img
          src={product.image}
          alt={product.name}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-fg-3 backdrop-blur">
            {product.sku}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-primary px-3 py-1 text-[12px] font-extrabold text-primary-foreground shadow-[var(--shadow-md)]">
          {product.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="pill self-start border-primary/25! bg-soft! text-primary!">{product.tagline}</span>
        <h3 className="mt-3.5 font-display text-[18px] font-bold">{product.name}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-fg-2">{product.desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.uses.map((u) => (
            <span key={u} className="pill">{u}</span>
          ))}
        </div>
        <p className="mt-4 border-t border-border pt-3.5 text-[12.5px] font-semibold text-fg-2">{product.specs}</p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-fg-3">{product.artwork}</p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[11.5px] font-bold uppercase tracking-wider text-fg-3">Recommended for:</span>
          {product.for.map((f) => (
            <span key={f} className="rounded-md bg-soft px-2 py-0.5 text-[12px] font-bold text-primary">
              {f}
            </span>
          ))}
        </div>
      </div>
      </div>
    </a>
  )
}

/** Products grid (catalog style) shared by home and /products (the page passes its own header). */
export function ProductsSection({ heading, limit }: { heading?: React.ReactNode; limit?: number }) {
  const { locale } = useTranslation()
  const c = pick(products, locale)
  const items = limit ? c.items.slice(0, limit) : c.items

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
      {heading ?? null}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <ProductCard product={p} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
