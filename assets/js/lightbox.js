/* ==========================================================================
   LIGHTBOX MODULE
   Any <img data-lightbox> opens full-size in an overlay on click.
   ========================================================================== */
(function () {
  const triggers = document.querySelectorAll('img[data-lightbox]');
  if (!triggers.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = `
    <button class="lightbox__close" aria-label="Close image preview">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
        <path d="M6 6l12 12M18 6L6 18"/>
      </svg>
    </button>
    <img alt="" />
  `;
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox__close');
  let lastTrigger = null;

  const open = (src, alt, triggerEl) => {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lastTrigger = triggerEl || null;
    closeBtn.focus();
  };
  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  };

  triggers.forEach((img) => {
    img.addEventListener('click', () => open(img.currentSrc || img.src, img.alt, img));
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();
