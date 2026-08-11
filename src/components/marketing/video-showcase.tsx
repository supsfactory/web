/**
 * Video showcase block — a factory/brand video paired with a step or point
 * list. Used on the home page (brand launch) and /how-it-works (production).
 */
export function VideoShowcase({
  video,
  poster,
  badge,
  title,
  sub,
  points,
  flip = false,
}: {
  video: string
  poster: string
  badge: string
  title: string
  sub: string
  points: { t: string; d?: string }[]
  flip?: boolean
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
      <div className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="group relative overflow-hidden rounded-3xl border border-border-2 bg-bg-alt">
          <video
            controls
            preload="metadata"
            playsInline
            poster={poster}
            className="aspect-video w-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div>
          <span className="pill self-start border-primary/25! bg-soft! text-primary!">{badge}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight">{title}</h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-fg-2">{sub}</p>
          <ol className="mt-7 space-y-4">
            {points.map((p, i) => (
              <li key={p.t} className="flex gap-3.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-[13px] font-extrabold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold">{p.t}</p>
                  {p.d && <p className="mt-0.5 text-[13.5px] leading-relaxed text-fg-2">{p.d}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
