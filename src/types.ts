export type ViewType = 'home' | 'showcase' | 'profile';

export type CategoryId = 'all' | 'saas' | 'dashboard' | 'fintech' | 'ecommerce' | 'app-design' | 'healthcare';

export interface CategoryInfo {
  title: string;
  kicker: string;
  count: string;
  desc: string;
}

export interface CaseStudyBrief {
  categoryLabel: string;
  title: string;
  client: string;
  year: string;
  roi: string;
  challenge: string;
  solution: string;
  tech: string;
}

export const CATEGORIES_META: Record<CategoryId, CategoryInfo> = {
  all: {
    title: 'All Architecture Archetypes',
    kicker: 'Showcase Feed · Flagship Works',
    count: '25 Verified Projects',
    desc: 'Curated collection of 25 enterprise SaaS platforms, high-throughput cockpits, fintech banking suites, e-commerce stores, native mobile apps, and health care platforms engineered for ROI.'
  },
  saas: {
    title: 'SaaS Platforms',
    kicker: 'Archetype 01 · B2B Platforms',
    count: '7 Flagship Platforms',
    desc: 'Enterprise multi-tenant platforms, AI knowledge workspaces, intelligent document AI, hybrid workplace hubs, CPG trade portals, and automated process orchestration suites designed for operational velocity.'
  },
  dashboard: {
    title: 'Dashboards & Cockpits',
    kicker: 'Archetype 02 · Observability & Analytics',
    count: '3 Executive Cockpits',
    desc: 'BAT Peachtree enterprise finance distribution, eBuddy HRM supervisor task performance, and AI Mail autonomous inbox intelligence cockpits.'
  },
  fintech: {
    title: 'Fintech, Banking & MFS',
    kicker: 'Archetype 03 · Financial Infrastructure & Payments',
    count: '6 Verified Platforms',
    desc: 'National payment gateway & checkout engines, merchant KYC onboarding flows, state mobile banking apps, NRB real-time account opening & eKYC, cross-border digital wallets, and corporate cash management suites.'
  },
  ecommerce: {
    title: 'E-Commerce & Digital Retail',
    kicker: 'Archetype 04 · High-Conversion Omnichannel Stores',
    count: '2 Flagship Stores',
    desc: 'Omnichannel retail flagships, consumer electronics marketplaces, fashion lifestyle hubs, and seamless checkout funnels engineered for high-volume GMV.'
  },
  'app-design': {
    title: 'Mobile App Design',
    kicker: 'Archetype 05 · Native iOS & Android Systems',
    count: '6 Mobile Products',
    desc: 'High-scale digital wallets, cultural social networks, eBuddy workforce apps, mobile banking portals, clean-energy tracking apps, and SSLCOMMERZ merchant mobile apps.'
  },
  healthcare: {
    title: 'Health Care & Digital Therapeutics',
    kicker: 'Archetype 06 · Clinical AI & Patient Portals',
    count: '2 Verified Platforms',
    desc: 'Precision AI immune telemetry, large-scale food fortification portals, remote patient monitoring systems, and clinical healthcare companions built to HIPAA and WCAG standards.'
  }
};
