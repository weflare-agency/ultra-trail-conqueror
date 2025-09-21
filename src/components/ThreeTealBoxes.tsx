import { Target, Backpack, Brain } from "lucide-react";

export function ThreeTealBoxes() {
  const features = [
    {
      icon: Target,
      title: "Choosing your ultra, goal setting and motivation"
    },
    {
      icon: Backpack,
      title: "Expert gear guidance to help you choose what to carry (and what not to)"
    },
    {
      icon: Brain,
      title: "Mental strategies for decision making and pushing through the tough miles"
    }
  ];

  return (
    <section className="py-20 bg-harrier-medium-green">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-harrier-orange rounded-2xl flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-saira font-bold text-lg md:text-xl text-white leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}