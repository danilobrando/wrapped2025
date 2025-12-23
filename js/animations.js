// Animation Controller

/**
 * Handles entrance animations for slide content
 */
class AnimationController {
    constructor() {
        this.observers = new Map();
    }

    /**
     * Initialize animations for a slide
     * @param {HTMLElement} slide - The slide element
     */
    initSlideAnimations(slide) {
        const slideNumber = parseInt(slide.dataset.slide);

        // Animate stat numbers with counter
        const statNumbers = slide.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const text = stat.textContent.trim();
            const matches = text.match(/(\d[\d,]*)/);
            if (matches) {
                const number = parseInt(matches[1].replace(/,/g, ''));
                if (!isNaN(number) && number > 0) {
                    // Store original text
                    stat.dataset.originalText = text;
                    stat.dataset.targetNumber = number;
                }
            }
        });

        // Setup observer for this slide
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateSlideContent(entry.target);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        observer.observe(slide);
        this.observers.set(slideNumber, observer);
    }

    /**
     * Animate content when slide becomes active
     * @param {HTMLElement} slide - The slide element
     */
    animateSlideContent(slide) {
        // Animate stat numbers
        const statNumbers = slide.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            if (stat.dataset.targetNumber) {
                const target = parseInt(stat.dataset.targetNumber);
                animateCounter(stat, target, 2000);
            }
        });

        // Animate slide content children
        const slideContent = slide.querySelector('.slide-content');
        if (slideContent) {
            const children = slideContent.children;
            Array.from(children).forEach((child, index) => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    child.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    }

    /**
     * Create floating particles animation
     */
    initParticles() {
        const particlesContainer = document.getElementById('particles-intro');
        if (particlesContainer) {
            createParticles(particlesContainer, 30);
        }
    }

    /**
     * Cleanup observers
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Export for use in main carousel
window.AnimationController = AnimationController;
