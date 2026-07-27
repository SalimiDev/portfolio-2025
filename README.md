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
pnpm build                    # create the static export in out/
pnpm optimize:project-images  # resize project images with Sharp
pnpm seo:update               # update sitemap lastmod values
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

Pushes to `main` run linting, type checking, tests, a production build, and deployment to GitHub Pages. The monthly sitemap workflow updates `lastmod`, commits the change, and lets the main deployment workflow publish it.
