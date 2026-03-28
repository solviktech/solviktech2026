/* ============================================
   SOLVIKTECH â Main JavaScript
   Version: 1.0 Skeleton
   ============================================ */

(function () {
  'use strict';

  /* --- Header scroll shadow --- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* --- Mobile nav toggle --- */
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav   = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  /* --- Mobile dropdown toggle --- */
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const trigger = dd.querySelector('.site-nav__link');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });

  /* --- Active nav link based on current page --- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.site-nav__link, .nav-dropdown__item').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normalised = href.replace(/\/$/, '');
    if (currentPath.endsWith(normalised) || (normalised === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });

  /* --- Smooth reveal on scroll (Intersection Observer) --- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // Apply revealed state
    document.addEventListener('animationend', () => {}, false);
    const style = document.createElement('style');
    style.textContent = '[data-reveal].revealed { opacity: 1 !important; transform: none !important; }';
    document.head.appendChild(style);
  }

  /* --- WhatsApp CTA (replace with actual number) --- */
  const WHATSAPP_NUMBER = '+447410426286'; // TODO: Replace with real number
  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    const msg = encodeURIComponent(btn.dataset.whatsapp || 'Hello, I would like to enquire about Solviktech services.');
    btn.href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });

  /* --- Simple form validation placeholder --- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: Wire up to backend / Formspree / Netlify Forms
      const btn = contactForm.querySelector('[type="submit"]');
      if (btn) {
        btn.textContent = 'Message Sent â';
        btn.disabled = true;
      }
    });
  }

})();
