# Gemini Context: Titan Core (Astro Theme)

## Project Overview
**Titan Core** is a high-performance, feature-rich Astro JS theme designed for modern websites, blogs, and portfolios. It utilizes **Astro v5** - Updated to **Astro v6**, **Tailwind CSS v4**, and **AOS (Animate On Scroll)** to deliver a fast, responsive, and visually engaging user experience.

- **Main Technologies**: Astro v6, Tailwind CSS v4, Lucide Icons, AOS, Alpine.js (implied).
- **Architecture**: Component-based (Modular UI), Content-driven (Astro Content Collections), and Theme-flexible (CSS Variables + Data Attributes).
- **Theming**: Includes 10 pre-configured Greek mythology-inspired themes (e.g., Zeus, Poseidon, Hades).

## Building and Running
The project environment is now at Windows 11 25H2, running on Docker.
The project uses `pnpm` as the primary package manager.

- **Install Dependencies**: `pnpm install`
- **Development Server**: `pnpm dev` (Starts at `http://localhost:4321`)
- **Production Build**: `pnpm build` (Outputs to `./dist/`)
- **Preview Build**: `pnpm preview`
- **Check Project**: `pnpm check` (Astro check for types and diagnostics)
- **Format Code**: `pnpm format` (Runs Prettier)

## Project Structure
- `src/assets/`: Images and static assets.
- `src/components/`: Modular UI components (Blog, Forms, Icons, Sections, Team, UI).
- `src/content/`: Markdown content for collections.
- `src/data/`: Centralized configuration and data files.
- `src/layouts/`: Base page layouts (primarily `Layout.astro`).
- `src/pages/`: File-based routing (Blog, Category, Company, Team, Legal).
- `src/styles/`: Global styles and Tailwind configuration (`global.css`).
- `src/utils/`: Utility functions.

## Development Conventions

### Theming System
Themes are applied via the `data-theme` attribute on the `<body>` element in `src/layouts/Layout.astro`.
- **Configuration**: The active theme is set in `src/data/config.ts` via `themeSetting.theme`.
- **CSS Variables**: Themes are defined in `src/styles/global.css` using `@layer base` and `[data-theme='name']` blocks, which override Tailwind CSS variables.
- **Tailwind CSS v4**: Uses the new `@theme` block in `global.css` for primary color definitions and typography.

### Content Collections
Managed in `src/content.config.ts` using Astro v5's `loader` API.
- **Collections**: `blog`, `team`, `legal`, `company`.
- **Schemas**: Validated with Zod. Blog categories are derived from `src/data/categories.ts`.

### Configuration Files (`src/data/`)
- `config.ts`: Site-wide settings (SEO, Company Info, Socials, Theme Setting).
- `menu.ts`: Header, Footer, and Legal navigation structures.
- `categories.ts`: Blog category definitions (name, slug, description).
- `faqs.ts`, `features.ts`, `logos.ts`, `stats.ts`: Data for various UI sections.

### Components and Sections
Components are organized into subdirectories based on their function. Page sections (e.g., `Hero`, `Features`, `Logos`) are located in `src/components/sections/`.

## Styling Guidelines
- **Tailwind CSS**: Use Tailwind classes for most styling.
- **Custom Variables**: Reference custom CSS variables (e.g., `var(--color-primary)`) to maintain theme compatibility.
- **Animations**: Use `data-aos` attributes for scroll animations. AOS is initialized in `Layout.astro`.
- **Typography**: Fluid typography is implemented using `clamp()` in `global.css`.

## Deployment
The project is optimized for performance and SEO, including an automatic sitemap generation via `@astrojs/sitemap`. Ensure `PUBLIC_SITE_URL` or `siteConfig.siteUrl` is correctly configured for production.
