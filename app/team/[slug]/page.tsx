import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMembers, getTeamMemberBySlug } from "@/lib/wp";
import SiteHead from "@/components/SiteHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TeamContactForm from "@/components/TeamContactForm";

// Static export needs every possible /team/[slug] known at build time.
export async function generateStaticParams() {
  const team = await getTeamMembers();
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) return {};
  return {
    title: member.name,
    description: member.role
      ? `${member.name} — ${member.role} at Mars Hill Realty Group.`
      : `${member.name} at Mars Hill Realty Group.`,
  };
}

const SOCIAL_ICON: Record<string, string> = {
  Facebook: "ti-brand-facebook",
  LinkedIn: "ti-brand-linkedin",
  Twitter: "ti-brand-twitter",
  YouTube: "ti-brand-youtube",
  Instagram: "ti-brand-instagram",
};

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) notFound();

  const bioParagraphs = member.bio.split("\n\n").filter(Boolean);

  return (
    <>
      <SiteHead />
      <SiteHeader />

      <div
        className="listing-hero"
        style={{ backgroundImage: `url('${member.image}')` }}
      >
        <div className="listing-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Homepage</Link>
            <span className="sep">/</span>
            <Link href="/team">Team Members</Link>
            <span className="sep">/</span>
            <span className="current">{member.name}</span>
          </div>
          <h1>{member.name}</h1>
        </div>
      </div>

      <div className="team-detail-wrap">
        <div className="team-detail-grid">
          <div className="team-detail-side">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="team-detail-photo" src={member.image} alt={member.name} />
            {member.role && <div className="team-detail-role">{member.role}</div>}
            {member.phone && (
              <a className="team-detail-phone" href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}>
                <i className="ti ti-phone" /> {member.phone}
              </a>
            )}
            {member.social.length > 0 && (
              <div className="team-detail-social">
                {member.social.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    title={s.platform}
                  >
                    <i className={`ti ${SOCIAL_ICON[s.platform] || "ti-link"}`} />
                  </a>
                ))}
              </div>
            )}

            {member.skills.length > 0 && (
              <div className="team-skills">
                {member.skills.map((skill) => (
                  <div className="skill-row" key={skill.title}>
                    <div className="skill-label">
                      <span>{skill.title}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${skill.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="team-detail-main">
            {bioParagraphs.length > 0 ? (
              <div className="team-detail-bio">
                {bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              <p className="team-detail-bio-empty">
                A full bio for {member.name} is coming soon.
              </p>
            )}

            <Link className="listing-back" href="/team">
              <i className="ti ti-arrow-left" /> Back to all team members
            </Link>

            <TeamContactForm postId={member.id} name={member.name} />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
