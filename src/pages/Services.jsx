import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceCard from '@/components/cards/ServiceCard';
import ProcessTimeline from '@/components/common/ProcessTimeline';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { services } from '@/data/services';
import { engagementModels, engagementNote } from '@/data/industries';
import { processSteps } from '@/data/process';
import { faqs } from '@/data/faqs';
import Icon from '@/components/common/Icon';

const benefits = [
  { title: 'One team, full lifecycle', description: 'Strategy, design and engineering under one roof, so nothing gets lost between handoffs.', icon: 'Layers' },
  { title: 'Right-sized technology', description: 'We recommend the simplest stack that meets the requirement, not the most fashionable one.', icon: 'SlidersHorizontal' },
  { title: 'Built to scale', description: 'Architecture decisions consider where the product needs to be in a year, not just at launch.', icon: 'TrendingUp' },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'Flutter',
  'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'AWS', 'Figma', 'Shopify', 'Webflow',
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="UI/UX design, web development, mobile app development, AI solutions, SaaS and CRM builds, CMS and e-commerce, branding and cloud services from Digiinsaf."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Services covering the full digital product lifecycle.
            </h1>
            <p className="mt-5 text-lg text-mist-200/75">
              From first sketch to production infrastructure, our services are structured so you can
              engage for a single service or the complete journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Why it works" title="Benefits of working across the full lifecycle." align="center" className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl2 border border-white/10 bg-white/[0.04] p-7 text-center">
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon name={benefit.icon} className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-graphite-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <SectionHeading eyebrow="Technology capabilities" title="Platforms and languages we work in daily." align="center" className="mb-10" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-graphite-500">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Engagement models" title="Choose the model that fits your project." align="center" className="mb-14" />
          <div className="grid gap-5 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="rounded-xl2 border border-white/10 bg-white/[0.04] p-7">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon name={model.icon} className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{model.title}</h3>
                <p className="text-sm leading-relaxed text-graphite-500">{model.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-graphite-500">{engagementNote}</p>
        </div>
      </section>

      <section className="theme-dark-section bg-ink-950 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Process preview"
            title="A structured path from discovery to launch."
            tone="dark"
            align="center"
            className="mb-14"
          />
          <ProcessTimeline steps={processSteps.slice(0, 3)} tone="dark" />
          <div className="mt-10 flex justify-center">
            <Button to="/process" variant="outlineLight" size="lg" className="dark-chip">
              See the Complete Process
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="container-xl bg-ink-900 max-w-3xl scroll-mt-24 py-20 sm:py-28">
        <SectionHeading eyebrow="FAQ" title="Common questions about our services." align="center" className="mb-12" />
        <FAQAccordion items={faqs} />
      </section>

      <div className="pb-20 sm:pb-28">
        <CTASection />
      </div>
    </>
  );
}
