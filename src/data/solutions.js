// Client-type framing of the same underlying services — helps a visitor
// self-identify ("this is built for someone like me") before drilling into
// specific services. Powers the homepage Solutions preview and the
// dedicated /solutions page.

export const solutions = [
  {
    slug: 'startups',
    title: 'Startups',
    icon: 'Rocket',
    shortDescription: 'A lean, validated MVP without over-building before you know what works.',
    description:
      'We help startups scope a lean first release, choose technology that will not need a rewrite at the next funding stage, and move quickly without skipping the fundamentals a real launch needs.',
    painPoints: [
      'Limited budget and runway to validate an idea',
      'Uncertainty about which features actually matter for launch',
      'Needing to move fast without creating technical debt that blocks growth',
    ],
    howWeHelp: [
      'Scope a minimum viable product focused on what needs validating',
      'Recommend technology that scales past the first release',
      'Move quickly on design and development in parallel where sensible',
      'Advise honestly on what to defer to a later phase',
    ],
    relatedServices: ['ui-ux-design', 'web-application-development', 'mobile-app-development', 'it-consulting'],
  },
  {
    slug: 'small-medium-businesses',
    title: 'Small and Medium Businesses',
    icon: 'Briefcase',
    shortDescription: 'A credible online presence and internal tools that replace manual work.',
    description:
      'We modernise how small and medium businesses operate online — from a website that represents the business properly to internal tools that replace spreadsheets — scoped to a budget and timeline that make sense for your size.',
    painPoints: [
      'An outdated or slow website that undersells the business',
      'Manual processes running on spreadsheets or disconnected tools',
      'Limited in-house technical capacity to plan or manage a build',
    ],
    howWeHelp: [
      'Rebuild or refresh the website on a CMS your team can manage',
      'Digitise a manual process into a simple, purpose-built tool',
      'Recommend a realistic technology choice for your team size',
      'Provide maintenance support so the site stays healthy after launch',
    ],
    relatedServices: ['custom-website-development', 'cms-low-code-development', 'maintenance-technical-support'],
  },
  {
    slug: 'enterprise-teams',
    title: 'Enterprise Teams',
    icon: 'Building2',
    shortDescription: 'Defined workstreams delivered alongside your internal team, properly documented.',
    description:
      'We work alongside internal teams on defined workstreams — an architecture review, a specific platform build, or a system integration — with the documentation and handover process a larger organisation needs.',
    painPoints: [
      'Internal teams are at capacity and need extra delivery bandwidth',
      'A specific integration or platform build needs specialist skills',
      'Any external work needs to meet internal documentation and security standards',
    ],
    howWeHelp: [
      'Take ownership of a scoped workstream without disrupting internal processes',
      'Document architecture and decisions to internal-team standards',
      'Follow existing security and access-control requirements',
      'Provide a clean handover at the end of the engagement',
    ],
    relatedServices: ['web-application-development', 'cloud-devops', 'it-consulting'],
  },
  {
    slug: 'ecommerce-brands',
    title: 'E-commerce Brands',
    icon: 'ShoppingBag',
    shortDescription: 'A storefront built to convert, on the platform that fits your catalogue.',
    description:
      'We launch and rebuild storefronts that convert — from platform selection through checkout optimisation — on Shopify, WooCommerce or a custom build, matched to your catalogue size and team.',
    painPoints: [
      'Checkout drop-off is costing sales, especially on mobile',
      'The current platform cannot handle catalogue size or growth',
      'Marketing needs content control without developer involvement',
    ],
    howWeHelp: [
      'Select or migrate to the right e-commerce platform for your catalogue',
      'Simplify checkout to the fewest steps that still capture what you need',
      'Configure payments, shipping and inventory correctly the first time',
      'Hand over a store your marketing team can manage independently',
    ],
    relatedServices: ['ecommerce-development', 'ui-ux-design', 'cms-low-code-development'],
  },
  {
    slug: 'agencies',
    title: 'Agencies',
    icon: 'Handshake',
    shortDescription: 'White-label engineering and design capacity for client work.',
    description:
      'We provide white-label development and design capacity for agencies that need extra engineering or design bandwidth on a client project, without expanding their own team.',
    painPoints: [
      'A client project needs more engineering capacity than is available in-house',
      'A specific skill set (e.g. mobile, AI integration) sits outside the core team',
      'Client-facing quality and communication standards need to be maintained under a white-label arrangement',
    ],
    howWeHelp: [
      'Slot into an existing project as an extension of your team',
      'Work under your agency\'s client-facing brand and communication style where required',
      'Cover specialist gaps (mobile, AI, DevOps) on a per-project basis',
      'Keep documentation and handover clean for long-term maintainability',
    ],
    relatedServices: ['web-application-development', 'mobile-app-development', 'ai-integration-automation'],
  },
  {
    slug: 'saas-founders',
    title: 'SaaS Founders',
    icon: 'Gem',
    shortDescription: 'Multi-tenant architecture, billing and roles built right from the first schema.',
    description:
      'We help SaaS founders get the multi-tenant architecture, subscription billing and role-based access right from the first schema, so the product can scale without a costly rebuild later.',
    painPoints: [
      'A SaaS idea needs production-grade architecture, not just a prototype',
      'Subscription billing and access control need to be built correctly the first time',
      'Reporting requires a proper dashboard rather than manual exports',
    ],
    howWeHelp: [
      'Design the data model around tenants, roles and billing up front',
      'Integrate subscription billing and role-based permissions',
      'Build admin and analytics dashboards around real usage decisions',
      'Plan the architecture for scale from the first release',
    ],
    relatedServices: ['saas-crm-development', 'web-application-development', 'cloud-devops'],
  },
];

export const getSolutionBySlug = (slug) => solutions.find((solution) => solution.slug === slug);

export default solutions;
