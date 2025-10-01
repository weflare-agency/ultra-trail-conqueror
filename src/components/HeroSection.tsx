import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cotswold-runners.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string, runnerLevel?: string) => void;
}

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [runnerLevel, setRunnerLevel] = useState('beginner');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    try {
      await onEmailSubmit(email, firstName, runnerLevel);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="hero-form"
      className="relative min-h-screen flex items-center justify-center py-12"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Problem-Focused Headline */}
        <div className="max-w-5xl mx-auto mb-12">
          <h1 className="font-saira font-black text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9] tracking-[0.02em] drop-shadow-2xl">
            DON'T LET YOUR FIRST<br />
            <span className="text-harrier-yellow">ULTRA END IN</span><br />
            FAILURE
          </h1>
          
          <p className="font-saira font-bold text-xl md:text-2xl lg:text-3xl text-white mb-8 leading-tight tracking-wide drop-shadow-lg">
            WITH SOME UK ULTRA EVENTS REPORTING DNF RATES OF UP TO 40%*,<br />
            IT'S CRUCIAL TO BE PHYSICALLY, MENTALLY AND PRACTICALLY PREPARED<br />
            FOR THE EVENT. ALSO TO CHOOSE THE ULTRA THAT'S RIGHT FOR YOU!
          </p>
          <p className="font-comfortaa font-semibold text-lg text-white/90 drop-shadow-lg">
            *UTS100 2025 DNF rate
          </p>
        </div>

        {/* Centered Form - Primary Focus */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-4 border-harrier-yellow">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-harrier-yellow px-6 py-2 rounded-full mb-4">
                <Star className="w-5 h-5 text-harrier-dark-green" />
                <span className="font-saira font-black text-harrier-dark-green text-sm tracking-wider">FREE INSTANT ACCESS</span>
                <Star className="w-5 h-5 text-harrier-dark-green" />
              </div>
              <h3 className="font-saira font-black text-2xl md:text-3xl text-harrier-dark-green mb-3 tracking-wide">
                GET YOUR FREE 96-PAGE<br />ULTRA RUNNING GUIDE
              </h3>
              <p className="font-comfortaa font-bold text-harrier-dark-green/80 text-lg leading-relaxed">
                EVERYTHING YOU NEED TO TRAIN, GEAR UP & FINISH STRONG
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Full Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-14 text-xl font-medium border-2 border-harrier-light-green/30 focus:border-harrier-medium-green rounded-xl"
                  required
                />
              </div>
              
              <div>
                <p className="text-sm font-black text-harrier-dark-green mb-3 uppercase tracking-wide">I AM A:</p>
                <RadioGroup
                  value={runnerLevel}
                  onValueChange={setRunnerLevel}
                  className="flex gap-4 justify-center"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <label htmlFor="beginner" className="text-sm font-bold text-harrier-dark-green cursor-pointer uppercase tracking-wide">
                      BEGINNER
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="regular" />
                    <label htmlFor="regular" className="text-sm font-bold text-harrier-dark-green cursor-pointer uppercase tracking-wide">
                      REGULAR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="veteran" id="veteran" />
                    <label htmlFor="veteran" className="text-sm font-bold text-harrier-dark-green cursor-pointer uppercase tracking-wide">
                      ULTRA VETERAN
                    </label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-xl font-medium border-2 border-harrier-light-green/30 focus:border-harrier-medium-green rounded-xl"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={!email || !firstName || isLoading}
                className="w-full h-16 text-xl font-black bg-harrier-yellow hover:bg-harrier-yellow/90 text-harrier-dark-green rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {isLoading ? "SENDING YOUR GUIDE..." : "GET MY FREE GUIDE NOW"}
              </Button>
              
              <p className="text-xs text-harrier-dark-green/70 text-center mt-3 leading-relaxed">
                By clicking "Get My Free Guide Now", you consent to receiving our free guide and occasional ultra running tips via email. You can unsubscribe anytime. We respect your privacy - see our{" "}
                <a href="https://harrierrunfree.co.uk/pages/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-harrier-medium-green hover:underline">privacy policy</a>.
              </p>
            </form>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-harrier-light-green/20">
              <div className="text-center">
                <Zap className="w-8 h-8 text-harrier-medium-green mx-auto mb-2" />
                <p className="text-sm font-semibold text-harrier-dark-green/70">INSTANT ACCESS</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-harrier-medium-green mx-auto mb-2" />
                <p className="text-sm font-semibold text-harrier-dark-green/70">100% SECURE</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-harrier-yellow mx-auto mb-2" />
                <p className="text-sm font-semibold text-harrier-dark-green/70">5-STAR RATED</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
            <p className="font-saira font-bold text-xl md:text-2xl text-harrier-dark-green mb-4">
              JOIN 15,000+ SUCCESSFUL ULTRA FINISHERS
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-harrier-yellow text-harrier-yellow" />
              ))}
            </div>
            <p className="font-comfortaa text-lg text-harrier-dark-green/80">
              "Full of great advice and information for those, like myself, looking to take on the ultra" - Arlene M
            </p>
          </div>

          {/* Physical Book Option */}
          <div className="text-center">
            <p className="font-comfortaa font-medium text-white text-lg mb-4">
              PREFER A PHYSICAL COPY? GRAB THE PRINTED BOOK FOR JUST £9.99
            </p>
            <a 
              href="https://harrierrunfree.co.uk/collections/ultra-collection/products/how-to-run-an-ultra-book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-3 border-white text-white hover:bg-white hover:text-harrier-dark-green transition-all duration-300 rounded-xl font-saira font-bold text-lg tracking-wide shadow-lg hover:shadow-xl"
            >
              GET THE PRINTED VERSION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}