---
id: pwa-and-notifications
title: "ShopNest PWA Install and Push Notifications"
description: ShopNest is an installable Progressive Web App with offline-aware caching and push notifications for updates, on web and supported mobile platforms.
sidebar_label: PWA & Notifications
---

# PWA and Push Notifications

ShopNest is a Progressive Web App (PWA), which means you can install it like a native app and receive push notifications. This gives the storefront an app-like presence — a home-screen icon, fast loads from cache, and the ability to notify you — without going through an app store.

## Install as an app

Because ShopNest is a PWA with a web manifest and service worker, supported browsers offer to **install** it. Once installed, it opens in its own window with the ShopNest icon, loads quickly thanks to caching, and behaves like a standalone app. Installing is optional — the same storefront works in any browser tab.

## Push notifications

ShopNest uses OneSignal for push notifications on the web and in its Capacitor apps. Web push uses a separate OneSignal service worker under `/push/onesignal/`, alongside the app's PWA service worker. Push is available only when the app has a OneSignal App ID, the device supports it, and you grant notification permission.

## Offline-aware behavior

The service worker caches assets so the app loads fast and remains resilient on flaky connections. Network-dependent actions still need connectivity, but the shell and previously loaded content hold up better than a plain website.

## Frequently asked questions

### Do I have to install ShopNest?

No. Installation is optional. The full storefront runs in any modern browser; installing just adds an app-like shell and icon.

### How do push notifications work on the web?

Through OneSignal and its scoped service worker. You choose whether to grant notification permission. If OneSignal is not configured or your browser does not support push, the push control stays unavailable.

### Does the app work offline?

The app caches assets for fast, resilient loads, but actions that need the network — like checkout — still require a connection.

## Related pages

- [Accounts & Sign-In](/features/accounts-and-auth)
- [Orders & Tracking](/features/orders-and-tracking)
- [Internationalization](/features/internationalization)
