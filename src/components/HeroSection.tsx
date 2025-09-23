import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-trail-runners.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    try {
      await onEmailSubmit(email, firstName);
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
          
          <p className="font-saira font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-tight tracking-wide drop-shadow-lg">
            73% OF FIRST-TIME ULTRA RUNNERS DON'T FINISH<br />
            HERE'S HOW TO BE IN THE 27% WHO DO
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
                  placeholder="Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-14 text-xl font-medium border-2 border-harrier-light-green/30 focus:border-harrier-medium-green rounded-xl"
                  required
                />
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