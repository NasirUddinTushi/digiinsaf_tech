import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';
import { cn } from '@/utils/cn';

const gradients = [
  'from-cyan-600 to-violet-600',
  'from-violet-600 to-ink-700',
  'from-ink-700 to-cyan-600',
  'from-cyan-500 to-violet-500',
];

export default function ProjectCard({ project, index = 0 }) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      {...fadeUpViewportStagger(index)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.055] shadow-card-dark backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.11] via-transparent to-cyan-300/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} website screenshot`}
              loading="lazy"
              width="640"
              height="384"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_28%),linear-gradient(0deg,rgba(5,7,13,0.88),rgba(5,7,13,0.18)_42%,transparent_68%)]" />
          </>
        ) : (
          <>
            <span className="px-6 text-center text-lg font-semibold leading-snug text-white/90">{project.title}</span>
            <div className="absolute inset-0 bg-grid-glow opacity-60" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_22%_0%,rgba(255,255,255,0.24),transparent_32%),linear-gradient(180deg,transparent_42%,rgba(5,7,13,0.72))] opacity-80" />
          </>
        )}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-3">
          <div>
            <p className="text-caption font-semibold uppercase tracking-wider text-cyan-100/80">
              {project.industry}
              {project.country ? ` / ${project.country}` : ''}
            </p>
            <h3 className="mt-1 line-clamp-2 text-xl font-semibold leading-tight text-white">{project.title}</h3>
          </div>
          {project.isDemo && (
            <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
              Demo
            </span>
          )}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-5 text-body-sm leading-relaxed text-mist-200/75">{project.summary}</p>

        {project.servicesDelivered?.length > 0 && (
          <p className="mb-3 text-body-sm text-mist-200/70">
            <span className="font-medium text-white">Services: </span>
            {project.servicesDelivered.join(', ')}
          </p>
        )}

        {project.techStack?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-medium text-mist-100/75"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.outcome && (
          <p className="mb-5 rounded-2xl border border-cyan-300/[0.15] bg-cyan-300/[0.06] p-3 text-body-sm text-cyan-50/80">
            <span className="font-medium text-cyan-100">Result: </span>
            {project.outcome}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'focus-ring inline-flex w-fit items-center gap-1.5 rounded-full border px-3.5 py-2 text-caption font-semibold transition-all duration-300',
                'border-white/[0.12] bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-cyan-300/[0.45] hover:bg-cyan-300/[0.12] hover:text-cyan-100'
              )}
            >
              Live Website
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <Link
            to={`/work/${project.slug}`}
            className="focus-ring inline-flex w-fit items-center gap-1.5 rounded-full bg-cyan-600 px-3.5 py-2 text-caption font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500"
          >
            Case Study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
