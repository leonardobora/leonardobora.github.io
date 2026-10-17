# Leonardo Bora — portfolio

Personal portfolio for Leonardo Bora da Costa, deployed at [leonardobora.github.io](https://leonardobora.github.io/). This repo reuses the existing GitHub Pages project and its public URL.

## Status

The portfolio is a bilingual (Brazilian Portuguese / English) single page prepared for GitHub Pages at `https://leonardobora.github.io/`. It presents verified experience, education, selected projects, research publications and recognition in a minimal editorial layout. GitHub Pages serves the root of `main`; pushing to `main` publishes updates.

## Run locally

No build step or package install is required. Open `index.html` in a browser, or serve the repository root:

```sh
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

## Verify

```sh
python -m unittest discover -s tests -v
```

The checks cover page metadata and landmarks, working in-page navigation, Portuguese and English content, featured repository links, contact links, external-link safety, responsive/reduced-motion styles, and the absence of a runtime GitHub API dependency.

## Structure

- `index.html` — standalone site, styles, language toggle and portfolio content.
- `archive/portfolio-v1.html` — preserved previous portfolio version.
- `tests/test_portfolio.py` — dependency-free static checks.
- `AGENTS.md` — project guidance and Matt Pocock skill setup.
- `docs/agents/` — issue tracker, triage labels and domain-doc conventions.

The site intentionally does not load analytics or request project data from a third-party API at runtime. Featured projects are curated in the page source; link to GitHub for the full list.

## Publishing

GitHub Pages serves the repository’s `main` branch from the root. Review the local preview and diff before pushing; this agent has not published changes.
