import { Target, Calendar, Brain, Trophy, Zap, Shield } from "lucide-react";
import guidePreview from "@/assets/ultra-guide-preview.jpg";
import hydrationIcon1 from "@/assets/hydration-icon-1.svg";
import hydrationIcon2 from "@/assets/hydration-icon-2.svg";
import brandElement from "@/assets/brand-element-18.png";

const features = [
  {
    icon: <Target className="w-16 h-16 text-blue-600" />,
    title: "12-Week Training Plans",
    description: "Progressive training schedules for 50K, 50-mile, and 100K distances. Each plan is scientifically designed to build endurance while preventing injury.",
    highlight: "3 Complete Training Plans"
  },
  {
    icon: <Brain className="w-16 h-16 text-purple-600" />,
    title: "Mental Strategy Mastery",
    description: "Master the psychological challenges of ultra running. Learn proven techniques to push through the hardest moments and maintain focus for hours.",
    highlight: "Overcome Mental Barriers"
  },
  {
    icon: <img src={hydrationIcon1} alt="Nutrition" className="w-16 h-16" />,
    title: "Complete Nutrition Guide",
    description: "Comprehensive fueling strategies for training and race day. What to eat, when to eat it, and how to avoid the dreaded bonk.",
    highlight: "Race Day Fuel Strategy"
  },
  {
    icon: <Calendar className="w-16 h-16 text-green-600" />,
    title: "Periodization System",
    description: "Learn how to structure your training year for peak performance. Build, recover, and taper like elite athletes do.",
    highlight: "Pro Training Cycles"
  },
  {
    icon: <Trophy className="w-16 h-16 text-yellow-600" />,
    title: "Race Day Execution",
    description: "Step-by-step race day strategy from pre-race preparation to crossing the finish line. Avoid rookie mistakes that end races.",
    highlight: "Finish Line Guarantee"
  },
  {
    icon: <img src={hydrationIcon2} alt="Recovery" className="w-16 h-16" />,
    title: "Advanced Recovery",
    description: "Professional recovery techniques to train harder, avoid burnout, and stay injury-free throughout your ultra journey.",
    highlight: "Stay Injury-Free"
  }
];

export const WhatsInside = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={brandElement} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Maximum Impact */}
        <div className="text-center mb-24">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-full mb-8">
            <span className="font-bold text-sm uppercase tracking-wide">Complete Ultra System</span>
          </div>
          
          <h2 className="section-headline text-slate-900 mb-8">
            EVERYTHING YOU NEED<br />
            TO <span className="text-teal-600">FINISH STRONG</span>
          </h2>
          
          <p className="section-subheadline max-w-4xl mx-auto text-slate-600">
            96 pages of comprehensive ultra running knowledge. No fluff, no theory - 
            just proven strategies that have helped 15,000+ runners successfully complete their first ultra.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          
          {/* Left Column - Guide Preview */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <img 
                src={guidePreview} 
                alt="Ultra Running Guide Preview" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-black">96</div>
                <div className="text-sm font-bold">PAGES</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-2xl font-black">FREE</div>
                <div className="text-sm font-bold">DOWNLOAD</div>
              </div>
            </div>

            {/* Value Stack */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Instant PDF Download</div>
                  <div className="text-sm text-slate-600">Get immediate access on any device</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Money-Back Guarantee</div>
                  <div className="text-sm text-slate-600">100% satisfaction guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="premium-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Highlight Badge */}
                <div className="highlight-box mb-6">
                  {feature.highlight}
                </div>
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:from-teal-50 group-hover:to-teal-100 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-black text-teal-600 mb-2">96</div>
            <div className="text-lg font-semibold text-slate-600">Pages of Expertise</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-black text-teal-600 mb-2">15K+</div>
            <div className="text-lg font-semibold text-slate-600">Success Stories</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-black text-teal-600 mb-2">3</div>
            <div className="text-lg font-semibold text-slate-600">Training Plans</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-black text-teal-600 mb-2">100%</div>
            <div className="text-lg font-semibold text-slate-600">Free Access</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-3xl p-16 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            READY TO CONQUER YOUR FIRST ULTRA?
          </h3>
          <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join 15,000+ successful ultra finishers who used this exact system to cross their first finish line.
          </p>
          
          <a 
            href="#hero-form" 
            className="inline-block bg-yellow-400 text-slate-900 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-yellow-300 transition-colors shadow-2xl hover:scale-105 transform duration-300"
          >
            GET YOUR FREE GUIDE NOW
          </a>
          
          <p className="mt-8 text-lg opacity-80">
            ✓ Instant Download ✓ No Credit Card Required ✓ 100% Free
          </p>
        </div>
      </div>
    </section>
  );
};