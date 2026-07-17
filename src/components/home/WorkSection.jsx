import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import ProjectCard from '@/components/cards/ProjectCard';
import Section from '@/components/common/Section';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/utils/cn';

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <Section tone="dark" className="theme-dark-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-45" aria-hidden="true" />
      <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="A closer look at how we approach real problems."
          description="A mix of real client work and demo case studies illustrating our process across web, mobile, SaaS and AI projects."
          tone="dark"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl" role="group" aria-label="Filter projects by category">
        {projectCategories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveCategory(category.key)}
            aria-pressed={activeCategory === category.key}
            className={cn(
              'focus-ring relative isolate overflow-hidden rounded-full border px-4 py-2 text-body-sm font-semibold transition-all duration-300',
              activeCategory === category.key
                ? 'border-cyan-300/30 text-white shadow-glow'
                : 'border-white/10 bg-white/[0.035] text-muted-ondark hover:border-cyan-400/40 hover:bg-white/[0.07] hover:text-white'
            )}
          >
            {activeCategory === category.key && (
              <motion.span
                layoutId="project-filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-cyan-600"
                transition={{ type: 'spring', stiffness: 360, damping: 32 }}
              />
            )}
            <span className="relative">{category.label}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button to="/work" variant="outlineLight" size="lg">
          View Full Portfolio
        </Button>
      </div>
    </Section>
  );
}
