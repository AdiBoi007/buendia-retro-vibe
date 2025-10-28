import fashionCollage from "@/assets/fashion-collage.jpg";
import polaroidStyle from "@/assets/polaroid-style.jpg";
import wardrobeRack from "@/assets/wardrobe-rack.jpg";
import fashionDisplay from "@/assets/fashion-display.jpg";
import clothingRack from "@/assets/clothing-rack-minimal.jpg";
import boutiqueShop from "@/assets/boutique-shop.jpg";
import fashionModels from "@/assets/fashion-models.jpg";
import fashionRunway from "@/assets/fashion-runway.jpg";
import trendyOutfit from "@/assets/trendy-outfit.jpg";
import accessoriesFlatLay from "@/assets/accessories-flat-lay.jpg";
import streetStyle from "@/assets/street-style.jpg";
import luxuryCloset from "@/assets/luxury-closet.jpg";
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Fashion Display */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse">
            <div className="relative overflow-hidden">
              <img
                src={fashionDisplay}
                alt="Curated fashion display and style inspiration"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Fashion Forward
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Curated looks that match your aesthetic
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Boutique Shop */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse md:col-span-2" style={{ animationDelay: "0.1s" }}>
            <div className="relative overflow-hidden">
              <img
                src={boutiqueShop}
                alt="Beautiful boutique fashion shopping experience"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Boutique Vibes
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Discover unique pieces that define you
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Clothing Rack */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden">
              <img
                src={clothingRack}
                alt="Minimalist clothing rack organization"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Smart Organization
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Everything in its perfect place
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Fashion Models */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse" style={{ animationDelay: "0.3s" }}>
            <div className="relative overflow-hidden">
              <img
                src={fashionModels}
                alt="Fashion models showcasing trendy outfits"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Style Inspo
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Get inspired by the latest trends
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Trendy Outfit */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse" style={{ animationDelay: "0.4s" }}>
            <div className="relative overflow-hidden">
              <img
                src={trendyOutfit}
                alt="Trendy outfit combinations and styling"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Mix & Match
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Create endless outfit possibilities
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Accessories Flat Lay */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 md:col-span-2 animate-slide-up retro-pulse" style={{ animationDelay: "0.5s" }}>
            <div className="relative overflow-hidden">
              <img
                src={accessoriesFlatLay}
                alt="Fashion accessories and styling details"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Details Matter
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Perfect your look with the right accessories
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Street Style */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up retro-pulse md:col-span-2" style={{ animationDelay: "0.6s" }}>
            <div className="relative overflow-hidden">
              <img
                src={streetStyle}
                alt="Urban street style fashion inspiration"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Street Chic
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Everyday style that turns heads
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Luxury Closet */}
          <Card className="group overflow-hidden border-4 border-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 md:col-span-2 animate-slide-up retro-pulse" style={{ animationDelay: "0.7s" }}>
            <div className="relative overflow-hidden">
              <img
                src={luxuryCloset}
                alt="Luxury closet and wardrobe organization"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Dream Closet
                  </h3>
                  <p className="text-cream/80 text-sm">
                    Your wardrobe, perfectly curated
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
