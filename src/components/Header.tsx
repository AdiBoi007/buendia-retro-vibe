import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { GenderToggle } from "./GenderToggle";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl z-50 border-b border-foreground/10 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                glimpse
              </h1>
              <Badge className="hidden sm:inline-flex bg-accent/10 text-accent border-accent/20 text-xs font-display">
                Beta
              </Badge>
            </Link>
            <nav className="hidden lg:flex gap-8">
              <button 
                onClick={() => handleNavigation('/features')}
                className="text-foreground/70 hover:text-foreground transition-colors font-display text-sm font-medium hover:scale-105 transition-transform"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation('/how-it-works')}
                className="text-foreground/70 hover:text-foreground transition-colors font-display text-sm font-medium hover:scale-105 transition-transform"
              >
                How it Works
              </button>
              <button 
                onClick={() => handleNavigation('/pricing')}
                className="text-foreground/70 hover:text-foreground transition-colors font-display text-sm font-medium hover:scale-105 transition-transform"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavigation('/faq')}
                className="text-foreground/70 hover:text-foreground transition-colors font-display text-sm font-medium hover:scale-105 transition-transform"
              >
                FAQ
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <GenderToggle />
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/signin')}
              className="hidden md:inline-flex border-2 border-foreground/20 hover:border-primary/50 font-display transition-all hover:scale-105"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavigation('/signup')}
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent text-background border-0 font-display shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Get Started
            </Button>
            <button
              className="lg:hidden text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in border-t border-foreground/10 mt-4">
            <button 
              onClick={() => handleNavigation('/features')}
              className="text-foreground/70 hover:text-foreground transition-colors font-display text-left py-2"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation('/how-it-works')}
              className="text-foreground/70 hover:text-foreground transition-colors font-display text-left py-2"
            >
              How it Works
            </button>
            <button 
              onClick={() => handleNavigation('/pricing')}
              className="text-foreground/70 hover:text-foreground transition-colors font-display text-left py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('/faq')}
              className="text-foreground/70 hover:text-foreground transition-colors font-display text-left py-2"
            >
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-foreground/10">
              <Button onClick={() => handleNavigation('/signin')} variant="outline" size="sm" className="border-2 font-display">
                Sign In
              </Button>
              <Button onClick={() => handleNavigation('/signup')} size="sm" className="bg-gradient-to-r from-primary to-accent text-background border-0 font-display">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
