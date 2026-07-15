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
        <div className="eyebrow">Contact</div>
        <h1>Let’s talk about the product or system you’re building.</h1>
        <p className="muted">
          I’m open to full-stack, backend, Rust, AI, fintech, and blockchain
          engineering opportunities.
        </p>
      </div>
      <div className="grid section">
        <a className="card" href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
          <Mail size={22} />
          <h2>Email</h2>
          <p className="muted">{profile.email}</p>
        </a>
        <a
          className="card"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${profile.name}'s LinkedIn profile`}
        >
          <Link2 size={22} />
          <h2>LinkedIn</h2>
          <p className="muted">Connect professionally.</p>
        </a>
        <a
          className="card"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${profile.name}'s GitHub profile`}
        >
          <GitFork size={22} />
          <h2>GitHub</h2>
          <p className="muted">Review public code and experiments.</p>
        </a>
      </div>
    </section>
  );
}
