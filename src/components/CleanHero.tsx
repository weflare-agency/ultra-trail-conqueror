import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Users } from "lucide-react";
import heroImage from "@/assets/hero-trail-runners.jpg";
import harrierLogo from "@/assets/harrier-logo-white.png";

interface CleanHeroProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function CleanHero({ onEmailSubmit }: CleanHeroProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !firstName.trim()) return;
    
    setIsLoading(true);
    try {
      await onEmailSubmit(email, firstName);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={harrierLogo} 
              alt="Harrier" 
              className="h-12 md:h-16 mx-auto"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
            DOWNLOAD YOUR <span className="text-accent">FREE</span> 96 PAGE
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 leading-tight">
            HOW TO RUN AN ULTRA GUIDE
          </h2>

          {/* What's Inside Section */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              WHAT'S INSIDE
            </h3>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-4 text-left">
                <CheckCircle className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Essential checklists for kit, fuelling, and race day prep
                </p>
              </div>
              
              <div className="flex items-start gap-4 text-left">
                <Users className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Pro insights from ultra runners who've been there, done it, and gone back for more
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white border-0 text-gray-800 placeholder:text-gray-500 text-lg py-6"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-0 text-gray-800 placeholder:text-gray-500 text-lg py-6"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white text-lg font-semibold py-6"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "GET MY FREE GUIDE →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}