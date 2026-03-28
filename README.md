# Solviktech Website â v1.0 Skeleton

## Structure

```
solviktech.github.io/
âââ index.html              â Homepage
âââ pages/
â   âââ services.html       â Services overview
â   âââ trade-consulting.html
â   âââ procurement.html
â   âââ project-structuring.html
â   âââ brand-development.html
â   âââ market-entry.html
âââ css/
â   âââ style.css           â All styles (single file, no dependencies)
âââ js/
â   âââ components.js       â Shared header + footer injection
â   âââ main.js             â Interactions, scroll, WhatsApp wiring
âââ .nojekyll               â Disables Jekyll processing on GitHub Pages
âââ README.md
```

## Deploy to GitHub Pages

1. Push all files to your `solviktech/solviktech.github.io` repository
2. Go to **Settings â Pages â Source** â set to `main` branch, `/ (root)`
3. Site will be live at `https://solviktech.github.io`

## TODOs before going live

- [ ] Replace `liuditata@gmail.com` with real email (components.js + index.html)
- [ ] Replace WhatsApp number `1234567890` in `js/components.js` (line ~87)
- [ ] Fill in all `[Placeholder: ...]` text throughout the pages
- [ ] Add real company stats to Hero and Stats Bar (index.html)
- [ ] Add a favicon (`favicon.ico` or `favicon.png` in root)
- [ ] Replace all `[ Image / ... Placeholder ]` blocks with real visuals
- [ ] Wire contact form to Formspree / Netlify Forms / backend
- [ ] Add LinkedIn + social links in footer (components.js)

## Iteration Guide

Each service page follows the same section structure:
1. **Page Hero** â title, description, CTA
2. **Overview** â what this service covers (text + visual)
3. **Capabilities** â key deliverables as feature list
4. **Process** â 4-step engagement model
5. **Who Is This For** â ideal client profiles (3 cards)
6. **Case Studies** â placeholder for future examples
7. **CTA Banner** â inquiry + WhatsApp
8. **Service Nav** â prev / next service navigation
