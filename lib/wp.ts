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
  featuredProperties: PropertyListing[];
  featuredFilters: ListingFilter[];
  vacationRentals: PropertyListing[];
  vacationFilters: ListingFilter[];
};

// WORDPRESS_API_URL is the name already used by .github/workflows/deploy.yml
// (passed in from the WORDPRESS_API_URL repo secret) — WP_API_BASE is kept
// as an alternate name so a local .env.local can use either.
const WP_API_BASE =
  process.env.WORDPRESS_API_URL ||
  process.env.WP_API_BASE ||
  "https://beta.marshillpropertymanagement.com/wp/wp-json/wp/v2";

// ---------------------------------------------------------------------
// Default content — the real copy from the old site, used until (and
// unless) a matching entry exists under Hero Slides / Service Cards /
// Testimonials / Property Listings in wp-admin, which take priority when
// present.
// ---------------------------------------------------------------------

const FALLBACK_HERO: HeroSlide[] = [
  {
    id: -1,
    eyebrow: "Founded in 2003 · Serving Virginia & Texas",
    headline: "Save Time And Money By Using Our Services",
    subtitle: "2,654 new renters enter the market every single day",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-1-scaled-1.jpg",
  },
  {
    id: -2,
    eyebrow: "",
    headline: "While Mars Hill Manages The Details",
    subtitle: "Focus On Making Revenue On Your Investment",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-2-scaled-1.jpeg",
  },
  {
    id: -3,
    eyebrow: "",
    headline: "We Set The Standard For Property Management",
    subtitle: "See Why Our Clients Come Back Time and Time Again",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-3-scaled-1.jpg",
  },
  {
    id: -4,
    eyebrow: "",
    headline: "Leave The Hard Work To Us",
    subtitle: "Take Back Control of Your Time",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-4-scaled-1.jpg",
  },
  {
    id: -5,
    eyebrow: "",
    headline: "Experience The Mars Hill Difference",
    subtitle: "Property Management Saves Time and Money",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-5-scaled-1.jpg",
  },
  {
    id: -6,
    eyebrow: "",
    headline: "Grow Your Investment Portfolio",
    subtitle: "Invest in DC Area and Austin, Texas Properties with Us",
    image:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-6-scaled-1.jpg",
  },
];

const FALLBACK_SERVICES: ServiceCard[] = [
  {
    id: -1,
    icon: "ti-file-text",
    title: "New Renters Apply Now",
    text: "New renters in Virginia, Maryland, Washington D.C. and Texas can apply by following these 5 simple steps. 100% paperless process, decisions within 2 business days.",
  },
  {
    id: -2,
    icon: "ti-home-dollar",
    title: "Property Management",
    text: "We offer risk-reducing guarantees, turn-key solutions, and a network of quality service providers that result in a hassle-free real estate investment.",
  },
  {
    id: -3,
    icon: "ti-key",
    title: "Buying and Selling",
    text: "Skilled negotiators representing your interests at every step, from listing to closing.",
  },
  {
    id: -4,
    icon: "ti-building-bank",
    title: "Investment",
    text: "Strategy built on market data and years of local knowledge across the DC area and Central Texas.",
  },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: -1,
    initials: "JP",
    name: "Jessica Prior",
    role: "Landlord",
    quote:
      "This property management company has been nothing but great! They cost more than others out there, but I learned first hand what can happen when you go with the cheaper property manager. Edward took my call and answered all the questions I had, sent me information, and got the process started with them managing our property all within a week of my initial contact...I have no doubt the experience will continue to be nothing but good, and look forward to growing my real estate portfolio with them!",
  },
  {
    id: -2,
    initials: "SP",
    name: "Suchit Patel",
    role: "Landlord",
    quote:
      "I have been using Mars Hill to rent out my properties for the last three months and they have been amazing to work with. All the employees are really responsive and walk you through the process of putting your property on the market for rent. Super professional and so far I have been very pleased with the Mars Hill Team.",
  },
  {
    id: -3,
    initials: "PM",
    name: "Patrick Merkel",
    role: "Tenant",
    quote:
      "We rented a property through Mars Hill in the Falls Church area and they were a great management company to work with. From time of lease signing to moving out, they made everything clear to me, great communications (both phone and email), and fast response to maintenance issues with vendors quickly responding. If you're looking to rent or buy in Virginia, I'd highly recommend these folks.",
  },
  {
    id: -4,
    initials: "BR",
    name: "Brian Roberts",
    role: "Tenant",
    quote:
      "Mars Hill Realty has proven to me that there are companies out there that provide good, quality service as a property management company. Everyone that I've spoken to has been professional, courteous, and responsive. They even walked through every section of the lease with me prior to me signing it. If you're looking to rent or buy in Virginia, I'd highly recommend these folks.",
  },
  {
    id: -5,
    initials: "RH",
    name: "Ron Howard",
    role: "Real Estate Broker",
    quote:
      "I am a Real Estate Broker in another state and I own three properties in Central Texas. I was referred to Mars Hill Realty by a friend. I cannot say enough good things about Mars Hill and the whole organized efficient team. They are on the ball, communicate well, have great reporting tools and are very nice people all the way around.",
  },
  {
    id: -6,
    initials: "LM",
    name: "Lori Maranise",
    role: "Real Estate Agent",
    quote:
      "I just had two clients rent a property through Mars Hill Texas and I was very impressed with the professionalism and responsiveness of their whole team. We worked particularly with Lori who was very friendly and helpful. The application process was very easy for my clients, and they stayed in touch throughout the whole process.",
  },
  {
    id: -7,
    initials: "SM",
    name: "Stefan McFarland",
    role: "Happy Seller, serving in the US Army",
    quote:
      "Excellent performance by Mars Hill Realty throughout the selling process that continually exceeded our expectations. Their efforts in generating buzz through their contacts and inside knowledge resulted in us receiving our full asking price after only six days on the market. If you are considering selling it yourself like we were, don't. We made more money selling with them, even after their commission, than we would have on our own.",
  },
  {
    id: -8,
    initials: "RD",
    name: "Raquel Dishinger",
    role: "Pastor's Wife, Happy Investor",
    quote:
      "Mars Hill Realty will do a phenomenal job in managing your rental property! They found us GREAT tenants within a week (their background check and process is excellent). Their web portal system is so helpful! Their customer service is impeccable and the staff answers their phones. They are the best!",
  },
  {
    id: -9,
    initials: "BH",
    name: "Brian and Rosie Hunt",
    role: "Teachers in Kuwait",
    quote:
      "We've had excellent service from Mars Hill Realty. Upon my wife and I receiving jobs overseas, we needed someone we could trust to take care of everything to rent our house. Edward Lui and his staff have done an impeccable job. I would definitely recommend Mars Hill Realty because they are professionals and stand by their word.",
  },
];

// Real listings, copied once from the old/production site's "Portfolio"
// plugin (marshillpropertymanagement.com/wp-json/wp/v2/fw-portfolio) — that
// plugin isn't installed here, so this is the one-time static snapshot of
// its 20 published items, split into the same two groups + tabs the old
// homepage used. statusSlug/statusLabel double as the matching taxonomy
// term slug/name in wp-admin (Property Listings → listing_status), so once
// a listing exists there with that slug it takes over from the row below
// with no code change — see the slug sets just below getHomeContent.
const FALLBACK_FEATURED_PROPERTIES: PropertyListing[] = [
  {
    id: -1,
    title: "2451 Midtown Avenue Apt 724 in Alexandria, VA",
    price: "$375,000",
    detail: "For Sale",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/06/305-Moulins-Ln-1-scaled.jpg",
    statusSlug: "for-sale",
    statusLabel: "For Sale",
  },
  {
    id: -2,
    title: "Sold in Leesburg, VA",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/11/1137-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -3,
    title: "Sold in Hutto, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/09/711-Liard-River-Rd-1.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -4,
    title: "81 Fendall Avenue in Alexandria, Virginia",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/09/fendall-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -5,
    title: "Sold in Georgetown, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/06/305-Moulins-Ln-1-scaled.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -6,
    title: "Sold in Georgetown, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/03/GetMedia-1.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -7,
    title: "Sold in Sterling, VA",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/09/front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -8,
    title: "Sold in Alexandria, VA",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/08/front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -9,
    title: "Sold in Georgetown, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/06/308-Debora-Dr-1-scaled.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -10,
    title: "Sold in Clarksburg, MD",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/02/Broadway-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -11,
    title: "Condo in National Harbor, MD",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/fleet.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -12,
    title: "Sold in Jarrell, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/05/front1210.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -13,
    title: "Sold in Round Rock, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/2302StirrupDr-large-001-ExteriorFront001-1500x994-72dpi.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -14,
    title: "Sold in Pflugerville, TX",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/stokes.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -15,
    title: "Sold in Fairfax, VA",
    price: "",
    detail: "Sold Investment Property",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/Wood-violet.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
];

const FALLBACK_VACATION_RENTALS: PropertyListing[] = [
  {
    id: -101,
    title: "The Lone Star Bungalow",
    price: "From $350/night",
    detail: "Georgetown, TX · 3 BR / 2.5 BA · Sleeps 8",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/10/IMG_3698-scaled.jpg",
    statusSlug: "central-texas-vacation-rentals",
    statusLabel: "Central Texas Vacation Rentals",
  },
  {
    id: -102,
    title: "JCS Farms",
    price: "From $450/night",
    detail: "5 BR / 3 BA · Sleeps 16",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/05/jcsfarms7.jpg",
    statusSlug: "northern-virginia-vacation-rentals",
    statusLabel: "Northern Virginia Vacation Rentals",
  },
  {
    id: -103,
    title: "The Berkshire",
    price: "From $920/night",
    detail: "7 BR / 3.5 BA · Sleeps 21",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/02/Berkshire-Front-c.jpg",
    statusSlug: "the-poconos-pennsylvania",
    statusLabel: "The Poconos, PA Vacation Rentals",
  },
  {
    id: -104,
    title: "The Great Pyrenees",
    price: "From $850/night",
    detail: "6 BR / 4.5 BA · Sleeps 22",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2019/02/front-2-1.jpg",
    statusSlug: "the-poconos-pennsylvania",
    statusLabel: "The Poconos, PA Vacation Rentals",
  },
  {
    id: -105,
    title: "The Khaki Campbell",
    price: "From $740/night",
    detail: "5 BR / 3.5 BA · Sleeps 19",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2019/02/Pineknoll-Front-2.jpg",
    statusSlug: "the-poconos-pennsylvania",
    statusLabel: "The Poconos, PA Vacation Rentals",
  },
];

// Any listing_status term whose slug lands in here is a vacation rental
// region rather than a for-sale/sold status — this is how a real wp-admin
// entry gets routed to the right section/tab automatically.
const VACATION_STATUS_SLUGS = new Set([
  "central-texas-vacation-rentals",
  "northern-virginia-vacation-rentals",
  "the-poconos-pennsylvania",
]);

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

  let featuredProperties: PropertyListing[];
  let vacationRentals: PropertyListing[];

  if (propertyPosts && propertyPosts.length) {
    const all: PropertyListing[] = propertyPosts.map((p) => {
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
    });
    featuredProperties = all.filter((p) => !VACATION_STATUS_SLUGS.has(p.statusSlug));
    vacationRentals = all.filter((p) => VACATION_STATUS_SLUGS.has(p.statusSlug));
  } else {
    featuredProperties = FALLBACK_FEATURED_PROPERTIES;
    vacationRentals = FALLBACK_VACATION_RENTALS;
  }

  // Filter tabs are built from whichever statuses actually exist in each
  // group, in first-seen order — add a new status/region term in wp-admin
  // and its tab appears here with no code change.
  const buildFilters = (listings: PropertyListing[]): ListingFilter[] => {
    const seen = new Set<string>();
    const filters: ListingFilter[] = [{ key: "all", label: "All" }];
    for (const p of listings) {
      if (!seen.has(p.statusSlug)) {
        seen.add(p.statusSlug);
        filters.push({ key: p.statusSlug, label: p.statusLabel });
      }
    }
    return filters;
  };

  return {
    heroSlides,
    services,
    testimonials,
    featuredProperties,
    featuredFilters: buildFilters(featuredProperties),
    vacationRentals,
    vacationFilters: buildFilters(vacationRentals),
  };
}
