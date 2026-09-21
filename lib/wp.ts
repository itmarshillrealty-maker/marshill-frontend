// Fetches homepage content from the headless WordPress REST API at build
// time (this is a static export — there is no server at runtime, so every
// call here only ever runs during `next build`). Falls back to sensible
// placeholder content if WordPress has no entries yet or is unreachable,
// so the site never ships an empty homepage.

export type HeroSlide = {
  id: number;
  eyebrow: string;
  headline: string;
  subtitle: string;
  image: string;
};

export type ServiceCard = {
  id: number;
  icon: string;
  title: string;
  text: string;
};

export type Testimonial = {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
};

export type PropertyListing = {
  id: number;
  title: string;
  price: string;
  detail: string;
  image: string;
  statusSlug: string;
  statusLabel: string;
};

export type ListingFilter = { key: string; label: string };

export type HomeContent = {
  heroSlides: HeroSlide[];
  services: ServiceCard[];
  testimonials: Testimonial[];
  properties: PropertyListing[];
  filters: ListingFilter[];
};

// WORDPRESS_API_URL is the name already used by .github/workflows/deploy.yml
// (passed in from the WORDPRESS_API_URL repo secret) — WP_API_BASE is kept
// as an alternate name so a local .env.local can use either.
const WP_API_BASE =
  process.env.WORDPRESS_API_URL ||
  process.env.WP_API_BASE ||
  "https://beta.marshillpropertymanagement.com/wp/wp-json/wp/v2";

// ---------------------------------------------------------------------
// Fallback content — shown only when WordPress has nothing yet (fresh
// install) or can't be reached while building. Replace/remove once real
// entries exist under Hero Slides / Service Cards / Testimonials /
// Property Listings in wp-admin.
// ---------------------------------------------------------------------

const FALLBACK_HERO: HeroSlide[] = [
  {
    id: -1,
    eyebrow: "Founded in 2003 · Serving Virginia & Texas",
    headline: "Save time and money with a team that manages the details",
    subtitle:
      "Full-service real estate and property management across Virginia and Texas — for owners who want peace of mind and residents who want a place to call home.",
    image: "/hero/hero-1.jpg",
  },
];

const FALLBACK_SERVICES: ServiceCard[] = [
  {
    id: -1,
    icon: "ti-file-text",
    title: "New renters apply now",
    text: "100% paperless process. Decisions within 2 business days.",
  },
  {
    id: -2,
    icon: "ti-home-dollar",
    title: "Property management",
    text: "Risk-reducing guarantees and a network of quality vendors.",
  },
  {
    id: -3,
    icon: "ti-key",
    title: "Buying and selling",
    text: "Skilled negotiators representing your interests at every step.",
  },
  {
    id: -4,
    icon: "ti-building-bank",
    title: "Investment property",
    text: "Strategy built on market data and years of local knowledge.",
  },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: -1,
    initials: "MH",
    name: "Add your first testimonial",
    role: "wp-admin → Testimonials",
    quote:
      "This is placeholder text. Add real reviews under Testimonials in wp-admin and they'll replace this automatically on the next deploy.",
  },
];

const FALLBACK_PROPERTIES: PropertyListing[] = [];

// ---------------------------------------------------------------------

type WpTerm = { id: number; name: string; slug: string; taxonomy: string };

type WpEmbedded = {
  "wp:featuredmedia"?: { source_url?: string }[];
  "wp:term"?: WpTerm[][];
};

type WpPost = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  meta?: Record<string, string>;
  _embedded?: WpEmbedded;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function featuredImage(post: WpPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
}

function initialsFrom(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}

async function wpFetch(path: string): Promise<WpPost[] | null> {
  try {
    const res = await fetch(`${WP_API_BASE}${path}`);
    if (!res.ok) {
      console.warn(`[wp] ${path} returned ${res.status}, using fallback content.`);
      return null;
    }
    return (await res.json()) as WpPost[];
  } catch (err) {
    console.warn(`[wp] ${path} unreachable at build time, using fallback content.`, err);
    return null;
  }
}

export async function getHomeContent(): Promise<HomeContent> {
  const [heroPosts, servicePosts, testimonialPosts, propertyPosts] = await Promise.all([
    wpFetch("/hero-slides?orderby=menu_order&order=asc&per_page=20&_embed=1"),
    wpFetch("/service-cards?orderby=menu_order&order=asc&per_page=20"),
    wpFetch("/testimonials?orderby=menu_order&order=asc&per_page=50"),
    wpFetch("/property-listings?orderby=menu_order&order=asc&per_page=100&_embed=1"),
  ]);

  const heroSlides: HeroSlide[] =
    heroPosts && heroPosts.length
      ? heroPosts.map((p) => ({
          id: p.id,
          eyebrow: p.meta?.eyebrow || "",
          headline: stripHtml(p.title.rendered),
          subtitle: stripHtml(p.content.rendered),
          image: featuredImage(p) || "/hero/hero-1.jpg",
        }))
      : FALLBACK_HERO;

  const services: ServiceCard[] =
    servicePosts && servicePosts.length
      ? servicePosts.map((p) => ({
          id: p.id,
          icon: p.meta?.icon || "ti-home",
          title: stripHtml(p.title.rendered),
          text: stripHtml(p.content.rendered),
        }))
      : FALLBACK_SERVICES;

  const testimonials: Testimonial[] =
    testimonialPosts && testimonialPosts.length
      ? testimonialPosts.map((p) => {
          const name = stripHtml(p.title.rendered);
          return {
            id: p.id,
            initials: initialsFrom(name),
            name,
            role: p.meta?.role || "",
            quote: stripHtml(p.content.rendered),
          };
        })
      : FALLBACK_TESTIMONIALS;

  const properties: PropertyListing[] =
    propertyPosts && propertyPosts.length
      ? propertyPosts.map((p) => {
          const terms = p._embedded?.["wp:term"]?.flat() || [];
          const statusTerm = terms.find((t) => t.taxonomy === "listing_status");
          return {
            id: p.id,
            title: stripHtml(p.title.rendered),
            price: p.meta?.price || "",
            detail: p.meta?.detail || "",
            image: featuredImage(p),
            statusSlug: statusTerm?.slug || "other",
            statusLabel: statusTerm?.name || "Other",
          };
        })
      : FALLBACK_PROPERTIES;

  // Filter tabs are built from whichever statuses actually exist in
  // WordPress, in first-seen order — add a new status term in wp-admin
  // and its tab appears here with no code change.
  const seen = new Set<string>();
  const filters: ListingFilter[] = [{ key: "all", label: "All" }];
  for (const p of properties) {
    if (!seen.has(p.statusSlug)) {
      seen.add(p.statusSlug);
      filters.push({ key: p.statusSlug, label: p.statusLabel });
    }
  }

  return { heroSlides, services, testimonials, properties, filters };
}
