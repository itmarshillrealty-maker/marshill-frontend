// Centralized SEO settings and helpers for the headless Next.js frontend.
//
// GOING LIVE: this site is currently a beta preview living alongside the
// real WordPress site, so SITE_URL points at the beta subdomain and
// ALLOW_INDEXING is false (robots.txt blocks all crawling — see
// app/robots.ts). That's deliberate: if Google could index both the old
// WordPress site AND this beta preview at the same time, it would see
// duplicate content and that hurts both sites' rankings. When this site
// is ready to replace the WordPress site at the real domain, change
// SITE_URL below to that domain and flip ALLOW_INDEXING to true, then
// push — every canonical URL, Open Graph tag, JSON-LD block and the
// sitemap all read from these two constants, so that one edit is the
// whole cutover.
export const SITE_URL = "https://beta.marshillpropertymanagement.com";
export const ALLOW_INDEXING = false;

export const SITE_NAME = "Mars Hill Realty Group";
export const DEFAULT_OG_IMAGE = "/brand/logo.png";

// Real contact numbers, reused for the Organization JSON-LD below (also
// shown in the site header's top bar).
export const PHONE_VA = "+17037769223";
export const PHONE_TX = "+15129420024";
export const PHONE_EMERGENCY = "+15126886476";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path including leading + trailing slash, e.g. "/service/property-management/" */
  path: string;
  /** Absolute or site-relative image URL; defaults to the logo. */
  image?: string;
};

// Builds canonical + Open Graph + Twitter-card fields from just a
// title/description/path, so every page gets the same SEO fields
// without repeating the same boilerplate on every page.
export function pageMetadata({ title, description, path, image }: PageMetaInput) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}

// --- JSON-LD structured data -------------------------------------------
// Plain objects (not React components) — drop into any page with:
//   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(x) }} />

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/brand/logo.png"),
    areaServed: [
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "Texas" },
    ],
    contactPoint: [
      { "@type": "ContactPoint", telephone: PHONE_VA, contactType: "customer service", areaServed: "VA" },
      { "@type": "ContactPoint", telephone: PHONE_TX, contactType: "customer service", areaServed: "TX" },
      {
        "@type": "ContactPoint",
        telephone: PHONE_EMERGENCY,
        contactType: "emergency",
        description: "After-hours emergency maintenance",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
