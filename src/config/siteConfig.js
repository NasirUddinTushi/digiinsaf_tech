// Single source of truth for brand, contact and navigation content.
// Update this file to change copy that appears across the whole site.

export const siteConfig = {
  brand: {
    name: 'Digiinsaf',
    tagline: 'Turning ambitious ideas into reliable digital products.',
    supportingMessage:
      'From strategy and design to development and launch, Digiinsaf helps startups and businesses create secure, scalable and user-focused digital experiences.',
  },

  company: {
    country: 'Estonia',
    region: 'European Union',
    locationLabel: 'Tallinn, Estonia — serving clients worldwide',
  },

  contact: {
    email: 'info@digiinsaf.com',
    salesEmail: 'projects@digiinsaf.com',
    supportEmail: 'support@digiinsaf.com',
    billingEmail: 'billing@digiinsaf.com',
    phone: '+372 000 0000',
    whatsapp: '+372 000 0000',
    addressLine: 'Tallinn, Estonia',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/digiinsafe',
    x: 'https://x.com/digiinsafe',
    instagram: 'https://www.instagram.com/digiinsafe',
    dribbble: 'https://dribbble.com/digiinsafe',
    github: 'https://github.com/digiinsafe',
  },

  cta: {
    primary: 'Start a Project',
    secondary: 'Explore Our Work',
    consultation: 'Book a Consultation',
  },

  nav: {
    // Trimmed primary bar (redesign) — Solutions and Careers stay live
    // routes, just reachable from the footer instead, per the brief's
    // "don't overcrowd the navigation" rule.
    primary: [
      { label: 'Services', to: '/services', hasDropdown: true },
      { label: 'Products', to: '/products', hasDropdown: true },
      { label: 'Work', to: '/work' },
      { label: 'Process', to: '/process' },
      { label: 'About', to: '/about' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
    footer: {
      services: [
        { label: 'UI/UX Design', to: '/services/ui-ux-design' },
        { label: 'Custom Website Development', to: '/services/custom-website-development' },
        { label: 'Web Application Development', to: '/services/web-application-development' },
        { label: 'Mobile App Development', to: '/services/mobile-app-development' },
        { label: 'SaaS and CRM Development', to: '/services/saas-crm-development' },
        { label: 'AI Integration and Automation', to: '/services/ai-integration-automation' },
        { label: 'Branding and Digital Strategy', to: '/services/branding-digital-strategy' },
      ],
      products: [
        { label: 'DigiFlow SaaS Platform', to: '/products' },
        { label: 'InsafCRM SaaS', to: '/products' },
      ],
      company: [
        { label: 'About Digiinsaf', to: '/about' },
        { label: 'Our Work', to: '/work' },
        { label: 'Our Process', to: '/process' },
        { label: 'Solutions', to: '/solutions' },
        { label: 'Insights', to: '/insights' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
      ],
      legal: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms & Conditions', to: '/terms-and-conditions' },
      ],
    },
  },

  seo: {
    defaultTitle: 'Digiinsaf — Digital Product Studio, Estonia',
    titleTemplate: '%s | Digiinsaf',
    defaultDescription:
      'Digiinsaf is an Estonia-based digital product studio helping startups and businesses design, build and launch web, mobile, AI and SaaS products.',
    siteUrl: import.meta.env.VITE_SITE_URL || 'https://digiinsaf.com',
    ogImage: '/og-cover.svg',
    twitterHandle: '@digiinsafe',
  },

  legalNotice:
    'Draft content — review by a qualified legal professional before publication.',
};

export default siteConfig;
