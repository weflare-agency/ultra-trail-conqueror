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
        backgroundImage: `linear-gradient(135deg, rgba(14, 70, 73, 0.85), rgba(19, 142, 128, 0.75)), url(${heroTrailRunners})`,
      }}
    >
      {/* Topographic Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${topoPattern})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Brand Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src={harrierLogo} 
          alt="Harrier Trail Running" 
          className="h-16 md:h-20 w-auto filter brightness-110"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="hero-headline text-white leading-none">
                FROM COUCH TO
                <span className="block text-harrier-yellow">ULTRA FINISHER</span>
                IN 16 WEEKS
              </h1>
              
              <p className="brand-body text-white/90 max-w-2xl mx-auto lg:mx-0">
                THE COMPLETE ULTRA MARATHON TRAINING SYSTEM USED BY 15,000+ SUCCESSFUL FINISHERS
              </p>
            </div>

            {/* Problem/Solution */}
            <div className="bg-harrier-dark-green/80 rounded-3xl p-8 backdrop-blur-sm border-2 border-harrier-yellow/30">
              <h2 className="brand-subtitle text-harrier-yellow mb-4">
                STOP WASTING TIME ON BAD ADVICE
              </h2>
              <p className="brand-text text-white/90 mb-6">
                Generic marathon training doesn't work for ultras. You need specific strategies for:
              </p>
              <ul className="space-y-3 text-white/90 font-comfortaa font-medium text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-harrier-yellow rounded-full flex-shrink-0"></div>
                  Mental strategies for 6+ hour races
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-harrier-yellow rounded-full flex-shrink-0"></div>
                  Nutrition and hydration protocols
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-harrier-yellow rounded-full flex-shrink-0"></div>
                  Gear selection and race tactics
                </li>
              </ul>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-harrier-yellow font-saira">15K+</div>
                <div className="text-sm text-white/80 font-comfortaa">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-harrier-yellow font-saira">96</div>
                <div className="text-sm text-white/80 font-comfortaa">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-harrier-yellow font-saira">5★</div>
                <div className="text-sm text-white/80 font-comfortaa">Rating</div>
              </div>
            </div>

            {/* Action Runner Images */}
            <div className="hidden lg:flex gap-4 justify-center lg:justify-start">
              <img src={runnerAction1} alt="Trail Runner" className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-harrier-yellow" />
              <img src={runnerAction2} alt="Ultra Marathoner" className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-harrier-yellow" />
              <img src={runnerAction3} alt="Mountain Runner" className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-harrier-yellow" />
            </div>
          </div>

          {/* Right Column - Premium Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="premium-form w-full max-w-lg relative">
              
              {/* Free Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-harrier-yellow text-harrier-dark-green px-8 py-3 rounded-2xl font-black text-xl border-4 border-harrier-dark-green shadow-xl">
                FREE INSTANT DOWNLOAD
              </div>

              {/* Guide Preview */}
              <div className="text-center mb-8 mt-8">
                <div className="relative inline-block">
                  <img 
                    src={ultraGuidePreview} 
                    alt="How to Run an Ultra - Complete Guide Preview" 
                    className="w-48 md:w-56 h-auto mx-auto shadow-2xl rounded-2xl border-4 border-harrier-yellow transform rotate-2 hover:rotate-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-harrier-medium-green text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                    96 PAGES
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="YOUR FIRST NAME"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="premium-input text-center"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="premium-input text-center"
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
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-harrier-dark-green"></div>
                      SENDING...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Download className="w-6 h-6" />
                      GET FREE GUIDE NOW
                    </div>
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-8 h-8 text-harrier-medium-green" />
                  <span className="text-sm font-semibold text-harrier-dark-green">Instant Access</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-8 h-8 text-harrier-medium-green" />
                  <span className="text-sm font-semibold text-harrier-dark-green">No Spam</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-8 h-8 text-harrier-medium-green" />
                  <span className="text-sm font-semibold text-harrier-dark-green">15K+ Members</span>
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-harrier-dark-green/70 mt-6 font-comfortaa">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-harrier-dark-green/95 backdrop-blur-sm py-6 border-t-4 border-harrier-yellow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-white font-comfortaa font-semibold text-lg">
                "This guide turned my ultra dreams into reality. Finally finished my first 50K!"
              </p>
              <p className="text-harrier-yellow font-saira font-bold">- Sarah M., Peak District</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-harrier-yellow font-saira font-bold text-sm">WANT THE PHYSICAL BOOK?</p>
                <p className="text-white/80 font-comfortaa text-sm">Order on Amazon</p>
              </div>
              <Button variant="outline" className="border-harrier-yellow text-harrier-yellow hover:bg-harrier-yellow hover:text-harrier-dark-green">
                VIEW ON AMAZON
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}