# Product Requirements Document: Mac and Cheese

**Version:** 1.2.2 · **Last updated:** 2026-03-28

## Changelog

| Version | Date | Notes |
|---------|------|-------|
| 1.2.2 | 2026-03-28 | Favicon: `assets/img/favicon.png` linked as `rel=icon` and `apple-touch-icon`. |
| 1.2.1 | 2026-03-28 | Gallery: added MP4 video slide (`PXL_20260122_051244919.NS-02.MAIN.mp4`) with controls, poster, and fallback link. |
| 1.2.0 | 2026-03-28 | Gallery: [Splide](https://splidejs.com/) 4 carousel via jsDelivr CDN (arrows, dots, swipe/drag, keyboard); no npm. |
| 1.1.1 | 2026-03-28 | Hero image: `object-position: center top` so cover crop keeps the dog’s head in frame. |
| 1.1.0 | 2026-03-28 | Added PRD versioning, changelog section, and agent rule: after updates bump version, record changes, suggest git commit/push. |
| 1.0.0 | 2026-03-28 | Initial PRD: static site, `dist/` deploy to tiiny.host, Tailwind CSS, vanilla JS, docs layout. |

## Product summary

A single-page static website that tells the story of **Mac and Cheese**, a rescue dog. The site is a warm, modern editorial experience hosted on **tiiny.host**, built with **HTML**, **Tailwind CSS** for styling, and **vanilla JavaScript** for light interactivity—no application server or CMS required.

## Goals and audience

| Goal | Description |
|------|-------------|
| Tell the story | Share Mac’s rescue arc and life in a respectful, celebratory way. |
| Connect | Give friends, family, and supporters a single place to learn about her. |
| Inspire | Optionally nudge visitors toward adoption awareness or supporting rescue work (links TBD). |

**Primary audience:** People who know Mac’s humans, local rescue community, and casual visitors from shared links.  
**Success:** Visitors finish with a clear sense of who Mac is, why his story matters, and (if included) where to learn more.

## Brand and tone

- **Warm, hopeful, authentic** — Lead with love and the present day, not shock value.
- **Respectful** — Do not sensationalize hardship; the rescue story should feel honest, not gratuitous.
- **Celebratory** — Mac is the hero; the page celebrates his personality and his people.

## Look and feel

### Aesthetic

Modern editorial landing page: generous whitespace, soft surfaces (rounded cards or subtle borders), one strong hero moment, and readable long-form sections. Avoid cluttered “startup” aesthetics; prefer calm, photo-forward storytelling.

### Color direction

- **Base:** Warm off-whites and soft warm grays for backgrounds (`#faf8f5`–style family).
- **Text:** Deep charcoal for body (`#2c2c2c`), not pure black.
- **Accent:** Single warm accent (terracotta or golden amber) for links, buttons, and key highlights—evokes warmth without feeling childish.

Implement via **Tailwind theme tokens** (e.g. extended colors, spacing, and radii in `tailwind.config` or the Tailwind v4 `@theme` layer) so the palette stays consistent. Avoid one-off arbitrary hex values outside the theme unless documenting an exception.

### Typography

- **Headings:** A distinctive but readable serif or soft geometric sans. **Default for v1:** system stack with careful sizing and weight (`system-ui`, `Georgia`/`ui-serif` for optional contrast) to avoid external font hosting until explicitly chosen; PRD may later specify **Google Fonts** (e.g., **Fraunces** + **Source Sans 3**) if added to the project.
- **Body:** High line-height (1.6–1.75), comfortable max-width for reading (~65ch).

### Imagery

- **Hero and gallery:** Real photos of Mac when available; placeholder blocks with descriptive `alt` text until assets exist.
- **Treatment:** Rounded corners or soft masks; lazy-load gallery images for performance.

### Motion

- **Subtle only:** Optional fade-in on scroll or gentle hover states on cards/links. No auto-playing video or distracting animations. Respect `prefers-reduced-motion`.

## Page structure

| Section | ID (anchor) | Required | Purpose |
|---------|-------------|----------|---------|
| Hero | `hero` | Yes | Name, hook, hero visual, CTA to story/photos |
| Meet Mac | `meet-mac` | Yes | Short bio: basics and where he came from |
| The rescue story | `rescue-story` | Yes | Narrative or timeline: before → turning point → home |
| Life now | `life-now` | Yes | Day-to-day, favorites, thriving |
| Gallery | `gallery` | Yes | Splide carousel (scroll/slide); lazy load, alt per image |
| Closing / CTA | `closing` | Optional copy | Thanks, adopt/donate/spread-the-word |
| Footer | (footer landmark) | Yes | Credits, copyright, last updated |

## Content inventory (placeholders)

| Slot | Notes |
|------|--------|
| Hero headline | “Mac and Cheese” + subline (e.g., rescue dog, personality tease) |
| Hero image | Primary photo or placeholder |
| Meet Mac | 1–2 short paragraphs |
| Rescue story | 2–4 paragraphs or 3 timeline items |
| Life now | Bullet or short paragraphs; optional “days in forever home” style stat |
| Gallery | 4–8 images in carousel with captions optional |
| Closing | 1 paragraph + optional external links |
| Footer | Photo credits, “Last updated: YYYY-MM-DD” |

## Technical constraints

- **Stack:** Static HTML, **Tailwind CSS** for all layout and styling, and **vanilla JavaScript** only (no React, Vue, or Svelte unless this PRD is revised).
- **CSS framework:** **Tailwind CSS** — utility-first styling; component-like structure is expressed via HTML class lists and, where helpful, small reusable patterns documented in the repo (e.g. `@layer components`). Prefer Tailwind utilities and theme extensions over large custom CSS files, except for rare global rules (e.g. base typography) in the Tailwind entry CSS file.
- **Build:** A **build step is required** to compile Tailwind into the deployable CSS (Node.js + npm; exact `package.json` scripts and source vs output paths live in the repo and should be kept in sync with this document when they change). The artifact tiiny.host serves remains **static files only** (HTML, compiled CSS, JS, images).
- **Hosting:** tiiny.host — deploy by zipping the **contents** of `dist/` so `index.html` is at the zip root (after running the Tailwind build so `dist/` contains the compiled stylesheet).
- **Repo layout:** Deployable built assets live under `dist/`; this PRD and other internal docs live in `docs/` and are **not** uploaded. Source files used only at build time (e.g. Tailwind input CSS, config) may live at repo root or under `src/` per project convention—document the chosen layout in [`PUBLISH.md`](PUBLISH.md) when finalized.
- **Third-party (gallery):** [Splide](https://splidejs.com/) **v4** is loaded from the jsDelivr CDN (CSS + JS) for the photo carousel only—no `npm install`; pin major version in URLs when upgrading. Honor `prefers-reduced-motion` (no looping animation; instant slide when reduced).

## Accessibility and performance

- Semantic landmarks: `header`, `main`, `footer`; one `h1`; logical heading order per section.
- Visible focus styles for keyboard users (use Tailwind `focus-visible` / `ring` patterns where appropriate); sufficient color contrast for text and links.
- All images have meaningful `alt` text; decorative images use empty `alt` where appropriate.
- Images sized appropriately; gallery uses `loading="lazy"` where supported.

## Out of scope (v1)

- Blog, comments, or CMS
- User accounts or backend APIs
- Analytics (may be added later with explicit privacy note)
- i18n / multiple languages

## Document ownership

When the **scope, sections, or visual theme** changes in a material way, update this PRD in the same change as the site (or immediately after) so agents and humans stay aligned.
