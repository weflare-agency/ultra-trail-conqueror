import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowUp } from "lucide-react";

interface StickyMobileCTAProps {
  onEmailSubmit: (email: string, firstName: string) => void;
  hasSubmitted: boolean;
}

export const StickyMobileCTA = ({ onEmailSubmit, hasSubmitted }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 1000px)
      const shouldShow = window.scrollY > 1000 && !hasSubmitted;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !firstName.trim()) return;

    setIsLoading(true);
    await onEmailSubmit(email, firstName);
    setIsLoading(false);
    setShowForm(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div className="sticky-mobile-cta md:hidden">
        {!showForm ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-harrier-dark-green">
                FREE Ultra Running Guide
              </p>
              <p className="text-xs text-harrier-dark-green/70">
                Join 15,000+ successful finishers
              </p>
            </div>
            <Button 
              onClick={() => setShowForm(true)}
              className="cta-button px-6 py-2 text-sm font-bold"
            >
              Get Guide
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-harrier-dark-green">Get Your Free Guide</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowForm(false)}
                className="p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-harrier-light-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-harrier-medium-green"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-harrier-light-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-harrier-medium-green"
                required
              />
              <Button 
                type="submit" 
                className="cta-button w-full py-2 text-sm font-bold"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send My Guide"}
              </Button>
            </form>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 z-50 w-12 h-12 rounded-full bg-harrier-medium-green hover:bg-harrier-dark-green text-harrier-white shadow-lg md:hidden"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </>
  );
};