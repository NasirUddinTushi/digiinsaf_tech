// Chatbot-facing service knowledge. Mirrors the shape a future
// GET /api/chatbot/services response (and an admin-panel service manager)
// would use — see src/services/chatbotService.js -> fetchChatbotServices().
//
// This lists the 10 service areas Digiinsaf talks about with visitors.
// Several of them (e.g. "Custom Website Development" and "Web Application
// Development") point to the same underlying service page — the real
// service catalogue lives in src/data/services.js and is the single source
// of truth for slugs/routes; this file only adds chatbot-specific framing
// (suitableFor, keyDeliverables, commonQuestions) on top of it, so the two
// never drift out of sync.

const PLACEHOLDER_TIMESTAMP = '2026-01-01T00:00:00.000Z';

const base = (overrides) => ({
  isActive: true,
  createdAt: PLACEHOLDER_TIMESTAMP,
  updatedAt: PLACEHOLDER_TIMESTAMP,
  ...overrides,
});

export const chatbotServices = [
  base({
    id: 'chatbot-svc-ui-ux-design',
    serviceName: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'Research-led interfaces designed in Figma, from wireframes to interactive prototypes.',
    suitableFor: ['Founders validating a new product idea', 'Teams with an outdated or inconsistent interface'],
    keyDeliverables: ['Wireframes and user flows', 'High-fidelity UI screens', 'Interactive Figma prototype', 'Design system'],
    commonQuestions: ['Do you design UI/UX in Figma?', 'Can you work with my existing design?'],
    pageUrl: '/services/ui-ux-design',
    relatedServiceSlug: 'ui-ux-design',
    displayOrder: 1,
  }),
  base({
    id: 'chatbot-svc-custom-website-development',
    serviceName: 'Custom Website Development',
    slug: 'custom-website-development',
    shortDescription: 'Corporate websites, landing pages and business portals built on modern frameworks.',
    suitableFor: ['Businesses needing a credible, fast marketing website', 'Teams outgrowing a template-based site'],
    keyDeliverables: ['Responsive website', 'CMS setup where needed', 'Deployment and handover documentation'],
    commonQuestions: ['Do you develop custom websites?', 'Can you redesign an existing website?'],
    pageUrl: '/services/web-development',
    relatedServiceSlug: 'web-development',
    displayOrder: 2,
  }),
  base({
    id: 'chatbot-svc-web-application-development',
    serviceName: 'Web Application Development',
    slug: 'web-application-development',
    shortDescription: 'Custom web applications, dashboards and business tools with the backend they need.',
    suitableFor: ['Products that need accounts, data and workflows, not just marketing pages', 'Internal tools replacing spreadsheets'],
    keyDeliverables: ['Production-ready codebase', 'API integration', 'Technical documentation'],
    commonQuestions: ['Do you develop web applications?', 'Can you integrate third-party APIs?'],
    pageUrl: '/services/web-development',
    relatedServiceSlug: 'web-development',
    displayOrder: 3,
  }),
  base({
    id: 'chatbot-svc-mobile-app-development',
    serviceName: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDescription: 'Cross-platform mobile apps built in Flutter for iOS and Android from one codebase.',
    suitableFor: ['Startups validating a mobile MVP', 'Products needing a companion app to an existing website'],
    keyDeliverables: ['iOS and Android builds', 'Source code and repository access', 'App store listing assets'],
    commonQuestions: ['Do you build mobile applications?', 'Can you build an MVP?'],
    pageUrl: '/services/mobile-app-development',
    relatedServiceSlug: 'mobile-app-development',
    displayOrder: 4,
  }),
  base({
    id: 'chatbot-svc-saas-crm-development',
    serviceName: 'SaaS and CRM Development',
    slug: 'saas-crm-development',
    shortDescription: 'Multi-tenant SaaS platforms and CRMs with roles, billing and analytics dashboards.',
    suitableFor: ['Founders building a SaaS product', 'Teams that have outgrown spreadsheets for customer data'],
    keyDeliverables: ['Multi-tenant platform codebase', 'Role and permission matrix', 'Admin dashboard'],
    commonQuestions: ['Do you develop SaaS platforms?', 'Do you develop CRM systems?', 'Can the system scale in the future?'],
    pageUrl: '/services/saas-crm-development',
    relatedServiceSlug: 'saas-crm-development',
    displayOrder: 5,
  }),
  base({
    id: 'chatbot-svc-ai-integration-automation',
    serviceName: 'AI Integration and Automation',
    slug: 'ai-integration-and-automation',
    shortDescription: 'Practical AI chatbots, machine learning, deep learning and data analytics features.',
    suitableFor: ['Support teams answering repetitive questions', 'Teams sitting on data they are not yet using'],
    keyDeliverables: ['Integrated AI, ML or analytics feature', 'Model evaluation report', 'Monitoring and documentation'],
    commonQuestions: ['Can you integrate AI into a website or application?', 'Can you add live chat?'],
    pageUrl: '/services/ai-powered-solutions',
    relatedServiceSlug: 'ai-powered-solutions',
    displayOrder: 6,
  }),
  base({
    id: 'chatbot-svc-cms-low-code-development',
    serviceName: 'CMS and Low-Code Development',
    slug: 'cms-and-low-code-development',
    shortDescription: 'WordPress, Webflow and headless CMS builds for teams that need to self-edit content.',
    suitableFor: ['Marketing teams that publish content without a developer', 'Sites needing a quick, manageable launch'],
    keyDeliverables: ['Configured CMS', 'Editor documentation', 'Launch checklist'],
    commonQuestions: ['Do you work with WordPress?', 'Do you work with Webflow?'],
    pageUrl: '/services/cms-ecommerce-solutions',
    relatedServiceSlug: 'cms-ecommerce-solutions',
    displayOrder: 7,
  }),
  base({
    id: 'chatbot-svc-ecommerce-development',
    serviceName: 'E-commerce Development',
    slug: 'ecommerce-development',
    shortDescription: 'Storefronts on Shopify or custom stacks, covering catalogue, checkout and payments.',
    suitableFor: ['DTC and small-to-mid retail brands', 'Stores needing a checkout or catalogue overhaul'],
    keyDeliverables: ['Configured storefront', 'Payment and shipping setup', 'Migration report if applicable'],
    commonQuestions: ['Do you develop e-commerce platforms?', 'Do you work with Shopify?', 'Can you add online payments?'],
    pageUrl: '/services/cms-ecommerce-solutions',
    relatedServiceSlug: 'cms-ecommerce-solutions',
    displayOrder: 8,
  }),
  base({
    id: 'chatbot-svc-branding-digital-strategy',
    serviceName: 'Branding and Digital Strategy',
    slug: 'branding-and-digital-strategy',
    shortDescription: 'Brand identity, positioning and product strategy before design and development begin.',
    suitableFor: ['Startups needing a credible identity', 'Founders unsure of scope or priorities'],
    keyDeliverables: ['Brand guideline document', 'Positioning and messaging brief', 'Product roadmap'],
    commonQuestions: ['Can you help refine my project idea?'],
    pageUrl: '/services/branding-digital-strategy',
    relatedServiceSlug: 'branding-digital-strategy',
    displayOrder: 9,
  }),
  base({
    id: 'chatbot-svc-cloud-deployment-maintenance',
    serviceName: 'Cloud Deployment, Maintenance and Technical Support',
    slug: 'cloud-deployment-maintenance-support',
    shortDescription: 'Cloud hosting, CI/CD pipelines and ongoing maintenance after launch.',
    suitableFor: ['Products ready to launch without a reliable deployment process', 'Live products needing an ongoing support partner'],
    keyDeliverables: ['Configured cloud environment', 'CI/CD pipeline', 'Maintenance plan documentation'],
    commonQuestions: ['Do you provide cloud deployment?', 'Do you provide maintenance?'],
    pageUrl: '/services/cloud-deployment-maintenance',
    relatedServiceSlug: 'cloud-deployment-maintenance',
    displayOrder: 10,
  }),
];

export const getChatbotServiceBySlug = (slug) =>
  chatbotServices.find((service) => service.slug === slug);

export default chatbotServices;
