export type WorkDetailFeature = {
  images: string[]
  title: string
  description: string
}

export type WorkDetailData = {
  slug: string
  title: string
  subtitle: string
  order?: number
  publishedAt?: string
  heroImage: string
  heroVideo?: string
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
  nextProject?: {
    image: string
    title: string
    description: string
    ctaLabel: string
    ctaHref: string
  }
}

export const workDetails: WorkDetailData[] = [
  {
    slug: 'mattress-comparison',
    title: 'High-SEO Mattress Comparison Platform',
    subtitle: 'A comparison site that boosts traffic for a mattress e-commerce business',
    order: 1,
    publishedAt: '2026-01-15',
    heroImage:
      '/images/work/mattress_comparison.webp',
    heroVideo:
      'videos/work/mattress_comparison.mp4',
    overview: {
      background:
        'Plasmabed needed a mattress comparison website to increase organic traffic and drive sales for their main e-commerce store.',
      challenge:
        'Deliver a full-featured comparison site quickly while aligning stakeholder expectations and ensuring a clear, simple user experience.',
      solution:
        'I led end-to-end design and development, prioritizing a focused MVP and SEO-friendly structure to launch fast and grow traffic.',
    },
    details: {
      period: 'December 2025 - January 2026',
      techStack: [
        'JavaScript',
        'Ruby',
        'Ruby on Rails',
        'Tailwind CSS',
        'UX/UI',
        'Figma',
      ],
      company: 'Plasmabed',
      role: 'Lead Full-Stack Developer & UX Designer',
      roleDescription:
        'Led end-to-end development from database design and wireframes to implementation and launch.',
      outcome: [
        '• Launched an MVP in 3 weeks',
        '• Increased page views to the main e-commerce site',
        '• Built SEO-friendly category-based comparison pages',
        '• Aligned product scope with stakeholder goals and user experience',
      ],
      team: '3 members',
      teamDetails:
        'Lead Developer (me), CTO, Owner',
    },
    features: [
      {
        images:['/images/work/product_category.webp'],
        title: 'Product Category Ranking Logic',
        description:
          'Built ranking logic for each category using customer reviews and admin-provided data to surface top products.',
      },
      {
        images:
          ['/images/work/product_comparison.webp'],
        title: 'Product Comparison Pages',
        description:
          'Implemented a product comparison table using Rails many-to-many associations to enable side-by-side product comparisons and SEO-optimized pages using slug-based URLs instead of numeric IDs.',
      },
    ]
  },
  {
    slug: 'meeting-scheduling-app',
    title: 'Meeting Scheduling Feature for Doctors and Employees',
    subtitle: 'Secure scheduling built for occupational health consultations',
    order: 2,
    publishedAt: '2025-10-01',
    heroImage:
      '/images/work/meeting_scheduling_app.webp',
    heroVideo:
      '/videos/work/meeting_scheduling_app.mp4',
    overview: {
      background:
        'The client relied on Google Calendar, which lacked integration with their health management system and raised security concerns.',
      challenge:
        'Deliver a secure, integrated scheduling system that supports real-time availability and smooth booking within a two-month timeline.',
      solution:
        'I designed the database, built RESTful APIs with Django REST Framework, and implemented a Vue.js frontend for instant booking without page reloads.',
    },
    details: {
      period: '2 person-months',
      techStack: [
        'JavaScript',
        'Vue.js',
        'Python',
        'Django REST Framework',
      ],
      company: 'mediPhone, inc.',
      role: 'Full-stack Engineer',
      roleDescription:
        'Owned backend architecture and API design, and built the scheduling UI in Vue.js in collaboration with the PO and UI/UX designer.',
      outcome: [
        '• Delivered a secure, centralized scheduling feature within two months',
        '• Enabled instant time-slot booking without page reloads',
        '• Improved usability and received positive client feedback',
      ],
      team: '3 members',
      teamDetails: 'UI/UX Designer, PO, Full-stack Engineer (me)',
    },
    features: [
      {
        images:
          ['/images/work/real_time_availability.webp'],
        title: 'Real-Time Availability',
        description:
          'Users can view available time slots in real-time and book appointments instantly without page reloads. Built with Django REST API and Vue.js for a seamless, responsive booking experience.',
      },
      {
        images:
          ['/images/work/scheduling_system.webp'],
        title: 'Flexible Scheduling System',
        description:
          'HR teams can create customizable meeting schedules with support for both one-time appointments and recurring events (daily, weekly, monthly patterns). The intuitive interface eliminates scheduling complexity and reduces administrative overhead.',
      },
    ],
  },
  {
    slug: 'beazu-growth-ops',
    title: 'Beazu Wholesale E-commerce Growth & Maintenance',
    subtitle: 'SEO, UX, and site stability improvements for a jewelry wholesale store',
    order: 3,
    publishedAt: '2025-11-30',
    heroImage:
      '/images/work/beazu_growth_ops.webp',
    heroVideo:
      '/videos/work/beazu_growth_ops.mp4',
    overview: {
      background:
        'Key jewelry products were not ranking well in search results, while the e-commerce site also needed bug fixes and UX improvements to support growth.',
      challenge:
        'Increase organic visibility and sales while maintaining a stable production store and addressing critical bugs and feature requests.',
      solution:
        'I led SEO and UX improvements, prioritized and fixed critical PHP bugs, and customized WordPress themes to improve navigation and product discovery.',
    },
    details: {
      period: 'September 2025 - November 2025',
      techStack: [
        'PHP',
        'WordPress',
        'WooCommerce',
        'Javascript',
        'CSS',
        'UX/UI',
        'SEO',
      ],
      company: 'Beazu Wholesale',
      role: 'Full-stack Engineer',
      roleDescription:
        'Owned SEO/UX improvements and site maintenance, working with the owner and marketing representative.',
      outcome: [
        '• Increased organic traffic by 1.3x and sales by 1.5x',
        '• Fixed 10+ critical bugs and stabilized daily operations',
        '• Improved mobile navigation and cross-shopping via category CTAs',
        '• Delivered WordPress theme customizations for faster product discovery',
      ],
      team: '3 members',
      teamDetails: 'Full-stack Engineer (me), Owner, Marketing Representative',
    },
    features: [
      {
        images:
          ['/images/work/beazu_seo_categories.webp'],
        title: 'SEO-Optimized Category Pages',
        description:
          'Developed dedicated jewelry category pages with optimized meta tags, structured data, and keyword-rich content, resulting in increased organic search traffic and improved SEO rankings.',
      },
      {
        images:
          ['https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=1200&h=700&fit=crop'],
        title: 'Production Stability & Feature Development',
        description:
          'Successfully balanced bug resolution and feature delivery by fixing critical PHP issues while implementing stakeholder-requested functionality.',
      },
      {
        images:
          ['/images/work/beazu_flatsome_before.webp','/images/work/beazu_flatsome_after.webp'],
        title: 'Flatsome Theme Enhancements',
        description:
          'Customized the Flatsome WordPress theme to boost conversions and UX by adding strategic CTA buttons, enhancing mobile navigation with category quick-links, and using CSS and UX Builder for maintainable updates.',
      },
      {
        images:
          ['/images/work/beazu_growth_ops.webp'],
        title: 'Blocksy Theme Optimization for Wholesale',
        description:
          'Enhanced the Blocksy theme with a custom product variation interface and direct Add to Cart buttons, enabling wholesale customers to buy multiple products efficiently and reducing cart abandonment.',
      },
    ],
  },
]

export function getWorkDetailBySlug(slug: string) {
  return workDetails.find((work) => work.slug === slug)
}

export function getNextWorkByOrder(slug: string) {
  const sorted = workDetails
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const index = sorted.findIndex((work) => work.slug === slug)
  if (index === -1 || sorted.length <= 1) {
    return undefined
  }
  const nextIndex = (index + 1) % sorted.length
  return sorted[nextIndex]
}
