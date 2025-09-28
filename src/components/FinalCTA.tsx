import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Clock, Shield } from "lucide-react";

interface FinalCTAProps {
  onEmailSubmit: (email: string, firstName: string, runnerLevel?: string) => void;
}

export function FinalCTA({ onEmailSubmit }: FinalCTAProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [runnerLevel, setRunnerLevel] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !runnerLevel) return;
    
    setIsLoading(true);
    await onEmailSubmit(email, firstName, runnerLevel);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-harrier-medium-green pattern-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Message */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 mr-2" />
              <span className="brand-body">
                TRUSTED BY ULTRA RUNNERS WORLDWIDE
              </span>
            </div>
            
            <h2 className="brand-title mb-6">
              READY TO START YOUR<br />
              <span className="text-harrier-yellow">ULTRA JOURNEY?</span>
            </h2>
            
            <p className="brand-body text-white/95 mb-8">
              GET YOUR FREE GUIDE AND TAKE THE FIRST STEP TOWARDS COMPLETING YOUR FIRST ULTRA MARATHON
            </p>
          </div>
          
          {/* Form */}
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <Label htmlFor="finalFirstName" className="text-harrier-dark-green font-medium">
                  First Name
                </Label>
                <Input
                  id="finalFirstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 text-base h-12 border-harrier-light-green focus:ring-harrier-medium-green"
                  required
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="finalEmail" className="text-harrier-dark-green font-medium">
                  Email Address
                </Label>
                <Input
                  id="finalEmail"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 text-base h-12 border-harrier-light-green focus:ring-harrier-medium-green"
                  required
                />
              </div>
              
              <div className="text-left">
                <Label className="text-harrier-dark-green font-medium">
                  Running Experience Level
                </Label>
                <Select value={runnerLevel} onValueChange={setRunnerLevel} required>
                  <SelectTrigger className="mt-1 h-12 border-harrier-light-green focus:ring-harrier-medium-green">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 marathons)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 marathons)</SelectItem>
                    <SelectItem value="advanced">Advanced (5+ marathons)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg cta-button brand-body h-14"
                disabled={isLoading}
              >
                {isLoading ? "sending..." : "send my free guide now"}
              </Button>
            </form>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 text-harrier-yellow" />
              <span className="text-white/90">Instant Access</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2 text-harrier-yellow" />
              <span className="text-white/90">100% Secure</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 mr-2 text-harrier-yellow" />
              <span className="text-white/90">No Spam Promise</span>
            </div>
          </div>
          
          {/* Privacy Note */}
          <p className="text-sm text-white/70 mt-8 max-w-2xl mx-auto">
            We respect your privacy. Your email will only be used to send you the guide and occasional ultra running tips. 
            You can unsubscribe at any time. See our{" "}
            <a href="https://harrierrunfree.co.uk/pages/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-harrier-yellow hover:underline">privacy policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}