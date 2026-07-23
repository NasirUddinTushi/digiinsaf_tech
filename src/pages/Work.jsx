import { useState, useMemo } from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
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
        description="Real client projects and concept case studies from DigiInsaf across web, mobile, SaaS and AI."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Work' }]}
        eyebrow="Our work"
        title="A look at how we approach real product problems."
        description="A mix of real client projects and concept case studies, shown here to illustrate our process, technology choices and delivery approach across industries."
        tone="navy"
        backgroundImage="/images/work-team-review.jpg"
        imageAlt="A group reviewing work together on a laptop"
      />

      <Section tone="surface">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={activeCategory === category.key}
              className={cn(
                'focus-ring rounded-full border px-4 py-2 text-body-sm font-medium transition-colors',
                activeCategory === category.key
                  ? 'border-sea-950 bg-sea-950 text-white'
                  : 'border-hairline bg-white text-charcoal-muted hover:border-sea-700 hover:text-charcoal'
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
            description="Try a different filter to see more of our work."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} variant="compact" />
            ))}
          </div>
        )}
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Industries" title="Sectors represented in our work." align="center" tone="light" className="mb-14" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Capabilities" title="Technology represented across these projects." align="center" tone="light" className="mb-10" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {capabilities.map((tech) => (
            <span key={tech} className="rounded-full border border-hairline bg-paper px-4 py-2 text-body-sm font-medium text-charcoal-muted">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
