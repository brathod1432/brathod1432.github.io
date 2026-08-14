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

All content lives in [`data/projects.ts`](data/projects.ts) — edit the
`categories`, `privateWork`, `services`, `caseStudies`, `experience`,
`education`, and `testimonials` arrays to update the site.

Deployment is automatic: every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Enabling the contact form (optional)

The contact section works out of the box with email + LinkedIn buttons. To turn
on the actual form, add a free [Web3Forms](https://web3forms.com) access key
(no signup — just verify your email) to `siteConfig.web3formsKey` in
[`data/projects.ts`](data/projects.ts). The form includes a honeypot field for
spam protection and posts directly to Web3Forms (no backend needed).

## Enabling analytics (optional)

Set `siteConfig.plausibleDomain` to your domain to load
[Plausible](https://plausible.io) — cookieless and GDPR-friendly (no consent
banner required). Leave empty to disable.

## Updating the CV and OG image

- **CV:** two variants are published and both are offered wherever the CV is
  linked — [`public/brijesh_rathod.pdf`](public/brijesh_rathod.pdf) (short) and
  [`public/brijesh_rathod_202608_Detailed.pdf`](public/brijesh_rathod_202608_Detailed.pdf)
  (detailed). Replace either file, or point `cvVariants` in
  [`data/projects.ts`](data/projects.ts) at new filenames.
- **Social preview image:** edit [`scripts/og.svg`](scripts/og.svg), then
  regenerate with `npm i sharp --no-save && node -e "const s=require('sharp'),f=require('fs');s(f.readFileSync('scripts/og.svg')).png().toFile('public/og.png')"`.

## Security notes

GitHub Pages cannot set HTTP response headers. A post-build script
([`scripts/inject-security-meta.mjs`](scripts/inject-security-meta.mjs)) injects
a Content-Security-Policy and Referrer-Policy via `<meta>` tags into every
exported HTML file. Transport is protected by HTTPS + HSTS (set by GitHub).

Header-only protections — `X-Content-Type-Options`, `X-Frame-Options`, and CSP
`frame-ancestors` — **cannot** be applied on GitHub Pages. To get full headers,
host the same static export on Cloudflare Pages / Netlify / Vercel with a
`_headers` file.

[Dependabot](.github/dependabot.yml) keeps npm and Actions dependencies patched.
