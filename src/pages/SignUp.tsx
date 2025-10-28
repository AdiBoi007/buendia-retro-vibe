import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles, Mail, Lock, ArrowRight, Shield, Zap, Heart, Check, Star } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength += 25;
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength += 25;
    if (pwd.match(/[0-9]/)) strength += 25;
    if (pwd.match(/[^a-zA-Z0-9]/)) strength += 25;
    setPasswordStrength(strength);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    // TODO: Implement authentication
    console.log("Sign up:", { email, password });
  };

  const benefits = [
    { icon: Shield, text: "Military-grade security" },
    { icon: Zap, text: "Instant wardrobe access" },
    { icon: Star, text: "AI-powered recommendations" },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/10 px-4 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grain pointer-events-none opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <Card className="w-full max-w-md relative z-10 border-4 border-foreground/10 backdrop-blur-xl bg-card/95 shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-lg pointer-events-none" />
          
          <CardHeader className="space-y-4 text-center relative">
            <div className="flex justify-center mb-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-cream animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge variant="outline" className="border-accent/50 bg-accent/10 text-accent px-3 py-1 animate-shimmer">
                  <Star className="w-3 h-3 mr-1" />
                  Join 12.5K+ Users
                </Badge>
              </div>
              
              <CardTitle className="text-4xl font-display font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Get Started Free
              </CardTitle>
              
              <CardDescription className="text-base text-muted-foreground/80">
                Create your account in seconds
              </CardDescription>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {benefits.map((benefit, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors group">
                      <benefit.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">{benefit.text.split(' ')[0]}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{benefit.text}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            
            <Separator className="bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5">
              <div className="space-y-2 group">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4 text-accent" />
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-4 pr-4 py-6 text-base border-2 border-foreground/10 focus:border-accent/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 focus:shadow-lg focus:shadow-accent/10"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="password" className="flex items-center gap-2 text-sm font-medium">
                  <Lock className="w-4 h-4 text-accent" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      calculatePasswordStrength(e.target.value);
                    }}
                    className="pl-4 pr-4 py-6 text-base border-2 border-foreground/10 focus:border-accent/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 focus:shadow-lg focus:shadow-accent/10"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {password && (
                  <div className="space-y-1">
                    <Progress value={passwordStrength} className="h-2" />
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      Strength: 
                      <span className={passwordStrength >= 75 ? "text-green-500 font-medium" : passwordStrength >= 50 ? "text-yellow-500" : "text-red-500"}>
                        {passwordStrength >= 75 ? "Strong" : passwordStrength >= 50 ? "Medium" : "Weak"}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-sm font-medium">
                  <Check className="w-4 h-4 text-accent" />
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-4 pr-4 py-6 text-base border-2 border-foreground/10 focus:border-accent/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 focus:shadow-lg focus:shadow-accent/10"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    Passwords don't match
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pb-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-accent via-primary to-accent text-cream border-0 font-display text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/30 transform hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      Create Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Start your style journey today</p>
                </TooltipContent>
              </Tooltip>

              <div className="relative w-full">
                <Separator className="my-4" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3">
                  <Badge variant="outline" className="border-foreground/20 text-xs">OR</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                  Already have an account?
                  <Link 
                    to="/signin" 
                    className="text-accent hover:text-accent/80 font-bold transition-colors inline-flex items-center gap-1 group"
                  >
                    Sign In
                    <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  </Link>
                </p>
                
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-foreground text-center transition-colors flex items-center justify-center gap-2 group"
                >
                  <Heart className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Link>
              </div>

              <div className="flex items-center justify-center gap-3 mt-4">
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline" className="border-accent/30 bg-accent/5 text-accent text-xs px-3 py-1">
                      <Shield className="w-3 h-3 mr-1" />
                      100% Secure
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your data is encrypted</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary text-xs px-3 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      No Credit Card
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Free forever plan available</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default SignUp;
