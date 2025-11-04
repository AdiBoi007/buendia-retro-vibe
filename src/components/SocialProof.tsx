import { Quote } from "lucide-react";

const testimonials = [
  "Life-changing",
  "Finally makes sense",
  "Best decision ever"
];

export const SocialProof = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((text, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-foreground/20 mx-auto" strokeWidth={1.5} />
              <p className="font-display text-xl text-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
