import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { HeroSection } from "@/components/HeroSection";
import { TrustSignals } from "@/components/TrustSignals";
import { WhatsInside } from "@/components/WhatsInside";
import { RiskReversal } from "@/components/RiskReversal";
import { AuthorCredibility } from "@/components/AuthorCredibility";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { IndustryAwards } from "@/components/IndustryAwards";
import { OfferComparison } from "@/components/OfferComparison";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleEmailSubmit = async (email: string, firstName: string) => {
    try {
      // Here you would integrate with Supabase to store the lead
      // For now, we'll simulate the submission
      
      console.log("Submitting:", { email, firstName, timestamp: new Date() });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Success! Check your inbox",
        description: `Hi ${firstName}! Your ultra running guide is on its way to ${email}`,
      });
      
      setHasSubmitted(true);
      
      // You could redirect to a thank you page here
      // window.location.href = "/thank-you";
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "How to Run an Ultra - Free Guide",
          "description": "Comprehensive 96-page ultra marathon training guide for trail runners",
          "brand": {
            "@type": "Brand",
            "name": "Harrier Trail Running"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1500"
          }
        })}
      </script>

      <div id="hero-form">
        <HeroSection onEmailSubmit={handleEmailSubmit} />
      </div>
      
      <TrustSignals />
      <WhatsInside />
      <RiskReversal />
      <AuthorCredibility />
      <TestimonialsCarousel />
      <IndustryAwards />
      <OfferComparison onEmailSubmit={handleEmailSubmit} />
      <FinalCTA onEmailSubmit={handleEmailSubmit} />
      <Footer />
      
      <StickyMobileCTA onEmailSubmit={handleEmailSubmit} hasSubmitted={hasSubmitted} />
      {!hasSubmitted && <ExitIntentPopup onEmailSubmit={handleEmailSubmit} />}
    </main>
  );
};

export default Index;
