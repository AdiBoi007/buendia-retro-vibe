import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Capsule",
      icon: Sparkles,
      price: isAnnual ? "$7" : "$9",
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "Perfect for minimalists",
      features: [
        "Up to 50 wardrobe items",
        "Unlimited outfit suggestions",
        "Basic AI styling",
        "Daily outfit inspiration",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Closet",
      icon: Crown,
      price: isAnnual ? "$15" : "$19",
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "For the style-conscious",
      features: [
        "Unlimited wardrobe items",
        "Advanced AI personality matching",
        "Seasonal trend reports",
        "Virtual styling sessions (2/month)",
        "Priority support",
        "Style analytics dashboard"
      ],
      cta: "Get Started",
      popular: true,
      savings: isAnnual ? "Save $48/year" : null
    },
    {
      name: "Runway",
      icon: Zap,
      price: isAnnual ? "$29" : "$35",
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "Ultimate fashion freedom",
      features: [
        "Everything in Closet, plus:",
        "Unlimited virtual styling",
        "Personal AI stylist (24/7)",
        "Shopping recommendations",
        "Outfit scheduling & calendar",
        "Share & collaborate features",
        "Early access to new features"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5 grain pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 text-sm font-display">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Style that fits
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              your budget.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg font-body max-w-2xl mx-auto mt-4">
            Choose the plan that works for you. All plans include a 14-day free trial.
          </p>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Label htmlFor="annual-toggle" className={`font-display text-base ${!isAnnual ? 'text-foreground' : 'text-foreground/50'}`}>
              Monthly
            </Label>
            <Switch
              id="annual-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-accent"
            />
            <Label htmlFor="annual-toggle" className={`font-display text-base ${isAnnual ? 'text-foreground' : 'text-foreground/50'} flex items-center gap-2`}>
              Annual
              {isAnnual && <Badge className="bg-accent text-background text-xs">Save 20%</Badge>}
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`group relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card animate-fade-in ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105 md:scale-110'
                  : 'border-foreground/10 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 font-display shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary to-accent'
                    : 'bg-secondary'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-background' : 'text-foreground'}`} />
                </div>
                <CardTitle className="font-display text-2xl text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="font-body text-foreground/70">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 font-body text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
                {plan.savings && (
                  <Badge className="mt-2 bg-accent/20 text-accent border-0 font-display text-xs">
                    {plan.savings}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-3 px-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${
                      plan.popular ? 'bg-primary/10' : 'bg-secondary'
                    }`}>
                      <Check className={`w-4 h-4 ${plan.popular ? 'text-primary' : 'text-foreground'}`} />
                    </div>
                    <span className="text-foreground/80 font-body text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-8">
                <Button
                  className={`w-full font-display text-base py-6 rounded-xl transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-background hover:shadow-xl border-0'
                      : 'border-2 border-foreground/20 hover:bg-foreground hover:text-background'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-foreground/60 font-body text-sm mt-12 max-w-2xl mx-auto">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};
