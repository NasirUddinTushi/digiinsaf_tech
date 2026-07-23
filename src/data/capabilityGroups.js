// The 12 catalogue entries in services.js, grouped into the four
// capabilities the homepage and the Services page both lead with. Copy is
// written specifically for this grouping rather than duplicated verbatim
// from the individual service-detail pages, but every claim traces back to
// real content in services.js. `services` lists the individual service
// slugs that belong to each group (used by the full Services page; the
// homepage's condensed version ignores it).

export const capabilityGroups = [
  {
    category: 'Digital Product Design',
    title: 'Interfaces people can actually use, validated before a line of code ships.',
    description:
      'We start with research and structure, not visual style. Flows and interactive prototypes are tested before development begins, and every project carries a brand direction clear enough for a team to build on independently.',
    capabilities: ['UX research and user flows', 'UI design and interactive prototypes', 'Design systems', 'Brand identity and guidelines'],
    icon: 'PenTool',
    to: '/services/ui-ux-design',
    services: ['ui-ux-design', 'branding-digital-strategy'],
  },
  {
    category: 'Web and Software Development',
    title: 'Business websites, web applications and platforms built to handle real usage.',
    description:
      'From corporate and marketing sites to custom web applications, SaaS platforms and API-driven backends, we choose the simplest architecture that meets the requirement and document it so your team is never dependent on ours.',
    capabilities: ['Business and marketing websites', 'Web applications and client portals', 'SaaS and CRM platforms', 'API, backend and cloud infrastructure'],
    icon: 'Code2',
    to: '/services/web-application-development',
    services: [
      'custom-website-development',
      'web-application-development',
      'saas-crm-development',
      'cms-low-code-development',
      'cloud-devops',
      'ecommerce-development',
      'maintenance-technical-support',
      'it-consulting',
    ],
  },
  {
    category: 'Mobile Application Development',
    title: 'Cross-platform apps that feel native, without duplicating engineering effort.',
    description:
      'We build iOS and Android applications from a single codebase where that fits the project, prioritising a lean, testable MVP before secondary features — with app-store submission and ongoing maintenance handled as part of the engagement.',
    capabilities: ['Android and iOS applications', 'Cross-platform development', 'MVP scoping and validation', 'Post-launch maintenance'],
    icon: 'Smartphone',
    to: '/services/mobile-app-development',
    services: ['mobile-app-development'],
  },
  {
    category: 'AI and Business Automation',
    title: 'Practical automation that removes real friction, not novelty add-ons.',
    description:
      'We integrate AI where it measurably helps — drafting responses to repetitive questions, automating multi-step workflows, or surfacing insight from data you already collect — with human review built in wherever a decision actually matters.',
    capabilities: ['AI chatbots and assistants', 'Workflow and content automation', 'Data analytics and dashboards', 'CRM and platform integrations'],
    icon: 'Sparkles',
    to: '/services/ai-integration-automation',
    services: ['ai-integration-automation'],
  },
];

export default capabilityGroups;
