import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, manufacturerPledge } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

/** Home manufacturer pledge band: factory operator, not a trading company. */
export function ManufacturerPledge() {
  const { locale } = useTranslation()
  const c = pick(manufacturerPledge, locale)
  const fl = useLocalizePath()

  return (
    <section className="border-b border-border bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 md:py-20">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <ul className="mt-12 grid list-none gap-4 md:grid-cols-3">
          {c.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 80} className="h-full">
              <div className="marine-card flex h-full flex-col p-6">
                <p className="font-display text-[17px] font-bold leading-snug">{it.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <a
            href={fl(c.verifyHref)}
            className="pill border-primary/30! bg-primary/10! text-primary! inline-flex items-center gap-1.5"
          >
            {c.verifyLabel} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}