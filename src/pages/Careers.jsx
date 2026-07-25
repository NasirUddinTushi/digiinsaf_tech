import { motion } from 'framer-motion';
import { Mail, Globe, Laptop, Users, Zap, Heart, Star, Coffee, ArrowRight, Briefcase, MapPin, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import siteConfig from '@/config/siteConfig';
import { projects } from '@/data/projects';
import { fadeUpViewport, fadeUpViewportStagger } from '@/utils/motionVariants';

const perks = [
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the EU/EEA. We trust you to manage your time and deliver great work.' },
  { icon: Laptop, title: 'Modern Tooling', desc: 'Current frameworks chosen for the job — React, Python, cloud-native stacks. No legacy nightmares.' },
  { icon: Users, title: 'Direct Client Exposure', desc: 'Work close to real client problems, not buried behind layers of process or meetings.' },
  { icon: Zap, title: 'Fast Decision-Making', desc: 'Small team means your ideas matter. No bureaucracy. Good ideas ship quickly.' },
  { icon: Heart, title: 'Craft-First Culture', desc: 'We care deeply about code quality, UX, and doing things properly. No cutting corners.' },
  { icon: Coffee, title: 'Flexible Hours', desc: 'Overlap during core EU hours, but structure your day as works best for your productivity.' },
];

const values = [
  { number: '01', title: 'Ownership over execution', desc: 'We want people who care about outcomes, not just completing tasks.' },
  { number: '02', title: 'Transparency by default', desc: 'Share early, communicate openly, and flag problems without fear.' },
  { number: '03', title: 'Quality without shortcuts', desc: 'We build things that last — technical debt is a future cost we try hard to avoid.' },
  { number: '04', title: 'Continuous learning', desc: 'Technology evolves fast. Curiosity and staying sharp are part of the job.' },
];

const openRoles = [
  // Uncomment and add real roles when hiring:
  // { title: 'Senior React Engineer', type: 'Full-time', location: 'Remote (EU)', department: 'Engineering' },
];

const stats = [
  { value: '2021', label: 'Studio Founded' },
  { value: `${projects.length}`, label: 'Products Shipped' },
  { value: '100%', label: 'Remote Team' },
  { value: 'EU', label: 'Based in Estonia' },
];

export default function Careers() {
  const hasOpenRoles = openRoles.length > 0;

  return (
    <>
      <SEO
        title="Careers at DigiInsaf"
        description="Join the DigiInsaf team — an Estonia-based digital product studio. Remote-first, craft-focused, and always interested in talented engineers and designers."
      />

      <PageHero
        tone="navy"
        eyebrow="Careers at DigiInsaf"
        title="Build real products with a craft-focused team."
        description="We're a small, growing digital product studio based in Tallinn, Estonia. We're not always actively hiring, but we're always glad to hear from talented people who care about their work."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Career Interest — DigiInsaf`}
            className="inline-flex items-center gap-2.5 rounded-xl bg-cyan-500 px-7 py-4 text-sm font-bold text-sea-950 transition-colors hover:bg-cyan-400"
          >
            <Mail className="h-4 w-4" />
            Send Your CV
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <Users className="h-4 w-4" />
            Learn About Us
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="block text-3xl font-black text-cyan-300 sm:text-4xl">{s.value}</span>
              <span className="text-xs text-graphite-400 mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Perks / Benefits */}
      <section className="bg-paper py-20">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Why Join Us</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">What working here looks like.</h2>
            <p className="mt-3 text-sm text-charcoal-muted max-w-xl mx-auto">
              We're building a culture where talented people can do their best work on meaningful products.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  {...fadeUpViewportStagger(i)}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-hairline bg-white p-6 shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-200 transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea-50 text-sea-700 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal">{perk.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20 border-y border-hairline">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Open Positions</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">Current openings.</h2>
          </motion.div>

          {hasOpenRoles ? (
            <div className="mx-auto max-w-3xl space-y-4">
              {openRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  {...fadeUpViewportStagger(i)}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-paper px-6 py-5 hover:border-sea-300 hover:bg-white hover:shadow-elevation-sm transition-all cursor-pointer"
                >
                  <div>
                    <h3 className="text-base font-bold text-charcoal group-hover:text-sea-800 transition-colors">{role.title}</h3>
                    <div className="mt-1.5 flex flex-wrap gap-3 text-xs text-charcoal-muted">
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {role.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {role.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {role.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-sea-700 shrink-0 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div {...fadeUpViewport} className="mx-auto max-w-2xl">
              <div className="rounded-2xl border border-dashed border-sea-200 bg-sea-50/40 p-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sea-100 border border-sea-200">
                  <Sparkles className="h-7 w-7 text-sea-700" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">No open positions right now</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed max-w-md mx-auto mb-6">
                  We don't have any roles listed at the moment. If that changes, we'll post them here first. In the meantime, we're always happy to hear from talented people.
                </p>

                <div className="rounded-xl border border-hairline bg-white p-6 text-left shadow-elevation-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sea-50 border border-hairline">
                      <Mail className="h-5 w-5 text-sea-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-charcoal mb-1">Send a spontaneous application</h4>
                      <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                        Think you'd be a good fit for a future role? Send your CV and a short note to{' '}
                        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-sea-700 hover:text-sea-800 underline underline-offset-2">
                          {siteConfig.contact.email}
                        </a>
                        . We read every message.
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}?subject=Spontaneous Application — DigiInsaf`}
                        className="inline-flex items-center gap-2 rounded-xl bg-sea-950 px-5 py-2.5 text-xs font-bold text-white hover:bg-sea-800 transition-colors shadow-elevation-sm"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email Your CV
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Team Culture / Values */}
      <section className="bg-sea-950 py-20">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Culture</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">What we value in the people we work with.</h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                {...fadeUpViewportStagger(i)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors"
              >
                <span className="block text-4xl font-black text-white/10 mb-4 select-none">{v.number}</span>
                <h3 className="text-sm font-bold text-white leading-snug mb-2">{v.title}</h3>
                <p className="text-xs leading-relaxed text-graphite-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white py-20 border-b border-hairline">
        <div className="container-xl grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div {...fadeUpViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Who We're Looking For</span>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl leading-tight">
              The kind of people who thrive here.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
              We're less concerned with specific years of experience and more interested in people who take pride in their craft, communicate well, and want to grow alongside a product-focused team.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Strong fundamentals in your area (engineering, design, or product)',
                'Clear written communication in English',
                'Comfortable working remotely and managing your own time',
                'Genuine interest in product quality, not just feature delivery',
                'Proactive — flags problems early and suggests solutions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sea-700 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUpViewport} className="rounded-2xl bg-sea-950 p-8 text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 mb-6">
              <Star className="h-7 w-7 text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ready to apply?</h3>
            <p className="text-sm leading-relaxed text-graphite-400 mb-6">
              Even if we don't have an open role right now, we keep strong candidates in mind for future opportunities. Send us your CV and tell us a bit about what you've worked on.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { icon: Mail, label: 'Email', value: siteConfig.contact.email },
                { icon: MapPin, label: 'Location', value: 'Tallinn, Estonia (Remote)' },
                { icon: Clock, label: 'Response', value: 'Within 48 hours' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-xs">
                  <Icon className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-graphite-400">{label}:</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Career Application — DigiInsaf`}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-sea-950 transition-colors hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" />
              Send Your Application
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-paper py-16">
        <div className="container-xl text-center">
          <motion.div {...fadeUpViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Still curious?</span>
            <h2 className="mt-2 text-2xl font-extrabold text-charcoal sm:text-3xl">
              Don't see a role that fits? Reach out anyway.
            </h2>
            <p className="mt-3 text-sm text-charcoal-muted max-w-lg mx-auto">
              We'd rather hear from good people early than miss them because a specific role wasn't listed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Career Interest`}
                className="inline-flex items-center gap-2 rounded-xl bg-sea-950 px-7 py-4 text-sm font-bold text-white shadow-elevation-md hover:bg-sea-800 hover:shadow-elevation-lg transition-all"
              >
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
              <Link to="/about" className="text-sm font-semibold text-charcoal-muted hover:text-charcoal transition-colors underline underline-offset-4">
                Learn more about the team →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
