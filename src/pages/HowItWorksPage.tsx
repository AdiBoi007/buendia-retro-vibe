import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <main className="relative">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your wardrobe in three simple steps
            </p>
          </div>
        </div>
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
};

export default HowItWorksPage;
