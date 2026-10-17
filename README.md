# Chetan Sharma — Portfolio

Personal portfolio for **Chetan Sharma**, Full-Stack Python Developer. Built with React and Framer Motion, with smooth scrolling, scroll-triggered animations and light/dark themes in a calm sage-and-cream palette.

## Tech stack

| Purpose | Library |
| --- | --- |
| UI | [React 19](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Animations | [Framer Motion](https://motion.dev) |
| Smooth scrolling | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Feather set) |
| Styling | Plain CSS with custom properties (no framework) |

## Features

- **Scroll progress bar** across the top of the page
- **Smart navbar** that hides on scroll down, reappears on scroll up, and highlights the current section with a sliding pill
- **Hero** with staggered text, spring-animated name, floating code card, drifting background blobs and scroll parallax
- **Animated counters** in the About section that count up when scrolled into view
- **Skills** cards with staggered chip pop-ins
- **Experience timeline** whose line draws itself as you scroll
- **Project cards** that tilt toward the cursor
- **Contact** section with a one-click "Copy email" button
- **Light / dark themes** — follows the system setting, remembers the visitor's choice
- **Responsive** down to small phones
- **Accessible motion** — animations and smooth scrolling are disabled for users with `prefers-reduced-motion`

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
```

```bash
npm run dev
```

The site runs at http://localhost:5173.

### Other scripts

| Command | Description |
| --- | --- |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
├── index.html              # HTML shell, fonts, meta tags
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Page layout + Lenis smooth scroll setup
    ├── data.js             # All resume content (edit this to update the site)
    ├── index.css           # Theme tokens, layout and responsive styles
    └── components/
        ├── Navbar.jsx      # Nav, active-section tracking, theme toggle, mobile menu
        ├── Hero.jsx
        ├── About.jsx       # Summary + animated stat counters
        ├── Skills.jsx
        ├── Experience.jsx  # Scroll-drawn timeline
        ├── Projects.jsx    # Tilt cards
        ├── Education.jsx   # Education + achievements
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Reveal.jsx      # Reusable fade/slide-in-on-scroll wrapper
        ├── SectionTitle.jsx
        ├── ScrollProgress.jsx
        └── scroll.js       # Anchor scrolling helper (Lenis-aware)
```

## Customizing

- **Content** — everything (profile, stats, skills, experience, projects, education, achievements) lives in [`src/data.js`](src/data.js). The extra About paragraph is in [`src/components/About.jsx`](src/components/About.jsx).
- **Colors** — edit the CSS variables at the top of [`src/index.css`](src/index.css): `:root` for light mode and `:root[data-theme='dark']` for dark mode.
- **Fonts** — Fraunces (headings), Inter (body) and JetBrains Mono (code), loaded from Google Fonts in [`index.html`](index.html).
- **New sections** — wrap content in `<Reveal>` for a scroll-in animation and use `<SectionTitle>` for a matching heading.

## Deployment

The output of `npm run build` is a static site in `dist/`, so it can be hosted anywhere:

- **Vercel** — import the repository; it detects Vite automatically.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — set `base: '/<repo-name>/'` in `vite.config.js`, then publish `dist/`.

## Contact

- Email: [sharma.chetan9129@gmail.com](mailto:sharma.chetan9129@gmail.com)
- LinkedIn: [linkedin.com/in/chetan9129](https://linkedin.com/in/chetan9129)
- GitHub: [github.com/chetan9129](https://github.com/chetan9129)
