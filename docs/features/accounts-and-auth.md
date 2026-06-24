---
id: accounts-and-auth
title: "ShopNest Accounts and Authentication"
description: ShopNest accounts support Google, Apple, and email sign-in, biometric re-login on supported devices, saved addresses, and a security dashboard.
sidebar_label: Accounts & Sign-In
---

# Accounts and Authentication

A ShopNest account is the identity behind your cart, orders, addresses, wishlist, and loyalty points. Authentication is handled by Firebase, with three sign-in methods and an optional biometric re-login layer on supported devices.

## Sign-in methods

- **Google** — popup sign-in on the web; the native Google sign-in flow on mobile.
- **Apple** — sign in with your Apple ID where supported.
- **Email and password** — a standard account tied to your email.

All three resolve to the same underlying user, so your account is consistent regardless of how you signed in.

## Biometric re-login

On devices with a fingerprint or face sensor, ShopNest can offer biometric re-login so you don't re-enter credentials each visit. The biometric check happens on the device and unlocks your existing session — it's a convenience over your account, never a replacement for it, and it's entirely optional.

## Your account dashboard

Once signed in, the dashboard centralizes account management:

- **Profile** — your name and contact details used on orders.
- **Addresses** — save and reuse shipping addresses at checkout.
- **Orders** — your full order history with statuses and invoices.
- **Wishlist** — products you've saved for later.
- **Security** — manage sign-in and biometric settings.

## Privacy and control

Your account data lives in Firebase/Firestore. You can [export or delete your data](/guides/data-export-and-deletion) at any time, and the [privacy page](/privacy) explains exactly what's collected and why.

## Frequently asked questions

### Is biometric login required?

No. It's optional and only appears on devices that support it. You can always sign in with your original method.

### Can I have more than one saved address?

Yes. Save multiple addresses and pick one at checkout.

### How do I delete my account?

Follow the [data export and deletion](/guides/data-export-and-deletion) guide, which covers removing your account and associated data.

## Related pages

- [Create Your Account](/getting-started/create-your-account)
- [Orders & Tracking](/features/orders-and-tracking)
- [Privacy](/privacy)
