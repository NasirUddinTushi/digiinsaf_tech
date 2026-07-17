// Powers the "How We Work" home section and the /process page timeline.

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    icon: 'SearchCheck',
    summary: 'We start by understanding the business objective, not just the feature list.',
    details: [
      'Understand business objectives',
      'Collect project requirements',
      'Review references and competitors',
      'Identify users and project scope',
      'Recommend the most suitable solution',
    ],
  },
  {
    step: '02',
    title: 'Planning',
    icon: 'ListChecks',
    summary: 'Requirements become a scoped, prioritised roadmap before any design work begins.',
    details: [
      'Define features and priorities',
      'Create sitemap and user flows',
      'Select technologies',
      'Establish milestones',
      'Create the project roadmap',
    ],
  },
  {
    step: '03',
    title: 'UI/UX Design',
    icon: 'PenTool',
    summary: 'Interfaces are designed, prototyped and reviewed before a line of production code is written.',
    details: [
      'Create wireframes',
      'Develop visual direction',
      'Design responsive interfaces',
      'Share interactive prototypes',
      'Gather client feedback',
      'Refine until approval',
    ],
  },
  {
    step: '04',
    title: 'Development',
    icon: 'Code2',
    summary: 'Approved designs are built into clean, scalable, well-documented code.',
    details: [
      'Build the approved frontend',
      'Develop backend and integrations when included',
      'Share regular progress updates',
      'Maintain reusable and scalable code',
      'Apply agreed client feedback',
    ],
  },
  {
    step: '05',
    title: 'Testing',
    icon: 'ShieldCheck',
    summary: 'The product is tested against real conditions, not just the happy path.',
    details: [
      'Functional testing',
      'Responsive testing',
      'Cross-browser testing',
      'Performance testing',
      'Accessibility review',
      'Bug fixing',
      'Final client review',
    ],
  },
  {
    step: '06',
    title: 'Deployment',
    icon: 'Rocket',
    summary: 'Launch is handled as a documented deployment, not a manual one-off.',
    details: [
      'Final deployment',
      'Domain and hosting setup',
      'Source-code handover',
      'Technical documentation',
    ],
  },
  {
    step: '07',
    title: 'Support',
    icon: 'LifeBuoy',
    summary: 'Support continues after launch, not just up to it.',
    details: [
      'Basic training when required',
      'Post-launch monitoring',
      'Bug fixes and small enhancements',
      'Ongoing maintenance plans available',
    ],
  },
];

export const clientRequirements = [
  'Project goals',
  'Preferred features',
  'Brand assets',
  'Content',
  'Reference websites',
  'Domain and hosting information',
  'Required API access',
  'Timely feedback',
];

export const collaborationSteps = [
  'Initial draft and review',
  'Revisions and refinements',
  'Final adjustments and approval',
  'Launch and deployment',
  'Source-code and documentation handover',
  'Post-delivery feedback and support',
];

export default processSteps;
