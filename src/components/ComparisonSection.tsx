import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Check, Zap } from "lucide-react";

export const ComparisonSection = () => {
  const oldWay = [
    "30 minutes staring at your closet every morning",
    "Wearing the same 5 outfits on repeat",
    "Buying clothes you don't need because you forgot what you own",
    "Decision fatigue before 9 AM",
    "\"I have nothing to wear\" (narrator: she had plenty)"
  ];

  const buendiaWay = [
    "30 seconds to a complete outfit",
    "Rediscover pieces you forgot you owned",
    "Shop your own closet first",
    "Start your day with confidence, not stress",
    "Never repeat an outfit unless you want to"
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/20 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-background border-0 px-6 py-2 font-display shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            The Transformation
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before Buendía vs.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              After Buendía
            </span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            Spoiler alert: one of these is way less painful.
          </p>
        </div>

        <Tabs defaultValue="comparison" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-secondary/30 p-1 rounded-2xl h-14">
            <TabsTrigger 
              value="comparison"
              className="font-display text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-background"
            >
              Side-by-Side
            </TabsTrigger>
            <TabsTrigger 
              value="timeline"
              className="font-display text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-background"
            >
              Morning Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="space-y-0">
            <div className="grid md:grid-cols-2 gap-6">
              {/* The Old Way */}
              <Card className="border-2 border-destructive/20 bg-destructive/5 backdrop-blur-sm animate-slide-up">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    The Old Way
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {oldWay.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="font-body text-foreground/80 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* The Buendía Way */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm animate-slide-up shadow-xl" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Check className="w-5 h-5 text-background" />
                    </div>
                    The Buendía Way
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {buendiaWay.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-body text-foreground/80 text-sm leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without Buendía Timeline */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Without Buendía: 35 minutes
                </h3>
                <div className="space-y-3">
                  {[
                    { time: "7:00 AM", action: "Open closet, immediate regret" },
                    { time: "7:05 AM", action: "Try outfit #1, hate it" },
                    { time: "7:12 AM", action: "Try outfit #2, also hate it" },
                    { time: "7:20 AM", action: "Text friend \"what are you wearing?\"" },
                    { time: "7:25 AM", action: "Give up, wear black again" },
                    { time: "7:35 AM", action: "Finally leave, not feeling it" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                      <span className="font-display text-sm font-bold text-destructive/70 min-w-[70px]">
                        {item.time}
                      </span>
                      <p className="font-body text-sm text-foreground/70">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* With Buendía Timeline */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  With Buendía: 2 minutes
                </h3>
                <div className="space-y-3">
                  {[
                    { time: "7:00 AM", action: "Open Buendía app" },
                    { time: "7:00:30", action: "\"Feeling confident, coffee meeting\"" },
                    { time: "7:01 AM", action: "Perfect outfit suggested" },
                    { time: "7:02 AM", action: "Get dressed, feeling amazing" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                      <span className="font-display text-sm font-bold text-primary min-w-[70px]">
                        {item.time}
                      </span>
                      <p className="font-body text-sm text-foreground/80 font-medium">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <p className="font-display text-sm text-foreground/80 text-center">
                    <span className="font-bold text-primary">33 minutes saved</span> = time for breakfast, meditation, or hitting snooze again ✨
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
