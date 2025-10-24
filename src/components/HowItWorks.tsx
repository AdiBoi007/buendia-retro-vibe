import { MessageSquare, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Buendía about your plans in a chat",
    description: "Share your vibe, occasion, and style preferences. No forms, no hassle - just chat naturally.",
    color: "from-primary to-accent"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Buendía curated an outfit from your wardrobe",
    description: "Our AI instantly matches pieces you already own, creating looks that feel uniquely you.",
    color: "from-accent to-muted"
  },
  {
    number: "03",
    icon: Zap,
    title: "Get ready and slay in Data",
    description: "Your outfit is ready. No decision fatigue, no outfit regret - just confidence.",
    color: "from-muted to-primary"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24 px-6 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden scroll-mt-20">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 grain pointer-events-none opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-muted/30 to-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent text-foreground font-display text-sm px-4 py-2">
            How It Works
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Outfits made effortless.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              You make it yours.
            </span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            Three simple steps from "what do I wear?" to "I look amazing."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="group relative overflow-hidden border-4 border-foreground/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-card/80 backdrop-blur-sm animate-slide-up retro-pulse"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 shimmer`} />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full opacity-50" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-background shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="font-body text-foreground/70 leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
