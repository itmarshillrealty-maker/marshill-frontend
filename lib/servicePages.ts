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
  | { type: "ctas"; heading?: string; items: ServiceCta[] }
  | { type: "video"; heading?: string; caption?: string; youtubeId: string; title: string };

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
    title: "Property Management Services",
    metaDescription:
      "Mars Hill Realty Group is a full-service property management company in Virginia and Texas, committed to the belief that your real estate investment should be hassle-free.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2019/02/Home-Page-Property-Management-Page-Replacement-Suggested-Crop-scaled.jpg",
    intro: [],
    sections: [
      {
        type: "paragraphs",
        heading: "Do You Know The Biggest Disadvantage For Owning A Rental Home?",
        paragraphs: [
          "Diversifying your investment portfolio with real estate can be one of the most strategic and conservative decisions you make to protect your wealth from the unpredictability of the stock market. In addition to competitive risk to return ratios, real estate has the added benefit of tax advantages and asset appreciation that you can't get from owning shares of a company. However, every investment has its advantages and disadvantages. After taking over the management of many self-managing landlords, we can testify that the biggest disadvantage of rental real estate are the consequences of a poorly managed home.",
        ],
      },
      {
        type: "paragraphs",
        heading: "My Home Has Very Little Problems With It And I Can Easily Get To The Home When Needed. How Could I Possibly Manage It Poorly?",
        paragraphs: [
          "This is something many owners sincerely think when they purchase their first few rental homes. The simple answer is that you aren't a professional. This is why some people choose to hire an Accountant rather than do their own taxes, to save money, and reduce liability. The same goes for hiring an attorney. Most people would agree that when it comes to an activity that involves liability, it's best to hire a professional. I wouldn't feel so passionate about hiring a professional if we were talking about maintaining your lawn or washing your car because there is little to no liability involved. Sincerity simply cannot replace the experience and knowledge that a professional will bring to the table. Whether you are managing a home yourself or employing a company, here is a simple checklist to diagnose the management \"health\" of your investment home.",
        ],
      },
      {
        type: "video",
        caption: "Watch this video for an Overview of our Services and Fees:",
        youtubeId: "4Fpz6xxQHAE",
        title: "How We Help Landlords With Property Management | Your Favorite Homeboy - Edward Lui",
      },
      {
        type: "bullets",
        heading: "10 Questions to Diagnose your Property Management Health",
        items: [
          "Do I have access to current market data to understand the market price, absorption rates and the current competition?",
          "Do I understand the Principle of Price Elasticity and how to strategically position my home to meet my desired goals?",
          "Do I have a proven marketing plan to expose my home to the maximum amount of qualified renters on the market?",
          "Do I have the time and resources to respond to lead inquiries in a timely manner, prequalify and show the property during the day?",
          "Do I have a proven system to qualify a tenant that can result in less than a .001% eviction rate?",
          "Do I have a communications plan to maintain top-of-mind awareness with the tenant?",
          "Do I have a network of trusted vendors that I can rely on to make timely repairs or get a second opinion?",
          "Do I have an \"expert\" level of experience by conducting a leasing and management transaction over 1000 times?",
          "Do I have systems in place for automated rent payments, monthly statements and annual CPA-produced tax records?",
          "Do I have continuing education in negotiation expertise, property management, and local property codes to avoid potential lawsuits?",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "If you answered \"No\" to any of these questions, you are leaving money on the table and/or creating unnecessary liability with your investment. Good property managers should be able to answer all of these questions and give you, the owner, peace of mind that your home is being rented and cared for. Risk reduction and maximizing your return will more than account for the money you pay for a good property manager.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Hire Mars Hill Realty To Manage Your Investments Correctly",
        paragraphs: [
          "If you own real estate, the wisest thing you can do is to reduce your burden and liability of property management, and hire a professional. At Mars Hill Realty Group, we are a full-service property management company in Northern Virginia and the Austin, Texas area committed to the belief that your real estate investment should be hassle-free. Our expertise is making sure your real estate investment is being properly managed and leveraged so that it is making you money. To accomplish this, we provide full-service property management services. Our strategy revolves around building strong professional relationships within our own teams as well as the service providers that we use to ensure that your experience is a positive one. Our family of agents, vendors and community of owners all benefit from our passion for fair business practices.",
          "At Mars Hill, our goal is to create and maintain the financial success of your investment while freeing you from day-to-day management tasks that cost you time and money. Our rental strategy, market knowledge, varied resources, and effective communication set our services apart.",
        ],
      },
      {
        type: "bullets",
        heading: "Hire Mars Hill Realty To Save You Time and Money",
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
        heading: "Leasing In Northern Virginia And Austin, Texas",
        paragraphs: [
          "Market Analysis – Every listing strategy must begin with the right understanding of market fundamentals. We help you understand the market as well as we do so that you can make an informed decision on how much we should ask for rent. This includes a review of previous homes that have rented, current competition, absorption rates for your neighborhood and/or city, and other factors that can sometimes make a difference between offering a rental rate that includes a discount or a market premium.",
          "Marketing – We leverage the Internet to gain maximum exposure for your listing. Instead of just listing your property in the local real estate listing service, we also syndicate your listing to the most trafficked real estate websites on the Internet. We conduct video walkthroughs and also invest in the same professional-caliber photography and copywriting in your rental as we do in selling a home. Why? Because it works.",
          "Tenant Screening – We conduct a thorough review of an applicant's employment history, residential history, debt to income ratios, credit history and criminal history. In addition to that, we also have proprietary methods for screening a tenant and conduct a phone interview before we give you our recommendation.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Property Management In Austin, Texas",
        paragraphs: [
          "Walk-throughs – Risk-reduction is one of the most important tasks for a property manager. If your property manager does not understand that, it could be trouble! In order to reduce the risks of miscommunication and disputes over the property condition, we use move-in checklists and leverage photography during the three most critical times of a lease: prior to a tenant moving in, within two weeks after a tenant has moved in, and immediately following a tenant moving out.",
          "Work orders – Our goal is to provide a timely response to work orders and have access to a network of vendors that provide professional work and are cost-effective. We have work order systems that are transparent to the owner to foster trust and accountability. For example, every owner receives a real-time alert when a work order is submitted and all work must be verified via phone or in-person (depending on the type of repair) prior to the vendor receiving payment. Before and after photography is used whenever possible and all invoices, photographs and work order requests are stored in the owner's records for review at any time.",
          "Communications – We spend a lot of effort to make sure we have systems in place to communicate with our owners and tenants on a regular schedule. It's important for a property manager to stay \"top-of-mind\" with a tenant so that they will be remembered when a work order needs to be submitted and it reduces the likelihood of the property being neglected. We have invested in Owner Portals and Tenant Portals that can be used for paying a ledger balance, reviewing contracts, reviewing statements, submitting a work order and much more.",
          "If you're interested in reading more about how our company operates and what our company values are, you can visit an educational website that we created called www.WEmanageYOUhavepeace.com. You'll also find helpful questions to use when you interview a property manager in Northern Virginia and Austin, Texas.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Let Us Make The Most Of Your Investment!",
        paragraphs: [
          "At Mars Hill Realty Group, our goal is to provide our clients with a package of services that allows them the peace-of-mind of knowing their investment is in good hands. Interested in learning more? Fill out our contact form and we'll contact you within 24 hours to see how we can help!",
        ],
      },
      {
        type: "faq",
        heading: "Questions We Get Asked",
        items: [
          {
            q: "Can you provide access to current market data to understand the market price, absorption rates and the current competition?",
            a: "Every listing strategy must begin with the right understanding of market fundamentals. We help you understand the market as well as we do so that you can make an informed decision on how much we should ask for rent. This includes a review of previous homes that have rented, current competition, absorption rates for your neighborhood and/or city, and other factors that can sometimes make a difference between offering a rental rate that includes a discount or a market premium.",
          },
          {
            q: "Do you have a proven marketing plan to expose my home to the maximum amount of qualified renters on the market?",
            a: "We leverage the Internet to gain maximum exposure for your listing. Instead of just listing your property in the local real estate listing service, we also syndicate your listing to the most trafficked real estate websites on the Internet. We conduct video walkthroughs and also invest in the same professional-caliber photography and copywriting in your rental as we do in selling a home. Why? Because it works.",
          },
          {
            q: "Do you have a proven system to qualify a tenant that can result in less than a 1% eviction rate?",
            a: "We conduct a thorough review of an applicant's employment history, residential history, debt to income ratios, credit history and criminal history. In addition to that, we also have proprietary methods for screening a tenant and conduct a phone interview before we give you our recommendation.",
          },
          {
            q: "Do you have a communications plan to maintain top-of-mind awareness with the tenant?",
            a: "We understand the importance of easy and effective communication with tenants and owners. The easier it is to contact us, the quicker someone will notify us of an issue that we can address before it escalates. That is why we have invested in Owner and Tenant Portals. Both of these portals feed into the system that we use to manage and view work orders, financials, contracts and vendor activity. We are able to give the proper visibility for our owners and tenants. Both owners and tenants can submit work orders and get updates through their email. This centralized access is just part of what makes our client experience so highly rated.",
          },
          {
            q: "How do you reduce the risks of miscommunication and disputes over the property condition?",
            a: "Risk-reduction is one of the most important tasks for a property manager. We use move-in checklists and leverage photography during the three most critical times of a lease: prior to a tenant moving in, within two weeks after a tenant has moved in, and immediately following a tenant moving out.",
          },
          {
            q: "Do you have a network of trusted vendors that I can rely on to make timely repairs or get a second opinion?",
            a: "Our goal is to provide a timely response to work orders and have access to a network of vendors that provide professional work and are cost-effective. Every owner receives a real-time alert when a work order is submitted and all work must be verified via phone or in-person prior to the vendor receiving payment, with before-and-after photography used whenever possible.",
          },
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
