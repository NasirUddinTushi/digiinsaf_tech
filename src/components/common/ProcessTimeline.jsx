import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInLeftViewport } from '@/utils/motionVariants';

export default function ProcessTimeline({ steps }) {
  return (
    <ol className="relative">
      <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-white/10 sm:block" aria-hidden="true" />
      <div className="grid gap-6">
        {steps.map((item, index) => (
          <motion.li
            key={item.step}
            {...fadeInLeftViewport}
            transition={{ ...fadeInLeftViewport.transition, delay: index * 0.06 }}
            className="relative flex flex-col gap-4 sm:flex-row sm:items-start"
          >
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-ink-900 text-sm font-semibold text-cyan-400">
              <Icon name={item.icon} className="h-5 w-5" />
            </div>
            <div className="flex-1 rounded-xl2 border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Step {item.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mb-4 text-body-sm leading-relaxed text-muted-ondark">{item.summary}</p>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-body-sm text-muted-ondark">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </div>
    </ol>
  );
}
