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
    <section className="py-20 bg-primary">
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
              FREE INSTANT ACCESS
            </h2>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
              Drop your name and email below and we'll send the guide straight to your inbox.
            </p>
            
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 text-lg py-6 focus:border-primary"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 text-lg py-6 focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white text-xl font-bold py-6 rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "GET MY FREE GUIDE →"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Physical Copy Section */}
          <div className="text-center bg-primary/80 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              PREFER A PHYSICAL COPY?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Grab the printed book for just £9.99.
            </p>
            <Button 
              asChild 
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg"
            >
              <a 
                href="https://harrierrunfree.co.uk/collections/ultra-collection/products/how-to-run-an-ultra-book"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grab the printed version
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}