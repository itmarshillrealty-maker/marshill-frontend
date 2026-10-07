"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type {
  HeroSlide,
  ServiceCard,
  Testimonial,
  PropertyListing,
  ListingFilter,
} from "@/lib/wp";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const HERO_INTERVAL_MS = 5000;

type Props = {
  heroSlides: HeroSlide[];
  services: ServiceCard[];
  testimonials: Testimonial[];
  featuredProperties: PropertyListing[];
  featuredFilters: ListingFilter[];
  vacationRentals: PropertyListing[];
  vacationFilters: ListingFilter[];
};

export default function HomeClient({
  heroSlides,
  services,
  testimonials,
  featuredProperties,
  featuredFilters,
  vacationRentals,
  vacationFilters,
}: Props) {
  const [activeFeaturedFilter, setActiveFeaturedFilter] = useState("all");
  const [activeVacationFilter, setActiveVacationFilter] = useState("all");
  const [current, setCurrent] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  const show = (i: number) =>
    setCurrent((i + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const activeTestimonial = testimonials[current] || testimonials[0];

  return (
    <>
      <SiteHead />
      <SiteHeader />

      <section className="hero">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-bg${i === heroIndex ? " is-active" : ""}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
            aria-hidden={i !== heroIndex}
          />
        ))}
        <div className="hero-wash" />
        <div className="hero-inner">
          {heroSlides[heroIndex] && (
            <>
              {heroSlides[heroIndex].eyebrow && (
                <div className="eyebrow">{heroSlides[heroIndex].eyebrow}</div>
              )}
              <h1>{heroSlides[heroIndex].headline}</h1>
              <p>{heroSlides[heroIndex].subtitle}</p>
            </>
          )}
          <div className="hero-actions">
            <a className="btn btn-solid" href="#">I&apos;m a property owner</a>
            <a className="btn btn-outline" style={{ background: "#fff" }} href="#">I&apos;m looking to rent</a>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="services">
          {services.map((s) => (
            <div className="service-card" key={s.id}>
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
          <p>Mars Hill Realty Group is a full-service real estate brokerage, licensed in Virginia and Texas. We help our clients buy, sell and invest in homes with a focus on property management services. We&apos;ve built a team that enjoys working together to provide our clientele with proven business practices, concierge services and responsive communication.</p>
          <p>At Mars Hill, our property managers expertly manage your tenants and protect your investment, combining years of successful experience, in-depth market knowledge and negotiation expertise to help our owners reach their goals.</p>
          <Link className="btn btn-solid" href="/team" style={{ marginTop: 8 }}>Meet the team</Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Welcome-to-Mars-Hill-1.jpg" alt="Welcome to Mars Hill Realty Group" />
      </section>

      <div className="stats">
        <div className="stats-inner">
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">YEARS IN BUSINESS</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">VIRGINIA OFFICES</div>
          </div>
          <div>
            <div className="stat-num">2 DAYS</div>
            <div className="stat-label">AVG. APPLICATION TURNAROUND</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">PAPERLESS PROCESS</div>
          </div>
        </div>
      </div>

      <div className="testimonial-wrap">
        <div className="section-label">Testimonials</div>
        <div className="section-title">What our clients say</div>
        <div className="carousel">
          <div className="carousel-avatars">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`carousel-avatar${i === current ? " active" : ""}`}
                onClick={() => show(i)}
              >
                {t.initials}
              </div>
            ))}
          </div>
          {activeTestimonial && (
            <>
              <p className="carousel-quote">&quot;{activeTestimonial.quote}&quot;</p>
              <div className="carousel-name">{activeTestimonial.name}</div>
              <div className="carousel-role">{activeTestimonial.role}</div>
            </>
          )}
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

      {featuredProperties.length > 0 && (
        <section className="properties" id="properties">
          <div className="section-label">Featured Properties</div>
          <div className="section-title">Homes we currently manage</div>
          <div className="filter-tabs">
            {featuredFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-tab${activeFeaturedFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveFeaturedFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="property-grid">
            {featuredProperties
              .filter((p) => activeFeaturedFilter === "all" || p.statusSlug === activeFeaturedFilter)
              .map((p) => (
                <Link className="property-card" key={p.id} href={`/properties/${p.slug}`}>
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} />
                    <span className="property-status">{p.statusLabel}</span>
                  </div>
                  <div className="city">{p.title}</div>
                  <div className="type">{p.detail}</div>
                  {p.price && <div className="price">{p.price}</div>}
                </Link>
              ))}
          </div>
        </section>
      )}

      {vacationRentals.length > 0 && (
        <section className="properties" id="vacation-rentals">
          <div className="section-label">Vacation Rentals</div>
          <div className="section-title">Where we host</div>
          <div className="filter-tabs">
            {vacationFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-tab${activeVacationFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveVacationFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="property-grid">
            {vacationRentals
              .filter((p) => activeVacationFilter === "all" || p.statusSlug === activeVacationFilter)
              .map((p) => (
                <Link className="property-card" key={p.id} href={`/properties/${p.slug}`}>
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} />
                    <span className="property-status">{p.statusLabel}</span>
                  </div>
                  <div className="city">{p.title}</div>
                  <div className="type">{p.detail}</div>
                  {p.price && <div className="price">{p.price}</div>}
                </Link>
              ))}
          </div>
        </section>
      )}

      <div className="cta-band">
        <h2>Ready to get started?</h2>
        <p>Whether you&apos;re renting, hiring a manager, or investing — we&apos;re here to help.</p>
        <a className="btn btn-red" href="#" style={{ padding: "13px 28px", fontSize: 14 }}>Contact us today</a>
      </div>

      <div className="contact-section">
        <div className="contact-form-col">
          <div className="section-label">Interested in finding out more?</div>
          <h2>Contact Us Today!</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Street" />
            </div>
            <div className="form-row cols-3">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip Code" />
            </div>
            <textarea placeholder="Comments" />
            <div className="consent-row">
              <span>I agree to be contacted by Mars Hill Realty Group <span className="required">*</span></span>
              <label className="consent-option">
                <input type="checkbox" required /> Yes
              </label>
            </div>
            <div className="recaptcha-placeholder">
              <i className="ti ti-shield-check" />
              reCAPTCHA (needs your Google site key to go live)
            </div>
            <div className="send-row">
              <button type="submit" className="btn btn-red" style={{ padding: "12px 30px", fontSize: 14 }}>Send</button>
              <span className="send-divider">Or</span>
              <span className="send-call">Call: <a href="tel:7037769223">703-776-9223</a> (VA) · <a href="tel:5129420024">512-942-0024</a> (TX)</span>
            </div>
          </form>
        </div>
        <div className="contact-photo-col" />
      </div>

      <SiteFooter />
    </>
  );
}
