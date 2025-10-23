import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <span className="font-display text-background font-bold text-lg">B</span>
          </div>
          <span className="font-display text-2xl font-bold text-foreground">Buendía</span>
        </div>

        {/* Nav + Theme Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 font-body text-sm">
            <a href="#how" className="text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#waitlist" className="text-foreground/70 hover:text-foreground transition-colors">
              Join Waitlist
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
