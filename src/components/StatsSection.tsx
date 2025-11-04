import { useEffect, useState } from "react";
import { Clock, Heart, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: 12500,
    suffix: "+",
    label: "Beta Users"
  },
  {
    icon: Clock,
    value: 15,
    suffix: "min",
    label: "Time Saved"
  },
  {
    icon: Heart,
    value: 87,
    suffix: "%",
    label: "Usage"
  },
  {
    icon: Sparkles,
    value: 4.9,
    suffix: "/5",
    label: "Rating"
  }
];

const CountUpAnimation = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="font-display text-3xl md:text-4xl font-semibold text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-foreground/5 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <CountUpAnimation 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="font-body text-foreground/50 text-xs uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
