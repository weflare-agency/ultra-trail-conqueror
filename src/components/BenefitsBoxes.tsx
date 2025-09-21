import { Trophy, Package, Brain } from "lucide-react";

export function BenefitsBoxes() {
  const benefits = [
    {
      icon: Trophy,
      title: "Choosing your ultra, goal setting and motivation"
    },
    {
      icon: Package,
      title: "Expert gear guidance to help you choose what to carry (and what not to)"
    },
    {
      icon: Brain,
      title: "Mental strategies for decision making and pushing through the tough miles"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout: 3 columns */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <benefit.icon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-accent stroke-[1.5]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}