import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllListings, getListingBySlug } from "@/lib/wp";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Static export needs every possible /properties/[slug] known at build
// time — this is the Next.js equivalent of the old site's single
// "Portfolio" project page (production has no such page on beta, since
// beta never installed that plugin; see lib/wp.ts for where the content
// comes from).
export async function generateStaticParams() {
  const listings = await getAllListings();
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) return {};
  return {
    title: listing.title,
    description: listing.description.slice(0, 160),
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) notFound();

  const isVacationRental = [
    "central-texas-vacation-rentals",
    "northern-virginia-vacation-rentals",
    "the-poconos-pennsylvania",
  ].includes(listing.statusSlug);

  return (
    <>
      <SiteHead />
      <SiteHeader />

      <div
        className="listing-hero"
        style={{ backgroundImage: `url('${listing.image}')` }}
      >
        <div className="listing-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Homepage</Link>
            <span className="sep">/</span>
            <Link href={isVacationRental ? "/#vacation-rentals" : "/#properties"}>
              {listing.statusLabel}
            </Link>
            <span className="sep">/</span>
            <span className="current">{listing.title}</span>
          </div>
          <h1>{listing.title}</h1>
        </div>
      </div>

      <div className="listing-body">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="listing-photo" src={listing.image} alt={listing.title} />
        <div className="listing-category">{listing.statusLabel}</div>
        {listing.price && <div className="listing-price">{listing.price}</div>}
        <p className="listing-description">{listing.description}</p>
        <Link className="listing-back" href="/">
          <i className="ti ti-arrow-left" /> Back to all listings
        </Link>
      </div>

      <SiteFooter />
    </>
  );
}
