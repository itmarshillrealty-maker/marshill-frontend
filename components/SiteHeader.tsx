import Link from "next/link";

// Top contact bar + sticky nav header, shared by the homepage and every
// property detail page.
export default function SiteHeader() {
  return (
    <>
      <div className="accent-stripe" />
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span><i className="ti ti-phone-call" />After-hours emergency maintenance: <a href="tel:5126886476">512-688-6476</a></span>
            <span><i className="ti ti-phone" /><a href="tel:7037769223">703-776-9223</a> (VA)</span>
            <span><i className="ti ti-phone" /><a href="tel:5129420024">512-942-0024</a> (TX)</span>
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
            <Link href="/">Home</Link>
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
    </>
  );
}
