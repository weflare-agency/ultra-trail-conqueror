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
      className="relative min-h-screen flex items-center justify-center py-20 hero-cycling-bg"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-harrier-dark-green/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 brand-title animate-fade-in">
              DOWNLOAD YOUR FREE<br />
              <span className="text-harrier-yellow">HOW TO RUN AN ULTRA</span><br />
              GUIDE
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 brand-subtitle animate-fade-in">
              Everything You Need to Train, Gear Up & Finish Strong
            </h2>
            
            {/* Description */}
            <div className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 brand-body animate-fade-in space-y-4">
              <p>Ready to run your first ultra or take your next one up a notch?</p>
              <p>This free 96-page guide gives you everything you need to succeed. Packed with practical advice, proven strategies, and hard-earned wisdom, this is your go-to ultra companion.</p>
            </div>
            
            {/* What's Inside */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 brand-subtitle">WHAT'S INSIDE</h3>
              <div className="space-y-3 animate-slide-up">
                {[
                  "Choosing your ultra, goal setting and motivation",
                  "Essential checklists for kit, fuelling, and race day prep", 
                  "Expert gear guidance to help you choose what to carry (and what not to)",
                  "Mental strategies for decision making and pushing through the tough miles",
                  "Pro insights from ultra runners who've been there, done it, and gone back for more"
                ].map((item, index) => (
                  <div key={index} className="flex items-start text-white/90 text-left">
                    <div className="w-6 h-6 bg-harrier-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-harrier-dark-green" />
                    </div>
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
                <h3 className="text-2xl font-bold text-harrier-dark-green mb-2 brand-title">
                  FREE INSTANT ACCESS
                </h3>
                <p className="text-harrier-dark-green/80 brand-body">
                  Drop your name and email below and we'll send the guide straight to your inbox.
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
                  className="w-full h-14 text-lg cta-button brand-title"
                >
                  {isLoading ? "SENDING..." : "GET YOUR FREE GUIDE NOW"}
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
              <p className="text-white/90 mb-3 brand-subtitle text-lg">PREFER A PHYSICAL COPY?</p>
              <p className="text-white/70 text-sm mb-4 brand-body">Grab the printed book for just £9.99.</p>
              <a 
                href="https://harrierrunfree.co.uk/collections/ultra-collection/products/how-to-run-an-ultra-book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-harrier-dark-green transition-all duration-300 rounded-lg brand-subtitle text-sm"
              >
                GRAB THE PRINTED VERSION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}