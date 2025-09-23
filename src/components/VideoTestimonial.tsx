import { useState } from "react";
import { Play, X, Star } from "lucide-react";

interface VideoTestimonialProps {
  videoId?: string;
  thumbnailSrc?: string;
  testimonialText: string;
  authorName: string;
  authorTitle: string;
  rating?: number;
}

export const VideoTestimonial = ({ 
  videoId = "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
  thumbnailSrc,
  testimonialText,
  authorName,
  authorTitle,
  rating = 5
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="max-w-md mx-auto">
      {!isPlaying ? (
        <div 
          className="video-overlay aspect-video flex items-center justify-center cursor-pointer relative"
          onClick={handlePlay}
          style={{
            backgroundImage: thumbnailSrc ? `url(${thumbnailSrc})` : 'linear-gradient(135deg, hsl(var(--harrier-dark-green)), hsl(var(--harrier-medium-green)))',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="play-button">
            <Play className="w-10 h-10 text-harrier-medium-green ml-1" />
          </div>
          
          {/* Overlay with testimonial preview */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-harrier-yellow text-harrier-yellow" />
              ))}
            </div>
            <p className="text-white text-sm font-medium line-clamp-2">
              "{testimonialText}"
            </p>
            <p className="text-white/80 text-xs mt-1">
              - {authorName}, {authorTitle}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Video testimonial"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
      {!isPlaying && (
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-harrier-yellow text-harrier-yellow" />
            ))}
          </div>
          <p className="text-harrier-dark-green font-medium mb-1">"{testimonialText}"</p>
          <p className="text-harrier-dark-green/70 text-sm">- {authorName}, {authorTitle}</p>
        </div>
      )}
    </div>
  );
};