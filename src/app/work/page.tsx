import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software engineering case studies from Alfred Olumide Adenigba.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Selected Work</div>
        <h1>Case studies across web, backend, AI, and blockchain systems.</h1>
        <p className="muted">
          A focused set of projects chosen for engineering review.
        </p>
      </div>
      <div className="project-grid section">
        {projects.map((project, index) => (
          <article className="card project-card" key={project.slug}>
            <div className="project-visual">
              {project.preview ? (
                <Image
                  src={project.preview}
                  alt={`${project.name} homepage preview`}
                  width={1440}
                  height={900}
                  priority={index === 0}
                  loading={index === 0 ? undefined : "eager"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                project.name
              )}
            </div>
            <h2>{project.name}</h2>
            <p className="muted">{project.summary}</p>
            <div className="tags">
              <span className="tag">{project.status}</span>
              {project.categories.map((category) => (
                <span className="tag" key={category}>
                  {category}
                </span>
              ))}
            </div>
            <div className="link-row">
              <Link className="button primary" href={`/work/${project.slug}`}>
                View case study
              </Link>
              {project.links.live ? (
                <a
                  className="button"
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open the live ${project.name} project`}
                >
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
