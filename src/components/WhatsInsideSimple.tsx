import { Check } from "lucide-react";

export function WhatsInsideSimple() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-saira font-black text-4xl md:text-5xl text-harrier-dark-green mb-12">
            WHAT'S INSIDE?
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 text-left max-w-3xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-harrier-medium-green rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="font-comfortaa font-semibold text-lg md:text-xl text-harrier-dark-green leading-relaxed">
                Essential checklists for kit, fuelling, and race day prep
              </p>
            </div>
            
            <div className="flex items-start gap-6 text-left max-w-3xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-harrier-medium-green rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="font-comfortaa font-semibold text-lg md:text-xl text-harrier-dark-green leading-relaxed">
                Pro insights from ultra runners who've been there, done it, and gone back for more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}