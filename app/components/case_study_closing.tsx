import Link from 'next/link'
import { localePath, type Locale } from 'app/lib/i18n'

export default function CaseStudyClosing({ locale = 'en' }: { locale?: Locale }) {
  return <section className="mx-auto max-w-[1040px] space-y-6 px-6 pb-20 pt-10 text-center md:px-10">
    <h2 className="text-xl font-bold">{locale === 'ja' ? '最後まで読んでいただき、ありがとうございます 🐈' : 'Thank you for taking the time to read this 🐈'}</h2>
    <Link href={localePath(locale)} className="inline-flex text-[#005f5d] underline underline-offset-4">{locale === 'ja' ? 'プロジェクト一覧に戻る' : 'Go Back to All Projects'} →</Link>
  </section>
}
