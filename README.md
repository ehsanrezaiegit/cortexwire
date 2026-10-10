# CortexWire: AI & Technology News Site

![Next.js](https://img.shields.io/badge/Next.js-15-000000)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4)

A fast, content-driven website for AI and technology briefings: model releases, infrastructure shifts, AI-native tools and policy. Articles are written in MDX, indexed for full-text search and optimized for SEO.

**Live:** https://cortexwire.netlify.app

## Features

- **MDX content collections**: articles live in `content/articles/` and are typed and validated at build time (`@content-collections`).
- **Pages**: home with a 3D hero (three.js / react-three-fiber), article list, category pages, article pages with table of contents, reading time and share buttons, AI tools directory, about page and newsletter page.
- **Search**: static full-text search generated at build time with Pagefind.
- **SEO**: sitemap generation (`next-sitemap`), per-page metadata and generated Open Graph images for every article.
- **UI**: Tailwind CSS 4, Radix UI primitives and Framer Motion animations.
- **Deployment**: Netlify (`netlify.toml`). The same app is also containerized with a multi-stage Dockerfile and deployed to Kubernetes as the workload of [mini-cloud-platform](https://github.com/ehsanrezaiegit/mini-cloud-platform) (Helm, Argo CD).

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · MDX · Pagefind · three.js · Framer Motion · Netlify

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, sitemap and search index
npm start
```

Add an article by creating a new `.mdx` file in `content/articles/` with the same front matter as the existing ones.

## Project structure

| Path | Purpose |
|---|---|
| `app/` | Routes: home, articles, categories, tools, about, newsletter, API route |
| `components/` | UI components (hero, article browser, table of contents, share buttons) |
| `content/articles/` | MDX articles |
| `lib/` | Article helpers, SEO helpers, AI tools data |
| `scripts/generate-covers.mjs` | Cover image generation script |

## Known limitations

- The newsletter endpoint (`/api/newsletter`) validates the email but is a **stub**: it does not store or send anything yet. Connecting a provider such as Resend or Mailchimp is the next step.
- Content is a small starter set (8 articles).
- Search depends on the Pagefind index created during `npm run build`.

## Author

**Ehsan Rezaie**: DevOps & Full-Stack Engineer · [GitHub](https://github.com/ehsanrezaiegit) · [Portfolio](https://plugifly.shop)
