let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

function updateSliderDimensions() {
    let sliderWidth = document.querySelector('.slider').clientWidth;
    document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;

    document.querySelectorAll('.slider--item').forEach(item => {
        item.style.width = `${sliderWidth}px`;
    });

    updateMargin();
    updateBullets();
}

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
    updateBullets();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
    updateBullets();
}

function selectSlide(slideIndex) {
    
    currentSlide = slideIndex;
    updateMargin();
    updateBullets();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = currentSlide * sliderItemWidth;
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

function updateBullets() {
    let bullets = document.querySelectorAll('.slider--bullet');
    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

window.addEventListener('resize', updateSliderDimensions);
window.addEventListener('load', updateSliderDimensions);

setInterval(goNext, 2000);