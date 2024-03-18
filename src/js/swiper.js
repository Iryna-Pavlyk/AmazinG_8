// Ініціалізація Swiper
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const buttonsProjects = document.querySelector('.nav-buttons-style');
const previousButtonProjects = document.querySelector(
  '.previous-project-button'
);
const nextButtonProjects = document.querySelector('.next-project-button');

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
  on: {
    slideChange: function () {
      checkEndOfList();
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
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
  keyboard: {
    enabled: true,
  },
  spaceBetween: 3200,
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

// reviews-checkEndOfList
function checkEndOfList() {
  const nextButton = document.querySelector('.next-reviews-button');
  const prevButton = document.querySelector('.previous-reviews-button');

  if (swiper.isBeginning) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (swiper.isEnd) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function buttonsProjectsHandler(event) {
  console.log(nextButtonProjects.firstElementChild.style);
  if (nextButtonProjects.classList.contains('swiper-button-disabled')) {
    nextButtonProjects.style.border = '1px solid rgba(250, 250, 250, 0.2)';
    nextButtonProjects.classList.add('no-hover');
    nextButtonProjects.firstElementChild.style.stroke = '#3B3B3B';
  } else {
    nextButtonProjects.style.border = '1px solid rgba(250, 250, 250, 0.5)';
    nextButtonProjects.classList.remove('no-hover');
    nextButtonProjects.firstElementChild.style.stroke = '#fafafa';
  }

  if (previousButtonProjects.classList.contains('swiper-button-disabled')) {
    previousButtonProjects.style.border = '1px solid rgba(250, 250, 250, 0.2)';
    previousButtonProjects.classList.add('no-hover');
    previousButtonProjects.firstElementChild.style.stroke = '#3B3B3B';
  } else {
    previousButtonProjects.style.border = '1px solid rgba(250, 250, 250, 0.5)';
    previousButtonProjects.classList.remove('no-hover');
    previousButtonProjects.firstElementChild.style.stroke = '#fafafa';
  }
}

buttonsProjects.addEventListener('click', buttonsProjectsHandler);
