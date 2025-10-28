import { Check, Sparkles, Crown, Zap, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const plans = [
    {
      name: "Try It",
      icon: Sparkles,
      price: "Free",
      period: "forever",
      description: "For the commitment-phobes",
      features: [
        "Up to 20 wardrobe items",
        "5 outfit suggestions per day",
        "Basic AI styling",
        "Mobile app access",
        "Community support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Daily Brew",
      icon: Coffee,
      price: "$5",
      period: "/month",
      description: "Cheaper than your morning latte",
      features: [
        "Up to 100 wardrobe items",
        "Unlimited outfit suggestions",
        "Advanced AI styling",
        "Seasonal trend insights",
        "Priority support",
        "Style analytics"
      ],
      cta: "Get Started",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Closet VIP",
      icon: Crown,
      price: "$7",
      period: "/month",
      description: "Less than two coffees",
      features: [
        "Everything in Daily Brew, plus:",
        "Unlimited wardrobe items",
        "Personal AI stylist (24/7)",
        "Weekly virtual styling sessions",
        "Shopping recommendations",
        "Calendar & outfit scheduling",
        "Early access to new features"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-background via-accent/5 to-primary/10 relative overflow-hidden scroll-mt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5 grain pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 text-sm font-display">
            <Coffee className="w-4 h-4 mr-2" />
            Ridiculously Affordable
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Literally cheaper than
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              your coffee habit.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg font-body max-w-2xl mx-auto mt-4">
            Skip one latte. Get a whole month of perfect outfits.
            <br />
            <span className="text-sm italic text-foreground/60">(Your wallet and your closet will thank you.)</span>
          </p>
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
                    {plan.badge}
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

        <div className="text-center mt-12 space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-foreground/60 font-body text-sm">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex items-center justify-center gap-2 text-foreground/70">
            <Coffee className="w-5 h-5 text-primary" />
            <p className="font-display text-base italic">
              One coffee = <span className="text-primary font-bold">~$6</span> | 
              One month of style confidence = <span className="text-primary font-bold">$5-7</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
