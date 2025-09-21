import danSummers from "@/assets/dan-summers.jpg";
import ronnieStaton from "@/assets/ronnie-staton.jpg";
import harrierLogo from "@/assets/harrier-saira-logo-black.png";
import runnerPremium1 from "@/assets/runner-premium-1.jpg";
import runnerPremium2 from "@/assets/runner-premium-2.jpg";
import runnerPremium3 from "@/assets/runner-premium-3.jpg";
import harrierAnyBody from "@/assets/harrier-anybody-premium.jpg";
import harrierMadeBy from "@/assets/harrier-made-by-trail-runners.png";

const experts = [
  {
    name: "Dan Summers",
    title: "Ultra Running Coach & Mountain Leader",
    credentials: "RRCA Certified Coach",
    achievement: "100+ Ultra Marathon Finishes",
    image: danSummers,
    experience: "15 Years Elite Coaching",
    description: "Dan has personally coached over 2,000 runners to their first ultra finish. His progressive training methodology has transformed beginners into confident ultra athletes, with a 94% success rate for first-time ultra finishers.",
    specialties: ["Training Periodization", "Injury Prevention", "Mental Coaching"],
    stats: ["2,000+ Coached", "94% Success Rate", "Lakeland 100 Sub-24hr"]
  },
  {
    name: "Ronnie Staton",
    title: "Sports Nutritionist & Elite Ultra Athlete", 
    credentials: "MSc Sports Nutrition",
    achievement: "Sub-24hr 100-Mile Finisher",
    image: ronnieStaton,
    experience: "12 Years Elite Competition",
    description: "Ronnie's nutrition protocols have fueled countless ultra success stories. His real-world experience racing at the highest level, combined with advanced sports science education, brings unmatched practical insights to every recommendation.",
    specialties: ["Race Nutrition", "Hydration Strategy", "Recovery Science"],
    stats: ["190-Mile Record", "12 Years Racing", "Nutrition Expert"]
  }
];

export const AuthorCredibility = () => {
  return (
    <section className="py-32 topo-pattern relative overflow-hidden">
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <img 
              src={harrierLogo} 
              alt="Harrier Trail Running" 
              className="h-16 mx-auto"
            />
          </div>
          
          <div className="inline-block bg-yellow-400 text-slate-900 px-8 py-3 rounded-full mb-8">
            <span className="font-black text-sm uppercase tracking-wide">Expert Authors</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="section-headline text-white mb-8">
            WRITTEN BY<br />
            <span className="text-yellow-400">WORLD-CLASS</span><br />
            <span className="text-yellow-400">ULTRA EXPERTS</span>
          </h2>
          <p className="section-subheadline text-white/90 max-w-4xl mx-auto">
            This guide combines decades of elite racing experience with proven coaching methods. 
            Learn from those who haven't just finished ultras - they've mastered them.
          </p>
        </div>

        {/* Expert Profiles - Premium Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {experts.map((expert, index) => (
            <div key={index} className="premium-card bg-white/98 backdrop-blur-sm group">
              
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-yellow-400"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Expert
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-xl font-bold text-teal-600 mb-4">
                  {expert.title}
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-yellow-100 text-slate-800 px-4 py-3 rounded-xl text-center">
                  <div className="font-bold text-sm">{expert.credentials}</div>
                </div>
                <div className="bg-teal-100 text-slate-800 px-4 py-3 rounded-xl text-center">
                  <div className="font-bold text-sm">{expert.achievement}</div>
                </div>
                <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-xl text-center">
                  <div className="font-bold text-sm">{expert.experience}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                {expert.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {expert.stats.map((stat, idx) => (
                  <div key={idx} className="text-center bg-slate-50 rounded-lg p-4">
                    <div className="font-black text-lg text-teal-600">{stat}</div>
                  </div>
                ))}
              </div>

              {/* Specialties */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-4 text-center">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {expert.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Success Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-12">
            JOIN 15,000+ SUCCESSFUL ULTRA RUNNERS
          </h3>
          
          {/* Success Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="photo-grid-item">
              <img 
                src={runnerPremium1} 
                alt="Ultra runner success story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="photo-grid-item">
              <img 
                src={runnerPremium2} 
                alt="Ultra runner success story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="photo-grid-item">
              <img 
                src={runnerPremium3} 
                alt="Ultra runner success story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="photo-grid-item">
              <img 
                src={harrierAnyBody} 
                alt="Ultra runner success story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Brand Message */}
          <div className="mb-12">
            <img 
              src={harrierMadeBy} 
              alt="Made by Trail Runners" 
              className="h-16 mx-auto opacity-90"
            />
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 text-slate-900 rounded-3xl p-12 text-center shadow-2xl">
            <h4 className="text-3xl md:text-4xl font-black mb-6">
              READY TO LEARN FROM THE EXPERTS?
            </h4>
            <p className="text-xl mb-8 leading-relaxed">
              Get the same proven system that's helped thousands of runners successfully 
              complete their first ultra marathon. Written by coaches who've actually done it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/20 rounded-xl p-6">
                <div className="font-black text-2xl mb-2">2,000+</div>
                <div className="font-semibold">Runners Coached</div>
              </div>
              <div className="bg-white/20 rounded-xl p-6">
                <div className="font-black text-2xl mb-2">94%</div>
                <div className="font-semibold">Success Rate</div>
              </div>
              <div className="bg-white/20 rounded-xl p-6">
                <div className="font-black text-2xl mb-2">15K+</div>
                <div className="font-semibold">Downloads</div>
              </div>
            </div>
            
            <a 
              href="#hero-form" 
              className="inline-block bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-slate-800 transition-colors shadow-2xl hover:scale-105 transform duration-300"
            >
              GET YOUR FREE EXPERT GUIDE
            </a>
            
            <p className="mt-6 text-lg opacity-80">
              ✓ Instant Access ✓ No Spam ✓ 100% Free Forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};