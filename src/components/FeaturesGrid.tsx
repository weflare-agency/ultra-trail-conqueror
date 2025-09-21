import { Target, Brain, MapPin, Clock, Users } from "lucide-react";
import hydrationIcon1 from "@/assets/hydration-icon-1.svg";
import hydrationIcon2 from "@/assets/hydration-icon-2.svg";

const features = [
  {
    icon: Target,
    title: "PROVEN TRAINING PLANS",
    description: "16-week progressive training system designed specifically for ultra marathons, not adapted from marathon plans."
  },
  {
    icon: Brain,
    title: "MENTAL STRATEGIES",
    description: "Psychology techniques used by elite ultra runners to overcome the mental challenges of 6+ hour races."
  },
  {
    icon: MapPin,
    title: "RACE DAY TACTICS",
    description: "Navigation, pacing, and strategic planning that separates finishers from DNFs in ultra marathons."
  },
  {
    icon: Clock,
    title: "NUTRITION PROTOCOLS",
    description: "Fueling strategies for ultra distances including pre-race, during race, and recovery nutrition plans."
  },
  {
    iconSvg: hydrationIcon1,
    title: "HYDRATION SYSTEMS",
    description: "Complete hydration guide including electrolyte balance, fluid intake timing, and gear recommendations."
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-saira font-black text-4xl md:text-5xl lg:text-6xl text-harrier-dark-green mb-6">
            WHAT'S INSIDE THE GUIDE
          </h2>
          <p className="font-comfortaa font-semibold text-xl md:text-2xl text-harrier-dark-green/80 max-w-3xl mx-auto">
            Everything you need to go from beginner to ultra finisher in 16 weeks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-harrier-medium-green rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="mb-6">
                {feature.iconSvg ? (
                  <img src={feature.iconSvg} alt="" className="w-12 h-12 mx-auto filter brightness-0 invert" />
                ) : (
                  <feature.icon className="w-12 h-12 text-white mx-auto" />
                )}
              </div>
              <h3 className="font-saira font-black text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-comfortaa font-medium text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-harrier-mint rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-saira font-black text-3xl md:text-4xl text-harrier-dark-green mb-6">
              READY TO START YOUR ULTRA JOURNEY?
            </h3>
            <p className="font-comfortaa font-semibold text-xl text-harrier-dark-green/80 mb-8">
              Get instant access to all 96 pages of expert ultra running knowledge
            </p>
            <a href="#hero-form" className="cta-button">
              GET YOUR FREE GUIDE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}