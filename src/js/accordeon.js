import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Получаем все элементы аккордеона
  const accordionItems = document.querySelectorAll('.accordion-container .ac');

  // Устанавливаем иконку стрелки вниз видимой, а стрелку вверх скрытой для всех элементов
  accordionItems.forEach(item => {
    const arrowDown = item.querySelector('.arrow-down');
    const arrowUp = item.querySelector('.arrow-up');
    if (arrowDown && arrowUp) {
      arrowDown.style.display = 'block'; // Сделать стрелку вниз видимой
      arrowUp.style.display = 'none'; // Скрыть стрелку вверх
    }
  });

  // Инициализация аккордеона
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: currentElement => {
      const arrowDown = currentElement.querySelector('.arrow-down');
      const arrowUp = currentElement.querySelector('.arrow-up');
      if (arrowDown && arrowUp) {
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
      }
    },
    onClose: currentElement => {
      const arrowDown = currentElement.querySelector('.arrow-down');
      const arrowUp = currentElement.querySelector('.arrow-up');
      if (arrowDown && arrowUp) {
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
      }
    },
  });
});
