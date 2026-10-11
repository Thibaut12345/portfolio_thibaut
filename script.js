// Update the copyright year automatically.
document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Gentle reveal animations while scrolling.
if ('IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll(
    '.new-section-header, .new-project, .new-about-grid > div, .interior-title, .cv-entry, .skills-list article'
  );
  targets.forEach((element) => element.classList.add('reveal'));
  document.body.classList.add('motion-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  targets.forEach((element) => observer.observe(element));
}
