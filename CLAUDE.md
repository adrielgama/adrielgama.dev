# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm lint         # ESLint
pnpm lint:fix     # ESLint with auto-fix
```

No test suite configured.

## Architecture

Single-page Next.js 16 portfolio. One route (`/`) with all content sourced from `src/data/resume.tsx`.

**Data layer** — `src/data/resume.tsx` exports `DATA`, the single source of truth for all portfolio content (bio, work history, projects, skills, contact). To add/edit content, only this file needs to change.

**Page structure** — `src/app/page.tsx` is a Client Component (interactive clock, modal). Sections rendered inline: hero → about → work → skills → projects → contact → footer. Each section uses `FadeIn` / `Stagger` / `StaggerItem` for scroll-triggered animations.

**Component organization:**

- `src/components/` — shared/layout components (`navbar`, `fade-in`, `side-decoration`, `sound-toggle`, etc.)
- `src/components/section/` — page section components (`work-section`, `projects-section`, `contact-section`, `footer`)
- `src/components/ui/` — primitives (shadcn-style: `button`, `badge`, `avatar`, `tooltip`, `kbd`, `seperatorpro`)
- `src/components/ui/svgs/` — inline SVG skill icons, one file per technology

**Sound system** — `src/lib/sound-engine.ts` is a singleton Web Audio API wrapper. Sound data URIs are embedded in `src/lib/click-8bit.ts`, `drop-leather.ts`, `switch-off.ts`. Mute state persists to `localStorage` under key `site-muted`. Hook: `src/hooks/use-sound.ts`.

**Theme** — `next-themes` via `src/components/theme-provider.tsx`, wrapped in `src/app/Clientbody.tsx`. Pixel transition on theme switch handled by `src/hooks/use-themetransition.ts` using canvas.

**Styling** — Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`). Design tokens (colors, radius) defined as CSS vars in `globals.css` and aliased in `@theme inline`. shadcn `components.json` is present; add new primitives via `pnpm dlx shadcn@latest add <component>`.

**SEO** — metadata derived from `DATA` in `layout.tsx`. `src/app/robots.ts` and `src/app/sitemap.ts` are auto-generated. OG image: `src/app/opengraph-image.tsx`.

**Sections currently commented out** — `education` and `hackathons` sections exist in `page.tsx` but are commented out. The data fields (`DATA.education`, `DATA.hackathons`) are populated and ready.
