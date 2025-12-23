// Main Carousel Controller

class CarouselController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 14;
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Elements
        this.track = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.nav-prev');
        this.nextBtn = document.querySelector('.nav-next');
        this.indicators = document.querySelectorAll('.indicator');

        // Animation controller
        this.animationController = new AnimationController();
    }

    /**
     * Initialize the carousel
     */
    init() {
        // Setup event listeners
        this.setupEventListeners();

        // Initialize animations
        this.animationController.initParticles();
        this.slides.forEach(slide => {
            this.animationController.initSlideAnimations(slide);
        });

        // Preload next slide images
        this.preloadNextSlide();

        // Setup share buttons
        this.setupShareButtons();

        console.log('Carousel initialized');
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index + 1);
            });
        });

        // Touch events
        if (isTouchDevice()) {
            this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
            this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        }

        // Prevent default swipe behavior
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    /**
     * Navigate to a specific slide
     * @param {number} slideNumber - The slide number to navigate to (1-based)
     */
    goToSlide(slideNumber) {
        if (this.isAnimating || slideNumber === this.currentSlide) return;
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        this.isAnimating = true;

        // Update current slide
        const previousSlide = this.currentSlide;
        this.currentSlide = slideNumber;

        // Calculate offset
        const offset = -(slideNumber - 1) * 100;
        this.track.style.transform = `translateX(${offset}vw)`;

        // Update active states
        this.slides[previousSlide - 1].classList.remove('active');
        this.slides[slideNumber - 1].classList.add('active');

        // Update indicators
        this.updateIndicators();

        // Update navigation buttons
        this.updateNavigationButtons();

        // Preload next slide
        this.preloadNextSlide();

        // Reset animation lock after transition
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }

    /**
     * Go to next slide
     */
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    /**
     * Go to previous slide
     */
    prevSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    /**
     * Update indicator states
     */
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentSlide - 1) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    /**
     * Update navigation button states
     */
    updateNavigationButtons() {
        // Disable prev button on first slide
        if (this.currentSlide === 1) {
            this.prevBtn.disabled = true;
        } else {
            this.prevBtn.disabled = false;
        }

        // Disable next button on last slide
        if (this.currentSlide === this.totalSlides) {
            this.nextBtn.disabled = true;
        } else {
            this.nextBtn.disabled = false;
        }
    }

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} e - The keyboard event
     */
    handleKeyboard(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.prevSlide();
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'Home':
                this.goToSlide(1);
                break;
            case 'End':
                this.goToSlide(this.totalSlides);
                break;
        }
    }

    /**
     * Handle touch start
     * @param {TouchEvent} e - The touch event
     */
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }

    /**
     * Handle touch move
     * @param {TouchEvent} e - The touch event
     */
    handleTouchMove(e) {
        this.touchEndX = e.touches[0].clientX;
    }

    /**
     * Handle touch end
     * @param {TouchEvent} e - The touch event
     */
    handleTouchEnd(e) {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next slide
                this.nextSlide();
            } else {
                // Swiped right - previous slide
                this.prevSlide();
            }
        }

        // Reset
        this.touchStartX = 0;
        this.touchEndX = 0;
    }

    /**
     * Preload images for the next slide
     */
    preloadNextSlide() {
        if (this.currentSlide < this.totalSlides) {
            const nextSlide = this.slides[this.currentSlide];
            const images = nextSlide.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    }

    /**
     * Setup share button functionality
     */
    setupShareButtons() {
        const shareTwitterBtn = document.getElementById('share-twitter');
        const shareLinkedInBtn = document.getElementById('share-linkedin');
        const copyLinkBtn = document.getElementById('copy-link');

        const shareUrl = window.location.href;
        const shareText = '¡Mira el increíble 2025 de Tribu iA! 🚀 #TribuiA #IA #AI';

        if (shareTwitterBtn) {
            shareTwitterBtn.addEventListener('click', () => {
                shareOnTwitter(shareText, shareUrl);
            });
        }

        if (shareLinkedInBtn) {
            shareLinkedInBtn.addEventListener('click', () => {
                shareOnLinkedIn(shareUrl);
            });
        }

        if (copyLinkBtn) {
            copyLinkBtn.addEventListener('click', async () => {
                const success = await copyToClipboard(shareUrl);
                if (success) {
                    showToast('✅ Link copiado al portapapeles');
                } else {
                    showToast('❌ Error al copiar el link');
                }
            });
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new CarouselController();
    carousel.init();

    // Make carousel globally accessible for debugging
    window.carousel = carousel;
});
