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
  link: string;
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
  slug: string;
  title: string;
  price: string;
  detail: string;
  description: string;
  image: string;
  statusSlug: string;
  statusLabel: string;
};

export type ListingFilter = { key: string; label: string };

export type SkillBar = { title: string; percent: number };
export type SocialLink = { platform: string; url: string };

export type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  phone: string;
  image: string;
  bio: string;
  skills: SkillBar[];
  social: SocialLink[];
};

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

// Team Members specifically are sourced straight from the CURRENT live site,
// not beta — that's where the real roster actually lives and gets updated
// (see the "Marshill Team REST Exposure" plugin), matching the agreed
// long-term architecture of the old WordPress staying on as the content
// backend. Every other content type above still defaults to beta.
const TEAM_API_BASE =
  process.env.TEAM_API_URL ||
  "https://www.marshillpropertymanagement.com/wp-json/wp/v2";

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

// Links point straight at production's own "Services" pages (Brizy-built,
// rich content that isn't worth re-authoring here) — same backend-stays-
// on-the-old-site approach as everywhere else; add a "link" custom field
// on a real "Service Cards" entry in wp-admin to override any of these.
const FALLBACK_SERVICES: ServiceCard[] = [
  {
    id: -1,
    icon: "ti-file-text",
    title: "New Renters Apply Now",
    text: "New renters in Virginia, Maryland, Washington D.C. and Texas can apply by following these 5 simple steps. 100% paperless process, decisions within 2 business days.",
    link: "https://www.marshillpropertymanagement.com/service/new-renters-apply-now/",
  },
  {
    id: -2,
    icon: "ti-home-dollar",
    title: "Property Management",
    text: "We offer risk-reducing guarantees, turn-key solutions, and a network of quality service providers that result in a hassle-free real estate investment.",
    link: "https://www.marshillpropertymanagement.com/service/property-management/",
  },
  {
    id: -3,
    icon: "ti-key",
    title: "Buying and Selling",
    text: "Skilled negotiators representing your interests at every step, from listing to closing.",
    link: "https://www.marshillpropertymanagement.com/service/buying-and-selling/",
  },
  {
    id: -4,
    icon: "ti-building-bank",
    title: "Investment",
    text: "Strategy built on market data and years of local knowledge across the DC area and Central Texas.",
    link: "https://www.marshillpropertymanagement.com/service/investment/",
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

// Real team roster, pulled from production's "Team Members" REST endpoint
// (added by the "Marshill Team REST Exposure" plugin — see getTeamMembers
// below) and kept here as a backup snapshot in case production is ever
// unreachable at build time. Real post IDs are kept (not placeholder
// negative ones) so the fallback can still be used to look up a member's
// detail page/contact form the same way as a live-fetched one. Drafts and
// private entries on production are intentionally left out.
const FALLBACK_TEAM: TeamMember[] = [
  {
    id: 11637,
    slug: "edward",
    name: "Edward W. Lui",
    role: "Broker/President",
    phone: "(571) 267-8639",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2017/01/Edward-Lui-Headshot-by-Vadym-Nov-22-1-1.jpeg",
    bio: "Edward is the Designated Broker and President of Mars Hill Realty Group. He loves developing new ideas to grow the company and building a company culture around our core values.\n\nHe graduated from the University of Rochester in NY where he met his wife, and after graduation, joined the US Army Military Intelligence branch for 5 years before starting his real estate career in Georgetown, TX. He is married to Autumn and has 3 teenagers: Joshua, Chloe, and Sabrina.\n\nEdward moved to Centreville, Virginia in 2013 to start the VA/MD/DC branch of our property management division. He loves to hike, ski and travel with his family. During the Covid Pandemic of 2021, he enrolled all of his children in online school and loaded the family in the car for an 8000+ mile road trip from Virginia to California and back. They hit up as many ski resorts as they could and it was the best un-crowded ski experience you could hope for! Edward loves basketball (go Celtics!) and his interest include horology, real estate investing and cars. His dream is to own a vintage 964 Porsche 911. Follow him on his social media channels to see his latest adventures!",
    skills: [{ title: "Autonomy", percent: 45 }, { title: "Social-Ability", percent: 45 }, { title: "Speed", percent: 45 }, { title: "Details", percent: 65 }, { title: "Energy Units", percent: 19 }, { title: "Logic", percent: 90 }, { title: "Ingenuity", percent: 20 }],
    social: [{ platform: "Facebook", url: "https://www.facebook.com/edwardwlui/" }, { platform: "LinkedIn", url: "https://www.linkedin.com/in/marshillrealty/" }, { platform: "Twitter", url: "https://twitter.com/marshillva" }, { platform: "YouTube", url: "https://www.youtube.com/channel/UCEcolHvJJxrykgHpYyIMRrw" }, { platform: "Instagram", url: "https://www.instagram.com/gsusned/" }],
  },
  {
    id: 151,
    slug: "valerie",
    name: "Valerie Tillery",
    role: "Property Manager Team Leader",
    phone: "(512) 359-5912",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/11/MG_2822.jpg",
    bio: "Valerie Tillery is our Property Manager Team Leader and makes sure our clients are thrilled with our service.\nValerie comes to us with over 30 years of property management experience in commercial and residential properties.\nOriginally from Houston, Valerie and her family moved to Georgetown in 2006 and loves to call it home! Valerie has three children that have grown up in Georgetown. Due to school rezoning, Valerie is fortunate enough to have a Georgetown Eagle AND an Eastview Patriot. Go Eagles and Go, Patriots!\nValerie loves all sports, especially football. She is the proud owner of two fantasy football teams. She loves her Houston Texans and Texas Longhorns and loves to eat sunflower seeds on a daily basis!",
    skills: [],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/valerie-thedford-66991a157/" }],
  },
  {
    id: 12531,
    slug: "margaret-strain",
    name: "Margaret Strain",
    role: "Business Development & Marketing Team Leader",
    phone: "(512) 318-2756",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/06/Margaret-Strain.jpg",
    bio: "Margaret is our Business Development and Marketing Team Leader. She is responsible for overseeing and supporting a team dedicated to managing the entire sales process. In addition, Margaret and her team are held accountable for planning and executing business strategies geared towards building enriched and lasting relationships with real estate professionals. Margaret assists with the day-to-day marketing on MLS, social media and overall reputation management initiatives. Before joining the Mars Hill team in May 2024, Margaret was a Swiss-army knife of sorts in Multi-Family Property Management and has experience flipping houses in Virginia Beach, VA. Prior to entering the industry, Margaret was a preschool teacher in Alexandria, VA which is where she fine-tuned her communication skills, creativity and “sparkle”.\n\nMargaret is a military spouse and mother to two adorable babes, Jami (4) and Jaxon (1). She and her family currently live in Destin, Florida where her husband, James, is stationed at Eglin AFB. They have a miniature Goldendoodle, Bart and living room lion (standard house cat), Dale, who have made it their mission to render her unable to partake in her favorite pastimes, reading and crochet.",
    skills: [],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/margaret-strain-320184227/" }],
  },
  {
    id: 12282,
    slug: "cyrene",
    name: "Cyrene Krizia Corpuz-Salting",
    role: "Support Team Leader & Partner Club Specialist",
    phone: "512-368-2541",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/11/Photo-wordpress.jpeg",
    bio: "Cyrene has a BS Nursing degree, but her career has focused on customer support and administrative services. She is well organized and always has a cheerful attitude, which makes her a delight to work with.\n\nShe loves staying at home and spending time with her family. You can find her crocheting coasters, socks, and purses in her free time.",
    skills: [],
    social: [],
  },
  {
    id: 8948,
    slug: "jen-meitzen",
    name: "Jen Meitzen",
    role: "Operations Manager; Accounting Team Leader",
    phone: "(512) 359-5914",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Jen-Meitzen.jpg",
    bio: "Jennifer is our Operations Manager and also our Accounting Team Leader. She is responsible for payments to vendors, managing our process system, and keeping things running smoothly and efficiently. She is our in-house expert on all things financially related and helps us to keep our ledgers balanced, working closely with our CPA to troubleshoot any number that looks at us funny. Before joining the Mars Hill team in 2012, Jennifer was a teacher for 16 years in grades 4-8. Jennifer and William have been married for 15 years and have a 13 year old daughter, Leah. They are proof that sometimes, online dating actually works! They currently live in Georgetown, TX and enjoy cornhole, swimming, and listening to Leah grow into an accomplished percussionist.",
    skills: [{ title: "Autonomy", percent: 35 }, { title: "Social-Ability", percent: 25 }, { title: "Speed", percent: 35 }, { title: "Details", percent: 100 }, { title: "Energy Units", percent: 26 }, { title: "Logic", percent: 100 }, { title: "Ingenuity", percent: 10 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/jennifer-meitzen/" }],
  },
  {
    id: 12516,
    slug: "christine-chapman",
    name: "Christine Chapman",
    role: "Human Resource Manager",
    phone: "(717) 951-6809",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/10/me-picture.jpg",
    bio: "Chris is our Human Resources Manager at Mars Hill Realty. She has a wealth of experience spanning both public and private sectors, from startups to global organizations, she is the go-to person for all things people-related!\n\nBeyond the office, Chris's life is often filled with an array of activity from travel, to sporting events, service trips and local volunteering. She met her husband John on ChristianMingle and they are proud parents to five almost-adult and young adult children. Her favorite sporting events are when she can cheer her kids on in soccer and baseball. After all this time, she still hasn't quite mastered the offside call in soccer.\n\nBut when Chris isn't on the sidelines, you'll find her soaking up the great outdoors. Whether she's hiking a trail, casting a line while fishing, relaxing on a boat, tending to her garden, or jetting off to explore new destinations, Chris loves all things outdoors. With 6 national parks already checked off her bucket list, she's just getting started on her quest to discover them all!",
    skills: [{ title: "Autonomy", percent: 70 }, { title: "Social-Ability", percent: 30 }, { title: "Speed", percent: 40 }, { title: "Details", percent: 40 }, { title: "Energy Units", percent: 41 }, { title: "Logic", percent: 100 }, { title: "Ingenuity", percent: 60 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/christinechapman-cc/" }],
  },
  {
    id: 12566,
    slug: "bree-grasso",
    name: "Bree Grasso",
    role: "Property Manager",
    phone: "512-318-2756",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/10/bree400.jpg",
    bio: "With five years of experience in multifamily property management, I’m thrilled to now bring my expertise to the management of single-family properties. I oversee daily operations, handle tenant relations, coordinate property maintenance, and ensure a seamless experience for both residents and property owners.\n\nThroughout my career, I’ve been recognized with multiple awards for my dedication and performance, underscoring my commitment to delivering exceptional service. I strive to foster long-term relationships with tenants, vendors, and property owners, always maintaining a balance between operational efficiency and tenant satisfaction.\n\nOutside of work, I enjoy reading, playing soccer with my dog, binge-watching documentaries, and exploring new restaurants with my husband—fellow food enthusiasts. I’m always eager to expand my knowledge and embrace new experiences.",
    skills: [{ title: "Energy - Extraverted", percent: 76 }, { title: "Mind - Observant", percent: 57 }, { title: "Nature - Thinking", percent: 53 }, { title: "Tactics - Judging", percent: 97 }, { title: "Identity - Assertive", percent: 51 }],
    social: [],
  },
  {
    id: 12463,
    slug: "brian-tanaka",
    name: "Brian Tanaka",
    role: "Managing Broker",
    phone: "512-359-7167",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/11/Brian-Tanaka-bw.jpg",
    bio: "Brian is passionate about cultivating authentic and empowering relationships with others, innovating systems to improve organizational effectiveness, and mastering the lifelong pursuit of being an effective communicator.\n\nBrian moved to Texas in 2015 to take a job as an Organist and Worship Leader and began working in property management in 2017. He learned the art of property management by beginning as a property inspector, and quickly worked his way to obtaining his Real Estate Broker License in 2022. Problem-solving and consistently delivering what clients and customers expect is something Brian loves about property management.\n\nBrian graduated from Knox College in Illinois with a double major in economics and music, where he met his wife, Alex, through their shared passion for playing drums. Brian and Alex both have two rambunctious dogs, Raven the mini-bernedoodle, and Ollie the aussiedoodle.",
    skills: [{ title: "Autonomy", percent: 43 }, { title: "Social-Ability", percent: 43 }, { title: "Speed", percent: 63 }, { title: "Details", percent: 53 }, { title: "Energy Units", percent: 48 }, { title: "Logic", percent: 60 }, { title: "Ingenuity", percent: 60 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/bstanaka/" }],
  },
  {
    id: 12300,
    slug: "wes-kalk",
    name: "Wes Kalk",
    role: "Texas Property Manager",
    phone: "703-651-5625",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2025/03/wes-400.jpg",
    bio: "",
    skills: [{ title: "Autonomy", percent: 37 }, { title: "Social-Ability", percent: 43 }, { title: "Speed", percent: 63 }, { title: "Details", percent: 63 }, { title: "Energy Units", percent: 30 }, { title: "Logic", percent: 80 }, { title: "Ingenuity", percent: 20 }],
    social: [],
  },
  {
    id: 12462,
    slug: "tosalyn-sellers",
    name: "Tosalyn Sellers",
    role: "Texas Property Manager",
    phone: "703-249-4502",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/05/image1-480x480-1.jpeg",
    bio: "With 10 years of experience in real estate and property management, Tosalyn loves helping owners feel confident in their investments while making the process as easy as possible.\n\nWhen she’s not working, you’ll usually find her outside with her kids—hiking, exploring, chasing new adventures, and making the most of time together as a family. She brings that same energy, positivity, and down-to-earth attitude to everything she does.",
    skills: [{ title: "Autonomy", percent: 15 }, { title: "Social-Ability", percent: 45 }, { title: "Speed", percent: 85 }, { title: "Details", percent: 55 }, { title: "Energy Units", percent: 47 }, { title: "Logic", percent: 80 }, { title: "Ingenuity", percent: 20 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/tosalyn-sellers-45964514a/" }],
  },
  {
    id: 13068,
    slug: "paola-espinoza",
    name: "Paola Espinoza",
    role: "Maintenance Coordinator",
    phone: "",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2026/09/yo.jpg",
    bio: "My name is Paola Espinoza, I have over 5 years of experience in property management, with a background in maintenance coordination, vendor support, tenant applications, bookkeeping, and team leadership. I’ve worked with portfolios ranging from 500 to 1,000+ properties and have also had the opportunity to manage vendor networks across multiple states.\nI’m bilingual in Spanish and English, self-motivated, and naturally very organized. I enjoy keeping things running smoothly, solving problems, and making sure the little details don’t fall through the cracks.\nOutside of work, I’m a mom who loves spending time with my family. I enjoy traveling, reading, dancing, and anything creative. I’m also a big fan of history and art, so I’m always curious to learn something new or find my next place to explore. I’m looking forward to getting to know everyone and being part of the team!",
    skills: [{ title: "Autonomy", percent: 15 }, { title: "Social-Ability", percent: 45 }, { title: "Speed", percent: 85 }, { title: "Details", percent: 55 }, { title: "Energy Units", percent: 47 }, { title: "Logic", percent: 80 }, { title: "Ingenuity", percent: 20 }],
    social: [],
  },
  {
    id: 12250,
    slug: "ashley-daigle",
    name: "Ashley Daigle",
    role: "Virginia Property Manager",
    phone: "760-219-9250",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/11/Ashley-1024x1024-1.jpeg",
    bio: "Ashley started her career in sunny Southern California in 2018. She worked her way up going from a Leasing Agent, to a Brokers Assistant and an Office Manager which enabled her to take on almost every responsibility of the Property Manager. Working so closely with the Property Manager enabled Ashley to learn quickly what it took to efficiently manage 300 properties.\n\nWhen not managing properties, Ashley’s two fur babies have her attention. Her German Shepherd and French Bulldog are by her side while she enjoys her other interests such as cooking, baking and visiting family. Her current projects include building a forever home in Virginia which will include a farmette with goats, chickens, ducks, pigs and maybe even a few cows.",
    skills: [{ title: "Extraverted", percent: 85 }, { title: "Intuitive", percent: 63 }, { title: "Feeling", percent: 74 }, { title: "Judging", percent: 90 }, { title: "Assertive", percent: 74 }],
    social: [],
  },
  {
    id: 12648,
    slug: "joshua-lui",
    name: "Joshua Lui",
    role: "Property Manager",
    phone: "(571) 257-3475",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2026/01/Joshua_V2.jpg",
    bio: "",
    skills: [{ title: "Autonomy", percent: 45 }, { title: "Social-Ability", percent: 45 }, { title: "Speed", percent: 45 }, { title: "Details", percent: 65 }, { title: "Energy Units", percent: 19 }, { title: "Logic", percent: 90 }, { title: "Ingenuity", percent: 20 }],
    social: [],
  },
  {
    id: 13012,
    slug: "chloe-lui",
    name: "Chloe Lui",
    role: "Client Success Team",
    phone: "512-551-1748",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/05/chloe2-scaled-e1777908321276.jpg",
    bio: "Chloe is the primary representative of the Client Success Team. She is in charge of ensuring Mars Hill homeowners are satisfied with the company.\n\nShe is a senior at Liberty University with a pursuing degree in Psychology. She loves learning about how and why people behave and think the way they do and has a goal of becoming a counselor for a church or a Christian psychology ministry. Her passion for people enable her to connect with homeowners and work together with them and her team to identify areas of company improvement.\n\nShe enjoys traveling, skiing, and writing. She has travelled to over ten countries, including South Korea, where she participated in a two-week missions trip, and Belgium, where she discovered that she actually does like fries. She has skiied in seven of the states and in fifteen different resorts, one being in Switzerland. Chloe is a self-published author of two novels, available on Amazon for purchase.",
    skills: [{ title: "Autonomy", percent: 45 }, { title: "Social-Ability", percent: 45 }, { title: "Speed", percent: 45 }, { title: "Details", percent: 65 }, { title: "Energy Units", percent: 19 }, { title: "Logic", percent: 90 }, { title: "Ingenuity", percent: 20 }],
    social: [],
  },
  {
    id: 147,
    slug: "alicia",
    name: "Alicia Coursey",
    role: "Accounting Team: Accounts Receivable",
    phone: "(512) 359-5913",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Image-4-Alicia-Courcey-.jpg",
    bio: "Alicia joined our accounting team in October 2014. Her accounting background (AP, AR, cost analyst, and payroll) makes her a valuable asset to Mars Hill Realty Group.\nWhen she is not working, she enjoys spending time with her husband, grandchildren and if there is any time left over – reading a good book by the pool.",
    skills: [],
    social: [],
  },
  {
    id: 9147,
    slug: "melody",
    name: "Melody Shiu",
    role: "Accounting Team: Accounts Payable",
    phone: "512-910-3915",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2020/06/Mel-400x400-1.jpeg",
    bio: "Melody grew up in NYC, a die hard Yankee fan, a foodie, mom of many boys and has worked as a Montessori teacher prior to working at Mars Hill Realty Group. Some of her favorite things are playing recreational volleyball, discovering a new recipe, hiking especially in the fall and winter, and having a cup of coffee with a friend.\n\nMelody enjoys being a part of a company that supports and helps their employees to learn, grow and be a better version of themselves. This allows Mars Hill employees to be their best for their clients, customers and each other. Melody is learning that it is never too late to learn something new and is always open to trying different ways to make things better.",
    skills: [],
    social: [],
  },
  {
    id: 12657,
    slug: "suzanne-lester",
    name: "Suzanne Lester",
    role: "Accounting Assistant",
    phone: "",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2025/03/suzanne-400.jpg",
    bio: "As a happy homemaker, homesteader and homeschooler, Suzanne is excited to dive back into the work world! Her specialty is high quality service with a sincere smile and desire to contribute to the success of Mars Hill and their clients.\n\nAfter having traveled abroad and lived in various regions, this 5th generation Texan is glad to be home and raising her beautiful family (including teenage twins!). She especially enjoys raising chickens, making homemade strawberry jam every summer and is entering the intrepid world of beekeeping.\n\nSaved by Grace through Faith!",
    skills: [],
    social: [],
  },
  {
    id: 12464,
    slug: "des-manganaan",
    name: "Des Manganaan",
    role: "Support Team: Applications Specialist",
    phone: "512-368-2601",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/10/des400.jpg",
    bio: "",
    skills: [{ title: "Autonomy", percent: 45 }, { title: "Social-Ability", percent: 65 }, { title: "Speed", percent: 55 }, { title: "Details", percent: 35 }, { title: "Energy Units", percent: 32 }, { title: "Logic", percent: 70 }, { title: "Ingenuity", percent: 0 }],
    social: [],
  },
  {
    id: 12458,
    slug: "aurea",
    name: "Aurea Vargas",
    role: "Support Team: Utilities & HOA Specialist",
    phone: "703-563-2611",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/12/Rea.jpg",
    bio: "Rea is a cat enthusiast and food lover with a knack for creating wonderful memories with her loved ones. Whether it's a cozy family gathering or a fun hangout with friends, Rea values the moments that make life special. Her adventurous side comes alive through a love for travel, seizing every chance to explore new places.\n\nRea is as a valued team player for the Support Team, recognizing the strength that collaboration brings to the table. Rea loves that teamwork makes the dream work!",
    skills: [{ title: "Autonomy", percent: 30 }, { title: "Social-Ability", percent: 60 }, { title: "Speed", percent: 50 }, { title: "Details", percent: 60 }, { title: "Energy Units", percent: 77 }, { title: "Logic", percent: 70 }, { title: "Ingenuity", percent: 80 }],
    social: [],
  },
  {
    id: 12465,
    slug: "levi-sangalang",
    name: "Levi Sangalang",
    role: "Support Team: Contracts Specialist",
    phone: "512-368-2646",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/09/Levi-BW2.jpeg",
    bio: "",
    skills: [{ title: "Autonomy", percent: 40 }, { title: "Social-Ability", percent: 30 }, { title: "Speed", percent: 70 }, { title: "Details", percent: 60 }, { title: "Energy Units", percent: 36 }, { title: "Logic", percent: 80 }, { title: "Ingenuity", percent: 40 }],
    social: [],
  },
  {
    id: 12597,
    slug: "natalie-gomez",
    name: "Natalie Gomez",
    role: "Work Order Specialist",
    phone: "(571) 491-8877",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/10/natalie-400.jpg",
    bio: "Natalie started her career in Long Beach California as an on-site property manager in 2013. She wanted to learn more within the property management field and landed her first Work Order Coordinator role in 2015. Her goal is to ensure she is providing exceptional customer service to owners and our residents, cultivating strong relationships and enhancing satisfaction levels. In addition, she will build trust with vendors, resulting in reduced completion times for work order requests and improve overall service delivery.\n\nWhen not working, Natalie enjoys her time with her husband, children and dogs.",
    skills: [{ title: "Energy - Extraverted", percent: 58 }, { title: "Mind - Observant", percent: 78 }, { title: "Nature - Thinking", percent: 74 }, { title: "Tactics - Judging", percent: 76 }, { title: "Identity - Assertive", percent: 72 }],
    social: [],
  },
  {
    id: 12518,
    slug: "travis-fletcher",
    name: "Travis Fletcher",
    role: "Service Team: Maintenance Technician - TX",
    phone: "512-316-9830",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/10/Travis-BW-copy.jpeg",
    bio: "Before joining the Mars Hill team, Travis owned and operated his own handyman business. He has been in the real estate industry since 2017 as a real estate investor, general contractor and house renovator. Travis and his wife Jamie have been married for ten years and have two children. They currently live in Georgetown, TX and enjoy watching their kids play softball, baseball and football. Travis volunteers at church as a bible teacher to the youth and plays golf every chance he gets which is about 6 times a year.",
    skills: [],
    social: [],
  },
  {
    id: 12202,
    slug: "rodney-biehle",
    name: "Rodney Biehle",
    role: "Service Team: Maintenance Technician - TX",
    phone: "512-955-4684",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/10/Rodney1-resixed.jpg",
    bio: "Rodney has always enjoyed being active and taking advantage of engaging God’s blessings in his life through outdoor activities such as camping, fishing and hunting. He shares this passion with his wife, Karen, their 5 children and 13 grandchildren. Given his grandchildren share his passion for the outdoors, they keep him and his wife busy with all of their sports activities.\n\nIt is no surprise that Rodney finds peace working with his hands and ensuring a job is well done. Our residents and owners interests are well represented by Rodney and the Mars Hill team.",
    skills: [{ title: "Extraverted", percent: 63 }, { title: "Observant", percent: 58 }, { title: "Feeling", percent: 82 }, { title: "Judging", percent: 90 }, { title: "Assertive", percent: 89 }],
    social: [],
  },
  {
    id: 11733,
    slug: "mandy-forbis",
    name: "Mandy Forbis",
    role: "Business Development Associate - New Owners",
    phone: "703-559-7150",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/12/Mandy-BW.jpg",
    bio: "As a proud Navy Veteran (1994-1998) and Texan native, Mandy has enjoyed a fulfilling career in Property Management since leaving the military in 1998. Entering the industry as a Leasing Agent she quickly advanced to a Community Management position. As her career progressed she achieved a Certified Apartment Manager, “CAM”, certification and in 2003 became a Licensed Realtor. Her experience managing multi-family communities including new construction, mid-rise and single family homes as well as managing over 200 homes nationwide by networking with Realtors coast to coast has made her a true asset to the Mars Hill Property Management team.\n\nOff hours you will find Mandy spending time with her family boating, relaxing on Lake Georgetown, exploring new restaurants and working on home improvement projects with her husband. Her two sons bring her great joy. As one is finishing up High School, the other has re-enlisted in the Navy and is stationed in an amazing place that Mandy loves to visit, San Diego, CA.",
    skills: [{ title: "Extraverted", percent: 67 }, { title: "Intuitive", percent: 52 }, { title: "Feeling", percent: 71 }, { title: "Judging", percent: 90 }, { title: "Assertive", percent: 67 }],
    social: [{ platform: "Facebook", url: "https://www.facebook.com/mcforbis" }, { platform: "LinkedIn", url: "https://www.linkedin.com/in/mandy-forbis-93a7b1a/" }, { platform: "Instagram", url: "https://www.instagram.com/lake_f0rbi5/" }],
  },
  {
    id: 12563,
    slug: "maika-mae-de-vera",
    name: "Maika Mae De Vera",
    role: "Marketing Specialist",
    phone: "703-656-4742",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/10/maika400.jpg",
    bio: "Maika is a passionate individual with a degree in Food Technology, her love for coffee and cooking is evident in her dedication to exploring new flavors. With three years of experience in Real Estate Luxury Marketing, Maika brings her creativity and expertise to effectively promote and showcase properties to the table.\n\nIn addition to her professional pursuits, she cherishes her love for dogs and enjoys spending quality time with her furry companions.",
    skills: [{ title: "Energy - Introverted", percent: 57 }, { title: "Mind - Observant", percent: 57 }, { title: "Nature - Thinking", percent: 57 }, { title: "Tactics - Judging", percent: 83 }, { title: "Identity - Assertive", percent: 81 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/maika-mae-de-vera-7a5873192/" }],
  },
  {
    id: 12957,
    slug: "armando",
    name: "Armando Colmenares",
    role: "Business Development Intern",
    phone: "512-318-2756",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2026/01/armando_400.jpg",
    bio: "",
    skills: [{ title: "Energy - Extraverted", percent: 75 }, { title: "Mind - Intuitive", percent: 75 }, { title: "Nature - Thinking", percent: 85 }, { title: "Tactics - Judging", percent: 72 }, { title: "Identity - Assertive", percent: 57 }],
    social: [],
  },
  {
    id: 12564,
    slug: "perry-santillan",
    name: "Perry Santillan",
    role: "Lead Specialist",
    phone: "512-368-2646",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2024/01/1787444034683.jpg",
    bio: "Perry is a dedicated professional with broad experience in customer service, sales, and property management. He excels at providing outstanding customer support, building loyalty, and driving revenue growth through sharp sales skills. In property management, Perry’s attention to detail and commitment to high standards ensure well-maintained living spaces and enhanced property performance. Consistently surpassing expectations, Perry is a valuable asset in every field he works in.",
    skills: [{ title: "Energy - Extraverted", percent: 75 }, { title: "Mind - Intuitive", percent: 75 }, { title: "Nature - Thinking", percent: 85 }, { title: "Tactics - Judging", percent: 72 }, { title: "Identity - Assertive", percent: 57 }],
    social: [{ platform: "LinkedIn", url: "https://www.linkedin.com/in/john-perry-santillan-99ba2522a/" }, { platform: "Facebook", url: "https://www.facebook.com/juanperegrinosanctus/" }],
  },
  {
    id: 12970,
    slug: "raffy-tatel",
    name: "Raffy Tatel",
    role: "IT Manager",
    phone: "",
    image: "https://www.marshillpropertymanagement.com/wp-content/uploads/2026/03/raffy-400-2.jpg",
    bio: "Raffy Tatel is an IT professional with over decade of experience in IT administration, digital operations, systems administration, technical support, and website development. He has expertise in ICT planning, database management, and building websites using website builder such as Wix, Shopify, and Bubble.io. He has a strong balance of technical skill and operational insight, helping organizations improve performance and reliability.\n\nHe holds a Bachelor of Science in Information Technology major in Software Engineering and is currently pursuing a Master’s degree in Information Systems, demonstrating his commitment to continuous learning. Alongside his professional experience, Raffy has a strong interest in digital creation, including UI/UX design, automation tools, and website optimization. With a detail-oriented mindset and strong communication and leadership skills, he is recognized as a reliable and adaptable professional across various industries.",
    skills: [{ title: "Energy - Introverted", percent: 71 }, { title: "Mind - Intuitive", percent: 81 }, { title: "Nature - Thinking", percent: 74 }, { title: "Tactics - Judging", percent: 81 }, { title: "Identity - Assertive", percent: 57 }],
    social: [],
  },
];
// Real listings, copied once from the old/production site's "Portfolio"
// plugin (marshillpropertymanagement.com/wp-json/wp/v2/fw-portfolio) — that
// plugin isn't installed here, so this is the one-time static snapshot of
// its 20 published items, split into the same two groups + tabs the old
// homepage used. statusSlug/statusLabel double as the matching taxonomy
// term slug/name in wp-admin (Property Listings → listing_status), so once
// a listing exists there with that slug it takes over from the row below
// with no code change — see the slug sets just below getHomeContent. Each
// "slug" below is this site's own URL slug for /properties/[slug] — not
// copied from production's (which used leftover placeholder slugs for two
// of the vacation rentals).
const FALLBACK_FEATURED_PROPERTIES: PropertyListing[] = [
  {
    id: -1,
    slug: "2451-midtown-avenue-apt-724-alexandria-va",
    title: "2451 Midtown Avenue Apt 724 in Alexandria, VA",
    price: "$375,000",
    detail: "For Sale",
    description:
      "Welcome to the luxury of your highrise condo at Midtown Alexandria Station! This condo has one of the few oversized outdoor patios in the entire complex giving the next owner valuable outdoor living space. Updated kitchen with granite counters, gas stove and stainless appliances make dinner prep a snap. Eat in, or enjoy your meal or a glass of wine outside on the spacious balcony al fresco. With fitness center and swimming pool on the same floor, a great work-out or relaxing swim are only minutes from your front door. Other amenities include 24-hour concierge service, common party room/lounge, an outdoor grilling area, and assigned parking space in attached parking garage. If you don't feel like fighting traffic, Huntington Station is right next door. This home has a current lease in place for $1950/mo through 9/30/24. Perfect opportunity for the next homeowner who wants to purchase now to avoid competition in the summer, or for the savvy investor. Mars Hill Realty can provide professional property management in Alexandria, VA for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/06/305-Moulins-Ln-1-scaled.jpg",
    statusSlug: "for-sale",
    statusLabel: "For Sale",
  },
  {
    id: -2,
    slug: "1137-huntmaster-302-leesburg-va",
    title: "Sold in Leesburg, VA",
    price: "",
    detail: "Sold Investment Property",
    description:
      "You will love all the natural light in this penthouse level condo! High ceilings, big windows and a skylight let in natural light for that extra spacious feel. Newly painted, wood floors and a beautiful fireplace just add to this home's appeal. The kitchen is well appointed with modern appliances, new fridge and microwave, new countertops and plenty of storage, with the dining area attached for easy meal prep. Community amenities include swimming pool, playground, walking/jogging paths and more. Close to Route 7 and Leesburg Bypass, shopping, dining and entertainment. Mars Hill Realty can provide professional property management in Leesburg, Virginia for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/11/1137-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -3,
    slug: "711-liard-river-road-hutto-tx",
    title: "Sold in Hutto, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "This stunning two-level home offers a perfect blend of style and functionality. As you enter, you'll be greeted by a versatile bonus space off the foyer, ideal for a home office or playroom. The open concept living area seamlessly connects to the well-appointed kitchen, featuring a center island, ample prep space, and abundant storage. The tile backsplash and stainless-steel appliances add a touch of elegance. The vaulted ceiling allows natural light to flood the space, creating an inviting atmosphere. A downstairs master suite offers convenience, while a bonus loft space upstairs provides flexibility. Enjoy community amenities such as park, pool, and playground. Mars Hill Realty can provide professional property management in Georgetown, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/09/711-Liard-River-Rd-1.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -4,
    slug: "81-fendall-avenue-alexandria-va",
    title: "81 Fendall Avenue in Alexandria, Virginia",
    price: "",
    detail: "Sold Investment Property",
    description:
      "With its stunning hardwood floors, fireplaces in both the living room and lower level bonus room and custom painted kitchen, this home has so much to offer. Lower level is set up as the perfect entertaining spot, with built-in bar complete with tap, wine/beverage fridge, fireplace and walk-out to covered back patio. Let the party wind its way upstairs to the well-laid out kitchen, comfortable living room and large deck. Both bedrooms with carpet and two updated baths located upstairs for maximum privacy. One assigned parking included. Recently installed windows and HVAC. Mars Hill Realty can provide professional property management in Arlington, Virginia for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/09/fendall-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -5,
    slug: "305-moulins-lane-georgetown-tx",
    title: "Sold in Georgetown, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Conveniently located near SH130, 29 and the Georgetown Inner Loop, this beautiful two-story home has a private backyard with a spacious floorplan. The kitchen is open to the living room and has granite counters and the downstairs master suite is the perfect private retreat with double vanity, separate shower, tub, and fantastic walk-in closet. Three bedrooms and guest bath upstairs with huge bonus loft space and adjoining study. Out back you'll find raised garden/herb planter boxes and a planter shelf for the home gardener. Covered back patio great for entertaining. Walk to community park; short drive to San Gabriel Park, Southwestern University, Georgetown Square and more. Mars Hill Realty can provide professional property management in Georgetown, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/06/305-Moulins-Ln-1-scaled.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -6,
    slug: "1800-northwest-blvd-georgetown-tx",
    title: "Sold in Georgetown, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "This home has one of the largest yards on the market, a desirable trait that is increasingly becoming more rare in newer construction. There are moderate upgrades, no carpet in the home, good sized bedrooms and a fireplace. Easy access to IH35 and centrally located to dining, shopping, and downtown Georgetown makes this the ideal property for a rental or for the next homeowner who does not have a need for immediate move-in. Mars Hill Realty can provide professional property management in Georgetown, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/03/GetMedia-1.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -7,
    slug: "45500-baggett-terrace-sterling-va",
    title: "Sold in Sterling, VA",
    price: "",
    detail: "Sold Investment Property",
    description:
      "This 3BR-4BA townhome has been updated and transformed into an extraordinary, modern living space with beautiful hard wood flooring and lots of natural light that penetrates through the over-sized windows. The three story layout features a spacious master bedroom with large walk-in closets and bathroom. The huge deck is conveniently accessible from the kitchen and will provide you with ample space to soak up the sun and entertain your family and friends. The large kitchen is tastefully appointed with granite counters and stainless steel appliances. Located in the Dominion Station neighborhood with free access to the community pool and tennis court, this home is minutes away from Route 28, 267, Dulles International Airport, Dulles Expo Center, Reston Town Center and venues that offer a unique shopping and dining experience. Whether you want to take a dip in the community swimming pool, engage in a friendly tennis game or take your bike to Washington and Old Dominion Trail, this is the perfect townhouse for you. Mars Hill Realty can provide professional property management in Sterling, VA for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/09/front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -8,
    slug: "6905-victoria-unit-d-alexandria-va",
    title: "Sold in Alexandria, VA",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Welcome to 6905 Victoria Unit D, a rare 2 bedroom condo in the 22310 zip code/Franconia with in-unit washer and dryer convenience and walking distance to many restaurants, grocery stores and shops. Imagine needing a few groceries to complete your dinner plans and just taking a quick 10 minute walk to the local Amazon Fresh store or just meeting a friend at the Festival at Manchester Lakes shopping center where you have your choice of Kumo Asian Bistro, Shawarma Guys or just a simple bagel and coffee breakfast at Manchester Bagel. This condo is very walkable to many other locations and has a walk score of 78, meaning that most errands can be done on foot and you can spend less on gas! If you want to take advantage of the metro, the Franconia-Springfield stop is less than 1.5 miles away. If you decide you need to commute, this condo is strategically located at the 495 and 395/95 intersection giving you convenient access to Northern VA and DC. Low inventory in 22310 means that this condo has favorable supply and demand characteristics for the next investor or homeowner who wants to make sure they make a smart purchase. Inside the unit the kitchen has updated quartz countertops and mostly updated appliances and there are two full bathrooms, one for each bedroom. Best of all, this unit has a private enclosed patio where you can enjoy a morning coffee or just have a safe place to let your pets play. Mars Hill Realty can provide professional property management in Alexandria, VA for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/08/front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -9,
    slug: "308-debora-drive-georgetown-tx",
    title: "Sold in Georgetown, TX.",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Move in ready single story 4br home in Georgetown, TX. Open floorplan concept and large yard perfect for entertaining. Here's your chance to own a piece of the red hot Austin market as it establishes itself as a national leader in the tech space. This home is move-in ready and could also make a great investment property. Mars Hill Realty can provide professional property management in Georgetown, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/06/308-Debora-Dr-1-scaled.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -10,
    slug: "22223-broadway-clarksburg-md",
    title: "Sold in Clarksburg, MD",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Beautiful townhome built in 2017 features gorgeous wood floors, granite counters, open floor plan and more! Bonus space on entry level can be a second living area, game room or large study. Main living area is on second level, with kitchen and dining open to living room for optimum convenience and great entertaining. Upstairs you'll find the master suite, two spare bedrooms and a loft space that would make a great reading nook or sitting area. Convenient parking in two-car, rear-entry garage. Community amenities include clubhouse, swimming pool, playground and more! Pets ok with owner approval. 22223 Broadway is a unique turnkey investment townhouse in Clarksburg, MD that is professionally managed by Mars Hill Realty. Mars Hill Realty can provide professional property management in Clarksburg, Maryland for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/02/Broadway-front.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -11,
    slug: "157-fleet-street-national-harbor-md",
    title: "Condo in National Harbor, MD",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Turn Key Investment Condo in the heart of National Harbor, MD. This condo is just a few short steps from the Potomac River and located in the iconic National Harbor close to world class shopping, dining and entertainment. There are approximately 160 stores, 40 restaurants and very limited residential opportunities in this 350 acre waterfront development located in Fort Washington, MD. 157 Fleet Street is a unique turnkey investment condo that has a tenant in place through March 2022 and is professionally managed by Mars Hill Realty. Mars Hill Realty can provide professional property management in National Harbor, Maryland for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer and own a piece of the National Harbor.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/fleet.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -12,
    slug: "sonterra-west-jarrell-tx",
    title: "Sold in Jarrell, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "This 1 story home in the Sonterra West subdivision was built by DR Horton. The location is perfect for two reasons: you are situated towards the end of a cul-de-sac, which reduces the amount of cars passing your home, and you are close to Interstate 35 with a 30 minute commute to Austin, TX, one of the fastest growing tech cities in America. This is a 3br/2ba home with high ceilings and an open floorplan. In addition, it has a separate study with french doors, perfect for working (or schooling) from home and it can easily pull double duty as a guest room. Out back, you have what every homeowner in Texas dreams of, a large covered patio perfect for prepping your next smoked brisket and a private yard completely fenced in. Here's your chance to own a turn-key rental home with paying tenants, professionally managed, and a known maintenance history going back to 2017! Mars Hill Realty can provide professional property management in Jarrell, TX for this property. Contact Edward@MarsHillRealty.com for more details or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/05/front1210.jpg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -13,
    slug: "sold-in-round-rock-tx",
    title: "Sold in Round Rock, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Here's your chance to own a turn-key rental home with paying tenants, professionally managed, and a known maintenance history going back to 2015! With great interest rates, cash flow real estate is back in the hot Austin market, and in this price range, more difficult to find than ever. Frontier Park is just a short walk away and has basketball courts, tennis courts, a full playground and more. New foundation work done and recent HVAC installed. Mars Hill Realty can provide professional property management in Round Rock, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/2302StirrupDr-large-001-ExteriorFront001-1500x994-72dpi.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -14,
    slug: "sold-in-pflugerville-tx",
    title: "Sold in Pflugerville, TX",
    price: "",
    detail: "Sold Investment Property",
    description:
      "Fully leased rental home in Pflugerville, TX with a long-term tenant who has been in the home since 2015 and just renewed for another 2 years. A great opportunity to invest in the Austin market's growing tech sector. Mars Hill Realty can provide professional property management in Pflugerville, TX for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/stokes.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
  {
    id: -15,
    slug: "sold-in-fairfax-va",
    title: "Sold in Fairfax, VA",
    price: "",
    detail: "Sold Investment Property",
    description:
      "A townhome located one mile from the Vienna metro station, with a nice yard and green space, no road behind the home, and each bedroom with its own bathroom. Upgrades include an enhanced master closet and gourmet kitchen, plus hardwood flooring throughout. Mars Hill Realty can provide professional property management in Fairfax, VA for this property. Contact Edward@MarsHillRealty.com for a private showing or to submit an offer.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/04/Wood-violet.jpeg",
    statusSlug: "sold",
    statusLabel: "Sold Investment Properties",
  },
];

const FALLBACK_VACATION_RENTALS: PropertyListing[] = [
  {
    id: -101,
    slug: "the-lone-star-bungalow-georgetown-tx",
    title: "The Lone Star Bungalow",
    price: "From $350/night",
    detail: "Georgetown, TX · 3 BR / 2.5 BA · Sleeps 8",
    description:
      "Short term rental available in Georgetown, TX — 3Br/2.5Ba, accommodates 8 guests. Located within walking distance to the Historic Georgetown square, this modern home was originally built in the 1930's and has been professionally designed and renovated from top to bottom! Vintage-inspired decor and furnishings mixed with modern touches, with a private yard and a location that can't be beat. Perfect for your next central Texas get-away! To book direct, visit marshillvacationrentals.staydirectly.com.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2023/10/IMG_3698-scaled.jpg",
    statusSlug: "central-texas-vacation-rentals",
    statusLabel: "Central Texas Vacation Rentals",
  },
  {
    id: -102,
    slug: "jcs-farms-northern-virginia",
    title: "JCS Farms",
    price: "From $450/night",
    detail: "Northern Virginia · 5 BR / 3 BA · Sleeps 16",
    description:
      "Short term rental available in Northern Virginia — 5Br/3Ba, accommodates 16 guests. JCS Farms is an upscale farmhouse built on 4 acres, next to a creek, and constructed around a 200 year old timberframe using traditional mortise and tenon joinery. The unique architecture of this antique barn frame combined with modern design makes the perfect setting for your next vacation, wedding or group retreat. Fully gated with live chickens, ducks, geese and other animals in a fenced area. Fire-pit, basketball, ping-pong and more! Close to Shenandoah Park, DC, Civil War landmarks and wineries. To book direct, visit www.MarsHillVacationRentals.com.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2022/05/jcsfarms7.jpg",
    statusSlug: "northern-virginia-vacation-rentals",
    statusLabel: "Northern Virginia Vacation Rentals",
  },
  {
    id: -103,
    slug: "the-berkshire-poconos-pa",
    title: "The Berkshire",
    price: "From $920/night",
    detail: "The Poconos, PA · 7 BR / 3.5 BA · Sleeps 21",
    description:
      "Short term rental available in The Poconos, PA — 7Br/3.5Ba, accommodates 21 guests. Enjoy fresh mountain air and quality time with your family, with a home theater room with an IMAX-like sound system, pool table, shuffleboard, foosball, card table, hot tub and multiple seating areas, plus a sand volleyball court and horseshoe pit outside. Close to golfing and skiing at nearby mountains, with great WiFi throughout. To book direct, visit www.MarsHillPoconos.com.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2021/02/Berkshire-Front-c.jpg",
    statusSlug: "the-poconos-pennsylvania",
    statusLabel: "The Poconos, PA Vacation Rentals",
  },
  {
    id: -104,
    slug: "the-great-pyrenees-poconos-pa",
    title: "The Great Pyrenees",
    price: "From $850/night",
    detail: "The Poconos, PA · 6 BR / 4.5 BA · Sleeps 22",
    description:
      "Short term rental available in The Poconos, PA — 6Br/4.5Ba, accommodates 22 guests. Come to The Great Pyrenees and enjoy fresh mountain air and quality time with your family, with no need to even leave the property to have fun: a sand volleyball court, horseshoe pit, and hot tub while you grill out on the deck, or stay indoors to watch movies, shoot pool, play shuffleboard, challenge friends on the bar-top arcade, or play cards by the fireplace. Great WiFi throughout. To book direct, visit www.MarsHillPoconos.com.",
    image:
      "https://www.marshillpropertymanagement.com/wp-content/uploads/2019/02/front-2-1.jpg",
    statusSlug: "the-poconos-pennsylvania",
    statusLabel: "The Poconos, PA Vacation Rentals",
  },
  {
    id: -105,
    slug: "the-khaki-campbell-poconos-pa",
    title: "The Khaki Campbell",
    price: "From $740/night",
    detail: "The Poconos, PA · 5 BR / 3.5 BA · Sleeps 19",
    description:
      "Short term rental available in The Poconos, PA — 5Br/3.5Ba, accommodates 19 guests. Relax, reset, rejuvenate! The Khaki Campbell features an in-home air purifier, a premier whole-home water filtration system, a hot tub, seasonal lake views, and games to keep young and old busy including a pool table, arcade systems and a kids' playset. Close to local attractions like skiing, hiking, biking, the Pocono Raceway and golfing, with access to Lake Harmony, a 2.5 mile long glacial lake with beaches and designated swim areas and a tennis court. To book direct, visit www.MarsHillPoconos.com.",
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
  slug: string;
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
          link: p.meta?.link || "#",
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
        slug: p.slug,
        title: stripHtml(p.title.rendered),
        price: p.meta?.price || "",
        detail: p.meta?.detail || "",
        description: stripHtml(p.content.rendered),
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

// Used by the /properties/[slug] detail page — one page per Featured
// Property + Vacation Rental, generated at build time (this is a static
// export, so every possible slug has to be known up front).
export async function getAllListings(): Promise<PropertyListing[]> {
  const { featuredProperties, vacationRentals } = await getHomeContent();
  return [...featuredProperties, ...vacationRentals];
}

export async function getListingBySlug(
  slug: string
): Promise<PropertyListing | undefined> {
  const listings = await getAllListings();
  return listings.find((p) => p.slug === slug);
}

// Strips the "fw_options.bio" HTML (an <h5>Personal Information</h5>
// heading followed by one or more <p> paragraphs) down to plain text while
// keeping paragraph breaks, unlike stripHtml() which flattens everything
// to one line — team bios read as several short paragraphs, not a wall of
// text. A couple of members have a literal "[Coming Soon]"-style
// placeholder in production instead of a real bio; those are blanked out
// here so the detail page just omits that section rather than publishing
// the placeholder text.
const PLACEHOLDER_BIOS = new Set(["[coming soon]", "(to be published)", "to be developed."]);

function cleanBioHtml(html: string | undefined): string {
  if (!html) return "";
  let s = html;
  s = s.replace(/<h5[^>]*>Personal Information<\/h5>/i, "");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/p>\s*<p[^>]*>/gi, "\n\n");
  s = s.replace(/<\/?p[^>]*>/gi, "");
  s = s.replace(/<[^>]+>/g, "");
  s = s
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
  s = s.replace(/[ \t]+/g, " ");
  s = s.replace(/ *\n */g, "\n");
  s = s.replace(/\n{3,}/g, "\n\n");
  s = s.trim();
  return PLACEHOLDER_BIOS.has(s.toLowerCase()) ? "" : s;
}

const SOCIAL_ICON_MAP: Record<string, string> = {
  "fa fa-facebook-square": "Facebook",
  "fa fa-facebook": "Facebook",
  "fa fa-linkedin-square": "LinkedIn",
  "fa fa-linkedin": "LinkedIn",
  "fa fa-twitter": "Twitter",
  "fa fa-twitter-square": "Twitter",
  "fa fa-youtube": "YouTube",
  "fa fa-instagram": "Instagram",
};

type FwTeamOptions = {
  position?: string;
  bio?: string;
  skills?: { title?: string; percent?: number }[];
  social_icons?: { icon?: string; icon_url?: string }[];
  icons?: { title?: string; text?: string }[];
};

type WpTeamPost = WpPost & { meta_all?: { fw_options?: FwTeamOptions } };

function phoneFromIcons(icons: FwTeamOptions["icons"]): string {
  const row = (icons || []).find((i) => (i.title || "").trim().toLowerCase() === "phone:");
  return row ? stripHtml(row.text || "") : "";
}

// Used by the /team page and /team/[slug] detail pages. Fetches straight
// from production's team-members REST endpoint (TEAM_API_BASE, see top of
// file) — not beta — since that's where the real roster lives and is kept
// up to date. Falls back to the static snapshot above if production is
// unreachable at build time.
export async function getTeamMembers(): Promise<TeamMember[]> {
  let posts: WpTeamPost[] | null = null;
  try {
    const res = await fetch(
      `${TEAM_API_BASE}/team-members?orderby=menu_order&order=asc&per_page=100&_embed=1`
    );
    if (res.ok) posts = (await res.json()) as WpTeamPost[];
    else console.warn(`[wp] team-members returned ${res.status}, using fallback content.`);
  } catch (err) {
    console.warn("[wp] team-members unreachable at build time, using fallback content.", err);
  }

  if (!posts || !posts.length) return FALLBACK_TEAM;

  return posts.map((p) => {
    const fw = p.meta_all?.fw_options || {};
    const social = (fw.social_icons || [])
      .filter((s) => s.icon_url && s.icon_url !== "#" && s.icon)
      .map((s) => ({
        platform: SOCIAL_ICON_MAP[s.icon as string] || (s.icon as string).replace("fa fa-", "").replace("-square", ""),
        url: s.icon_url as string,
      }));
    return {
      id: p.id,
      slug: p.slug,
      name: stripHtml(p.title.rendered),
      role: fw.position || "",
      phone: phoneFromIcons(fw.icons),
      image: featuredImage(p),
      bio: cleanBioHtml(fw.bio),
      skills: (fw.skills || [])
        .filter((s) => s.title)
        .map((s) => ({ title: s.title as string, percent: s.percent || 0 })),
      social,
    };
  });
}

// Used by /team/[slug] — one page per team member, generated at build time.
export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | undefined> {
  const team = await getTeamMembers();
  return team.find((m) => m.slug === slug);
}
