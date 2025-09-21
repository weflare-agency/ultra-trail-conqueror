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
            
            {/* Main Headline - Exact Reference Match */}
            <div className="space-y-6">
              <p className="font-saira font-bold text-xl md:text-2xl text-white/90 mb-4">
                DOWNLOAD YOUR FREE 96 PAGE
              </p>
              <h1 className="font-saira font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
                HOW TO RUN AN
                <span className="block text-harrier-orange">ULTRA GUIDE</span>
              </h1>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}