import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { BentoGrid } from "@/components/BentoGrid";

const Features = () => {
  return (
    <main className="relative">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the powerful features that make buendía your perfect AI fashion companion
            </p>
          </div>
        </div>
        <FeaturesGrid />
        <div className="mt-16">
          <BentoGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Features;
