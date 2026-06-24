import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://shopnest.aoneahsan.com';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Product catalog & search',
    body: 'Browse products by category, search instantly, narrow with filters, and compare items side by side. Each product page carries images, specs, pricing, and reviews.',
  },
  {
    title: 'Cart & multi-step checkout',
    body: 'Add to cart, adjust quantities, apply coupons, then move through a guided shipping → payment → review checkout. Cart state persists across sessions and devices.',
  },
  {
    title: 'Orders & tracking',
    body: 'Place an order, follow it through its stages on a dedicated tracking page, view past orders in your dashboard, and download a PDF invoice for each one.',
  },
  {
    title: 'Accounts & sign-in',
    body: 'Create an account with Google, Apple, or email. On supported devices, sign in again with biometrics. Manage addresses, security, and preferences from one dashboard.',
  },
  {
    title: 'Loyalty & wishlists',
    body: 'Earn points on activity, climb tiers, and redeem rewards. Save products to a wishlist to revisit later and move them into your cart in one tap.',
  },
  {
    title: 'Built for every device',
    body: 'A Progressive Web App you can install, six-language localization, an admin dashboard for store owners, and a companion browser extension.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/intro">
            Read the docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start
          </Link>
          <Link className="button button--outline button--lg" href={APP_URL}>
            Open the app
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="col col--4"
              style={{ marginBottom: '1.5rem' }}
            >
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          ShopNest is free to use on the{' '}
          <Link href={APP_URL}>web</Link>, with Android and iOS in progress. Built
          and maintained by <Link href="https://aoneahsan.com">Ahsan Mahmood</Link>{' '}
          — <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Modern e-commerce platform`}
      description="Documentation for ShopNest: browse a product catalog, build a cart, check out, track orders, earn loyalty points, and run an admin dashboard. Free on the web."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
