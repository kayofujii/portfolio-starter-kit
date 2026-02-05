export type WorkDetailFeature = {
  image: string
  title: string
  description: string
}

export type WorkDetailData = {
  slug: string
  title: string
  subtitle: string
  publishedAt?: string
  heroImage: string
  overview: {
    background: string
    challenge: string
    solution: string
  }
  details: {
    period: string
    techStack: string[]
    company: string
    role: string
    roleDescription: string
    outcome: string[]
    team: string
    teamDetails: string
  }
  features: WorkDetailFeature[]
  nextProject: {
    image: string
    title: string
    description: string
    ctaLabel: string
    ctaHref: string
  }
}

export const workDetails: WorkDetailData[] = [
  {
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    subtitle: 'A comprehensive analytics platform for online retailers',
    publishedAt: '2024-01-12',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop',
    overview: {
      background:
        'As e-commerce continues to grow exponentially, small to medium-sized online retailers struggle to make sense of their data.',
      challenge:
        'Retailers were losing revenue due to poor inventory management, lack of customer insights, and inability to identify trends quickly.',
      solution:
        'I designed and developed an intuitive dashboard that transforms complex data into clear, actionable insights.',
    },
    details: {
      period: 'January 2023 - June 2023',
      techStack: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'D3.js',
        'Tailwind CSS',
      ],
      company: 'RetailTech Solutions',
      role: 'Lead Full-Stack Developer & UX Designer',
      roleDescription:
        'Responsible for end-to-end development, from user research and wireframing to backend architecture and frontend implementation.',
      outcome: [
        '• Optimized database queries to handle real-time data from 10,000+ products',
        '• Designed intuitive data visualizations for non-technical users',
        '• Implemented predictive algorithms with 87% accuracy',
        '• Created responsive design that works seamlessly on mobile devices',
      ],
      team: '4 members',
      teamDetails:
        '1 Lead Developer, 1 Backend Engineer, 1 Data Analyst, 1 Product Manager',
    },
    features: [
      {
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
        title: 'Main Dashboard Overview',
        description:
          'The central hub displays key metrics at a glance: revenue trends, top-selling products, inventory alerts, and customer insights.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop',
        title: 'Sales Analytics',
        description:
          'Interactive charts and graphs show sales performance over time, with drill-down capabilities by category and region.',
      },
    ],
    nextProject: {
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=700&fit=crop',
      title: 'Mobile Banking App Redesign',
      description:
        'A modern redesign of a mobile banking application focused on improving everyday financial tasks.',
      ctaLabel: 'View Next Project',
      ctaHref: '/work/mobile-banking-app-redesign',
    },
  },
]

export function getWorkDetailBySlug(slug: string) {
  return workDetails.find((work) => work.slug === slug)
}
