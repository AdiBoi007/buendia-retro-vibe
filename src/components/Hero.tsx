import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { MadLibsPrompt } from "./MadLibsPrompt";
import { WardrobeCard } from "./WardrobeCard";
import { ArrowRight, Sparkles, Zap, Users, TrendingUp, Heart } from "lucide-react";
import outfit1 from "@/assets/outfit-1.jpg";
import outfit2 from "@/assets/outfit-2.jpg";
import outfit3 from "@/assets/outfit-3.jpg";
import styleAnimation from "@/assets/style-animation.gif";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  const [selectedPrompt, setSelectedPrompt] = useState({
    mood: "",
    event: "",
    style: ""
  });

  const testimonials = [
    { name: "Sarah Chen", role: "Fashion Blogger", initial: "SC", avatar: "", quote: "Changed my mornings completely" },
    { name: "Mike Jordan", role: "Creative Director", initial: "MJ", avatar: "", quote: "Finally, my closet makes sense" },
    { name: "Emma Rodriguez", role: "Stylist", initial: "ER", avatar: "", quote: "This is the future of styling" },
    { name: "Alex Kim", role: "Entrepreneur", initial: "AK", avatar: "", quote: "Saves me 2 hours every week" }
  ];

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
          <div className="space-y-6 animate-fade-in">
            {/* Beta badge with hover effect */}
            <HoverCard>
              <HoverCardTrigger>
                <Badge className="mb-4 bg-gradient-to-r from-primary via-accent to-primary text-background border-0 px-6 py-2.5 text-sm font-display shadow-xl animate-bounce-in cursor-pointer hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Join 12,500+ Beta Users
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-2 border-primary/20">
                <div className="space-y-2">
                  <h4 className="font-display font-semibold">Early Access Benefits</h4>
                  <p className="text-sm text-muted-foreground">Get lifetime discounts, priority support, and exclusive features</p>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Main headline - improved typography */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-reveal">
              Your vibe.
              <br />
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block animate-shimmer bg-[length:200%_100%]">
                AI magic.
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="retro-border inline-block px-6 py-3 rotate-[-1deg] bg-gradient-to-r from-primary/10 to-accent/10">
                  Perfect fits.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-foreground/70 text-xl md:text-2xl font-body max-w-xl leading-relaxed">
              Stop overthinking what to wear. Your AI stylist knows your closet better than you do.
            </p>

            {/* Mad Libs interactive prompt */}
            <MadLibsPrompt 
              selectedPrompt={selectedPrompt}
              setSelectedPrompt={setSelectedPrompt}
            />


            {/* CTA buttons - improved */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => navigate('/signup')}
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 border-0 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button
                onClick={() => navigate('/how-it-works')}
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background font-display text-lg px-10 py-7 rounded-full transition-all hover:scale-105 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                See How It Works
              </Button>
            </div>

            {/* Social proof with avatars - upgraded */}
            <div className="pt-6 animate-slide-up space-y-4" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {testimonials.map((person, i) => (
                    <HoverCard key={i}>
                      <HoverCardTrigger>
                        <Avatar className="w-12 h-12 border-3 border-background cursor-pointer hover:scale-110 hover:z-10 transition-all">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-background font-display font-bold">
                            {person.initial}
                          </AvatarFallback>
                        </Avatar>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold">{person.name}</h4>
                          <p className="text-sm text-muted-foreground">{person.role}</p>
                          <p className="text-sm italic">"{person.quote}"</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <div>
                  <p className="text-foreground font-display font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    12,500+ happy users
                  </p>
                  <p className="text-foreground/60 text-sm">⭐️ 4.9/5 average rating</p>
                </div>
              </div>

              {/* Stats tabs */}
              <Tabs defaultValue="time" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-3 bg-secondary/30">
                  <TabsTrigger value="time" className="font-display">⏰ Time</TabsTrigger>
                  <TabsTrigger value="outfits" className="font-display">👗 Outfits</TabsTrigger>
                  <TabsTrigger value="confidence" className="font-display">💪 Confidence</TabsTrigger>
                </TabsList>
                <TabsContent value="time" className="space-y-2 mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold text-primary">2.5hrs</span>
                    <span className="text-foreground/70">saved per week</span>
                  </div>
                  <p className="text-sm text-muted-foreground">That's 130 hours per year to do what you actually love</p>
                </TabsContent>
                <TabsContent value="outfits" className="space-y-2 mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold text-accent">3.2x</span>
                    <span className="text-foreground/70">more outfit variety</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Discover forgotten pieces and fresh combinations</p>
                </TabsContent>
                <TabsContent value="confidence" className="space-y-2 mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold text-primary">94%</span>
                    <span className="text-foreground/70">feel more confident</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Look good, feel amazing, conquer your day</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right side - Enhanced visual showcase */}
          <div className="relative animate-fade-in lg:mt-0 mt-12" style={{ animationDelay: "0.2s" }}>
            <div className="relative group max-w-lg mx-auto">
              {/* Mega glow effect */}
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" />
              
              {/* Main showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-foreground/10 bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl">
                <div className="relative aspect-square p-8">
                  <img
                    src={styleAnimation}
                    alt="AI Fashion Magic"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Subtle overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating badges - modernized */}
              <Badge className="absolute -top-6 -right-6 bg-gradient-to-r from-accent to-primary text-background px-6 py-3 rounded-full font-display text-sm font-bold shadow-2xl rotate-12 border-2 border-background hover:scale-110 transition-transform cursor-default">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                AI Powered
              </Badge>
              <Badge className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-accent text-background px-6 py-3 rounded-full font-display text-sm font-bold shadow-2xl -rotate-6 border-2 border-background hover:scale-110 transition-transform cursor-default flex items-center gap-2">
                <Users className="w-4 h-4" />
                12.5K+ Users
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
