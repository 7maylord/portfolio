import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const timeline = [
    {
      period: "Now",
      title: "Software engineering across product and infrastructure",
      body: "Building full-stack products, backend systems, AI agent workflows, payment rails, and blockchain applications with TypeScript, Rust, and modern deployment tooling.",
    },
    {
      period: "2023",
      title: "Backend engineering training and software transition",
      body: "Deepened backend fundamentals through AltSchool Africa while turning civil-engineering problem solving into production software practice.",
    },
    {
      period: "2019-2023",
      title: "Civil and geotechnical engineering",
      body: "Worked on foundation and infrastructure delivery, technical documentation, engineering analysis, and multidisciplinary coordination.",
    },
  ];

  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">About</div>
        <h1>I turn difficult problems into systems people can actually use.</h1>
        <p className="muted">
          I’m Alfred Olumide Adenigba, a Full Stack Software Engineer working
          with TypeScript and Rust across backend systems, web applications, AI
          agents, payment infrastructure, and blockchain platforms.
        </p>
      </div>

      <div className="about-story section">
        <div className="about-copy">
          <div className="eyebrow">How I Work</div>
          <h2>Product-minded engineering with systems discipline.</h2>
          <p className="muted">
            I like owning the full path from architecture to deployment:
            modelling the problem, choosing practical boundaries, implementing
            the system, testing failure paths, and refining the experience until
            it is useful.
          </p>
          <p className="muted">
            The civil-engineering background still shows up in the way I work:
            document clearly, coordinate with other disciplines, respect
            constraints, and design for what happens outside the happy path.
          </p>
        </div>

        <ol className="timeline" aria-label="Experience timeline">
          {timeline.map((item) => (
            <li className="timeline-item" key={item.title}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
