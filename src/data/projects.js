// Portfolio and case study content. Real, live projects are listed first;
// demo/concept projects follow and are clearly labelled as such (see
// `clientLabel` and `isDemo` below).

export const projectCategories = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ui-ux', label: 'UI/UX' },
  { key: 'saas', label: 'SaaS' },
  { key: 'ai', label: 'AI' },
  { key: 'ecommerce', label: 'E-commerce' },
];

export const projects = [
  // Real, live projects. `servicesDelivered`, `techStack` and the narrative
  // fields (challenge/research/strategy/etc.) are intentionally left out
  // here rather than guessed — CaseStudy.jsx and ProjectCard.jsx render
  // around missing fields instead of requiring them. Fill these in with
  // verified detail when available.
  {
    slug: 'nazcon-bd',
    title: 'Nazcon BD',
    industry: 'Construction Materials',
    country: 'Bangladesh',
    categories: ['web', 'ecommerce'],
    liveUrl: 'https://nazconbd.com/',
    image: '/projects/nazcon-bd.png',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'A construction materials and engineering company site showcasing admixtures, waterproofing systems and coatings, with a product catalogue and dealer network information.',
  },
  {
    slug: 'happy-home-tex',
    title: 'Happy Home Tex',
    industry: 'Home Textiles',
    country: 'Bangladesh',
    categories: ['web', 'ecommerce'],
    liveUrl: 'https://happyhometex.com/',
    image: '/projects/happy-home-tex.png',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'A home textiles e-commerce storefront offering handmade bedding, curtains and home décor, with nationwide cash-on-delivery across Bangladesh.',
  },
  {
    slug: 'fawz-cleaning-and-gardening',
    title: 'Fawz Cleaning and Gardening',
    industry: 'Cleaning & Facilities Services',
    country: 'Australia',
    categories: ['web'],
    liveUrl: 'https://fawzcleaningandgardening.com.au/',
    image: '/projects/fawz-cleaning-gardening.png',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'A cleaning, gardening and property-maintenance services site for residential and commercial clients across the Northern Territory, with an online quote request form.',
  },
  {
    slug: 'fly-gcc-international',
    title: 'Fly GCC International',
    industry: 'Travel & Visa Services',
    country: 'Bangladesh',
    categories: ['web', 'saas'],
    liveUrl: 'https://flygccint.com/',
    image: '/projects/flygccint.png',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'A travel agency booking platform offering flight and hotel search, tourist and work visa processing, Umrah packages, tour packages and transportation services.',
  },
  {
    slug: 'arntech',
    title: 'Arntech',
    industry: 'Software & Technology',
    categories: ['web', 'ui-ux'],
    liveUrl: 'https://arntech.netlify.app/',
    image: '/projects/arntech.png',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'A software development company portfolio site presenting web, mobile, cloud and design service capabilities.',
  },
  // Demo / concept projects below — explicitly labelled as such (see
  // `clientLabel` and `isDemo`). Replace with real, verified client work
  // (and remove `isDemo`) once available.
  {
    slug: 'saas-dashboard-for-a-fintech-startup',
    title: 'SaaS Dashboard for a Fintech Startup',
    industry: 'FinTech',
    categories: ['web', 'saas', 'ui-ux'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['UI/UX Design', 'Web Development', 'SaaS & CRM Development'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Figma'],
    summary:
      'A concept redesign of a financial analytics dashboard, focused on turning dense transaction data into decisions users could act on in seconds.',
    outcome:
      'Demo outcome: reduced the number of clicks needed to reach a key report from 6 to 2 in usability testing.',
    timeline: '10 weeks (concept timeline)',
    challenge:
      'Financial dashboards often bury the metrics that matter under tables and filters. The brief was to design an experience where the most important signals — cash flow, risk flags, pending approvals — surface immediately.',
    research:
      'We mapped the daily routines of three user personas (finance lead, analyst, approver) and identified that each needed a different default view of the same underlying data.',
    strategy:
      'Rather than one dashboard for all roles, we proposed role-aware views sharing a single design system, keeping engineering effort reasonable while improving relevance for each user.',
    designApproach:
      'Wireframes prioritised a card-based summary layer above detailed tables, with a consistent colour language for status (on track, attention needed, overdue).',
    developmentApproach:
      'Built as a component-driven React application with a typed data layer, so new report types could be added without restructuring the dashboard shell.',
    solution:
      'A modular dashboard shell with role-based default views, saved filters, and a notification centre for approvals — built on a reusable component library.',
    keyScreens: ['Executive summary view', 'Transaction explorer', 'Approval queue', 'Custom report builder'],
    relatedWork: ['saas-dashboard-for-a-fintech-startup', 'ai-business-assistant-for-customer-support', 'corporate-technology-website'],
  },
  {
    slug: 'e-commerce-platform-for-a-dtc-retailer',
    title: 'E-commerce Platform for a DTC Retailer',
    industry: 'E-commerce',
    categories: ['web', 'ecommerce', 'ui-ux'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['Web Development', 'CMS & E-Commerce Solutions', 'UI/UX Design'],
    techStack: ['Shopify', 'React', 'Node.js', 'Figma'],
    summary:
      'A concept storefront rebuild for a direct-to-consumer retailer, aimed at improving mobile checkout completion and giving the marketing team full content control.',
    outcome: 'Demo outcome: improved mobile checkout flow from 5 steps to 3 in prototype testing.',
    timeline: '8 weeks (concept timeline)',
    challenge:
      'The original storefront had a strong product catalogue but a checkout flow that lost mobile users at the payment step, and the content team relied on developers for basic updates.',
    research: 'Session recordings and a short user survey pointed to unclear shipping cost visibility as a top drop-off reason.',
    strategy: 'We proposed consolidating checkout into fewer, clearer steps and moving all campaign content into editable CMS blocks.',
    designApproach: 'Simplified checkout UI with upfront shipping estimates, and a component library for merchandising banners the marketing team could reuse.',
    developmentApproach: 'Implemented on Shopify with custom React storefront sections and a lightweight CMS layer for campaign pages.',
    solution: 'A redesigned storefront with a streamlined checkout, transparent shipping costs, and self-serve campaign page building.',
    keyScreens: ['Homepage', 'Product listing with filters', 'Streamlined checkout', 'Campaign page builder'],
    relatedWork: ['corporate-technology-website', 'saas-dashboard-for-a-fintech-startup', 'mobile-booking-app-for-hospitality'],
  },
  {
    slug: 'healthcare-patient-portal-concept',
    title: 'Healthcare Patient Portal Concept',
    industry: 'Healthcare',
    categories: ['web', 'ui-ux', 'saas'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['UI/UX Design', 'Web Development'],
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    summary:
      'A concept patient portal allowing appointment booking, secure messaging with clinicians, and access to visit summaries in one accessible interface.',
    outcome: 'Demo outcome: prototype tested with a WCAG-focused accessibility review with no critical issues found.',
    timeline: '12 weeks (concept timeline)',
    challenge:
      'Patient-facing healthcare tools need to work for a wide range of digital literacy and ability levels while still handling sensitive information responsibly.',
    research: 'We reviewed accessibility guidelines and common patient-portal usability complaints to define baseline requirements before designing.',
    strategy: 'Prioritised a small, clear set of actions per visit rather than a dense all-in-one dashboard.',
    designApproach: 'Large touch targets, plain-language labelling, and a high-contrast interface tested against WCAG 2.1 AA guidelines.',
    developmentApproach: 'Built with semantic HTML and accessible component patterns from the start, rather than retrofitted later.',
    solution: 'A patient portal concept with appointment booking, secure messaging, and visit summaries in an accessible interface.',
    keyScreens: ['Appointment booking', 'Secure messages', 'Visit summary', 'Account and consent settings'],
    relatedWork: ['ai-business-assistant-for-customer-support', 'saas-dashboard-for-a-fintech-startup', 'corporate-technology-website'],
  },
  {
    slug: 'ai-business-assistant-for-customer-support',
    title: 'AI Business Assistant for Customer Support',
    industry: 'SaaS',
    categories: ['ai', 'saas', 'web'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['AI-Powered Solutions', 'Web Development'],
    techStack: ['Node.js', 'React', 'OpenAI API', 'PostgreSQL'],
    summary:
      'A concept AI assistant that drafts responses to repetitive support tickets and hands off automatically when a query needs a human.',
    outcome: 'Demo outcome: in testing, drafted responses needed only light editing for around 6 in 10 common ticket types.',
    timeline: '9 weeks (concept timeline)',
    challenge:
      'Support teams often spend significant time on a small set of repeated questions, leaving less time for complex cases that need human judgement.',
    research: 'We categorised a sample ticket set to find which query types were both frequent and low-risk to automate.',
    strategy: 'Designed the assistant to draft rather than auto-send responses for anything outside a narrow, well-tested category.',
    designApproach: 'A simple review interface let support agents approve, edit or reject drafted replies in one click.',
    developmentApproach: 'Integrated an LLM API with a confidence threshold and logging layer to monitor draft quality over time.',
    solution: 'An assistant that drafts replies for common tickets, escalates uncertain cases, and logs outcomes for ongoing tuning.',
    keyScreens: ['Ticket queue with AI drafts', 'Draft review and edit view', 'Escalation handoff', 'Response quality log'],
    relatedWork: ['saas-dashboard-for-a-fintech-startup', 'healthcare-patient-portal-concept', 'mobile-booking-app-for-hospitality'],
  },
  {
    slug: 'mobile-booking-app-for-hospitality',
    title: 'Mobile Booking App for Hospitality',
    industry: 'Travel & Hospitality',
    categories: ['mobile', 'ui-ux'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['Mobile App Development', 'UI/UX Design'],
    techStack: ['Flutter', 'Firebase', 'REST APIs'],
    summary:
      'A concept cross-platform booking app for boutique hospitality venues, covering search, real-time availability and in-app booking management.',
    outcome: 'Demo outcome: prototype reduced the booking flow from 7 screens to 4 in usability testing.',
    timeline: '11 weeks (concept timeline)',
    challenge:
      'Smaller hospitality venues often rely on third-party booking platforms that limit branding and charge high commission fees.',
    research: 'We reviewed booking flows across major platforms to identify friction points worth avoiding in a first-party app.',
    strategy: 'Focused the MVP on search, availability and booking management, deferring loyalty and messaging features to a later phase.',
    designApproach: 'A visual style adaptable to different venue brands, with a booking flow condensed to essential steps only.',
    developmentApproach: 'Built in Flutter for a single codebase across iOS and Android, with Firebase handling real-time availability sync.',
    solution: 'A cross-platform booking app MVP with real-time availability, streamlined booking, and a venue-branded interface layer.',
    keyScreens: ['Venue search and filters', 'Room or service detail', 'Streamlined booking flow', 'Booking management'],
    relatedWork: ['ai-business-assistant-for-customer-support', 'e-commerce-platform-for-a-dtc-retailer', 'healthcare-patient-portal-concept'],
  },
  {
    slug: 'corporate-technology-website',
    title: 'Corporate Technology Website',
    industry: 'Professional Services',
    categories: ['web', 'ui-ux'],
    isDemo: true,
    clientLabel: 'Demo project — concept build',
    servicesDelivered: ['Web Development', 'Branding & Digital Strategy', 'UI/UX Design'],
    techStack: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
    summary:
      'A concept corporate website rebuild for a B2B technology consultancy, aimed at clearly explaining service offerings to international prospects.',
    outcome: 'Demo outcome: content model changes allowed the marketing team to publish new service pages without developer support.',
    timeline: '7 weeks (concept timeline)',
    challenge:
      'The original site described services in dense text with no clear structure, making it difficult for prospective clients to identify fit quickly.',
    research: 'Content audit and stakeholder interviews revealed overlapping service descriptions and unclear differentiation.',
    strategy: 'Restructured the service catalogue into a clear hierarchy with consistent templates for each offering.',
    designApproach: 'A modular design system with reusable section templates, allowing new service and case study pages without custom design work.',
    developmentApproach: 'Built on a headless CMS so the marketing team could manage content independently of the codebase.',
    solution: 'A restructured corporate site with a clear service hierarchy, reusable templates, and independent content management.',
    keyScreens: ['Homepage', 'Service overview and detail templates', 'Case study template', 'Contact and consultation page'],
    relatedWork: ['saas-dashboard-for-a-fintech-startup', 'e-commerce-platform-for-a-dtc-retailer', 'ai-business-assistant-for-customer-support'],
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export default projects;
