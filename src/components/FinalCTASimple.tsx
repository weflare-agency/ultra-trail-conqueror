import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FinalCTASimpleProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function FinalCTASimple({ onEmailSubmit }: FinalCTASimpleProps) {
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
    <section className="py-16 bg-harrier-medium-green">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-saira font-bold text-3xl md:text-4xl text-white mb-4">
            GET YOUR FREE GUIDE
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of runners who've transformed their ultra game
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-bold bg-harrier-orange hover:bg-harrier-orange/90"
              >
                {isLoading ? "SENDING..." : "DOWNLOAD NOW"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}