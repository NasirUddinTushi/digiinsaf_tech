import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Compact card used for "related case studies" strips on service and
// case-study pages (as opposed to ProjectCard, used in the main portfolio grid).
export default function CaseStudyCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="focus-ring group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-white p-5 transition-shadow duration-300 hover:shadow-elevation-sm"
    >
      <div>
        <p className="text-caption font-medium uppercase tracking-wider text-charcoal-muted">
          {project.industry}
        </p>
        <p className="mt-1 font-semibold text-charcoal">{project.title}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-charcoal-muted transition-colors group-hover:text-sea-700" />
    </Link>
  );
}
