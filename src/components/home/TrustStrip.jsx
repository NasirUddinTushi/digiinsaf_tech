import { Globe2 } from 'lucide-react';
import { projects } from '@/data/projects';

const wordmarks = [...projects, ...projects];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-sea-950 py-6">
      <div className="container-xl mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-graphite-400">
          Recent work
        </span>
        <div className="flex items-center gap-2 text-xs font-medium text-graphite-300">
          <Globe2 className="h-4 w-4 text-cyan-400" />
          <span>Delivering across South Asia, Australia &amp; Europe</span>
        </div>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-12 py-1 group-hover:[animation-play-state:paused]">
          {wordmarks.map((project, idx) => (
            <span
              key={`${project.slug}-${idx}`}
              className="whitespace-nowrap text-lg font-bold text-white/40 transition-colors hover:text-white/80"
            >
              {project.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
