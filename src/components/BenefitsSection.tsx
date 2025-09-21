import { CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Complete training schedules for your first ultra",
    "Nutrition strategies that prevent bonking",
    "Essential gear checklist (what to carry vs. what to leave)",
    "Mental tactics for pushing through tough miles",
    "Race day preparation and strategy",
    "Recovery protocols for post-race healing"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What's Inside Your Free Guide
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            96 pages of proven strategies used by thousands of successful ultra runners
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}