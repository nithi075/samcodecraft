# Sam – Freelance Developer portfolio (React + Vite)

Three Webflow exports (Home, Works, About) merged into one React + React Router project.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
```
index.html                    Webflow runtime scripts (jQuery + 2 chunks) + #root
public/images/                all images / fonts from the 3 zips (merged)
public/vendor/                Webflow runtime (needed for Lottie + hover interactions)
src/
  main.jsx, App.jsx           router: /  /works  /about  (+ placeholders)
  styles/                     webflow.css, custom-shared.css, lenis.css
  components/
    PageShell.jsx             shared layout: Contact, Cursor, Menu + starts/stops all scripts
    Menu / Contact / Cursor / Footer / GlobalStyles   (shared markup, previously copy-pasted 3x)
    TransitionLink.jsx        fade-out + React Router navigation, adds w--current
  pages/
    Home.jsx Works.jsx About.jsx   page markup converted to JSX (+ page css)
    Placeholder.jsx           /works/:slug + 404 (pages that were not in the zips)
  legacy/                     original GSAP/Lenis/Lottie/Swiper code, one file per page
  lib/scope.js                tracks listeners/SplitType/Lottie/Swiper and disposes them on route change
```

## Notes
- The zips were *rendered snapshots*, so GSAP/SplitType/Swiper/Lottie leftovers (inline
  transforms, split word spans, cloned marquee items, 4 MB inline Lottie SVG) were removed
  and the scripts re-create them at runtime.
- Lottie JSON and background videos are still loaded from Webflow's CDN (cdn.prod.website-files.com).
- The contact form used Webflow's form backend; it now opens a pre-filled mail
  (see `src/components/Contact.jsx`). Plug in your own endpoint there if needed.
- Project pages (`/works/handshaik`, ...) are placeholders – add real pages and routes in `App.jsx`.
- `<StrictMode>` is deliberately not used (imperative animation setup).

## Content (Sam)
- Instagram: https://www.instagram.com/sam.codecraft/  ·  Phone: +91 86670 41407
- Contact form opens a pre-filled WhatsApp chat (`src/components/Contact.jsx`).
- Templates section/page removed.
