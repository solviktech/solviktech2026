/* ============================================
   SOLVIKTECH â Shared Components (Header + Footer)
   Auto-detects root vs pages/ depth and adjusts paths.
   ============================================ */

(function () {
  'use strict';

  /* Determine relative root path
     Works for both:
       - User site:    solviktech.github.io/pages/x.html  â root = '../'
       - Project site: solviktech.github.io/solviktech2026/pages/x.html â root = '../'
     Index pages in either case â root = ''
  */
  const inPagesDir = window.location.pathname.includes('/pages/');
  const root = inPagesDir ? '../' : '';

  const COMPONENTS = {

    header: `
<header class="site-header" role="banner">
  <div class="container">
    <div class="header-inner">

      <!-- Logo -->
      <a href="${root}index.html" class="site-logo" aria-label="Solviktech Home">
        <span class="site-logo__wordmark">SOLVIK<span>TECH</span></span>
      </a>

      <!-- Navigation -->
      <nav class="site-nav" aria-label="Main navigation">

        <a href="${root}index.html" class="site-nav__link">Home</a>

        <!-- Services dropdown -->
        <div class="nav-dropdown">
          <a href="${root}pages/services.html" class="site-nav__link" aria-haspopup="true">
            Services &#9662;
          </a>
          <div class="nav-dropdown__menu" role="menu">
            <a href="${root}pages/trade-consulting.html" class="nav-dropdown__item" role="menuitem">
              <svg class="nav-dropdown__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h12"/></svg>
              Cross-border Trade Consulting
            </a>
            <a href="${root}pages/procurement.html" class="nav-dropdown__item" role="menuitem">
              <svg class="nav-dropdown__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>
              B2B Equipment &amp; Procurement
            </a>
            <a href="${root}pages/project-structuring.html" class="nav-dropdown__item" role="menuitem">
              <svg class="nav-dropdown__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
              Business Project Structuring
            </a>
            <a href="${root}pages/brand-development.html" class="nav-dropdown__item" role="menuitem">
              <svg class="nav-dropdown__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Brand &amp; IP Development
            </a>
            <a href="${root}pages/market-entry.html" class="nav-dropdown__item" role="menuitem">
              <svg class="nav-dropdown__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Digital &amp; Market Entry
            </a>
          </div>
        </div>

        <a href="${root}index.html#about" class="site-nav__link">About</a>
        <a href="${root}index.html#contact" class="site-nav__link">Contact</a>

        <a href="${root}index.html#contact"
           class="btn-header-cta"
           data-whatsapp="Hello, I'd like to learn more about Solviktech.">
          Get in Touch
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

    </div>
  </div>
</header>`,

    footer: `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand column -->
      <div class="footer-brand">
        <div class="footer-brand__logo">SOLVIK<span>TECH</span></div>
        <p class="footer-brand__tagline">
          Bridging global markets with strategic trade consulting,
          B2B procurement, and integrated business solutions.
        </p>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          liuditata@gmail.com
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Global Operations
        </div>
      </div>

      <!-- Services column -->
      <div>
        <div class="footer-col__title">Services</div>
        <a href="${root}pages/trade-consulting.html" class="footer-nav-link">Cross-border Trade</a>
        <a href="${root}pages/procurement.html" class="footer-nav-link">B2B Procurement</a>
        <a href="${root}pages/project-structuring.html" class="footer-nav-link">Project Structuring</a>
        <a href="${root}pages/brand-development.html" class="footer-nav-link">Brand &amp; IP</a>
        <a href="${root}pages/market-entry.html" class="footer-nav-link">Market Entry</a>
      </div>

      <!-- Company column -->
      <div>
        <div class="footer-col__title">Company</div>
        <a href="${root}index.html#about" class="footer-nav-link">About Us</a>
        <a href="${root}pages/services.html" class="footer-nav-link">All Services</a>
        <a href="${root}index.html#contact" class="footer-nav-link">Contact</a>
      </div>

      <!-- Connect column -->
      <div>
        <div class="footer-col__title">Connect</div>
        <a href="#" class="footer-nav-link" data-whatsapp="Hello Solviktech">WhatsApp</a>
        <a href="mailto:liuditata@gmail.com" class="footer-nav-link">Email Us</a>
        <a href="#" class="footer-nav-link">LinkedIn</a>
      </div>

    </div>

    <div class="footer-bottom">
      <span>&copy; 2025 Solviktech. All rights reserved.</span>
      <div class="footer-bottom__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>`
  };

  /* Inject components */
  function inject() {
    document.querySelectorAll('[data-component]').forEach(el => {
      const name = el.dataset.component;
      if (COMPONENTS[name]) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = COMPONENTS[name].trim();
        el.replaceWith(wrapper.firstElementChild);
      }
    });

    /* Wire WhatsApp links */
    const WA_NUMBER = '447410426286'; // TODO: Replace with real number (digits only)
    document.querySelectorAll('[data-whatsapp]').forEach(btn => {
      const msg = encodeURIComponent(btn.dataset.whatsapp || 'Hello, I\'d like to enquire about Solviktech.');
      btn.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
      if (!btn.hasAttribute('target')) btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    });

    /* Re-init mobile nav after injection */
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav   = document.querySelector('.site-nav');
    if (navToggle && siteNav) {
      navToggle.addEventListener('click', () => {
        const open = siteNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
      });
    }

    /* Active nav link */
    const currentPath = window.location.pathname;
    document.querySelectorAll('.site-nav__link, .nav-dropdown__item').forEach(link => {
      const href = link.getAttribute('href') || '';
      const filename = href.split('/').pop();
      if (filename && currentPath.endsWith(filename)) {
        link.classList.add('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
