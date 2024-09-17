let currentIndex = 0;
function updateSlides() {
    const slides = document.querySelectorAll('.movie');
    const totalSlides = slides.length;
    const angle = 360 / totalSlides;
    const distance = Math.min(window.innerWidth, window.innerHeight) / 2.5;
    const spacing = 150;

    slides.forEach((slide, index) => {
        const offset = (index - currentIndex + totalSlides) % totalSlides;
        const theta = offset * angle;
        const scale = offset === 0 ? 1.5 : 0.8;
        const zIndex = offset === 0 ? 2 : 1;
        const opacity = offset === 0 ? 1 : 0.5;

        slide.style.transform = `rotateY(${theta}deg) translateZ(${distance + spacing}px) scale(${scale})`;
        slide.style.zIndex = zIndex;
        slide.style.opacity = opacity;

        if (offset === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

document.addEventListener('keydown', (event) => {
    const slides = document.querySelectorAll('.movie');
    const totalSlides = slides.length;
    
    switch (event.keyCode) {
        case 37:
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlides();
            break;
        case 39:
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
            break;
    }
    
});

updateSlides();

