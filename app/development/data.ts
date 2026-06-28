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
  type: 'design' | 'development'
  order?: number
  publishedAt?: string
  heroImage: string
  heroVideo?: string
  caseStudyUrl?: string
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
    outcome: string
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
  featured?: boolean
  tags?: string[]
  meta?: string
  metricPrefix?: string
  metricValue?: string
  metricSuffix?: string
}

export const workDetails: WorkDetailData[] = [
  {
    slug: 'robotics-b2b-commerce',
    title: 'B2B E-commerce & Branding for Robotics & Drone Solutions',
    subtitle:
      'Leading brand identity, UI/UX design, and front-end implementation for a new Shopify Plus store as Norsat expands into robotics and drones',
    type: 'design',
    order: 5,
    publishedAt: '2026-05-01',
    heroImage:
      '/images/work/robotics-e-commerce.webp',
    heroVideo:
      '/videos/work/robotics-e-commerce.mp4',
    overview: {
      background:
        'Norsat International is transforming its product line to include robotics and drones alongside satellite products. Because satellites and robotics serve different industries and buyers, the company is building a new branding and website.',
      challenge:
        'The new brand needed to target government-level B2B customers, primarily in the agriculture industry, and differentiate itself by highlighting autonomous air and ground solutions officially supported by DJI, as well as specialized training from seasoned engineers. This required a cohesive visual identity that felt innovative and futuristic yet reliable, alongside a complex website that restructures Shopify data to seamlessly sync with product lifecycle systems like Windchill and Business Central ERP.',
      solution:
        "I am leading the branding, UI/UX design, and front-end implementation using Shopify Liquid and JavaScript. I created a branding system with a muted green, gray, and white color palette tailored for B2B trust, and designed a custom logo based on the letter 'A' that suggests a robot's body with soft shapes. In addition, I restructured the Shopify data architecture to sync with Windchill and Business Central, creating an intuitive navigation flow that allows users to easily explore the advanced product lineup.",
    },
    details: {
      period: '2026 — ongoing',
      techStack: [
        'Branding',
        'Shopify Liquid',
        'JavaScript',
        'Shopify Plus',
        'Shopify Metafields',
        'Windchill',
        'Business Central',
        'UX/UI Design',
        'Information Architecture',
      ],
      company: 'Norsat International',
      role: 'Branding, UI/UX Lead & Front-end Developer, PDM',
      roleDescription:
        'Leading the brand identity, user experience, and Shopify Plus front-end development. Responsible for creating the B2B design system, structuring Shopify metafields to sync with Windchill and Business Central, and collaborating with cross-functional stakeholders on MVP priorities.',
      outcome:
        'In progress: establishing a scalable Shopify system and B2B brand direction for robotics and drone solutions ahead of MVP launch.',
      team: 'Cross-functional',
      teamDetails:
        'Collaborating with product owners, and business stakeholders on MVP priorities and platform strategy',
    },
    features: [],
    featured: false,
    tags: [
      'B2B',
      'Branding',
      'Shopify Plus',
      'E-commerce',
      'UX/UI Design',
      'Information Architecture',
    ],
    meta: 'Norsat International — ongoing',
  },
  {
    slug: 'occupational-health-consultation-tool',
    title: 'Occupational Health Consultation Tool',
    subtitle: 'Redesigned a consultation tool for time-constrained doctors, reducing workflow friction and improving usability',
    type: 'design',
    order: 1,
    publishedAt: '2025-09-15',
    heroImage:
      '/images/work/occupational_health_consultation_tool.webp',
    heroVideo:
      '/videos/work/occupational_health_consultation_tool.mp4',
    caseStudyUrl:
      'https://kayofujii.studio.site/occupational_health_consultation_tool',
    overview: {
      background:
        'The occupational health consultation tool was a core feature of mediment, used by doctors to conduct employee consultations and collaborate with HR. However, users reported frustration because they had to navigate multiple pages during short 15-minute sessions.',
      challenge:
        'Through user interviews, I identified that excessive page switching was disrupting consultation flow. I redesigned the experience to support a workflow-centered interface, enabling doctors to take notes while accessing all necessary patient information in one place.',
      solution:
        'This reduced cognitive load and streamlined consultations, leading to positive user feedback. The improved experience contributed to new contracts and a 4% increase in ARR.',
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
      outcome:
        'Simplified consultation work by consolidating key tasks into a single screen, received positive feedback from occupational health doctors, and contributed to new contracts resulting in a 4% increase in ARR.',
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
    featured: true,
    tags: ["SaaS", "User Research", "Redesign", "Design Leadership"],
    meta: "mediPhone, inc. - 1 month",
    metricValue: "4%",
    metricSuffix: "increase in ARR",
  },
  {
    slug: 'workplace-stress-program-analysis',
    title: 'Analytics Tool for a Workplace Stress Screening Program',
    subtitle: 'Redesigned a workplace stress analysis tool to improve clarity and prevent client churn',
    type: 'design',
    order: 2,
    publishedAt: '2025-09-01',
    heroImage: '/images/work/workplace_stress_hero.webp',
    heroVideo:
      '/videos/work/workplace_stress.mp4',
    caseStudyUrl:
      'https://kayofujii.studio.site/workplace_stress_program_analysis',
    overview: {
      background:
        'The Workplace Stress Screening Analysis Tool allowed HR managers to assess group-level stress, but poor usability created enough concern that three major clients were considering cancellation.',
      challenge:
        'Through user research and interviews with specialists and stakeholders, I identified three key improvements and enhanced the design. The redesign clarified analytical information, made the interface easier to scan, and improved the reporting workflow.',
      solution:
        'The updated experience addressed client concerns, improved trust in the product, and helped retain all three clients.',
    },
    details: {
      period: '2 person-months',
      techStack: ['Figma', 'UX Research', 'Information Architecture', 'UI Design'],
      company: 'mediPhone, inc.',
      role: 'UX/UI Design, UX Research',
      roleDescription:
        'Led problem framing, stakeholder interviews, and interface redesign work to make analytics outputs easier for clients to interpret and trust.',
      outcome:
        'Improved usability and addressed key client concerns, helped prevent the cancellation of 3 major clients, and increased interest from prospective clients after they reviewed the new design.',
      team: '5 members',
      teamDetails: 'Engineer x1, Project Owner x1, Outside Domain Specialist x1, Customer Success Representative x1, Product Designer (me)',
    },
    features: [],
    featured: true,
    tags: ["SaaS", "User Research", "Redesign", "Design Leadership"],
    meta: "mediPhone, inc. - 2 months",
    metricPrefix: "Prevent the cancellation of",
    metricValue: "3 major clients",
  },
  {
    slug: 'health-e-learning',
    title: 'Employee Health E-Learning Feature',
    subtitle: 'Designed and launched an e-learning feature to enable scalable employee health education and drive upsell growth',
    type: 'design',
    order: 3,
    publishedAt: '2025-08-20',
    heroImage: '/images/work/health_e_learning.webp',
    caseStudyUrl: 'https://kayofujii.studio.site/health_e_learning',
    overview: {
      background:
        'The product needed a scalable way to help companies educate employees about health topics without relying only on one-to-one support.',
      challenge:
        'I designed an approachable e-learning experience with a clear information structure, course participation flow, and visuals that made the feature easier to understand for both employees and buyers.',
      solution:
        'The feature supported scalable education while also helping the team position the product for upsell conversations.',
    },
    details: {
      period: '2 person-months',
      techStack: ['Figma', 'UX/UI Design', 'User Flows', 'Prototyping'],
      company: 'mediPhone, inc.',
      role: 'Product Designer',
      roleDescription:
        'Owned feature UX and interface direction for an e-learning experience built to scale employee education across client organizations.',
      outcome:
        'Enabled scalable employee health education, created a clearer learning workflow for users, and helped position the feature for upsell growth.',
      team: 'Cross-functional product team',
      teamDetails: 'Product owner, engineers, designer (me)',
    },
    features: [],
    featured: true,
    tags: ["SaaS", "Feature Design", "Health Tech", "Growth"],
    meta: "mediPhone, inc. - 2 months",
    metricValue: "2x",
    metricSuffix: "increase in feature interest",
  },
  {
    slug: 'mind-spark-academy',
    title: 'Mind Spark Academy Preschool Website',
    subtitle: 'Launched a preschool website from scratch, translating a complex educational philosophy into a clear brand and driving early registrations',
    type: 'design',
    order: 4,
    publishedAt: '2025-08-15',
    heroImage:
      '/images/work/mind_spark.webp',
    heroVideo:
      '/videos/work/mind_spark.mp4',
    caseStudyUrl: 'https://kayofujii.studio.site/new-preschool-website',
    liveUrl: 'https://mindsparkacademycanada.com/',
    overview: {
      background:
        "A new preschool entering a competitive market needed to quickly attract its first families. The founder's vision combining brain science, Japanese values, and global learning was compelling but difficult to explain clearly.",
      challenge:
        'I led the project end-to-end, from brand strategy to design and development. Through discovery sessions, I distilled the vision into four core pillars and translated them into a clear value proposition and intuitive website structure.',
      solution:
        'Within one week of launch, the website generated 10 registrations for the first information session, validating strong market interest and enabling early customer acquisition.',
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
      outcome:
        'Generated 10 registrations for the first information session within one week of launch, established a premium education-first brand in a competitive market, and delivered a responsive site with clear IA and family-focused messaging.',
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
    featured: true,
    tags: ["Education", "Brand Strategy", "WordPress", "Web Design"],
    meta: "Mind Spark Academy - 1 week",
    metricPrefix: "Generated",
    metricValue: "10 registrations",
    metricSuffix: "in one week",
  },
  {
    slug: 'mattress-comparison',
    title: 'Mattress Comparison Website',
    subtitle: 'Increased eCommerce sales by simplifying mattress comparison and highlighting product quality',
    type: 'development',
    order: 6,
    publishedAt: '2026-01-15',
    heroImage:
      '/images/work/mattress_comparison.webp',
    heroVideo:
      'videos/work/mattress_comparison.mp4',
    liveUrl: 'https://www.mintmattressreviews.ca/',
    overview: {
      background:
        'Plasmabed needed a way to increase organic traffic and drive sales while clearly differentiating its products from competitors. Customers struggled to understand product differences and quality, leading to hesitation during purchase decisions.',
      challenge:
        'Through user research and stakeholder interviews, I identified that customers needed a clearer way to compare key product attributes. I designed and developed a comparison-focused MVP that made differences easy to understand.',
      solution:
        'By aligning requirements quickly and collaborating closely with stakeholders, I delivered the MVP in just 3 weeks. This enabled faster market entry, improved product clarity, and contributed to increased eCommerce sales.',
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
      outcome:
        'Launched an MVP in 3 weeks, increased page views to the main e-commerce site, built SEO-friendly category-based comparison pages, and aligned product scope with stakeholder goals and user experience.',
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
    ],
    featured: false,
    tags: ["B2C", "User Research", "Zero to One", "Web Design & Development"],
    meta: "Plasmabed - 3 weeks",
    metricPrefix: "Designed and developed an MVP in just",
    metricValue: "3 weeks",
  },
  {
    slug: 'meeting-scheduling-app',
    title: 'Meeting Scheduling Feature for Doctors and Employees',
    subtitle: 'Implemented a meeting-scheduling feature for occupational health professionals and employees with health issues, meeting user needs within a two-month deadline through detailed requirements gathering and collaboration.',
    type: 'development',
    order: 5,
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
      outcome:
        'Delivered a secure, centralized scheduling feature within two months, enabled instant time-slot booking without page reloads, and improved usability with positive client feedback.',
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
    slug: 'beazu-growth-ops',
    title: 'Beazu Wholesale E-commerce Growth & Maintenance',
    subtitle: 'SEO, UX, and site stability improvements for a jewelry wholesale store',
    type: 'development',
    order: 7,
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
      outcome:
        'Increased organic traffic by 1.3x and sales by 1.5x, fixed 10+ critical bugs to stabilize daily operations, improved mobile navigation and cross-shopping via category CTAs, and delivered WordPress theme customizations for faster product discovery.',
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
]

export function getWorkDetailBySlug(slug: string) {
  return workDetails.find((work) => work.slug === slug)
}

export function getWorkHref(work: WorkDetailData) {
  if (work.caseStudyUrl) return work.caseStudyUrl
  const prefix = work.type === 'design' ? 'design' : 'work_details'
  return `/${prefix}/${work.slug}`
}

export function getWorkDetailHref(work: WorkDetailData) {
  const prefix = work.type === 'design' ? 'design' : 'work_details'
  return `/${prefix}/${work.slug}`
}

/** Link to a project section on the homepage (hash anchor). */
export function getHomeAnchorHref(work: WorkDetailData) {
  return `/#${work.slug}`
}

/** Link to a project section on the /development index (hash anchor). */
export function getWorkAnchorHref(work: WorkDetailData) {
  return `/development#${work.slug}`
}

export function isExternalCaseStudy(work: WorkDetailData) {
  return Boolean(work.caseStudyUrl)
}

export function getWorksByType(type: 'design' | 'development') {
  return workDetails.filter((work) => work.type === type)
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
