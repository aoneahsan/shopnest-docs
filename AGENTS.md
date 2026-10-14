# AGENTS.md — ShopNest Docs

| Context | Value |
|---|---|
| Last optimized | 2026-10-14 |
| Next routine optimization eligible | 2026-11-13 |
| Guide bytes | 4351 B |

Public documentation site for ShopNest (the e-commerce platform app at
`../shopnest`, repo `github.com/aoneahsan/ecommerce-platform`).

**Context coverage:** Docs-site root, Docusaurus config, `docs/`, `static/` and the Pages workflow. Next routine context audit: 2026-11-13.

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

## Hosting

- **GitHub Pages**: `.github/workflows/deploy-pages.yml` on push to `main`; custom domain via `static/CNAME`. Enable Pages once in repo Settings → Pages → Source: GitHub Actions.

A push to `main` runs the Pages workflow and publishes after its build passes. Verify a fresh local production build in a controlled browser before pushing.

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

`yarn build` must exit clean (it generates the sitemap + static HTML). Serve the exact fresh production build for a controlled browser check before a deploying push.

---

**Last Updated**: 2026-10-14


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
