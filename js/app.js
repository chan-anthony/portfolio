// Animations
const observer = new IntersectionObserver((entities) => {
  entities.forEach((entity) => {
    if (entity.isIntersecting) {
      entity.target.classList.add('show');
    } else {
      entity.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden,.hidden-right');
hiddenElements.forEach((element) => observer.observe(element));

// Get current year
document.getElementById('year').innerHTML = new Date().getFullYear();
