import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.figure {...fadeUpViewportStagger(index)} className="surface-card flex h-full flex-col p-7">
      <Quote className="mb-4 h-6 w-6 text-cyan-400" aria-hidden="true" />
      <blockquote className="flex-1 text-body-sm leading-relaxed text-graphite-600">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4">
        <p className="text-body-sm font-semibold text-white">{testimonial.name}</p>
        <p className="text-caption text-muted-onlight">{testimonial.role}</p>
      </figcaption>
    </motion.figure>
  );
}
