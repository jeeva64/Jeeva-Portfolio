# Jeeva Loganathan — AI Developer & ML Engineer Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square)](https://firebase.google.com)

Personal portfolio of **Jeeva Loganathan** — an AI Developer & ML Engineer focused on building practical, production-oriented machine learning systems, backend APIs, and full-stack applications.

**Live site:** https://jeeval.dev

---

## Highlights

- Single-page portfolio positioning an AI Developer & ML Engineer identity
- Hand-built dark/neon design system (HSL CSS variables, glass-morphism, custom animations)
- Responsive across mobile, tablet, and desktop (drawer nav below `lg`, horizontal nav ≥ `lg`)
- Client-side contact form with custom validation, posting to `formsubmit.co`
- SEO-ready: meta, Open Graph, Twitter card, JSON-LD Person schema, sitemap, robots
- Deployed to Firebase Hosting

---

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite (+ `@vitejs/plugin-react-swc`)
- **Styling:** Tailwind CSS 3 + `tailwindcss-animate`, custom neon/glass tokens, class-based dark mode
- **UI primitives:** shadcn/ui (Radix UI), lucide-react icons
- **Animations:** Framer Motion + Three.js (`@react-three/fiber`, `drei`) for the Hero
- **Routing:** `react-router-dom` (`BrowserRouter`), single real route + `*` catch-all
- **Backend (contact):** `formsubmit.co` (no server-side code in this repo)

---

## Getting Started

> Requires Node 18+ and either `npm` or `bun`. Both `package-lock.json` and `bun.lockb` are committed — use whichever you prefer; do not regenerate lockfiles unless asked.

```bash
# 1. Install dependencies
npm install        # or: bun install

# 2. Start the dev server
npm run dev        # → http://localhost:8080  (NOT :3000)
```

### Other commands

```bash
npm run build         # production build → dist/
npm run build:dev     # non-minified dev-mode build
npm run preview       # preview the built dist/
npm run lint          # ESLint (flat config: eslint.config.js)
```

> There is **no test suite** and **no `typecheck` script**. `npm run lint` is the only static check.

---

## Project Structure

```
.
├── index.html                     # Vite entry; head metadata + JSON-LD
├── public/
│   ├── favicon.png                # tab + apple-touch icon
│   ├── og-image.png               # Open Graph / Twitter preview
│   ├── resume.pdf                 # Hero "View Resume" / "Download CV"
│   ├── robots.txt  sitemap.xml
│   └── Images/                    # project + achievement screenshots
├── src/
│   ├── main.tsx                   # React root
│   ├── App.tsx                    # Providers + routes
│   ├── pages/
│   │   ├── Index.tsx              # Composes all sections (see order below)
│   │   └── NotFound.tsx           # * catch-all
│   ├── components/
│   │   ├── Hero.tsx               # 3D animated sphere + typing subtitle
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx            # custom-validated form → formsubmit.co
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx         # drawer < lg, horizontal nav ≥ lg
│   │   ├── SocialDock.tsx         # fixed social dock (GitHub/LinkedIn/LeetCode/X)
│   │   ├── ParticleBackground.tsx
│   │   └── ui/                    # shadcn/ui primitives
│   ├── hooks/
│   │   └── use-theme.tsx          # ThemeProvider (class-based dark mode)
│   ├── lib/
│   │   └── utils.ts               # cn()
│   └── index.css                  # Tailwind layers + theme tokens + gradient-text
├── tailwind.config.ts             # neon.* / glass / keyframes config
├── vite.config.ts                 # @ alias → src/, port 8080, lovable-tagger (dev)
├── eslint.config.js               # flat config
└── firebase.json                  # Hosting site "jeeva-dev"
```

### Page section order (see `src/pages/Index.tsx`)

```
Hero → About → Education → Experience → Projects → Skills → Achievements → Certifications → Contact → Footer
```

---

## Path Alias

`@/*` → `src/*` (configured in both `tsconfig.json` and `vite.config.ts`). Prefer `@/` imports.

---

## Theming

- Class-based dark mode (`darkMode: ["class"]` in `tailwind.config.ts`).
- Theme tokens are HSL CSS variables in `src/index.css` (`:root` = light, `.dark` = dark override).
- An inline blocking script in `index.html` applies `dark` (or a saved `light` preference) **before** React mounts to prevent a first-paint flash. Default theme is **dark**.
- `ThemeProvider` (`src/hooks/use-theme.tsx`) persists the choice to `localStorage`.

---

## Deployment (Firebase Hosting)

- `firebase.json` deploys `dist/` to Hosting site **`jeeva-dev`**
  (project `jeeva-portfolio-5ed05`, see `.firebaserc`).
- SPA rewrite `** → /index.html` is already configured.

```bash
npm run build
firebase deploy --only hosting:jeeva-dev
```

`.gitignore` excludes `dist/`, so build locally before deploying.

---

## Notes & Gotchas

- The contact form POSTs to `formsubmit.co` — there is **no `.env`**, no `firebase` init, and no `@emailjs/browser` usage in `src/` despite those deps being listed in `package.json`.
- `react-router-dom` v6 `BrowserRouter` enables the v7 future flags (`v7_startTransition`, `v7_relativeSplatPath`) to silence upgrade warnings.
- TypeScript is intentionally lax in `tsconfig.app.json` (`strict: false`, `noUnusedLocals: false`). Don't tighten it casually — it would create churn across the codebase. `tsconfig.node.json` (for `vite.config.ts`) **is** strict.
- ESLint disables `@typescript-eslint/no-unused-vars`; unused vars are not errors.
- `lovable-tagger` is a dev-only Vite plugin from the Lovable scaffold; leave the `mode === 'development' && componentTagger()` guard in `vite.config.ts` as-is.
- See `AGENTS.md` for agent-oriented notes on working in this repo.

---

## License

This project is open-sourced under the MIT License — see the [LICENSE](LICENSE) file.

---

## Contact

- Portfolio: https://jeeval.dev
- Email: jeevajeevaloganathan977@gmail.com
- LinkedIn: https://www.linkedin.com/in/jeeva-l/
- GitHub: https://github.com/jeeva64
- LeetCode: https://leetcode.com/u/jeevaloganathan/
