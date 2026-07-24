import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/common/SEO';
import ProjectCard from '@/components/cards/ProjectCard';
import CTASection from '@/components/common/CTASection';
import EmptyState from '@/components/common/EmptyState';
import { projects, projectCategories } from '@/data/projects';
import { industries } from '@/data/industries';
import { Briefcase, TrendingUp, Globe, Code } from 'lucide-react';

const capabilities = ['React', 'Next.js', 'Node.js', 'Flutter', 'Figma', 'AWS', 'Shopify', 'PostgreSQL'];
const categoryEmojis = { all: '🗂️', web: '🌐', ecommerce: '🛒', saas: '⚙️', services: '🔧' };

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <SEO title="Work" description="Real client projects and concept case studies from DigiInsaf across web, mobile, SaaS and AI." />

      {/* Hero */}
      <section className="relative overflow-hidden bg-sea-950 pt-[clamp(64px,10vw,120px)] pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-mesh-drift" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/8 blur-[120px] animate-mesh-drift" style={{ animationDelay: '-5s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-5">
              <Briefcase className="h-3.5 w-3.5" /> Our Work
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              A look at how we approach{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                real product problems.
              </span>
            </h1>
            <p className="mt-5 text-base text-graphite-300 sm:text-lg leading-relaxed max-w-2xl">
              A mix of real client projects and concept case studies, shown here to illustrate our process, technology choices and delivery approach across industries.
            </p>
          </motion.div>

          {/* Mini stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {[{ n: '40+', l: 'Projects Shipped' }, { n: '5', l: 'Industry Sectors' }, { n: '12+', l: 'Countries' }, { n: '98%', l: 'On-Time Delivery' }].map((s) => (
              <div key={s.l}>
                <span className="block text-2xl font-black text-cyan-300">{s.n}</span>
                <span className="text-xs text-graphite-400">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#f8f7f3] py-16">
        <div className="container-xl">
          {/* Filter Pills */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  aria-pressed={isActive}
                  className={`relative flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive ? 'text-white shadow-[0_0_20px_-4px_rgba(6,182,212,0.4)]' : 'border border-hairline bg-white text-charcoal-muted hover:border-sea-300 hover:text-charcoal'
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="workPageCategoryIndicator" className="absolute inset-0 rounded-full bg-gradient-to-r from-sea-900 to-sea-800" transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{categoryEmojis[cat.key]}</span> {cat.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}>
              {filteredProjects.length === 0 ? (
                <EmptyState icon="SearchX" title="No projects in this category yet" description="Try a different filter to see more of our work." />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} variant="compact" />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-sea-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Industries</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Sectors represented in our work.</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center hover:border-cyan-500/30 hover:bg-white/8 transition-all cursor-default"
              >
                <span className="text-2xl">{industry.emoji || '🏢'}</span>
                <span className="text-xs font-semibold text-graphite-300 leading-snug">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Capabilities */}
      <section className="bg-white py-14 border-b border-hairline">
        <div className="container-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Capabilities</span>
            <h2 className="mt-2 text-2xl font-extrabold text-charcoal sm:text-3xl">Technology represented across these projects.</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="rounded-full border border-hairline bg-sea-50 px-5 py-2.5 text-sm font-semibold text-sea-800 cursor-default hover:border-sea-300 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
