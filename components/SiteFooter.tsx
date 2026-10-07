// Real trust/certification/military-service badges, pulled from the WordPress
// media library (search "footer"). Each number below is the "Footer Badge N"
// title WordPress assigned on original upload; picked the cleanest re-upload
// (the June 2020 "-300" batch) for each, except #9 which got a later, higher-
// quality replacement in November 2020.
const FOOTER_BADGES = [
  { id: 1, alt: "Property Peace of Mind Guarantee", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-1-300.jpg" },
  { id: 2, alt: "Rented in 60 Days Guarantee", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-2-300.jpg" },
  { id: 3, alt: "100% Satisfaction Guarantee", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-3-300.jpg" },
  { id: 4, alt: "Tenant Replacement Guarantee", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-4-300.jpg" },
  { id: 5, alt: "Eviction Free Guarantee", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-5-300.jpg" },
  { id: 6, alt: "Mars Hill Realty Group certification", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-6-300.jpg" },
  { id: 7, alt: "Certified Residential Specialist (CRS)", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-7-300.jpg" },
  { id: 8, alt: "Graduate, REALTOR Institute (GRI)", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-8-300.jpg" },
  { id: 9, alt: "Proud to have served — military veteran badge", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/11/Footer-Badge-9-300-JF.png" },
  { id: 10, alt: "Certified Negotiation Expert (CNE)", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-10-300.png" },
  { id: 11, alt: "National Association of Residential Property Managers (NARPM)", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-11-300.png" },
  { id: 12, alt: "Operation Iraqi Freedom veteran badge", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-12-300.jpeg" },
  { id: 13, alt: "Residential Construction Certified", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-13-300.jpg" },
  { id: 14, alt: "Texas Association of Realtors member", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-14-300.jpg" },
  { id: 15, alt: "Equal Housing Opportunity", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-15-300.jpg" },
  { id: 16, alt: "REALTOR", image: "https://beta.marshillpropertymanagement.com/wp/wp-content/uploads/2020/06/Footer-Badge-16-300.jpg" },
];

// Guarantee/trust badge marquee + footer, shared by the homepage and every
// property detail page.
export default function SiteFooter() {
  return (
    <>
      <div className="guarantees-wrap">
        <div className="section-label">Trusted &amp; certified</div>
        <div className="guarantees-inner">
          <div className="badge-marquee">
            <div className="badge-track">
              {[...FOOTER_BADGES, ...FOOTER_BADGES].map((b, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`${b.id}-${i}`} src={b.image} alt={b.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="accent-stripe" />
      <footer>
        <div className="footer-inner">
          <div>
            <div className="brand">Mars Hill Realty Group</div>
            <p>Full-service real estate and property management across Virginia and Texas since 2003.</p>
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
          <span>PO Box 5059, Arlington, VA 22201 · <i className="ti ti-phone" /> <a href="tel:7037769223" style={{ color: "inherit" }}>703-776-9223</a> (VA) / <a href="tel:5129420024" style={{ color: "inherit" }}>512-942-0024</a> (TX)</span>
          <span>&copy; 2026 Mars Hill Realty Group</span>
        </div>
      </footer>
    </>
  );
}
