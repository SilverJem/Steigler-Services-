// =============================================
//  CONTACT PAGE — Specific JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── FAQ Accordion ───────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');

        // Close all others
        faqItems.forEach(other => {
          const otherBtn = other.querySelector('.faq-q');
          const otherAns = other.querySelector('.faq-a');
          if (otherBtn && otherAns) {
            otherBtn.classList.remove('open');
            otherAns.classList.remove('open');
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this one
        if (!isOpen) {
          btn.classList.add('open');
          answer.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ── Project impact bars (pi-fill, separate from metric-fill) ──
  const piFills = document.querySelectorAll('.pi-fill');
  if (piFills.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const target = fill.getAttribute('data-width');
          setTimeout(() => {
            fill.style.width = target + '%';
          }, 300);
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });

    piFills.forEach(f => observer.observe(f));
  }

  // ── Services tabs scroll highlight ─────────
  const stabs = document.querySelectorAll('.stab');
  if (stabs.length) {
    stabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        stabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // Update active tab on scroll
    const sections = document.querySelectorAll('.service-section');
    if (sections.length) {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            stabs.forEach(t => {
              t.classList.toggle('active', t.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { threshold: 0.4, rootMargin: '-100px 0px -40% 0px' });

      sections.forEach(s => scrollObserver.observe(s));
    }
  }

  // ── Form validation feedback ────────────────
  const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.required && !input.value.trim()) {
        input.style.borderColor = '#e74c3c';
      } else {
        input.style.borderColor = '';
      }
    });

    input.addEventListener('input', () => {
      input.style.borderColor = '';
    });
  });

});
