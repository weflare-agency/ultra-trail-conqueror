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
    <section className="py-20 bg-harrier-light-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What's Inside Your Free Guide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            96 pages of comprehensive ultra running knowledge, from beginner basics to advanced strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-harrier-dark-green border-harrier-medium-green animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-harrier-yellow/20 rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-harrier-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-harrier-mint leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/90 mb-6">
            Ready to start your ultra running journey?
          </p>
          <a 
            href="#hero-form" 
            className="inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 cta-button"
          >
            Download Your Free Guide Now
          </a>
        </div>
      </div>
    </section>
  );
}