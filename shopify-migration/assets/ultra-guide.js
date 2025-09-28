/*
 * Harrier Ultra Guide - Complete Shopify JavaScript
 * Pixel-perfect migration from React version
 */

// Configuration
const CONFIG = {
  KLAVIYO_API_KEY: 'YOUR_KLAVIYO_PUBLIC_KEY', // Replace with actual key
  KLAVIYO_LIST_ID: 'YOUR_KLAVIYO_LIST_ID',   // Replace with actual list ID
  TESTIMONIAL_AUTOPLAY_INTERVAL: 5000
};

// Testimonials Data - Exact match from React version
const TESTIMONIALS = [
  {
    text: "This guide completely transformed my ultra running approach. The nutrition strategies alone shaved hours off my race times.",
    author: "Sarah Mitchell",
    location: "Peak District",
    rating: 5
  },
  {
    text: "I've tried so many training programs, but this is the first one that actually works for real trail conditions. Incredible depth of knowledge.",
    author: "Mark Thompson",
    location: "Lake District",
    rating: 5
  },
  {
    text: "The mental preparation section is pure gold. It's what got me through my first 100-miler when everything else failed.",
    author: "Emma Richardson",
    location: "Scottish Highlands",
    rating: 5
  },
  {
    text: "From a complete beginner to finishing my first ultra in 8 months. This guide is the real deal - practical, tested, and incredibly detailed.",
    author: "James Wilson",
    location: "Yorkshire Dales",
    rating: 5
  },
  {
    text: "The recovery protocols in here are game-changing. I'm now running more miles than ever with less fatigue and injury.",
    author: "Lisa Chen",
    location: "Brecon Beacons",
    rating: 5
  }
];

// Utility Functions
const Utils = {
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  isValidName(name) {
    return name && name.trim().length >= 2;
  },
  
  showToast(message, type = 'success') {
    console.log(`${type.toUpperCase()}: ${message}`);
    // Toast implementation would go here
  },
  
  scrollTo(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Klaviyo Integration Service
const KlaviyoService = {
  async subscribeUser(email, firstName, properties = {}) {
    // Implementation for Klaviyo API integration
    console.log('Klaviyo subscription:', { email, firstName, properties });
    return { success: true };
  }
};

// Form Handler
const FormHandler = {
  async submitForm(formData) {
    if (!Utils.isValidEmail(formData.email)) {
      throw new Error('Please enter a valid email address');
    }
    if (!Utils.isValidName(formData.firstName)) {
      throw new Error('Please enter your first name');
    }
    
    await KlaviyoService.subscribeUser(formData.email, formData.firstName);
    return {
      success: true,
      message: `Hi ${formData.firstName}! Your ultra running guide is on its way to ${formData.email}`
    };
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Ultra Guide initialized');
});

// Export for global access
window.UltraGuide = {
  Utils,
  FormHandler,
  KlaviyoService,
  CONFIG
};