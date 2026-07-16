import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { profile, stackGroups } from "@/content/profile";
import { projects } from "@/content/projects";

type MediumPost = {
  title: string;
  link: string;
  date: string;
  category: string;
};

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

const fallbackMediumPosts: MediumPost[] = [
  {
    title:
      "Engineering the Counterfactual Explorer: How TwinOS Searches for Better Business Decisions",
    link: "https://maylord.medium.com/engineering-the-counterfactual-explorer-how-twinos-searches-for-better-business-decisions-4766ae4ee076",
    date: "Jun 24, 2026",
    category: "AWS",
  },
  {
    title:
      "From Spreadsheet Guesswork to TwinOS: Building a Business Flight Simulator for SMBs",
    link: "https://maylord.medium.com/from-spreadsheet-guesswork-to-twinos-building-a-business-flight-simulator-for-smbs-6bfb52590104",
    date: "Jun 22, 2026",
    category: "Smart contracts",
  },
  {
    title: "Understanding React Hooks: A Guide for Newbies",
    link: "https://maylord.medium.com/understanding-react-hooks-a-guide-for-newbies-80fa9221a3ad",
    date: "Mar 7, 2025",
    category: "React",
  },
];

function readCdata(xml: string, tag: string) {
  return xml.match(new RegExp(`<${tag}><!\\[CDATA\\[(.*?)\\]\\]><\\/${tag}>`, "s"))?.[1];
}

function readTag(xml: string, tag: string) {
  return xml.match(new RegExp(`<${tag}>(.*?)<\\/${tag}>`, "s"))?.[1];
}

function formatPostDate(value?: string) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch("https://medium.com/feed/@maylord", {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      return fallbackMediumPosts;
    }

    const feed = await response.text();
    const posts = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, 3)
      .map(([, item]) => ({
        title: readCdata(item, "title") ?? "Untitled post",
        link: readTag(item, "link")?.replace(/\?source=.*$/, "") ?? profile.medium,
        date: formatPostDate(readTag(item, "pubDate")),
        category: readCdata(item, "category") ?? "Writing",
      }));

    return posts.length > 0 ? posts : fallbackMediumPosts;
  } catch {
    return fallbackMediumPosts;
  }
}

export default async function Home() {
  const mediumPosts = await getMediumPosts();

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

      <section className="section" id="featured-work">
        <div className="container">
          <div className="eyebrow">Featured Work</div>
          <h2>
            Featured <em>projects</em>.
          </h2>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="card project-card" key={project.slug}>
                <div className="project-meta">
                  <span>P/{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.categories[0]}</span>
                </div>
                <div className="project-visual">
                  {project.links.live ? (
                    <Image
                      src={`/project-previews/${project.slug}.png`}
                      alt={`${project.name} homepage preview`}
                      width={1440}
                      height={900}
                      priority={index === 0}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          <div className="section-header">
            <div>
              <div className="eyebrow">Recent Thoughts</div>
              <h2>
                Notes from the <em>build log</em>.
              </h2>
            </div>
            <a className="button" href={profile.medium} target="_blank" rel="noreferrer">
              View all <ExternalLink size={16} />
            </a>
          </div>
          <div className="journal-list">
            {mediumPosts.map((post, index) => (
              <a className="journal-item" href={post.link} target="_blank" rel="noreferrer" key={post.link}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{post.title}</strong>
                <small>{post.category} · {post.date}</small>
                <ExternalLink size={16} />
              </a>
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
        <div className="container contact-panel card contact-cta">
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
