import type { Locale } from 'app/lib/i18n'
import type { CaseStudyBlock, CaseStudyContent, CaseStudyImage } from 'app/lib/case-study-content'
import CaseStudyClosing from './case_study_closing'

function Figure({ image, locale, hero = false }: { image: CaseStudyImage; locale: Locale; hero?: boolean }) {
  return <figure className="overflow-hidden rounded-xl bg-[#f9f9f9]">
    <img
      src={image.src}
      alt={image.alt[locale]}
      width={image.width}
      height={image.height}
      loading={hero ? 'eager' : 'lazy'}
      fetchPriority={hero ? 'high' : undefined}
      className="mx-auto h-auto w-full"
    />
  </figure>
}

function Block({ block, locale }: { block: CaseStudyBlock; locale: Locale }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-base leading-[1.8] md:text-lg">{block.text[locale]}</p>
    case 'heading':
      return <h3 className="pt-4 text-xl font-bold leading-relaxed text-[#161d1c]">{block.text[locale]}</h3>
    case 'image':
      return <Figure image={block} locale={locale} />
    case 'list':
      return <ul className="list-disc space-y-3 pl-6 text-base leading-[1.8] md:text-lg">
        {block.items.map((item, index) => <li key={index}>{item[locale]}</li>)}
      </ul>
    case 'details':
      return <dl className="grid gap-6 border-t border-[#f0eeee] pt-8 md:grid-cols-2">
        {block.items.map((item, index) => <div key={index} className="space-y-2">
          <dt className="text-lg font-bold">{item.label[locale]}</dt>
          <dd className="text-base leading-7">{item.value[locale]}</dd>
        </div>)}
      </dl>
    case 'table':
      return <div className="overflow-x-auto rounded-xl border border-[#dce8e4]" role="region" aria-label={locale === 'ja' ? '競合比較' : 'Competitive comparison'} tabIndex={0}>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-7 md:text-base">
          <caption className="sr-only">{locale === 'ja' ? 'プロジェクト当時に実施した競合比較' : 'Competitive audit conducted during the project'}</caption>
          <thead className="bg-[#eff7f3] text-[#005f5d]"><tr>{block.headers.map((header, index) => <th key={index} scope="col" className="p-4">{header[locale]}</th>)}</tr></thead>
          <tbody>{block.rows.map((row, index) => <tr key={index} className="border-t border-[#dce8e4]">
            {row.map((cell, cellIndex) => cellIndex === 0
              ? <th key={cellIndex} scope="row" className="p-4 align-top">{cell[locale]}</th>
              : <td key={cellIndex} className="p-4 align-top">{cell[locale]}</td>)}
          </tr>)}</tbody>
        </table>
      </div>
    case 'story':
      return <article className="space-y-6 rounded-xl bg-[#eff7f3] p-6 md:p-8">
        <h4 className="text-xl font-bold text-[#005f5d]">{block.role[locale]}</h4>
        <p className="text-base leading-7">{block.goal[locale]}</p>
        <div className="grid gap-6 md:grid-cols-2">{block.tasks.map((task, index) => <div key={index} className="space-y-3">
          <h5 className="font-bold">{task.title[locale]}</h5>
          <ol className="list-decimal space-y-2 pl-5 text-base leading-7">{task.items.map((item, itemIndex) => <li key={itemIndex}>{item[locale]}</li>)}</ol>
        </div>)}</div>
      </article>
    case 'link':
      return <a href={block.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit text-base text-[#005f5d] underline underline-offset-4 md:text-lg">{block.text[locale]} ↗</a>
    case 'embed':
      return <iframe src={block.src} title={block.title[locale]} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen className="aspect-video w-full rounded-xl border-0" />
  }
}

export default function StudioCaseStudy({ content, locale = 'en' }: { content: CaseStudyContent; locale?: Locale }) {
  return <main lang={locale} className="w-full bg-white text-[#333333]">
    <section className="mx-auto w-full max-w-[1440px] space-y-10 px-6 pb-6 pt-12 md:px-10 md:pt-16">
      <div className="mx-auto max-w-[980px] space-y-4 text-center">
        <h1 className="text-[2rem] font-bold leading-[1.4] md:text-[2.5rem]">{content.title[locale]}</h1>
        {content.subtitle && <p className="text-lg leading-relaxed">{content.subtitle[locale]}</p>}
      </div>
      <Figure image={content.hero} locale={locale} hero />
    </section>
    {content.sections.map((section, index) => <section key={index} className="mx-auto w-full max-w-[1040px] space-y-8 px-6 py-12 md:px-10 md:py-16">
      <h2 className="pb-2 text-center text-[1.75rem] font-bold text-[#006a68]">{section.title[locale]}</h2>
      {section.blocks.map((block, blockIndex) => <Block key={blockIndex} block={block} locale={locale} />)}
    </section>)}
    <CaseStudyClosing locale={locale} />
  </main>
}
