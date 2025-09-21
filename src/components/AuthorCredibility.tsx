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
    <section className="py-20 bg-harrier-dark-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="brand-title text-white mb-6">
            WRITTEN BY ULTRA RUNNING EXPERTS
          </h2>
          <p className="brand-body text-white/95 max-w-2xl mx-auto">
            LEARN FROM PROFESSIONALS WHO'VE WALKED (AND RUN) THE PATH YOU'RE ABOUT TO TAKE
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-harrier-yellow shadow-lg"
                />
              </div>
              
              <h3 className="brand-subtitle text-harrier-dark-green mb-2">
                {author.name.toUpperCase()}
              </h3>
              
              <div className="yellow-highlight mb-4 text-sm">
                {author.credentials.toUpperCase()}
              </div>
              
              <p className="brand-body text-harrier-medium-green font-bold mb-4">
                {author.achievement}
              </p>
              
              <p className="brand-body text-harrier-dark-green/80 leading-relaxed">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}