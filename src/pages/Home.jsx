import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesSection from '@/components/home/ServicesSection';
import WorkSection from '@/components/home/WorkSection';
import WhyDigiInsaf from '@/components/home/WhyDigiInsaf';
import EngagementModels from '@/components/home/EngagementModels';
import ProjectEstimator from '@/components/forms/ProjectEstimator';
import ProcessSection from '@/components/home/ProcessSection';
import TechStrip from '@/components/home/TechStrip';
import AboutPreview from '@/components/home/AboutPreview';
import BlogPreview from '@/components/home/BlogPreview';
import CTASection from '@/components/common/CTASection';

export default function Home() {
  return (
    <>
      <SEO
        title="Digital Product Partner, Estonia"
        description="DigiInsaf helps startups and growing companies design, develop and improve reliable web platforms, mobile applications and intelligent business solutions."
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <div className="container-xl py-12">
        <ProjectEstimator />
      </div>
      <WorkSection />
      <WhyDigiInsaf />
      <EngagementModels />
      <ProcessSection />
      <TechStrip />
      <AboutPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
