
// Mobile Navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}

function closeMobileMenu() {
    document.getElementById('mobileNav').style.display = 'none';
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.quer ySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
});

// Typewriter Effect
function typeWriter(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Typewriter Effects
document.addEventListener('DOMContentLoaded', function() {
    // Hero typewriter
    setTimeout(() => {
        typeWriter('typewriter', "Hello, I'm Aashish Bande", 50);
    }, 500);
    
    // About typewriter with delay
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    typeWriter('aboutTypewriter', "I'm a dynamic cybersecurity professional with a B.Tech in Mechanical Engineering and 1+ year as a Security Analyst at Pragma Edge Inc. Skilled in vulnerability assessments, penetration testing, SAST, and incident response. Fueled by a passion for AI, blockchain, cloud, and crypto.", 20);
                }, 500);
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
});

// Scroll Animation for Sections
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // For now, just show success message
    // In a real implementation, you would send this to a backend service
    alert('Thank you for your message! I\'ll get back to you soon.');
    event.target.reset();
    
    // Optional: You can integrate with services like Formspree, Netlify Forms, etc.
    // Example with Formspree:
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            event.target.reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    }).catch(error => {
        alert('There was an error sending your message. Please try again.');
    });
    */
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});

// Add glitch effect to hover elements
document.addEventListener('DOMContentLoaded', function() {
    const glitchElements = document.querySelectorAll('.logo, .project-card h4');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.5s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
});
