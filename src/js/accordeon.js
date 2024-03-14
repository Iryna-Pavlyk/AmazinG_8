import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-container .ac');
  // Устанавливаем начальное состояние стрелок для каждого элемента аккордеона
  accordionItems.forEach(item => setInitialArrowIcons(item));

  // Инициализация аккордеона с переопределением поведения стрелок при открытии и закрытии
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: element => toggleArrowIcons(element),
    onClose: element => toggleArrowIcons(element),
  });
});

// Устанавливаем начальное состояние стрелок
function setInitialArrowIcons(item) {
  const arrowDown = item.querySelector('.arrow-down');
  const arrowUp = item.querySelector('.arrow-up');
  arrowDown.style.display = 'block'; // Показать стрелку вниз
  arrowUp.style.display = 'none'; // Скрыть стрелку вверх
}

// Переключаем состояние стрелок
function toggleArrowIcons(currentElement) {
  const arrowDown = currentElement.querySelector('.arrow-down');
  const arrowUp = currentElement.querySelector('.arrow-up');
  arrowDown.style.display =
    arrowDown.style.display === 'none' ? 'block' : 'none';
  arrowUp.style.display = arrowUp.style.display === 'none' ? 'block' : 'none';
}
