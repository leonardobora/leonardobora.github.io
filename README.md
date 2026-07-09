# leonardobora.github.io

Personal portfolio / business card for **Leonardo Bora da Costa** - AI Engineer, Agentic Orchestration, AI Safety.
Single self-contained `index.html` (no build step). Nintendo.com-2001 "console chrome" aesthetic, responsive, bilingual (PT/EN), live GitHub projects.

## Publish on GitHub Pages (about 2 minutes)

1. Create a repository named exactly **`leonardobora.github.io`** (this name serves the site at the root domain).
2. Upload **`index.html`** to the repository root (drag & drop works).
3. Go to **Settings > Pages**.
4. Under **Source**, choose **Deploy from a branch** -> Branch: **`main`** / Folder: **`/ (root)`** -> **Save**.
5. Wait ~1 minute, then open **https://leonardobora.github.io**.

## Analytics (optional)
Open `index.html`, find the `ANALYTICS SLOT` comment in `<head>`, and uncomment ONE option:
- **Plausible** (recommended, privacy-friendly): no ID needed, just keep the domain.
- **Google Analytics 4**: replace `G-XXXXXXX` with your Measurement ID.

## Editing content
All text lives in the `I18N` (translations) and `DATA` (experience/education/certs/etc.) objects inside the `<script>` block at the bottom of `index.html`. Projects load automatically from `https://api.github.com/users/leonardobora/repos` - no manual updates needed.

## Notes
- Fonts (Archivo Black, Silkscreen, VT323) are injected at runtime from Google Fonts.
- The ASCII mascot is original artwork; no third-party IP is used.
