import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, GitFork } from "lucide-react";
import { coreSample, getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Alfred Olumide Adenigba`,
      description: project.summary,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  if (!project) {
    notFound();
  }

  const s = coreSample(project, index);

  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">
          Sample Report · {s.sample} · {s.depth} · {s.label}
        </div>
        <h1>{project.name}</h1>
        <p className="muted">{project.tagline}</p>
        <div className="actions">
          {project.links.github ? (
            <a
              className="button"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <GitFork size={16} /> GitHub
            </a>
          ) : null}
          {project.links.live ? (
            <a
              className="button primary"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the live ${project.name} project`}
            >
              Live project <ExternalLink size={16} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="case-layout">
        <div className="case-main">
          <h2>Overview</h2>
          <p>{project.summary}</p>
          <h2>Problem</h2>
          <p>{project.problem}</p>
          <h2>Solution</h2>
          <p>{project.solution}</p>
          <h2>Engineering log</h2>
          <ol className="list">
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ol>
        </div>

        <aside className="case-aside">
          <h2>Sample data</h2>
          <div className="row">
            <span className="k">Role</span>
            <span className="v">{project.role}</span>
          </div>
          <div className="row">
            <span className="k">Status</span>
            <span className="v">{project.status}</span>
          </div>
          <div className="row">
            <span className="k">Depth · Stratum</span>
            <span className="v">
              {s.depth} · {s.label}
            </span>
          </div>
          <div className="row">
            <span className="k">Categories</span>
            <span className="v">{project.categories.join(", ")}</span>
          </div>
          <h3>Stack</h3>
          <div className="tags">
            {project.technologies.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
