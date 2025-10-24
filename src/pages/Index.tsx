import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { WardrobeShowcase } from "@/components/WardrobeShowcase";
import { StyleGallery } from "@/components/StyleGallery";
import { FeaturesGrid } from "@/components/FeaturesGrid";
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
      <StatsSection />
      <StyleGallery />
      <WardrobeShowcase />
      <FeaturesGrid />
      <TestimonialCarousel />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
