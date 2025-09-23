import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Full of great advice and information for those, like myself, looking to take on the ultra. The mental strategies section was a game-changer.",
    author: "Arlene M.",
    rating: 5,
    location: "Peak District"
  },
  {
    text: "This guide completely transformed my approach to ultra running. The gear recommendations alone saved me hundreds of pounds.",
    author: "Sarah M.",
    rating: 5,
    location: "Yorkshire Dales"
  },
  {
    text: "As a beginner, I was overwhelmed by conflicting advice online. This guide cut through the noise and gave me a clear path forward.",
    author: "James R.",
    rating: 5,
    location: "Lake District"
  },
  {
    text: "Practical, no-nonsense advice from people who've actually done it. The training schedules are realistic and achievable.",
    author: "Emma L.",
    rating: 5,
    location: "Pennine Way"
  },
  {
    text: "I've read dozens of running books, but this is the first one that specifically addresses ultra running challenges. Brilliant resource.",
    author: "Michael T.",
    rating: 5,
    location: "Scottish Highlands"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-harrier-light-green/5 to-harrier-mint/10 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-saira font-black text-5xl md:text-6xl lg:text-7xl text-harrier-dark-green mb-8 tracking-wider leading-tight">
            WHAT ULTRA RUNNERS<br />ARE SAYING
          </h2>
          <p className="font-comfortaa font-semibold text-xl md:text-2xl lg:text-3xl text-harrier-dark-green/80 max-w-4xl mx-auto leading-relaxed">
            JOIN THOUSANDS OF SUCCESSFUL ULTRA FINISHERS<br />WHO USED THIS GUIDE
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-harrier-light-green/10 to-harrier-mint/10 rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-harrier-yellow/20">
            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 fill-harrier-yellow text-harrier-yellow"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="font-comfortaa font-medium text-2xl md:text-3xl lg:text-4xl text-harrier-dark-green text-center mb-10 leading-relaxed max-w-4xl mx-auto">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center mb-10">
              <cite className="font-saira font-bold text-2xl md:text-3xl text-harrier-medium-green not-italic">
                {currentTestimonial.author}
              </cite>
              <p className="font-comfortaa font-semibold text-lg md:text-xl text-harrier-dark-green/70 mt-2">
                {currentTestimonial.location}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-3 px-8 py-4 bg-harrier-medium-green text-white rounded-xl hover:bg-harrier-dark-green transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="font-saira font-bold text-lg tracking-wide">PREVIOUS</span>
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-harrier-medium-green shadow-lg scale-125'
                        : 'bg-harrier-light-green/40 hover:bg-harrier-light-green/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center gap-3 px-8 py-4 bg-harrier-medium-green text-white rounded-xl hover:bg-harrier-dark-green transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Next testimonial"
              >
                <span className="font-saira font-bold text-lg tracking-wide">NEXT</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}