import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects, projectCategories } from '@/data/projects';

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categories?.includes(activeCategory);
  });

  const featured = filteredProjects[0];
  const secondary = filteredProjects.slice(1, 5);

  return (
    <Section tone="paper" className="relative overflow-hidden">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10">
        <SectionHeading
          eyebrow="Selected Portfolio"
          title="Digital products shipped for real companies."
          description="Explore our recent client deliverables across Web Platforms, E-commerce, SaaS, and Facility Management."
          tone="light"
        />

        {/* Animated Category Filter Pills */}
        <div className="flex flex-wrap gap-1 rounded-full border border-hairline bg-white p-1.5 shadow-elevation-sm">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'text-white'
                    : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="workCategoryIndicator"
                    className="absolute inset-0 rounded-full bg-sea-950"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid gap-8"
        >
          {featured && (
            <ProjectCard project={featured} index={0} variant="featured" />
          )}

          {secondary.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2">
              {secondary.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index + 1} variant="compact" />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-center">
        <Button to="/work" variant="primary" size="lg" className="hover:scale-[1.02] transition-transform">
          View All Case Studies & Work →
        </Button>
      </div>
    </Section>
  );
}
