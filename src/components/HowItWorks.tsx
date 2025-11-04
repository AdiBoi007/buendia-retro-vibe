import { MessageSquare, Sparkles, Zap, ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Buendía about your plans in a chat",
    description: "Share your vibe, occasion, and style preferences. No forms, no hassle - just chat naturally.",
    color: "from-pink-500 via-purple-500 to-pink-600",
    benefits: [
      "Natural conversation flow",
      "No boring forms to fill",
      "Understands your actual vibe"
    ]
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Buendía curated an outfit from your wardrobe",
    description: "Our AI instantly matches pieces you already own, creating looks that feel uniquely you.",
    color: "from-purple-500 via-pink-500 to-purple-600",
    benefits: [
      "Instant outfit matching",
      "Uses what you already own",
      "Feels authentically you"
    ]
  },
  {
    number: "03",
    icon: Zap,
    title: "Get ready and slay in Data",
    description: "Your outfit is ready. No decision fatigue, no outfit regret - just confidence.",
    color: "from-pink-600 via-orange-500 to-pink-500",
    benefits: [
      "Zero decision fatigue",
      "No outfit regret",
      "Pure confidence"
    ]
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      {/* Premium background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 grain pointer-events-none opacity-[0.03]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-foreground border border-pink-500/20 font-display text-sm px-6 py-2">
            How It Works
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Outfits made effortless.
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-shimmer">
              You make it yours.
            </span>
          </h2>
          <p className="text-foreground/60 font-body text-xl max-w-2xl mx-auto">
            Three simple steps from "what do I wear?" to "I look amazing."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <HoverCard key={step.number} openDelay={200}>
              <HoverCardTrigger asChild>
                <Card
                  className="group relative overflow-hidden border border-foreground/5 hover:border-pink-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 bg-card/40 backdrop-blur-xl animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Glass morphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`} />
                  
                  {/* Mega step number background */}
                  <div className="absolute top-4 right-4 font-display text-[120px] font-black text-foreground/[0.02] group-hover:text-foreground/[0.04] transition-colors duration-700 leading-none select-none">
                    {step.number}
                  </div>
                  
                  <CardHeader className="relative z-10 space-y-6">
                    {/* Icon with premium gradient */}
                    <div className="relative w-fit">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700`} />
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-700`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Step number badge */}
                    <Badge variant="outline" className="w-fit border-foreground/10 text-foreground/40 font-mono text-xs px-3">
                      STEP {step.number}
                    </Badge>
                    
                    <CardTitle className="font-display text-2xl text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-700 leading-tight">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-4">
                    <CardDescription className="font-body text-foreground/60 leading-relaxed text-base">
                      {step.description}
                    </CardDescription>
                    
                    {/* Hover arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-700" />
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent 
                side="top" 
                className="w-80 bg-card/95 backdrop-blur-xl border-pink-500/20 shadow-2xl shadow-pink-500/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color}`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">Step {step.number}</h4>
                      <p className="text-sm text-foreground/60">What you get</p>
                    </div>
                  </div>
                  
                  <Separator className="bg-foreground/5" />
                  
                  <div className="space-y-3">
                    {step.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-br ${step.color}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};
