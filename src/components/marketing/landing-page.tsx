import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, Plus } from 'lucide-react'
import type { Landing } from '@/features/site/landings'
import { PageHero } from './section-head'
import { SectionHead } from './section-head'

/** Shared renderer for the SEO landing pages (see src/features/site/landings.ts). */
export function LandingPage({ landing }: { landing: Landing }) {
  return (
    <>
      <PageHero kicker={landing.kicker} title={landing.h1}>
        <div className="mt-7 flex max-w-2xl flex-col gap-4">
          {landing.intro.map((p, i) => (
            <p key={i} className="fg-dim text-[15.5px] leading-relaxed">{p}</p>
          ))}
        </div>
        <Link
          to="/{-$locale}/contact"
          className="sun-grad mt-8 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
        >
          {landing.ctaButton} <ArrowRight size={17} />
        </Link>
      </PageHero>

      {/* capability bullets */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
        <SectionHead kicker={landing.kicker} title={landing.ctaTitle} />
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {landing.bullets.map((b) => (
            <div key={b} className="marine-card flex items-center gap-3 px-5 py-4">
              <Check size={17} className="shrink-0 text-primary" />
              <span className="text-[14px] font-medium">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* landing FAQ */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-7 md:py-24">
          <SectionHead kicker="FAQ" title={landing.h1} />
          <div className="mt-10 flex flex-col gap-3">
            {landing.faqs.map((f) => (
              <details key={f.q} className="faq-row">
                <summary>
                  {f.q}
                  <Plus size={16} className="faq-icon shrink-0" />
                </summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* related paths */}
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 pb-16 pt-16 md:px-7">
        <span className="mr-2 text-[13px] font-semibold text-fg-3">{landing.kicker} ·</span>
        <Link to="/{-$locale}/solutions" className="text-[13px] font-medium text-primary hover:underline">Custom SUP Solutions</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/products" className="text-[13px] font-medium text-primary hover:underline">Products</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/who-we-serve" className="text-[13px] font-medium text-primary hover:underline">Who We Serve</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/custom-sup-manufacturing" className="text-[13px] font-medium text-primary hover:underline">Custom SUP Manufacturing</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/private-label-sup" className="text-[13px] font-medium text-primary hover:underline">Private Label SUP</Link>
      </nav>
    </>
  )
}
