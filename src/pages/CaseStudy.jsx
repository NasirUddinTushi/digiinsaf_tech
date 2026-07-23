import { useParams, Navigate } from 'react-router-dom';
import { LayoutGrid, ExternalLink } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import Badge from '@/components/common/Badge';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { getProjectBySlug, projects } from '@/data/projects';
import { cn } from '@/utils/cn';

const narrativeSections = [
  { key: 'challenge', title: 'The Challenge' },
  { key: 'research', title: 'Research and Discovery' },
  { key: 'strategy', title: 'Strategy' },
  { key: 'designApproach', title: 'Design Approach' },
  { key: 'developmentApproach', title: 'Development Approach' },
  { key: 'solution', title: 'The Solution' },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/work" replace />;

  const relatedProjects = projects.filter(
    (item) => project.relatedWork?.includes(item.slug) && item.slug !== project.slug
  );

  return (
    <>
      <SEO title={project.title} description={project.summary} />

      <PageHero breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Work', to: '/work' }, { label: project.title }]} tone="navy">
        {project.isDemo && (
          <Badge tone="brandOnDark" className="mb-4">
            {project.clientLabel}
          </Badge>
        )}
        <h1 className="text-4xl leading-tight text-white sm:text-h1">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-body-lg leading-relaxed text-white/70">{project.summary}</p>
        {project.liveUrl && (
          <div className="mt-6">
            <Button href={project.liveUrl} variant="outlineLight" size="md">
              Visit Live Website
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-8 sm:grid-cols-4">
          <div>
            <p className="text-caption uppercase tracking-wider text-white/50">Industry</p>
            <p className="mt-1 text-body-sm font-medium text-white">
              {project.industry}
              {project.country ? ` · ${project.country}` : ''}
            </p>
          </div>
          {project.timeline && (
            <div>
              <p className="text-caption uppercase tracking-wider text-white/50">Timeline</p>
              <p className="mt-1 text-body-sm font-medium text-white">{project.timeline}</p>
            </div>
          )}
          {project.servicesDelivered?.length > 0 && (
            <div className="col-span-2 sm:col-span-1">
              <p className="text-caption uppercase tracking-wider text-white/50">Services</p>
              <p className="mt-1 text-body-sm font-medium text-white">{project.servicesDelivered.join(', ')}</p>
            </div>
          )}
          {project.techStack?.length > 0 && (
            <div>
              <p className="text-caption uppercase tracking-wider text-white/50">Tech stack</p>
              <p className="mt-1 text-body-sm font-medium text-white">{project.techStack.join(', ')}</p>
            </div>
          )}
        </div>
      </PageHero>

      {project.image && (
        <div className="bg-paper pt-12">
          <div className="container-xl">
            <img
              src={project.image}
              alt={`${project.title} website screenshot`}
              loading="lazy"
              className="w-full rounded-2xl border border-hairline object-cover shadow-elevation-md"
            />
          </div>
        </div>
      )}

      {narrativeSections.some(({ key }) => project[key]) && (
        <Section tone="paper">
          <div className="mx-auto max-w-3xl space-y-12">
            {narrativeSections
              .filter(({ key }) => project[key])
              .map(({ key, title }) => (
                <div key={key}>
                  <h2 className="mb-3 text-2xl font-semibold text-charcoal">{title}</h2>
                  <p className="leading-relaxed text-charcoal-muted">{project[key]}</p>
                </div>
              ))}
          </div>
        </Section>
      )}

      {project.keyScreens?.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="Key screens" title="Core parts of the experience." align="center" tone="light" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.keyScreens.map((screen) => (
              <div key={screen} className="flex flex-col items-center gap-3 rounded-xl2 border border-hairline bg-paper p-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea-50 text-sea-700">
                  <LayoutGrid className="h-5 w-5" />
                </span>
                <span className="text-body-sm font-medium text-charcoal">{screen}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section tone="paper">
        {project.outcome && (
          <div className="rounded-xl2 border border-hairline bg-white p-8 sm:p-10">
            <h2 className="mb-3 text-2xl font-semibold text-charcoal">Outcome</h2>
            <p className="leading-relaxed text-charcoal-muted">{project.outcome}</p>
          </div>
        )}

        <div className={cn('rounded-xl2 border border-dashed border-hairline p-8 text-center sm:p-10', project.outcome && 'mt-8')}>
          <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-sea-700">Testimonial placeholder</p>
          <p className="mx-auto max-w-xl text-charcoal-muted">
            A verified client testimonial for this project will be added here once available.
          </p>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="Related work" title="More projects worth a look." tone="light" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedProjects.slice(0, 4).map((related) => (
              <CaseStudyCard key={related.slug} project={related} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
