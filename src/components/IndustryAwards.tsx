import { Star } from "lucide-react";
import guardianAward from "@/assets/award-guardian.png";
import runnersWorldAward from "@/assets/award-runners-world.png";
import outdoorsMagicAward from "@/assets/award-outdoors-magic.png";
import womensRunningAward from "@/assets/award-womens-running-2024.png";
import nationalRunningAward from "@/assets/award-national-running.png";

const awards = [
  {
    image: guardianAward,
    title: "GEAR OF THE YEAR",
    year: "2024",
    organization: "The Guardian"
  },
  {
    image: runnersWorldAward,
    title: "EDITOR'S CHOICE",
    year: "2024", 
    organization: "Runner's World"
  },
  {
    image: outdoorsMagicAward,
    title: "GEAR AWARD",
    year: "2024",
    organization: "Outdoors Magic"
  },
  {
    image: womensRunningAward,
    title: "PRODUCT OF THE YEAR",
    year: "2024",
    organization: "Women's Running"
  },
  {
    image: nationalRunningAward,
    title: "RECOMMENDED",
    year: "2024",
    organization: "National Running Show"
  }
];

export function IndustryAwards() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            WHY HARRIER?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We don't just win over trail runners - the gear nerds, kit testers, and industry experts rate us too.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              {/* Award Image */}
              <div className="relative mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-3 shadow-lg">
                <img 
                  src={award.image} 
                  alt={`${award.organization} ${award.title} ${award.year}`}
                  className="w-full h-full object-contain"
                />
                {/* Year Badge */}
                <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                  {award.year}
                </div>
              </div>
              
              <h3 className="text-white text-sm md:text-base mb-1 font-semibold">
                {award.title}
              </h3>
              
              <p className="text-white/80 text-xs md:text-sm">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
        
        {/* Free Access Highlight - Removed for cleaner design */}
      </div>
    </section>
  );
}