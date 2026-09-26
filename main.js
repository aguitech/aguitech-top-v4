/* AGUITECH top v4 — light Adecco theme. Defensive. */

const ready = (cb) => {
  if (document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
};

ready(() => {
  // Reveal on scroll (works with and without GSAP)
  try {
    if (window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      const els = document.querySelectorAll('.sec-h, .sec-lead, .stats-grid, .cards-3, .proj-grid, .marcas-strip, .certs-grid, .tl-item, .testi-card, .bio-wrap, .form-block, .cta-big, .chip-grid');
      const io = new IntersectionObserver(entries => {
        for (const e of entries) if (e.isIntersecting){
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }, { threshold: 0.12 });
      els.forEach(el => io.observe(el));
    } else {
      document.querySelectorAll('.sec-h, .sec-lead, .stats-grid, .cards-3, .proj-grid, .marcas-strip, .certs-grid, .tl-item, .testi-card, .bio-wrap, .form-block, .cta-big, .chip-grid')
        .forEach(el => el.classList.add('is-in'));
    }
  } catch (e) { console.warn('reveal fail', e); }

  // Smooth select focus
  document.querySelectorAll('select').forEach(s => {
    s.addEventListener('focus', () => s.parentElement.style.color = 'var(--cyan-500)');
    s.addEventListener('blur', () => s.parentElement.style.color = '');
  });
});
