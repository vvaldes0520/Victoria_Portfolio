window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const sections = document.querySelectorAll('section[id]');
const tabs = document.querySelectorAll('.nav-tab');

const homeSections = ['hero', 'experience', 'projects-home', 'contact'];

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tabs.forEach(t => t.classList.remove('active'));

      if (homeSections.includes(entry.target.id)) {
        const homeTab = document.querySelector('.nav-tab[data-section="hero"]');
        if (homeTab) homeTab.classList.add('active');
      } else {
        const match = document.querySelector(`.nav-tab[data-section="${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(s => io.observe(s));