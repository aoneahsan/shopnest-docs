---
id: payments-and-invoices
title: "ShopNest Payments (Stripe, PayPal) and PDF Invoices"
description: ShopNest accepts payments through Stripe and PayPal and generates a downloadable PDF invoice for every order, created client-side in your browser.
sidebar_label: Payments & Invoices
---

# Payments and Invoices

Payments and invoicing close the loop on a purchase: ShopNest collects payment through Stripe or PayPal at checkout, then makes a PDF invoice available for every order. The invoice is generated in your browser, so you can download a record of any purchase on demand.

## Payment methods

At the payment step of [checkout](/features/cart-and-checkout), ShopNest supports:

- **Stripe** — card payments handled through Stripe's secure elements, so card details are entered into Stripe's fields rather than passing through the storefront.
- **PayPal** — pay with a PayPal account through PayPal's flow.

Both run client-side against the providers; ShopNest itself does not store raw card numbers.

## PDF invoices

For each order, ShopNest can generate a **PDF invoice** that lists the line items, quantities, prices, discounts, totals, and your billing details. The PDF is produced in the browser, so you can download or save it without waiting on a server to render it. Invoices are available from your order history.

## Security and honesty

Card data is entered directly into the payment provider's secure fields, and ShopNest relies on Stripe and PayPal for processing. The storefront keeps a record of the order and its total for your account and invoice, but the sensitive payment details remain with the processor.

## Frequently asked questions

### Which payment methods does ShopNest support?

Stripe (cards) and PayPal. You choose your method at the payment step of checkout.

### Does ShopNest store my card number?

No. Card details are entered into Stripe's secure fields and processed by Stripe; ShopNest does not store raw card numbers.

### How do I get an invoice?

ShopNest generates a downloadable PDF invoice for each order, available from your order history. It's created in your browser from the order's line items and totals.

## Related pages

- [Cart & Checkout](/features/cart-and-checkout)
- [Orders & Tracking](/features/orders-and-tracking)
- [Privacy](/privacy)
