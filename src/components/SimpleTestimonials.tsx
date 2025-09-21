import danSummers from "@/assets/dan-summers.jpg";
import ronnieStaton from "@/assets/ronnie-staton.jpg";

export function SimpleTestimonials() {
  const testimonials = [
    {
      name: "Dan Summers",
      image: danSummers,
      text: "This guide gave me the confidence to tackle my first 50k. The training plan was perfect and the nutrition advice saved my race."
    },
    {
      name: "Ronnie Staton",
      image: ronnieStaton,
      text: "After reading this guide, I went from struggling with 10k runs to completing a 100-mile ultra. Game changer."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-saira font-bold text-3xl md:text-4xl text-harrier-dark-green text-center mb-12">
            WHAT RUNNERS SAY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-semibold text-harrier-dark-green">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}