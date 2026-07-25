// Central product catalogue for Digiinsaf in-house SaaS solutions in
// development. Update status/liveUrl once a product actually ships —
// don't mark something "Live" or link a URL until it's real and reachable.

export const products = [
  {
    slug: 'digiflow-saas',
    name: 'DigiFlow SaaS Platform',
    tagline: 'AI-Powered Business Automation & Workflow Engine',
    category: 'SaaS Product',
    status: 'In Development',
    icon: 'Sparkles',
    shortDescription:
      'An enterprise-grade SaaS platform built to automate business workflows, integrate AI agents, and streamline operations in real time.',
    heroDescription:
      'DigiFlow SaaS is our in-house automated workspace engine, designed for high-growth businesses. Connect API integrations, trigger autonomous AI workflows, and monitor key metrics in a unified dashboard.',
    liveUrl: null,
    targetLaunch: 'Targeting late 2026',
    highlights: [
      'Multi-tenant cloud architecture',
      'Real-time automated workflow triggers',
      'Built-in AI Assistant & Data Analytics',
      'Role-based Access Control (RBAC)',
      'Stripe & Razorpay Billing Integration',
    ],
    features: [
      {
        title: 'Visual Workflow Builder',
        description: 'Drag-and-drop automation nodes without writing complex backend code.',
      },
      {
        title: 'AI Insights & Analytics',
        description: 'Predictive metrics powered by integrated LLM pipelines.',
      },
      {
        title: 'Enterprise Security & Compliance',
        description: 'End-to-end encryption, OAuth2 SSO, and audit logging out of the box.',
      },
      {
        title: 'Custom API Webhooks',
        description: 'Connect with third-party tools like Slack, HubSpot, Zapier, and PostgreSQL.',
      },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'TailwindCSS'],
  },
  {
    slug: 'insaf-crm-suite',
    name: 'InsafCRM SaaS',
    tagline: 'Customer Relationship & Pipeline Management System',
    category: 'SaaS Solution',
    status: 'In Development',
    icon: 'LayoutDashboard',
    shortDescription:
      'Smart customer management solution designed specifically for agencies, startups, and service providers.',
    heroDescription:
      'Manage client leads, deal stages, automated invoicing, and communication history in one secure SaaS hub.',
    liveUrl: null,
    targetLaunch: 'Targeting late 2026',
    highlights: [
      'Visual Kanban deal pipelines',
      'Automated email & WhatsApp follow-ups',
      'Client portal with invoice tracking',
    ],
    features: [
      {
        title: 'Pipeline Automation',
        description: 'Auto-assign leads based on source, geo, and deal size.',
      },
      {
        title: 'Client Portal',
        description: 'Give customers a transparent view of project milestones and invoices.',
      },
    ],
    techStack: ['Next.js', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Vercel'],
  },
];
