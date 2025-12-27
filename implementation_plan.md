# Convert Wrapped Carousel to Professional Landing Page

The goal is to transform the current slide-based carousel "Wrapped" experience into a modern, professional vertical scrolling landing page.

## User Review Required
> [!IMPORTANT]
> This change will remove the "slide" behavior (click to next) and replace it with a standard vertical scrolling website. The "Wrapped" feel will be maintained through visual design, but the interaction model will change.

## Proposed Changes

### HTML Structure (`index.html`)
- Remove `.carousel-container` and `.carousel-track` wrappers or change their semantic meaning to be just layout containers.
- Remove `<nav class="carousel-nav">` (next/prev buttons).
- Remove `<div class="carousel-indicators">` (bottom dots), or optionally replace with a side navigation scroll spy.
- Change `cta-button` in the hero section to scroll to the next section instead of clicking a hidden "next" button.
- Ensure all `<section class="slide ...">` elements are stacked vertically.

### CSS Styling
- **Global**:
    - Enable vertical scrolling on `body` or main container.
    - Add smooth scrolling behavior (`html { scroll-behavior: smooth; }`).
- **Slides**:
    - Change `.slide` from maybe absolute/flex positioning to `min-height: 100vh` block elements.
    - Ensure backgrounds (gradients/images) work well in a continuous flow.
- **Navigation**:
    - Remove styles for the old navigation buttons.
    - Add styles for a potential "sticky header" if we decide to add one (optional, maybe just simple scrolling is enough for now).
- **Animations**:
    - Use `IntersectionObserver` in JS to trigger animations when sections scroll into view, instead of when the slide becomes "active".

### JavaScript Logic
- **`js/carousel.js`**:
    - **DELETE** or massively refactor.
    - Remove the `CarouselController` class functionality that handles strict slide transitions, touch swipes for slides, and keyboard navigation that prevents scrolling.
    - **NEW**: Implement a `ScrollObserver` or similar to handle "fade-in on scroll" animations using `IntersectionObserver`.

### `css/slides.css` & `css/global.css`
- Adjust specific slide styles to ensure they look good as full-screen sections.
- Fix responsiveness for mobile (stacking content naturally).

## Verification Plan

### Manual Verification
- **Browser Tool**: Open the `index.html` file in the browser.
- **Scroll Test**: Verify that I can scroll down through all sections.
- **Visual Check**: Ensure animations trigger correctly as I scroll.
- **Link Check**: Click the CTA button in the hero and ensure it smooth-scrolls to the first content section.
- **Mobile Emulation**: Check how it looks on mobile view (using browser tool resizing if needed, or just mental check of media queries).
