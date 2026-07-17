import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { coreSample, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software engineering case studies from Alfred Olumide Adenigba.",
  alternates: {
    canonical: "/work",
  },
};

const statusClass: Record<string, string> = {
  Live: "st-live",
  Prototype: "st-proto",
  Hackathon: "st-hack",
  "In development": "st-dev",
};

export default function WorkPage() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Borehole Log · BH-01 · {projects.length} samples</div>
        <h1>The full log, sample by sample.</h1>
        <p className="muted">
          Every project recovered from the borehole — web, backend, AI, and
          blockchain systems, each logged at depth with its material and status.
        </p>
      </div>

      <div className="sample-grid">
        {projects.map((project, index) => {
          const s = coreSample(project, index);
          return (
            <article
              className="sample-card"
              key={project.slug}
              data-sample={s.sample}
            >
              <div className="sample-head">
                <span>
                  {s.sample} · <span className="d">{s.depth}</span> · {s.label}
                </span>
                <span className={statusClass[project.status]}>
                  {project.status}
                </span>
              </div>

              {project.preview ? (
                <div className="sample-visual">
                  <Image
                    src={project.preview}
                    alt={`${project.name} homepage preview`}
                    width={1440}
                    height={900}
                    priority={index === 0}
                  />
                </div>
              ) : (
                <div className="sample-empty">No core recovered</div>
              )}

              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <div className="tags">
                {project.categories.map((category) => (
                  <span className="tag" key={category}>
                    {category}
                  </span>
                ))}
              </div>

              <div className="link-row">
                <Link
                  className="button primary"
                  href={`/work/${project.slug}`}
                >
                  Sample report <ArrowRight size={16} />
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
          );
        })}
      </div>
    </section>
  );
}
