// Features Rotator
function initFeatureRotator() {
  const slides = document.querySelectorAll('.feature-slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
      showSlide(currentIndex + 1);
  }

  // Auto-rotate every 3 seconds
  function startAutoRotate() {
      interval = setInterval(nextSlide, 3000);
  }

  // Pause on hover
  const rotator = document.querySelector('.rotator-container');
  rotator.addEventListener('mouseenter', () => clearInterval(interval));
  rotator.addEventListener('mouseleave', startAutoRotate);

  // Dot navigation
  dots.forEach(dot => {
      dot.addEventListener('click', () => {
          clearInterval(interval);
          showSlide(parseInt(dot.dataset.index));
          startAutoRotate();
      });
  });

  // Start the rotator
  showSlide(0);
  startAutoRotate();
}

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