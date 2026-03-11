/* ─── Aspire Theme JS ──────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ── Finish selector ──────────────────────────────────────────────────────────
  document.querySelectorAll('.fin-card').forEach(function (card) {
    card.addEventListener('click', function () {
      document.querySelectorAll('.fin-card').forEach(function (c) {
        c.classList.remove('active');
      });
      card.classList.add('active');
    });
  });

  // ── Newsletter forms — basic validation ─────────────────────────────────────
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('.newsletter-form__input');
      if (!input || !input.value.includes('@')) {
        input && (input.style.borderColor = '#FF5C00');
        return;
      }
      // Shopify form submission is handled by the native form action
      form.submit();
    });
  });

  // ── Wishlist toggle (visual only — hook into real app) ────────────────────
  document.querySelectorAll('.prod-card__wish').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var svg = btn.querySelector('svg');
      if (svg) {
        var filled = svg.getAttribute('fill') !== 'none';
        svg.setAttribute('fill', filled ? 'none' : '#FF5C00');
      }
    });
  });

  // ── Sticky header shadow on scroll ──────────────────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }
})();
