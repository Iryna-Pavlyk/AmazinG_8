// Ініціалізація Swiper
import Swiper from 'swiper';
import 'swiper/css';

    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 35,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    });
