// CHAMP teaser site — entry script
// Reveal-on-scroll, parallax, and per-visit accent variation.

// === Reveal on scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// === Parallax ===
const parallaxEls = document.querySelectorAll('.parallax-shape');
let ticking = false;
function updateParallax() {
  const scrollY = window.scrollY;
  parallaxEls.forEach((el) => {
    const speed = parseFloat(el.dataset.speed) || 0;
    el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// === Per-visit accent variation ===
(function variation() {
  const seed = Math.floor(Math.random() * 4);
  document.documentElement.dataset.variation = seed;

  // Randomize which How step gets the accent green background
  const steps = document.querySelectorAll('.how-step');
  if (steps.length === 3) {
    steps.forEach((s) => s.classList.remove('alt'));
    const altIndex = Math.floor(Math.random() * 3);
    steps[altIndex].classList.add('alt');
  }

  // Randomize ticker speed
  const track = document.querySelector('.ticker-track');
  if (track) {
    const dur = 35 + Math.random() * 15;
    track.style.animationDuration = `${dur}s`;
  }

  // Randomize which theory card gets accent / dark
  const theoryCards = document.querySelectorAll('.theory-card');
  theoryCards.forEach((c) => c.classList.remove('accent', 'dark'));
  if (theoryCards.length >= 5) {
    const indices = [0, 1, 2, 3, 4];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    theoryCards[indices[0]].classList.add('accent');
    theoryCards[indices[1]].classList.add('dark');
  }
})();
