/* ==========================================================================
   MAIN MODULE
   Small page-level behaviors that don't warrant their own file.
   ========================================================================== */
(function () {
  // Back-to-top button
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    window.addEventListener(
      'scroll',
      () => toTop.classList.toggle('is-visible', window.scrollY > 900),
      { passive: true }
    );
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  // Current year in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
