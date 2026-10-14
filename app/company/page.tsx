import type { Metadata } from "next";
import Link from "next/link";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Company",
  description:
    "Mars Hill Realty Group is a locally owned, full-service real estate and property management company serving Central Texas and Northern Virginia since 2003.",
};

const MARS_VALUES = [
  {
    letter: "M",
    title: "Maintain God as the Priority",
    text: "Do everything with integrity. Be trustworthy and value honesty.",
  },
  {
    letter: "A",
    title: "Attain Win-Win-Win for Everyone",
    text: "Collaboratively negotiate and problem-solve so that all parties (buyers/renters, sellers/owners, and brokers) benefit, solutions-oriented and always follow through.",
  },
  {
    letter: "R",
    title: "Reduce Risk",
    text: "Protect the company and our clients from contractual and property risk. Be competent, a thorough communicator, and detailed.",
  },
  {
    letter: "S",
    title: "Strengthen Relationships",
    text: "Value relationships over profits. Be teachable, humble and friendly.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <SiteHead />
      <SiteHeader />

      <div
        className="listing-hero"
        style={{
          backgroundImage:
            "url('https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Welcome-to-Mars-Hill-1.jpg')",
        }}
      >
        <div className="listing-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Homepage</Link>
            <span className="sep">/</span>
            <span className="current">Our Company</span>
          </div>
          <h1>Our Company</h1>
        </div>
      </div>

      <div className="about" style={{ paddingTop: 72 }}>
        <div>
          <div className="section-label" style={{ textAlign: "left" }}>
            Founded in 2003
          </div>
          <h2>
            Mars Hill Realty Group — Your Central Texas And Northern Virginia
            Property Management Solution
          </h2>
          <p>
            Mars Hill Realty has a passion for providing our clients a
            superior business infrastructure that helps our customers achieve
            their real estate goals. Whether it is buying or selling a new
            home, looking for a new investment property or managing a rental
            property, Mars Hill Realty Group provides a locally owned, full
            service real estate company to help your experience be the best
            it can be.
          </p>
          <p>
            Our 30 years of experience in this industry, along with also
            being investment owners ourselves, enables us the unique position
            to fully understand what it takes to create a positive
            buying/selling, investing or management experience. We know that
            transparent business practices, effective communication and
            strong negotiation skills are an important foundation to any
            business interaction. Our team takes pride in building these
            skills and using them to represent our clients and residents for
            positive outcomes.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/05/Slider-1-scaled-1.jpg"
          alt="Mars Hill Realty Group"
        />
      </div>

      <div className="wrap" style={{ padding: "0 32px 72px" }}>
        <div className="section-label">Our Story</div>
        <h2 className="section-title">What Does &ldquo;Mars Hill&rdquo; Mean?</h2>
        <p className="company-story">
          Mars Hill is the location in Greece where the Apostle Paul preached
          to a very opinionated crowd of influential philosophers and
          religious thinkers. Many people believed that there were more gods
          in Athens than men! Wherever the Apostle Paul looked, his spirit was
          provoked within him when he saw that the city was given over to
          idols. Nevertheless, Paul boldly proclaimed the truth about Jesus
          and some men joined him and believed.
        </p>
        <p className="company-story">
          At Mars Hill Realty Group we believe this idea needs to be the
          foundation of all we do: boldly proclaim the truth to our clients.
          That&rsquo;s our promise to you. Our #1 goal is to give you
          straightforward, honest and intelligible information about the real
          estate market so you can achieve optimal real estate goals, whether
          you are a property owner, buyer or seller.
        </p>
      </div>

      <div className="wrap" style={{ padding: "0 32px 72px" }}>
        <div className="section-label">Core Values</div>
        <h2 className="section-title">The MARS Values</h2>
        <div className="mars-grid">
          {MARS_VALUES.map((v) => (
            <div className="mars-card" key={v.letter}>
              <div className="mars-letter">{v.letter}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ padding: "0 32px 80px" }}>
        <div className="vision-mission-grid">
          <div className="vision-mission-card">
            <div className="section-label" style={{ textAlign: "left" }}>
              Vision
            </div>
            <p>
              Our vision at Mars Hill is to steward our influence and
              resources to make a positive, lasting impact on people.
            </p>
          </div>
          <div className="vision-mission-card">
            <div className="section-label" style={{ textAlign: "left" }}>
              Mission
            </div>
            <p>
              Our mission is to provide full service property management
              services in Central Texas and Northern Virginia.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <h2>Interested in partnering with us?</h2>
        <p>
          Call our business development team at{" "}
          <a href="tel:7033373253" style={{ color: "var(--blue)", fontWeight: 600 }}>
            703-337-3253
          </a>{" "}
          or send us a message.
        </p>
        <Link className="btn btn-solid" href="/#contact">
          Contact Us
        </Link>
      </div>

      <SiteFooter />
    </>
  );
}
