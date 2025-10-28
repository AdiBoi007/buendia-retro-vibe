import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";

const PricingPage = () => {
  return (
    <main className="relative">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your style journey
            </p>
          </div>
        </div>
        <PricingSection />
      </div>
      <Footer />
    </main>
  );
};

export default PricingPage;
