// Portfolio interactivity: tab switching + scroll-reveal animations
(function () {
  'use strict';

  // ─── Tab switching (home page only — guarded so case-study pages don't error) ───
  const tabWork = document.getElementById('tab-work');
  const tabExp  = document.getElementById('tab-experiments');
  const viewWork = document.getElementById('view-work');
  const viewExp  = document.getElementById('view-experiments');

  if (tabWork && tabExp && viewWork && viewExp) {
    const setView = (view) => {
      const isWork = view === 'work';
      viewWork.hidden = !isWork;
      viewExp.hidden  = isWork;
      tabWork.classList.toggle('tab--active', isWork);
      tabExp.classList.toggle('tab--active', !isWork);
      tabWork.setAttribute('aria-selected', isWork ? 'true' : 'false');
      tabExp.setAttribute('aria-selected', !isWork ? 'true' : 'false');
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      revealOnScroll();
    };
    tabWork.addEventListener('click', () => setView('work'));
    tabExp.addEventListener('click',  () => setView('experiments'));
  }

  // ─── Scroll-reveal via IntersectionObserver ───
  function revealOnScroll() {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length || !('IntersectionObserver' in window)) {
      nodes.forEach(n => { n.style.opacity = '1'; n.style.transform = 'none'; });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const n = entry.target;
          n.style.opacity = '1';
          n.style.transform = 'none';
          // Clear inline transform after the reveal animation finishes so
          // CSS :hover rules (which set transform) aren't overridden.
          const clear = (e) => {
            if (e.propertyName !== 'transform') return;
            n.style.transform = '';
            n.style.transition = '';
            n.style.transitionDelay = '';
            n.removeEventListener('transitionend', clear);
          };
          n.addEventListener('transitionend', clear);
          observer.unobserve(n);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

    nodes.forEach(n => {
      if (n.dataset.reveal === 'hero') return; // hero uses CSS fadeUp animation
      const rect = n.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        n.style.opacity = '0';
        n.style.transform = 'translateY(24px)';
        n.style.transition = 'opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)';
        const delay = n.style.getPropertyValue('--reveal-delay');
        if (delay) n.style.transitionDelay = delay;
        observer.observe(n);
      } else {
        // Already in viewport at load — no animation needed, clear any inline
        // transform so CSS :hover rules can take effect.
        n.style.opacity = '';
        n.style.transform = '';
      }
    });

    // Safety net: if hero animation didn't fire, force visible
    setTimeout(() => {
      document.querySelectorAll('[data-reveal="hero"]').forEach(n => {
        if (getComputedStyle(n).opacity === '0') {
          n.style.animation = 'none';
          n.style.opacity = '1';
          n.style.transform = 'none';
        }
      });
    }, 1300);
  }

  // Initialize after layout settles
  requestAnimationFrame(() => requestAnimationFrame(revealOnScroll));
})();
