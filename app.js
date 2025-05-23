const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => observer.observe(fader));


const projectCards = document.querySelectorAll('.project-card');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
});

projectCards.forEach(card => {
  observer1.observe(card);
});
