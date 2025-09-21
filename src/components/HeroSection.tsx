import React, { useState } from "react";
import { Star, Shield, Users, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import harrierLogo from "@/assets/harrier-logo-white.png";
import heroTrailRunners from "@/assets/hero-trail-runners.jpg";
import ultraGuidePreview from "@/assets/ultra-guide-preview.jpg";
import runnerAction1 from "@/assets/runner-action-1.jpg";
import runnerAction2 from "@/assets/runner-action-2.jpg";
import runnerAction3 from "@/assets/runner-action-3.jpg";
import topoPattern from "@/assets/topographic-pattern.png";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
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
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `var(--gradient-hero), url(${heroTrailRunners})`,
      }}
    >
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${topoPattern})`,
          backgroundSize: '600px 600px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img 
            src={harrierLogo} 
            alt="Harrier Trail Running" 
            className="h-12 md:h-16 w-auto"
          />
          <div className="hidden md:flex items-center gap-6 text-white font-saira font-semibold">
            <span className="text-harrier-orange">★★★★★</span>
            <span>15,000+ Happy Runners</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Center-Aligned Hero Content */}
          <div className="text-center mb-16 space-y-8">
            
            {/* Main Headline - Conversion Optimized */}
            <div className="space-y-6">
              <h1 className="font-saira font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
                HOW TO RUN
                <span className="block text-harrier-orange">AN ULTRA</span>
              </h1>
              
              <p className="font-saira font-bold text-2xl md:text-3xl lg:text-4xl text-white/95 max-w-4xl mx-auto leading-tight">
                POWERFUL LESSONS IN LONG DISTANCE TRAIL RUNNING
              </p>
              
              <p className="font-comfortaa font-semibold text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                The complete training system that's helped 15,000+ runners successfully finish their first ultra marathon
              </p>
            </div>

            {/* Social Proof Stats - Above the Fold */}
            <div className="flex justify-center items-center gap-8 md:gap-12 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="text-3xl md:text-4xl font-black text-harrier-orange font-saira">15,000+</div>
                <div className="text-sm font-bold text-white/90 font-saira">SUCCESSFUL FINISHERS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="text-3xl md:text-4xl font-black text-harrier-orange font-saira">96</div>
                <div className="text-sm font-bold text-white/90 font-saira">PAGES OF EXPERTISE</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-harrier-orange text-harrier-orange" />
                  ))}
                </div>
                <div className="text-sm font-bold text-white/90 font-saira">5-STAR RATED</div>
              </div>
            </div>
          </div>

          {/* Premium Form - Center Stage */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
              
              {/* Free Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-harrier-orange text-white px-8 py-3 rounded-2xl font-black text-lg shadow-xl font-saira">
                FREE INSTANT DOWNLOAD
              </div>

              {/* Guide Preview */}
              <div className="text-center mb-8 mt-4">
                <div className="relative inline-block">
                  <img 
                    src={ultraGuidePreview} 
                    alt="How to Run an Ultra - Complete Guide Preview" 
                    className="w-40 md:w-48 h-auto mx-auto shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-harrier-medium-green text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg font-saira">
                    96 PAGES
                  </div>
                </div>
                
                <h2 className="font-saira font-black text-2xl md:text-3xl text-harrier-dark-green mt-6 mb-2">
                  GET YOUR FREE COPY
                </h2>
                <p className="font-comfortaa font-medium text-harrier-dark-green/70 text-lg">
                  Join 15,000+ runners who've transformed their ultra dreams into reality
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-6 py-4 text-lg font-semibold border-2 border-harrier-mint rounded-xl focus:border-harrier-medium-green focus:outline-none focus:ring-0 transition-all duration-300 font-comfortaa"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-lg font-semibold border-2 border-harrier-mint rounded-xl focus:border-harrier-medium-green focus:outline-none focus:ring-0 transition-all duration-300 font-comfortaa"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="cta-button w-full"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      SENDING TO YOU...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Download className="w-5 h-5" />
                      DOWNLOAD FREE GUIDE
                    </div>
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-6 h-6 text-harrier-medium-green" />
                  <span className="text-xs font-bold text-harrier-dark-green/80 font-saira">INSTANT ACCESS</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-6 h-6 text-harrier-medium-green" />
                  <span className="text-xs font-bold text-harrier-dark-green/80 font-saira">100% SECURE</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-6 h-6 text-harrier-medium-green" />
                  <span className="text-xs font-bold text-harrier-dark-green/80 font-saira">NO SPAM EVER</span>
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-harrier-dark-green/60 mt-6 font-comfortaa">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Problem/Solution - Below Form */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <h3 className="font-saira font-black text-2xl md:text-3xl text-harrier-orange mb-6">
                STOP FOLLOWING GENERIC MARATHON ADVICE
              </h3>
              <p className="font-comfortaa font-semibold text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ultra marathons require completely different strategies. This guide gives you the proven system for nutrition, pacing, mental preparation, and race-day tactics that actually work for 30+ mile distances.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-harrier-orange rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <p className="text-white font-semibold font-comfortaa">Mental Strategies</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-harrier-orange rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <p className="text-white font-semibold font-comfortaa">Nutrition Protocols</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-harrier-orange rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <p className="text-white font-semibold font-comfortaa">Race Tactics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}