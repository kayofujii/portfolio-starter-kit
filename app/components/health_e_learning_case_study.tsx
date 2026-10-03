import type { Locale } from 'app/lib/i18n'
import { getCaseStudyContent } from 'app/lib/case-study-content'
import StudioCaseStudy from './studio_case_study'

export default function HealthELearningCaseStudy({ locale = 'en' }: { locale?: Locale }) {
  return <StudioCaseStudy content={getCaseStudyContent('health-e-learning')!} locale={locale} />
}
