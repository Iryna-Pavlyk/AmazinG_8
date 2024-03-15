import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация аккордеона для секции FAQ
  initializeAccordion('.accordion-container');

  // Инициализация аккордеона для секции About
  initializeAccordion('.accordion-container-about');
});

function initializeAccordion(selector) {
  const accordionItems = document.querySelectorAll(`${selector} .ac`);
  accordionItems.forEach(item => setInitialArrowIcons(item));

  new Accordion(selector, {
    duration: 400,
    showMultiple: true,
    onOpen: element => {
      toggleArrowIcons(element);
      setAriaExpanded(element, true); // Устанавливаем aria-expanded в true
    },
    onClose: element => {
      toggleArrowIcons(element);
      setAriaExpanded(element, false); // Устанавливаем aria-expanded в false
    },
  });
}

// Устанавливаем начальное состояние стрелок для каждого элемента аккордеона
function setInitialArrowIcons(item) {
  const arrowDown = item.querySelector('.arrow-down');
  const arrowUp = item.querySelector('.arrow-up');
  arrowDown.style.display = 'block'; // Показать стрелку вниз
  arrowUp.style.display = 'none'; // Скрыть стрелку вверх
}

// Переключаем состояние стрелок при открытии/закрытии аккордеона
function toggleArrowIcons(currentElement) {
  const arrowDown = currentElement.querySelector('.arrow-down');
  const arrowUp = currentElement.querySelector('.arrow-up');
  arrowDown.style.display =
    arrowDown.style.display === 'none' ? 'block' : 'none';
  arrowUp.style.display = arrowUp.style.display === 'none' ? 'block' : 'none';
}

// Функция для установки значения aria-expanded
function setAriaExpanded(element, expanded) {
  const triggerButton = element.querySelector('.ac-trigger');
  triggerButton.setAttribute('aria-expanded', expanded);
}
