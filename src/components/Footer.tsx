import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import harrierLogo from "@/assets/harrier-logo.png";

export function Footer() {
  return (
    <footer className="bg-harrier-dark-green text-white py-16 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={harrierLogo}
                alt="Harrier Trail Running"
                className="h-12 w-auto mr-4 brightness-0 invert"
              />
              <div>
                <h3 className="brand-subtitle text-white">HARRIER</h3>
                <p className="brand-body text-harrier-mint text-sm tracking-wider">TRAIL RUNNING</p>
              </div>
            </div>
            <p className="brand-body text-white/80 leading-relaxed max-w-md">
              THE UK'S FASTEST GROWING BRAND FOR TRAIL RUNNERS. MADE BY TRAIL RUNNERS, FOR TRAIL RUNNERS. 
              OVER 50,000 ORDERS SHIPPED ACROSS THE UK AND BEYOND.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="brand-subtitle text-harrier-yellow mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://harrierrunfree.co.uk/" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  main website
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/collections/trail-collection" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  shop trail gear
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/pages/how-to-run-an-ultra" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  training plans
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/blogs/news" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  race calendar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="brand-subtitle text-harrier-yellow mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://harrierrunfree.co.uk/pages/privacy-notice" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  privacy policy
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/pages/website-terms-of-use" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  terms of service
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/pages/cookies-policy" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  cookie policy
                </a>
              </li>
              <li>
                <a href="https://harrierrunfree.co.uk/pages/privacy-notice" target="_blank" rel="noopener noreferrer" className="brand-body text-white/80 hover:text-harrier-yellow transition-colors">
                  gdpr compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="brand-subtitle text-harrier-yellow mb-4 md:mb-0">
                JOIN OUR TRAIL COMMUNITY
              </h4>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Harrierrunfree/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-green transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/harrierrunfree/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-green transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/harrier-trail-running" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-green transition-all duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="brand-body text-white/60 text-sm">
            © 2025 harrier trail running. all rights reserved. made by trail runners, for trail runners.
          </p>
        </div>
      </div>
    </footer>
  );
}