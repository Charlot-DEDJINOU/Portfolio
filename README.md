# Charlot DEDJINOU Portfolio

This is my personal portfolio website, rebuilt with Nuxt 4 and statically generated for better SEO and performance. It showcases my background, skills, projects, certifications, awards, and contact information in a bilingual experience.

Live site: https://charlotdedjinou.com

## About the project

I rebuilt this portfolio on top of Nuxt 4 SSG to get pre-rendered HTML for each language, proper hreflang support, structured data, and full control over meta tags — while keeping the same interactive experience as before.

The website includes:

- English and French content with URL-based routing (`/` for EN, `/fr/` for FR)
- hreflang and canonical tags for multilingual SEO
- JSON-LD structured data (Person + WebSite)
- dark and light theme support
- accent color customization
- animated section transitions with AOS
- searchable projects and certifications
- CV download and preview actions
- a Linux-style interactive terminal mode
- a data-driven structure that makes content updates easy

## Tech stack

- Nuxt 4 (SSG mode)
- Vue 3
- Pinia
- @nuxtjs/i18n v9
- Bootstrap 5
- Sass
- AOS
- Vercel Analytics
- vue3-carousel-3d
- typewriter-effect

## Project structure

```text
.
|-- app/                      Nuxt srcDir (all application code)
|   |-- assets/               Images, icons, backgrounds, global SCSS
|   |-- components/           Portfolio sections and reusable UI components
|   |   |-- icons/            SVG icon components
|   |-- data/                 Projects, skills, awards, education, experience, services, certifications
|   |-- pages/                File-based routes (index.vue → /)
|   |-- plugins/              Client-only plugins (AOS, Bootstrap, Vercel Analytics)
|   |-- stores/               Pinia store for theme, accent color, and terminal mode
|   |-- terminal/             Terminal mode: commands, filesystem, formatters, styles
|   |-- utils/                Shared utilities (scroll helpers, CV actions)
|   |-- app.vue               Root component with SEO meta and hreflang
|   `-- error.vue             Custom 404 page
|-- i18n/
|   `-- locales/
|       |-- en.json           English translations
|       `-- fr.json           French translations
|-- public/                   Static public assets (favicon, OG image, robots.txt, sitemap.xml)
|-- nuxt.config.ts
`-- package.json
```

## Main sections

The homepage is assembled in [`app/pages/index.vue`](./app/pages/index.vue) from these sections:

- Home
- About
- Services
- Projects
- Awards
- Certifications
- Contact
- Footer

Most of the visible content is managed through dedicated data files instead of being hardcoded directly in the UI.

## Content organization

This portfolio is highly data-driven. The main content lives in:

- [`app/data/Projects.js`](./app/data/Projects.js)
- [`app/data/Skills.js`](./app/data/Skills.js)
- [`app/data/Experiences.js`](./app/data/Experiences.js)
- [`app/data/Educations.js`](./app/data/Educations.js)
- [`app/data/Certifications.js`](./app/data/Certifications.js)
- [`app/data/Awards.js`](./app/data/Awards.js)
- [`app/data/Services.js`](./app/data/Services.js)

Translations are stored in:

- [`i18n/locales/en.json`](./i18n/locales/en.json)
- [`i18n/locales/fr.json`](./i18n/locales/fr.json)

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Generate the static site:

```bash
npm run generate
```

Preview the production build:

```bash
npm run preview
```

## Customization

### Update portfolio content

Edit the files in [`app/data`](./app/data) to update:

- projects
- certifications
- awards
- services
- education
- experience
- skills

### Update text in both languages

Edit:

- [`i18n/locales/en.json`](./i18n/locales/en.json)
- [`i18n/locales/fr.json`](./i18n/locales/fr.json)

### Update theme behavior and styling

Theme mode and accent color are managed in:

- [`app/stores/portfolio.ts`](./app/stores/portfolio.ts)

Global styles live in:

- [`app/assets/scss/styles.scss`](./app/assets/scss/styles.scss)

## Implementation notes

- The app uses Nuxt 4 SSG (`nuxt generate`) with `nitro.preset: 'static'`
- The i18n strategy is `prefix_except_default`: English lives at `/`, French at `/fr/`
- Browser language detection uses a cookie (`i18n_redirected`) and only redirects on the root route
- SEO meta tags (`useSeoMeta`, `useHead`) are set reactively in [`app/app.vue`](./app/app.vue) and update when the locale changes
- AOS, Bootstrap, and Vercel Analytics are loaded as client-only plugins
- Components that are not SSR-compatible (vue3-carousel-3d) are wrapped in `<ClientOnly>`
- The terminal mode replaces the entire page and supports a Linux-like filesystem navigation
- When exiting terminal mode, the router redirects to `/fr/` if French is active, otherwise to `/`

## Deployment

This project is deployed on Vercel using static file serving.

Generate the static output:

```bash
npm run generate
```

Then deploy the `.output/public/` directory using Vercel or any static hosting platform.
