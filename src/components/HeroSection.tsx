import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-trail-runners.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [currentHeadline, setCurrentHeadline] = useState("Master");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline(prev => prev === "Master" ? "Conquer" : "Master");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    await onEmailSubmit(email, firstName);
    setIsLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(23, 98, 80, 0.85) 0%, rgba(30, 140, 115, 0.75) 100%), url(${heroImage})` 
        }}
      />
      
      {/* Topographic Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="transition-all duration-500 ease-in-out">
              {currentHeadline}
            </span>{" "}
            Ultra Running:<br />
            <span className="text-harrier-yellow">From First Steps to Finish Line</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Everything You Need to Train, Gear Up & Finish Strong
          </p>
          
          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Free 96-page guide trusted by <span className="text-harrier-yellow font-bold">15,000+ UK trail runners</span>
          </p>
          
          {/* Email Capture Form */}
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <Label htmlFor="firstName" className="text-harrier-dark-green font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 text-base h-12 border-harrier-light-green focus:ring-harrier-medium-green"
                  required
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="email" className="text-harrier-dark-green font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 text-base h-12 border-harrier-light-green focus:ring-harrier-medium-green"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                variant="cta"
                className="w-full text-lg font-bold h-14"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Get My Free Ultra Guide"}
              </Button>
              
              <p className="text-xs text-harrier-dark-gray text-center">
                🔒 SSL Secure • No spam guarantee • Instant access
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}