import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Code2, Globe, Smartphone, BrainCircuit } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTASection from '@/components/common/CTASection';
import ProjectCard from '@/components/cards/ProjectCard';
import EngagementModels from '@/components/home/EngagementModels';
import ProcessSection from '@/components/home/ProcessSection';
import TechStrip from '@/components/home/TechStrip';
import { capabilityGroups } from '@/data/capabilityGroups';
import { getServiceBySlug } from '@/data/services';
import { faqs } from '@/data/faqs';
import { getProjectBySlug } from '@/data/projects';
import { fadeUpViewport, fadeUpViewportStagger } from '@/utils/motionVariants';

const relatedWorkSlugs = ['happy-home-tex', 'fawz-cleaning-and-gardening'];
const groupIcons = [Code2, Globe, Smartphone, BrainCircuit];

export default function Services() {
  const relatedWork = relatedWorkSlugs.map(getProjectBySlug);

  return (
    <>
      <SEO
        title="Services & Scope Calculator"
        description="UI/UX design, web and software development, mobile app development, and AI and business automation from DigiInsaf."
      />

      <PageHero
        tone="navy"
        eyebrow="Services"
        title="Services covering the full digital product lifecycle."
        description="Every engagement starts from the business outcome, not a fixed package. Below are the four capabilities we work in, and where they apply."
      />

      {/* Capability Groups */}
      <section className="bg-paper py-16">
        <div className="container-xl space-y-8">
          {capabilityGroups.map((group, index) => {
            const groupServices = group.services.map(getServiceBySlug).filter(Boolean);
            const signs = groupServices.map((service) => service.problems[0]).slice(0, 4);
            const IconComp = groupIcons[index % groupIcons.length];

            return (
              <motion.div
                key={group.category}
                {...fadeUpViewportStagger(index)}
                className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-sm hover:shadow-elevation-md transition-shadow duration-300"
              >
                <div className="h-1 w-full bg-sea-700" />

                <div className="grid gap-8 p-8 lg:grid-cols-12">
                  {/* Left: Group info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea-50 text-sea-700">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-sea-200 bg-sea-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sea-700">
                        {group.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold leading-snug text-charcoal sm:text-2xl">{group.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{group.description}</p>
                  </div>

                  {/* Middle: Signs */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">Signs you need this</h3>
                    <ul className="space-y-2.5">
                      {signs.map((problem) => (
                        <li key={problem} className="flex items-start gap-2.5 text-sm text-charcoal-muted">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Services */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">Individual services</h3>
                    <ul className="grid gap-2">
                      {groupServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-sea-200 bg-sea-50 px-4 py-3 transition-colors hover:bg-sea-100"
                          >
                            <span className="text-sm font-semibold text-sea-700">{service.name}</span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-sea-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <TechStrip />
      <EngagementModels />
      <ProcessSection />

      {/* Related Work */}
      <section className="bg-paper py-16">
        <div className="container-xl">
          <motion.div {...fadeUpViewport} className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Selected Related Work</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">Services applied to real projects.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedWork.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 border-b border-hairline">
        <div className="container-xl mx-auto max-w-3xl">
          <motion.div {...fadeUpViewport} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">FAQ</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">Common questions about our services.</h2>
          </motion.div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
