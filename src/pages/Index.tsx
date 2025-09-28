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

  const handleEmailSubmit = async (email: string, firstName: string, runnerLevel?: string) => {
    try {
      console.log("Submitting to Klaviyo:", { email, firstName, runnerLevel, timestamp: new Date() });
      
      // Validate input
      if (!email || !firstName) {
        throw new Error('Email and full name are required');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
      }
      
      // Use Klaviyo's simple form submission (replace with your actual list ID)
      // This approach works without API keys and is meant for frontend use
      const formData = new FormData();
      formData.append('g', 'WXvgMY'); // Replace with your actual Klaviyo list ID
      formData.append('email', email.toLowerCase().trim());
      formData.append('first_name', firstName.trim());
      if (runnerLevel) {
        formData.append('properties[runner_level]', runnerLevel);
      }
      formData.append('properties[subscription_source]', 'ultra_guide_landing_page');
      
      const response = await fetch('https://manage.kmail-lists.com/ajax/subscriptions/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is important for Klaviyo's form endpoint
      });

      // With no-cors mode, we can't read the response, but if no error is thrown, it likely succeeded
      
      // Show success message
      toast({
        title: "Success! Check your inbox",
        description: `Hi ${firstName}! Your ultra running guide is on its way to ${email}`,
      });
      
      setHasSubmitted(true);
      
      // You could redirect to a thank you page here
      // window.location.href = "/thank-you";
      
    } catch (error) {
      console.error('Klaviyo subscription error:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or contact support if the problem persists.",
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
      {!hasSubmitted && <ExitIntentPopup onEmailSubmit={handleEmailSubmit} hasSubmitted={hasSubmitted} />}
    </main>
  );
};

export default Index;
