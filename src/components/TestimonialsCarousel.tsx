import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Full of great advice for those looking to take on the ultra",
    author: "Arlene M",
    rating: 5,
    location: "Yorkshire"
  },
  {
    text: "Packed with good advice. I wish I'd had this for my first ultra",
    author: "Sandra E",
    rating: 5,
    location: "Lake District"
  },
  {
    text: "Great tips, especially if you're new to trail running",
    author: "Stephanie V",
    rating: 5,
    location: "Peak District"
  },
  {
    text: "This guide gave me the confidence to sign up for my first 50k",
    author: "Michael R",
    rating: 5,
    location: "Scotland"
  },
  {
    text: "Brilliant resource - covers everything you need to know",
    author: "Emma L",
    rating: 5,
    location: "Wales"
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

  return (
    <section className="py-20 bg-harrier-light-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="brand-title text-white mb-6">
            WHAT OUR RUNNERS SAY
          </h2>
          <p className="brand-body text-white/95 max-w-2xl mx-auto">
            REAL FEEDBACK FROM RUNNERS WHO'VE USED OUR GUIDE
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl p-8 shadow-xl text-center animate-scale-in">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-harrier-yellow text-harrier-yellow mr-1" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="brand-body text-harrier-dark-green text-xl md:text-2xl mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            {/* Author */}
            <div className="text-harrier-dark-green">
              <p className="brand-subtitle text-lg mb-1">
                {testimonials[currentIndex].author.toUpperCase()}
              </p>
              <p className="brand-body text-harrier-medium-green">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-harrier-light-green text-harrier-yellow hover:bg-harrier-light-green hover:text-white bg-harrier-dark-green"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-harrier-yellow scale-125' 
                      : 'bg-harrier-light-green hover:bg-harrier-yellow'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-harrier-light-green text-harrier-yellow hover:bg-harrier-light-green hover:text-white bg-harrier-dark-green"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}