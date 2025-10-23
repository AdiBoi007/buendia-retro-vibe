import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";

export const WardrobeShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-secondary via-background to-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 grain pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your digital wardrobe,
            <br />
            <span className="text-primary">always ready.</span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
            Open the doors to see your outfits come to life.
          </p>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            {isOpen ? "Close Wardrobe" : "Open Wardrobe"}
          </Button>
        </div>

        {/* Wardrobe doors animation */}
        <div className="relative max-w-5xl mx-auto h-[600px]">
          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
            {/* Left door */}
            <div
              className="absolute left-0 w-1/2 h-full bg-gradient-to-br from-foreground/90 to-foreground/70 border-4 border-cream rounded-l-3xl shadow-2xl transition-all duration-1000"
              style={{
                transformOrigin: 'left center',
                transform: isOpen ? 'rotateY(-120deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                opacity: isOpen ? 0.5 : 1
              }}
            >
              <div className="absolute top-1/2 right-8 w-12 h-2 bg-cream rounded-full -translate-y-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl text-cream/20">B</span>
              </div>
            </div>

            {/* Right door */}
            <div
              className="absolute right-0 w-1/2 h-full bg-gradient-to-bl from-foreground/90 to-foreground/70 border-4 border-cream rounded-r-3xl shadow-2xl transition-all duration-1000"
              style={{
                transformOrigin: 'right center',
                transform: isOpen ? 'rotateY(120deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                opacity: isOpen ? 0.5 : 1
              }}
            >
              <div className="absolute top-1/2 left-8 w-12 h-2 bg-cream rounded-full -translate-y-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl text-cream/20">Ø</span>
              </div>
            </div>

            {/* Revealed outfits */}
            <div
              className={`absolute inset-0 flex items-center justify-center gap-6 transition-all duration-700 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              {[outfit1, outfit2, outfit3].map((outfit, i) => (
                <div
                  key={i}
                  className="w-64 bg-cream p-4 rounded-xl shadow-2xl border-4 border-foreground/20 hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${i * 0.2 + 1}s` }}
                >
                  <img
                    src={outfit}
                    alt={`Outfit ${i + 1}`}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <p className="mt-3 font-display text-sm text-foreground text-center">
                    Look #{i + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
