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

export type WorkCategory = 'design' | 'development'
export type WorkDetailData = {
  slug: string
  title: string
  subtitle: string
  type: WorkCategory | WorkCategory[]
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
    type: ['design', 'development'],
    order: 2,
    publishedAt: '2026-05-01',
    heroImage:
      '/images/work/robotics-e-commerce.webp',
    heroVideo:
      '/videos/work/robotics-e-commerce.mp4',
    liveUrl: 'https://aero-bot.com/',
    overview: {
      background:
        'Norsat International was expanding beyond satellite communication products into robotics and drone solutions, requiring a new brand identity and digital experience tailored for government-level B2B customers in the agriculture industry.',
      challenge:
        'The challenge was to differentiate the new robotics division from Norsat\'s existing satellite business while establishing trust in a highly technical B2B market serving government and enterprise customers.',
      solution:
        'I led branding, brand strategy, UX/UI design, and Shopify front-end development using Liquid and JavaScript. I created a B2B-focused visual identity, defined go-to-market positioning, restructured Shopify data architecture for complex product navigation, and supported integrations with Windchill and Business Central to create a scalable platform for managing and exploring robotics products.',
    },
    details: {
      period: '2026 — ongoing',
      techStack: [
        'Figma',
        'Illustrator',
        'Shopify Liquid',
        'JavaScript',
        'Shopify Plus',
        'Shopify Metafields',
        'Windchill',
        'Business Central',
      ],
      company: 'Norsat International, inc.',
      role: 'Branding, UI/UX Lead & Front-end Developer, PDM',
      roleDescription:
        'Leading the brand identity, user experience, and Shopify Plus front-end development. Responsible for creating the B2B design system, structuring Shopify metafields to sync with Windchill and Business Central, and collaborating with cross-functional stakeholders on MVP priorities.',
      outcome:
        'In progress: Completed the branding and strategy foundation (logo, tagline, brand voice, marketing materials, and UI components) and the e-commerce website MVP. Currently working on website content strategy and expanding sales through digital marketing with the marketing and engineering teams.',
      team: 'Cross-functional',
      teamDetails:
        'Collaborating with product owners, and business stakeholders on MVP priorities and platform strategy',
    },
    features: [
      {
        media: [
          {
            type: 'image',
            src: '/images/work/aerobot-brand-guidelines.webp',
            alt: 'Aerobot Intelligence brand guidelines overview',
          },
        ],
        title: 'Branding',
        description:
          'The brand needed to communicate innovation and future-focused autonomous solutions while reinforcing credibility through official partnerships with major technology providers such as DJI and specialized training from experienced engineers.\n\nFor the colour palette, we used unsaturated green as the primary color. Instead of black—the default for many robotics and drone companies—we differentiated the brand from competitors. This palette maintains reliability for B2B customers, especially in government roles, while conveying a clean, innovative feel. We also validated colour choices for accessibility to support users with low vision.\n\nWhile building and syncing components in the design system, I created UI components quickly and expanded the system for the software development team and graphic designers to apply across product and marketing materials.\n\nFor the logo, we chose Michroma and Montserrat as our typeface pairing. Michroma introduces a futuristic feel without being overly flashy or technical, which fit our brand identity well. The symbol incorporates an "A" shape from the brand name and motifs inspired by robot and drone airframes.',
      },
      {
        media: [
          {
            type: 'image',
            src: '/images/work/strategy-1-robot.webp',
            alt: 'Strategy Foundation and Research',
          },
        ],
        title: 'Strategy',
        description:
          'I began with competitive analysis during the early brand strategy phase. To generate ideas, I interviewed the product owner, CEO, and product development team, and researched competitors and the existing Norsat website.\n\nThrough this work, I defined three strategic strengths:\n\n1. Air and ground capability — Competitors often offer only UAVs (drones) or ground robots, which limits clients tackling complex enterprise problems. We provide both air and ground products.\n\n2. Trusted global brand and stability — Norsat has 40 years of history with engineers who customize products for clients. We are an official DJI distributor, offering competitive pricing plus specialized service and training for DJI products.\n\n3. A solution company, not just a product seller — We help customers solve problems using robotics technology. For example, we organize the client\'s challenge, define goals, select products and accessories to match, deploy drones, analyze data, and transform raw data into structured insights.',
      },
      {
        media: [
          {
            type: 'image',
            src: '/images/work/ux-navigation-1-robot.webp',
            alt: 'UX Navigation Concept - Product Catalog & Mega Menu',
          },
          {
            type: 'image',
            src: '/images/work/ux-navigation-2-robot.webp',
            alt: 'UX Navigation Concept - Mobile Navigation & Filters',
          },
          {
            type: 'image',
            src: '/images/work/ux-navigation-3-robot.webp',
            alt: 'UX Navigation Concept - Accessory compatibility check',
          },
        ],
        title: 'UX Navigation Through Custom Feature Development',
        description:
          'I created a custom product hierarchy for categories and product models across the website. This structure was implemented on collection pages, product pages through a compatible products section that recommends accessories for specific products, and accessory product filters.\n\nThis improved product discoverability and reduced friction when users searched for specific brands or compatible items. For example, I developed a hierarchy such as Drone → DJI Products → DJI Product Lines, a structure that Shopify Plus did not support out of the box. I designed the information architecture, translated it into Shopify metafields, implemented the experience on the frontend, and collaborated with the product management team to establish data population and synchronization workflows. This improved the browsing experience and supported e-commerce growth.',
      },
      {
        media: [],
        title: 'Custom Shopify UI Components and Design System Development',
        description:
          'I developed custom Shopify UI components, including color themes and product card components, to improve content creation efficiency and maintain brand consistency.\n\nI created two variations of color schemes and card components, enabling designers and developers to build new content through Shopify’s editor without requiring extensive design knowledge. These components reduced repetitive development work and followed Shopify’s latest theme folder structure and architecture.\n\nAdditionally, I created a design system using AI-assisted design workflows with Claude, enabling both software and hardware teams at AeroBot Intelligence to adopt consistent frontend patterns and branding across products and digital experiences.',
      },
      {
        media: [
          {
            type: 'image',
            src: '/images/work/information-architecture-1.webp',
            alt: 'Information Architecture Map',
          },
        ],
        title: 'Information Architecture',
        description:
          'We decided to focus on product and service content because it directly connects to revenue. Initially, the PO and CEO wanted a single services page covering training and rental. However, competitive research showed that separating services, rental, and training was easier to navigate.\n\nWe also created resource pages (case studies, news), solution pages, and industry pages as lower-priority items for the first release. On the homepage, I included links to all major sections while keeping the layout clear and uncluttered.',
      },
    ],
    featured: true,
    tags: [
      'B2B',
      'Branding',
      'Shopify Plus',
      'E-commerce',
      'UX/UI Design',
      'Information Architecture',
      'JavaScript',
      'HTML/CSS',
    ],
    meta: 'Norsat International — ongoing',
  },
  {
    slug: 'sauna-booking-application',
    title: 'Sauna Booking Application',
    subtitle: 'Effortless booking and rewards motivate users',
    type: 'design',
    order: 6,
    publishedAt: '2026-07-01',
    heroImage: '/images/work/sauna_booking_application.webp',
    caseStudyUrl: 'https://kayofujii.studio.site/sauna_booking_application',
    overview: {
      background:
        'Designed a mobile-first, responsive sauna booking app featuring a smooth reservation flow and a gamified rewards system to encourage repeat bookings.',
      challenge:
        'The client wanted to remove the friction of phone-based reservations and manual payments while making the rewards program more visible and motivating across devices.',
      solution:
        'I focused on a simple booking flow, clear login and rescheduling support, and a more prominent rewards experience on the home page. I also collaborated closely with the client to keep the interface responsive across mobile, tablet, and desktop.',
    },
    details: {
      period: '1 person-month',
      techStack: ['Figma', 'Illustrator', 'UX/UI Design', 'Graphic Design', 'UX Research'],
      company: 'Moncho-KG',
      role: 'UX/UI Designer, Graphic Designer, UX Researcher',
      roleDescription:
        'Led the booking flow, rewards placement, and responsive design direction for a sauna reservation app built to reduce friction and encourage repeat use.',
      outcome:
        'The client gave positive feedback on the improved user flow, and the project received a 5/5 rating for quality, communication, and collaboration on the freelancing platform.',
      team: '2 members',
      teamDetails: 'Engineer x1, Product Designer (me)',
    },
    features: [],
    featured: true,
    tags: ['Mobile App', 'BtoC', 'Branding', 'UX/UI Design'],
    meta: 'Moncho-KG - 1 month',
    metricPrefix: 'Received',
    metricValue: '5/5 rating',
    metricSuffix: 'for quality, communication, and collaboration',
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
    order: 4,
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
    order: 5,
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
    order: 5,
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
  {
    slug: 'enterprise-design-system',
    title: 'Enterprise Design System',
    subtitle: 'Evolving a component library into a functional design system with Figma, Vue.js, and Storybook to streamline workflows and team collaboration',
    type: ['design', 'development'],
    order: 3,
    publishedAt: '2026-05-17',
    heroImage: '/images/work/enterprise-design-system.webp',
    caseStudyUrl:
      'https://www.designsystemscollective.com/how-we-built-a-functional-design-system-in-an-early-stage-product-team-78552b67d71a',
    overview: {
      background:
        'At an early-stage SaaS startup, the product team set out to establish a design system. Initially, frontend engineers built a component library using Storybook, but Figma components remained disconnected, developers struggled to understand when to reuse elements, and duplicate interfaces continued to appear across the platform.',
      challenge:
        'As the product scaled, simply having a component library proved insufficient. The team faced UI inconsistencies, redundant components, and excessive decision-making in repetitive workflows, highlighting the need to move beyond isolated elements and align team thinking around flexible patterns.',
      solution:
        "As both Product Designer and Software Engineer, I collaborated with designers and engineers to bridge Figma and Vue.js/Storybook. We established standard layout and workflow patterns, shifting the team's mindset from raw component creation to scalable pattern reuse, which dramatically reduced redundant work.",
    },
    details: {
      period: '2024',
      techStack: ['Vue.js', 'Storybook', 'Figma', 'JavaScript', 'CSS', 'Design Systems'],
      company: 'mediment, inc.',
      role: 'Product Designer & Software Engineer',
      roleDescription:
        'Developed and maintained reusable Vue.js components and Storybook documentation while establishing scalable UI patterns. Led the evolution of the design system by introducing layout and workflow patterns in Figma to align designer and developer workflows.',
      outcome:
        'Successfully bridged Figma and Vue.js components, establishing layout and workflow patterns that reduced UI inconsistency, minimized duplicated development effort, and aligned team decision-making.',
      team: 'Cross-functional',
      teamDetails: 'Product Designer (me), Frontend Engineers, Designers',
    },
    features: [
      {
        media: [],
        title: 'Stage 1 — Creating the First Design System',
        description:
          'Built a foundational component library shared between design and engineering, replacing duplicated UI elements with reusable Figma and Vue.js components (forms, buttons, inputs, modals).',
      },
      {
        media: [],
        title: 'Stage 2 — Flexible Component Evolution',
        description:
          'Established a collaborative review workflow to discuss component flexibility and reuse before writing code, shifting team focus from multiplying patterns to improving and extending existing components.',
      },
      {
        media: [],
        title: 'Stage 3 — Layout & Workflow Patterns',
        description:
          'Moved beyond isolated component libraries to define Layout Patterns (spacing, headings, card structures) and Workflow Patterns (multi-step user behaviors like HR emailing flows), streamlining operational decision-making.',
      },
    ],
    featured: true,
    tags: ['Design System', 'Vue.js', 'Storybook', 'Figma', 'SaaS', 'UX/UI Design'],
    meta: 'SaaS Startup — 2026',
  },
]


export function getWorkDetailBySlug(slug: string) {
  return workDetails.find((work) => work.slug === slug)
}

export function getWorkHref(work: WorkDetailData) {
  if (work.caseStudyUrl) return work.caseStudyUrl
  return `/work/${work.slug}`
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

export function getWorksByType(type: WorkCategory) {
  return workDetails.filter((work) =>
    Array.isArray(work.type) ? work.type.includes(type) : work.type === type,
  )
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
