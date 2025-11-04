import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { BentoGrid } from "@/components/BentoGrid";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WardrobeShowcase } from "@/components/WardrobeShowcase";
import { StyleGallery } from "@/components/StyleGallery";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PricingSection } from "@/components/PricingSection";
import { SocialProof } from "@/components/SocialProof";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FAQSection } from "@/components/FAQSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <HowItWorks />
      <ComparisonSection />
      <BentoGrid />
      <StyleGallery />
      <FeaturesGrid />
      <SocialProof />
      <PricingSection />
      <TestimonialCarousel />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
