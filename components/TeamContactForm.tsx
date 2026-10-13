"use client";

import { useState } from "react";

// Posts straight to the current (production) WordPress site's
// "Marshill Team REST Exposure" plugin — see wordpress-plugins/marshill-team-rest
// in this repo for the PHP side. The recipient address is looked up there
// from the member's own post ID, never sent from here, so no one's email
// address ever appears in this page's source or JS bundle.
const TEAM_CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_TEAM_CONTACT_URL ||
  "https://www.marshillpropertymanagement.com/wp-json/marshill/v1/team-contact";

type Status = "idle" | "sending" | "sent" | "error";

export default function TeamContactForm({
  postId,
  name,
}: {
  postId: number;
  name: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — left blank by real visitors, the plugin silently drops
    // anything where this is filled in.
    const website = String(data.get("website") || "");

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(TEAM_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post_id: postId,
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Message could not be sent, please try again later.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="team-contact-card">
        <p className="team-contact-success">
          Your message to {name} has been sent. Thanks for reaching out!
        </p>
      </div>
    );
  }

  return (
    <div className="team-contact-card">
      <div className="section-label" style={{ textAlign: "left" }}>
        Get in touch
      </div>
      <h2 style={{ textAlign: "left" }}>Send a message to {name}</h2>
      <form onSubmit={handleSubmit}>
        {/* Honeypot field — hidden from real visitors via CSS, not `type="hidden"`,
            since most bots skip truly hidden inputs but still fill this in. */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label>
            Leave this field empty
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Message" required />

        {status === "error" && <p className="team-contact-error">{error}</p>}

        <div className="send-row">
          <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
