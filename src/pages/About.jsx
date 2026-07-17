import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import ValueCard from '@/components/cards/ValueCard';
import CTASection from '@/components/common/CTASection';
import Breadcrumb from '@/components/common/Breadcrumb';
import { whyChooseUs } from '@/data/industries';

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

const technologies = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'Flutter',
  'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'AWS', 'Figma',
];

export default function About() {
  return (
    <>
      <SEO
        title="About Digiinsaf"
        description="Digiinsaf is an Estonia-based digital product studio combining strategy, design and engineering for startups and growing businesses."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <span className="dark-chip mb-4 inline-block rounded-full border border-white/[0.15] px-3.5 py-1.5 text-xs font-medium text-mist-200/80">
              About Digiinsaf
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              A digital product studio built on strategy, design and engineering.
            </h1>
            <p className="mt-5 text-lg text-mist-200/75">
              Digiinsaf is based in Estonia and works with startups and growing businesses across
              Europe and internationally, helping them turn product ideas into dependable, well-built
              software.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">Our story</h2>
            <p className="mb-4 text-graphite-500 leading-relaxed">
              Digiinsaf was formed around a simple observation: many good product ideas stall not
              because of the idea itself, but because of disconnected strategy, design and engineering.
              We brought those disciplines under one roof so that clients work with a single team from
              first concept to production.
            </p>
            <p className="text-graphite-500 leading-relaxed">
              Operating from Estonia — a country known for its digital-first public and business
              infrastructure — gives us a natural home base for working with European and international
              clients across time zones.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">Our mission</h3>
              <p className="text-sm leading-relaxed text-graphite-500">
                To help startups and growing businesses turn ambitious ideas into digital products
                that are secure, scalable and genuinely usable.
              </p>
            </div>
            <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">Our vision</h3>
              <p className="text-sm leading-relaxed text-graphite-500">
                To be a trusted long-term digital product partner for founders and teams across
                Europe and beyond, known for clarity, craft and follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Core values" title="What guides our day-to-day decisions." align="center" className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Working principles" title="How we operate on every engagement." className="mb-8" />
            <ul className="space-y-4">
              {workingPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 text-graphite-600">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                  <span className="text-sm leading-relaxed">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Technology" title="Tools and platforms we build with." className="mb-8" />
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-graphite-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="theme-dark-section bg-ink-950 py-20 sm:py-28">
        <div className="container-xl">
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
              <div key={placeholder} className="glass-panel flex flex-col items-center gap-3 rounded-xl2 p-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-mist-200/60">
                  <Users className="h-6 w-6" />
                </span>
                <p className="text-sm font-medium text-white">Team member</p>
                <p className="text-xs text-mist-200/50">Profile coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Why clients choose us" title="Reasons teams keep working with Digiinsaf." align="center" className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CTASection />
      </div>
    </>
  );
}
