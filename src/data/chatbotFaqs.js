// Chatbot FAQ knowledge base. Mirrors the shape a future
// GET /api/chatbot/faqs response (and an admin-panel FAQ manager) would use —
// see src/services/chatbotService.js -> fetchChatbotFaqs().
//
// Field reference:
//   id                 stable slug, safe to use as a React key
//   question / answer  displayed content — keep answers consistent with the
//                       matching page on the site (Services, Process, About…)
//   category           'company' | 'services' | 'planning' | 'technical'
//   keywords           lowercase terms used for keyword matching in
//                       src/utils/chatbotEngine.js
//   relatedServiceSlug slug into src/data/services.js, or null
//   relatedPageUrl     route to link to from the chat answer, or null
//   suggestedFollowUps question strings offered as quick follow-ups
//   displayOrder       admin-managed ordering
//   isActive           soft toggle instead of deleting content
//   createdAt/updatedAt ISO placeholders for the future admin panel

const PLACEHOLDER_TIMESTAMP = '2026-01-01T00:00:00.000Z';

const base = (overrides) => ({
  isActive: true,
  createdAt: PLACEHOLDER_TIMESTAMP,
  updatedAt: PLACEHOLDER_TIMESTAMP,
  relatedServiceSlug: null,
  relatedPageUrl: null,
  suggestedFollowUps: [],
  ...overrides,
});

export const chatbotFaqs = [
  // ---- company ---------------------------------------------------------
  base({
    id: 'company-what-is-digiinsafe',
    question: 'What is Digiinsaf?',
    answer:
      'Digiinsaf is an Estonia-based digital product development and technology studio. We help startups and businesses design, build and launch websites, applications and AI-powered digital products.',
    category: 'company',
    keywords: ['what is digiinsafe', 'digiinsafe', 'company', 'who are you'],
    relatedPageUrl: '/about',
    suggestedFollowUps: ['Where is Digiinsaf based?', 'What services does Digiinsaf provide?'],
    displayOrder: 1,
  }),
  base({
    id: 'company-where-based',
    question: 'Where is Digiinsaf based?',
    answer:
      'Digiinsaf is based in Tallinn, Estonia, and works with clients across Europe and internationally.',
    category: 'company',
    keywords: ['where based', 'location', 'estonia', 'office', 'tallinn'],
    relatedPageUrl: '/about',
    suggestedFollowUps: ['Does Digiinsaf work with international clients?'],
    displayOrder: 2,
  }),
  base({
    id: 'company-international-clients',
    question: 'Does Digiinsaf work with international clients?',
    answer:
      'Yes. While Digiinsaf is based in Estonia, we work with startups and businesses across Europe and internationally, collaborating remotely with clear communication routines.',
    category: 'company',
    keywords: ['international', 'outside estonia', 'overseas', 'remote clients'],
    relatedPageUrl: '/about',
    displayOrder: 3,
  }),
  base({
    id: 'company-work-with-startups',
    question: 'Does Digiinsaf work with startups?',
    answer:
      'Yes. Startups and founders are a core part of who we work with, from early product discovery through to MVP build and post-launch iteration.',
    category: 'company',
    keywords: ['startups', 'founders', 'early stage'],
    relatedPageUrl: '/about',
    suggestedFollowUps: ['Can you build an MVP?'],
    displayOrder: 4,
  }),
  base({
    id: 'company-sign-nda',
    question: 'Can Digiinsaf sign an NDA?',
    answer:
      'Yes. If your project involves confidential information, Digiinsaf can review and sign a mutual NDA before a detailed discussion begins.',
    category: 'company',
    keywords: ['nda', 'non-disclosure', 'confidential', 'confidentiality'],
    relatedPageUrl: '/contact',
    displayOrder: 5,
  }),
  base({
    id: 'company-contact',
    question: 'How can I contact Digiinsaf?',
    answer:
      'You can reach the team through the contact and quote form on this site, or by email. I can also collect your details here and pass them on.',
    category: 'company',
    keywords: ['contact', 'email', 'reach you', 'get in touch'],
    relatedPageUrl: '/contact',
    suggestedFollowUps: ['How do I start a project?'],
    displayOrder: 6,
  }),

  // ---- services ----------------------------------------------------------
  base({
    id: 'services-what-services',
    question: 'What services does Digiinsaf provide?',
    answer:
      'Digiinsaf provides UI/UX design, custom website development, web application development, mobile app development, SaaS and CRM development, AI integration and automation, CMS and low-code development, e-commerce development, branding and digital strategy, and cloud deployment, maintenance and technical support.',
    category: 'services',
    keywords: ['services', 'what do you do', 'offer'],
    relatedPageUrl: '/services',
    displayOrder: 10,
  }),
  base({
    id: 'services-uiux-figma',
    question: 'Do you design UI/UX in Figma?',
    answer:
      'Yes. UI/UX design, including wireframes and interactive prototypes, is done in Figma so you can review and comment before development starts.',
    category: 'services',
    keywords: ['figma', 'ui/ux', 'ux design', 'wireframes', 'prototype', 'provide ui/ux design', 'do you provide ui/ux'],
    relatedServiceSlug: 'ui-ux-design',
    relatedPageUrl: '/services/ui-ux-design',
    displayOrder: 11,
  }),
  base({
    id: 'services-frontend-and-backend',
    question: 'Can you develop both frontend and backend?',
    answer:
      'Yes. Our team covers both frontend and backend development, so a project can move from interface to a fully working product without switching partners.',
    category: 'services',
    keywords: ['frontend and backend', 'front end and back end', 'full stack', 'fullstack'],
    relatedServiceSlug: 'web-development',
    relatedPageUrl: '/services/web-development',
    displayOrder: 12,
  }),
  base({
    id: 'services-custom-websites',
    question: 'Do you develop custom websites?',
    answer:
      'Yes. We build custom corporate websites, landing pages and business portals tailored to your brand rather than relying on generic templates.',
    category: 'services',
    keywords: ['custom website', 'website development', 'corporate website'],
    relatedServiceSlug: 'web-development',
    relatedPageUrl: '/services/web-development',
    displayOrder: 12,
  }),
  base({
    id: 'services-web-applications',
    question: 'Do you develop web applications?',
    answer:
      'Yes. Beyond marketing websites, we build custom web applications, dashboards and business tools with the backend and integrations they need.',
    category: 'services',
    keywords: ['web application', 'web app', 'custom application'],
    relatedServiceSlug: 'web-development',
    relatedPageUrl: '/services/web-development',
    displayOrder: 13,
  }),
  base({
    id: 'services-mobile-apps',
    question: 'Do you build mobile applications?',
    answer:
      'Yes. We build cross-platform mobile apps with Flutter, covering iOS and Android from a single codebase, from MVP through to full release.',
    category: 'services',
    keywords: ['mobile app', 'ios', 'android', 'flutter'],
    relatedServiceSlug: 'mobile-app-development',
    relatedPageUrl: '/services/mobile-app-development',
    displayOrder: 14,
  }),
  base({
    id: 'services-saas-platforms',
    question: 'Do you develop SaaS platforms?',
    answer:
      'Yes. We build multi-tenant SaaS platforms with role-based access, subscription billing and analytics dashboards designed to scale.',
    category: 'services',
    keywords: ['saas', 'multi-tenant', 'subscription platform'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 15,
  }),
  base({
    id: 'services-crm-systems',
    question: 'Do you develop CRM systems?',
    answer:
      'Yes. We build CRM systems with role-based permissions and workflow management tailored to how your team actually works.',
    category: 'services',
    keywords: ['crm', 'customer relationship management'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 16,
  }),
  base({
    id: 'services-ai-integration',
    question: 'Can you integrate AI into a website or application?',
    answer:
      'Yes. We integrate AI chatbots, content automation, recommendation systems and machine learning or data analytics features where they solve a real workflow problem.',
    category: 'services',
    keywords: ['ai', 'artificial intelligence', 'chatbot', 'machine learning', 'automation'],
    relatedServiceSlug: 'ai-powered-solutions',
    relatedPageUrl: '/services/ai-powered-solutions',
    displayOrder: 17,
  }),
  base({
    id: 'services-ecommerce',
    question: 'Do you develop e-commerce platforms?',
    answer:
      'Yes. We build and customise e-commerce storefronts, covering catalogue, checkout, payments and inventory setup.',
    category: 'services',
    keywords: ['e-commerce', 'ecommerce', 'online store', 'shop'],
    relatedServiceSlug: 'cms-ecommerce-solutions',
    relatedPageUrl: '/services/cms-ecommerce-solutions',
    displayOrder: 18,
  }),
  base({
    id: 'services-wordpress',
    question: 'Do you work with WordPress?',
    answer:
      'Yes. WordPress is one of the CMS platforms we build and customise on, depending on your content and team needs.',
    category: 'services',
    keywords: ['wordpress'],
    relatedServiceSlug: 'cms-ecommerce-solutions',
    relatedPageUrl: '/services/cms-ecommerce-solutions',
    displayOrder: 19,
  }),
  base({
    id: 'services-shopify',
    question: 'Do you work with Shopify?',
    answer:
      'Yes. We build and customise Shopify storefronts for direct-to-consumer and small to mid-sized retail brands.',
    category: 'services',
    keywords: ['shopify'],
    relatedServiceSlug: 'cms-ecommerce-solutions',
    relatedPageUrl: '/services/cms-ecommerce-solutions',
    displayOrder: 20,
  }),
  base({
    id: 'services-webflow',
    question: 'Do you work with Webflow?',
    answer:
      'Yes. Webflow is a good fit for content-heavy marketing sites that need visual, no-code editing — we design and build on it when it suits the project.',
    category: 'services',
    keywords: ['webflow'],
    relatedServiceSlug: 'cms-ecommerce-solutions',
    relatedPageUrl: '/services/cms-ecommerce-solutions',
    displayOrder: 21,
  }),
  base({
    id: 'services-redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We regularly redesign existing websites, working to preserve your SEO rankings and content while improving design and usability.',
    category: 'services',
    keywords: ['redesign', 'existing website', 'revamp', 'website redesign'],
    relatedServiceSlug: 'web-development',
    relatedPageUrl: '/services/web-development',
    displayOrder: 22,
  }),
  base({
    id: 'services-figma-to-react',
    question: 'Can you convert a Figma design into React?',
    answer:
      'Yes. If you already have an approved Figma design, we can build it out as a responsive React (or Next.js) frontend.',
    category: 'services',
    keywords: ['figma to react', 'convert design', 'figma to code'],
    relatedServiceSlug: 'web-development',
    relatedPageUrl: '/services/web-development',
    displayOrder: 23,
  }),
  base({
    id: 'services-third-party-apis',
    question: 'Can you integrate third-party APIs?',
    answer:
      'Yes. We regularly integrate payment providers, CRMs, analytics tools, AI APIs and other third-party services into client projects.',
    category: 'services',
    keywords: ['api integration', 'third-party', 'third party api'],
    relatedPageUrl: '/services',
    displayOrder: 24,
  }),
  base({
    id: 'services-admin-dashboards',
    question: 'Do you create admin dashboards?',
    answer:
      'Yes. Admin and analytics dashboards are a standard part of our SaaS and CRM development work, built around the decisions your team actually needs to make.',
    category: 'services',
    keywords: ['admin dashboard', 'analytics dashboard', 'back office'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 25,
  }),
  base({
    id: 'services-cloud-deployment',
    question: 'Do you provide cloud deployment?',
    answer:
      'Yes. We set up cloud hosting, domain and SSL configuration and CI/CD pipelines so releases are repeatable rather than manual.',
    category: 'services',
    keywords: ['cloud deployment', 'hosting', 'ci/cd', 'aws'],
    relatedServiceSlug: 'cloud-deployment-maintenance',
    relatedPageUrl: '/services/cloud-deployment-maintenance',
    displayOrder: 26,
  }),
  base({
    id: 'services-maintenance',
    question: 'Do you provide maintenance?',
    answer:
      'Yes. We offer ongoing maintenance plans covering monitoring, updates, bug fixes and small enhancements after your product goes live.',
    category: 'services',
    keywords: ['maintenance', 'support plan', 'post-launch support'],
    relatedServiceSlug: 'cloud-deployment-maintenance',
    relatedPageUrl: '/services/cloud-deployment-maintenance',
    displayOrder: 27,
  }),

  // ---- project planning ---------------------------------------------------
  base({
    id: 'planning-how-to-start',
    question: 'How do I start a project?',
    answer:
      'The easiest way is to share a few details about your project here or through the quote form, so the team can review it and follow up with next steps.',
    category: 'planning',
    keywords: ['start a project', 'get started', 'begin project'],
    relatedPageUrl: '/contact',
    suggestedFollowUps: ['What information do you need from me?'],
    displayOrder: 30,
  }),
  base({
    id: 'planning-information-needed',
    question: 'What information do you need from me?',
    answer:
      'Generally: your project goals, a short description, required features, any brand assets or reference sites, your budget range and timeline. We ask for these one at a time, not all at once.',
    category: 'planning',
    keywords: ['what information', 'requirements', 'what do you need'],
    relatedPageUrl: '/process',
    displayOrder: 31,
  }),
  base({
    id: 'planning-refine-idea',
    question: 'Can you help refine my project idea?',
    answer:
      'Yes. Our discovery and strategy stage exists exactly for this — turning a rough idea into a scoped, prioritised plan before design or development starts.',
    category: 'planning',
    keywords: ['refine idea', 'not sure what i need', 'help me plan'],
    relatedPageUrl: '/process',
    displayOrder: 32,
  }),
  base({
    id: 'planning-mvp',
    question: 'Can you build an MVP?',
    answer:
      'Yes. We regularly scope MVPs that focus on the smallest feature set needed to validate a product with real users, with a clear path to expand afterward.',
    category: 'planning',
    keywords: ['mvp', 'minimum viable product'],
    relatedPageUrl: '/process',
    displayOrder: 33,
  }),
  base({
    id: 'planning-phases',
    question: 'Can development be completed in phases?',
    answer:
      'Yes. Many clients prefer to complete design, frontend and backend as separate milestones, each with its own review and approval point.',
    category: 'planning',
    keywords: ['phases', 'milestones', 'in stages'],
    relatedPageUrl: '/process',
    displayOrder: 34,
  }),
  base({
    id: 'planning-technologies',
    question: 'What technologies do you use?',
    answer:
      'Depending on the project, we typically work with React, Next.js, Node.js, Laravel, Python, Flutter, PostgreSQL, MongoDB, AWS, Figma, Shopify and Webflow.',
    category: 'planning',
    keywords: ['technologies', 'tech stack', 'programming languages'],
    relatedPageUrl: '/about',
    displayOrder: 35,
  }),
  base({
    id: 'planning-timeline',
    question: 'How long does a project usually take?',
    answer:
      'It depends on scope — a focused MVP or marketing site can take a few weeks, while a full SaaS platform can take several months. Share your project details and the team can give you a realistic estimate.',
    category: 'planning',
    keywords: ['how long', 'timeline', 'duration', 'how much time'],
    relatedPageUrl: '/process',
    displayOrder: 36,
  }),
  base({
    id: 'planning-cost',
    question: 'How much does a project cost?',
    answer:
      'Project cost and delivery time depend on the required features, design complexity, integrations and overall scope. Share a few details about your project, and the Digiinsaf team can prepare a suitable estimate.',
    category: 'planning',
    keywords: ['cost', 'price', 'pricing', 'how much', 'budget'],
    relatedPageUrl: '/contact',
    suggestedFollowUps: ['How do I start a project?'],
    displayOrder: 37,
  }),
  base({
    id: 'planning-existing-design',
    question: 'Can you work with my existing design?',
    answer:
      'Yes. We can develop from an existing design system or Figma file, or start from your current codebase for redesign and feature work.',
    category: 'planning',
    keywords: ['existing design', 'have a design already'],
    relatedPageUrl: '/services/ui-ux-design',
    displayOrder: 38,
  }),
  base({
    id: 'planning-existing-codebase',
    question: 'Can you work with an existing codebase?',
    answer:
      'Yes. We regularly take over or extend existing codebases — we review the current setup first to scope the work accurately.',
    category: 'planning',
    keywords: ['existing codebase', 'existing project', 'take over project'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 39,
  }),
  base({
    id: 'planning-source-code',
    question: 'Will I receive the source code?',
    answer:
      'Yes. Source-code handover is a standard part of our delivery process, along with repository access.',
    category: 'planning',
    keywords: ['source code', 'own the code', 'code ownership'],
    relatedPageUrl: '/process',
    displayOrder: 40,
  }),
  base({
    id: 'planning-documentation',
    question: 'Will I receive project documentation?',
    answer:
      'Yes. Technical documentation is included as part of launch and handover, so your team (or ours) can maintain the product afterward.',
    category: 'planning',
    keywords: ['documentation', 'docs'],
    relatedPageUrl: '/process',
    displayOrder: 41,
  }),
  base({
    id: 'planning-updates',
    question: 'How will I receive project updates?',
    answer:
      'You receive regular progress updates and review sessions at agreed milestones throughout the project, not just at the final delivery.',
    category: 'planning',
    keywords: ['project updates', 'progress updates', 'status updates'],
    relatedPageUrl: '/process',
    displayOrder: 42,
  }),
  base({
    id: 'planning-revisions',
    question: 'How many revisions are included?',
    answer:
      'Revision rounds are agreed per project during scoping and included in your proposal — there is no fixed default number, so this is confirmed with you upfront rather than assumed.',
    category: 'planning',
    keywords: ['revisions', 'how many changes', 'unlimited revisions'],
    relatedPageUrl: '/process',
    displayOrder: 43,
  }),
  base({
    id: 'planning-after-launch',
    question: 'What happens after the website is launched?',
    answer:
      'After launch you receive source code and documentation, and can choose an ongoing maintenance plan for monitoring, updates and small enhancements.',
    category: 'planning',
    keywords: ['after launch', 'post launch', 'what happens next'],
    relatedServiceSlug: 'cloud-deployment-maintenance',
    relatedPageUrl: '/services/cloud-deployment-maintenance',
    displayOrder: 44,
  }),

  // ---- technical -----------------------------------------------------------
  base({
    id: 'technical-responsive',
    question: 'Will the website be responsive?',
    answer:
      'Yes. Every site and application we build is designed and tested across desktop, tablet and mobile as standard.',
    category: 'technical',
    keywords: ['responsive', 'mobile friendly'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 50,
  }),
  base({
    id: 'technical-seo',
    question: 'Will the website be SEO-friendly?',
    answer:
      'Yes. We build with semantic markup, performance and on-page SEO fundamentals in mind by default.',
    category: 'technical',
    keywords: ['seo', 'search engine optimisation', 'search ranking'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 51,
  }),
  base({
    id: 'technical-secure',
    question: 'Will the website be secure?',
    answer:
      'Yes. Standard security practices — SSL, secure authentication, input validation and access control — are applied as part of every build.',
    category: 'technical',
    keywords: ['secure', 'security', 'safe'],
    relatedPageUrl: '/services/cloud-deployment-maintenance',
    displayOrder: 52,
  }),
  base({
    id: 'technical-multilingual',
    question: 'Can the website support multiple languages?',
    answer:
      'Yes. Multi-language support can be planned in from the start, or added to an existing site depending on the CMS or framework in use.',
    category: 'technical',
    keywords: ['multiple languages', 'multilingual', 'translation', 'i18n'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 53,
  }),
  base({
    id: 'technical-payments',
    question: 'Can you add online payments?',
    answer:
      'Yes. We integrate payment providers such as Stripe for one-off payments, subscriptions or e-commerce checkout.',
    category: 'technical',
    keywords: ['online payments', 'stripe', 'payment gateway', 'checkout'],
    relatedServiceSlug: 'cms-ecommerce-solutions',
    relatedPageUrl: '/services/cms-ecommerce-solutions',
    displayOrder: 54,
  }),
  base({
    id: 'technical-auth',
    question: 'Can you add user registration and login?',
    answer:
      'Yes. Secure user registration, login and role-based access are standard building blocks of our SaaS and web application work.',
    category: 'technical',
    keywords: ['registration', 'login', 'authentication', 'sign up'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 55,
  }),
  base({
    id: 'technical-subscriptions',
    question: 'Can you add a subscription system?',
    answer:
      'Yes. Subscription billing and plan management are part of our SaaS and CRM development service.',
    category: 'technical',
    keywords: ['subscription', 'recurring billing', 'membership'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 56,
  }),
  base({
    id: 'technical-booking',
    question: 'Can you add booking functionality?',
    answer:
      'Yes. We build booking and scheduling flows for websites and apps, including availability checks and confirmations.',
    category: 'technical',
    keywords: ['booking', 'scheduling', 'appointments', 'reservations'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 57,
  }),
  base({
    id: 'technical-live-chat',
    question: 'Can you add live chat?',
    answer:
      'Yes. We can integrate a live chat or chatbot widget like this one into your own website or product.',
    category: 'technical',
    keywords: ['live chat', 'chat widget', 'add a chatbot'],
    relatedServiceSlug: 'ai-powered-solutions',
    relatedPageUrl: '/services/ai-powered-solutions',
    displayOrder: 58,
  }),
  base({
    id: 'technical-scale',
    question: 'Can the system scale in the future?',
    answer:
      'Yes. We make architecture decisions with growth in mind from the start, so the product can scale without a rebuild later.',
    category: 'technical',
    keywords: ['scale', 'scalability', 'growth'],
    relatedServiceSlug: 'saas-crm-development',
    relatedPageUrl: '/services/saas-crm-development',
    displayOrder: 59,
  }),
  base({
    id: 'technical-add-backend-later',
    question: 'Can a backend be added later?',
    answer:
      'Yes. This site itself is built this way — the frontend is structured so a backend, database and API can be added later without a major rebuild, and the same approach applies to client projects.',
    category: 'technical',
    keywords: ['add backend later', 'backend later', 'no backend yet'],
    relatedPageUrl: '/services/web-development',
    displayOrder: 60,
  }),
];

export const getChatbotFaqById = (id) => chatbotFaqs.find((faq) => faq.id === id);

export default chatbotFaqs;
