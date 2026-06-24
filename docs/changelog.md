---
id: changelog
title: "ShopNest Changelog and Release History"
description: The release history for ShopNest — notable features, improvements, and documentation updates, newest first.
sidebar_label: Changelog
---

# Changelog

Notable changes to ShopNest and its documentation, newest first. ShopNest is at version 1.0.0.

## 2026-06 — Documentation site + storefront refinements

- Launched this public documentation site at **shopnest-docs.aoneahsan.com**, covering every shipped area of the app.
- **Web push notifications**: implemented Firebase Cloud Messaging token retrieval for the web, with a dedicated messaging service worker and graceful no-op when not configured.
- **Storefront polish**: fixed product-image fallbacks across the catalog so listings never show broken images, and replaced blocking alerts with non-blocking toasts in the loyalty and notifications flows.

## 1.0.0 — Initial platform

The first complete ShopNest release brings the full storefront and store-owner toolset:

- **Catalog & discovery** — product catalog by category, instant search, filters, quick view, and side-by-side comparison.
- **Cart & checkout** — persistent cart with coupons and a multi-step shipping → payment → review checkout.
- **Payments & invoices** — Stripe and PayPal, plus downloadable PDF invoices.
- **Accounts** — Google, Apple, and email sign-in; biometric re-login; saved addresses; security settings.
- **Orders** — order history and a track-order page.
- **Engagement** — wishlist, a tiered loyalty program with rewards and referrals, and product reviews.
- **Content** — a blog with a rich-text editor.
- **Admin** — a dashboard for products, orders, users, categories, reviews, content, and analytics.
- **Platform** — a Progressive Web App, push notifications, six-language localization (including RTL Arabic), and a companion browser extension.

---

For the canonical per-version release notes that feed the app and store listings, see the project's `docs/play-store/RELEASE-NOTES.md`.
