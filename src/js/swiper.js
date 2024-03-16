// Ініціалізація Swiper
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

export const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard],
  spaceBetween: 16,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

new Swiper('.projectsSwiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 'auto',
  loop: true,
  keyboard: {
    enabled: true,
  },
  spaceBetween: 500,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});
