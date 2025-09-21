import { Star } from "lucide-react";

const awards = [
  {
    image: "/src/assets/award-guardian.png",
    title: "GEAR OF THE YEAR",
    year: "2024",
    organization: "The Guardian"
  },
  {
    image: "/src/assets/award-runners-world.png",
    title: "EDITOR'S CHOICE",
    year: "2024", 
    organization: "Runner's World"
  },
  {
    image: "/src/assets/award-outdoors-magic.png",
    title: "GEAR AWARD",
    year: "2024",
    organization: "Outdoors Magic"
  },
  {
    image: "/src/assets/award-womens-running-2024.png",
    title: "PRODUCT OF THE YEAR",
    year: "2024",
    organization: "Women's Running"
  },
  {
    image: "/src/assets/award-national-running.png",
    title: "RECOMMENDED",
    year: "2024",
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Award Image */}
              <div className="relative mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-3 shadow-lg">
                <img 
                  src={award.image} 
                  alt={`${award.organization} ${award.title} ${award.year}`}
                  className="w-full h-full object-contain"
                />
                {/* Year Badge */}
                <div className="absolute -bottom-2 -right-2 bg-harrier-yellow text-harrier-dark-green text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                  {award.year}
                </div>
              </div>
              
              <h3 className="brand-subtitle text-white text-sm md:text-base mb-1">
                {award.title}
              </h3>
              
              <p className="brand-body text-white/80 text-xs md:text-sm">
                {award.organization}
              </p>
            </div>
          ))}
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