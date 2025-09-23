import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ExitIntentPopupProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function ExitIntentPopup({ onEmailSubmit }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    await onEmailSubmit(email, firstName);
    setIsLoading(false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

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
            Get your free ultra running guide before you go
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
        </form>
        
        <p className="text-xs text-harrier-dark-gray text-center mt-4">
          No spam, unsubscribe anytime
        </p>
      </div>
    </div>
  );
}