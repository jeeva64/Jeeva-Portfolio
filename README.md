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
- Client-side contact form with custom validation, posting to `formsubmit.co` (honeypot + captcha-free)
- Performance-tuned: Three.js hero lazy-loaded in its own chunk (~126 KB gz main JS), self-hosted fonts, compressed WebP images with responsive variants
- Accessibility: skip-to-content, focus-visible rings, reduced-motion support at three layers, labelled icon-only links
- SEO-ready: meta, Open Graph, Twitter card, JSON-LD Person schema, sitemap, robots (with AI-crawl policy), llms.txt
- Deployed to Firebase Hosting

---

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite (+ `@vitejs/plugin-react-swc`)
- **Styling:** Tailwind CSS 3 + `tailwindcss-animate`, custom neon/glass tokens, class-based dark mode
- **UI primitives:** shadcn/ui subset (button/input/label/textarea/toast) on Radix, lucide-react icons
- **Animations:** Framer Motion; Three.js (`@react-three/fiber`, `drei`) for the Hero — lazy-loaded via `React.lazy`
- **Fonts:** Self-hosted via `@fontsource/inter` + `@fontsource/jetbrains-mono` (no Google Fonts requests)
- **Routing:** `react-router-dom` (`BrowserRouter`), single real route + `*` catch-all
- **Backend (contact):** `formsubmit.co` (no server-side code in this repo)

---

## Getting Started

> Requires Node 18+ and npm. `package-lock.json` is committed; regenerate lockfiles only when asked.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev        # → http://localhost:8080  (NOT :3000)
```

### Other commands

```bash
npm run build         # production build → dist/
npm run build:dev     # non-minified dev-mode build
npm run preview       # preview the built dist/ on http://localhost:4173
npm run lint          # ESLint (flat config: eslint.config.js)
```

> There is **no test suite** and **no `typecheck` script**. `npm run lint` is the only static check. Audit performance against `preview` (production output), never the dev server.

---

## Project Structure

```
.
├── index.html                     # Vite entry; head metadata + JSON-LD (no external font links)
├── public/
│   ├── favicon.png (+16/32/192/512)  # tab + PWA-ish icons
│   ├── apple-touch-icon.png
│   ├── og-image.png               # Open Graph / Twitter preview (~190 KB)
│   ├── profile.png                # crawler-facing photo referenced by JSON-LD — do not delete
│   ├── resume.pdf                 # Hero "View Resume" / "Download CV"
│   ├── robots.txt                 # crawl rules + Content-Signal: ai-train=no
│   ├── sitemap.xml
│   ├── llms.txt                   # LLM-facing site summary (mirrors robots policy)
│   ├── Images/                    # project/achievement/certificate screenshots (WebP)
│   └── logos/                     # self-hosted tech-stack icons (19 files)
├── src/
│   ├── main.tsx                   # React root + @fontsource imports
│   ├── App.tsx                    # ThemeProvider > MotionConfig > Toaster > Router
│   ├── pages/
│   │   ├── Index.tsx              # Composes all sections (see order below)
│   │   └── NotFound.tsx           # * catch-all (theme-token styled)
│   ├── components/
│   │   ├── Navigation.tsx         # drawer < lg, horizontal nav ≥ lg
│   │   ├── SocialDock.tsx         # fixed social dock (GitHub/LinkedIn/LeetCode/X)
│   │   ├── ParticleBackground.tsx # animated gradient blobs + particles
│   │   ├── Hero.tsx               # typing subtitle + lazy sphere + resume CTAs
│   │   ├── SphereScene.tsx        # three.js canvas (lazy chunk, pauses offscreen)
│   │   ├── Typewriter.tsx         # grapheme-safe typewriter (sr-only phrase for AT)
│   │   ├── About.tsx  Education.tsx  Experience.tsx
│   │   ├── Projects.tsx           # status badges; null-href buttons hidden
│   │   ├── Skills.tsx             # static class maps; /logos/*.svg|png icons
│   │   ├── Achievements.tsx  Certifications.tsx
│   │   ├── Contact.tsx            # validated form → formsubmit.co (honeypot inside)
│   │   ├── Footer.tsx  ThemeToggle.tsx
│   │   └── ui/                    # button, input, label, textarea, toast, toaster
│   ├── hooks/
│   │   └── use-theme.tsx          # ThemeProvider (class-based dark mode)
│   ├── lib/
│   │   └── utils.ts               # cn()
│   ├── assets/
│   │   ├── profile.webp           # app-facing hero photo (800w)
│   │   └── profile-480.webp       # srcSet variant
│   └── index.css                  # Tailwind layers + neon/glass tokens
├── tailwind.config.ts             # neon.* / glass / keyframes config
├── vite.config.ts                 # @ alias → src/, port 8080, lovable-tagger (dev)
├── eslint.config.js               # flat config
├── seo.md                         # post-deployment SEO checklist
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
- SPA rewrite `** → /index.html` is configured; static files (`robots.txt`, `sitemap.xml`, `llms.txt`, images) are served before the rewrite applies.
- Post-deploy SEO duties live in [`seo.md`](seo.md).

```bash
npm run build
firebase deploy --only hosting:jeeva-dev
```

`.gitignore` excludes `dist/`, so build locally before deploying.

---

## Notes & Gotchas

- **Content freeze:** page copy must stay byte-identical unless explicitly asked otherwise.
- **No interpolated Tailwind classes:** JIT can't see `` bg-${color}/20 `` — use static lookup maps (see `Skills.tsx`, `Achievements.tsx`, `Certifications.tsx`, `Projects.tsx`).
- TypeScript is intentionally lax in `tsconfig.app.json` (`strict: false`). Don't tighten it casually. `tsconfig.node.json` **is** strict.
- ESLint disables `@typescript-eslint/no-unused-vars`; baseline is 0 errors / 3 known warnings.
- React 18 has no JSX prop for fetch priority — set it imperatively via ref (`Hero.tsx`).
- The contact form POSTs to `formsubmit.co` with a hidden honeypot and `_captcha:"false"`; no env vars exist anywhere in `src/`.
- `lovable-tagger` is a dev-only Vite plugin from the Lovable scaffold; leave the `mode === 'development' && componentTagger()` guard in `vite.config.ts` as-is.
- See `AGENTS.md` for agent-oriented notes and `seo.md` for post-deploy SEO practices.

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
