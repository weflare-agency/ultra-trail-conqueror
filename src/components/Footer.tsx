import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import harrierLogo from "@/assets/harrier-logo.png";

export function Footer() {
  return (
    <footer className="bg-harrier-dark-teal text-white py-16">
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
                <h3 className="text-xl font-bold">HARRIER</h3>
                <p className="text-harrier-light-teal text-sm tracking-wider">TRAIL RUNNING</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              The UK's fastest growing brand for trail runners. Made by trail runners, for trail runners. 
              Over 50,000 orders shipped across the UK and beyond.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-harrier-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Main Website
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Shop Trail Gear
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Training Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Race Calendar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-harrier-yellow">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-harrier-yellow transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold mb-4 md:mb-0 text-harrier-yellow">
                Join Our Trail Community
              </h4>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-teal transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-teal transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-teal transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-harrier-yellow hover:text-harrier-dark-teal transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © 2024 Harrier Trail Running. All rights reserved. Made by trail runners, for trail runners.
          </p>
        </div>
      </div>
    </footer>
  );
}