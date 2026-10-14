// Real content for the 4 homepage service pages, sourced from the
// corresponding pages on production (www.marshillpropertymanagement.com).
// These replace the temporary links that pointed straight at production.

export type ServiceStep = { title: string; text: string };
export type ServiceFaq = { q: string; a: string };
export type ServiceCta = { label: string; href: string; external?: boolean };

export type ServiceSection =
  | { type: "paragraphs"; heading?: string; paragraphs: string[] }
  | { type: "bullets"; heading: string; items: string[] }
  | { type: "steps"; heading: string; items: ServiceStep[] }
  | { type: "faq"; heading: string; items: ServiceFaq[] }
  | { type: "ctas"; heading?: string; items: ServiceCta[] };

export type ServicePageContent = {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  sections: ServiceSection[];
};

const OWNER_LOGIN =
  "https://app.propertyware.com/pw/index.html#/login/owner/marshillpropertymanagement";
const RESIDENT_LOGIN =
  "https://app.propertyware.com/pw/index.html#/login/tenant/marshillpropertymanagement";

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  "new-renters-apply-now": {
    slug: "new-renters-apply-now",
    title: "New Renters Apply Now",
    metaDescription:
      "New renters in Virginia and Texas can apply by following these 5 simple steps. We have a 100% paperless process and decisions are made within 2 business days of receiving a completed application.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Apply-To-Rent-Now-Page-Image-Suggested-Crop--scaled.jpg",
    intro: [
      "New renters in Virginia, Maryland, Washington D.C. and Texas can apply by following the 5 simple steps below. Our process is 100% paperless, and we make decisions within 2 business days of receiving a completed application.",
    ],
    sections: [
      {
        type: "steps",
        heading: "Rental Application Instructions",
        items: [
          {
            title: "1. View the home",
            text: "Homes are rented as-is, and in most cases you'll need to see the property in person before applying. Out-of-state renters may qualify for a sight-unseen exception with a property manager's approval.",
          },
          {
            title: "2. Review and sign Addendum A",
            text: "Read and agree to the Resident Handbook's Addendum A and Authorization to Release Information form, which includes our tenant selection criteria.",
          },
          {
            title: "3. Complete the residential lease application",
            text: "Every adult occupant (18+) completes their own application or is added as a co-applicant. Minors are listed as other applicants on the form.",
          },
          {
            title: "4. Submit your supporting documents",
            text: "A photo ID, proof of income (pay stubs, an offer letter, tax returns, or bank statements depending on employment), and two years of employment history.",
          },
          {
            title: "5. Pay the application and holding fees",
            text: "A $50 application fee per adult applicant, and a refundable holding fee equal to one month's rent. Both can be paid by ACH, in person at Wells Fargo, or by credit card (a 4% non-refundable processing fee applies to cards).",
          },
        ],
      },
      {
        type: "bullets",
        heading: "Good to Know",
        items: [
          "The holding fee is refunded in full if your application is denied, but becomes non-refundable if you're accepted and don't sign the lease within 48 hours.",
          "Cash, personal checks, and wire transfers are not accepted for application or holding fees.",
          "Applications are processed within 2-3 business days once both fees are received. When multiple applications come in for one home, they're all forwarded to the owner for final selection.",
        ],
      },
      {
        type: "ctas",
        heading: "Ready to apply?",
        items: [
          {
            label: "Review & sign Addendum A",
            href: "https://www.marshillpropertymanagement.com/service/resident-handbook/",
            external: true,
          },
          {
            label: "Fill out the residential lease application",
            href: "https://app.propertyware.com/pw/portals/marshillpropertymanagement/tenantApplication.action",
            external: true,
          },
          {
            label: "Pay the application fee",
            href: "https://square.link/u/evqJLFKT?src=embed",
            external: true,
          },
          {
            label: "Pay the holding fee",
            href: "https://square.link/u/XwlvvIY6?src=embed",
            external: true,
          },
        ],
      },
    ],
  },

  "property-management": {
    slug: "property-management",
    title: "Property Management",
    metaDescription:
      "We offer risk-reducing guarantees, turn-key solutions, and a network of quality service providers that result in a hassle-free real estate investment.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2019/02/Home-Page-Property-Management-Page-Replacement-Suggested-Crop-scaled.jpg",
    intro: [
      "Real estate can diversify an investment portfolio and protect wealth from stock-market swings, with the added benefits of tax advantages and appreciation. But the biggest disadvantage of owning a rental home isn't the home itself, it's the consequences of a poorly managed one.",
      "A lot of owners who self-manage underestimate the time, knowledge, and local relationships good property management actually takes. That experience is exactly what Mars Hill Realty Group brings to every property we manage.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Hire Mars Hill Realty to Manage Your Investment Correctly",
        items: [
          "We provide fast, friendly, and professional service tailored to your individual property management needs.",
          "We treat your investment property like it's our own, which translates into a property that is well-maintained and leased with a minimum amount of vacancy.",
          "We conduct extensive screening on all tenants and handle everything from pre-qualifying potential tenants to property maintenance.",
          "We offer full-service comprehensive property management services all in one place.",
          "We strive to provide an exceptional level of reliable customer service to all of our clients.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Leasing in Northern Virginia, DC, Maryland, and Austin, Texas",
        paragraphs: [
          "Our leasing process starts with market analysis, comparing recent rentals, current competition, and absorption rates to price your home correctly from day one.",
          "We market every listing with syndication to the major listing sites, professional photos, and video walkthroughs, then screen every applicant on employment, rental history, debt-to-income ratio, credit, and criminal history, backed by a phone interview.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Property Management in the DC Area and Austin, Texas",
        paragraphs: [
          "Once a tenant moves in, we handle move-in walk-throughs with checklists and photos, route every work order through our team with owner alerts and verification before any vendor gets paid, and keep owners and tenants in the loop through dedicated owner and tenant portals.",
        ],
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Owner login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
          { label: "Watch our services & fees overview video", href: "https://www.youtube.com/watch?v=4Fpz6xxQHAE", external: true },
          { label: "Get in touch", href: "/#contact" },
        ],
      },
    ],
  },

  "buying-and-selling": {
    slug: "buying-and-selling",
    title: "Buying and Selling",
    metaDescription:
      "Skilled negotiators representing your interests at every step, from listing to closing.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2019/02/Home-Page-Selling-Page-Replacement-Suggested-Crop-scaled.jpg",
    intro: [
      "At Mars Hill Realty Group, we're here to listen, inform, and guide you through one of the most important financial decisions you'll make, buying or selling a home. Price is only one lever in a negotiation; contract timelines, closing costs, and repairs all matter just as much, and we work with every client individually to understand their lifestyle and needs, not just a bedroom count or a zip code.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Choose Mars Hill Realty to Help You Buy",
        items: [
          "We are committed, full-time real estate professionals with many years of experience.",
          "We will provide you with the highest level of service, making the process as easy and enjoyable as possible.",
          "We will listen attentively to your needs and wants, and then come back to you with a plan that works for you.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Selling Your Home in Northern Virginia or Austin, Texas",
        paragraphs: [
          "For most families, a home is their largest financial asset, so selling one deserves an experienced professional, not just a sign in the yard. Contrary to the biggest myth in selling a home, market exposure alone isn't what sells a house; pricing, preparation, positioning, and negotiation all affect the final sale price, time on market, and whether the deal actually closes.",
        ],
      },
      {
        type: "steps",
        heading: "The Mars Hill Selling System (M3TNT)",
        items: [
          { title: "Market Intelligence", text: "Pricing your home correctly from real, current market data." },
          { title: "Market Preparation", text: "Getting your home ready to show at its best." },
          { title: "Market Positioning", text: "Presenting your home competitively against what's actually on the market." },
          { title: "Traffic Generation", text: "Driving qualified buyers to your listing." },
          { title: "Negotiation Expertise", text: "Representing your interests through every offer and counter." },
          { title: "Team Execution", text: "Carrying the deal through to a smooth closing." },
        ],
      },
      {
        type: "ctas",
        items: [
          { label: "Owner login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
          { label: "Get in touch", href: "/#contact" },
        ],
      },
    ],
  },

  investment: {
    slug: "investment",
    title: "Investment",
    metaDescription:
      "Strategy built on market data and years of local knowledge across the DC area and Central Texas.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2019/02/Home-Page-Investment-Page-Replacement-Suggested-Crop-scaled.jpg",
    intro: [
      "Do you have a vision for owning residual income-producing real estate in Northern Virginia or Texas? Mars Hill now oversees more than 350 properties for successful investors across both markets, and we believe everyone should own real estate in their investment portfolio, a home you live in is a liability, not an investment asset.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "How We Became Expert Investors and Property Managers",
        items: [
          "Benefits of Real Estate Investing",
          "Strategies for Real Estate Investing",
          "Case Studies for Two Metropolitan Markets",
          "Analysis Tools: Comparing, Validating and Valuing Properties",
          "Professionals (Pros) vs. Amateurs (Joes)",
          "Your Turn-Key Solution",
        ],
      },
      {
        type: "faq",
        heading: "Questions We Get Asked",
        items: [
          { q: "What real estate experience do you bring to the table?", a: "Our team manages and invests in real estate ourselves across Northern Virginia and Central Texas, so the advice we give comes from direct, local experience, not theory." },
          { q: "Where do you find good properties for your clients to invest in?", a: "Through our day-to-day work managing hundreds of properties, we see the market, the neighborhoods, and the deal flow most investors never get visibility into." },
          { q: "Why should I choose to invest in real estate?", a: "Real estate can diversify a portfolio, generate residual income, and offer tax advantages and appreciation that other asset classes don't." },
          { q: "How do I make money from my investment property?", a: "Primarily through monthly rental income plus long-term appreciation, with tax benefits along the way." },
          { q: "I don't have the money to pay for my investment property outright. How can I afford to invest?", a: "Most investors finance their first property rather than paying cash; we can walk you through what that typically looks like." },
          { q: "What kind of down payment will I need?", a: "Plan on at least 20% down for a first investment property." },
        ],
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Owner login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
          { label: "Get in touch", href: "/#contact" },
        ],
      },
    ],
  },
};

export function getServicePage(slug: string): ServicePageContent | undefined {
  return SERVICE_PAGES[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_PAGES);
}
