# Mannschaft Sprachzentrum

A modern, fast, accessible marketing website for **Mannschaft**, a German language center — built with [Astro](https://astro.build) and ready to deploy on **Cloudflare Pages**.

## Stack

- **Astro** (static output, zero client-side framework)
- Plain CSS with design tokens (no CSS framework)
- Minimal vanilla JS (mobile menu, FAQ accordion, language selector, scroll-reveal)
- `@astrojs/sitemap` for automatic sitemap generation
- Self-contained SVG illustrations — no external image dependencies

## Pages

| Route | Purpose |
|---|---|
| `/` | Home |
| `/german-courses/` | German A1–C1 course details |
| `/language-courses/` | English, French, Spanish, Italian |
| `/exam-preparation/` | Goethe, telc, TestDaF, DSH |
| `/courses/` | All courses & programs (intensive, conversation, private) |
| `/about/` | About Mannschaft |
| `/contact/` | Contact form + info |
| `/faq/` | Full FAQ |
| `/legal/imprint/`, `/legal/privacy/`, `/legal/terms/` | Legal pages |
| `/404` | Custom not-found page |

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this project to a GitHub/GitLab repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to your main branch redeploys automatically.

### Option B — Wrangler CLI

```bash
npm install -g wrangler   # if not already installed
npm run build
wrangler pages deploy ./dist
```

`wrangler.toml` is already configured with `pages_build_output_dir = "dist"`.

## Before going live

- **Site URL:** update `site` in `astro.config.mjs` and `SITE.url` in `src/data/site.ts` to your real domain once you have one (affects canonical URLs, sitemap, and Open Graph tags).
- **Contact form:** the form in `src/pages/contact.astro` posts to a placeholder endpoint (`https://formspree.io/f/YOUR_FORM_ID`). Replace it with your own [Formspree](https://formspree.io) form ID, a Cloudflare Pages Function, or another form backend.
- **Business details:** update `SITE` in `src/data/site.ts` (email, phone, address, social links) with real information.
- **OG image:** `public/og-image.svg` is an SVG placeholder for social share previews. For maximum compatibility across all social platforms (some don't render SVG previews), export it as a 1200×630 PNG and update the reference in `src/components/Seo.astro`.
- **Legal pages:** the imprint/privacy/terms pages contain generic placeholder text — have them reviewed for your actual jurisdiction before launch.

## Project structure

```
src/
  components/   Reusable Astro components (Navbar, Footer, cards, FAQ, CTA, etc.)
  data/         Site content as typed data (courses, testimonials, FAQ, nav links)
  layouts/      BaseLayout.astro (SEO, fonts, header/footer shell)
  pages/        One file per route
  styles/       global.css design tokens & base styles
public/         Static assets served as-is (favicon, robots.txt, _headers, og-image)
```
