import { MessageSquare, Sparkles, Zap } from "lucide-react";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";

const steps = [
  {
    icon: MessageSquare,
    image: outfit1
  },
  {
    icon: Sparkles,
    image: outfit2
  },
  {
    icon: Zap,
    image: outfit3
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={step.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
