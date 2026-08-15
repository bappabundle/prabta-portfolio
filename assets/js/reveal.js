/* ==========================================================================
   REVEAL MODULE
   Fades/slides .reveal elements into view as they enter the viewport.
   Respects prefers-reduced-motion by revealing everything immediately.
   ========================================================================== */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
    observer.observe(el);
  });
})();
