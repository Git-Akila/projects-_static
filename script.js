let currentSlide = 0;

document.querySelector('.next').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

function showSlide(index) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    currentSlide = index;

    const translateValue = -index * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}
