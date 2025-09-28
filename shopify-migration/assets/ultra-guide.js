/* ==============================================
   HARRIER ULTRA GUIDE - SHOPIFY JAVASCRIPT
   Complete functionality for Shopify migration
   ============================================== */

// Configuration
const CONFIG = {
  klaviyo: {
    apiKey: 'YOUR_KLAVIYO_PUBLIC_API_KEY', // Replace with your actual Klaviyo public API key
    listId: 'YOUR_KLAVIYO_LIST_ID' // Replace with your actual Klaviyo list ID
  },
  testimonials: {
    autoPlayInterval: 5000 // 5 seconds
  }
};

// Testimonials data
const TESTIMONIALS = [
  {
    text: "This guide transformed my approach to ultra running. The nutrition section alone was worth its weight in gold.",
    author: "Sarah Mitchell",
    location: "Peak District",
    rating: 5
  },
  {
    text: "Finally finished my first 50k thanks to the training plan in this guide. The mental preparation tips were game-changing.",
    author: "James Wilson",
    location: "Lake District", 
    rating: 5
  },
  {
    text: "The gear recommendations saved me from costly mistakes. Everything I needed to know in one comprehensive guide.",
    author: "Emma Thompson",
    location: "Yorkshire Dales",
    rating: 5
  },
  {
    text: "As a beginner, this guide gave me the confidence to attempt my first ultra. The step-by-step approach is perfect.",
    author: "Michael Davis",
    location: "Scottish Highlands",
    rating: 5
  },
  {
    text: "The injury prevention strategies actually work. I've been pain-free for 6 months following their advice.",
    author: "Lisa Chen", 
    location: "Brecon Beacons",
    rating: 5
  }
];

// Utility Functions
const Utils = {
  // Email validation
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Name validation
  isValidName(name) {
    return name.trim().length >= 2;
  },

  // Show toast notification
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span>${message}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;
    
    // Add toast styles if not already present
    if (!document.querySelector('#toast-styles')) {
      const styles = document.createElement('style');
      styles.id = 'toast-styles';
      styles.textContent = `
        .toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 10000;
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.3s ease;
          max-width: 400px;
        }
        .toast.toast-success { border-left: 4px solid hsl(100, 50%, 35%); }
        .toast.toast-error { border-left: 4px solid hsl(0, 84%, 60%); }
        .toast-content {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .toast-close {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          margin-left: 10px;
        }
        .toast.show {
          opacity: 1;
          transform: translateX(0);
        }
      `;
      document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  },

  // Smooth scroll to element
  scrollTo(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },

  // Scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Klaviyo Integration
const KlaviyoService = {
  async subscribeUser(email, firstName, properties = {}) {
    try {
      const response = await fetch('https://a.klaviyo.com/api/v2/list/' + CONFIG.klaviyo.listId + '/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONFIG.klaviyo.apiKey,
          profiles: [{
            email: email,
            first_name: firstName,
            ...properties
          }]
        })
      });

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Klaviyo subscription error:', error);
      return { success: false, error: error.message };
    }
  }
};

// Form Handler
const FormHandler = {
  async submitForm(formData) {
    const { email, firstName, runnerLevel = 'beginner', source = 'hero' } = formData;
    
    // Validate inputs
    if (!Utils.isValidEmail(email)) {
      throw new Error('Please enter a valid email address');
    }
    
    if (!Utils.isValidName(firstName)) {
      throw new Error('Please enter your first name');
    }

    // Submit to Klaviyo
    const result = await KlaviyoService.subscribeUser(email, firstName, {
      runner_level: runnerLevel,
      source: source,
      subscribed_at: new Date().toISOString()
    });

    if (!result.success) {
      throw new Error(result.error || 'Subscription failed. Please try again.');
    }

    return result;
  }
};

// Testimonials Carousel
class TestimonialsCarousel {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.currentIndex = 0;
    this.testimonials = TESTIMONIALS;
    this.autoPlayTimer = null;
    this.isAutoPlaying = true;
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.startAutoPlay();
  }

  render() {
    const testimonial = this.testimonials[this.currentIndex];
    
    this.container.innerHTML = `
      <div class="testimonial-card animate-fade-in">
        <div class="stars">
          ${Array(testimonial.rating).fill('').map(() => 
            '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
          ).join('')}
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">${testimonial.author}</div>
        <div class="testimonial-location">${testimonial.location}</div>
      </div>
      
      <div class="carousel-nav">
        <button class="carousel-btn" id="prevBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 18l-6-6 6-6v12z"/>
          </svg>
        </button>
        <button class="carousel-btn" id="nextBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 18l6-6-6-6v12z"/>
          </svg>
        </button>
      </div>
      
      <div class="carousel-dots">
        ${this.testimonials.map((_, index) => 
          `<button class="carousel-dot ${index === this.currentIndex ? 'active' : ''}" data-index="${index}"></button>`
        ).join('')}
      </div>
    `;
  }

  bindEvents() {
    const prevBtn = this.container.querySelector('#prevBtn');
    const nextBtn = this.container.querySelector('#nextBtn');
    const dots = this.container.querySelectorAll('.carousel-dot');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goTo(index);
      });
    });
  }

  next() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.render();
    this.bindEvents();
  }

  prev() {
    this.stopAutoPlay();
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    this.render();
    this.bindEvents();
  }

  goTo(index) {
    this.stopAutoPlay();
    this.currentIndex = index;
    this.render();
    this.bindEvents();
  }

  startAutoPlay() {
    if (!this.isAutoPlaying) return;
    
    this.autoPlayTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.render();
      this.bindEvents();
    }, CONFIG.testimonials.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
    this.isAutoPlaying = false;
  }
}

// Exit Intent Popup
class ExitIntentPopup {
  constructor() {
    this.hasShown = false;
    this.isVisible = false;
    this.hasSubmitted = localStorage.getItem('ultra-guide-submitted') === 'true';
    
    if (!this.hasSubmitted) {
      this.init();
    }
  }

  init() {
    this.createPopup();
    this.bindEvents();
  }

  createPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup-overlay';
    popup.id = 'exitIntentPopup';
    popup.innerHTML = `
      <div class="popup-content">
        <button class="popup-close" id="popupClose">×</button>
        <h3>Wait! Don't Miss Out</h3>
        <p>Get your FREE "How to Run an Ultra" guide before you go!</p>
        <form id="exitPopupForm">
          <div class="form-group">
            <input type="text" class="form-input" placeholder="First name" id="exitFirstName" required>
          </div>
          <div class="form-group">
            <input type="email" class="form-input" placeholder="Email address" id="exitEmail" required>
          </div>
          <button type="submit" class="btn btn-cta" id="exitSubmitBtn">
            Get My Free Guide
          </button>
        </form>
        <p style="font-size: 0.8rem; color: #666; margin-top: 1rem;">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    `;
    
    document.body.appendChild(popup);
  }

  bindEvents() {
    // Exit intent detection
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !this.hasShown && !this.hasSubmitted) {
        this.show();
      }
    });

    // Close popup
    const closeBtn = document.getElementById('popupClose');
    const overlay = document.getElementById('exitIntentPopup');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }
    
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.hide();
      });
    }

    // Form submission
    const form = document.getElementById('exitPopupForm');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible) {
        this.hide();
      }
    });
  }

  show() {
    if (this.hasShown || this.hasSubmitted) return;
    
    this.hasShown = true;
    this.isVisible = true;
    
    const popup = document.getElementById('exitIntentPopup');
    if (popup) {
      popup.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  }

  hide() {
    this.isVisible = false;
    
    const popup = document.getElementById('exitIntentPopup');
    if (popup) {
      popup.classList.remove('visible');
      document.body.style.overflow = '';
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('exitFirstName').value;
    const email = document.getElementById('exitEmail').value;
    const submitBtn = document.getElementById('exitSubmitBtn');
    
    try {
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
      submitBtn.disabled = true;
      
      await FormHandler.submitForm({
        email,
        firstName,
        source: 'exit_intent'
      });
      
      localStorage.setItem('ultra-guide-submitted', 'true');
      Utils.showToast('Success! Check your email for the guide.');
      this.hide();
      
    } catch (error) {
      Utils.showToast(error.message, 'error');
    } finally {
      submitBtn.innerHTML = 'Get My Free Guide';
      submitBtn.disabled = false;
    }
  }
}

// Sticky Mobile CTA
class StickyMobileCTA {
  constructor() {
    this.isVisible = false;
    this.showForm = false;
    this.hasSubmitted = localStorage.getItem('ultra-guide-submitted') === 'true';
    
    if (!this.hasSubmitted) {
      this.init();
    }
  }

  init() {
    this.create();
    this.bindEvents();
  }

  create() {
    const cta = document.createElement('div');
    cta.className = 'sticky-mobile-cta';
    cta.id = 'stickyMobileCTA';
    cta.innerHTML = `
      <div id="ctaPrompt">
        <strong>Get Your FREE Ultra Running Guide</strong>
        <button class="btn btn-cta" id="showFormBtn" style="margin-left: 10px; padding: 0.5rem 1rem; font-size: 0.9rem;">
          Get Guide
        </button>
      </div>
      <form id="stickyForm" style="display: none;">
        <div style="display: flex; gap: 10px; margin-bottom: 10px;">
          <input type="text" class="form-input" placeholder="First name" id="stickyFirstName" required style="flex: 1;">
          <input type="email" class="form-input" placeholder="Email" id="stickyEmail" required style="flex: 1;">
        </div>
        <button type="submit" class="btn btn-cta" id="stickySubmitBtn" style="width: 100%;">
          Send My Guide
        </button>
      </form>
    `;
    
    document.body.appendChild(cta);
    
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14l5-5 5 5z"/>
      </svg>
    `;
    document.body.appendChild(scrollBtn);
  }

  bindEvents() {
    // Scroll detection
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Show form button
    const showFormBtn = document.getElementById('showFormBtn');
    if (showFormBtn) {
      showFormBtn.addEventListener('click', () => this.toggleForm());
    }

    // Form submission
    const form = document.getElementById('stickyForm');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => Utils.scrollToTop());
    }
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const shouldShow = scrollY > windowHeight * 0.5;
    
    const cta = document.getElementById('stickyMobileCTA');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    if (shouldShow && !this.isVisible) {
      this.isVisible = true;
      if (cta) cta.classList.add('visible');
      if (scrollBtn) scrollBtn.classList.add('visible');
    } else if (!shouldShow && this.isVisible) {
      this.isVisible = false;
      if (cta) cta.classList.remove('visible');
      if (scrollBtn) scrollBtn.classList.remove('visible');
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
    const prompt = document.getElementById('ctaPrompt');
    const form = document.getElementById('stickyForm');
    
    if (prompt && form) {
      prompt.style.display = this.showForm ? 'none' : 'block';
      form.style.display = this.showForm ? 'block' : 'none';
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('stickyFirstName').value;
    const email = document.getElementById('stickyEmail').value;
    const submitBtn = document.getElementById('stickySubmitBtn');
    
    try {
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
      submitBtn.disabled = true;
      
      await FormHandler.submitForm({
        email,
        firstName,
        source: 'sticky_mobile'
      });
      
      localStorage.setItem('ultra-guide-submitted', 'true');
      Utils.showToast('Success! Check your email for the guide.');
      
      // Hide the CTA
      const cta = document.getElementById('stickyMobileCTA');
      if (cta) cta.style.display = 'none';
      
    } catch (error) {
      Utils.showToast(error.message, 'error');
    } finally {
      submitBtn.innerHTML = 'Send My Guide';
      submitBtn.disabled = false;
    }
  }
}

// Main Form Handlers
const MainForms = {
  init() {
    // Hero form
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
      heroForm.addEventListener('submit', (e) => this.handleHeroSubmit(e));
    }

    // Final CTA form
    const finalForm = document.getElementById('finalCTAForm');
    if (finalForm) {
      finalForm.addEventListener('submit', (e) => this.handleFinalSubmit(e));
    }

    // Download buttons
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        Utils.scrollTo('heroForm', 100);
      });
    });
  },

  async handleHeroSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('heroFirstName').value;
    const email = document.getElementById('heroEmail').value;
    const runnerLevel = document.querySelector('input[name="runnerLevel"]:checked')?.value || 'beginner';
    const submitBtn = document.getElementById('heroSubmitBtn');
    
    try {
      submitBtn.innerHTML = '<span class="spinner"></span> Sending your guide...';
      submitBtn.disabled = true;
      
      await FormHandler.submitForm({
        email,
        firstName,
        runnerLevel,
        source: 'hero'
      });
      
      localStorage.setItem('ultra-guide-submitted', 'true');
      
      // Redirect to thank you page or show success message
      Utils.showToast('Success! Check your email for your free guide.');
      
      // Optional: Redirect to thank you page
      setTimeout(() => {
        window.location.href = '/pages/thank-you'; // Adjust URL as needed
      }, 2000);
      
    } catch (error) {
      Utils.showToast(error.message, 'error');
    } finally {
      submitBtn.innerHTML = 'Get My Free Guide';
      submitBtn.disabled = false;
    }
  },

  async handleFinalSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('finalFirstName').value;
    const email = document.getElementById('finalEmail').value;
    const experience = document.getElementById('experienceLevel').value;
    const submitBtn = document.getElementById('finalSubmitBtn');
    
    try {
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
      submitBtn.disabled = true;
      
      await FormHandler.submitForm({
        email,
        firstName,
        runnerLevel: experience,
        source: 'final_cta'
      });
      
      localStorage.setItem('ultra-guide-submitted', 'true');
      Utils.showToast('Success! Check your email for your free guide.');
      
      // Optional: Redirect to thank you page
      setTimeout(() => {
        window.location.href = '/pages/thank-you'; // Adjust URL as needed
      }, 2000);
      
    } catch (error) {
      Utils.showToast(error.message, 'error');
    } finally {
      submitBtn.innerHTML = 'Send My Guide';
      submitBtn.disabled = false;
    }
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize main form handlers
  MainForms.init();
  
  // Initialize testimonials carousel
  new TestimonialsCarousel('#testimonialsCarousel');
  
  // Initialize exit intent popup (only on desktop)
  if (window.innerWidth > 768) {
    new ExitIntentPopup();
  }
  
  // Initialize sticky mobile CTA (only on mobile)
  if (window.innerWidth <= 768) {
    new StickyMobileCTA();
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add loading states to all buttons
  document.querySelectorAll('button[type="submit"]').forEach(btn => {
    if (!btn.id.includes('carousel') && !btn.id.includes('popup')) {
      btn.addEventListener('click', function() {
        if (this.form && this.form.checkValidity()) {
          this.classList.add('loading');
        }
      });
    }
  });
});

// Export for global access
window.UltraGuide = {
  Utils,
  FormHandler,
  KlaviyoService,
  CONFIG
};