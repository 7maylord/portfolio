import type { Metadata } from "next";
import { Download } from "lucide-react";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Alfred Olumide Adenigba's software engineering resume.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Resume</div>
        <h1>Download the current engineering résumé.</h1>
        <p className="muted">
          A focused résumé for full-stack, backend, AI, fintech, and blockchain
          engineering roles.
        </p>
      </div>
      <div className="card contact-panel section">
        <div>
          <h2>Alfred Olumide Adenigba</h2>
          <p className="muted">Full Stack, Rust, AI and Blockchain Software Engineer</p>
        </div>
        <a className="button primary" href={profile.resume}>
          <Download size={16} /> Download PDF
        </a>
      </div>
    </section>
  );
}
