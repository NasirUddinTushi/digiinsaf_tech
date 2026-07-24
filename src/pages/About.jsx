import { motion } from 'framer-motion';
import { Users, MapPin, ShieldCheck, Gem, MessageSquare, Handshake, SearchCheck, Eye, Compass, CheckCircle2, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import CTASection from '@/components/common/CTASection';

const coreValues = [
  { title: 'Clarity over jargon', description: 'We explain decisions in plain language, so clients can make informed calls at every stage.', icon: MessageSquare, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
  { title: 'Craft over shortcuts', description: 'Code and design decisions are made to last, not just to demo well.', icon: Gem, color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50', text: 'text-violet-600' },
  { title: 'Partnership over handoff', description: 'We stay engaged through launch and beyond, rather than disappearing after delivery.', icon: Handshake, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { title: 'Evidence over opinion', description: 'Research and testing inform decisions ahead of personal preference.', icon: SearchCheck, color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600' },
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

const stats = [
  { value: '40+', label: 'Products Shipped' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: '3 Wks', label: 'Avg MVP Sprint' },
  { value: '12+', label: 'Countries Served' },
];

const facts = [
  { icon: MapPin, label: 'Headquarters', value: 'Tallinn, Estonia (EU)' },
  { icon: Globe, label: 'Working Model', value: 'Remote-first, across European time zones' },
  { icon: ShieldCheck, label: 'Compliance', value: 'ISO 27001 & GDPR Compliant' },
];

const timeline = [
  { year: '2021', title: 'Studio Founded', desc: 'DigiInsaf established in Tallinn, Estonia with a focus on digital product excellence.' },
  { year: '2022', title: 'First 10 Products', desc: 'Shipped 10+ live products for startups across Europe and South Asia.' },
  { year: '2023', title: 'AI & Automation', desc: 'Expanded capabilities into AI workflow automation and custom LLM integrations.' },
  { year: '2024', title: 'Global Scale', desc: 'Now serving clients across EU, UK, Australia, and GCC regions.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About DigiInsaf"
        description="DigiInsaf is an Estonia-based digital product studio combining strategy, design and engineering for startups and growing businesses."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-sea-950 pt-[clamp(64px,10vw,120px)] pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-mesh-drift" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[120px] animate-mesh-drift" style={{ animationDelay: '-6s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-5">
              <Users className="h-3.5 w-3.5" /> About DigiInsaf
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              A digital product studio built on{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                strategy, design & engineering.
              </span>
            </h1>
            <p className="mt-5 text-base text-graphite-300 sm:text-lg leading-relaxed max-w-2xl">
              DigiInsaf is based in Estonia and works with startups and growing businesses across Europe and internationally, helping them turn product ideas into dependable, well-built software.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-5 border-t border-white/10 pt-10 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <span className="block text-3xl font-black text-white sm:text-4xl">{s.value}</span>
                <span className="text-xs text-graphite-400 mt-1 block">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="bg-white py-20 border-b border-hairline">
        <div className="container-xl grid gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
                <motion.div key={label} whileHover={{ scale: 1.03 }} className="flex items-center gap-2 rounded-xl border border-hairline bg-sea-50 px-4 py-2.5 text-xs">
                  <Icon className="h-4 w-4 text-sea-700 shrink-0" />
                  <div>
                    <span className="block text-charcoal-muted">{label}</span>
                    <span className="block font-bold text-charcoal">{value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-5 content-start">
            {[
              { icon: Compass, title: 'Our Mission', text: 'To help startups and growing businesses turn ambitious ideas into digital products that are secure, scalable and genuinely usable.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a trusted long-term digital product partner for founders and teams across Europe and beyond, known for clarity, craft and follow-through.' },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="rounded-2xl border border-hairline bg-sea-50/60 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-sea-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
      <section className="bg-[#f8f7f3] py-20">
        <div className="container-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Core Values</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">What guides our day-to-day decisions.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-white rounded-2xl border border-hairline p-6 shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-200 overflow-hidden"
                >
                  <motion.div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`} initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.bg} ${value.text} mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal group-hover:text-sea-800 transition-colors">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sea-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-600/8 blur-[120px]" />
        </div>
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Journey</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">How we got here.</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent hidden lg:block" />
            <div className="grid gap-8 lg:gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}
                >
                  <div className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-cyan-500/30 hover:bg-white/8 transition-all ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <span className="inline-block rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 text-xs font-black text-white mb-3">{item.year}</span>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Client Partnerships</span>
            <h2 className="mt-3 text-2xl font-extrabold text-charcoal sm:text-3xl leading-tight">How we operate on every engagement.</h2>
            <ul className="mt-8 space-y-4">
              {workingPrinciples.map((principle, i) => (
                <motion.li
                  key={principle}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sea-700 shrink-0" />
                  <span className="text-sm leading-relaxed text-charcoal-muted">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Technology</span>
            <h2 className="mt-3 text-2xl font-extrabold text-charcoal sm:text-3xl leading-tight">Tools and platforms we build with.</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="rounded-full border border-hairline bg-sea-50 px-4 py-2 text-xs font-semibold text-sea-800 cursor-default hover:border-sea-300 hover:bg-sea-100 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Placeholders */}
      <section className="bg-sea-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Team</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">A focused team of designers and engineers.</h2>
            <p className="mt-3 text-sm text-graphite-400 max-w-xl mx-auto">Team profiles will be published here as the studio grows. Every engagement is staffed with the design and engineering skills the project actually needs.</p>
          </motion.div>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
            {[1, 2, 3, 4].map((placeholder, i) => (
              <motion.div
                key={placeholder}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center hover:border-cyan-500/30 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sea-700 to-sea-900 border border-white/10">
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
