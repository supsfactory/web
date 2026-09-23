import { ArrowRight, BadgeCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, factoryEvidence } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

const ICONS = [ShieldCheck, ClipboardCheck, BadgeCheck]

/** Home factory evidence band: independent proof links before the FAQ. */
export function FactoryEvidence() {
  const { locale } = useTranslation()
  const c = pick(factoryEvidence, locale)
  const fl = useLocalizePath()

  return (
    <section className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 md:py-24">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.href} delay={i * 80}>
                <a
                  href={fl(item.href)}
                  className="marine-card group flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="icon-tile mb-4 bg-aqua/10! text-primary!">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-[16px] font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-fg-2">{item.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors group-hover:text-sun">
                    {c.cta} <ArrowRight size={14} />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}