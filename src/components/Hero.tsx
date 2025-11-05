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
            {/* Beta badge with enhanced hover */}
            <TooltipProvider>
              <HoverCard>
                <HoverCardTrigger>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="mb-4 bg-gradient-to-r from-primary via-accent to-primary text-background border-0 px-6 py-2.5 text-sm font-display shadow-xl animate-bounce-in cursor-pointer hover:scale-105 transition-all duration-300 group">
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse group-hover:rotate-12 transition-transform" />
                        Join 12,500+ Beta Users
                        <Award className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-gradient-to-r from-primary to-accent text-background border-0">
                      <p className="font-display">Click for exclusive perks! 🎁</p>
                    </TooltipContent>
                  </Tooltip>
                </HoverCardTrigger>
                <HoverCardContent className="w-96 border-2 border-primary/20 bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <h4 className="font-display font-bold text-lg">Early Access Perks</h4>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <p className="text-sm"><strong>50% off lifetime</strong> - Lock in beta pricing forever</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <p className="text-sm"><strong>Priority support</strong> - Direct line to our team</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <p className="text-sm"><strong>Exclusive features</strong> - Try new AI models first</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <p className="text-sm"><strong>Beta community</strong> - Shape the future with us</p>
                      </div>
                    </div>
                    <Progress value={67} className="h-2" />
                    <p className="text-xs text-muted-foreground text-center">
                      67% of beta slots filled • Join before they're gone
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </TooltipProvider>

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
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 absolute -top-2 -right-8 md:-right-10 text-accent animate-pulse" />
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2 group">
                <span className="retro-border inline-block px-6 py-3 rotate-[-1deg] bg-gradient-to-r from-primary/10 to-accent/10 group-hover:rotate-0 transition-transform">
                  {gender === "female" ? "Perfect fits." : "Sharp looks."}
                </span>
                <Heart className="w-6 h-6 absolute -bottom-1 -right-6 text-primary fill-primary animate-pulse opacity-80" />
              </span>
            </h1>

            {/* Subheadline with personality */}
            <div className="space-y-2">
              <p className="text-foreground/80 text-xl md:text-2xl font-body max-w-xl leading-relaxed">
                {gender === "female" 
                  ? "Stop the morning outfit panic. Your AI stylist already knows what you'll love—"
                  : "No more \"what should I wear?\" Your AI stylist figures it out—"}
                <span className="text-primary font-semibold"> before you do.</span>
              </p>
              <p className="text-foreground/60 text-base md:text-lg font-body max-w-xl">
                {gender === "female" 
                  ? "Real talk: getting dressed shouldn't feel like a chore. Let's make it fun again."
                  : "Getting dressed shouldn't be a decision. Make it effortless."}
              </p>
            </div>

            {/* Mad Libs interactive prompt */}
            <MadLibsPrompt 
              selectedPrompt={selectedPrompt}
              setSelectedPrompt={setSelectedPrompt}
            />

            {/* CTA buttons - premium with tooltips */}
            <TooltipProvider>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => navigate('/signup')}
                      size="lg"
                      className="group bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 border-0 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-gradient-to-r from-primary to-accent text-background border-0">
                    <p className="font-display">No credit card required • 7 days free ✨</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => navigate('/how-it-works')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background font-display text-lg px-10 py-7 rounded-full transition-all hover:scale-105 group bg-background/50 backdrop-blur-sm"
                    >
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      See the Magic
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Watch a 60-second demo</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          {/* Right side - Premium visual showcase */}
          <div className="relative animate-fade-in lg:mt-0 mt-12" style={{ animationDelay: "0.2s" }}>
            <div className="relative group max-w-lg mx-auto">
              {/* Ultra glow effect */}
              <div className="absolute -inset-16 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/60 blur-3xl rounded-full opacity-70 group-hover:opacity-90 transition-opacity duration-700 animate-pulse" />
              
              {/* Main showcase card */}
              <Card className="relative border-4 border-foreground/10 bg-gradient-to-br from-background via-secondary/20 to-background backdrop-blur-xl shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <CardContent className="p-0">
                  <div className="relative aspect-square p-8">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary/20">
                      <img
                        src={styleAnimation}
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
                    <Badge className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-accent text-background border-0 px-6 py-3 text-base font-display shadow-2xl animate-float cursor-default hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                      AI Powered
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Advanced fashion AI • Learns your style</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge 
                      className="absolute -bottom-6 -left-6 bg-gradient-to-br from-accent to-primary text-background border-0 px-6 py-3 text-base font-display shadow-2xl cursor-default hover:scale-110 transition-transform" 
                      style={{ animationDelay: "1s" }}
                    >
                      12.5K+ Users
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Join thousands of fashion-forward users</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
