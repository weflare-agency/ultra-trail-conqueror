import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TealFormSectionProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function TealFormSection({ onEmailSubmit }: TealFormSectionProps) {
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
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            FREE INSTANT ACCESS
          </h2>
          <p className="text-lg text-white mb-8">
            Drop your name and email below and we'll send you the guide immediately. 
            No spam, just pure ultra running knowledge.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-2xl">
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
                className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-white"
              >
                {isLoading ? "SENDING..." : "GET FREE GUIDE NOW"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4">
              No credit card required. Instant download. Trusted by 15,000+ runners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}