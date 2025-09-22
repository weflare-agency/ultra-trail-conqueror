import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Shield, Clock, CheckCircle, Star } from "lucide-react";
import heroBackground from "@/assets/harrier-hero-runner.jpg";
import harrierLogoWhite from "@/assets/harrier-logo-white.png";
import topographicPattern from "@/assets/topographic-pattern.png";

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
      {/* Topographic Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-5"
        style={{
          backgroundImage: `url(${topographicPattern})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
      
      {/* Dramatic Accent Gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-500/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-600/30 to-transparent z-10"></div>
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
              {/* Main Headlines - DRAMATIC & SHOUTING */}
              <div className="mb-10 relative">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-black mb-4 animate-pulse shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  ⚡ HURRY! LIMITED TIME
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 tracking-widest uppercase drop-shadow-lg">
                  DOWNLOAD YOUR <span className="text-orange-400 animate-pulse">FREE</span> 96 PAGE
                </h2>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter mb-6 relative">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-pulse">
                    HOW TO RUN
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent text-shadow-xl">
                    AN ULTRA
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl text-shadow-lg">
                    GUIDE
                  </span>
                  
                  {/* Dynamic Accent Lines */}
                  <div className="absolute -left-4 top-1/2 w-2 h-16 bg-gradient-to-b from-orange-400 to-red-500 transform -translate-y-1/2 animate-pulse"></div>
                  <div className="absolute -right-4 top-1/3 w-1 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 animate-pulse"></div>
                </h1>
                
                {/* Power Statement */}
                <div className="bg-gradient-to-r from-orange-500/90 to-red-600/90 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-orange-400/30 mb-4">
                  <p className="text-lg font-bold uppercase tracking-wide">
                    💪 Transform from beginner to ultra finisher in 12 weeks!
                  </p>
                </div>
              </div>

              {/* What's Inside Section - ENHANCED */}
              <div className="mb-8 relative">
                {/* Section Header with Impact */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-widest uppercase drop-shadow-lg">
                    WHAT'S INSIDE
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                </div>
                
                {/* Enhanced Benefit List */}
                <div className="space-y-4 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20">
                  {whatsInsideItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group hover:bg-orange-500/10 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white drop-shadow-sm" />
                      </div>
                      <p className="text-white text-lg font-semibold leading-relaxed drop-shadow-sm group-hover:text-orange-100 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Value Highlight */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-black text-lg shadow-xl">
                    💰 VALUE: $497 - YOURS FREE!
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - ENHANCED Conversion Form */}
            <div className="lg:max-w-md mx-auto w-full relative">
              {/* Attention-Grabbing Border Animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-2xl blur opacity-75 animate-pulse"></div>
              
              <div className="conversion-form relative p-8 shadow-2xl bg-white/98 backdrop-blur-xl border-2 border-orange-400/30 rounded-xl">
                {/* Urgent Header Section */}
                <div className="text-center mb-8">
                  {/* SHOUTING Urgency Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-black mb-4 animate-bounce shadow-xl">
                    <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
                    🔥 URGENT: EXPIRES SOON!
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-3 uppercase tracking-wide">
                    GET YOUR FREE GUIDE
                  </h3>
                  
                  {/* Enhanced Value Props */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 text-sm font-bold flex items-center justify-center gap-2">
                      ⚡ Instant download • 💯 100% FREE • 🔐 No spam, ever
                    </p>
                  </div>
                  
                  {/* Countdown Timer Visual */}
                  <div className="flex justify-center items-center gap-2 text-red-600 font-bold text-sm">
                    <span className="animate-pulse">⏰</span>
                    <span>Limited spots remaining this week!</span>
                  </div>
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
                    className="cta-button w-full h-16 text-xl font-black shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wider"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Preparing Your Guide...
                      </div>
                    ) : formStep === 1 ? (
                      <span className="flex items-center justify-center gap-2">
                        🚀 CONTINUE TO DOWNLOAD →
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        ⚡ DOWNLOAD FREE GUIDE NOW! →
                      </span>
                    )}
                  </Button>
                </form>

                {/* ENHANCED Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-xs text-gray-800 font-bold">100% SECURE</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-xs text-gray-800 font-bold">INSTANT ACCESS</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Star className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-xs text-gray-800 font-bold">5-STAR RATED</span>
                  </div>
                </div>
                
                {/* Social Proof with Impact */}
                <div className="text-center mt-6">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-gray-800 font-bold flex items-center justify-center gap-2">
                      🔥 <span className="text-orange-600">12,847+</span> runners downloaded this guide this month!
                    </p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-xs text-gray-600 font-medium">(4.9/5 rating)</span>
                    </div>
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