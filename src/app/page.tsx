import Link from "next/link";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { profile, stackGroups } from "@/content/profile";
import { coreSample, projects } from "@/content/projects";

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

const statusClass: Record<string, string> = {
  Live: "st-live",
  Prototype: "st-proto",
  Hackathon: "st-hack",
  "In development": "st-dev",
};

const featuredProjects = [...projects]
  .sort((a, b) => Number(Boolean(b.links.live)) - Number(Boolean(a.links.live)))
  .slice(0, 6);

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
  return xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[(.*?)\\]\\]><\\/${tag}>`, "s"),
  )?.[1];
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
        link:
          readTag(item, "link")?.replace(/\?source=.*$/, "") ?? profile.medium,
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
      {/* HERO — drawing sheet header */}
      <section className="hero container">
        <div className="eyebrow">
          Site Investigation · Borehole BH-01 · Lagos NG
        </div>
        <h1>
          I build
          <br />
          foundations
          <br />
          <span className="lo">that hold.</span>
        </h1>
        <p className="lede">
          I’m {profile.name} — a <b>full-stack, Rust, AI &amp; blockchain</b>{" "}
          engineer, and a former geotechnical engineer. I log every layer,
          respect every constraint, and design for what happens below the happy
          path.
        </p>
        <div className="actions">
          <Link className="button primary" href="/work">
            Descend into the log <ArrowRight size={16} />
          </Link>
          <a className="button" href={profile.resume}>
            <Download size={16} /> Résumé
          </a>
          <a
            className="button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="titleblock">
          <div className="tb">
            <div className="k">Sheet</div>
            <div className="v">01 / 06</div>
          </div>
          <div className="tb">
            <div className="k">Discipline</div>
            <div className="v">Software · Systems</div>
          </div>
          <div className="tb">
            <div className="k">Datum</div>
            <div className="v">Surface 0.00</div>
          </div>
          <div className="tb">
            <div className="k">Drawn by</div>
            <div className="v">A. Adenigba</div>
          </div>
        </div>

        <div className="scrollcue">
          <span className="ln" /> Drill down through the log
        </div>
      </section>

      {/* CORE LOG — featured projects */}
      <section className="section container" id="featured-work">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Core Log</div>
            <h2>Selected samples</h2>
          </div>
          <Link className="button" href="/work">
            Full borehole log <ArrowRight size={16} />
          </Link>
        </div>
        <div className="buildlog-wrap">
          {featuredProjects.map((project, index) => {
            const s = coreSample(project, index);
            return (
              <Link
                className="core reveal"
                href={`/work/${project.slug}`}
                key={project.slug}
                data-sample={s.sample}
              >
                <div className="depth">
                  <b>{s.depth}</b>
                  <span>{s.label}</span>
                  <div className={`hatch ${s.hatch}`} />
                </div>
                <div className="body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="tags">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`status ${statusClass[project.status]}`}>
                  {project.status}
                </div>
                <div className="callout">{s.sample} · RECOVERED</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STRATA LEGEND — capabilities */}
      <section className="section container">
        <div className="eyebrow">Strata Legend</div>
        <h2>Useful systems, logged by discipline.</h2>
        <p className="lead">
          Four layers of engineering work — each one a material I build with,
          not a technology demo.
        </p>
        <div className="strata-legend">
          {capabilities.map(([title, copy], i) => (
            <div className="stratum" key={title}>
              <div className="key">
                <span
                  className={`hatch ${["h-fill", "h-rock", "h-sand", "h-clay"][i]}`}
                />
                Layer {String(i + 1).padStart(2, "0")}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILD LOG — blog / medium */}
      <section className="section container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Build Log</div>
            <h2>Field notes from the work.</h2>
          </div>
          <a
            className="button"
            href={profile.medium}
            target="_blank"
            rel="noreferrer"
          >
            Read the blog <ExternalLink size={16} />
          </a>
        </div>
        <div className="buildlog">
          {mediumPosts.map((post, index) => (
            <a
              className="logentry"
              href={post.link}
              target="_blank"
              rel="noreferrer"
              key={post.link}
            >
              <span className="idx">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{post.title}</strong>
              <small>
                {post.category} · {post.date}
              </small>
              <ExternalLink size={16} className="ext" />
            </a>
          ))}
        </div>
      </section>

      {/* MATERIAL SCHEDULE — stack */}
      <section className="section container">
        <div className="eyebrow">Material Schedule</div>
        <h2>The tools I reach for most.</h2>
        <div className="schedule">
          {stackGroups.map(([group, items]) => (
            <div className="col" key={group}>
              <h3>{group}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK ORDER — contact */}
      <section className="section container">
        <div className="workorder">
          <div>
            <div className="eyebrow">Open for work</div>
            <h2>Have a foundation to pour?</h2>
            <p>
              I’m open to full-stack, backend, Rust, AI, fintech, and blockchain
              engineering roles. Send the brief and I’ll log it.
            </p>
          </div>
          <a className="button primary" href={`mailto:${profile.email}`}>
            Open a work order <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
