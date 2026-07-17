import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Icon from '@/components/common/Icon';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function SolutionCard({ solution, index = 0, linkTo }) {
  const Wrapper = linkTo ? Link : 'div';
  const wrapperProps = linkTo ? { to: linkTo } : {};
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      id={solution.slug}
      {...fadeUpViewportStagger(index)}
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative h-full scroll-mt-28 overflow-hidden rounded-[1.35rem] border border-white/[0.12] bg-white/[0.085] shadow-card-dark backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.13] via-transparent to-violet-300/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Wrapper {...wrapperProps} className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_-16px_rgba(54,112,221,0.8)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/[0.45] group-hover:bg-cyan-300/[0.15]">
            <Icon name={solution.icon} className="h-5 w-5" />
          </span>
          <span className="font-heading text-4xl font-semibold leading-none text-white/10 transition-colors duration-300 group-hover:text-cyan-300/25">
            {number}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{solution.title}</h3>
        <p className="mb-6 flex-1 text-body-sm font-medium leading-relaxed text-mist-200">
          {solution.shortDescription}
        </p>
        {linkTo && (
          <span className="focus-ring inline-flex w-fit items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-2 text-caption font-semibold text-white transition-all duration-300 group-hover:border-cyan-300/[0.45] group-hover:bg-cyan-300/[0.12] group-hover:text-cyan-100">
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </Wrapper>
    </motion.article>
  );
}
