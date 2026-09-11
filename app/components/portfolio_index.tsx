import Link from 'next/link'
import { isExternalCaseStudy } from 'app/development/data'
import { getLocalizedWorks, localizeTag } from 'app/lib/localized-work'
import { localePath, type Locale, ui } from 'app/lib/i18n'
import Reveal from './reveal'

export default function PortfolioIndex({ locale, type }: { locale: Locale; type: 'design' | 'development' | 'all' }) {
  const copy = ui[locale]
  const works = getLocalizedWorks(locale)
    .filter((work) => type === 'all' ? work.featured : (Array.isArray(work.type) ? work.type.includes(type) : work.type === type))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return <main lang={locale} className="w-full bg-white text-[#282828]">
    <section className="w-full bg-white"><div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-6 py-16 text-left md:px-12 md:py-24 lg:px-[120px]">
      <div className="flex w-full min-w-0 max-w-[980px] flex-col items-start">
        <Reveal className="w-full">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[2.25rem] font-bold leading-[1.15] text-[#282828] md:text-[3rem] md:leading-[1.12]">{copy.homeHeading}</h1>
        </Reveal>
        <Reveal delay={150} className="mt-5 flex w-full flex-wrap items-center justify-start gap-5"><Link href={localePath(locale, '/about')} className="text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline">{copy.moreAbout}</Link><a href="https://www.linkedin.com/in/kayo-fujii/" className="text-[1.05rem] text-[rgba(40,40,40,0.8)] hover:underline">LinkedIn</a><a href="https://github.com/kayofujii" className="text-[1.05rem] text-[rgba(40,40,40,0.8)] hover:underline">GitHub</a></Reveal>
      </div>
    </div></section>
    <section className="w-full bg-[#f9f9f9]"><div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 md:px-12 md:py-24 lg:gap-20 lg:px-[120px]">
      {works.map((work, index) => { const href = work.caseStudyUrl ?? localePath(locale, `/work/${work.slug}`); const paragraphs = [work.overview.background, work.overview.challenge, work.overview.solution]; return <Reveal key={work.slug} delay={Math.min(index * 80, 320)} className="w-full"><article className="rounded-[24px] bg-white p-5 shadow-[0px_1px_5px_3px_rgba(63,88,87,0.03)] md:p-10"><div className="flex flex-col gap-8"><div className="max-w-[1120px] space-y-4"><h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.25rem] font-bold leading-[1.35] md:text-[2rem]">{work.subtitle}</h2>{work.meta && <p className="text-[1rem] text-[rgba(40,40,40,0.8)]">{work.meta}</p>}<div className="flex flex-wrap gap-3">{(work.tags ?? []).map((tag) => <span key={tag} className="rounded-full border border-[#c0c0c0] px-[13px] py-[8px] text-[.95rem] transition-colors duration-200 hover:border-[#282828] hover:bg-[#f2f2f2]">{localizeTag(tag, locale)}</span>)}</div><div className="space-y-7 py-2 text-[1rem] leading-7 text-[rgba(40,40,40,0.8)] md:text-[1.25rem] md:leading-9">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{locale === 'en' && <a href={href} target={isExternalCaseStudy(work) ? '_blank' : undefined} rel={isExternalCaseStudy(work) ? 'noreferrer' : undefined} className="group inline-flex items-center gap-1.5 text-[1.05rem] text-[#005f5d] hover:underline">{copy.viewCaseStudy}<span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span></a>}</div><a href={href} target={isExternalCaseStudy(work) ? '_blank' : undefined} rel={isExternalCaseStudy(work) ? 'noreferrer' : undefined} className="group block overflow-hidden rounded-[16px] bg-[#fafafa]">{work.heroVideo ? <video className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src={work.heroVideo} poster={work.heroImage} autoPlay muted loop playsInline preload="metadata" /> : <img src={work.heroImage} alt={work.title} className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />}</a></div></article></Reveal> })}
    </div></section>
  </main>
}
