import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/cards/ProjectCard';
import IndustryCard from '@/components/cards/IndustryCard';
import CTASection from '@/components/common/CTASection';
import EmptyState from '@/components/common/EmptyState';
import { projects, projectCategories } from '@/data/projects';
import { industries } from '@/data/industries';
import { cn } from '@/utils/cn';

const capabilities = ['React', 'Next.js', 'Node.js', 'Flutter', 'Figma', 'AWS', 'Shopify', 'PostgreSQL'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Work"
        description="Demo case studies across SaaS, e-commerce, healthcare, AI, mobile and corporate technology projects."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Work' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              A look at how we approach real product problems.
            </h1>
            <p className="mt-5 text-lg text-mist-200/75">
              The projects below are demo case studies illustrating our process, technology choices
              and delivery approach across different industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={activeCategory === category.key}
              className={cn(
                'focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                activeCategory === category.key
                  ? 'border-transparent bg-ink-950 text-white'
                  : 'border-white/10 bg-white/[0.04] text-graphite-500 hover:border-white/20'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <EmptyState
            icon="SearchX"
            title="No projects in this category yet"
            description="Try a different filter to see more of our demo case studies."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Industries" title="Sectors represented in our work." align="center" className="mb-14" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <SectionHeading eyebrow="Capabilities" title="Technology represented across these projects." align="center" className="mb-10" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {capabilities.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-graphite-500">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CTASection />
      </div>
    </>
  );
}
