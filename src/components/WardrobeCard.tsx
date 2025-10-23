import { cn } from "@/lib/utils";

interface WardrobeCardProps {
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export const WardrobeCard = ({ image, className, style }: WardrobeCardProps) => {
  return (
    <div 
      className={cn(
        "w-48 bg-cream p-3 rounded-lg shadow-xl border-4 border-background/80 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image}
          alt="Outfit suggestion"
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
  );
};
