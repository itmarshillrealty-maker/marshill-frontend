import { getHomeContent } from "@/lib/wp";
import HomeClient from "./HomeClient";

// This runs once at `next build` time (static export has no server at
// runtime) — it pulls hero slides, service cards, testimonials, and
// property listings straight from the headless WordPress REST API, so
// editing content in wp-admin and redeploying is all it takes to update
// the homepage. See lib/wp.ts for the fetch + fallback logic.
export default async function Home() {
  const content = await getHomeContent();
  return <HomeClient {...content} />;
}
