import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import styleGif from "@/assets/style-animation.gif";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Minimal text */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
              Your style.
              <br />
              Simplified.
            </h1>

            <div className="pt-4">
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

          {/* Right: Visual gif */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={styleGif} 
              alt="Style animation"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
