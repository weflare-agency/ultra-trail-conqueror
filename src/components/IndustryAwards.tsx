import { Star } from "lucide-react";

const awards = [
  {
    title: "GEAR OF THE YEAR",
    year: "2025",
    organization: "The Guardian"
  },
  {
    title: "EDITOR'S CHOICE",
    year: "2025", 
    organization: "Runner's World"
  },
  {
    title: "GEAR AWARD",
    year: "2025",
    organization: "Outdoors Magic"
  },
  {
    title: "PRODUCT OF THE YEAR",
    year: "2025",
    organization: "Women's Running"
  },
  {
    title: "RECOMMENDED",
    year: "2025",
    organization: "National Running Show"
  }
];

export function IndustryAwards() {
  return (
    <section className="py-20 bg-harrier-medium-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="brand-title text-white mb-6">
            INDUSTRY RECOGNITION
          </h2>
          <p className="brand-body text-white/90 max-w-2xl mx-auto">
            TRUSTED BY THE UK'S LEADING OUTDOOR & RUNNING PUBLICATIONS
          </p>
        </div>
        
        {/* Awards Banner */}
        <div className="text-center mb-12 animate-slide-up">
          <img 
            src="/lovable-uploads/b0cc1e85-7f8f-48c3-bf27-a174414ad0cf.png"
            alt="Industry Awards 2025"
            className="max-w-full h-auto mx-auto mb-8"
          />
        </div>
        
        
        {/* Free Access Highlight */}
        <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
          <Star className="w-12 h-12 text-harrier-yellow mx-auto mb-4" />
          <h3 className="brand-subtitle text-harrier-dark-green mb-4">
            FREE INSTANT ACCESS
          </h3>
          <p className="brand-body text-harrier-dark-green/80 mb-6">
            DOWNLOAD YOUR COMPLETE ULTRA RUNNING GUIDE AND START YOUR JOURNEY TODAY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base">
            <div className="yellow-highlight">YOUR FIRST NAME</div>
            <span className="text-harrier-dark-green font-bold">+</span>
            <div className="yellow-highlight">YOUR EMAIL</div>
            <span className="text-harrier-dark-green font-bold">=</span>
            <div className="yellow-highlight">INSTANT GUIDE</div>
          </div>
        </div>
      </div>
    </section>
  );
}