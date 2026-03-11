document.addEventListener('DOMContentLoaded', () => {
    
    // --- CARROSSEL ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    window.changeSlide = (step) => {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    setInterval(() => changeSlide(1), 5000);

    // --- MAPA ---
    const btnMapa = document.getElementById('btn-mapa');
    const mapContainer = document.getElementById('map-container');

    if (btnMapa && mapContainer) {
        btnMapa.addEventListener('click', () => {
            const isHidden = mapContainer.classList.toggle('hidden');
            if (!isHidden) {
                btnMapa.innerHTML = '<i class="fas fa-times"></i> Fechar Mapa';
                btnMapa.style.backgroundColor = '#ff4d4d';
                btnMapa.style.boxShadow = '0 6px 0 #b33636';
            } else {
                btnMapa.innerHTML = '<i class="fas fa-map-marker-alt"></i> Onde fica a Biblioteca?';
                btnMapa.style.backgroundColor = '';
                btnMapa.style.boxShadow = '';
            }
        });
    }
});