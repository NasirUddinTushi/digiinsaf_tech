// Verified portfolio and real client projects for Digiinsaf.

export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Applications' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'saas', label: 'SaaS & Portals' },
  { key: 'services', label: 'Service Platforms' },
];

export const projects = [
  {
    slug: 'fly-gcc-international',
    title: 'Fly GCC International',
    industry: 'Travel & Visa Services',
    country: 'Bangladesh / GCC Region',
    categories: ['web', 'saas', 'services'],
    liveUrl: 'https://flygccint.com/',
    image: '/projects/flygccint.png',
    techStack: ['React 19', 'Python', 'Django', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    summary:
      'A full-scale international travel booking and visa management platform supporting flight and hotel search, Umrah tour packages, and work visa status tracking.',
    outcome:
      'Engineered automated visa status tracking and booking workflows, processing over 12,000+ customer inquiries annually.',
    timeline: '8 Weeks Delivery',
    challenge:
      'Travel agencies handling GCC work visas and international flight bookings often face fragmented manual communication. The client needed a unified web portal to automate customer inquiries and package bookings.',
    strategy:
      'Designed a streamlined multi-step booking engine with clear status indicators for visa applications and tour package inquiries.',
    solution:
      'Full-stack platform built on React and Django REST framework with PostgreSQL data persistence and responsive mobile views.',
  },
  {
    slug: 'nazcon-bd',
    title: 'Nazcon BD',
    industry: 'Construction Materials & Engineering',
    country: 'Bangladesh',
    categories: ['web', 'ecommerce'],
    liveUrl: 'https://nazconbd.com/',
    image: '/projects/nazcon-bd.png',
    techStack: ['React 19', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'A comprehensive digital platform for a leading construction materials manufacturer, showcasing chemical admixtures, waterproofing systems, and dealer networks.',
    outcome:
      'Increased online product inquiry volume by 180% with an interactive product catalogue and technical datasheet downloads.',
    timeline: '6 Weeks Delivery',
    challenge:
      'Engineers and contractors needed instant access to technical datasheets and chemical specs for concrete admixtures without long sales calls.',
    strategy:
      'Structured a fast product catalogue with category filtering and instant PDF download triggers for technical specifications.',
    solution:
      'React frontend connected to Django backend with responsive UI designed for field engineers using mobile devices.',
  },
  {
    slug: 'happy-home-tex',
    title: 'Happy Home Tex',
    industry: 'Home Textiles & E-Commerce',
    country: 'Bangladesh',
    categories: ['web', 'ecommerce'],
    liveUrl: 'https://happyhometex.com/',
    image: '/projects/happy-home-tex.png',
    techStack: ['React 19', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    summary:
      'An e-commerce storefront for handmade bedding, curtains, and home décor, featuring nationwide cash-on-delivery and automated order dispatching.',
    outcome:
      'Built a fast, lightweight mobile checkout flow reducing cart abandonment by 35% across mobile shoppers.',
    timeline: '5 Weeks Delivery',
    challenge:
      'Mobile users in South Asia require high page speed under slow 3G/4G connections and an effortless cash-on-delivery checkout experience.',
    strategy:
      'Optimized asset delivery, implemented lightweight React state management, and created a 2-step checkout form.',
    solution:
      'Custom React e-commerce application integrated with Django REST framework and automated SMS dispatch alerts.',
  },
  {
    slug: 'fawz-cleaning-and-gardening',
    title: 'Fawz Cleaning & Gardening',
    industry: 'Facility Services & Property Maintenance',
    country: 'Australia',
    categories: ['web', 'services'],
    liveUrl: 'https://fawzcleaningandgardening.com.au/',
    image: '/projects/fawz-cleaning-gardening.png',
    techStack: ['React 19', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'A modern facility services booking website serving commercial and residential clients in Australia, featuring automated online quote calculators.',
    outcome:
      'Streamlined quote request processing from hours to minutes with structured lead capture forms.',
    timeline: '4 Weeks Delivery',
    challenge:
      'Commercial property managers needed a quick way to request custom quotes based on square footage and service type.',
    strategy:
      'Developed an interactive service scope selector directly on the landing page for instant quote requests.',
    solution:
      'Responsive React platform built with Tailwind CSS, featuring custom form validation and instant lead routing.',
  },
  {
    slug: 'arntech',
    title: 'Arntech Digital Studio',
    industry: 'Software & Technology',
    country: 'Estonia / Global',
    categories: ['web', 'saas'],
    liveUrl: 'https://arntech.netlify.app/',
    image: '/projects/arntech.png',
    techStack: ['React 19', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'A software development company portfolio site showcasing custom software development, mobile apps, and cloud engineering capabilities.',
    outcome:
      'Modernized agency brand presence with high-contrast UI components and responsive service matrices.',
    timeline: '4 Weeks Delivery',
    challenge:
      'Showcasing complex software capabilities to enterprise buyers in an intuitive visual format.',
    strategy:
      'Utilized modular card components, clean typography, and interactive tech stack indicators.',
    solution:
      'Built with React and Vite for sub-second page loads and fluid page transitions.',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
