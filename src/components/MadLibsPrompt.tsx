import { useState, useEffect } from "react";

interface MadLibsPromptProps {
  selectedPrompt: {
    mood: string;
    event: string;
    style: string;
  };
  setSelectedPrompt: (prompt: any) => void;
}

const RotatingText = ({ options, color }: { options: string[], color: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % options.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [options.length]);

  return (
    <span 
      className={`inline-block min-w-[140px] text-center font-display font-bold px-4 py-1 rounded-full ${color} transition-all duration-500`}
      key={currentIndex}
      style={{
        animation: 'fade-in 0.5s ease-in-out'
      }}
    >
      {options[currentIndex]}
    </span>
  );
};

export const MadLibsPrompt = ({ selectedPrompt, setSelectedPrompt }: MadLibsPromptProps) => {
  const moods = ["confident", "playful", "cozy", "edgy", "romantic", "professional"];
  const events = ["a party", "work", "a date", "brunch", "the gym", "a concert"];
  const styles = ["chic", "casual", "bold", "elegant", "vintage", "minimal"];

  const [moodIndex, setMoodIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const moodInterval = setInterval(() => {
      setMoodIndex((prev) => {
        const newIndex = (prev + 1) % moods.length;
        setSelectedPrompt((current: any) => ({ ...current, mood: moods[newIndex] }));
        return newIndex;
      });
    }, 2000);

    const eventInterval = setInterval(() => {
      setEventIndex((prev) => {
        const newIndex = (prev + 1) % events.length;
        setSelectedPrompt((current: any) => ({ ...current, event: events[newIndex] }));
        return newIndex;
      });
    }, 2300);

    const styleInterval = setInterval(() => {
      setStyleIndex((prev) => {
        const newIndex = (prev + 1) % styles.length;
        setSelectedPrompt((current: any) => ({ ...current, style: styles[newIndex] }));
        return newIndex;
      });
    }, 2600);

    return () => {
      clearInterval(moodInterval);
      clearInterval(eventInterval);
      clearInterval(styleInterval);
    };
  }, []);

  return (
    <div className="bg-background/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-cream/30">
      <p className="font-body text-lg text-foreground flex flex-wrap items-center gap-2">
        <span>I'm feeling</span>
        <RotatingText options={moods} color="bg-accent/20 text-foreground" />
        
        <span>going to</span>
        <RotatingText options={events} color="bg-secondary/30 text-foreground" />
        
        <span>and want to look</span>
        <RotatingText options={styles} color="bg-primary/20 text-foreground" />
      </p>
    </div>
  );
};
