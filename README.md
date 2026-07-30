# Mehdi Salimi Portfolio

A statically exported portfolio built with Next.js, React, TypeScript, Tailwind CSS, and React Grid Layout.

## Requirements

- Node.js 22.13 or newer
- pnpm 11.17 or newer

## Development

```bash
corepack enable
pnpm install
pnpm dev
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Commands

```bash
pnpm check                    # lint, typecheck, and tests
pnpm test                     # run Jest tests
pnpm build                    # refresh sitemap and create the static export in out/
pnpm optimize:project-images  # resize project images with Sharp
pnpm seo:update               # derive sitemap lastmod from the latest content commit
```

## Architecture

```text
src/
├── app/                       # routes, metadata, providers, and global styles
├── components/                # shared UI and icon primitives
├── features/
│   └── portfolio-grid/
│       ├── components/        # grid and card components
│       ├── config/            # profile, social, and project card data
│       └── model/             # types, navigation, and layout logic
└── assets/                    # local fonts and images
```

The application exposes three statically generated routes:

- `/`
- `/about`
- `/work`

## Deployment

Pushes to `main` run linting, type checking, tests, refresh the canonical sitemap from the latest content commit, build the production export, and deploy it to GitHub Pages.

The custom domain is proxied through ArvanCloud. Keep these CDN response-cache policies in place:

- `/_next/static/*`: `Cache-Control: public, max-age=31536000, immutable`
- `/sw.js` and HTML routes: do not apply the immutable rule; keep them revalidated

Next.js emits content-hashed filenames under `/_next/static/`, so a new deployment changes the URL of every modified asset while unchanged assets remain safely cacheable.
