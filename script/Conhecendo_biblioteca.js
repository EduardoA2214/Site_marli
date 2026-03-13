document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    window.changeSlide = (step) => {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    const autoPlayDelay = 5000;
    let autoPlayTimer = setInterval(() => changeSlide(1), autoPlayDelay);

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        carousel.addEventListener('mouseleave', () => {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(() => changeSlide(1), autoPlayDelay);
        });
    }
});
