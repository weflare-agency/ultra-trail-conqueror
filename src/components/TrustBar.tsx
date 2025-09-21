import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-harrier-orange text-harrier-orange" />
              ))}
            </div>
            <span className="font-bold">4.9/5.0 RATING</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="font-bold">15,684 REVIEWS</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="font-bold">UK'S #1 ULTRA GUIDE</span>
          </div>
        </div>
      </div>
    </div>
  );
}