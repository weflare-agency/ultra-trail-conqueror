import { Check, Download, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import ultraGuideImage from "@/assets/ultra-guide-preview.jpg";

interface OfferComparisonProps {
  onEmailSubmit: (email: string, firstName: string) => void;
}

export function OfferComparison({ onEmailSubmit }: OfferComparisonProps) {
  return (
    <section className="py-20 bg-harrier-light-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Format
          </h2>
          <p className="text-xl text-white/90">
            Get instant access or order a physical copy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Digital Guide - Highlighted */}
          <div className="feature-card bg-harrier-dark-green border-harrier-medium-green relative overflow-hidden animate-slide-up">
            <div className="absolute top-0 right-0 bg-harrier-yellow text-harrier-dark-green px-4 py-2 text-sm font-bold rounded-bl-lg">
              RECOMMENDED
            </div>
            
            <div className="text-center mb-6">
              <Download className="w-16 h-16 text-harrier-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                FREE Digital Guide
              </h3>
              <div className="text-4xl font-bold text-harrier-yellow mb-4">
                £0.00
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-yellow mr-3 flex-shrink-0" />
                <span className="text-harrier-mint">Instant access via email</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-yellow mr-3 flex-shrink-0" />
                <span className="text-harrier-mint">96 pages of expert content</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-yellow mr-3 flex-shrink-0" />
                <span className="text-harrier-mint">Mobile & tablet friendly</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-yellow mr-3 flex-shrink-0" />
                <span className="text-harrier-mint">Searchable PDF format</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-yellow mr-3 flex-shrink-0" />
                <span className="text-harrier-mint">Bonus training calendar</span>
              </div>
            </div>
            
            <button 
              onClick={() => {
                document.getElementById('hero-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              className="w-full text-center py-4 rounded-xl font-bold text-lg cta-button"
            >
              Get Free Digital Copy
            </button>
          </div>
          
          {/* Physical Book */}
          <div className="feature-card bg-harrier-medium-green border-harrier-light-green animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <Package className="w-16 h-16 text-harrier-mint mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Physical Book
              </h3>
              <div className="text-4xl font-bold text-harrier-yellow mb-4">
                £9.99
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-mint mr-3 flex-shrink-0" />
                <span className="text-white">High-quality print edition</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-mint mr-3 flex-shrink-0" />
                <span className="text-white">Perfect for training notes</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-mint mr-3 flex-shrink-0" />
                <span className="text-white">UK delivery 2-3 days</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-mint mr-3 flex-shrink-0" />
                <span className="text-white">Collectible edition</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-harrier-mint mr-3 flex-shrink-0" />
                <span className="text-white">Includes digital copy</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full py-4 h-auto text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-harrier-medium-green"
            >
              Order Physical Book
            </Button>
          </div>
        </div>
        
        {/* Book Preview */}
        <div className="text-center mt-16">
          <img
            src={ultraGuideImage}
            alt="How to Run an Ultra Guide Preview"
            className="max-w-md mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}