const danSummersImage = "/lovable-uploads/dan-summers-new.jpg";
const ronnieStatonImage = "/lovable-uploads/ronnie-staton-new.jpg";

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
    <section className="py-24 bg-harrier-dark-green pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-saira font-black text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wider leading-tight">
            WRITTEN BY ULTRA<br /><span className="text-harrier-yellow">RUNNING EXPERTS</span>
          </h2>
          <p className="font-comfortaa font-semibold text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            LEARN FROM PROFESSIONALS WHO'VE WALKED (AND RUN)<br />
            THE PATH YOU'RE ABOUT TO TAKE
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {authors.map((author, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-10 shadow-2xl text-center animate-slide-up border-2 border-harrier-yellow/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <img
                  src={author.image}
                  alt={author.name}
                  className={`${author.name === "Dan Summers" ? "w-48 h-48" : "w-48 h-48"} rounded-full mx-auto object-cover border-6 border-harrier-yellow shadow-2xl`}
                  style={{ 
                    objectPosition: author.name === "Dan Summers" ? "left center" : "center center",
                    objectFit: "cover"
                  }}
                />
              </div>
              
              <h3 className="font-saira font-black text-2xl md:text-3xl text-harrier-dark-green mb-4 tracking-wide">
                {author.name.toUpperCase()}
              </h3>
              
              <div className="inline-block bg-harrier-yellow px-6 py-2 rounded-xl mb-6 shadow-lg">
                <span className="font-saira font-bold text-lg text-harrier-dark-green tracking-wide">
                  {author.credentials.toUpperCase()}
                </span>
              </div>
              
              <p className="font-comfortaa font-bold text-xl md:text-2xl text-harrier-medium-green mb-6 leading-tight">
                {author.achievement}
              </p>
              
              <p className="font-comfortaa font-medium text-lg md:text-xl text-harrier-dark-green/85 leading-relaxed">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}