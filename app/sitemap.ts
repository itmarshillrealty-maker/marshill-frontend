import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllListings, getTeamMembers } from "@/lib/wp";
import { getAllServiceSlugs } from "@/lib/servicePages";

// Required for `output: "export"` (static export has no server to
// regenerate this at request time, so it's rendered once at build time).
export const dynamic = "force-static";

// Static export of /sitemap.xml, rebuilt on every deploy. Lists every
// page we actually have: the static pages, every /service/[slug], every
// published property listing, and every team member profile.
function url(path: string) {
  return `${SITE_URL}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/company/"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/team/"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: url(`/service/${slug}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const [listings, team] = await Promise.all([getAllListings(), getTeamMembers()]);

  const listingEntries: MetadataRoute.Sitemap = listings.map((listing) => ({
    url: url(`/properties/${listing.slug}/`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const teamEntries: MetadataRoute.Sitemap = team.map((member) => ({
    url: url(`/team/${member.slug}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...listingEntries, ...teamEntries];
}
