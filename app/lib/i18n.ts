export const locales = ['en', 'ja'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localePath(locale: Locale, path = '') {
  const normalizedPath = path === '/' ? '' : path
  return `/${locale}${normalizedPath}`
}

export const ui = {
  en: {
    design: 'Design',
    development: 'Dev',
    about: 'About',
    resume: 'Resume',
    moreAbout: 'More about me',
    viewCaseStudy: 'View case study',
    contact: 'Contact',
    contactText: 'Feel free to reach out to me at',
    homeHeading: 'Driving product growth by bridging UX, development, and real user insights.',
  },
  ja: {
    design: 'デザイン',
    development: '開発',
    about: '自己紹介',
    resume: '履歴書',
    moreAbout: '詳しいプロフィール',
    viewCaseStudy: 'ケーススタディを見る',
    contact: 'お問い合わせ',
    contactText: 'お気軽にご連絡ください：',
    homeHeading: 'ユーザーのニーズ、ビジネスゴール、開発をつなぎ、プロダクトの成長を推進します。',
  },
} as const
