import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';
import { cn } from '@/utils/cn';

export default function ProjectCard({ project, index = 0, variant = 'compact' }) {
  const featured = variant === 'featured';

  return (
    <motion.article
      {...fadeUpViewportStagger(index)}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-sm transition-all duration-300 hover:shadow-elevation-md hover:border-sea-700/40',
        featured && 'lg:flex-row lg:items-stretch'
      )}
    >
      {/* Browser Frame Window Header */}
      <div
        className={cn(
          'relative flex flex-col overflow-hidden bg-sea-50 border-b border-hairline',
          featured ? 'aspect-[16/11] lg:aspect-auto lg:w-[55%]' : 'aspect-[16/10]'
        )}
      >
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-hairline bg-slate-100/90 px-4 py-2 text-[11px] text-graphite-600">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="font-mono text-[10px] text-graphite-500 truncate max-w-[200px]">
            {project.liveUrl ? project.liveUrl.replace('https://', '') : project.slug}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-signal-green">
            ● Live
          </span>
        </div>

        {/* Real Screenshot Preview */}
        {project.image ? (
          <div className="relative flex-1 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              width="800"
              height="520"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-body-sm font-semibold text-sea-700">
            {project.title}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className={cn('flex flex-1 flex-col p-6 sm:p-7 text-charcoal', featured && 'lg:justify-center lg:p-8')}>
        <div className="flex items-center justify-between text-caption font-semibold uppercase tracking-wider text-sea-700">
          <span>{project.industry}</span>
          {project.country && <span className="text-charcoal-muted font-normal">📍 {project.country}</span>}
        </div>

        <h3 className={cn('mt-2 font-extrabold leading-snug text-charcoal group-hover:text-sea-700 transition-colors', featured ? 'text-2xl sm:text-3xl' : 'text-xl')}>
          {project.title}
        </h3>

        <p className={cn('mt-3 leading-relaxed text-charcoal-muted', featured ? 'text-body' : 'text-body-sm')}>
          {project.summary}
        </p>

        {/* Tech Stack Badges */}
        {project.techStack && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-md border border-hairline bg-sea-50/80 px-2.5 py-0.5 text-[11px] font-medium text-sea-800">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.outcome && (
          <div className="mt-4 rounded-lg border border-sea-200 bg-sea-50/60 p-3 text-xs text-charcoal">
            <span className="font-bold text-sea-800 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-sea-700" /> Outcome:
            </span>{' '}
            {project.outcome}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-2 border-t border-hairline">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-4 py-2 text-xs font-semibold text-charcoal hover:border-sea-700 hover:text-sea-700 transition-colors"
            >
              Live Product <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <Link
            to={`/work/${project.slug}`}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-sea-950 px-4 py-2 text-xs font-semibold text-white hover:bg-sea-800 transition-colors"
          >
            Case Study <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
