// ==========================================
// Navigation Background on Scroll
// ==========================================
const navbar = document.getElementById('mainNav');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleNavbarScroll);

// Call on page load in case page is already scrolled
handleNavbarScroll();

// ==========================================
// Back to Top Button
// ==========================================
const backToTopButton = document.getElementById('backToTop');

function handleBackToTopVisibility() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Show/hide back to top button on scroll
window.addEventListener('scroll', handleBackToTopVisibility);

// Smooth scroll to top when clicked
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// Gallery Filtering
// ==========================================
const filterButtons = document.querySelectorAll('.btn-filter');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    // Add fade-in animation
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ==========================================
// Artwork Modal Population
// ==========================================
const artworkModal = document.getElementById('artworkModal');

if (artworkModal) {
    artworkModal.addEventListener('show.bs.modal', (event) => {
        // Get the button that triggered the modal
        const button = event.relatedTarget;
        
        // Extract info from data-* attributes
        const title = button.getAttribute('data-title');
        const year = button.getAttribute('data-year');
        const medium = button.getAttribute('data-medium');
        const dimensions = button.getAttribute('data-dimensions');
        const description = button.getAttribute('data-description');
        const image = button.getAttribute('data-image');
        
        // Update the modal's content
        const modalTitle = artworkModal.querySelector('#modalTitle');
        const modalYear = artworkModal.querySelector('#modalYear');
        const modalMedium = artworkModal.querySelector('#modalMedium');
        const modalDimensions = artworkModal.querySelector('#modalDimensions');
        const modalDescription = artworkModal.querySelector('#modalDescription');
        const modalImage = artworkModal.querySelector('#modalImage');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalYear) modalYear.textContent = year;
        if (modalMedium) modalMedium.textContent = medium;
        if (modalDimensions) modalDimensions.textContent = dimensions;
        if (modalDescription) modalDescription.textContent = description;
        if (modalImage) {
            modalImage.src = image;
            modalImage.alt = title;
        }
    });
}

// ==========================================
// Contact Form Validation and Submission
// ==========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // Check if form is valid
        if (contactForm.checkValidity()) {
            // Form is valid - show success message
            formSuccess.style.display = 'block';
            
            // Reset the form
            contactForm.reset();
            contactForm.classList.remove('was-validated');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // Form is invalid - show validation messages
            contactForm.classList.add('was-validated');
        }
    });
    
    // Custom validation for email field
    const emailInput = contactForm.querySelector('#email');
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailInput.setCustomValidity('Please enter a valid email address.');
            } else {
                emailInput.setCustomValidity('');
            }
        });
    }
}

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for internal anchors (not just #)
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// Close Mobile Menu on Link Click
// ==========================================
const offcanvasElement = document.getElementById('navbarOffcanvas');
if (offcanvasElement) {
    const offcanvasLinks = offcanvasElement.querySelectorAll('.nav-link');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement);
    
    offcanvasLinks.forEach(link => {
        link.addEventListener('click', () => {
            bsOffcanvas.hide();
        });
    });
}

// ==========================================
// Lazy Loading Images (Progressive Enhancement)
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// Add Animation on Scroll (Optional Enhancement)
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
const animateOnScroll = document.querySelectorAll('.artwork-card, .section-title, .about-text');
animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ==========================================
// Initialize Tooltips (if using Bootstrap tooltips)
// ==========================================
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%cWelcome to Izo Arts Uganda', 'font-size: 20px; font-weight: bold; color: #d35400;');
console.log('%cContemporary Ugandan Art | Stories Painted in Color and Soul', 'font-size: 14px; color: #555;');
console.log('%cWebsite by Izo Arts Uganda © 2025', 'font-size: 12px; color: #999;');
