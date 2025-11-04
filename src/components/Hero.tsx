import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-5xl">
        <div className="space-y-8 animate-fade-in">
          {/* Minimal headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-foreground leading-[0.95] tracking-tight">
            Your style.
            <br />
            Simplified.
          </h1>

          {/* Clean subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            AI-powered wardrobe that understands you
          </p>

          {/* Minimal CTA */}
          <div className="pt-8">
            <Button
              onClick={() => navigate('/signup')}
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 font-light text-lg px-12 py-7 rounded-full transition-all"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
