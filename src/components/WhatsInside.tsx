import { MapPin, Calendar, Backpack, Target, Brain, Star } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Choosing Your Ultra",
    description: "Goal setting and motivation - find the perfect ultra for your experience level."
  },
  {
    icon: Calendar,
    title: "Essential Checklists",
    description: "Kit, fuelling, and race day prep - everything you need to succeed."
  },
  {
    icon: Backpack,
    title: "Expert Gear Guidance", 
    description: "What to carry (and what not to) - pro tips for ultra running equipment."
  },
  {
    icon: Target,
    title: "Mental Strategies",
    description: "Decision making and pushing through the tough miles - psychological techniques that work."
  },
  {
    icon: Brain,
    title: "Proven Training Methods",
    description: "Build endurance and prevent injury with tried-and-tested training approaches."
  },
  {
    icon: Star,
    title: "Pro Insights",
    description: "From ultra runners who've been there, done it, and gone back for more."
  }
];

export function WhatsInside() {
  return (
    <section className="py-24 bg-harrier-medium-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-saira font-black text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wider leading-tight">
            WHAT'S INSIDE YOUR<br />FREE GUIDE
          </h2>
          <p className="font-comfortaa font-semibold text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            96 PAGES OF COMPREHENSIVE ULTRA RUNNING KNOWLEDGE<br />
            FROM BEGINNER BASICS TO ADVANCED STRATEGIES
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-slide-up border-2 border-harrier-yellow/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-harrier-yellow w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto shadow-xl">
                <feature.icon className="w-10 h-10 text-harrier-dark-green" />
              </div>
              
              <h3 className="font-saira font-black text-xl md:text-2xl text-harrier-dark-green mb-6 text-center tracking-wide leading-tight">
                {feature.title.toUpperCase()}
              </h3>
              
              <p className="font-comfortaa font-medium text-lg md:text-xl text-harrier-dark-green/85 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20">
          <button 
            onClick={() => {
              const heroForm = document.getElementById('hero-form');
              if (heroForm) {
                heroForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-block bg-harrier-yellow px-8 py-4 rounded-xl shadow-lg mb-6 hover:bg-harrier-yellow/90 transition-colors cursor-pointer"
          >
            <span className="font-saira font-black text-2xl md:text-3xl text-harrier-dark-green tracking-wide">
              DOWNLOAD YOUR FREE GUIDE NOW
            </span>
          </button>
          <p className="font-comfortaa font-semibold text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
            JOIN 15,000+ SUCCESSFUL ULTRA FINISHERS TODAY
          </p>
        </div>
      </div>
    </section>
  );
}