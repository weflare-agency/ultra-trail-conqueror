import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Shield, Star, Zap } from "lucide-react";
import heroImage1 from "@/assets/hero-trail-runners.jpg";
import heroImage2 from "@/assets/runner-action-1.jpg";
import heroImage3 from "@/assets/runner-action-2.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

const heroImages = [heroImage1, heroImage2, heroImage3];

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Cycle hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{ 
        backgroundImage: `url(${heroImage1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-harrier-dark-green/15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in leading-tight tracking-wider drop-shadow-lg">
              DOWNLOAD YOUR FREE<br />
              <span className="text-harrier-yellow">HOW TO RUN AN ULTRA</span><br />
              GUIDE
            </h1>
            
            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-bold text-white/95 mb-8 animate-fade-in tracking-wide drop-shadow-md">
              EVERYTHING YOU NEED TO TRAIN, GEAR UP & FINISH STRONG
            </h2>
            
            {/* Description */}
            <div className="brand-body text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in space-y-4">
              <p>READY TO RUN YOUR FIRST ULTRA OR TAKE YOUR NEXT ONE UP A NOTCH?</p>
              <p>THIS FREE 96-PAGE GUIDE GIVES YOU EVERYTHING YOU NEED TO SUCCEED. PACKED WITH PRACTICAL ADVICE, PROVEN STRATEGIES, AND HARD-EARNED WISDOM, THIS IS YOUR GO-TO ULTRA COMPANION.</p>
            </div>
            
            {/* What's Inside */}
            <div className="mb-8">
              <h3 className="brand-subtitle text-white mb-6">WHAT'S INSIDE</h3>
              <div className="space-y-3 animate-slide-up">
                {[
                  "CHOOSING YOUR ULTRA, GOAL SETTING AND MOTIVATION",
                  "ESSENTIAL CHECKLISTS FOR KIT, FUELLING, AND RACE DAY PREP", 
                  "EXPERT GEAR GUIDANCE TO HELP YOU CHOOSE WHAT TO CARRY (AND WHAT NOT TO)",
                  "MENTAL STRATEGIES FOR DECISION MAKING AND PUSHING THROUGH THE TOUGH MILES",
                  "PRO INSIGHTS FROM ULTRA RUNNERS WHO'VE BEEN THERE, DONE IT, AND GONE BACK FOR MORE"
                ].map((item, index) => (
                  <div key={index} className="yellow-highlight text-left">
                    <span className="brand-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="conversion-form p-8 animate-scale-in">
              <div className="text-center mb-6">
                <h3 className="brand-subtitle text-harrier-dark-green mb-2">
                  FREE INSTANT ACCESS
                </h3>
                <p className="brand-body text-harrier-dark-green/80">
                  DROP YOUR NAME AND EMAIL BELOW AND WE'LL SEND THE GUIDE STRAIGHT TO YOUR INBOX.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="conversion-input h-12 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="conversion-input h-12 text-lg"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={!email || !firstName || isLoading}
                  className="w-full h-14 text-lg cta-button brand-body"
                >
                  {isLoading ? "sending..." : "get your free guide now"}
                </Button>
              </form>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-harrier-light-green/20">
                <div className="text-center">
                  <Zap className="w-6 h-6 text-harrier-medium-green mx-auto mb-1" />
                  <p className="text-xs text-harrier-dark-green/70 brand-body">Instant Access</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-harrier-medium-green mx-auto mb-1" />
                  <p className="text-xs text-harrier-dark-green/70 brand-body">100% Secure</p>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 text-harrier-yellow mx-auto mb-1" />
                  <p className="text-xs text-harrier-dark-green/70 brand-body">5-Star Rated</p>
                </div>
              </div>
            </div>

            {/* Physical Book Option */}
            <div className="mt-6 text-center">
              <h3 className="brand-subtitle text-white mb-4">
                PREFER A PHYSICAL COPY?
              </h3>
              <p className="brand-body text-white/90 text-sm mb-4">
                GRAB THE PRINTED BOOK FOR JUST £9.99.
              </p>
              <a 
                href="https://harrierrunfree.co.uk/collections/ultra-collection/products/how-to-run-an-ultra-book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-harrier-dark-green transition-all duration-300 rounded-lg brand-body text-sm"
              >
                grab the printed version
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}