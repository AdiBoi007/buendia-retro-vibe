import { ArrowRight, Calendar, Camera, MessageSquare, Palette, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const BentoGrid = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 text-sm font-display">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large feature card - spans 2 columns */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="md:col-span-2 border-2 border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/10 text-primary border-0 font-display">
                      AI Powered
                    </Badge>
                    <MessageSquare className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="font-display text-3xl text-foreground">
                    Natural Language Styling
                  </CardTitle>
                  <CardDescription className="font-body text-base text-foreground/70 leading-relaxed mt-2">
                    Chat with your AI stylist like you're texting a friend. No dropdowns, no forms—just vibes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-foreground/10 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-background text-xs font-bold">You</span>
                      </div>
                      <div className="bg-secondary/50 rounded-2xl rounded-tl-none px-4 py-3 font-body text-foreground/80">
                        I need something cute but casual for brunch tomorrow 🥐
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl rounded-tr-none px-4 py-3 font-body text-background max-w-xs">
                        Love it! How about your cream sweater with those high-waisted jeans? ✨
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-background" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-96 bg-card/95 backdrop-blur-md border-2 border-primary/20">
              <p className="text-sm text-foreground/70 font-body">
                Our AI understands context, mood, weather, and your personal style to give you outfit suggestions that actually make sense.
              </p>
            </HoverCardContent>
          </HoverCard>

          {/* Tall card */}
          <Card className="md:row-span-2 border-2 border-foreground/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-accent/5 to-primary/5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-accent/10 text-accent border-0 font-display">
                  Smart
                </Badge>
                <Camera className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                Visual Wardrobe
              </CardTitle>
              <CardDescription className="font-body text-foreground/70 leading-relaxed">
                Snap a pic, we do the rest. Your entire closet, digitized.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-secondary/30 border border-foreground/10 flex items-center justify-center group-hover:border-accent/30 transition-colors"
                  >
                    <Camera className="w-6 h-6 text-foreground/30" />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full border-2 border-accent/20 hover:bg-accent hover:text-background transition-all group/btn">
                <Camera className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Add Items
              </Button>
            </CardContent>
          </Card>

          {/* Medium card */}
          <Card className="border-2 border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-primary/5 to-background animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-primary/10 text-primary border-0 font-display">
                  Organized
                </Badge>
                <Calendar className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                Outfit Calendar
              </CardTitle>
              <CardDescription className="font-body text-foreground/70">
                Plan your week in advance. Never repeat an outfit by accident.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Medium card */}
          <Card className="border-2 border-foreground/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-accent/5 to-background animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-accent/10 text-accent border-0 font-display">
                  Trending
                </Badge>
                <TrendingUp className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                Style Analytics
              </CardTitle>
              <CardDescription className="font-body text-foreground/70">
                See what you wear most, discover forgotten favorites.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Wide card */}
          <Card className="md:col-span-2 border-2 border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-background to-primary/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary/10 text-primary border-0 font-display">
                      Personalized
                    </Badge>
                    <Palette className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="font-display text-2xl text-foreground mb-2">
                    Color Palette Analysis
                  </CardTitle>
                  <CardDescription className="font-body text-foreground/70 leading-relaxed">
                    Discover which colors work best for you based on your wardrobe and preferences.
                  </CardDescription>
                </div>
                <div className="hidden md:flex gap-2">
                  {['#E94F48', '#B5C5E2', '#F4D6C8', '#8B9D83', '#F7E7CE'].map((color, i) => (
                    <div
                      key={i}
                      className="w-12 h-24 rounded-lg border-2 border-foreground/10 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: color, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background font-display text-lg px-8 py-6 rounded-full hover:shadow-xl transition-all hover:scale-105 group">
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
