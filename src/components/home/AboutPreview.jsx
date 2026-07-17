import { motion } from 'framer-motion';
import { Compass, MessageCircle, Layers, LifeBuoy } from 'lucide-react';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import { fadeUpViewport } from '@/utils/motionVariants';

const points = [
  { icon: Compass, label: 'Strategy-led approach' },
  { icon: MessageCircle, label: 'Transparent communication' },
  { icon: Layers, label: 'Scalable architecture' },
  { icon: LifeBuoy, label: 'Long-term support' },
];

export default function AboutPreview() {
  return (
    <Section tone="light" containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <SectionHeading
        eyebrow="About Digiinsaf"
        title="An Estonia-Based Digital Product Partner"
        description="Digiinsaf is building a modern technology company focused on quality, transparency and long-term client relationships. We work with startups and businesses internationally, supporting projects from idea through to launch and ongoing maintenance."
      />

      <motion.div {...fadeUpViewport} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {points.map(({ icon: PointIcon, label }) => (
          <div key={label} className="surface-card group flex items-center gap-3 p-4 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-elevation-md">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <PointIcon className="h-5 w-5" />
            </span>
            <span className="text-body-sm font-medium text-white">{label}</span>
          </div>
        ))}
        <div className="col-span-full mt-2">
          <Button to="/about" variant="secondary" size="md">
            Learn About Digiinsaf
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
