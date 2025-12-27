/**
 * Main Application Logic
 * Handles scroll animations and interactivity for the landing page.
 */

class App {
    constructor() {
        this.sections = document.querySelectorAll('.slide');
        this.observerOptions = {
            root: null,
            threshold: 0.2, // Trigger when 20% of the section is visible
            rootMargin: '0px'
        };
    }

    init() {
        this.setupIntersectionObserver();
        this.setupShareButtons();
        console.log('App initialized');
    }

    /**
     * Setup IntersectionObserver to trigger animations on scroll
     */
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Optional: Stop observing once anim triggered if we only want it once
                    // observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
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
                this.shareOnTwitter(shareText, shareUrl);
            });
        }

        if (shareLinkedInBtn) {
            shareLinkedInBtn.addEventListener('click', () => {
                this.shareOnLinkedIn(shareUrl);
            });
        }

        if (copyLinkBtn) {
            copyLinkBtn.addEventListener('click', async () => {
                await this.copyToClipboard(shareUrl);
            });
        }
    }

    shareOnTwitter(text, url) {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank', 'width=550,height=420');
    }

    shareOnLinkedIn(url) {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedinUrl, '_blank', 'width=550,height=520');
    }

    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('✅ Link copiado al portapapeles');
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            this.fallbackCopyTextToClipboard(text);
        }
    }

    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            this.showToast('✅ Link copiado al portapapeles');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            this.showToast('❌ Error al copiar el link');
        }
        document.body.removeChild(textArea);
    }

    showToast(message) {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
        });

        // Remove after 3s
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Initialize logic when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
