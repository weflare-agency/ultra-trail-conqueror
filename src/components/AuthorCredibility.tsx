import danSummersImage from "@/assets/dan-summers.jpg";
import ronnieStatonImage from "@/assets/ronnie-staton.jpg";

const authors = [
  {
    name: "Dan Summers",
    credentials: "Mountain Leader & Ultra Runner",
    achievement: "100-mile finisher (Lakeland 100 sub-24hrs)",
    image: danSummersImage,
    description: "With years of mountain leadership experience and multiple ultra completions, Dan brings practical expertise to every page of this guide."
  },
  {
    name: "Ronnie Staton",
    credentials: "Ultra Coach & Adventure Runner",
    achievement: "Completed 190-mile England crossing",
    image: ronnieStatonImage,
    description: "As an experienced ultra coach and extreme distance specialist, Ronnie shares the strategies that have helped hundreds of runners achieve their goals."
  }
];

export function AuthorCredibility() {
  return (
    <section className="py-20 bg-harrier-dark-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Written by Ultra Running Experts
          </h2>
          <p className="text-xl text-harrier-mint max-w-2xl mx-auto">
            Learn from professionals who've walked (and run) the path you're about to take
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <div 
              key={index}
              className="feature-card bg-harrier-medium-green border-harrier-light-green text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-harrier-yellow shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {author.name}
              </h3>
              
              <p className="text-harrier-yellow font-semibold mb-2">
                {author.credentials}
              </p>
              
              <p className="text-harrier-yellow font-bold mb-4">
                {author.achievement}
              </p>
              
              <p className="text-harrier-mint leading-relaxed">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}