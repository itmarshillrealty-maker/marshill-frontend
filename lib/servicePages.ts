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

  "our-guarantees": {
    slug: "our-guarantees",
    title: "Our Guarantees",
    metaDescription:
      "Mars Hill Realty Group backs its property management service with real guarantees, including a 60-day rented guarantee and an eviction-free guarantee for Investor Level owners.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Owners-Dropdown-Our-Guarantees-Page-Image-Suggested-Crop-scaled.jpg",
    intro: [
      "We strongly believe that our processes reduce your risk and result in a hassle-free investment. That's why we put our word behind our work, and share the risk with you through the guarantees below.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Our Guarantees",
        items: [
          "Tenant Replacement Guarantee – If a tenant we place has to end the lease early for a reason the lease doesn't allow, we find a replacement qualified tenant and waive our Leasing Fee to do it.",
          "100% Satisfaction Guarantee – If you're not happy with our service, you can cancel your management contract with just 60 days' notice.",
          "Rented in 60 Days Guarantee* – If your home is vacant, move-in ready, and priced within our original recommendation, we'll find a qualified tenant within 60 days, or we credit your first month's management fee.",
          "Property Peace of Mind Guarantee* – We offer a $500 credit toward property damage we're unable to collect from the responsible tenant.",
          "Eviction Free Guarantee* – If we place a tenant and have to obtain a judgment for non-payment of rent, we cover the eviction cost up to $1,000.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: ["*Exclusive to Investor Level Partner Club members."],
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

  "owner-portal-login": {
    slug: "owner-portal-login",
    title: "Owner Portal Login",
    metaDescription:
      "Mars Hill Realty Group owners get 24/7 access to work orders, statements, ledgers, and property documents through the Owner Portal.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Owners-Dropdown-Our-Guarantees-Page-Image-Suggested-Crop-scaled.jpg",
    intro: [
      "Part of our \"hassle-free\" experience means giving you the resources to access your account data 24 hours a day.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "What You Can Do From The Owner Portal",
        items: [
          "Check the work order history for your property.",
          "Review work order invoices.",
          "Access your monthly statements.",
          "View a photo database from walk-throughs and work orders.",
          "Review your ledger and pay any balance.",
          "Access your current lease, property management contract, and other property documents.",
        ],
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Owner Portal Login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
          { label: "Get in touch", href: "/#contact" },
        ],
      },
    ],
  },

  "forms-and-information": {
    slug: "forms-and-information",
    title: "Forms and Information",
    metaDescription:
      "Download the property management forms and documents Mars Hill Realty Group owners need, including state-specific agreements and disclosures for Virginia and Texas.",
    heroImage:
      "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Owners-Dropdown-Our-Guarantees-Page-Image-Suggested-Crop-scaled.jpg",
    intro: [],
    sections: [
      {
        type: "ctas",
        heading: "Supporting Documents For Property Management (All States)",
        items: [
          {
            label: "Owner Information Form",
            href: "https://drive.google.com/file/d/11C1RK7aScSeCTqleEptjGkpTFL-6nbTA/view?usp=sharing",
            external: true,
          },
          {
            label: "W-9 Form (IRS)",
            href: "https://www.irs.gov/pub/irs-pdf/fw9.pdf",
            external: true,
          },
        ],
      },
      {
        type: "ctas",
        heading: "Virginia Property Management Documents",
        items: [
          {
            label: "VA Disclosure Form",
            href: "https://drive.google.com/file/d/1ZcTzHjL5Tsos_LwTTUSX9FzJHSDE4KQg/view?usp=drive_link",
            external: true,
          },
          {
            label: "VA Property Management Agreement",
            href: "https://drive.google.com/file/d/1ycFnGnu6WFI5QU6Q3Z0I-vLn7OotDD-M/view?usp=drive_link",
            external: true,
          },
          {
            label: "VA Listing Agreement",
            href: "https://drive.google.com/file/d/101BUdndMV-y4NoRAUOHzE8h_9bWxHpkA/view?usp=drive_link",
            external: true,
          },
        ],
      },
      {
        type: "ctas",
        heading: "Texas Property Management Documents",
        items: [
          {
            label: "Texas Leasing & Property Management Agreement",
            href: "https://drive.google.com/file/d/1NeGyUkInMTKzOamfmXQSICIuRayLr8Pj/view?usp=sharing",
            external: true,
          },
          {
            label: "Information About Brokerage Services",
            href: "https://drive.google.com/file/d/19fg4_oEM5Ao4Ws2-QT9ShK5G-rdCd45R/view?usp=sharing",
            external: true,
          },
        ],
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Owner login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
        ],
      },
    ],
  },

  // --- Partner Club -----------------------------------------------------
  // NOTE: hero images below are hot-linked straight from production
  // (www.marshillpropertymanagement.com) rather than the beta media
  // library convention used above — confirm these specific files were
  // migrated into beta's own wp-content/uploads before go-live, same as
  // the other pages' images.

  "partner-club-overview": {
    slug: "partner-club-overview",
    title: "Partner Club",
    metaDescription:
      "The Mars Hill Partner Club rewards owners, residents, vendors, and referral partners for being part of the Mars Hill Realty Group community.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Partner-Club-Referal-Partner-Program-Dropdown-Preferred-Leasing-Agents-Suggested-Crop-scaled.jpg",
    intro: [
      "Managing properties isn't just about buildings, it's about building community. The Mars Hill Partner Club is how we recognize everyone who makes that community work: owners, residents, vendors, and the agents who refer business our way.",
      "Members get real guarantees and benefit packages, vendors who join our Alliance Agreement get priority work and faster pay (we pay within 30 days), and we focus our vendor network on the top three providers in each service category so quality stays high.",
      "Take a deeper look at the relationship that applies to you below, and join the club.",
    ],
    sections: [
      {
        type: "ctas",
        heading: "Choose Your Program",
        items: [
          { label: "Owner Program", href: "/service/owner-program/" },
          { label: "Tenant Program", href: "/service/tenant-program/" },
          { label: "Vendor Program", href: "/service/vendor-program/" },
          { label: "Referral Partner Program", href: "/service/referral-partner-program/" },
        ],
      },
      {
        type: "video",
        heading: "See How It Works",
        youtubeId: "dVgKniedz-I",
        title: "Mars Hill Partner Club overview",
      },
    ],
  },

  "owner-program": {
    slug: "owner-program",
    title: "Owner Program",
    metaDescription:
      "Mars Hill Realty Group's Owner Program has two membership levels, Investor and Landlord, each with real guarantees that protect your investment.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Mars-Hill-Club-for-Owners-Image-Suggested-Crop-scaled.jpg",
    intro: [
      "The Partner Club has two owner membership levels. Fees are charged monthly, starting when your management contract starts.",
    ],
    sections: [
      {
        type: "paragraphs",
        heading: "Investor Level — $16/month",
        paragraphs: [
          "All new owners are enrolled automatically at the Investor Level.",
        ],
      },
      {
        type: "bullets",
        heading: "Investor Level Guarantees",
        items: [
          "Tenant Replacement: a replacement tenant with waived leasing fees if a tenant leaves early for a reason the lease doesn't allow.",
          "100% Satisfaction: cancel with 60 days' notice, no questions asked.",
          "Rented in 60 Days: a new tenant within 60 days of vacancy, or your first month's management fee is credited.",
          "Property Peace of Mind: a $500 credit toward damage that can't be recovered from the tenant.",
          "Eviction Free: eviction costs covered up to $1,000 after a non-payment judgment.",
        ],
      },
      {
        type: "bullets",
        heading: "Investor Level Services",
        items: [
          "Professional photography and videography of your listing.",
          "24/7 owner portal access.",
          "Access to our vetted vendor network.",
          "A newsletter with vendor discounts.",
          "A free rental analysis for future investments.",
          "Office line monitored weekdays and weekends, 8am to 5pm CST.",
          "A 24-hour emergency maintenance hotline.",
        ],
      },
      {
        type: "bullets",
        heading: "Investor-Only Perks",
        items: [
          "10% off Mars Hill maintenance.",
          "Bi-monthly filter delivery.",
          "Investor-exclusive vendor discounts.",
          "A $175 credit toward temporary A/C or heat equipment in an emergency.",
          "The option to request a third bid on major repairs.",
          "A portfolio consultation.",
          "Priority access to investor-grade properties.",
          "Exclusive payment terms on expense balances.",
          "5% to 50% off the nightly rate at Mars Hill's own vacation rentals.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Landlord Level",
        paragraphs: [
          "Owners who opt out of the Investor Level perks are enrolled at the Landlord Level instead, at no fee. You still get the Tenant Replacement and 100% Satisfaction guarantees, professional photography, 24/7 owner portal access, vendor network access, our newsletter, a free rental analysis, and 5% off maintenance.",
          "Deductibles and other limitations may apply to the guarantees above.",
        ],
      },
      {
        type: "video",
        heading: "More About The Owner Program",
        youtubeId: "XoMzM21Oz3Q",
        title: "Mars Hill Owner Program",
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Owner login", href: OWNER_LOGIN, external: true },
          { label: "Resident login", href: RESIDENT_LOGIN, external: true },
        ],
      },
    ],
  },

  "tenant-program": {
    slug: "tenant-program",
    title: "Tenant Program",
    metaDescription:
      "Mars Hill Realty Group's resident insurance benefit packages cover liability and contents, plus perks like a 24-hour work order hotline and maintenance discounts.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Partners-Dropdown-Tenant-Program-Page-Replacement-Suggested-Crop-scaled.jpg",
    intro: [],
    sections: [
      {
        type: "paragraphs",
        heading: "Option A: Master Insurance Benefits Package — $40/month",
        paragraphs: [
          "Covers $100,000 in renters liability and $10,000 in contents, with an easy claims process. Add-on protections are available: $1,500 pet damage, $1,000 bed bug, $500 mold remediation, and $1,000 loss of rental income.",
          "Claims assistance: 888-814-6950, Option 2.",
        ],
      },
      {
        type: "ctas",
        items: [
          {
            label: "Submit Contents Claim",
            href: "https://www.apenroll.com/Claim_Submission.aspx",
            external: true,
          },
        ],
      },
      {
        type: "bullets",
        heading: "Option A Benefits",
        items: [
          "Newsletter with vendor discounts.",
          "Monthly filters where applicable.",
          "24-hour emergency work order hotline.",
          "A pre-move-in walkthrough and orientation.",
          "Eligibility for our rent assistance program.",
          "Grace Pass: one-time forgiveness of a returned payment or late fee.",
          "24/7 resident portal access.",
          "Renter to Owner Concierge: homebuying consultation plus a monthly commission credit toward a home purchase if Mars Hill represents you as the buyer.",
          "10% off maintenance.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Option B: Tenant Insurance Benefits Package — $35/month",
        paragraphs: [
          "For residents who'd rather carry their own renters insurance instead of Mars Hill's coverage. If you choose this option, your policy must meet these requirements:",
        ],
      },
      {
        type: "bullets",
        heading: "Option B Requirements",
        items: [
          "Proof of renters insurance provided before move-in.",
          "At least $100,000 in general liability coverage.",
          "Mars Hill Realty Group, Inc. and the property owner named as additional interest.",
          "Coverage maintained for the full lease term and any renewals — a lapse can lead to eviction.",
          "Your insurer emails us the Declarations page before your pre-move-in walkthrough; keys and codes aren't released until it arrives.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Option B includes the same benefits listed above, at 5% off maintenance with a smaller monthly commission credit toward a home purchase.",
          "Deductibles and other limitations may apply.",
        ],
      },
      {
        type: "video",
        heading: "More About The Tenant Program",
        youtubeId: "XpGTsSxG8cE",
        title: "Mars Hill Tenant Program",
      },
    ],
  },

  "vendor-program": {
    slug: "vendor-program",
    title: "Vendor Program",
    metaDescription:
      "Mars Hill Realty Group rates vendors on a five-star system and gives priority work, faster pay, and free advertising to vendors who join our Alliance Agreement.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Prefered-Vendors-Page-Image-scaled.jpg",
    intro: [
      "We rate every vendor we work with on a five-star internal system. Priority work goes to the vendors with the highest professionalism and quality at reasonable prices, because we're looking for long-term relationships, not one-off jobs.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Alliance Agreement Benefits",
        items: [
          "Newsletter discounts to our owners and residents.",
          "Priority of work.",
          "Free advertising.",
          "Introductions to strategic partners.",
          "A defined workflow with a documented escalation process.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Want to join our Vendor Alliance? Email our service support team at Service@MarsHillRealty.com to get started.",
        ],
      },
      {
        type: "video",
        youtubeId: "3r_BgfTar78",
        title: "Mars Hill Vendor Program",
      },
    ],
  },

  "referral-partner-program": {
    slug: "referral-partner-program",
    title: "Referral Partner Program",
    metaDescription:
      "Real estate agents who refer management clients to Mars Hill Realty Group earn a referral fee, and we refer that client back to you when they buy or sell.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Partner-Club-Referal-Partner-Program-Dropdown-Preferred-Leasing-Agents-Suggested-Crop-scaled.jpg",
    intro: [
      "Referral partners are our champions, whether that's referring a landlord directly or introducing us to someone who needs a property manager. We stay in touch through our newsletter and make strategic vendor introductions along the way.",
      "Licensed real estate agents who refer a management client earn a referral fee, and we refer that client back to you when they're ready to buy or sell. Leasing agents can also receive our leads as a Preferred Leasing Agent.",
    ],
    sections: [
      {
        type: "ctas",
        items: [
          { label: "Leasing Agents", href: "/service/leasing-agents/" },
          { label: "Referral Agents", href: "/service/referral-agents/" },
        ],
      },
      {
        type: "video",
        youtubeId: "AAFueVQRPOY",
        title: "Mars Hill Referral Partner Program",
      },
    ],
  },

  "leasing-agents": {
    slug: "leasing-agents",
    title: "Leasing Agents",
    metaDescription:
      "Mars Hill Realty Group relies on agent partners to show available rentals, sending out 30 to 50 leads a month to our leasing agent community.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Partner-Club-Referal-Partner-Program-Dropdown-Preferred-Leasing-Agents-Suggested-Crop-scaled.jpg",
    intro: [
      "We rely on agent partners to show our available rentals, and we receive about 30 to 50 leads a month. Many of those leads are already pre-qualified through our Prequalify to View Homes process.",
    ],
    sections: [
      {
        type: "steps",
        heading: "How We Process Leads",
        items: [
          {
            title: "1. We Log The Lead",
            text: "Our support team logs every lead in a tracking spreadsheet, including the property address, the date received, and whether the prospect is already pre-qualified.",
          },
          {
            title: "2. We Send It To Our Agent Partners",
            text: "The lead goes out to our agent partner community.",
          },
          {
            title: "3. An Agent Claims It",
            text: "An interested agent replies by email and keeps the spreadsheet updated as the relationship progresses, which is what keeps agent commissions paid on time.",
          },
        ],
      },
      {
        type: "ctas",
        heading: "Join Our Leasing Agent List",
        items: [
          {
            label: "Preferred Leasing Agent Agreement",
            href: "https://drive.google.com/file/d/1S7C-2STDAx_KpXs8ttOiEK2F9SkORv_0/view?usp=sharing",
            external: true,
          },
        ],
      },
    ],
  },

  "referral-agents": {
    slug: "referral-agents",
    title: "Referral Agents",
    metaDescription:
      "Real estate agents who refer a management client to Mars Hill Realty Group earn a referral fee, and keep their buyer or seller relationship intact.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Partner-Club-Referal-Partner-Program-Dropdown-Preferred-Leasing-Agents-scaled.jpg",
    intro: [
      "We know agents worry about handing off a client to a property manager: will that manager represent your brand well, and will you stay the trusted contact when that client is ready to buy or sell? Here's how we handle that relationship.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Why Agents Refer To Us",
        items: [
          "Return On Time Invested: you stay focused on your core business while we become your client's single point of contact for buying, selling, and managing.",
          "Trust: clients who want to buy or sell are referred back to the agent who sent them to us, tracked in our own database — and we maintain a property-to-employee ratio of about 25:1 with an eviction rate under 1%.",
          "Communication: owners, residents, and agents all stay in the loop through our portals and database, so nothing falls through the cracks.",
          "Experience: decades of industry experience, with a team that averages eight years with the company.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "As a thank-you, referring agents receive one month's management fee when their referral becomes a managed property.",
        ],
      },
      {
        type: "ctas",
        items: [{ label: "For more information, contact us today!", href: "/#contact" }],
      },
      {
        type: "video",
        youtubeId: "AAFueVQRPOY",
        title: "Mars Hill Referral Agents",
      },
    ],
  },

  // --- Residents (current-residents branch) ------------------------------

  "maintenance-troubleshooting": {
    slug: "maintenance-troubleshooting",
    title: "Maintenance Troubleshooting",
    metaDescription:
      "Common maintenance issues residents can troubleshoot themselves, and which ones count as emergencies that need our 24-hour hotline.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Maintenance-Troubleshooting-Page-Image-scaled.jpg",
    intro: [
      "All work orders must be submitted through your resident portal, per your lease — that's the fastest way to get a maintenance team member assigned. This guide is meant to help you solve common issues yourself and recognize which ones are time-sensitive.",
      "This guide is informational only. You're responsible for your own safety when deciding how to handle an issue, and Mars Hill Realty Group isn't liable for losses that result from following it. When in doubt, or for anything life- or health-threatening, call 911 first and then our 24-hour emergency maintenance hotline.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Common Issues By Category",
        items: [
          "Appliances: garbage disposal not working, dishwasher not coming on, dishwasher clogged.",
          "Electrical: a switch or outlet not working, a hard-wired smoke detector alarming, an automatic garage door that won't close, or any electrical hazard (potential emergency).",
          "Gas: the smell of gas (potential emergency — call 911 first, then us).",
          "HVAC: system not coming on, poor airflow, not cooling properly, no heat below 32°F (potential emergency), or no A/C above 90°F (potential emergency).",
          "Plumbing: clogged toilets or drains, low water pressure, leaks, ceiling leaks, an unusable bathroom, an uncontainable leak, running sprinklers indoors, water heater failure, or a sewer backup (all potential emergencies except low pressure and minor leaks).",
          "Security: a break-in or burglary (call 911 first), being locked out, a broken door or window, an alarm that won't turn off, or a broken fence with a pet safety concern.",
          "Structural: an active fire (call 911 first), storm damage to the roof, or fallen tree limbs on the property.",
        ],
      },
      {
        type: "ctas",
        heading: "Need To Report Something?",
        items: [
          { label: "Submit a Work Order", href: "/service/submit-a-work-order/" },
          {
            label: "24-Hour Emergency Hotline",
            href: "tel:5126886476",
            external: true,
          },
        ],
      },
    ],
  },

  "emergency-after-hours": {
    slug: "emergency-after-hours",
    title: "Emergency After Hours",
    metaDescription:
      "What counts as a maintenance emergency at Mars Hill Realty Group, and how to reach our 24-hour emergency maintenance hotline.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Emergency-After-Hours-Assistance-Page-Image-scaled.jpg",
    intro: [
      "Any time-sensitive work order that may be an emergency should be phoned in directly to our Emergency Maintenance Hotline at 512-688-6476, any time, day or night.",
    ],
    sections: [
      {
        type: "paragraphs",
        heading: "What Counts As An Emergency",
        paragraphs: [
          "Time-sensitive work orders get a response as soon as the request comes in. We define an emergency as anything potentially life- or health-threatening:",
        ],
      },
      {
        type: "bullets",
        heading: "Emergencies By Category",
        items: [
          "Security: an active fire or a break-in (call 911 first), a broken door or window that can't be secured on the first floor, an alarm that won't stop sounding, running sprinklers indoors, or a broken fence with a dangerous pet situation.",
          "Structural: storm damage to the roof with potential water penetration.",
          "Plumbing: an unusable bathroom, burst supply lines, water heater failure or no water, or a sewer backup into the home.",
          "Electrical: a high-voltage hazard.",
          "HVAC: no heat when it's below 32°F, or no A/C when it's above 90°F.",
        ],
      },
      {
        type: "bullets",
        heading: "What's Not An Emergency",
        items: ["Noisy neighbors.", "Being locked out of your home."],
      },
    ],
  },

  "resident-portal-login": {
    slug: "resident-portal-login",
    title: "Resident Portal Login",
    metaDescription:
      "Mars Hill Realty Group residents get a personalized portal to submit work orders, pay rent, view statements, and access lease documents.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Maintenance-Troubleshooting-Page-Image-scaled.jpg",
    intro: [
      "We built a personalized portal so you can manage your lease on your own schedule. Log in below, or for help with portal access or usage, contact the Propertyware helpdesk at 1-855-473-7729, Option 2 (residents only).",
    ],
    sections: [
      {
        type: "bullets",
        heading: "What You Can Do From The Resident Portal",
        items: [
          "Submit work orders.",
          "Pay rent and set up auto-pay.",
          "Access your monthly statements.",
          "View a photo database from walk-throughs.",
          "Review your ledger and pay any balance.",
          "Give notice when your lease is ending.",
          "Access your lease, your renters insurance on file, and other property documents.",
        ],
      },
      {
        type: "ctas",
        heading: "24/7 Portal Access",
        items: [
          { label: "Resident Portal Login", href: RESIDENT_LOGIN, external: true },
          { label: "Owner login", href: OWNER_LOGIN, external: true },
        ],
      },
    ],
  },

  "submit-a-work-order": {
    slug: "submit-a-work-order",
    title: "Submit A Work Order",
    metaDescription:
      "How to submit a maintenance work order at Mars Hill Realty Group, our response times, and the repair deductible that applies.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Emergency-After-Hours-Assistance-Page-Image-scaled.jpg",
    intro: [
      "Before you submit, check our Maintenance Troubleshooting guide — a quick fix there could save you the repair deductible. Ready to submit? Use the button below.",
    ],
    sections: [
      {
        type: "ctas",
        items: [
          {
            label: "Submit a Work Order",
            href: "https://app.propertymeld.com/login/?next=/",
            external: true,
          },
        ],
      },
      {
        type: "paragraphs",
        heading: "How To Submit A Work Order",
        paragraphs: [
          "Work orders must be submitted through the online portal; calling in is optional, and only for emergencies. A portal submission automatically alerts our maintenance team and your owner. If you have trouble with the portal itself, contact the Propertyware helpdesk at 1-855-473-7729, Option 2.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Response Times And Access",
        paragraphs: [
          "We acknowledge every work order by noon the next business day. If an in-house technician is assigned, you'll get 12 to 24 hours' notice and remote access can be arranged. If an outside vendor is assigned, you'll have their contact information by the end of the next business day, and vendors are expected to respond within 24 hours.",
          "If you're unresponsive to an assigned vendor for 7 days, a $70 administration fee applies. For time-sensitive jobs that need same-day access without you present, a $100 administration fee plus $75/hour applies for a walkthrough technician to let the vendor in.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Repair Deductible",
        paragraphs: [
          "A repair deductible, typically $25 to $100 per your lease, applies to every work order. If a repair is 100% caused by resident damage, the full cost is billed to the resident instead.",
        ],
      },
    ],
  },

  "move-in-procedures": {
    slug: "move-in-procedures",
    title: "Move In Procedures",
    metaDescription:
      "What to expect from Mars Hill Realty Group's pre-move-in and 1-week post-move-in walkthroughs.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Emergency-After-Hours-Assistance-Page-Image-scaled.jpg",
    intro: [],
    sections: [
      {
        type: "steps",
        heading: "Your Two Move-In Walkthroughs",
        items: [
          {
            title: "Pre Move-In Walkthrough (2 days before move-in)",
            text: "We confirm your utilities, deposits, and renters insurance are all in place, walk through key home components (filters, smoke detectors, shut-offs, breakers, and the HVAC condensate line), and confirm there are no emergencies since the home is rented as-is. Keys and/or your smart-lock code are released by our office staff, not the walkthrough technician — rekeying the mailbox is the resident's responsibility. We don't schedule walkthroughs on major holidays, and weekend scheduling carries a $200 fee.",
          },
          {
            title: "1-Week Post Move-In Walkthrough",
            text: "Document any defects on the Texas TAR Inventory and Condition Form or the VA/MD/DC GCAAR Property Inspection Report within your first 5 to 7 days. Our staff then does their own walkthrough, photographs the home, and uploads the signed report to your portal. An incomplete report triggers a $50 trip charge, and any defect not listed on your form becomes your responsibility at move-out.",
          },
        ],
      },
    ],
  },

  "move-out-procedures": {
    slug: "move-out-procedures",
    title: "Move Out Procedures",
    metaDescription:
      "Mars Hill Realty Group's move-out walkthrough process and how your security deposit is handled.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Emergency-After-Hours-Assistance-Page-Image-scaled.jpg",
    intro: [],
    sections: [
      {
        type: "bullets",
        heading: "Post Move-Out Walkthrough",
        items: [
          "Move out by 11:59pm on your lease end date.",
          "Return all keys, fobs, pool and parking passes, and garage openers to our office in a labeled bag during business hours.",
          "We do our walkthrough within 48 hours and compare it against your move-in form. You're welcome to attend, just let our office know in advance.",
          "We don't do walkthroughs on holidays or weekends.",
        ],
      },
      {
        type: "bullets",
        heading: "Security Deposit",
        items: [
          "Your deposit amount was set at application approval and is stated in your lease.",
          "A lease breach or unreimbursed charges can lead to lease termination, with costs taken from your deposit.",
          "We itemize any deductions within 30 days of move-out — without a forwarding address on file, we can't send an itemization or a refund.",
          "Your deposit can't be applied toward your last month's rent.",
          "No interest accrues on security deposits.",
        ],
      },
    ],
  },

  "approved-vendors": {
    slug: "approved-vendors",
    title: "Approved Vendors",
    metaDescription:
      "Mars Hill Realty Group's approved vendor list for Texas and Virginia residents — carpet cleaning, home cleaning, and locksmith services.",
    heroImage:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/05/Maintenance-Troubleshooting-Page-Image-scaled.jpg",
    intro: [
      "Need a vendor for something that's on you, not us, like routine carpet cleaning at move-out? Here's who we recommend. Let carpet cleaners know if you have pets so they can apply an odor treatment, and let any locksmith know the property is Mars Hill-managed so billing and our key system stay in sync.",
    ],
    sections: [
      {
        type: "bullets",
        heading: "Approved Vendors — Texas",
        items: [
          "Carpet cleaning: Diamondback Cleaners, (512) 864-4023.",
          "Carpet cleaning: Steamers Carpet Care, (512) 573-8552.",
          "Carpet cleaning: Tru Carpet Cleaning, (512) 930-7721.",
          "Home cleaning: Love Bug Cleaning Crew, (512) 979-5126.",
          "Home cleaning: Empire JXJ, (512) 912-6292.",
          "Locksmith: Mr. Rekey Locksmith Service, (512) 929-5397.",
        ],
      },
      {
        type: "bullets",
        heading: "Approved Vendors — Virginia",
        items: [
          "Carpet cleaning: Stainbusters Carpet Cleaning, (571) 243-1525.",
          "Carpet cleaning: Neighborhood Cleaning Services, (703) 592-9052.",
          "Carpet cleaning: APT Carpet Cleaners, (703) 379-4315.",
          "Home cleaning: You've Got Maids, (571) 732-2199.",
          "Home cleaning: Two Maids and a Mop, (703) 910-3600.",
          "Home cleaning: Fast Maid Service, (703) 559-4555 — not for carpet cleaning. $125/hour regular rate, discounted to $95/hour with our Master Insurance package or $100/hour with the Tenant Insurance package.",
          "Locksmith: Baldino's Lock & Key, (703) 378-3555.",
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
