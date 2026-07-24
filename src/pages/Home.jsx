import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesSection from '@/components/home/ServicesSection';
import WorkSection from '@/components/home/WorkSection';
import WhyDigiInsaf from '@/components/home/WhyDigiInsaf';
import EngagementModels from '@/components/home/EngagementModels';
import ProcessSection from '@/components/home/ProcessSection';
import TechStrip from '@/components/home/TechStrip';
import HomeFAQ from '@/components/home/HomeFAQ';
import CTASection from '@/components/common/CTASection';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <SEO
        title="Digital Product Partner"
        description="DigiInsaf helps startups and growing companies design, develop and improve reliable web platforms, mobile applications and intelligent business solutions."
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WorkSection />
      <WhyDigiInsaf />
      <EngagementModels />
      <ProcessSection />
      <TechStrip />
      <HomeFAQ />
      <CTABanner />
      <CTASection />
    </>
  );
}
