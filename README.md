# brathod1432.github.io

Personal portfolio of **Brijesh Rathod** — showcasing open-source work across
AI/LLM engineering, robotics, machine learning, and full-stack web platforms.

**Live:** https://brathod1432.github.io

## Tech

- [Next.js 14](https://nextjs.org) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- Deployed automatically to GitHub Pages via GitHub Actions

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site emitted to ./out
```

## Editing content

All project content lives in [`data/projects.ts`](data/projects.ts) — edit the
`categories` and `privateWork` arrays to add, remove, or update projects.

Deployment is automatic: every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
