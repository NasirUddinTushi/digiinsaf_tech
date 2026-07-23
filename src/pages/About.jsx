import { Users } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import ValueCard from '@/components/cards/ValueCard';
import CTASection from '@/components/common/CTASection';
import IconBadge from '@/components/common/IconBadge';

const coreValues = [
  { title: 'Clarity over jargon', description: 'We explain decisions in plain language, so clients can make informed calls at every stage.', icon: 'MessageSquare' },
  { title: 'Craft over shortcuts', description: 'Code and design decisions are made to last, not just to demo well.', icon: 'Gem' },
  { title: 'Partnership over handoff', description: 'We stay engaged through launch and beyond, rather than disappearing after delivery.', icon: 'Handshake' },
  { title: 'Evidence over opinion', description: 'Research and testing inform decisions ahead of personal preference.', icon: 'SearchCheck' },
];

const workingPrinciples = [
  'Every project starts with a written scope, so expectations are shared from day one.',
  'Design and development stay in close contact — interfaces are built to be built, not just to look good.',
  'Progress is visible throughout, not just at the final reveal.',
  'Documentation is part of delivery, not an afterthought.',
];

const facts = [
  { label: 'Location', value: 'Tallinn, Estonia' },
  { label: 'Working model', value: 'Remote-first, across European time zones' },
  { label: 'Region', value: 'Serving clients across the European Union and internationally' },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'Flutter',
  'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'AWS', 'Figma',
];

export default function About() {
  return (
    <>
      <SEO
        title="About DigiInsaf"
        description="DigiInsaf is an Estonia-based digital product studio combining strategy, design and engineering for startups and growing businesses."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About DigiInsaf"
        title="A digital product studio built on strategy, design and engineering."
        description="DigiInsaf is based in Estonia and works with startups and growing businesses across Europe and internationally, helping them turn product ideas into dependable, well-built software."
        backgroundImage="/images/about-team-collaboration.jpg"
        imageAlt="A team of professionals collaborating around a laptop in an office"
      />

      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-charcoal sm:text-h3">Our story</h2>
            <p className="mb-4 leading-relaxed text-charcoal-muted">
              DigiInsaf was formed around a simple observation: many good product ideas stall not
              because of the idea itself, but because of disconnected strategy, design and engineering.
              We brought those disciplines under one roof so that clients work with a single team from
              first concept to production.
            </p>
            <p className="leading-relaxed text-charcoal-muted">
              Operating from Estonia — a country known for its digital-first public and business
              infrastructure — gives us a natural home base for working with European and international
              clients across time zones.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-xl2 border border-hairline bg-paper p-6">
              <IconBadge name="Compass" className="mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-charcoal">Our mission</h3>
              <p className="text-body-sm leading-relaxed text-charcoal-muted">
                To help startups and growing businesses turn ambitious ideas into digital products
                that are secure, scalable and genuinely usable.
              </p>
            </div>
            <div className="rounded-xl2 border border-hairline bg-paper p-6">
              <IconBadge name="Eye" className="mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-charcoal">Our vision</h3>
              <p className="text-body-sm leading-relaxed text-charcoal-muted">
                To be a trusted long-term digital product partner for founders and teams across
                Europe and beyond, known for clarity, craft and follow-through.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Core values" title="What guides our day-to-day decisions." align="center" tone="light" className="mb-14" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Client partnerships" title="How we operate on every engagement." tone="light" className="mb-8" />
            <ul className="space-y-4">
              {workingPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sea-700" />
                  <span className="text-body-sm leading-relaxed text-charcoal-muted">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Technology" title="Tools and platforms we build with." tone="light" className="mb-8" />
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-hairline bg-paper px-4 py-2 text-body-sm font-medium text-charcoal-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Our team"
          title="A focused team of designers and engineers."
          description="Team profiles will be published here as the studio grows. In the meantime, every engagement is staffed with the design and engineering skills the project actually needs."
          tone="dark"
          align="center"
          className="mb-12"
        />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {[1, 2, 3, 4].map((placeholder) => (
            <div key={placeholder} className="flex flex-col items-center gap-3 rounded-xl2 border border-white/10 bg-white/5 p-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white/60">
                <Users className="h-6 w-6" />
              </span>
              <p className="text-body-sm font-medium text-white">Team member</p>
              <p className="text-caption text-white/50">Profile coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Location and collaboration" title="Where and how we work." align="center" tone="light" className="mb-12" />
        <dl className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl2 border border-hairline bg-white p-5 text-center">
              <dt className="text-caption font-semibold uppercase tracking-wider text-sea-700">{fact.label}</dt>
              <dd className="mt-2 text-body-sm text-charcoal-muted">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CTASection />
    </>
  );
}
