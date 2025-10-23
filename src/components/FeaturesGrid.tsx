import { Brain, Clock, Heart, Shield, Smartphone, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = {
  ai: [
    {
      icon: Brain,
      title: "Clueless-Level Intuition",
      description: "Our AI understands your style better than you do. Like Cher's computer, but way smarter."
    },
    {
      icon: Smartphone,
      title: "Chat, Don't Click",
      description: "Natural conversations, not forms. Tell us your vibe like you'd text a friend."
    }
  ],
  wardrobe: [
    {
      icon: Heart,
      title: "Your Closet, Curated",
      description: "Every piece you own, digitized and ready to mix. No more 'I have nothing to wear.'"
    },
    {
      icon: Clock,
      title: "5-Second Outfits",
      description: "From 'what should I wear?' to 'wow I look good' in the time it takes to make coffee."
    }
  ],
  privacy: [
    {
      icon: Shield,
      title: "Your Data, Your Control",
      description: "Your wardrobe stays yours. We're stylists, not stalkers."
    },
    {
      icon: Users,
      title: "Evolves With You",
      description: "The more you use Buendía, the better it gets at reading your mind."
    }
  ]
};

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 px-6 bg-background scroll-mt-20">{/* Added scroll-mt-20 for anchor links */}
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built different.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Styled personal.
            </span>
          </h2>
        </div>

        <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/50 p-1 rounded-2xl">
            <TabsTrigger 
              value="ai" 
              className="font-display text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-background"
            >
              AI Magic
            </TabsTrigger>
            <TabsTrigger 
              value="wardrobe"
              className="font-display text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-background"
            >
              Your Wardrobe
            </TabsTrigger>
            <TabsTrigger 
              value="privacy"
              className="font-display text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-background"
            >
              Privacy First
            </TabsTrigger>
          </TabsList>

          {Object.entries(features).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((feature, index) => (
                  <Card
                    key={index}
                    className="group border-2 border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-background" />
                      </div>
                      <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-body text-foreground/70 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
