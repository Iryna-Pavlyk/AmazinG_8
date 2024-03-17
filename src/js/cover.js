document.addEventListener('DOMContentLoaded', function initialize() {
  function activateAnimation(entries, observer) {
    entries.forEach(function (entry) {
      const imgs = entry.target.querySelectorAll('.my-covers-item-img');

      if (entry.isIntersecting) {
        imgs.forEach(function (img) {
          img.style.animation = 'none';
          requestAnimationFrame(function resetAnimation() {
            setTimeout(resetAndApplyAnimation, 50, img);
          });
        });
      } else {
  
      }
    });
  }

  function resetAndApplyAnimation(img) {
    img.style.animation = 'slideInFromBottomRight 2s ease-in-out forwards';
  }

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(activateAnimation, observerOptions);

  document.querySelectorAll('.covers-item').forEach(function (section) {
    observer.observe(section);
  });
});