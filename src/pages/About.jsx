import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Gem, MessageSquare, Handshake, SearchCheck, Eye, Compass, CheckCircle2, Globe, Users } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import CTASection from '@/components/common/CTASection';
import { projects } from '@/data/projects';
import { fadeUpViewport, fadeInLeftViewport, fadeUpViewportStagger, hoverLift } from '@/utils/motionVariants';

const coreValues = [
  { title: 'Clarity over jargon', description: 'We explain decisions in plain language, so clients can make informed calls at every stage.', icon: MessageSquare },
  { title: 'Craft over shortcuts', description: 'Code and design decisions are made to last, not just to demo well.', icon: Gem },
  { title: 'Partnership over handoff', description: 'We stay engaged through launch and beyond, rather than disappearing after delivery.', icon: Handshake },
  { title: 'Evidence over opinion', description: 'Research and testing inform decisions ahead of personal preference.', icon: SearchCheck },
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

const countryCount = new Set(projects.map((p) => p.country.split(' / ')[0])).size;

const stats = [
  { value: `${projects.length}`, label: 'Products Shipped' },
  { value: `${countryCount}`, label: 'Countries Served' },
  { value: '2021', label: 'Studio Founded' },
  { value: 'EU', label: 'Remote-first Team' },
];

const facts = [
  { icon: MapPin, label: 'Headquarters', value: 'Tallinn, Estonia (EU)' },
  { icon: Globe, label: 'Working Model', value: 'Remote-first, across European time zones' },
  { icon: ShieldCheck, label: 'Compliance', value: 'GDPR-aligned Practices' },
];

const timeline = [
  { year: '2021', title: 'Studio Founded', desc: 'DigiInsaf established in Tallinn, Estonia with a focus on digital product excellence.' },
  { year: '2022', title: 'First Products Shipped', desc: 'Delivered the first live products for clients across South Asia and Europe.' },
  { year: '2023', title: 'AI & Automation', desc: 'Expanded capabilities into AI workflow automation and custom LLM integrations.' },
  { year: '2024', title: 'Growing Reach', desc: 'Now serving clients across the EU, South Asia, and Australia.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About DigiInsaf"
        description="DigiInsaf is an Estonia-based digital product studio combining strategy, design and engineering for startups and growing businesses."
      />

      <PageHero
        tone="navy"
        eyebrow="About Digiinsaf"
        title="A digital product studio built on strategy, design & engineering."
        description="DigiInsaf is based in Estonia and works with startups and growing businesses across Europe and internationally, helping them turn product ideas into dependable, well-built software."
      >
        <div className="mt-12 grid grid-cols-2 gap-5 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
              <span className="block text-3xl font-black text-white sm:text-4xl">{s.value}</span>
              <span className="text-xs text-graphite-400 mt-1 block">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </PageHero>

      {/* Story + Mission */}
      <section className="bg-white py-20 border-b border-hairline">
        <div className="container-xl grid gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeInLeftViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Our Story</span>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl leading-tight">
              Why we exist.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
              DigiInsaf was formed around a simple observation: many good product ideas stall not because of the idea itself, but because of disconnected strategy, design and engineering. We brought those disciplines under one roof so that clients work with a single team from first concept to production.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
              Operating from Estonia — a country known for its digital-first public and business infrastructure — gives us a natural home base for working with European and international clients across time zones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-hairline bg-sea-50 px-4 py-2.5 text-xs">
                  <Icon className="h-4 w-4 text-sea-700 shrink-0" />
                  <div>
                    <span className="block text-charcoal-muted">{label}</span>
                    <span className="block font-bold text-charcoal">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUpViewport} className="grid gap-5 content-start">
            {[
              { icon: Compass, title: 'Our Mission', text: 'To help startups and growing businesses turn ambitious ideas into digital products that are secure, scalable and genuinely usable.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a trusted long-term digital product partner for founders and teams across Europe and beyond, known for clarity, craft and follow-through.' },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} whileHover={hoverLift} className="rounded-2xl border border-hairline bg-sea-50/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea-100 mb-4">
                  <Icon className="h-5 w-5 text-sea-700" />
                </div>
                <h3 className="text-base font-bold text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-paper py-20">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Core Values</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">What guides our day-to-day decisions.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  {...fadeUpViewportStagger(i)}
                  whileHover={hoverLift}
                  className="rounded-2xl border border-hairline bg-white p-6 shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-200 transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea-50 text-sea-700 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sea-950 py-20">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Journey</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">How we got here.</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
            <div className="grid gap-8 lg:gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  {...fadeInLeftViewport}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}
                >
                  <div className={`relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <span className="inline-block rounded-full bg-cyan-500/15 text-cyan-300 px-3 py-1 text-xs font-black mb-3">{item.year}</span>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-graphite-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Principles + Tech */}
      <section className="bg-white py-20 border-b border-hairline">
        <div className="container-xl grid gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUpViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Client Partnerships</span>
            <h2 className="mt-3 text-2xl font-extrabold text-charcoal sm:text-3xl leading-tight">How we operate on every engagement.</h2>
            <ul className="mt-8 space-y-4">
              {workingPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 items-start">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sea-700 shrink-0" />
                  <span className="text-sm leading-relaxed text-charcoal-muted">{principle}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUpViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Technology</span>
            <h2 className="mt-3 text-2xl font-extrabold text-charcoal sm:text-3xl leading-tight">Tools and platforms we build with.</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-hairline bg-sea-50 px-4 py-2 text-xs font-semibold text-sea-800 transition-colors hover:border-sea-300 hover:bg-sea-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Placeholders */}
      <section className="bg-sea-950 py-20">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Team</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">A focused team of designers and engineers.</h2>
            <p className="mt-3 text-sm text-graphite-400 max-w-xl mx-auto">Team profiles will be published here as the studio grows. Every engagement is staffed with the design and engineering skills the project actually needs.</p>
          </motion.div>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
            {[1, 2, 3, 4].map((placeholder, i) => (
              <motion.div
                key={placeholder}
                {...fadeUpViewportStagger(i)}
                whileHover={hoverLift}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-white/20 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sea-800 border border-white/10">
                  <Users className="h-6 w-6 text-white/60" />
                </div>
                <p className="text-xs font-semibold text-white">Team Member</p>
                <p className="text-[10px] text-graphite-500">Profile coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
