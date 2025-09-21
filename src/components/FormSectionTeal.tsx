import { useState } from "react";
import { Download } from "lucide-react";
import ultraGuidePreview from "@/assets/ultra-guide-preview.jpg";

interface FormSectionTealProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function FormSectionTeal({ onEmailSubmit }: FormSectionTealProps) {
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
    <section className="py-20 bg-harrier-medium-green">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-saira font-black text-3xl md:text-4xl text-harrier-orange mb-4">
            FREE INSTANT ACCESS
          </h2>
          <p className="font-comfortaa font-semibold text-lg md:text-xl text-white mb-8">
            Drop your name and email below to get your free copy now...
          </p>

          {/* Book Cover */}
          <div className="mb-8">
            <img 
              src={ultraGuidePreview} 
              alt="How to Run an Ultra Guide" 
              className="w-48 h-auto mx-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-6 py-4 text-lg font-semibold border-2 border-harrier-mint rounded-xl focus:border-harrier-medium-green focus:outline-none focus:ring-0 transition-all duration-300 font-comfortaa"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 text-lg font-semibold border-2 border-harrier-mint rounded-xl focus:border-harrier-medium-green focus:outline-none focus:ring-0 transition-all duration-300 font-comfortaa"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="cta-button w-full"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    SENDING TO YOU...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    DOWNLOAD FREE GUIDE
                  </div>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-harrier-dark-green/60 mt-6 font-comfortaa">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}