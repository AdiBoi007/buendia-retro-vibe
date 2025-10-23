import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MadLibsPrompt } from "./MadLibsPrompt";
import { WardrobeCard } from "./WardrobeCard";
import crtMonitor from "@/assets/crt-monitor.jpg";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";

export const Hero = () => {
  const [selectedPrompt, setSelectedPrompt] = useState({
    mood: "",
    event: "",
    style: ""
  });

  const handleStart = () => {
    console.log("Starting with:", selectedPrompt);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />
      
      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cream rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Floating wardrobe cards - background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <WardrobeCard
          image={outfit1}
          className="absolute top-20 left-10 rotate-[-8deg] animate-float opacity-50"
          style={{ animationDelay: "0s" }}
        />
        <WardrobeCard
          image={outfit2}
          className="absolute bottom-32 right-20 rotate-[12deg] animate-float-delayed opacity-50"
          style={{ animationDelay: "1s" }}
        />
        <WardrobeCard
          image={outfit3}
          className="absolute top-1/3 right-12 rotate-[-5deg] animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Hero content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Tell me your vibe,<br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                I build the fit.
              </span>
            </h1>

            {/* Mad Libs interactive prompt */}
            <MadLibsPrompt 
              selectedPrompt={selectedPrompt}
              setSelectedPrompt={setSelectedPrompt}
            />

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleStart}
                className="bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-0"
              >
                Start →
              </Button>
              <Button
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-display text-lg px-8 py-6 rounded-full transition-all"
              >
                Join waitlist
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-foreground/80 text-lg font-body max-w-md font-medium">
              Your style, your wardrobe, your vision — we just finish your thought.
            </p>

            {/* Sub-headline */}
            <p className="text-foreground/70 text-base font-display italic">
              AI-powered outfit matching. Clueless-level intuition.
            </p>
          </div>

          {/* Right side - Retro CRT Monitor */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              {/* Glow effect behind monitor */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-accent/30 to-muted/30 blur-3xl rounded-3xl opacity-60" />
              
              {/* CRT Monitor */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground/10">
                <img
                  src={crtMonitor}
                  alt="Retro computer wardrobe interface"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }} />
              </div>

              {/* Decorative sticker badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-foreground px-4 py-2 rounded-full font-display text-sm font-bold shadow-xl rotate-12 border-2 border-foreground/20">
                retro-paper vibes ✨
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-foreground px-4 py-2 rounded-full font-display text-sm font-bold shadow-xl -rotate-6 border-2 border-foreground/20">
                AI stylist 💄
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
