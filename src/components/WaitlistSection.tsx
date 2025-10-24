import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast.success(`Welcome to the list, ${name}! 💅`, {
        description: "We'll let you know when Buendía is ready to style you."
      });
      setEmail("");
      setName("");
      setIsOpen(false);
    }
  };

  return (
    <section id="waitlist" className="py-32 px-6 relative overflow-hidden scroll-mt-20 bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Retro grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none opacity-60" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-background rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Retro sticker badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-cream text-foreground px-6 py-3 rounded-full font-display text-sm font-bold shadow-xl rotate-[-2deg] border-4 border-foreground/20 inline-block">
              ⭐ EXCLUSIVE ACCESS ⭐
            </div>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-background mb-6 leading-tight text-center">
            Don't sleep on this.
            <br />
            <span className="italic text-6xl md:text-8xl">Join the waitlist.</span>
          </h2>
          
          <p className="text-background/90 text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto text-center leading-relaxed">
            Be the first to experience AI-powered outfit matching.
            <br />
            <span className="font-display italic text-2xl">No outfit regret. No decision fatigue.</span>
            <br />
            <span className="text-lg">Just pure style confidence. ✨</span>
          </p>

          {/* Waitlist form card */}
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-foreground/20 max-w-2xl mx-auto paper-texture relative">
            <div className="absolute -top-4 -right-4 bg-accent text-foreground px-4 py-2 rounded-full font-display text-sm font-bold shadow-xl rotate-12 border-2 border-foreground/20">
              Early Bird 🐦
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-display text-lg text-foreground">
                  What's your name?
                </Label>
                <Input
                  id="name"
                  placeholder="Cher Horowitz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-3 border-foreground/30 focus:border-primary rounded-2xl text-lg py-6 bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-display text-lg text-foreground">
                  Drop your email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="cher@clueless.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-3 border-foreground/30 focus:border-primary rounded-2xl text-lg py-6 bg-background"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-accent to-primary text-background font-display text-xl md:text-2xl py-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-3 border-foreground/20"
              >
                <Sparkles className="mr-3 w-6 h-6" />
                Count me in! 💅
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t-2 border-foreground/10">
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-display text-foreground/70">
                <span>✨ Early access</span>
                <span>•</span>
                <span>🎁 VIP perks</span>
                <span>•</span>
                <span>📸 Behind-the-scenes</span>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <p className="mt-12 text-background text-center font-display text-lg italic">
            "As if! This is gonna be totally rad." - Everyone on the waitlist
          </p>
        </div>
      </div>
    </section>
  );
};
