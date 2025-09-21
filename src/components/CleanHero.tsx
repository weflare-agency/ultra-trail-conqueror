import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import topographicPattern from "@/assets/topographic-pattern.png";

interface CleanHeroProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function CleanHero({ onEmailSubmit }: CleanHeroProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    await onEmailSubmit(email, firstName);
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-primary">
      {/* Topographic Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${topographicPattern})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Main Headline */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              DOWNLOAD YOUR FREE
              <span className="block text-accent">HOW TO RUN AN ULTRA</span>
              <span className="block">GUIDE</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Everything You Need to Train, Gear Up & Finish Strong
            </p>
          </div>

          {/* Lead Capture Form */}
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get Instant Access
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 text-lg border-2"
                required
              />
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg border-2"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-white"
              >
                {isLoading ? "SENDING..." : "GET FREE GUIDE NOW"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4">
              No spam. Unsubscribe anytime. Trusted by 15,000+ runners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}