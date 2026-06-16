# Dilantha Haputhanthri Personal Website

A professional personal portfolio site for Dilantha Haputhanthri, built with Astro, Tailwind CSS, TypeScript, and MDX support.

## Stack

- Astro
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript
- MDX/content collections for future writing and project pages

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Astro will print the local development URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The static production build is written to `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deployment: Vercel

This site is intended to be hosted on Vercel with the GitHub repository connected directly to a Vercel project.

Keep the project as a static Astro site. No Vercel adapter, API routes, backend services, or serverless functions are required for the current site.

Vercel should auto-detect Astro from `package.json` and use the standard static build output. If you need to enter settings manually, use:

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Node version: 20 or newer

Recommended flow:

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the detected Astro settings.
4. Deploy.

Do not add a `vercel.json` file unless the site later needs custom routing, headers, redirects, or other Vercel-specific behavior.

## CV/Profile PDF

The site links to `/cv.pdf` for the download buttons. The current file is stored at:

```text
public/cv.pdf
```

Replace that file when the downloadable profile or CV needs to be updated.

## Content Updates

Most homepage content lives in:

```text
src/data/site.ts
```

Future long-form writing or project pages can be added under:

```text
src/content/writing
src/content/projects
```
