export function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to run your first ultra or take your next one up a notch?
          </h2>
          
          {/* Green accent divider */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            This free 96-page guide gives you everything you need to succeed. Packed with practical advice, 
            proven strategies, and hard-earned wisdom, this is your go-to ultra companion.
          </p>
        </div>
      </div>
    </section>
  );
}