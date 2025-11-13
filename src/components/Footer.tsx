import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">glimpse</h3>
            <p className="font-body text-background/80 text-sm leading-relaxed">
              Your style, your wardrobe, your vision.
              <br />
              We just finish your thought.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-background/60">
              Product
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-background/60">
              Connect
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-background/60">
            © 2025 glimpse. All rights reserved.
          </p>
          <p className="font-body text-sm text-background/60 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for fashion lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
