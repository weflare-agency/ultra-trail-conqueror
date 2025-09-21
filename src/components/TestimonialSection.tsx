import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arlene M",
    text: "Full of great advice and information for those, like myself, looking to take on the ultra.",
    rating: 5
  },
  {
    name: "Emma P", 
    text: "Great book. Full of practical advice and prompts for further thinking. Really enjoyed reading the book, and I know I'll use it again and again.",
    rating: 5
  },
  {
    name: "Sandra E",
    text: "I wish I'd had this book for my first ultra. It is packed with good advice, from choosing a race, how to train, what ifs, training plans, resources, tips and so much more. It will support and inspire you for your next ultra.",
    rating: 5
  },
  {
    name: "Stephanie V",
    text: "Received the book and love it as it has the traditional reading, but they have included some QR codes for the podcasts/videos to watch: great idea. Some great tips, especially if you are new to trail running.",
    rating: 5
  }
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              TRUSTED BY TRAIL RUNNERS ACROSS THE UK AND BEYOND
            </h2>
            
            {/* Green accent divider */}
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-4 italic text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}