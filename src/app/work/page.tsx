import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software engineering case studies from Alfred Olumide Adenigba.",
};

export default function WorkPage() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Selected Work</div>
        <h1>Case studies across web, backend, AI, and blockchain systems.</h1>
        <p className="muted">
          A focused set of projects chosen for recruiter and engineering review.
        </p>
      </div>
      <div className="project-grid section">
        {projects.map((project) => (
          <article className="card project-card" key={project.slug}>
            <div className="project-visual">{project.name}</div>
            <h2>{project.name}</h2>
            <p className="muted">{project.summary}</p>
            <div className="tags">
              <span className="tag">{project.status}</span>
              {project.categories.map((category) => (
                <span className="tag" key={category}>{category}</span>
              ))}
            </div>
            <div className="link-row">
              <a className="button primary" href={`/work/${project.slug}`}>View case study</a>
              {project.links.live ? (
                <a className="button" href={project.links.live} target="_blank" rel="noreferrer">
                  Live <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
