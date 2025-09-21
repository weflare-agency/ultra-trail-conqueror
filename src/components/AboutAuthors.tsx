import danSummersImage from "@/assets/dan-summers-author.jpg";
import ronnieStatonImage from "@/assets/ronnie-staton-author.jpg";

export function AboutAuthors() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ABOUT THE AUTHORS
            </h2>
            
            {/* Green accent divider */}
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Dan Summers */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={danSummersImage} 
                  alt="Dan Summers - Ultra Running Expert"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Dan Summers</h3>
              <p className="text-gray-600 leading-relaxed">
                Dan Summers is a Mountain Leader, Fell Leader in Running Fitness and INWA Nordic Walking Instructor. 
                He has completed a number of 100-mile races and 24hr challenges including the Arc of Attrition and 
                Lakeland 100 (both under 24hrs), the Spine Challenger, the Bob Graham and Paddy Buckley Rounds.
              </p>
            </div>

            {/* Ronnie Staton */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={ronnieStatonImage} 
                  alt="Ronnie Staton - Ultra Running Coach"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ronnie Staton</h3>
              <p className="text-gray-600 leading-relaxed">
                Over the last decade Ronnie Staton has been working to help physically and mentally prepare 
                hundreds of ultra runners from around the UK, tackling races from 30 miles up to 300 miles. 
                Ronnie personally loves to run long and he has successfully run across England (190 miles), 
                Wales (250 miles) and Scotland (215 miles) in a non-stop format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}