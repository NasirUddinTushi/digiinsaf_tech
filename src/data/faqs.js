// `featured: true` marks the 6 questions shown in the homepage FAQ preview
// (see src/components/home/FAQSection.jsx); the full list still appears
// wherever all FAQs are shown (e.g. the Services page).

export const faqs = [
  {
    question: 'What services does Digiinsaf provide?',
    featured: true,
    answer:
      'We provide UI/UX design, custom website and web application development, mobile app development, SaaS and CRM development, AI integration and automation, e-commerce development, CMS and low-code development, cloud and DevOps, maintenance and technical support, IT consulting, and branding and digital strategy.',
  },
  {
    question: 'Do you work with startups?',
    featured: true,
    answer:
      'Yes. Startups and founders are a core part of who we work with, from early product discovery through to MVP build and post-launch iteration.',
  },
  {
    question: 'Can you build an MVP?',
    featured: true,
    answer:
      'Yes. We regularly scope MVPs that focus on the smallest feature set needed to validate a product with real users, with a clear path to expand afterward.',
  },
  {
    question: 'Do you offer both design and development?',
    answer:
      'Yes. Our team covers UI/UX design and full-stack development, so a project can move from wireframe to production without switching partners.',
  },
  {
    question: 'Can a project be completed in phases?',
    featured: true,
    answer:
      'Yes. Many clients prefer to complete design, frontend and backend as separate milestones. We scope each phase with clear deliverables and a defined handover point.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'Depending on the project, we typically work with React, Next.js, Node.js, Laravel, Python, Flutter, PostgreSQL, MongoDB, AWS, Docker, Tailwind CSS and GitHub.',
  },
  {
    question: 'Can you work with an existing design?',
    answer:
      'Yes. We can develop from an existing design system or Figma file, or start from your current codebase for redesign and feature work.',
  },
  {
    question: 'Do you provide post-launch support?',
    featured: true,
    answer:
      'Yes. We offer ongoing maintenance and support plans covering monitoring, updates, bug fixes and small enhancements after your product goes live.',
  },
  {
    question: 'Can you integrate third-party APIs?',
    answer:
      'Yes. We regularly integrate payment providers, CRMs, analytics tools, AI APIs and other third-party services into client projects.',
  },
  {
    question: 'Do you work with clients outside Estonia?',
    answer:
      'Yes. While Digiinsaf is based in Estonia, we work with startups and businesses across Europe and internationally, collaborating remotely with clear communication routines.',
  },
  {
    question: 'How is pricing calculated?',
    featured: true,
    answer:
      'Pricing depends on scope, features, integrations and timeline. After an initial discovery conversation, we provide a proposal with milestones and estimated cost.',
  },
  {
    question: 'What information is required to begin?',
    answer:
      'Typically we ask for your project goals, preferred features, any brand assets and content, reference websites, and details of any existing systems or APIs to integrate with.',
  },
];

export const getFeaturedFaqs = () => faqs.filter((faq) => faq.featured);

export default faqs;
