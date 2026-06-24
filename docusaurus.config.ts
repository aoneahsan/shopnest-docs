import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// ShopNest — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://shopnest.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://shopnest-docs.aoneahsan.com';
const APP_URL = 'https://shopnest.aoneahsan.com';
const REPO_URL = 'https://github.com/aoneahsan/shopnest-docs';

const config: Config = {
  title: 'ShopNest Docs',
  tagline:
    'A modern e-commerce platform: browse a product catalog, build a cart, check out, and track every order.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'shopnest-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags layered on top of Docusaurus per-page meta.
  // The JSON-LD payloads (WebSite, Organization, SoftwareApplication) help
  // Google Rich Results, Perplexity, ChatGPT, and Gemini extract structured
  // entity data when citing ShopNest docs.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'ShopNest Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'ShopNest Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#4f46e5' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ShopNest Documentation',
        url: SITE_URL,
        description:
          'Documentation for ShopNest — a modern e-commerce platform. Browse a product catalog with search, filters, and comparison; manage a cart and a multi-step checkout; sign in with Google, Apple, or email; track orders; earn loyalty points; and run an admin dashboard. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ShopNest',
        applicationCategory: 'ShoppingApplication',
        operatingSystem: 'Web, Android, iOS',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        sameAs: [APP_URL],
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        description:
          'A modern e-commerce platform with a product catalog, search and filters, product comparison, cart and multi-step checkout, order tracking, wishlists, a loyalty program, product reviews, a blog, an admin dashboard, six-language localization, PWA install, and a companion browser extension.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `${REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for ShopNest — a modern e-commerce platform with a product catalog, cart, multi-step checkout, order tracking, loyalty, and an admin dashboard. Maintained by Ahsan Mahmood.',
      },
      {
        name: 'keywords',
        content:
          'shopnest, ecommerce platform, online store, shopping app, product catalog, shopping cart, checkout, order tracking, loyalty program, wishlist, product reviews, admin dashboard, pwa store, react capacitor ecommerce',
      },
      { name: 'author', content: 'Ahsan Mahmood' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ShopNest Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'ShopNest',
      logo: {
        alt: 'ShopNest logo',
        src: 'img/favicon.svg',
        srcDark: 'img/favicon.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/getting-started/quick-start', label: 'Get Started', position: 'left' },
        { to: '/faq', label: 'FAQ', position: 'left' },
        { to: '/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open App', position: 'right' },
        { href: REPO_URL, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'Create Your Account', to: '/getting-started/create-your-account' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Product Catalog', to: '/features/product-catalog' },
            { label: 'Cart & Checkout', to: '/features/cart-and-checkout' },
            { label: 'Orders & Tracking', to: '/features/orders-and-tracking' },
            { label: 'Loyalty Program', to: '/features/loyalty' },
          ],
        },
        {
          title: 'ShopNest',
          items: [
            { label: 'Open the app', href: APP_URL },
            { label: 'Privacy', to: '/privacy' },
            { label: 'Data Deletion', to: '/guides/data-export-and-deletion' },
            { label: 'Changelog', to: '/changelog' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. ShopNest is free to use.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
