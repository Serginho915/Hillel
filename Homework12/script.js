document.addEventListener('DOMContentLoaded', () => {
    const listImage = document.querySelector('.list-image');
    const arrowLeft = document.querySelector('.slider-arrow-left');
    const arrowRight = document.querySelector('.slider-arrow-right');
    const dotsContainer = document.querySelector('.slider-dots');

    let arrImages = [];
    let arrDots = [];
    let currentIndex = 0;

    document.querySelectorAll('.list-item').forEach((image) => {
        arrImages.push(image.getAttribute('src'));
    });

    arrImages.forEach((src, index) => {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
        arrDots.push(dot);
        dotsContainer.appendChild(dot);
    });

    function updateSlides() {
        document.querySelectorAll('.list-item').forEach((image, index) => {
            image.classList.toggle('active', index === currentIndex);
        });

        arrDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        arrowLeft.style.display = currentIndex === 0 ? 'none' : 'block';
        arrowRight.style.display = currentIndex === arrImages.length - 1 ? 'none' : 'block';
    }

    arrowRight.addEventListener('click', () => {
        if (currentIndex < arrImages.length - 1) {
            currentIndex++;
            updateSlides();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });

    updateSlides();
});
    