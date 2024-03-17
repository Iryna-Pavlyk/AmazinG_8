// Ініціалізація Swiper
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

export const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard],
   slidesPerView: 4,
  allowTouchMove: true,
  slideToClickedSlide: true,
  observer: true,
	observeParents: true,
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

new Swiper('.about-swiper-container', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'about-slide-active',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
