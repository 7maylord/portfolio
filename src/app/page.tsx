import Link from "next/link";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { profile, stackGroups } from "@/content/profile";
import { projects } from "@/content/projects";

const capabilities = [
  [
    "Backend & Platform Systems",
    "Modular APIs, authentication, databases, async workflows, observability, and deployment using TypeScript and Rust.",
  ],
  [
    "Full-Stack Products",
    "Responsive web applications that connect thoughtful interfaces to secure backend systems and integrations.",
  ],
  [
    "AI Agents & Automation",
    "Agentic systems that retrieve context, reason over data, coordinate tools, and automate technical workflows.",
  ],
  [
    "Blockchain & Payments",
    "Smart contracts, payment infrastructure, wallets, indexing, and multi-chain product experiences.",
  ],
];

const featuredProjects = [...projects]
  .sort((a, b) => Number(Boolean(b.links.live)) - Number(Boolean(a.links.live)))
  .slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Full Stack · Rust · AI · Blockchain</div>
          <h1>I build reliable software for ambitious products.</h1>
          <p className="muted">
            I’m {profile.name}, a software engineer working across TypeScript,
            Rust, Next.js, NestJS, AI agents, payment systems, and multi-chain
            infrastructure.
          </p>
          <div className="actions">
            <Link className="button primary" href="/work">
              View my work <ArrowRight size={16} />
            </Link>
            <a className="button" href={profile.resume}>
              <Download size={16} /> Download résumé
            </a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ExternalLink size={16} />
            </a>
          </div>
          <div className="stats">
            {["Lagos · Remote-ready", "TypeScript + Rust", "Web, AI & multi-chain", "AltSchool Africa alumnus"].map((item) => (
              <div className="card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Featured Work</div>
          <h2>Proof over promises.</h2>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="card project-card" key={project.slug}>
                <div className="project-meta">
                  <span>P/{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.categories[0]}</span>
                </div>
                <div className="project-visual">
                  {project.links.live ? (
                    <iframe
                      src={project.links.live}
                      title={`${project.name} homepage preview`}
                      loading="lazy"
                      tabIndex={-1}
                    />
                  ) : (
                    project.name
                  )}
                </div>
                <h3>{project.name}</h3>
                <p className="muted">{project.summary}</p>
                <div className="tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="link-row">
                  <a className="button" href={`/work/${project.slug}`}>View case study</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">What I Build</div>
          <h2>Useful systems, not just technology demos.</h2>
          <div className="grid">
            {capabilities.map(([title, copy]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p className="muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Engineering Stack</div>
          <h2>The tools I reach for most.</h2>
          <div className="stack-grid">
            {stackGroups.map(([group, items]) => (
              <div className="card" key={group}>
                <h3>{group}</h3>
                <div className="tags">
                  {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-panel card">
          <div>
            <div className="eyebrow">Available</div>
            <h2>Have an ambitious product or engineering problem?</h2>
            <p className="muted">
              I’m open to full-stack, backend, Rust, AI, fintech, and blockchain
              engineering opportunities.
            </p>
          </div>
          <a className="button primary" href={`mailto:${profile.email}`}>
            Send an email
          </a>
        </div>
      </section>
    </>
  );
}
