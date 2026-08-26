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
        <div className="eyebrow">Resume · Specification Sheet</div>
        <h1>Pick the résumé for the role.</h1>
        <p className="muted">
          Two builds of the same record — the full master, or a version focused
          for full-stack and web application roles.
        </p>
      </div>

      <div className="resume-list">
        {profile.resumes.map((resume) => (
          <div className="resume-panel" key={resume.file}>
            <div>
              <h2>{resume.label}</h2>
              <p>{resume.note}</p>
            </div>
            <a
              className="button primary"
              href={resume.file}
              aria-label={`Download the ${resume.label}`}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
