# Product Requirements Document: Mac and Cheese

## Product summary

A single-page static website that tells the story of **Mac and Cheese**, a rescue dog. The site is a warm, modern editorial experience hosted on **tiiny.host**, built with HTML, CSS, and vanilla JavaScript—no application server or CMS required.

## Goals and audience

| Goal | Description |
|------|-------------|
| Tell the story | Share Mac’s rescue arc and life in a respectful, celebratory way. |
| Connect | Give friends, family, and supporters a single place to learn about him. |
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

Implement via CSS custom properties in `site/css/` so the palette stays consistent.

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
| Gallery | `gallery` | Yes | Image grid; lazy load, alt per image |
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
| Gallery | 4–8 images with captions optional |
| Closing | 1 paragraph + optional external links |
| Footer | Photo credits, “Last updated: YYYY-MM-DD” |

## Technical constraints

- **Stack:** Static HTML, CSS, and vanilla JavaScript only unless the PRD is revised.
- **Hosting:** tiiny.host — deploy by zipping the **contents** of `site/` so `index.html` is at the zip root.
- **Repo layout:** Source of truth for deployable files is `site/`; this PRD and other internal docs live in `docs/` and are **not** uploaded.
- **Build:** No mandatory build step for v1; optional future bundler must be documented here if introduced.

## Accessibility and performance

- Semantic landmarks: `header`, `main`, `footer`; one `h1`; logical heading order per section.
- Visible focus styles for keyboard users; sufficient color contrast for text and links.
- All images have meaningful `alt` text; decorative images use empty `alt` where appropriate.
- Images sized appropriately; gallery uses `loading="lazy"` where supported.

## Out of scope (v1)

- Blog, comments, or CMS
- User accounts or backend APIs
- Analytics (may be added later with explicit privacy note)
- i18n / multiple languages

## Document ownership

When the **scope, sections, or visual theme** changes in a material way, update this PRD in the same change as the site (or immediately after) so agents and humans stay aligned.
