import { Target, CheckSquare, Package, Brain, Users } from "lucide-react";

export function BenefitsBoxes() {
  const benefits = [
    {
      icon: Target,
      title: "Choosing your ultra, goal setting and motivation"
    },
    {
      icon: CheckSquare,
      title: "Essential checklists for kit, fuelling, and race day prep"
    },
    {
      icon: Package,
      title: "Expert gear guidance to help you choose what to carry (and what not to)"
    },
    {
      icon: Brain,
      title: "Mental strategies for decision making and pushing through the tough miles"
    },
    {
      icon: Users,
      title: "Pro insights from ultra runners who've been there, done it, and gone back for more"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              WHAT'S INSIDE
            </h2>
            
            {/* Green accent divider */}
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          {/* Desktop Layout: 3 boxes top, 2 boxes bottom */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6 mb-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="bg-primary text-white p-8 rounded-lg text-center">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.slice(3, 5).map((benefit, index) => (
                <div key={index + 3} className="bg-primary text-white p-8 rounded-lg text-center">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Single column */}
          <div className="md:hidden space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary text-white p-6 rounded-lg text-center">
                <benefit.icon className="w-10 h-10 mx-auto mb-3" />
                <h3 className="text-base font-semibold">
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