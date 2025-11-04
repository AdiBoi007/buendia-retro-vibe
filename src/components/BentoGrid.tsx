import { Camera, Calendar, TrendingUp, Palette } from "lucide-react";
import aiWardrobe from "@/assets/ai-wardrobe.jpg";
import fashionDisplay from "@/assets/fashion-display.jpg";
import boutiqueShop from "@/assets/boutique-shop.jpg";
import wardrobeRack from "@/assets/wardrobe-rack.jpg";

export const BentoGrid = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Large feature */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group animate-fade-in">
            <img 
              src={aiWardrobe} 
              alt="" 
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mb-3">
                <Camera className="w-6 h-6 text-background" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-foreground">Visual Wardrobe</h3>
            </div>
          </div>

          {/* Small feature */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl group animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={fashionDisplay} 
              alt="" 
              className="w-full h-full object-cover aspect-[2/1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <Calendar className="w-5 h-5 text-background" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-foreground">Outfit Calendar</h3>
            </div>
          </div>

          {/* Small feature */}
          <div className="relative overflow-hidden rounded-3xl group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={boutiqueShop} 
              alt="" 
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-background" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Small feature */}
          <div className="relative overflow-hidden rounded-3xl group animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img 
              src={wardrobeRack} 
              alt="" 
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <Palette className="w-5 h-5 text-background" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
