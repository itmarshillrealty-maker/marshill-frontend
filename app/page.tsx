"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "ti-file-text",
    title: "New renters apply now",
    text: "100% paperless process. Decisions within 2 business days.",
  },
  {
    icon: "ti-home-dollar",
    title: "Property management",
    text: "Risk-reducing guarantees and a network of quality vendors.",
  },
  {
    icon: "ti-key",
    title: "Buying and selling",
    text: "Skilled negotiators representing your interests at every step.",
  },
  {
    icon: "ti-building-bank",
    title: "Investment property",
    text: "Strategy built on market data and years of local knowledge.",
  },
];

const stats = [
  { num: "20+", label: "YEARS IN BUSINESS" },
  { num: "3", label: "VIRGINIA OFFICES" },
  { num: "2 DAYS", label: "AVG. APPLICATION TURNAROUND" },
  { num: "100%", label: "PAPERLESS PROCESS" },
];

const properties = [
  {
    status: "for-sale",
    label: "For sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=80",
    city: "Alexandria, VA",
    type: "3 bed · 2 bath · Single family",
    price: "$525,000",
  },
  {
    status: "for-sale",
    label: "For sale",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&auto=format&fit=crop&q=80",
    city: "Fairfax, VA",
    type: "4 bed · 3 bath · Single family",
    price: "$649,000",
  },
  {
    status: "sold",
    label: "Sold",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=80",
    city: "Leesburg, VA",
    type: "2 bed · 2 bath · Townhome",
    price: "Sold in Leesburg, VA",
  },
  {
    status: "investment",
    label: "Investment",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
    city: "Richmond, VA",
    type: "3 bed · 2 bath · Duplex",
    price: "Investment property",
  },
  {
    status: "sold",
    label: "Sold",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop&q=80",
    city: "Arlington, VA",
    type: "3 bed · 2 bath · Condo",
    price: "Sold in Arlington, VA",
  },
  {
    status: "investment",
    label: "Investment",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=80",
    city: "Norfolk, VA",
    type: "4 bed · 2 bath · Multi-family",
    price: "Investment property",
  },
];

const reviews = [
  {
    initials: "KD",
    name: "Karen D.",
    role: "Property owner, Arlington, VA",
    quote:
      "Mars Hill has managed our rental property for three years now. Maintenance requests get handled fast and the owner portal makes it easy to track everything.",
  },
  {
    initials: "MT",
    name: "Marcus T.",
    role: "Resident, Norfolk, VA",
    quote:
      "Moving in was smooth from application to lease signing. Any question I've had, the resident team answers within a day.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "Property owner, Leesburg, VA",
    quote:
      "I manage two units through them remotely and never worry about vacancies lingering. Their leasing team fills units quickly with qualified tenants.",
  },
  {
    initials: "DR",
    name: "Daniel R.",
    role: "Property owner, Richmond, VA",
    quote:
      "Clear communication, on-time rent reporting, and a maintenance team that actually shows up when promised. Highly recommend for out-of-state owners.",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "for-sale", label: "For Sale" },
  { key: "sold", label: "Sold" },
  { key: "investment", label: "Investment Properties" },
];

const heroImages = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600&auto=format&fit=crop&q=80",
];
const HERO_INTERVAL_MS = 5000;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [current, setCurrent] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  const show = (i: number) => setCurrent((i + reviews.length) % reviews.length);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Franklin:wght@500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <style>{`
        :root{
          --blue-deep:#123a66; --blue:#1a4d8f; --blue-mid:#2e7bc7;
          --blue-pale:#eaf2fb; --blue-pale-2:#dce8f5; --ink:#1a3a5c;
          --ink-soft:#5b7182; --red:#c0392b; --accent-orange:#cb3a12;
          --accent-green:#2f6b1f; --white:#ffffff; --border:#e3ecf4;
        }
        *{box-sizing:border-box;margin:0;padding:0;}
        body{ font-family:'Inter', sans-serif; color:var(--ink); background:var(--white); line-height:1.5; }
        h1,h2,h3,.brand{ font-family:'Libre Franklin', sans-serif; }
        a{ color:inherit; text-decoration:none; }
        img{ display:block; max-width:100%; }
        .wrap{ max-width:1180px; margin:0 auto; padding:0 32px; }
        .accent-stripe{ height:4px; background:linear-gradient(90deg, var(--accent-green), var(--accent-orange)); }
        .topbar{ background:var(--blue-deep); color:#cfe0f2; font-size:12px; }
        .topbar-inner{ max-width:1180px; margin:0 auto; padding:8px 32px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; }
        .topbar-left{ display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
        .topbar-left i{ margin-right:4px; vertical-align:-1px; }
        .topbar-left a{ color:#cfe0f2; }
        .topbar-left a:hover{ color:#fff; }
        .topbar-social{ display:flex; gap:12px; font-size:13px; }
        .topbar-social a{ color:#cfe0f2; }
        .topbar-social a:hover{ color:#fff; }
        @media (max-width:640px){ .topbar-left{ font-size:11px; gap:12px; } }
        header{ position:sticky; top:0; z-index:50; background:rgba(255,255,255,0.92); backdrop-filter:blur(6px); border-bottom:1px solid var(--border); }
        .header-inner{ display:flex; align-items:center; justify-content:space-between; padding:10px 32px; }
        .brand{ display:flex; align-items:center; gap:10px; font-size:18px; font-weight:600; color:var(--blue); letter-spacing:-0.2px; }
        .brand-logo{ display:block; height:68px; width:auto; }
        @media (max-width:640px){ .brand-logo{ height:50px; } }
        nav{ display:flex; align-items:center; gap:18px; font-size:13px; font-weight:500; color:var(--ink); white-space:nowrap; }
        nav a{ display:inline-flex; align-items:center; gap:3px; }
        nav a:hover{ color:var(--blue); }
        nav .ti-chevron-down{ font-size:10px; color:var(--ink-soft); }
        .header-actions{ display:flex; gap:10px; }
        .btn{ display:inline-block; font-size:13px; font-weight:600; padding:9px 16px; border-radius:5px; cursor:pointer; border:1px solid transparent; transition:opacity .15s; }
        .btn:hover{ opacity:0.88; }
        .btn-outline{ border-color:var(--blue); color:var(--blue); background:transparent; }
        .btn-solid{ background:var(--blue); color:#fff; }
        .btn-red{ background:var(--red); color:#fff; }
        @media (max-width:1140px){ nav{ display:none; } }
        .hero{ position:relative; min-height:520px; display:flex; align-items:center; justify-content:center; text-align:center; overflow:hidden; }
        .hero-bg{ position:absolute; inset:0; background-size:cover; background-position:center; opacity:0; transition:opacity 1.6s ease-in-out; }
        .hero-bg.is-active{ opacity:1; }
        .hero-wash{ position:absolute; inset:0; background:linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)); }
        .hero-inner{ position:relative; z-index:2; max-width:640px; padding:0 24px; }
        .eyebrow{ font-size:12px; font-weight:600; letter-spacing:1.5px; color:var(--accent-orange); text-transform:uppercase; margin-bottom:14px; }
        .hero h1{ font-size:38px; font-weight:600; color:var(--blue-deep); line-height:1.2; margin-bottom:16px; text-shadow:0 1px 6px rgba(255,255,255,0.6); }
        .hero p{ font-size:16px; color:var(--ink); margin-bottom:28px; text-shadow:0 1px 6px rgba(255,255,255,0.6); }
        .hero-actions{ display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-actions .btn{ padding:13px 26px; font-size:14px; }
        @media (max-width:640px){ .hero h1{ font-size:28px; } }
        .services{ max-width:1080px; margin:-64px auto 0; position:relative; z-index:5; background:#fff; border-radius:8px; box-shadow:0 12px 32px rgba(18,58,102,0.14); display:grid; grid-template-columns:repeat(4,1fr); }
        .service-card{ padding:32px 24px; text-align:center; border-right:1px solid var(--border); transition:background .15s; cursor:pointer; }
        .service-card:last-child{ border-right:none; }
        .service-card:hover{ background:var(--blue-pale); }
        .service-card i{ font-size:28px; color:var(--blue-mid); }
        .service-card h3{ font-size:15px; font-weight:600; color:var(--ink); margin:14px 0 8px; }
        .service-card p{ font-size:13px; color:var(--ink-soft); line-height:1.6; }
        .read-more{ display:inline-block; margin-top:14px; font-size:11px; font-weight:600; letter-spacing:1px; color:var(--accent-green); border-bottom:1.5px solid var(--accent-green); padding-bottom:2px; }
        @media (max-width:860px){ .services{ grid-template-columns:repeat(2,1fr); margin-top:-40px; } .service-card{ border-bottom:1px solid var(--border); } }
        @media (max-width:480px){ .services{ grid-template-columns:1fr; } }
        .about{ display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:88px 32px 64px; max-width:1180px; margin:0 auto; }
        .about h2{ font-size:26px; font-weight:600; color:var(--ink); margin-bottom:16px; }
        .about p{ font-size:15px; color:var(--ink-soft); line-height:1.75; margin-bottom:14px; }
        .about img{ border-radius:8px; width:100%; height:320px; object-fit:cover; }
        @media (max-width:860px){ .about{ grid-template-columns:1fr; } .about img{ height:240px; order:-1; } }
        .stats{ background:var(--blue-deep); color:#fff; padding:36px 32px; }
        .stats-inner{ max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:24px; text-align:center; }
        .stat-num{ font-size:28px; font-weight:700; }
        .stat-label{ font-size:12px; color:#bcd2ec; letter-spacing:0.5px; margin-top:4px; }
        @media (max-width:640px){ .stats-inner{ grid-template-columns:repeat(2,1fr); } }
        .section-label{ font-size:12px; font-weight:600; letter-spacing:1.5px; color:var(--blue-mid); text-transform:uppercase; text-align:center; margin-bottom:8px; }
        .section-title{ font-size:24px; font-weight:600; text-align:center; color:var(--ink); margin-bottom:28px; }
        .properties{ padding:80px 32px; max-width:1180px; margin:0 auto; }
        .filter-tabs{ display:flex; justify-content:center; gap:24px; margin-bottom:36px; flex-wrap:wrap; }
        .filter-tab{ font-size:12px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; color:var(--ink-soft); cursor:pointer; padding-bottom:6px; border-bottom:2px solid transparent; background:none; border-top:none; border-left:none; border-right:none; }
        .filter-tab.active{ color:var(--accent-orange); border-bottom-color:var(--accent-orange); }
        .property-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .property-card{ cursor:pointer; }
        .property-card .thumb{ position:relative; }
        .property-card img{ height:180px; object-fit:cover; border-radius:8px; width:100%; }
        .property-status{ position:absolute; top:10px; left:10px; font-size:10px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; padding:4px 10px; border-radius:4px; color:#fff; }
        .property-status.for-sale{ background:var(--accent-orange); }
        .property-status.sold{ background:var(--accent-green); }
        .property-status.investment{ background:var(--blue); }
        .property-card .city{ font-size:14px; font-weight:600; color:var(--ink); margin-top:12px; }
        .property-card .type{ font-size:12px; color:var(--ink-soft); margin-top:2px; }
        .property-card .price{ font-size:13px; font-weight:600; color:var(--accent-orange); margin-top:4px; }
        @media (max-width:860px){ .property-grid{ grid-template-columns:1fr; } }
        .testimonial-wrap{ background:var(--blue-pale); padding:72px 32px; }
        .carousel{ max-width:600px; margin:0 auto; text-align:center; }
        .carousel-avatars{ display:flex; align-items:center; justify-content:center; gap:18px; margin-bottom:24px; }
        .carousel-avatar{ width:52px; height:52px; border-radius:50%; background:var(--blue-pale-2); color:var(--blue); display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:600; opacity:0.45; transition:opacity .2s, transform .2s; cursor:pointer; }
        .carousel-avatar.active{ opacity:1; transform:scale(1.15); background:var(--blue); color:#fff; }
        .carousel-quote{ font-size:17px; color:var(--blue-deep); font-style:italic; line-height:1.7; margin-bottom:16px; min-height:96px; }
        .carousel-name{ font-size:13px; font-weight:600; color:var(--blue); }
        .carousel-role{ font-size:12px; color:var(--ink-soft); margin-top:2px; }
        .carousel-nav{ display:flex; justify-content:center; gap:16px; margin-top:24px; }
        .carousel-nav button{ width:34px; height:34px; border-radius:50%; border:1px solid var(--border); background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:var(--blue); }
        .carousel-nav button:hover{ background:var(--blue-pale-2); }
        .contact-section{ display:grid; grid-template-columns:1fr 1fr; gap:0; max-width:1180px; margin:0 auto 64px; border-radius:8px; overflow:hidden; box-shadow:0 4px 20px rgba(18,58,102,0.08); }
        .contact-form-col{ padding:56px 48px; background:#fff; }
        .contact-form-col .section-label{ text-align:left; margin-bottom:6px; }
        .contact-form-col h2{ font-size:24px; font-weight:600; color:var(--ink); margin-bottom:24px; text-align:left; }
        .form-row{ display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px; }
        .form-row.cols-3{ grid-template-columns:1fr 1fr 1fr; }
        input, textarea{ width:100%; font-family:inherit; font-size:14px; color:var(--ink); padding:11px 12px; border:1px solid var(--border); border-radius:5px; background:#fbfdff; }
        input:focus, textarea:focus{ outline:none; border-color:var(--blue-mid); }
        textarea{ min-height:90px; resize:vertical; margin-bottom:16px; }
        .contact-photo-col{ background-image: linear-gradient(rgba(18,58,102,0.15), rgba(18,58,102,0.15)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80'); background-size:cover; background-position:center; }
        @media (max-width:860px){ .contact-section{ grid-template-columns:1fr; } .contact-photo-col{ min-height:220px; } .form-row, .form-row.cols-3{ grid-template-columns:1fr; } }
        .cta-band{ padding:64px 32px; text-align:center; }
        .cta-band h2{ font-size:24px; font-weight:600; color:var(--ink); margin-bottom:10px; }
        .cta-band p{ font-size:14px; color:var(--ink-soft); margin-bottom:26px; }
        .guarantees-wrap{ padding:56px 32px; border-top:1px solid var(--border); }
        .guarantees-inner{ max-width:1180px; margin:0 auto; display:flex; align-items:flex-start; justify-content:center; gap:28px; flex-wrap:wrap; }
        .badge{ width:104px; text-align:center; }
        .badge-star{ width:92px; height:92px; margin:0 auto; position:relative; background:#e3a83d; clip-path: polygon(50% 0%, 61% 12%, 75% 2%, 78% 18%, 94% 15%, 90% 31%, 100% 40%, 86% 47%, 92% 62%, 76% 60%, 74% 76%, 61% 68%, 50% 82%, 39% 68%, 26% 76%, 24% 60%, 8% 62%, 14% 47%, 0% 40%, 10% 31%, 6% 15%, 22% 18%, 25% 2%, 39% 12%); display:flex; align-items:center; justify-content:center; }
        .badge-star i{ position:absolute; top:20px; font-size:15px; color:var(--blue-deep); }
        .badge-ribbon{ position:absolute; left:6px; right:6px; top:44px; background:var(--blue-deep); color:#fff; font-size:9px; font-weight:700; letter-spacing:0.3px; line-height:1.3; padding:5px 2px; text-transform:uppercase; }
        .badge-sub{ font-size:8px; font-weight:700; letter-spacing:0.5px; color:var(--ink-soft); text-transform:uppercase; margin-top:4px; }
        .credential{ display:flex; align-items:center; gap:10px; padding-left:8px; border-left:1px solid var(--border); }
        .credential-shield{ width:44px; height:50px; background:var(--blue-deep); color:#fff; font-weight:700; font-size:13px; display:flex; align-items:center; justify-content:center; clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%); }
        .credential-text{ font-size:12px; font-weight:600; color:var(--ink); line-height:1.4; }
        .credential-text span{ display:block; font-size:10px; font-weight:500; color:var(--ink-soft); }
        @media (max-width:640px){ .guarantees-inner{ gap:18px; } .credential{ border-left:none; padding-left:0; width:100%; justify-content:center; margin-top:12px; } }
        footer{ background:var(--blue-deep); color:#cfe0f2; padding:48px 32px 24px; }
        .footer-inner{ max-width:1180px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:32px; padding-bottom:32px; border-bottom:1px solid rgba(255,255,255,0.12); }
        .footer-inner h4{ font-size:13px; color:#fff; font-weight:600; margin-bottom:14px; letter-spacing:0.5px; }
        .footer-inner .brand{ color:#fff; margin-bottom:10px; }
        .footer-inner p, .footer-inner a{ font-size:13px; color:#a9c2de; display:block; margin-bottom:8px; }
        .footer-inner a:hover{ color:#fff; }
        .footer-bottom{ max-width:1180px; margin:0 auto; display:flex; justify-content:space-between; padding-top:20px; font-size:12px; color:#8fabc9; flex-wrap:wrap; gap:10px; }
        @media (max-width:860px){ .footer-inner{ grid-template-columns:1fr 1fr; } }
      `}</style>

      <div className="accent-stripe" />
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span><i className="ti ti-phone-call" />After-hours emergency maintenance: 703.888.0476</span>
            <span><i className="ti ti-phone" />703.776.9223</span>
          </div>
          <div className="topbar-social">
            <a href="#" aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
            <a href="#" aria-label="Instagram"><i className="ti ti-brand-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
            <a href="#" aria-label="YouTube"><i className="ti ti-brand-youtube" /></a>
          </div>
        </div>
      </div>

      <header>
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mars Hill Realty Group home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.png" alt="Mars Hill Realty Group" className="brand-logo" />
          </Link>
          <nav>
            <a href="#">Home</a>
            <a href="#">About Us <i className="ti ti-chevron-down" /></a>
            <a href="#">Services <i className="ti ti-chevron-down" /></a>
            <a href="#">Owners <i className="ti ti-chevron-down" /></a>
            <a href="#">Residents <i className="ti ti-chevron-down" /></a>
            <a href="#">Partner Club <i className="ti ti-chevron-down" /></a>
            <a href="#">Rental Listings <i className="ti ti-chevron-down" /></a>
            <a href="#">Mars Meals</a>
          </nav>
          <div className="header-actions">
            <a className="btn btn-outline" href="#">Owner login</a>
            <a className="btn btn-solid" href="#">Resident login</a>
          </div>
        </div>
      </header>

      <section className="hero">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`hero-bg${i === heroIndex ? " is-active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
            aria-hidden={i !== heroIndex}
          />
        ))}
        <div className="hero-wash" />
        <div className="hero-inner">
          <div className="eyebrow">Founded in 2003 · Serving Virginia</div>
          <h1>Save time and money with a team that manages the details</h1>
          <p>Full-service real estate and property management across Virginia — for owners who want peace of mind and residents who want a place to call home.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#">I&apos;m a property owner</a>
            <a className="btn btn-outline" style={{ background: "#fff" }} href="#">I&apos;m looking to rent</a>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="services">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <i className={`ti ${s.icon}`} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="read-more">READ MORE</span>
            </div>
          ))}
        </div>
      </div>

      <section className="about">
        <div>
          <div className="eyebrow" style={{ textAlign: "left" }}>Founded in 2003</div>
          <h2>Welcome to Mars Hill Realty Group</h2>
          <p>A full-service real estate brokerage licensed in Virginia, helping clients buy, sell, and invest with a focus on property management services.</p>
          <p>Our team handles tenant screening, maintenance coordination, and owner reporting — so property ownership stays an investment, not a second job.</p>
          <a className="btn btn-solid" href="#" style={{ marginTop: 8 }}>Meet the team</a>
        </div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80" alt="Mars Hill Realty Group team meeting" />
      </section>

      <div className="stats">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="properties">
        <div className="section-label">Recent Properties</div>
        <div className="section-title">Homes we currently manage</div>
        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-tab${activeFilter === f.key ? " active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="property-grid">
          {properties
            .filter((p) => activeFilter === "all" || p.status === activeFilter)
            .map((p) => (
              <div className="property-card" key={p.city + p.price}>
                <div className="thumb">
                  <img src={p.img} alt={`Home in ${p.city}`} />
                  <span className={`property-status ${p.status}`}>{p.label}</span>
                </div>
                <div className="city">{p.city}</div>
                <div className="type">{p.type}</div>
                <div className="price">{p.price}</div>
              </div>
            ))}
        </div>
      </section>

      <div className="testimonial-wrap">
        <div className="section-label">Testimonials</div>
        <div className="section-title">What our clients say</div>
        <div className="carousel">
          <div className="carousel-avatars">
            {reviews.map((r, i) => (
              <div
                key={r.initials}
                className={`carousel-avatar${i === current ? " active" : ""}`}
                onClick={() => show(i)}
              >
                {r.initials}
              </div>
            ))}
          </div>
          <p className="carousel-quote">&quot;{reviews[current].quote}&quot;</p>
          <div className="carousel-name">{reviews[current].name}</div>
          <div className="carousel-role">{reviews[current].role}</div>
          <div className="carousel-nav">
            <button aria-label="Previous testimonial" onClick={() => show(current - 1)}>
              <i className="ti ti-chevron-left" />
            </button>
            <button aria-label="Next testimonial" onClick={() => show(current + 1)}>
              <i className="ti ti-chevron-right" />
            </button>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <h2>Ready to get started?</h2>
        <p>Whether you&apos;re renting, hiring a manager, or investing — we&apos;re here to help.</p>
        <a className="btn btn-red" href="#" style={{ padding: "13px 28px", fontSize: 14 }}>Contact us today</a>
      </div>

      <div className="contact-section">
        <div className="contact-form-col">
          <div className="section-label">Interested in finding out more?</div>
          <h2>Contact us today</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Street address" />
            </div>
            <div className="form-row cols-3">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip code" />
            </div>
            <textarea placeholder="Comments" />
            <button type="submit" className="btn btn-red" style={{ padding: "12px 30px", fontSize: 14 }}>Send</button>
          </form>
        </div>
        <div className="contact-photo-col" />
      </div>

      <div className="guarantees-wrap">
        <div className="guarantees-inner">
          <div className="badge">
            <div className="badge-star"><i className="ti ti-heart-handshake" /><div className="badge-ribbon">Peace of<br />mind</div></div>
            <div className="badge-sub">Guarantee</div>
          </div>
          <div className="badge">
            <div className="badge-star"><i className="ti ti-calendar-check" /><div className="badge-ribbon">Rented in<br />60 days</div></div>
            <div className="badge-sub">Guarantee</div>
          </div>
          <div className="badge">
            <div className="badge-star"><i className="ti ti-thumb-up" /><div className="badge-ribbon">100%<br />satisfaction</div></div>
            <div className="badge-sub">Guarantee</div>
          </div>
          <div className="badge">
            <div className="badge-star"><i className="ti ti-replace" /><div className="badge-ribbon">Tenant<br />replacement</div></div>
            <div className="badge-sub">Guarantee</div>
          </div>
          <div className="badge">
            <div className="badge-star"><i className="ti ti-gavel" /><div className="badge-ribbon">Eviction<br />free</div></div>
            <div className="badge-sub">Guarantee</div>
          </div>
          <div className="credential">
            <div className="credential-shield">CRS</div>
            <div className="credential-text">Certified Residential<br />Specialist<span>Designated agents on staff</span></div>
          </div>
        </div>
      </div>

      <div className="accent-stripe" />
      <footer>
        <div className="footer-inner">
          <div>
            <div className="brand">Mars Hill Realty Group</div>
            <p>Full-service real estate and property management across Virginia since 2003.</p>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="/blog">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>Owners</h4>
            <a href="#">Property management</a>
            <a href="#">Owner login</a>
            <a href="#">Owner FAQ</a>
          </div>
          <div>
            <h4>Residents</h4>
            <a href="#">Search rentals</a>
            <a href="#">Resident login</a>
            <a href="#">Resident FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>PO Box 5059, Arlington, VA 22201 · <i className="ti ti-phone" /> 703.776.9223</span>
          <span>&copy; 2026 Mars Hill Realty Group</span>
        </div>
      </footer>
    </>
  );
}