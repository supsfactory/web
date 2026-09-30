import { ArrowRight, FileCode, Lightbulb, Tag, Ship } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, solve } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

// Only locale-neutral data lives here. Every visible string comes from the
// product layer via `solve`, so a translated page can never fall back to the
// English copy that used to be hardcoded in this table.
const MODE_ENTRIES = [
  { key: 'oem' as const, icon: FileCode, href: '/factory/oem-capability' },
  { key: 'odm' as const, icon: Lightbulb, href: '/odm-manufacturing' },
  { key: 'privateLabel' as const, icon: Tag, href: '/solutions/private-label-sup' },
  { key: 'commercial' as const, icon: Ship, href: '/solutions/resort-sup' },
]

export function CollaborationSelector() {
  const { locale } = useTranslation()
  const c = pick(solve, locale)
  const fl = useLocalizePath()

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 md:py-24">
      <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MODE_ENTRIES.map((mode, i) => {
          const Icon = mode.icon
          const item = c.items[i]
          return (
            <Reveal key={mode.key} delay={i * 80}>
              <div className="marine-card flex h-full flex-col p-6">
                <span className="icon-tile mb-4 bg-aqua/10! text-primary!">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-[16px] font-bold leading-snug text-primary">{item.short}</h3>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-fg-3">{item.buyerState}</p>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-fg-2">{item.body}</p>
                <a
                  href={fl(mode.href)}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors hover:text-sun"
                >
                  {item.ctaLabel} <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          )
        })}
      </div>
      <div className="mt-10 text-center">
        <a
          href={fl('/start-sup-project')}
          className="sun-grad inline-flex h-[48px] items-center gap-2 rounded-full px-8 text-[15px] font-bold shadow-[0_14px_34px_-10px_rgba(255,138,61,0.75)] transition-transform hover:-translate-y-0.5"
        >
          {c.cta} <ArrowRight size={17} />
        </a>
      </div>
    </section>
  )
}
