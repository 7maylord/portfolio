import type { Metadata } from "next";
import { GitFork, Link2, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alfred Olumide Adenigba for full-stack, backend, Rust, AI, fintech, and blockchain engineering opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Contact · Survey Stations</div>
        <h1>Let’s talk about the system you’re building.</h1>
        <p className="muted">
          I’m open to full-stack, backend, Rust, AI, fintech, and blockchain
          engineering opportunities. Pick a station and reach out.
        </p>
      </div>

      <div className="station-grid">
        <a
          className="station"
          href={`mailto:${profile.email}`}
          aria-label={`Email ${profile.name}`}
        >
          <Mail size={20} className="ico" />
          <h2>Email · Station 01</h2>
          <p>{profile.email}</p>
        </a>
        <a
          className="station"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${profile.name}'s LinkedIn profile`}
        >
          <Link2 size={20} className="ico" />
          <h2>LinkedIn · Station 02</h2>
          <p>Connect professionally.</p>
        </a>
        <a
          className="station"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${profile.name}'s GitHub profile`}
        >
          <GitFork size={20} className="ico" />
          <h2>GitHub · Station 03</h2>
          <p>Review public code and experiments.</p>
        </a>
      </div>
    </section>
  );
}
