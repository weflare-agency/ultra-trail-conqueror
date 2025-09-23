import { Star, Shield, Users, Award } from "lucide-react";

export function TrustSignals() {
  return (
    <section className="py-12 bg-harrier-medium-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-white font-medium text-lg">
            Trusted by trail runners across the UK and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* 5-Star Rating */}
          <div className="trust-badge bg-harrier-dark-green border-harrier-light-green">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-harrier-yellow text-harrier-yellow" />
              ))}
            </div>
            <p className="text-sm font-medium text-white">5-Star Rated</p>
          </div>
          
          {/* Download Counter */}
          <div className="trust-badge bg-harrier-dark-green border-harrier-light-green">
            <Users className="w-8 h-8 text-harrier-yellow mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">15,000+</p>
            <p className="text-sm text-harrier-mint">Downloads</p>
          </div>
          
          {/* SSL Secure */}
          <div className="trust-badge bg-harrier-dark-green border-harrier-light-green">
            <Shield className="w-8 h-8 text-harrier-yellow mx-auto mb-2" />
            <p className="text-sm font-medium text-white">SSL Secure</p>
            <p className="text-xs text-harrier-mint">Protected</p>
          </div>
          
          {/* No Spam */}
          <div className="trust-badge bg-harrier-dark-green border-harrier-light-green">
            <Award className="w-8 h-8 text-harrier-yellow mx-auto mb-2" />
            <p className="text-sm font-medium text-white">No Spam</p>
            <p className="text-xs text-harrier-mint">Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}