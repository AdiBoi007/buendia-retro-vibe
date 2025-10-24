import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    avatar: "SC",
    quote: "Buendía literally changed my mornings. I used to spend 30 minutes staring at my closet. Now? 30 seconds.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Product Designer",
    avatar: "MJ",
    quote: "It's like having a personal stylist who actually knows my wardrobe better than I do. Game changer.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Manager",
    avatar: "ER",
    quote: "I rediscovered pieces I forgot I owned. Buendía made me fall in love with my wardrobe again.",
    rating: 5
  },
  {
    name: "Alex Kim",
    role: "Software Engineer",
    avatar: "AK",
    quote: "Finally, an AI that gets fashion right. No more decision fatigue, just pure confidence.",
    rating: 5
  }
];

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-muted/30 to-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 chromatic">
            Real people.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Real confidence.
            </span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            Join thousands who've already transformed their style routine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-4 border-foreground/10 bg-card/80 backdrop-blur-md shadow-2xl overflow-hidden retro-pulse">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-16 h-16 text-primary/30 mb-6" />
              
              <div className="space-y-6">
                <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-1 text-primary">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="w-16 h-16 border-4 border-primary/20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-background font-display text-xl">
                      {testimonials[current].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-sm text-foreground/70">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current 
                      ? "bg-primary w-8" 
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
