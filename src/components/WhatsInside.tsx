import { MapPin, Calendar, Backpack, Apple, Brain, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Choosing Your First Ultra",
    description: "Expert guidance on selecting the perfect ultra marathon for your experience level and goals."
  },
  {
    icon: Calendar,
    title: "Training Plans & Schedules",
    description: "Comprehensive training programs designed by experienced ultra runners and coaches."
  },
  {
    icon: Backpack,
    title: "Essential Gear Checklists",
    description: "Complete equipment lists for different ultra distances and terrain types."
  },
  {
    icon: Apple,
    title: "Nutrition & Fueling Strategies",
    description: "Proven nutrition protocols to keep you energized throughout your ultra journey."
  },
  {
    icon: Brain,
    title: "Mental Strategies",
    description: "Psychological techniques to overcome the toughest miles and push through barriers."
  },
  {
    icon: Users,
    title: "Pro Insights & Tips",
    description: "Exclusive advice from experienced ultra runners who've completed 100+ mile events."
  }
];

export function WhatsInside() {
  return (
    <section className="py-20 bg-harrier-medium-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="brand-title text-white mb-6">
            WHAT'S INSIDE YOUR FREE GUIDE
          </h2>
          <p className="brand-body text-white/95 max-w-2xl mx-auto">
            96 PAGES OF COMPREHENSIVE ULTRA RUNNING KNOWLEDGE, FROM BEGINNER BASICS TO ADVANCED STRATEGIES
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-harrier-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <feature.icon className="w-8 h-8 text-harrier-dark-green" />
              </div>
              
              <h3 className="brand-subtitle text-harrier-dark-green mb-4 text-center text-lg">
                {feature.title.toUpperCase()}
              </h3>
              
              <p className="brand-body text-harrier-dark-green/80 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="yellow-highlight inline-block text-lg md:text-xl mb-4">
            DOWNLOAD YOUR FREE GUIDE NOW
          </div>
          <p className="brand-body text-white/90 max-w-lg mx-auto">
            JOIN 15,000+ SUCCESSFUL ULTRA FINISHERS TODAY
          </p>
        </div>
      </div>
    </section>
  );
}