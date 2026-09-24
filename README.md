# Mali Roshanshah — Product design portfolio

A redesigned portfolio built with Next.js App Router. Editorial typography, a warm neutral palette, terracotta accents, sage project backgrounds, and a dark green contact section.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Production: `npm run build` then `npm start`.

## Content and design

- `app/page.js`: homepage and selected work
- `app/ui.js`: mobile navigation, project cards, category filters, copy-email interaction
- `app/shared.js`: footer, contact banner, graphic elements
- `app/globals.css`: responsive design system and accessibility styles
- `app/project-info.js`: card titles, summaries, categories, and colors
- `app/projects.json`: imported source content
- `app/case-content.json`: normalized case-study content and section navigation
- `app/about`, `app/contact`, `app/projects`: main pages
- `app/project-details/[slug]`: seven case studies
- `public/assets`: locally stored original images, icons, and fonts
- `reference`: public HTML used to reproduce the original portfolio
- `design-backup`: previous homepage, UI components and stylesheet

After editing the imported source content, run `node prepare-case-studies.mjs` to regenerate the case-study structure. Avoid running `import-reference.mjs` unless deliberately refreshing the original content: the original Västtrafik HTML response was empty and its copy was recovered from the site's public search index.

Keyboard navigation, visible focus, a skip link, reduced-motion styles, responsive layouts, and descriptive page titles are included. Contact links open the user's email application; no form service or tracking is installed.
