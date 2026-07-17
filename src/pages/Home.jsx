import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import HomeImpactStrip from '@/components/home/HomeImpactStrip';
import TrustedApproach from '@/components/home/TrustedApproach';
import ServicesSection from '@/components/home/ServicesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import WorkSection from '@/components/home/WorkSection';
import ProcessSection from '@/components/home/ProcessSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TechStrip from '@/components/home/TechStrip';
import AboutPreview from '@/components/home/AboutPreview';
import EngagementModels from '@/components/home/EngagementModels';
import DigiAssistantPromo from '@/components/home/DigiAssistantPromo';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/common/CTASection';

export default function Home() {
  return (
    <>
      <SEO
        title="Building Future-Ready Digital Products"
        description="Digiinsaf helps startups and businesses design, build and launch secure, scalable and user-focused websites, web applications, mobile apps and AI-powered solutions."
      />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <HomeImpactStrip />
      <TrustedApproach />
      <SolutionsSection />
      <ProcessSection />
      <WhyChooseUs />
      <TechStrip />
      <AboutPreview />
      <EngagementModels />
      <DigiAssistantPromo />
      <FAQSection />
      <div className="py-20 sm:py-28">
        <CTASection />
      </div>
    </>
  );
}
