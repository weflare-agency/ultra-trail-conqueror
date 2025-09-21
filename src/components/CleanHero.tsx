import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-trail-runners.jpg";

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
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Main Headline */}
          <div className="mb-12">
            <p className="text-yellow-400 text-lg font-semibold mb-4">
              DOWNLOAD YOUR FREE 96-PAGE GUIDE
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              HOW TO RUN
              <span className="block text-yellow-400">AN ULTRA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              The complete step-by-step guide that's helped thousands of runners complete their first ultra marathon
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
                className="w-full h-12 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black"
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