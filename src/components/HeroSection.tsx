import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Shield, Clock, CheckCircle, Star } from "lucide-react";
import heroBackground from "@/assets/harrier-hero-runner.jpg";
import harrierLogoWhite from "@/assets/harrier-logo-white.png";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}



const whatsInsideItems = [
  "12-week progressive training plans for all levels",
  "Nutrition strategies that prevent bonking", 
  "Gear recommendations from ultra veterans",
  "Mental training techniques for tough miles",
  "Recovery protocols to prevent injury",
  "Race day execution checklist"
];

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep === 1) {
      if (!email.trim()) return;
      setFormStep(2);
      return;
    }
    
    if (!fullName.trim()) return;

    setIsLoading(true);
    await onEmailSubmit(email, fullName);
    setIsLoading(false);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="hero-content container mx-auto px-4 py-12 relative z-20">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <img 
            src={harrierLogoWhite} 
            alt="Harrier Trail Running" 
            className="h-12 mx-auto mb-6"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="text-left">
              {/* Main Headlines */}
              <div className="mb-8">
                <h2 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
                  DOWNLOAD YOUR <span className="text-orange-400">FREE</span> 96 PAGE
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-400 mb-4 leading-tight tracking-tight">
                  HOW TO RUN AN ULTRA GUIDE
                </h1>
              </div>

              {/* What's Inside Section */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
                  WHAT'S INSIDE
                </h3>
                <div className="space-y-3">
                  {whatsInsideItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Conversion Form */}
            <div className="lg:max-w-md mx-auto w-full">
              <div className="conversion-form p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Get Your Free Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instant download • 100% FREE
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStep === 1 && (
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  )}

                  {formStep === 2 && (
                    <div>
                      <Input
                        type="text"
                        placeholder="What's your full name?"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="cta-button w-full h-12 text-base font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Preparing...
                      </div>
                    ) : formStep === 1 ? (
                      "Continue →"
                    ) : (
                      "Download Free Guide →"
                    )}
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="flex justify-center gap-6 mt-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-600">Secure</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-600">Instant</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Star className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-600">Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}