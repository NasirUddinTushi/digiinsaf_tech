import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Breadcrumb({ items, tone = 'light' }) {
  const onDark = tone === 'dark';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className={cn('h-3.5 w-3.5', onDark ? 'text-white/30' : 'text-charcoal-muted/50')} aria-hidden="true" />
              )}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={cn('focus-ring rounded', onDark ? 'text-white/60 hover:text-white' : 'text-charcoal-muted hover:text-charcoal')}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={onDark ? 'text-white' : 'text-charcoal'}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
