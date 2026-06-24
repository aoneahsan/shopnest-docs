import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for ShopNest docs.
 *
 * The baseline set documents every shipped area of the app. Long-tail
 * deep-enrichment pages (tracked in docs/tracking/shopnest-docs-content-tracker.json)
 * are appended here as they land.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/create-your-account',
        'getting-started/browse-and-buy',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/product-catalog',
        'features/search-and-filters',
        'features/cart-and-checkout',
        'features/payments-and-invoices',
        'features/accounts-and-auth',
        'features/orders-and-tracking',
        'features/wishlist',
        'features/loyalty',
        'features/reviews',
        'features/blog',
        'features/admin-dashboard',
        'features/internationalization',
        'features/pwa-and-notifications',
        'features/browser-extension',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/place-an-order',
        'guides/track-an-order',
        'guides/manage-your-account',
        'guides/data-export-and-deletion',
      ],
    },
    'faq',
    'privacy',
    'changelog',
    'about-the-author',
  ],
};

export default sidebars;
