# ShopNest Docs

Public documentation site for **ShopNest** — a modern, free e-commerce platform.

- **App (web):** https://shopnest.aoneahsan.com
- **Docs (this site):** https://shopnest-docs.aoneahsan.com
- **App repository:** https://github.com/aoneahsan/ecommerce-platform
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus 3](https://docusaurus.io). The site documents every shipped area of ShopNest: catalog, search & filters, cart & checkout, payments & invoices, accounts, orders & tracking, wishlist, loyalty, reviews, blog, admin dashboard, internationalization, PWA & notifications, and the browser extension.

## Local development

```bash
yarn install
yarn start          # dev server on port 5928
yarn build          # production build -> ./build
yarn serve          # serve the production build on port 5929
yarn typecheck      # tsc --noEmit
```

## Hosting (dual)

This PUBLIC site is dual-hosted; both deploys are **user-only** actions:

- **Firebase Hosting** — `yarn firebase:deploy` (site target `shopnest-docs`; config in `firebase.json` + `.firebaserc`).
- **GitHub Pages** — `.github/workflows/deploy-pages.yml` builds and publishes on every push to `main`. Custom domain `shopnest-docs.aoneahsan.com` via `static/CNAME`. Enable once in repo **Settings → Pages → Source: GitHub Actions**.

## SEO / AEO

- `static/robots.txt` allows all major search + AI/answer-engine bots and links the sitemap.
- `sitemap.xml` is generated on build by the Docusaurus sitemap plugin.
- `static/llms.txt` follows the [llmstxt.org](https://llmstxt.org) spec.
- JSON-LD (`WebSite`, `Organization`, `SoftwareApplication`) + per-page meta/OG are emitted from `docusaurus.config.ts`.

## Content enrichment

Baseline pages are complete. Long-tail deep-dive batches are tracked in
`docs/tracking/shopnest-docs-content-tracker.json` (resumable, one commit per batch).

## License

MIT © Ahsan Mahmood. ShopNest is free to use.
