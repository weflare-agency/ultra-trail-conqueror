import { Shield, Clock, Award, Users, CheckCircle, Zap } from "lucide-react";

export const RiskReversal = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Risk Starting Unprepared?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let poor preparation cost you months of training, potential injury, 
            or the heartbreak of a DNF (Did Not Finish).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              Without Proper Guidance:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Training Overload Injuries</h4>
                  <p className="text-red-700 text-sm">67% of first-time ultra runners get injured due to improper progression</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Nutrition Disasters</h4>
                  <p className="text-red-700 text-sm">Bonking, cramping, or worse - stomach issues that end your race</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Mental Breakdown</h4>
                  <p className="text-red-700 text-sm">When the miles get tough, unprepared minds quit</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Expensive Gear Mistakes</h4>
                  <p className="text-red-700 text-sm">£500+ wasted on wrong equipment that causes blisters and pain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              With Our Proven System:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Injury-Proof Training Plans</h4>
                  <p className="text-green-700 text-sm">Progressive schedules tested by 15,000+ successful finishers</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Bulletproof Nutrition Strategy</h4>
                  <p className="text-green-700 text-sm">What to eat, when to eat, and how to avoid every stomach disaster</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Mental Toughness Toolkit</h4>
                  <p className="text-green-700 text-sm">Proven psychological strategies from ultra champions</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Smart Gear Recommendations</h4>
                  <p className="text-green-700 text-sm">Save hundreds with our tested gear lists - no marketing BS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Risk-Free</p>
            <p className="text-sm text-gray-600">100% Free Guide</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Instant Access</p>
            <p className="text-sm text-gray-600">Download Immediately</p>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Proven Results</p>
            <p className="text-sm text-gray-600">15,000+ Success Stories</p>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Expert Authors</p>
            <p className="text-sm text-gray-600">Ultra Champions</p>
          </div>
        </div>
      </div>
    </section>
  );
};