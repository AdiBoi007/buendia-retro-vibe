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
    <section id="waitlist" className="py-32 px-6 bg-gradient-to-br from-primary via-accent to-muted relative overflow-hidden scroll-mt-20">{/* Added scroll-mt-20 for anchor links */}
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
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

      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-background mb-6 leading-tight">
            Your wardrobe assistant
            <br />
            is almost here.
          </h2>
          <p className="text-background/90 text-xl font-body mb-12 max-w-2xl mx-auto">
            Join the waitlist and be first to experience effortless style.
            <br />
            <span className="font-display italic">No decision fatigue. No outfit regret.</span>
          </p>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-display text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <Sparkles className="mr-3 w-6 h-6" />
                Join the Waitlist
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-background border-2 border-primary/20">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-foreground">
                  Welcome to Buendía ✨
                </DialogTitle>
                <DialogDescription className="font-body text-foreground/70">
                  Be first to know when we launch. We promise not to spam - just good vibes.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-display text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Cher Horowitz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-2 border-foreground/20 focus:border-primary rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-display text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="cher@clueless.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-foreground/20 focus:border-primary rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-display text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  I'm In! 💅
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <p className="mt-8 text-background/70 text-sm font-body">
            Early access • Behind-the-scenes updates • VIP perks
          </p>
        </div>
      </div>
    </section>
  );
};
