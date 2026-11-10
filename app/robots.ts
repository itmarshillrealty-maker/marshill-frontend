import type { MetadataRoute } from "next";
import { SITE_URL, ALLOW_INDEXING } from "@/lib/seo";

// Required for `output: "export"` (static export has no server to
// regenerate this at request time, so it's rendered once at build time).
export const dynamic = "force-static";

// Static export of /robots.txt. See the comment on ALLOW_INDEXING in
// lib/seo.ts — this is the one place that constant actually takes
// effect: blocked everywhere while the beta is in development, open
// (with the sitemap advertised) once it's flipped true at launch.
export default function robots(): MetadataRoute.Robots {
  if (!ALLOW_INDEXING) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
