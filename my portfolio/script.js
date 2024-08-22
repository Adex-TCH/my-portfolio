document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const nav = document.querySelector('#header nav ul');

nav.addEventListener('click', () => {
  nav.classList.toggle('show');
});
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      project.classList.add('visible');
    }
  }, { threshold: 0.5 }); 
  observer.observe(project);
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});