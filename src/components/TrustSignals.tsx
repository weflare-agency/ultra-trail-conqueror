import { Star, Shield, Users, Award } from "lucide-react";

export function TrustSignals() {
  return (
    <section className="py-16 bg-harrier-medium-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-saira font-black text-3xl md:text-4xl text-white mb-4">
            TRUSTED BY TRAIL RUNNERS WORLDWIDE
          </h2>
          <p className="font-comfortaa font-semibold text-xl text-white/90">
            Join thousands who've transformed their ultra running with our proven system
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* 5-Star Rating */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-harrier-orange text-harrier-orange" />
              ))}
            </div>
            <p className="font-saira font-bold text-lg text-white">5-STAR RATED</p>
            <p className="font-comfortaa text-sm text-white/80">1,500+ Reviews</p>
          </div>
          
          {/* Download Counter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <Users className="w-10 h-10 text-harrier-orange mx-auto mb-3" />
            <p className="font-saira font-black text-2xl text-white">15,000+</p>
            <p className="font-comfortaa text-sm text-white/80">Happy Runners</p>
          </div>
          
          {/* Success Rate */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <Award className="w-10 h-10 text-harrier-orange mx-auto mb-3" />
            <p className="font-saira font-black text-2xl text-white">94%</p>
            <p className="font-comfortaa text-sm text-white/80">Finish Rate</p>
          </div>
          
          {/* Secure */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <Shield className="w-10 h-10 text-harrier-orange mx-auto mb-3" />
            <p className="font-saira font-bold text-lg text-white">100% SECURE</p>
            <p className="font-comfortaa text-sm text-white/80">No Spam Ever</p>
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-16 text-center">
          <p className="font-saira font-bold text-white/80 text-lg mb-8">AS FEATURED IN</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-70">
            <span className="font-saira font-bold text-white text-lg">RUNNER'S WORLD</span>
            <span className="font-saira font-bold text-white text-lg">TRAIL RUNNING</span>
            <span className="font-saira font-bold text-white text-lg">OUTDOORS MAGIC</span>
          </div>
        </div>
      </div>
    </section>
  );
}