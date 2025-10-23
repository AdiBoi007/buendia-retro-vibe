import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WardrobeShowcase } from "@/components/WardrobeShowcase";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <HowItWorks />
      <WardrobeShowcase />
      <FeaturesGrid />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
