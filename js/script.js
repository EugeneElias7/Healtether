// Features Rotator
function initFeatureRotator() {
    const slides = document.querySelectorAll('.feature-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.transform = 'translateX(100%)';
      });
      dots.forEach(dot => dot.classList.remove('active'));
      
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      slides[currentIndex].style.transform = 'translateX(0)';
      dots[currentIndex].classList.add('active');
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function startAutoRotate() {
      interval = setInterval(nextSlide, 3000);
    }
  
    const rotator = document.querySelector('.rotator-container');
    rotator.addEventListener('mouseenter', () => clearInterval(interval));
    rotator.addEventListener('mouseleave', startAutoRotate);
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        showSlide(parseInt(dot.dataset.index));
        startAutoRotate();
      });
    });
  
    showSlide(0);
    startAutoRotate();
  }
  
  // Mobile Navigation
  function setupMobileNav() {
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav-container').appendChild(navToggle);
  
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }
  
  // Initialize everything
  document.addEventListener('DOMContentLoaded', function() {
    initFeatureRotator();
    setupForms();
    setupSmoothScrolling();
    setupMobileNav();
  
    // Add intersection observer for animations
    const animatedElements = document.querySelectorAll('.yellow-bg, .whatsapp-container, .appointment-container, .staff-management');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeIn 0.8s ease forwards';
        }
      });
    }, { threshold: 0.2 });
  
    animatedElements.forEach(element => observer.observe(element));
    showSlide(0);
    startAutoRotate();
  });
 
// Form handling
function setupForms() {
  // Signup form
  document.getElementById('signup-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your interest! We will contact you soon.');
      this.reset();
  });

  // Newsletter form
  document.getElementById('newsletter-btn').addEventListener('click', function() {
      const email = document.getElementById('newsletter-email').value;
      if (email) {
          alert('Thank you for subscribing to our newsletter!');
          document.getElementById('newsletter-email').value = '';
      } else {
          alert('Please enter your email address');
      }
  });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  initFeatureRotator();
  setupForms();
  setupSmoothScrolling();
});
