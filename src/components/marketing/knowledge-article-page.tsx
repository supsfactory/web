import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { KnowledgeArticle } from '@/features/site/knowledge'
import { useTranslation } from '@/features/i18n/provider'
import { PageHero } from './section-head'
import { JsonLd, articleLd } from '@/features/seo/jsonld'

/**
 * Article renderer for /knowledge/{slug}: intro + numbered sections + CTA,
 * with Article JSON-LD for question-style informational queries.
 */
export function KnowledgeArticlePage({ article }: { article: KnowledgeArticle }) {
  const { t } = useTranslation()

  return (
    <>
      <PageHero kicker={article.kicker} title={article.h1}>
        <p className="fg-dim mx-auto mt-6 max-w-2xl text-[15.5px] leading-relaxed">{article.intro}</p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7 md:py-16">
        <div className="space-y-12">
          {article.sections.map((s, i) => (
            <section key={s.title}>
              <h2 className="flex items-baseline gap-3 font-display text-[21px] font-bold leading-snug md:text-[23px]">
                <span className="bg-gradient-to-br from-primary to-aqua bg-clip-text font-display text-[17px] font-extrabold text-transparent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-3.5 text-[15px] leading-[1.75] text-fg-2">{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-bg-alt p-8 text-center md:p-10">
          <p className="kicker">{t('sup.knowledge.ctaKicker')}</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold">{t('sup.knowledge.ctaTitle')}</h2>
          <Link
            to="/{-$locale}/contact"
            className="sun-grad mt-7 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
          >
            {t('sup.projects.discuss')} <ArrowRight size={17} />
          </Link>
        </div>
      </article>

      <JsonLd
        data={articleLd({
          title: article.h1,
          description: article.metaDescription,
          path: `/knowledge/${article.slug}`,
        })}
      />
    </>
  )
}
