import { CheckCircle, Download, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThankYou() {
  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-scale-in">
          <div className="w-20 h-20 bg-harrier-medium-green rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-harrier-dark-green mb-6">
            Success! Your Guide is On Its Way
          </h1>
          
          <p className="text-xl text-harrier-dark-green mb-8">
            Check your inbox for "How to Run an Ultra" - your comprehensive trail running guide
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="trust-badge">
              <Mail className="w-8 h-8 text-harrier-medium-green mx-auto mb-3" />
              <h3 className="font-bold text-harrier-dark-green mb-2">Check Your Email</h3>
              <p className="text-sm text-harrier-dark-green/70">
                Your guide should arrive within 5 minutes
              </p>
            </div>
            
            <div className="trust-badge">
              <Download className="w-8 h-8 text-harrier-medium-green mx-auto mb-3" />
              <h3 className="font-bold text-harrier-dark-green mb-2">Instant Download</h3>
              <p className="text-sm text-harrier-dark-green/70">
                96 pages of expert ultra running advice
              </p>
            </div>
            
            <div className="trust-badge">
              <Users className="w-8 h-8 text-harrier-medium-green mx-auto mb-3" />
              <h3 className="font-bold text-harrier-dark-green mb-2">Join the Community</h3>
              <p className="text-sm text-harrier-dark-green/70">
                Connect with 15,000+ trail runners
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              variant="cta"
              className="px-8 py-4 text-lg font-bold"
              onClick={() => window.open('https://harriertrailrunning.com', '_blank')}
            >
              Visit Harrier Trail Running
            </Button>
            
            <p className="text-sm text-harrier-dark-green/70">
              Didn't receive the email? Check your spam folder or{" "}
              <a href="mailto:support@harriertrailrunning.com" className="text-harrier-medium-green hover:underline">
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}