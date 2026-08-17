document.addEventListener('DOMContentLoaded', () => {
  const pdfViewer = document.getElementById('pdf-viewer');
  const pdfFrame = document.getElementById('pdf-frame');
  const pdfClose = document.querySelector('.pdf-viewer__close');
  const pdfBackdrop = document.querySelector('.pdf-viewer__backdrop');
  const pdfCards = document.querySelectorAll('.pdf-card');

  if (!pdfViewer || !pdfFrame || !pdfClose || !pdfBackdrop || !pdfCards.length) {
    return;
  }

  function openPdf(pdf) {
    if (!pdf) return;

    pdfFrame.src = pdf;
    pdfViewer.classList.add('is-open');
    pdfViewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePdf() {
    pdfViewer.classList.remove('is-open');
    pdfViewer.setAttribute('aria-hidden', 'true');
    pdfFrame.src = '';
    document.body.style.overflow = '';
  }

  pdfCards.forEach(card => {
    card.addEventListener('click', () => {
      openPdf(card.dataset.pdf);
    });
  });

  pdfClose.addEventListener('click', closePdf);
  pdfBackdrop.addEventListener('click', closePdf);

  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      pdfViewer.classList.contains('is-open')
    ) {
      closePdf();
    }
  });
});