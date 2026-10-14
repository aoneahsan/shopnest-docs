# ShopNest Docs

Public documentation site for **ShopNest** — a modern, free e-commerce platform.

- **App (web):** https://shopnest.aoneahsan.com
- **Docs (this site):** https://shopnest-docs.aoneahsan.com
- **App repository:** https://github.com/aoneahsan/ecommerce-platform
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus 3](https://docusaurus.io). The site documents every shipped area of ShopNest: catalog, search & filters, cart & checkout, payments & invoices, accounts, orders & tracking, wishlist, loyalty, reviews, blog, admin dashboard, internationalization, PWA & notifications, and the browser extension.

<a id="local-development"></a>
## 🛠️ Local development&nbsp;[#](#local-development)

```bash
yarn install
yarn start          # dev server on port 5928
yarn build          # production build -> ./build
yarn serve          # serve the production build on port 5929
yarn typecheck      # tsc --noEmit
```

<a id="hosting"></a>
## 🚀 Hosting&nbsp;[#](#hosting)

The public docs repository deploys to GitHub Pages on every push to `main` through `.github/workflows/deploy-pages.yml`. The custom domain is carried by `static/CNAME`. Check the fresh production build in a controlled browser before pushing.

<a id="seo-aeo"></a>
## 🔎 SEO / AEO&nbsp;[#](#seo-aeo)

- `static/robots.txt` allows all major search + AI/answer-engine bots and links the sitemap.
- `sitemap.xml` is generated on build by the Docusaurus sitemap plugin.
- `static/llms.txt` follows the [llmstxt.org](https://llmstxt.org) spec.
- JSON-LD (`WebSite`, `Organization`, `SoftwareApplication`) + per-page meta/OG are emitted from `docusaurus.config.ts`.

<a id="content-enrichment"></a>
## 📚 Content enrichment&nbsp;[#](#content-enrichment)

Baseline pages are complete. Long-tail deep-dive batches are tracked in
`docs/tracking/shopnest-docs-content-tracker.json` (resumable, one commit per batch).

<a id="license"></a>
## 📄 License&nbsp;[#](#license)

MIT © Ahsan Mahmood. ShopNest is free to use.
