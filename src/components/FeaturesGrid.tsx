import { Brain, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intuitive AI"
  },
  {
    icon: Clock,
    title: "5-Second Outfits"
  },
  {
    icon: Heart,
    title: "Your Closet"
  },
  {
    icon: Shield,
    title: "Private & Secure"
  }
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-3xl bg-secondary/30 hover:bg-secondary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-foreground flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-background" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-foreground">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
