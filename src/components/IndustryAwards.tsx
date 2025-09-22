import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Trail Guide",
    year: "2024",
    organization: "Trail Running UK"
  },
  {
    icon: Award,
    title: "Readers' Choice",
    year: "2024", 
    organization: "Running Magazine"
  },
  {
    icon: Medal,
    title: "Innovation Award",
    year: "2023",
    organization: "Outdoor Industry"
  }
];

export function IndustryAwards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-harrier-dark-green mb-6">
            Industry Awards
          </h2>
          <p className="text-xl text-harrier-dark-green/80 max-w-2xl mx-auto">
            Recognized by leading trail running organizations across the UK
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Circular Badge */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="w-full h-full bg-gradient-to-br from-harrier-light-green to-harrier-medium-green rounded-full flex items-center justify-center shadow-xl">
                  <award.icon className="w-12 h-12 text-white" />
                </div>
                {/* Year Badge */}
                <div className="absolute -bottom-2 -right-2 bg-harrier-yellow text-harrier-dark-green text-sm font-bold px-3 py-1 rounded-full">
                  {award.year}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-harrier-dark-green mb-2">
                {award.title}
              </h3>
              
              <p className="text-harrier-medium-green font-medium">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
        
        {/* Free Access Highlight */}
        <div className="text-center mt-16 bg-harrier-light-green rounded-2xl p-8 max-w-2xl mx-auto">
          <Star className="w-12 h-12 text-harrier-yellow mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            FREE INSTANT ACCESS
          </h3>
          <p className="text-harrier-mint text-lg mb-6">
            Download your complete ultra running guide and start your journey today
          </p>
          <div className="flex justify-center space-x-4">
            <span className="text-harrier-yellow font-bold">Your first name</span>
            <span className="text-white">+</span>
            <span className="text-harrier-yellow font-bold">Your email</span>
            <span className="text-white">=</span>
            <span className="text-harrier-yellow font-bold">Instant guide</span>
          </div>
        </div>
      </div>
    </section>
  );
}