import type { Metadata } from "next";
import { getTeamMembers } from "@/lib/wp";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Team Members",
  description:
    "Meet the Mars Hill Realty Group team — property managers, brokers, and support staff across Virginia and Texas.",
};

export default async function TeamPage() {
  const team = await getTeamMembers();

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
          <h1>Team Members</h1>
        </div>
      </div>

      <div className="team-wrap">
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="team-photo" src={member.image} alt={member.name} />
              <div className="team-name">{member.name}</div>
              {member.role && <div className="team-role">{member.role}</div>}
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
