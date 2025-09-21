import { Check } from "lucide-react";

export function WhatsInsideSimple() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-saira font-bold text-3xl md:text-4xl text-harrier-dark-green mb-12">
            WHAT'S INSIDE?
          </h2>
          
          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-harrier-medium-green" />
              </div>
              <p className="text-lg text-gray-700">
                Essential checklists for kit, fuelling, and race day prep
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-harrier-medium-green" />
              </div>
              <p className="text-lg text-gray-700">
                Pro insights from ultra runners who've been there, done it, and gone back for more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}