import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Users, Shield, Clock, CheckCircle, Star, Play, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/harrier-hero-runner.jpg";

interface HeroSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}



const socialProofMessages = [
  { name: "Sarah from Manchester", action: "just downloaded the guide", time: "2 min ago" },
  { name: "Mike from Edinburgh", action: "completed his first ultra", time: "5 min ago" },
  { name: "Emma from Bristol", action: "started the 12-week plan", time: "8 min ago" },
  { name: "James from Cardiff", action: "joined the community", time: "12 min ago" },
  { name: "Lisa from Newcastle", action: "downloaded bonus materials", time: "15 min ago" }
];

const compellingHeadlines = [
  { main: "Transform Your", sub: "Ultra Running Journey" },
  { main: "Master Every", sub: "Mile of Your Ultra" },
  { main: "Conquer Your", sub: "First Ultra Marathon" },
  { main: "Dominate The", sub: "Trail Like a Pro" }
];

export function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [downloadCount, setDownloadCount] = useState(15247);

  // Cycle between compelling headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex(prev => (prev + 1) % compellingHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  // Show social proof notifications
  useEffect(() => {
    const showProof = () => {
      setCurrentProofIndex(prev => (prev + 1) % socialProofMessages.length);
      setShowSocialProof(true);
      setTimeout(() => setShowSocialProof(false), 5000);
      // Increment download counter occasionally
      if (Math.random() > 0.7) {
        setDownloadCount(prev => prev + 1);
      }
    };

    const interval = setInterval(showProof, 12000);
    setTimeout(showProof, 4000); // First notification after 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep === 1) {
      if (!email.trim()) return;
      setFormStep(2);
      return;
    }
    
    if (!firstName.trim()) return;

    setIsLoading(true);
    await onEmailSubmit(email, firstName);
    setIsLoading(false);
  };

  
  const currentHeadline = compellingHeadlines[currentHeadlineIndex];

  return (
    <>
      {/* Live Social Proof Notifications */}
      {showSocialProof && (
        <div className="social-proof-notification">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-800">
                {socialProofMessages[currentProofIndex].name}
              </div>
              <div className="text-xs text-gray-600">
                {socialProofMessages[currentProofIndex].action} • {socialProofMessages[currentProofIndex].time}
              </div>
            </div>
          </div>
        </div>
      )}

      <section 
        className="hero-cycling-bg min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content container mx-auto px-4 py-12">
          {/* Urgency Banner */}
          <div className="text-center mb-6">
            <div className="urgency-banner inline-flex items-center gap-2 text-white text-sm font-bold px-4 py-2">
              <TrendingUp className="w-4 h-4" />
              LIMITED: Complete Ultra System + Bonus Materials FREE
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            {/* Dynamic Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="transition-all duration-700 ease-in-out block">
                {currentHeadline.main}
              </span>
              <span className="block mt-2 text-yellow-400 text-3xl md:text-5xl lg:text-6xl">
                {currentHeadline.sub}
              </span>
            </h1>

            {/* Problem-Solution Subheadline */}
            <p className="text-xl md:text-2xl text-white/95 mb-3 max-w-4xl mx-auto font-medium">
              Stop guessing, start succeeding. The complete system that's helped 15,000+ runners 
              cross the ultra finish line strong.
            </p>

            {/* Social Proof Counter */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{downloadCount.toLocaleString()}+ runners</span>
                <span>have downloaded this guide</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Left Column - Value Props */}
              <div className="text-left space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">No More Training Guesswork</h3>
                      <p className="text-white/80">Proven 12-week progressive plans for every fitness level</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Avoid Costly Mistakes</h3>
                      <p className="text-white/80">Learn from 100+ ultra finishers' hard-earned wisdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Finish Strong, Not Broken</h3>
                      <p className="text-white/80">Injury prevention strategies that actually work</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column - Conversion Form */}
              <div className="lg:max-w-md mx-auto w-full">
                <div className="conversion-form p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Get Your Complete Ultra System
                    </h3>
                    <p className="text-gray-600 font-medium">
                      96 pages + bonus materials • 100% FREE
                    </p>
                    
                    {/* Progress Steps */}
                    <div className="flex justify-center gap-2 mt-4 mb-6">
                      <div className={`progress-step ${formStep >= 1 ? 'active' : ''}`}>1</div>
                      <div className="w-8 h-0.5 bg-gray-300 self-center"></div>
                      <div className={`progress-step ${formStep >= 2 ? 'active' : ''}`}>2</div>
                      <div className="w-8 h-0.5 bg-gray-300 self-center"></div>
                      <div className={`progress-step ${formStep >= 3 ? 'completed' : ''}`}>✓</div>
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
                          className="conversion-input h-14 text-base"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Step 1 of 2 • We'll never spam you
                        </p>
                      </div>
                    )}

                    {formStep === 2 && (
                      <div>
                        <Input
                          type="text"
                          placeholder="What's your first name?"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="conversion-input h-14 text-base"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Just so we can personalize your guide
                        </p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="cta-button w-full h-14 text-lg font-bold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Preparing Your Guide...
                        </div>
                      ) : formStep === 1 ? (
                        "Continue to Step 2 →"
                      ) : (
                        "Send My Free Ultra System →"
                      )}
                    </Button>
                  </form>

                  {/* Enhanced Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-xs text-gray-600 font-medium">SSL Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-xs text-gray-600 font-medium">Instant Access</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Star className="w-5 h-5 text-green-600" />
                      <span className="text-xs text-gray-600 font-medium">5-Star Rated</span>
                    </div>
                  </div>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    By downloading, you agree to receive helpful ultra running tips. 
                    Unsubscribe anytime.
                  </p>
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
    </>
  );
}