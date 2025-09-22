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
      style={{ 
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
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
              <div className="conversion-form p-8 shadow-2xl bg-white/95 backdrop-blur-sm border border-white/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    LIMITED TIME OFFER
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Free Guide
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    Instant download • 100% FREE • No spam, ever
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
                    className="cta-button w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
                <div className="flex justify-center gap-8 mt-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">100% Secure</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">Instant Access</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">5-Star Rated</span>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">Join 12,000+ runners who downloaded this guide</p>
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