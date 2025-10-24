import fashionCollage from "@/assets/fashion-collage.jpg";
import polaroidStyle from "@/assets/polaroid-style.jpg";
import wardrobeRack from "@/assets/wardrobe-rack.jpg";
import { Card } from "@/components/ui/card";

export const StyleGallery = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/30 via-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/20 to-muted/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 chromatic">
            Your style, <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">visualized.</span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            From mood boards to your closet, we bring your fashion vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Fashion Collage Card */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse">
            <div className="relative overflow-hidden">
              <img
                src={fashionCollage}
                alt="Fashion inspiration mood board"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Style Inspiration
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Curated looks that match your vibe
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Polaroid Style Card */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse" style={{ animationDelay: "0.1s" }}>
            <div className="relative overflow-hidden">
              <img
                src={polaroidStyle}
                alt="Retro polaroid style outfits"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Outfit Memory
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Track your favorite combinations
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Wardrobe Rack Card */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-1 animate-slide-up retro-pulse" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden">
              <img
                src={wardrobeRack}
                alt="Minimalist wardrobe organization"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Digital Wardrobe
                  </h3>
                  <p className="text-cream/80 text-sm">
                    All your pieces, organized beautifully
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
