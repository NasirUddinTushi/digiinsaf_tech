import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import ProjectCard from '@/components/cards/ProjectCard';
import CTASection from '@/components/common/CTASection';
import EmptyState from '@/components/common/EmptyState';
import Icon from '@/components/common/Icon';
import { projects, projectCategories } from '@/data/projects';
import { industries } from '@/data/industries';
import { fadeUpViewport, fadeUpViewportStagger } from '@/utils/motionVariants';

const capabilities = ['React', 'Next.js', 'Node.js', 'Flutter', 'Figma', 'AWS', 'Shopify', 'PostgreSQL'];

const industrySectorCount = new Set(projects.map((p) => p.industry)).size;
const countryCount = new Set(projects.map((p) => p.country.split(' / ')[0])).size;

const stats = [
  { n: `${projects.length}`, l: 'Projects Shipped' },
  { n: `${industrySectorCount}`, l: 'Industry Sectors' },
  { n: `${countryCount}`, l: 'Countries' },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <SEO title="Work" description="Real client projects and concept case studies from DigiInsaf across web, mobile, SaaS and AI." />

      <PageHero
        tone="navy"
        eyebrow="Our Work"
        title="A look at how we approach real product problems."
        description="A mix of real client projects and concept case studies, shown here to illustrate our process, technology choices and delivery approach across industries."
      >
        <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.l}>
              <span className="block text-2xl font-black text-cyan-300">{s.n}</span>
              <span className="text-xs text-graphite-400">{s.l}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Projects Grid */}
      <section className="bg-paper py-16">
        <div className="container-xl">
          {/* Filter Pills */}
          <motion.div {...fadeUpViewport} className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  aria-pressed={isActive}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'border border-hairline bg-white text-charcoal-muted hover:border-sea-300 hover:text-charcoal'
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="workPageCategoryIndicator" className="absolute inset-0 rounded-full bg-sea-800" transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />
                  )}
                  <span className="relative z-10">{cat.label}</span>
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
      <section className="bg-sea-950 py-16">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Industries</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Sectors we're set up to design and build for.</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                {...fadeUpViewportStagger(i)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-white/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <Icon name={industry.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-graphite-300 leading-snug">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Capabilities */}
      <section className="bg-white py-14 border-b border-hairline">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Capabilities</span>
            <h2 className="mt-2 text-2xl font-extrabold text-charcoal sm:text-3xl">Technology represented across these projects.</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-hairline bg-sea-50 px-5 py-2.5 text-sm font-semibold text-sea-800 transition-colors hover:border-sea-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
