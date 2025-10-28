import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const socialMentions = [
  {
    platform: Twitter,
    name: "Sarah M.",
    handle: "@sarahstyles",
    text: "okay but Buendía just suggested an outfit combo I NEVER would've thought of and I'm obsessed? 10/10 would trust an AI with my wardrobe again 💅",
    likes: 2847,
    color: "text-[#1DA1F2]"
  },
  {
    platform: Instagram,
    name: "Alex Chen",
    handle: "@alexfashiondev",
    text: "As a dev who can't dress himself, this is literally life-changing. My closet finally makes sense.",
    likes: 1923,
    color: "text-[#E1306C]"
  },
  {
    platform: Linkedin,
    name: "Jamie Rodriguez",
    handle: "@jrodriguez",
    text: "Pitched using Buendía to my team for work outfits. Boss said yes. We're all styling now. This is the future.",
    likes: 4521,
    color: "text-[#0A66C2]"
  }
];

export const SocialProof = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-display">
            People are talking
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Don't just take our word for it.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Listen to the internet.
            </span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            Real reactions from real people who got tired of staring at their closets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialMentions.map((mention, index) => (
            <Collapsible
              key={index}
              open={expandedIndex === index}
              onOpenChange={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <Card className="border-2 border-foreground/10 hover:border-primary/30 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-xl group animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <mention.platform className={`w-6 h-6 ${mention.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-foreground truncate">
                        {mention.name}
                      </p>
                      <p className="font-body text-sm text-foreground/60 truncate">
                        {mention.handle}
                      </p>
                    </div>
                  </div>

                  <CollapsibleTrigger asChild>
                    <button className="w-full text-left">
                      <p className="font-body text-foreground/80 leading-relaxed line-clamp-3 mb-3">
                        "{mention.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-foreground/50 font-body">
                          ❤️ {mention.likes.toLocaleString()} likes
                        </p>
                        <ChevronDown className={`w-4 h-4 text-foreground/50 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="pt-4 border-t border-foreground/10 mt-4">
                    <p className="font-body text-sm text-foreground/70 italic">
                      {index === 0 && "Sarah went from 45 items to 127 outfit combinations. Zero new purchases needed."}
                      {index === 1 && "Alex now spends his morning coffee time actually drinking coffee, not choosing socks."}
                      {index === 2 && "Jamie's team reports 23% faster morning routines. We're not saying Buendía increased productivity, but... 👀"}
                    </p>
                  </CollapsibleContent>
                </div>
              </Card>
            </Collapsible>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="font-body text-foreground/60 text-sm">
            Join the conversation. Tag <span className="text-primary font-semibold">#BuendiaStyled</span> on social.
          </p>
        </div>
      </div>
    </section>
  );
};
