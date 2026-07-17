import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, ExternalLink } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
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

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Work', to: '/work' }, { label: project.title }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-3xl"
          >
            {project.isDemo && (
              <span className="dark-chip mb-4 inline-block rounded-full bg-violet-500/[0.15] px-3.5 py-1.5 text-xs font-semibold text-violet-300">
                {project.clientLabel}
              </span>
            )}
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-lg text-mist-200/75">{project.summary}</p>
            {project.liveUrl && (
              <div className="mt-6">
                <Button href={project.liveUrl} variant="outlineLight" size="md" className="dark-chip">
                  Visit Live Website
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            )}
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-mist-200/50">Industry</p>
              <p className="mt-1 text-sm font-medium text-white">
                {project.industry}
                {project.country ? ` · ${project.country}` : ''}
              </p>
            </div>
            {project.timeline && (
              <div>
                <p className="text-xs uppercase tracking-wider text-mist-200/50">Timeline</p>
                <p className="mt-1 text-sm font-medium text-white">{project.timeline}</p>
              </div>
            )}
            {project.servicesDelivered?.length > 0 && (
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs uppercase tracking-wider text-mist-200/50">Services</p>
                <p className="mt-1 text-sm font-medium text-white">{project.servicesDelivered.join(', ')}</p>
              </div>
            )}
            {project.techStack?.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-mist-200/50">Tech stack</p>
                <p className="mt-1 text-sm font-medium text-white">{project.techStack.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {narrativeSections.some(({ key }) => project[key]) && (
        <section className="container-xl bg-ink-900 max-w-3xl py-20 sm:py-28">
          <div className="space-y-12">
            {narrativeSections
              .filter(({ key }) => project[key])
              .map(({ key, title }) => (
                <div key={key}>
                  <h2 className="mb-3 text-2xl font-semibold text-white">{title}</h2>
                  <p className="leading-relaxed text-graphite-500">{project[key]}</p>
                </div>
              ))}
          </div>
        </section>
      )}

      {project.keyScreens?.length > 0 && (
        <section className="bg-ink-800 py-20 sm:py-28">
          <div className="container-xl">
            <SectionHeading eyebrow="Key screens" title="Core parts of the experience." align="center" className="mb-10" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.keyScreens.map((screen) => (
                <div key={screen} className="flex flex-col items-center gap-3 rounded-xl2 border border-white/10 bg-white/[0.04] p-6 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <LayoutGrid className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-white">{screen}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        {project.outcome && (
          <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <h2 className="mb-3 text-2xl font-semibold text-white">Outcome</h2>
            <p className="leading-relaxed text-graphite-500">{project.outcome}</p>
          </div>
        )}

        <div className={cn('rounded-xl2 border border-dashed border-white/15 p-8 text-center sm:p-10', project.outcome && 'mt-8')}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            Testimonial placeholder
          </p>
          <p className="mx-auto max-w-xl text-graphite-500">
            A verified client testimonial for this project will be added here once available.
          </p>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-ink-800 py-20 sm:py-28">
          <div className="container-xl">
            <SectionHeading eyebrow="Related work" title="More projects worth a look." className="mb-10" />
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedProjects.slice(0, 4).map((related) => (
                <CaseStudyCard key={related.slug} project={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-20 sm:py-28">
        <CTASection />
      </div>
    </>
  );
}
