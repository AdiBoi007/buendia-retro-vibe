import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/" className="font-display text-xl font-medium text-foreground">
              buendía
            </Link>
            <nav className="hidden lg:flex gap-10">
              <button 
                onClick={() => handleNavigation('/features')}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation('/how-it-works')}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
              >
                How it Works
              </button>
              <button 
                onClick={() => handleNavigation('/pricing')}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
              >
                Pricing
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation('/signin')}
              className="hidden md:inline-flex font-light"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavigation('/signup')}
              className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 font-light rounded-full"
            >
              Join Waitlist
            </Button>
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in border-t border-border mt-6">
            <button 
              onClick={() => handleNavigation('/features')}
              className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 font-light"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation('/how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 font-light"
            >
              How it Works
            </button>
            <button 
              onClick={() => handleNavigation('/pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 font-light"
            >
              Pricing
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button onClick={() => handleNavigation('/signin')} variant="ghost" size="sm" className="font-light">
                Sign In
              </Button>
              <Button onClick={() => handleNavigation('/signup')} size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-light rounded-full">
                Join Waitlist
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
