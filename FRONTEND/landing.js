document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
    });
    
    // Animated counter for statistics
    function animateValue(obj, start, end, duration) {
         let startTimestamp = null;
    
         const step = (timestamp) => {
             if (!startTimestamp) startTimestamp = timestamp;
    
             const progress = Math.min((timestamp - startTimestamp) / duration, 1);
             obj.innerHTML = Math.floor(progress * (end - start) + start);
    
             if (progress < 1) {
                 window.requestAnimationFrame(step);
             }
         };
    
         window.requestAnimationFrame(step);
    }
    
    // Animate statistics on scroll into view
    const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 animateValue(document.getElementById('userCount'), 0, 10000, 2000);
                 animateValue(document.getElementById('waterSaved'), 0, 1000000, 2000);
                 animateValue(document.getElementById('leaksPrevented'), 0, 5000, 2000);
                 observer.unobserve(entry.target);
             }
         });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats-section'));
    
    // Newsletter signup form submission
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', function(e) {
         e.preventDefault();
         const email = this.querySelector('input[type=email]').value;
    
         alert(`Thank you for subscribing with ${email}!`);
         this.reset();
    });
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
         if (window.pageYOffset > 100) {
             backToTopButton.style.display = 'block';
         } else {
             backToTopButton.style.display = 'none';
         }
    });
    
    backToTopButton.addEventListener('click', () => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    });
