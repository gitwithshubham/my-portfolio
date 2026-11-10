
# Shubham Kumar | Portfolio

Responsive, dark, editorial-style developer portfolio built with React, Vite and Framer Motion.

**Live site:** https://YOUR-SITE.vercel.app

## Features

- Cinematic hero with cut-out portrait overlapping oversized typography
- Project grid with category filters, search and "Load more"
- Accessible project dialog (Escape to close, focus restore)
- Experience, education and certifications sections
- Contact form that opens your email app
- Motion on/off toggle that respects `prefers-reduced-motion`
- Fully responsive from 320px up

## Tech Stack

React 19 · Vite · Framer Motion · Lucide Icons · Vanilla CSS

## Getting Started

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
npm install
npm run dev
```

## Project Structure

```text
src/
├── config/site.js
├── data/projects.js
├── data/experience.js
├── components/
└── styles.css

public/assets/
```

## Customize

Edit `src/config/site.js` and the files in `src/data/`.
Colors and fonts are CSS variables at the top of `src/styles.css`.

## Build

```bash
npm run build
```

Output goes to `dist/` and can be hosted on any static host.

## Deployment

Deployed on Vercel. Every push to `main` triggers a new deployment.

## Contact

mailfuture.sde@gmail.com
