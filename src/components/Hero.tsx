import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { MadLibsPrompt } from "./MadLibsPrompt";
import { WardrobeCard } from "./WardrobeCard";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";
import styleAnimation from "@/assets/style-animation.gif";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Hero background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none opacity-40" />
      
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
          className="absolute top-20 left-12 rotate-[-8deg] opacity-40"
        />
        <WardrobeCard
          image={outfit2}
          className="absolute bottom-32 right-20 rotate-[12deg] opacity-50"
        />
        <WardrobeCard
          image={outfit3}
          className="absolute top-1/3 right-12 rotate-[-5deg] opacity-50"
        />
        <WardrobeCard
          image={outfit1}
          className="absolute bottom-40 left-16 rotate-[6deg] opacity-30"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Hero content */}
          <div className="space-y-8 animate-fade-in">
            {/* Beta badge */}
            <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 text-sm font-display shadow-lg animate-bounce-in glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Now in Private Beta
            </Badge>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-reveal">
              You know your vibe.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block">
                We'll build
              </span>{" "}
              <span className="retro-border inline-block px-4 py-2 rotate-[-1deg] chromatic bg-primary/5">
                the fit.
              </span>
            </h1>

            {/* Mad Libs interactive prompt */}
            <MadLibsPrompt 
              selectedPrompt={selectedPrompt}
              setSelectedPrompt={setSelectedPrompt}
            />

            {/* CTA buttons */}
            <TooltipProvider>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleStart}
                      size="lg"
                      className="group bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-8 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-0 retro-pulse"
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-foreground text-background border-2 border-primary">
                    <p>Get styled in seconds!</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-3 border-foreground text-foreground hover:bg-foreground hover:text-background font-display text-lg px-8 py-7 rounded-full transition-all hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Join Waitlist
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-foreground text-background border-2 border-accent">
                    <p>Be first to know when we launch</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-2">
                {["SC", "MJ", "ER", "AK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-3 border-background flex items-center justify-center text-background font-display text-xs font-bold"
                    style={{ zIndex: 4 - i }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-foreground/70 text-sm font-body">
                Join <span className="font-bold text-foreground">12,500+</span> beta users
              </p>
            </div>

            {/* Progress indicator */}
            <div className="space-y-2 pt-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex justify-between text-sm font-body text-foreground/70">
                <span>Waitlist filling up</span>
                <span>73%</span>
              </div>
              <Progress value={73} className="h-2" />
            </div>

            {/* Tagline */}
            <p className="text-foreground/80 text-lg font-body max-w-md font-medium leading-relaxed">
              Stop overthinking what to wear.
              <br />
              <span className="text-primary font-display italic">
                Your closet has everything you need.
              </span>
            </p>

            {/* Sub-headline */}
            <p className="text-foreground/60 text-base font-body italic">
              (Yes, even that thing you bought two years ago and forgot about.)
            </p>
          </div>

          {/* Right side - Retro CRT Monitor */}
          <div className="relative animate-fade-in lg:mt-0 mt-12" style={{ animationDelay: "0.3s" }}>
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Enhanced glow effect behind monitor */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-accent/40 to-muted/40 blur-3xl rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-muted/20 blur-2xl rounded-3xl animate-pulse" />
              
              {/* CRT Monitor */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-foreground retro-pulse polaroid">
                <div className="relative vignette">
                  <img
                    src={styleAnimation}
                    alt="Style animation"
                    className="w-full h-auto"
                  />
                  {/* Enhanced scanline overlay */}
                  <div className="absolute inset-0 pointer-events-none scanlines opacity-40" />
                  {/* VHS tracking lines */}
                  <div className="absolute inset-0 pointer-events-none vhs-tracking opacity-30" />
                  {/* Chromatic aberration on corners */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(circle at 0% 0%, rgba(233, 79, 72, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(181, 197, 226, 0.1) 0%, transparent 50%)'
                  }} />
                </div>
              </div>

              {/* Decorative sticker badges - retro style */}
              <div className="absolute -top-4 -right-4 bg-accent text-foreground px-4 py-2 rounded-full font-display text-sm font-bold shadow-xl rotate-12 border-4 border-foreground retro-pulse">
                retro-paper vibes ✨
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-foreground px-4 py-2 rounded-full font-display text-sm font-bold shadow-xl -rotate-6 border-4 border-foreground glow">
                AI stylist 💄
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
