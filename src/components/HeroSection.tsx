import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Shield, Users, Star, CheckCircle, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-trail-runners.jpg";
import harrierLogo from "@/assets/harrier-logo-white.png";
import runnerPremium1 from "@/assets/runner-premium-1.jpg";
import runnerPremium2 from "@/assets/runner-premium-2.jpg";
import guidePreview from "@/assets/ultra-guide-preview.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export const HeroSection = ({ onEmailSubmit }: HeroSectionProps) => {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Professional Ultra-Light Overlay for Perfect Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/60 z-10"></div>
      
      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Brand Header */}
        <div className="text-center mb-12">
          <img 
            src={harrierLogo} 
            alt="Harrier Trail Running" 
            className="h-20 md:h-24 mx-auto opacity-95 mb-8"
          />
        </div>

        {/* Two-Column Layout for Desktop */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Problem/Solution Messaging */}
          <div className="text-center lg:text-left">
            {/* Problem-Focused Ultra-Impact Headline */}
            <h1 className="hero-headline mb-8">
              DON'T LET YOUR<br />
              FIRST ULTRA<br />
              END IN<br />
              <span className="text-yellow-400">FAILURE</span>
            </h1>

            {/* Problem Statement - Maximum Emotional Impact */}
            <p className="hero-problem mb-8">
              73% of first-time ultra runners don't finish.<br />
              Here's how to be in the 27% who do.
            </p>

            {/* Solution Statement */}
            <p className="hero-solution max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-12">
              Get the complete 96-page ultra marathon guide that's helped over 15,000 runners 
              successfully complete their first ultra. From training plans to race day strategy - 
              everything you need to cross that finish line.
            </p>

            {/* Social Proof Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15,000+</div>
                <div className="text-white text-sm font-semibold">Successful Finishers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">96</div>
                <div className="text-white text-sm font-semibold">Pages of Expertise</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-white text-sm font-semibold">5-Star Rated</div>
              </div>
            </div>

            {/* Runner Success Photos */}
            <div className="hidden lg:flex gap-4 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-yellow-400">
                <img src={runnerPremium1} alt="Successful ultra runner" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-yellow-400">
                <img src={runnerPremium2} alt="Successful ultra runner" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center">
                <span className="text-white font-medium">+15,000 more success stories</span>
              </div>
            </div>
          </div>

          {/* Right Column - Conversion-Optimized Form */}
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="premium-form">
              
              {/* Form Header with Maximum Impact */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6 border border-green-200">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wide">Free Instant Download</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">
                  GET YOUR FREE<br />
                  ULTRA RUNNING GUIDE
                </h2>
                
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-3 text-slate-600 font-semibold">
                    5/5 from 2,500+ reviews
                  </span>
                </div>

                {/* Guide Preview */}
                <div className="mb-8">
                  <div className="relative inline-block">
                    <img 
                      src={guidePreview} 
                      alt="Ultra Running Guide Preview" 
                      className="w-32 h-40 object-cover rounded-lg shadow-2xl border-2 border-yellow-400"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FREE
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Fields - Maximum UX */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="premium-input"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="premium-input"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading || !email || !firstName}
                  className="cta-button w-full group"
                >
                  {isLoading ? (
                    "SENDING YOUR GUIDE..."
                  ) : (
                    <>
                      GET MY FREE GUIDE NOW
                      <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust Indicators Grid */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="trust-indicator flex-col">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-slate-700 font-semibold text-sm">Instant Access</span>
                  </div>
                  <div className="trust-indicator flex-col">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-slate-700 font-semibold text-sm">100% Secure</span>
                  </div>
                  <div className="trust-indicator flex-col">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-slate-700 font-semibold text-sm">15,000+ Users</span>
                  </div>
                </div>
                
                <p className="text-xs text-slate-500 text-center mt-6">
                  ✓ No spam, ever ✓ Unsubscribe anytime ✓ Your privacy is protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Banner */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-white/15 backdrop-blur-sm rounded-2xl px-10 py-6 border border-white/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold text-lg">
              "This guide changed everything. Finished my first 100K!" - Marcus T.
            </span>
            <div className="hidden md:flex items-center gap-2 text-white/80">
              <Play className="w-4 h-4" />
              <span className="text-sm">Watch Success Stories</span>
            </div>
          </div>
        </div>

        {/* Physical Copy Option */}
        <div className="mt-12 text-center">
          <p className="text-white/90 font-medium mb-4 text-lg">
            Want a physical copy for your bookshelf?
          </p>
          <Button 
            variant="outline" 
            className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold"
          >
            Order Printed Book (£19.99)
          </Button>
        </div>
      </div>
    </section>
  );
};