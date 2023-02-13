const observer = new IntersectionObserver((entities) => {
  entities.forEach((entity) => {
    if (entity.isIntersecting) {
      entity.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden,.hidden-right');
hiddenElements.forEach((element) => observer.observe(element));
