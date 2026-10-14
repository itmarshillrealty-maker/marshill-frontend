import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicePage, getAllServiceSlugs } from "@/lib/servicePages";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Static export needs every /service/[slug] known at build time.
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <SiteHead />
      <SiteHeader />

      <div
        className="listing-hero"
        style={{ backgroundImage: `url('${page.heroImage}')` }}
      >
        <div className="listing-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Homepage</Link>
            <span className="sep">/</span>
            <span className="current">{page.title}</span>
          </div>
          <h1>{page.title}</h1>
        </div>
      </div>

      <div className="wrap service-detail-wrap">
        {page.intro.length > 0 && (
          <div className="service-detail-intro">
            {page.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {page.sections.map((section, i) => {
          if (section.type === "paragraphs") {
            return (
              <div className="service-detail-section" key={i}>
                {section.heading && <h2 className="section-title">{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            );
          }
          if (section.type === "bullets") {
            return (
              <div className="service-detail-section" key={i}>
                <h2 className="section-title">{section.heading}</h2>
                <ul className="service-bullets">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <i className="ti ti-circle-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if (section.type === "steps") {
            return (
              <div className="service-detail-section" key={i}>
                <h2 className="section-title">{section.heading}</h2>
                <div className="service-steps">
                  {section.items.map((step, j) => (
                    <div className="service-step" key={j}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (section.type === "faq") {
            return (
              <div className="service-detail-section" key={i}>
                <h2 className="section-title">{section.heading}</h2>
                <div className="service-faq">
                  {section.items.map((item, j) => (
                    <div className="service-faq-item" key={j}>
                      <div className="service-faq-q">
                        <i className="ti ti-help-circle" /> {item.q}
                      </div>
                      <p className="service-faq-a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          // ctas
          return (
            <div className="service-detail-section" key={i}>
              {section.heading && <h2 className="section-title">{section.heading}</h2>}
              <div className="service-ctas">
                {section.items.map((cta, j) =>
                  cta.external ? (
                    <a
                      className="btn btn-outline"
                      key={j}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <Link className="btn btn-outline" key={j} href={cta.href}>
                      {cta.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          );
        })}

        <Link className="listing-back" href="/">
          <i className="ti ti-arrow-left" /> Back to homepage
        </Link>
      </div>

      <SiteFooter />
    </>
  );
}
