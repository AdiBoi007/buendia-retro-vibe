import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGender } from "./GenderProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { MadLibsPrompt } from "./MadLibsPrompt";
import { WardrobeCard } from "./WardrobeCard";
import { ArrowRight, Sparkles, Zap, Heart, Award, CheckCircle2 } from "lucide-react";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";
import maleOutfit1 from "@/assets/male-outfit-1.jpg";
import maleOutfit2 from "@/assets/male-outfit-2.jpg";
import maleOutfit3 from "@/assets/male-outfit-3.jpg";
import styleAnimation from "@/assets/style-animation.gif";
import maleStyleAnimation from "@/assets/male-style-animation.gif";
import heroBg from "@/assets/hero-bg.jpg";
import maleFashion from "@/assets/male-fashion.png";

export const Hero = () => {
  const navigate = useNavigate();
  const { gender } = useGender();
  const [selectedPrompt, setSelectedPrompt] = useState({
    mood: "",
    event: "",
    style: ""
  });

  const outfits = gender === "female" 
    ? [outfit1, outfit2, outfit3] 
    : [maleOutfit1, maleOutfit2, maleOutfit3];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Hero background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={gender === "female" ? heroBg : maleFashion} alt="" className="w-full h-full object-cover" />
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
          image={outfits[0]}
          className="absolute top-20 left-12 rotate-[-8deg] opacity-40"
        />
        <WardrobeCard
          image={outfits[1]}
          className="absolute bottom-32 right-20 rotate-[12deg] opacity-50"
        />
        <WardrobeCard
          image={outfits[2]}
          className="absolute top-1/3 right-12 rotate-[-5deg] opacity-50"
        />
        <WardrobeCard
          image={outfits[0]}
          className="absolute bottom-40 left-16 rotate-[6deg] opacity-30"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Hero content */}
          <div className="space-y-6 animate-fade-in">
            {/* Main headline - ultra premium */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-reveal">
              <span className="inline-block hover:scale-105 transition-transform cursor-default">
                {gender === "female" ? "Your vibe." : "Your style."}
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform cursor-default">
                Our{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    AI magic.
                  </span>
                </span>
              </span>
            </h1>

            {/* Simplified subheadline */}
            <p className="text-foreground/80 text-xl md:text-2xl font-body max-w-xl leading-relaxed">
              {gender === "female" 
                ? "Your AI stylist knows what you'll love—before you do."
                : "Your AI stylist figures it out—instantly."}
            </p>

            {/* CTA buttons - premium with tooltips */}
            <TooltipProvider>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => navigate('/signup')}
                      size="lg"
                      className="group bg-gradient-to-br from-primary to-accent text-background font-display text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0 relative overflow-hidden backdrop-blur-sm"
                    >
                      <span className="relative z-10 flex items-center font-semibold">
                        <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" strokeWidth={2} />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-gradient-to-br from-primary/95 to-accent/95 text-background border-0 backdrop-blur-xl rounded-2xl shadow-lg">
                    <p className="font-display font-medium">No credit card required • 7 days free ✨</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => navigate('/how-it-works')}
                      variant="outline"
                      size="lg"
                      className="border border-foreground/10 text-foreground hover:bg-foreground/5 font-display text-lg px-10 py-7 rounded-full transition-all hover:scale-105 group bg-background/80 backdrop-blur-sm shadow-sm"
                    >
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                      See the Magic
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-background/95 border border-foreground/10 backdrop-blur-xl rounded-2xl shadow-lg">
                    <p className="font-medium">Watch a 60-second demo</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          {/* Right side - Premium visual showcase with multiple images */}
          <div className="relative animate-fade-in lg:mt-0 mt-12" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              {/* Main showcase */}
              <div className="relative group max-w-lg mx-auto">
                {/* Ultra glow effect */}
                <div className="absolute -inset-16 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/60 blur-3xl rounded-full opacity-70 group-hover:opacity-90 transition-opacity duration-700 animate-pulse" />
                
                {/* Main showcase card */}
                <Card className="relative border-4 border-foreground/10 bg-gradient-to-br from-background via-secondary/20 to-background backdrop-blur-xl shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <CardContent className="p-0">
                    <div className="relative aspect-square p-8">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary/20">
                        <img
                          key={gender}
                          src={gender === "female" ? styleAnimation : maleStyleAnimation}
                          alt="AI Fashion Magic in Action"
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating badges - premium */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="absolute -top-4 -right-4 bg-gradient-to-br from-primary/95 to-accent/95 text-background border-0 px-6 py-2.5 text-sm font-display shadow-lg animate-float cursor-default hover:scale-110 transition-transform backdrop-blur-xl rounded-full">
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse" strokeWidth={1.5} />
                        AI Powered
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-background/95 border border-foreground/10 backdrop-blur-xl rounded-2xl shadow-lg">
                      <p className="font-medium">Advanced fashion AI</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Additional outfit cards */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {outfits.map((outfit, index) => (
                  <Card key={index} className="border border-foreground/5 overflow-hidden group hover:scale-105 transition-transform duration-300 rounded-2xl shadow-sm hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <img
                          src={outfit}
                          alt={`Outfit ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
