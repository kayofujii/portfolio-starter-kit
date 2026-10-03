import workplaceStress from 'app/content/case-studies/workplace-stress-program-analysis.json'
import healthELearning from 'app/content/case-studies/health-e-learning.json'
import mindSpark from 'app/content/case-studies/mind-spark-academy.json'
import saunaBooking from 'app/content/case-studies/sauna-booking-application.json'

export type CaseStudyCopy = { en: string; ja: string }
export type CaseStudyImage = {
  type: 'image'
  src: string
  alt: CaseStudyCopy
  width: number
  height: number
}
export type CaseStudyBlock =
  | { type: 'paragraph' | 'heading'; text: CaseStudyCopy }
  | CaseStudyImage
  | { type: 'list'; items: CaseStudyCopy[] }
  | { type: 'details'; items: { label: CaseStudyCopy; value: CaseStudyCopy }[] }
  | { type: 'table'; headers: CaseStudyCopy[]; rows: CaseStudyCopy[][] }
  | { type: 'story'; role: CaseStudyCopy; goal: CaseStudyCopy; tasks: { title: CaseStudyCopy; items: CaseStudyCopy[] }[] }
  | { type: 'link'; text: CaseStudyCopy; href: string }
  | { type: 'embed'; src: string; title: CaseStudyCopy }

export type CaseStudyContent = {
  title: CaseStudyCopy
  subtitle?: CaseStudyCopy
  hero: CaseStudyImage
  sections: { title: CaseStudyCopy; blocks: CaseStudyBlock[] }[]
}

// Editable article content and locally stored figures, migrated from the Studio portfolio.
const caseStudies: Record<string, CaseStudyContent> = {
  'workplace-stress-program-analysis': workplaceStress as CaseStudyContent,
  'health-e-learning': healthELearning as CaseStudyContent,
  'mind-spark-academy': mindSpark as CaseStudyContent,
  'sauna-booking-application': saunaBooking as CaseStudyContent,
}

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return caseStudies[slug]
}
