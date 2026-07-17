// Local mock blog content. Swap this module for a CMS-backed fetch later —
// the shape below (slug, category, excerpt, content blocks) is designed to
// map cleanly onto a typical headless CMS response.

export const blogCategories = ['All', 'Strategy', 'Engineering', 'Product', 'Design'];

export const blogs = [
  {
    slug: 'how-to-plan-a-successful-digital-product',
    title: 'How to Plan a Successful Digital Product',
    category: 'Strategy',
    author: 'Digiinsaf Team',
    publishedAt: '2026-05-04',
    readTime: '7 min read',
    featured: true,
    excerpt:
      'Before any design or code, the projects that go smoothly share one thing: a clear, written plan. Here is what that plan should actually contain.',
    content: [
      {
        heading: 'Start with the problem, not the feature list',
        body: 'It is tempting to begin planning by listing features. In practice, the more useful starting point is a single, clearly written problem statement: who has this problem, how are they solving it today, and why is that inadequate. Every later decision — scope, priority, even technology — gets easier to make once this is written down and agreed by stakeholders.',
      },
      {
        heading: 'Separate the MVP from the vision',
        body: 'Most products have a long-term vision that is genuinely worth pursuing — and a much smaller set of features that would actually validate the idea with real users. Keeping these two lists separate prevents an MVP from quietly growing into a six-month build before anyone has used it.',
      },
      {
        heading: 'Plan for the handover, not just the launch',
        body: 'A plan that stops at "launch" leaves out who maintains the product, how content gets updated, and what happens when the first bug report comes in. Deciding this upfront — even briefly — avoids an awkward gap immediately after go-live.',
      },
      {
        heading: 'Write the plan down',
        body: 'None of this needs to be a lengthy document. A one or two page brief covering the problem, the MVP scope, success measures and the maintenance plan is usually enough to keep a project aligned from kickoff to launch.',
      },
    ],
    relatedPosts: ['react-vs-nextjs-for-a-business-website', 'what-founders-should-prepare-before-an-mvp'],
  },
  {
    slug: 'react-vs-nextjs-for-a-business-website',
    title: 'React vs Next.js for a Business Website',
    category: 'Engineering',
    author: 'Digiinsaf Team',
    publishedAt: '2026-04-18',
    readTime: '6 min read',
    featured: false,
    excerpt:
      'Both are valid choices. The right one depends on how your site needs to render, not on which framework is more popular this year.',
    content: [
      {
        heading: 'They are not really competitors',
        body: 'Next.js is built on top of React, so the comparison is less "which is better" and more "does this project need what Next.js adds": server-side rendering, file-based routing, and built-in API routes.',
      },
      {
        heading: 'When a plain React SPA is enough',
        body: 'For an internal tool, an authenticated dashboard, or an application where SEO is irrelevant, a client-rendered React app built with Vite is often simpler to build and reason about — fewer moving parts, faster local development.',
      },
      {
        heading: 'When Next.js earns its complexity',
        body: 'For a marketing website, blog, or e-commerce storefront where search visibility and fast first paint genuinely matter, Next.js’s server-side and static rendering options solve real problems a client-rendered SPA does not.',
      },
      {
        heading: 'Our approach',
        body: 'We choose based on the project’s actual rendering and SEO requirements — not on defaulting to the newer framework by habit. Both are strong, well-supported choices for a business website when applied to the right use case.',
      },
    ],
    relatedPosts: ['how-to-plan-a-successful-digital-product', 'what-founders-should-prepare-before-an-mvp'],
  },
  {
    slug: 'what-founders-should-prepare-before-an-mvp',
    title: 'What Founders Should Prepare Before Starting an MVP',
    category: 'Product',
    author: 'Digiinsaf Team',
    publishedAt: '2026-03-27',
    readTime: '5 min read',
    featured: false,
    excerpt:
      'The founders who move fastest through an MVP build are rarely the ones with the biggest budget — they are the ones who show up prepared.',
    content: [
      {
        heading: 'A written problem and audience',
        body: 'Even a rough paragraph describing who the product is for and what problem it solves gives a build team something concrete to design and scope against.',
      },
      {
        heading: 'A prioritised, honest feature list',
        body: 'Not every feature can be "must-have." Coming in with a rough sense of what is essential for launch versus what can wait saves real time during scoping.',
      },
      {
        heading: 'Brand and content basics',
        body: 'A logo, rough brand direction, and any existing copy or reference sites speed up design significantly. None of this needs to be final — it just needs to exist.',
      },
      {
        heading: 'Availability for feedback',
        body: 'MVP timelines are often shaped more by how quickly a founder can review and respond to design or development milestones than by the engineering work itself. Blocking time for this in advance keeps the project moving.',
      },
    ],
    relatedPosts: ['how-to-plan-a-successful-digital-product', 'react-vs-nextjs-for-a-business-website'],
  },
];

export const getBlogBySlug = (slug) => blogs.find((post) => post.slug === slug);

export default blogs;
