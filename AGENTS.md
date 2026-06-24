# AGENTS.md — ShopNest Docs

Public documentation site for ShopNest (the e-commerce platform app at
`../shopnest`, repo `github.com/aoneahsan/ecommerce-platform`).

## Identity

| Field | Value |
|-------|-------|
| Project | ShopNest Docs |
| Type | Docusaurus 3 documentation site (PUBLIC repo) |
| Site URL | https://shopnest-docs.aoneahsan.com |
| App URL | https://shopnest.aoneahsan.com |
| Repo | github.com/aoneahsan/shopnest-docs (PUBLIC) |
| Dev ports | 5928 (start) / 5929 (serve) |
| Stack | Docusaurus 3.10 + preset-classic + theme-mermaid, React 19, TypeScript 6 |

## Public repo — NO secrets

This is a PUBLIC repo. Never commit `.env` or any secret. Only `.env.example`
if ever needed. `.gitignore` already excludes env/secret files.

## Hosting (dual; deploys are USER-ONLY)

- **Firebase Hosting**: `yarn firebase:deploy` (target `shopnest-docs`; `firebase.json` + `.firebaserc`).
- **GitHub Pages**: `.github/workflows/deploy-pages.yml` on push to `main`; custom domain via `static/CNAME`. Enable Pages once in repo Settings → Pages → Source: GitHub Actions.

The agent writes config; the user runs the deploys.

## Content rules

- Document only REAL, shipped ShopNest features — never fabricate.
- SEO floor per page: unique title (50-60), unique description (140-160), definition-first intro, 3-6 H2s, FAQ on feature/guide pages, author credit.
- Site-wide JSON-LD (WebSite + Organization + SoftwareApplication) + per-page meta/OG come from `docusaurus.config.ts` headTags + themeConfig.metadata.
- AI-bot allowlist in `static/robots.txt`; `static/llms.txt` per llmstxt.org; sitemap auto-generated on build.
- Long-tail enrichment is tracked in `docs/tracking/shopnest-docs-content-tracker.json` (resumable, one commit per batch).

## Commands

```bash
yarn install
yarn build      # production build -> ./build (the verify gate)
yarn typecheck  # tsc --noEmit
yarn start      # dev server (port 5928) — do NOT run in CI/agent
```

## Verify gate

`yarn build` must exit clean (it generates the sitemap + static HTML). Do not run dev servers.

---

**Last Updated**: 2026-06-24
