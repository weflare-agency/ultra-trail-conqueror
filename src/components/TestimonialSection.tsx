import { Star } from "lucide-react";
import danSummers from "@/assets/dan-summers.jpg";
import ronnieStaton from "@/assets/ronnie-staton.jpg";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      image: danSummers,
      text: "I went from barely finishing a half marathon to completing my first 50K using this guide. The training plan was perfect and the nutrition advice was game-changing.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      image: ronnieStaton,
      text: "This guide is gold. The mental strategies section alone got me through the hardest parts of my 100K. I've recommended it to all my running friends.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Join 15,000+ Runners Who've Transformed Their Ultra Game
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">Ultra Runner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}