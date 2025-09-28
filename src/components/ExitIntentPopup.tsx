import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExitIntentPopupProps {
  onEmailSubmit: (email: string, firstName: string, runnerLevel?: string) => void;
  hasSubmitted: boolean;
}

export function ExitIntentPopup({ onEmailSubmit, hasSubmitted }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [runnerLevel, setRunnerLevel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [pageLoadTime] = useState(Date.now());
  const [scrollDepth, setScrollDepth] = useState(0);

  // Track scroll depth for engagement
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollDepth(Math.max(scrollDepth, scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDepth]);

  useEffect(() => {
    if (hasSubmitted || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      const timeOnPage = Date.now() - pageLoadTime;
      const minTimeReached = timeOnPage >= 30000; // 30 seconds
      const minEngagement = scrollDepth >= 25; // 25% scroll depth
      const isExitIntent = e.clientY <= 0; // Mouse leaving to top (close/navigate)

      if (isExitIntent && minTimeReached && minEngagement) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasSubmitted, hasShown, pageLoadTime, scrollDepth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !runnerLevel) return;
    
    setIsLoading(true);
    await onEmailSubmit(email, firstName, runnerLevel);
    setIsLoading(false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const getPersonalizedMessage = () => {
    switch (runnerLevel) {
      case 'beginner':
        return 'Start your ultra journey safely with expert guidance';
      case 'regular':
        return 'Take your running to the next level with proven strategies';
      case 'ultra-veteran':
        return 'Discover advanced optimization strategies for peak performance';
      default:
        return 'Get your personalized ultra running guide';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-harrier-dark-gray hover:text-harrier-dark-green"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-harrier-dark-green mb-3">
            Wait! Don't Miss Out
          </h3>
          <p className="text-harrier-dark-gray">
            {runnerLevel ? getPersonalizedMessage() : 'Get your free ultra running guide before you go'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="runnerLevel" className="text-harrier-dark-green font-medium">
              Your Running Experience
            </Label>
            <Select value={runnerLevel} onValueChange={setRunnerLevel} required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner - New to running</SelectItem>
                <SelectItem value="regular">Regular - Completed marathons</SelectItem>
                <SelectItem value="ultra-veteran">Ultra Veteran - Completed ultras</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="popupFirstName" className="text-harrier-dark-green font-medium">
              First Name
            </Label>
            <Input
              id="popupFirstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="popupEmail" className="text-harrier-dark-green font-medium">
              Email Address
            </Label>
            <Input
              id="popupEmail"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            variant="cta"
            className="w-full font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Get My Free Guide"}
          </Button>
          
          <p className="text-xs text-harrier-dark-green/70 text-center mt-3 leading-relaxed">
            By clicking "Get My Free Guide", you consent to receiving our free guide and occasional ultra running tips via email. You can unsubscribe anytime. We respect your privacy - see our{" "}
            <a href="#" className="text-harrier-medium-green hover:underline">privacy policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}