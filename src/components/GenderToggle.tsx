import { useGender } from "./GenderProvider";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function GenderToggle() {
  const { gender, setGender } = useGender();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setGender(gender === "female" ? "male" : "female")}
      className="border-2 border-foreground/20 hover:border-primary/50 font-display transition-all hover:scale-105 gap-2"
    >
      <User className="w-4 h-4" strokeWidth={1.5} />
      <span className="capitalize">{gender}</span>
    </Button>
  );
}
