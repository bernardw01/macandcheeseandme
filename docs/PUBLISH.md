# Publishing to tiiny.host

This project deploys **only** the contents of [`dist/`](../dist/). The [`docs/`](../docs/) folder is not part of the upload.

## Prerequisites

- An account on [tiiny.host](https://tiiny.host) (or your existing site/subdomain for updates).
- A complete, locally verified build under `dist/` with `index.html` at the folder root.

### API key (optional — for API / agent uploads)

The repo includes a root [`.env`](../.env) template (see [`.env.example`](../.env.example)). Use the variable name **`TIINYHOST_API_KEY`**, which matches the [tiiny.host skill](https://github.com/Tiiny-Host/skills) and API.

**Will a `.env` file “just work”?** Only for tools that explicitly load it (some IDEs, Node with `dotenv`, etc.). Your shell does **not** automatically set environment variables from `.env`. Before running `curl` or a deploy script in a terminal, load the file once per session, for example from the repo root:

```bash
set -a && [ -f .env ] && . ./.env && set +a
```

Then `$TIINYHOST_API_KEY` is available for that terminal. Never commit `.env` (it is listed in [`.gitignore`](../.gitignore)).

## Checklist (after each update)

### 1. Verify locally

- Open `dist/index.html` in a desktop browser (double-click or “Open with”).
- If you ever switch to root-absolute paths (e.g. `/css/...`), use a local static server instead; for relative paths as in this repo, opening the file directly is fine.
- Resize the window or use device emulation to confirm layout on narrow screens.
- Click every in-page anchor and external link.

### 2. Build the zip artifact

The zip **root** must contain `index.html` next to `css/`, `js/`, `assets/`, not nested inside an extra folder.

From the repository root:

```bash
cd dist && zip -r ../mac-and-cheese-site.zip . -x "*.DS_Store"
```

This creates `mac-and-cheese-site.zip` **one level above** `dist/`, with `index.html` at the top level of the archive.

**Common mistake:** Zipping the `dist` folder itself so the archive opens to `dist/index.html`. tiiny.host expects `index.html` at the **top** of the zip. The command above zips the *contents* of `dist/`, which is correct.

### 3. Upload on tiiny.host

1. Go to [tiiny.host upload](https://tiiny.host/upload/) (or your dashboard flow).
2. Drag and drop `mac-and-cheese-site.zip` or select it via the file picker.
3. Choose or confirm your **subdomain** (e.g. `yoursite.tiiny.site`) per the on-screen flow.
4. Complete launch/update per your plan (free trial vs paid features may differ).

For product-specific steps, follow the current [Tiiny Host help](https://tiiny.host/) if the UI changes.

### 4. Smoke-test the live site

- Load the published URL in a private/incognito window if helpful to avoid cache.
- Confirm `index.html` loads, styles and scripts apply, and images under `assets/` appear.
- Spot-check on a phone or narrow browser.
- Update the “Last updated” note in the site footer when you ship meaningful changes (and align [`PRD.md`](PRD.md) if the product story changed).

## Quick reference

| Item | Location |
|------|----------|
| Deployable files | `dist/` |
| Zip command (from repo root) | `cd dist && zip -r ../mac-and-cheese-site.zip . -x "*.DS_Store"` |
| Output zip (default name) | `mac-and-cheese-site.zip` at repo root |
