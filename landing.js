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

    // Animated counter for a statistics section
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

    // Add this statistic section to your HTML
    const statsSection = `
        <div class="row stats-section my-5">
            <div class="col-md-4 text-center">
                <h3 id="userCount">0</h3>
                <p>Happy Users</p>
            </div>
            <div class="col-md-4 text-center">
                <h3 id="waterSaved">0</h3>
                <p>Gallons Saved</p>
            </div>
            <div class="col-md-4 text-center">
                <h3 id="leaksPrevented">0</h3>
                <p>Leaks Prevented</p>
            </div>
        </div>
    `;
    document.querySelector('.features').insertAdjacentHTML('afterend', statsSection);

    // Animate the statistics when they come into view
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

    // Add a simple form validation for a newsletter signup
    const form = document.createElement('form');
    form.innerHTML = `
        <div class="row newsletter-signup my-5">
            <div class="col-md-8 offset-md-2">
                <h3 class="text-center mb-4">Stay Updated</h3>
                <div class="input-group">
                    <input type="email" class="form-control" placeholder="Enter your email" required>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.container').appendChild(form);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        }
    });

    // Add a back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

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
