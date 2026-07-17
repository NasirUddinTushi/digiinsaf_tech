import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Compact card used for "related case studies" strips on service and
// case-study pages (as opposed to ProjectCard, used in the main portfolio grid).
export default function CaseStudyCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="surface-card focus-ring group flex items-center justify-between gap-4 p-5 hover:-translate-y-0.5 hover:border-white/25"
    >
      <div>
        <p className="text-caption font-medium uppercase tracking-wider text-graphite-400">
          {project.industry}
        </p>
        <p className="mt-1 font-semibold text-white">{project.title}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-graphite-400 transition-colors group-hover:text-cyan-400" />
    </Link>
  );
}
