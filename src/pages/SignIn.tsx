import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles, Mail, Lock, ArrowRight, Shield, Zap, Heart } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { notifySignEvent } from "@/lib/notify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("Please enter your email");
        return;
      }
      await notifySignEvent("signin", email);
      toast.success("Sign in request received", {
        description: "We\u2019ll follow up shortly. No external redirects.",
      });
      setPassword("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not send right now";
      const friendly = /activate/i.test(msg)
        ? "Check your inbox for an 'Activate Form' email from FormSubmit, then try again."
        : msg;
      toast.error("Couldn\u2019t notify sign in", { description: friendly });
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/10 px-4 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grain pointer-events-none opacity-20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <Card className="w-full max-w-md relative z-10 border-4 border-foreground/10 backdrop-blur-xl bg-card/95 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg pointer-events-none" />
          
          <CardHeader className="space-y-4 text-center relative">
            <div className="flex justify-center mb-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-cream animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary px-3 py-1 animate-shimmer">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure Login
                </Badge>
              </div>
              
              <CardTitle className="text-4xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                Welcome Back
              </CardTitle>
              
              <CardDescription className="text-base text-muted-foreground/80">
                Sign in to continue your style journey
              </CardDescription>
            </div>
            
            <Separator className="bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5">
              <div className="space-y-2 group">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email_entered"
                    className="pl-4 pr-4 py-6 text-base border-2 border-foreground/10 focus:border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 focus:shadow-lg focus:shadow-primary/10"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="password" className="flex items-center gap-2 text-sm font-medium">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-4 pr-4 py-6 text-base border-2 border-foreground/10 focus:border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 focus:shadow-lg focus:shadow-primary/10"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Forgot password?
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset your password securely</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pb-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary via-accent to-primary text-cream border-0 font-display text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Access your personalized wardrobe</p>
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
                  Don't have an account?
                  <Link 
                    to="/signup" 
                    className="text-primary hover:text-primary/80 font-bold transition-colors inline-flex items-center gap-1 group"
                  >
                    Sign Up
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
                    <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary text-xs px-3 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      Fast & Secure
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bank-level encryption</p>
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

export default SignIn;
