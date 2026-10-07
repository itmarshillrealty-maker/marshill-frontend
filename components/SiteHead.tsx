// Fonts, icon font, and the site-wide hand-rolled CSS shared by every page
// (homepage + property detail pages). Kept in one place so there's a single
// source of truth for colors, the header/footer/property-card styles, etc.
// — a page-specific section just adds its own rule block alongside these.
export default function SiteHead() {
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
        .topbar{ background:var(--blue-deep); color:#cfe0f2; font-size:13.5px; }
        .topbar-inner{ max-width:1180px; margin:0 auto; padding:10px 32px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; }
        .topbar-left{ display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
        .topbar-left i{ margin-right:5px; vertical-align:-1px; }
        .topbar-left a{ color:#cfe0f2; }
        .topbar-left a:hover{ color:#fff; }
        .topbar-social{ display:flex; gap:14px; font-size:15px; }
        .topbar-social a{ color:#cfe0f2; }
        .topbar-social a:hover{ color:#fff; }
        @media (max-width:640px){ .topbar-left{ font-size:12px; gap:12px; } }
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
        .properties + .properties{ padding-top:0; }
        .filter-tabs{ display:flex; justify-content:center; gap:24px; margin-bottom:36px; flex-wrap:wrap; }
        .filter-tab{ font-size:12px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; color:var(--ink-soft); cursor:pointer; padding-bottom:6px; border-bottom:2px solid transparent; background:none; border-top:none; border-left:none; border-right:none; }
        .filter-tab.active{ color:var(--accent-orange); border-bottom-color:var(--accent-orange); }
        .property-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .property-card{ cursor:pointer; display:block; }
        .property-card .thumb{ position:relative; }
        .property-card img{ height:180px; object-fit:cover; border-radius:8px; width:100%; background:var(--blue-pale); }
        .property-status{ position:absolute; top:10px; left:10px; font-size:10px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; padding:4px 10px; border-radius:4px; color:#fff; background:var(--blue); }
        .property-card .city{ font-size:14px; font-weight:600; color:var(--ink); margin-top:12px; }
        .property-card .type{ font-size:12px; color:var(--ink-soft); margin-top:2px; }
        .property-card .price{ font-size:13px; font-weight:600; color:var(--accent-orange); margin-top:4px; }
        @media (max-width:860px){ .property-grid{ grid-template-columns:1fr; } }
        .testimonial-wrap{ background:var(--blue-pale); padding:72px 32px; }
        .carousel{ max-width:600px; margin:0 auto; text-align:center; }
        .carousel-avatars{ display:flex; align-items:center; justify-content:center; gap:18px; margin-bottom:24px; flex-wrap:wrap; }
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
        .consent-row{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; font-size:13px; color:var(--ink); margin-bottom:16px; }
        .consent-row .required{ color:var(--red); }
        .consent-option{ display:flex; align-items:center; gap:6px; white-space:nowrap; font-weight:500; }
        .consent-option input{ width:auto; accent-color:var(--blue); }
        .recaptcha-placeholder{ display:flex; align-items:center; gap:8px; width:fit-content; padding:10px 14px; margin-bottom:16px; border:1px dashed var(--border); border-radius:5px; background:#fbfdff; font-size:12px; color:var(--ink-soft); }
        .send-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
        .send-row .send-divider{ font-size:13px; font-weight:600; color:var(--ink-soft); text-transform:uppercase; letter-spacing:1px; }
        .send-row .send-call{ font-size:14px; color:var(--ink); }
        .send-row .send-call a{ font-weight:600; color:var(--blue); }
        .contact-photo-col{ background-image: linear-gradient(rgba(18,58,102,0.15), rgba(18,58,102,0.15)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80'); background-size:cover; background-position:center; }
        @media (max-width:860px){ .contact-section{ grid-template-columns:1fr; } .contact-photo-col{ min-height:220px; } .form-row, .form-row.cols-3{ grid-template-columns:1fr; } }
        .cta-band{ padding:64px 32px; text-align:center; }
        .cta-band h2{ font-size:24px; font-weight:600; color:var(--ink); margin-bottom:10px; }
        .cta-band p{ font-size:14px; color:var(--ink-soft); margin-bottom:26px; }
        .guarantees-wrap{ padding:64px 32px; border-top:1px solid var(--border); }
        .guarantees-inner{ max-width:1180px; margin:0 auto; }
        .badge-marquee{ overflow:hidden; -webkit-mask-image:linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); mask-image:linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
        .badge-track{ display:flex; align-items:center; gap:64px; width:max-content; animation:badge-scroll 60s linear infinite; }
        .badge-marquee:hover .badge-track{ animation-play-state:paused; }
        .badge-track img{ height:100px; width:auto; max-width:220px; object-fit:contain; flex-shrink:0; filter:grayscale(0.2); opacity:0.85; transition:opacity .2s ease, filter .2s ease; }
        .badge-track img:hover{ opacity:1; filter:none; }
        @keyframes badge-scroll{ from{ transform:translateX(0); } to{ transform:translateX(-50%); } }
        @media (prefers-reduced-motion: reduce){ .badge-track{ animation:none; flex-wrap:wrap; justify-content:center; } }
        footer{ background:var(--blue-deep); color:#cfe0f2; padding:48px 32px 24px; }
        .footer-inner{ max-width:1180px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:32px; padding-bottom:32px; border-bottom:1px solid rgba(255,255,255,0.12); }
        .footer-inner h4{ font-size:13px; color:#fff; font-weight:600; margin-bottom:14px; letter-spacing:0.5px; }
        .footer-inner .brand{ color:#fff; margin-bottom:10px; }
        .footer-inner p, .footer-inner a{ font-size:13px; color:#a9c2de; display:block; margin-bottom:8px; }
        .footer-inner a:hover{ color:#fff; }
        .footer-bottom{ max-width:1180px; margin:0 auto; display:flex; justify-content:space-between; padding-top:20px; font-size:12px; color:#8fabc9; flex-wrap:wrap; gap:10px; }
        @media (max-width:860px){ .footer-inner{ grid-template-columns:1fr 1fr; } }

        /* Single listing detail page (Featured Properties / Vacation Rentals) */
        .breadcrumb{ font-size:11px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:#cfe0f2; }
        .breadcrumb a{ color:#cfe0f2; }
        .breadcrumb a:hover{ color:#fff; }
        .breadcrumb .sep{ margin:0 8px; opacity:0.6; }
        .breadcrumb .current{ color:#fff; }
        .listing-hero{ position:relative; min-height:260px; display:flex; align-items:flex-end; background:var(--blue-deep); background-size:cover; background-position:center; padding:40px 32px; }
        .listing-hero::before{ content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(18,58,102,0.55), rgba(18,58,102,0.85)); }
        .listing-hero-inner{ position:relative; z-index:1; max-width:1180px; margin:0 auto; width:100%; }
        .listing-hero h1{ color:#fff; font-size:30px; font-weight:600; margin:10px 0 0; }
        .listing-body{ max-width:860px; margin:0 auto; padding:56px 32px 72px; }
        .listing-photo{ border-radius:8px; width:100%; max-height:480px; object-fit:cover; margin-bottom:32px; }
        .listing-category{ display:inline-block; font-size:11px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; color:var(--accent-green); margin-bottom:14px; }
        .listing-price{ font-size:18px; font-weight:600; color:var(--accent-orange); margin-bottom:18px; }
        .listing-description{ font-size:15px; color:var(--ink-soft); line-height:1.8; white-space:pre-line; }
        .listing-back{ display:inline-flex; align-items:center; gap:6px; margin-top:36px; font-size:13px; font-weight:600; color:var(--blue); }
        .listing-back:hover{ color:var(--blue-mid); }

        /* Team page */
        .page-hero{ position:relative; min-height:200px; display:flex; align-items:center; justify-content:center; text-align:center; background:var(--blue-deep); padding:48px 32px; }
        .page-hero h1{ color:#fff; font-size:30px; font-weight:600; }
        .team-wrap{ max-width:1180px; margin:0 auto; padding:72px 32px; }
        .team-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:32px 24px; }
        .team-card{ text-align:center; }
        .team-photo{ width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:8px; background:var(--blue-pale); filter:grayscale(1); transition:filter .2s ease; }
        .team-card:hover .team-photo{ filter:grayscale(0); }
        .team-name{ font-size:14px; font-weight:600; color:var(--ink); margin-top:14px; }
        .team-role{ font-size:12px; color:var(--ink-soft); margin-top:4px; line-height:1.5; }
        @media (max-width:860px){ .team-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:480px){ .team-grid{ grid-template-columns:1fr 1fr; gap:24px 16px; } }
      `}</style>
    </>
  );
}
