export type WorkDetailMedia =
  | {
      type: 'image'
      src: string
      alt?: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
    }

export type WorkDetailFeature = {
  media: WorkDetailMedia[]
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
  githubUrl?: string
  liveUrl?: string
  liveUrlPassword?: string
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
    slug: 'shichida-kids-visual-assets',
    title: 'Visual Assets for Early Childhood Education',
    subtitle: 'Marketing materials that supported the launch of a new early childhood education service',
    order: 7,
    publishedAt: '2026-03-03',
    heroImage:
      '/images/work/visual_assets_for_early_childhood_education.webp',
    overview: {
      background:
        'Shichida Kids Academy of Canada is an early childhood education service in Burnaby, focused on families with children aged 3 to 5.',
      challenge:
        'Communicate a right-brain and emotional-development learning approach in a way that feels trustworthy, warm, and easy for parents to understand across print and social channels.',
      solution:
        'I created a cohesive visual campaign including event posters and Instagram content, combining Canva and Adobe workflows with AI-assisted image generation using Gemini and ChatGPT.',
    },
    details: {
      period: '1 person-day',
      techStack: [
        'Canva',
        'Adobe Illustrator',
        'Adobe Creative Cloud',
        'Gemini',
        'ChatGPT',
      ],
      company: 'Shichida Kids Academy of Canada',
      role: 'Graphic Designer, Marketing Designer, Brand Designer',
      roleDescription:
        'Designed launch marketing assets and translated the service tone into a clear, parent-friendly visual system across posters and social posts.',
      outcome: [
        '• Supported launch communications with consistent, education-focused visual assets',
        '• Received positive stakeholder feedback from the CEO and educators',
        '• Contributed to over 30 participants during the initial launch phase',
      ],
      team: '3 members',
      teamDetails: 'CEO, Educators, Designer (me)',
    },
    features: [
      {
        media: [
          { type: 'image', src: '/images/work/science_fair_event_poster.webp' },
        ],
        title: 'Science Fair Event Poster',
        description:
          'Designed a science fair poster to promote logic puzzles, simple chemical experiments, and a free trial lesson for families exploring the academy.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/preschool_grand_opening%20_poster.webp' },
        ],
        title: 'Preschool Grand Opening Poster',
        description:
          'Created a grand opening poster with soft colors, playful imagery, and clear information to express a friendly yet academically focused preschool environment.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/instagram_feature_series.webp' },
        ],
        title: 'Instagram Feature Series',
        description:
          'Produced an Instagram set that highlights five core preschool features, using one signature color direction per topic to improve recognition and content scanning.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/cognitive_developmental_creening_post.webp' },
        ],
        title: 'Cognitive & Developmental Screening Post',
        description:
          'Designed an informative and approachable post using the brand orange palette, clear icons, and concise copy to explain the value of early cognitive and developmental screening.',
      },
    ],
  },
  {
    slug: 'shopify-wholesale-theme',
    title: 'Shopify Theme for Wholesale',
    subtitle: 'Ongoing personal work for a coffee shop with wholesale customers',
    order: 5,
    publishedAt: '2026-02-18',
    heroImage:
      '/images/work/shopify_wholesale_theme.webp',
    heroVideo:
      '/videos/work/shopify_wholesale_theme.mp4',
    liveUrl: 'https://development-20230885.myshopify.com/',
    liveUrlPassword: 'yahtsa',
    githubUrl: 'https://github.com/kayofujii/my-wholesale-store',
    overview: {
      background:
        'Merchants for wholesale often rely on free Shopify themes that are hard to scale for complex product options and wholesale ordering behavior.',
      challenge:
        'Reduce decision friction for retail shoppers while making bulk ordering fast for wholesale buyers without forcing users through multiple product pages.',
      solution:
        'I am building a conversion-focused Shopify theme approach a wholesale quick-order modal powered by Shopify Ajax cart APIs.',
    },
    details: {
      period: '3 days',
      techStack: [
        'Shopify Liquid',
        'HTML/CSS',
        'JavaScript',
        'React',
        'Storefront API',
        'Shopify Metafields',
        'Ajax API',
      ],
      company: 'Personal Project',
      role: 'Full-stack Shopify Developer',
      roleDescription:
        'Designing the data model and building theme components that improve product discovery, bulk purchasing, and local pickup clarity.',
      outcome: [
        '• Built a wholesale quick-order modal with variant selectors and bulk add-to-cart',
        '• Created custom homepage, product cards, and a wholesale application page based on branding and research.',
        '• Target impact: +15% add-to-cart rate and fewer support requests related to variant selection',
      ],
      team: '1 member',
      teamDetails: 'Full-stack Shopify developer (me)',
    },
    features: [
      {
        media: [
          { type: 'image', src: '/images/work/wholesale_quick_order.webp' },
        ],
        title: 'Wholesale Quick-Order Modal',
        description:
          'A lightweight add-to-cart modal that lets wholesale buyers select variants, set quantities, and add multiple SKUs in one action using Shopify /cart/add.js.',
      }
    ],
  },
  {
    slug: 'mattress-comparison',
    title: 'Mattress Comparison Website',
    subtitle: 'Led end-to-end design and development of a mattress comparison platform optimized for SEO, driving traffic and boosting sales for the company’s e-commerce business. Built with Ruby on Rails, JavaScript, Tailwind CSS, and Figma, delivering an MVP in just 3 weeks in collaboration with the founder and CTO.',
    order: 3,
    publishedAt: '2026-01-15',
    heroImage:
      '/images/work/mattress_comparison.webp',
    heroVideo:
      'videos/work/mattress_comparison.mp4',
    liveUrl: 'https://www.mintmattressreviews.ca/',
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
        media: [{ type: 'image', src: '/images/work/product_category.webp' }],
        title: 'Product Category Ranking Logic',
        description:
          'Built ranking logic for each category using customer reviews and admin-provided data to surface top products.',
      },
      {
        media: [{ type: 'image', src: '/images/work/product_comparison.webp' }],
        title: 'Product Comparison Pages',
        description:
          'Implemented a product comparison table using Rails many-to-many associations to enable side-by-side product comparisons and SEO-optimized pages using slug-based URLs instead of numeric IDs.',
      },
    ]
  },
  {
    slug: 'meeting-scheduling-app',
    title: 'Meeting Scheduling Feature for Doctors and Employees',
    subtitle: 'Implemented a meeting-scheduling feature for occupational health professionals and employees with health issues, meeting user needs within a two-month deadline through detailed requirements gathering and collaboration.',
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
        'TypeScript',
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
        media: [{ type: 'image', src: '/images/work/real_time_availability.webp' }],
        title: 'Real-Time Availability',
        description:
          'Users can view available time slots in real-time and book appointments instantly without page reloads. Built with Django REST API and Vue.js for a seamless, responsive booking experience.',
      },
      {
        media: [{ type: 'image', src: '/images/work/scheduling_system.webp' }],
        title: 'Flexible Scheduling System',
        description:
          'HR teams can create customizable meeting schedules with support for both one-time appointments and recurring events (daily, weekly, monthly patterns). The intuitive interface eliminates scheduling complexity and reduces administrative overhead.',
      },
    ],
  },
  {
    slug: 'occupational-health-consultation-tool',
    title: 'Occupational Health Consultation Tool',
    subtitle: 'This redesigned feature enabled occupational health professionals to conduct employee consultations more smoothly and without disruption, all in one place. It contributed to new contracts, resulting in a 4% increase in ARR.',
    order: 1,
    publishedAt: '2025-09-15',
    heroImage:
      '/images/work/occupational_health_consultation_tool.webp',
    heroVideo:
      '/videos/work/occupational_health_consultation_tool.mp4',
    overview: {
      background:
        'In Japan, employees with health issues are required to consult with occupational health professionals. mediment provides a consultation tool to support communication between professionals and employees while sharing health information with HR managers.',
      challenge:
        'Occupational health professionals had to switch between three separate pages during consultations, making it difficult to review documents and take notes efficiently in real time.',
      solution:
        'I redesigned the experience into a single-screen workflow inspired by familiar electronic medical record interfaces, making it easier to review employee health data, write consultation notes, and prepare reports in one place.',
    },
    details: {
      period: '1 person-month',
      techStack: [
        'Figma',
        'UX Research',
        'UX/UI Design',
        'Wireframing',
        'Prototyping',
      ],
      company: 'mediPhone, inc.',
      role: 'UX/UI Designer, UX Researcher',
      roleDescription:
        'Led user research, interaction design, and interface redesign for the consultation workflow, aligning the solution with occupational health professionals and internal stakeholders.',
      outcome: [
        '• Simplified consultation work by consolidating key tasks into a single screen',
        '• Received positive feedback from occupational health doctors and improved user satisfaction',
        '• Contributed to new contracts, resulting in a 4% increase in ARR',
      ],
      team: '4 members',
      teamDetails: 'Engineer x2, Project Owner x1, Product Designer (me)',
    },
    features: [
      {
        media: [
          { type: 'video', src: '/videos/work/occupational_health_consultation_tool.mp4' },
        ],
        title: 'Single-Screen Consultation Workflow',
        description:
          'The redesigned interface brought together document review, consultation note-taking, and reporting in one place so professionals could complete interviews without jumping across multiple screens.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/occupational_health_employee_data.webp' },
        ],
        title: 'Health Data Panel',
        description:
          'A dedicated health data area helped occupational health professionals review an employee’s current and historical condition at a glance while continuing to write notes during the session.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/occupational_health_consultation_reports.webp' },
        ],
        title: 'Consultation Notes and Opinion Reports',
        description:
          'The new layout supported both consultation records and opinion reports in the same workspace, making it easier for other professionals and labor managers to review outcomes after the interview.',
      },
    ],
  },
  {
    slug: 'beazu-growth-ops',
    title: 'Beazu Wholesale E-commerce Growth & Maintenance',
    subtitle: 'SEO, UX, and site stability improvements for a jewelry wholesale store',
    order: 4,
    publishedAt: '2025-11-30',
    heroImage:
      '/images/work/beazu_growth_ops.webp',
    heroVideo:
      '/videos/work/beazu_growth_ops.mp4',
    liveUrl: 'https://www.beazu.com/',
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
        media: [{ type: 'image', src: '/images/work/beazu_seo_categories.webp' }],
        title: 'SEO-Optimized Category Pages',
        description:
          'Developed dedicated jewelry category pages with optimized meta tags, structured data, and keyword-rich content, resulting in increased organic search traffic and improved SEO rankings.',
      },
      {
        media: [
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=1200&h=700&fit=crop',
          },
        ],
        title: 'Production Stability & Feature Development',
        description:
          'Successfully balanced bug resolution and feature delivery by fixing critical PHP issues while implementing stakeholder-requested functionality.',
      },
      {
        media: [
          { type: 'image', src: '/images/work/beazu_flatsome_before.webp' },
          { type: 'image', src: '/images/work/beazu_flatsome_after.webp' },
        ],
        title: 'Flatsome Theme Enhancements',
        description:
          'Customized the Flatsome WordPress theme to boost conversions and UX by adding strategic CTA buttons, enhancing mobile navigation with category quick-links, and using CSS and UX Builder for maintainable updates.',
      },
      {
        media: [{ type: 'image', src: '/images/work/beazu_growth_ops.webp' }],
        title: 'Blocksy Theme Optimization for Wholesale',
        description:
          'Enhanced the Blocksy theme with a custom product variation interface and direct Add to Cart buttons, enabling wholesale customers to buy multiple products efficiently and reducing cart abandonment.',
      },
    ],
  },
  {
    slug: 'mind-spark-academy',
    title: 'Mind Spark Academy Preschool Website',
    subtitle: 'Education-first brand and WordPress site that launched a new preschool in Canada',
    order: 5,
    publishedAt: '2025-08-15',
    heroImage:
      '/images/work/mind_spark.webp',
    heroVideo:
      '/videos/work/mind_spark.mp4',
    liveUrl: 'https://mindsparkacademycanada.com/',
    overview: {
      background:
        'A new preschool in Burnaby, BC needed to launch quickly and differentiate from traditional daycares.',
      challenge:
        'Translate a complex educational philosophy into a clear value proposition while building trust for first-time families.',
      solution:
        'I led discovery, created a playful-yet-premium brand system, and built a responsive WordPress site that guided parents to register.',
    },
    details: {
      period: '1 person-week',
      techStack: [
        'Figma',
        'WordPress',
        'Elementor',
        'HTML/CSS',
        'SEO',
        'Google Analytics',
      ],
      company: 'Mind Spark Academy',
      role: 'UX/UI Designer, Brand Strategist, WordPress Developer',
      roleDescription:
        'Owned brand strategy, UI design, and WordPress implementation from discovery to launch.',
      outcome: [
        '• Generated 10 registrations for the first information session within one week of launch',
        '• Established a premium, education-first brand in a competitive market',
        '• Delivered a responsive site with clear IA and family-focused messaging',
      ],
      team: '2 members',
      teamDetails:
        'CEO, Designer & Developer (me)',
    },
    features: [
      {
        media: [{ type: 'image', src: '/images/work/mind_spark_responsive.webp' }],
        title: 'Responsive WordPress Build',
        description:
          'Designed and launched a mobile-first WordPress site with Elementor, clear IA, and conversion-focused CTAs.',
      }
    ],
    nextProject: {
      image: '/images/work/mind_spark_hero.svg',
      title: 'Visit the live website',
      description: 'Mind Spark Academy, Burnaby, BC',
      ctaLabel: 'Open Website',
      ctaHref: 'https://mindsparkacademycanada.com/',
    },
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
