const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const slidList = document.querySelectorAll('.slider__item');
const slidListLength = slidList.length - 1;

const move = (type) => {
    let currentSlideIdx = null;
    slidList.forEach((item, idx) => {
        if (item.classList.contains('slider__item_active')) {
            currentSlideIdx = idx;
        }
    });
    let nextSlideIdx = type === 'next' ? currentSlideIdx + 1 : currentSlideIdx - 1;
    slidList[currentSlideIdx].classList.remove('slider__item_active');
    if (type === 'next') {
        if (currentSlideIdx < slidListLength) {
            slidList[nextSlideIdx].classList.add('slider__item_active');
        } else {
            slidList[0].classList.add('slider__item_active');
        }
    }
    if (type === 'prev') {
        if (currentSlideIdx <= 0) {
            slidList[slidListLength].classList.add('slider__item_active');
        } else {
            slidList[nextSlideIdx].classList.add('slider__item_active');
        }
    }
}

prev.addEventListener('click', () => move('prev'));
next.addEventListener('click', () => move('next'));
