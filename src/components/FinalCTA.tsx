import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FinalCTAProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function FinalCTA({ onEmailSubmit }: FinalCTAProps) {
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
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Conquer Your First Ultra?
          </h2>
          <p className="text-xl mb-8">
            Get your free 96-page guide and join thousands of successful ultra runners
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Download Your Free Guide
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 text-lg border-2"
                required
              />
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg border-2"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                {isLoading ? "SENDING..." : "GET MY FREE GUIDE"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4">
              100% Free. No Credit Card Required. Instant Download.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}