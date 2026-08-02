import { Link } from '@tanstack/react-router'
import { ArrowRight, Rocket, Hotel, Users, CalendarDays } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { pick, serve, type Segment } from '@/features/site/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

const ICONS = [Rocket, Hotel, Users, CalendarDays]

function segmentRoute(slug: string) {
  switch (slug) {
    case 'sup-startup-brands':
      return '/{-$locale}/sup-startup-brands'
    case 'sup-for-resorts':
      return '/{-$locale}/sup-for-resorts'
    case 'sup-for-clubs':
      return '/{-$locale}/sup-for-clubs'
    default:
      return '/{-$locale}/contact'
  }
}

function SegmentScene({ seg, index }: { seg: Segment; index: number }) {
  const Icon = ICONS[index % ICONS.length]
  return (
    <div className="zoom-img relative h-44 overflow-hidden" aria-hidden="true">
      <img src={seg.image} alt="" loading="lazy" className="h-full w-full object-cover" />
      <span className="absolute inset-0 bg-gradient-to-t from-[#063a5c]/70 via-[#0077b6]/25 to-transparent" />
      {/* deco rings */}
      <span className="absolute -right-10 -top-14 h-44 w-44 rounded-full border-[14px] border-white/10" />
      <span className="absolute -right-2 -top-8 h-28 w-28 rounded-full border-8 border-white/10" />
      {/* icon tile */}
      <span className="absolute left-7 top-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur">
        <Icon size={26} />
      </span>
      {/* water line */}
      <svg className="absolute bottom-0 left-0 w-full text-white/25" viewBox="0 0 480 48" preserveAspectRatio="none">
        <path d="M0 48h480V26c-80 12-160 12-240 0S80 14 0 26Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-full text-white/35" viewBox="0 0 480 32" preserveAspectRatio="none">
        <path d="M0 32h480V20c-90 8-180 8-270 0S90 12 0 20Z" fill="currentColor" />
      </svg>
    </div>
  )
}

/** Who we serve: four customer segments as large 2×2 image cards. Shared by the home page and /who-we-serve. */
export function WhoWeServe() {
  const { locale } = useTranslation()
  const c = pick(serve, locale)

  return (
    <section className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.segments.map((seg, i) => (
            <Reveal key={seg.slug} delay={i * 80}>
              <Link
                to={segmentRoute(seg.slug)}
                className="marine-card group flex h-full flex-col overflow-hidden p-0"
              >
                <SegmentScene seg={seg} index={i} />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[20px] font-bold">{seg.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-fg-2">{seg.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {seg.points.slice(0, 3).map((p) => (
                      <li key={p} className="pill">{p}</li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
                    {seg.cta}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
