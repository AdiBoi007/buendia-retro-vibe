import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MadLibsPromptProps {
  selectedPrompt: {
    mood: string;
    event: string;
    style: string;
  };
  setSelectedPrompt: (prompt: any) => void;
}

export const MadLibsPrompt = ({ selectedPrompt, setSelectedPrompt }: MadLibsPromptProps) => {
  const moods = ["confident", "playful", "cozy", "edgy", "romantic", "professional"];
  const events = ["a party", "work", "a date", "brunch", "the gym", "a concert"];
  const styles = ["chic", "casual", "bold", "elegant", "vintage", "minimal"];

  return (
    <div className="bg-background/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-cream/30">
      <p className="font-body text-lg text-foreground flex flex-wrap items-center gap-2">
        <span>I'm feeling</span>
        <Select
          value={selectedPrompt.mood}
          onValueChange={(value) => setSelectedPrompt({ ...selectedPrompt, mood: value })}
        >
          <SelectTrigger className="w-[140px] inline-flex bg-accent/20 border-accent text-foreground font-display rounded-full px-4 py-2 hover:bg-accent/30 transition-colors">
            <SelectValue placeholder="mood" />
          </SelectTrigger>
          <SelectContent className="bg-background border-accent">
            {moods.map((mood) => (
              <SelectItem 
                key={mood} 
                value={mood}
                className="font-body hover:bg-accent/20 cursor-pointer"
              >
                {mood}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <span>going to</span>
        <Select
          value={selectedPrompt.event}
          onValueChange={(value) => setSelectedPrompt({ ...selectedPrompt, event: value })}
        >
          <SelectTrigger className="w-[140px] inline-flex bg-secondary/30 border-secondary text-foreground font-display rounded-full px-4 py-2 hover:bg-secondary/40 transition-colors">
            <SelectValue placeholder="event" />
          </SelectTrigger>
          <SelectContent className="bg-background border-secondary">
            {events.map((event) => (
              <SelectItem 
                key={event} 
                value={event}
                className="font-body hover:bg-secondary/20 cursor-pointer"
              >
                {event}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <span>and want to look</span>
        <Select
          value={selectedPrompt.style}
          onValueChange={(value) => setSelectedPrompt({ ...selectedPrompt, style: value })}
        >
          <SelectTrigger className="w-[140px] inline-flex bg-primary/20 border-primary text-foreground font-display rounded-full px-4 py-2 hover:bg-primary/30 transition-colors">
            <SelectValue placeholder="style" />
          </SelectTrigger>
          <SelectContent className="bg-background border-primary">
            {styles.map((style) => (
              <SelectItem 
                key={style} 
                value={style}
                className="font-body hover:bg-primary/20 cursor-pointer"
              >
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </p>
    </div>
  );
};
