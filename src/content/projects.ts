export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: "Live" | "Prototype" | "Hackathon" | "In development";
  categories: string[];
  role: string;
  technologies: string[];
  problem: string;
  solution: string;
  decisions: string[];
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "urlchop",
    name: "UrlChop",
    tagline: "URL shortener with analytics and QR workflows.",
    summary:
      "A full-stack URL shortening product with tracked links, QR generation, and a clean dashboard experience.",
    status: "Live",
    categories: ["Full Stack", "Backend"],
    role: "Full-stack engineer",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redis"],
    problem:
      "Short links are simple on the surface, but useful teams need reliability, visibility, and fast redirects.",
    solution:
      "Built a practical link-management flow around short-code generation, redirect handling, analytics, and QR support.",
    decisions: [
      "Kept the redirect path small so links resolve quickly.",
      "Separated link metadata from analytics concerns.",
      "Used cache-friendly infrastructure for repeat lookups.",
    ],
    links: {
      github: "https://github.com/7maylord/urlchop",
      live: "https://urlchop.vercel.app",
    },
  },
  {
    slug: "evently",
    name: "Evently",
    tagline: "Event discovery and management experience.",
    summary:
      "A product-style event platform focused on publishing, discovering, and managing events through a polished web interface.",
    status: "Prototype",
    categories: ["API"],
    role: "Full-stack engineer",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    problem:
      "Event products need a fast path from discovery to action without burying users in operational detail.",
    solution:
      "Designed a clean event browsing and management experience with reusable product screens and responsive layouts.",
    decisions: [
      "Prioritized the core event journey before secondary admin features.",
      "Used clear content hierarchy so event details stay scannable.",
      "Kept the interface responsive and lightweight.",
    ],
    links: {
      github: "https://github.com/7maylord/evently",
      live: "",
    },
  },
  {
    slug: "afromeet",
    name: "AfroMeet",
    tagline: "Creator economy platform for African creatives.",
    summary:
      "A creator platform combining community, payments, ownership primitives, and AI-assisted patron workflows.",
    status: "Prototype",
    categories: ["Full Stack", "AI", "Blockchain", "Fintech"],
    role: "Full-stack and blockchain engineer",
    technologies: ["Next.js", "NestJS", "Solidity", "AI Agents", "Circle"],
    problem:
      "African creators need better ways to connect with supporters, monetize work, and build durable communities.",
    solution:
      "Built a multi-layer product concept around creator profiles, USDC-style payments, tokenized ownership, and autonomous patron support.",
    decisions: [
      "Used familiar web flows around newer payment and ownership rails.",
      "Kept the AI layer tied to concrete patron actions.",
      "Separated product storytelling from protocol mechanics.",
    ],
    links: {
      github: "https://github.com/7maylord/afroMeet",
      live: "https://afromeet.vercel.app/",
    },
  },
  {
    slug: "ares",
    name: "Ares",
    tagline: "Autonomous smart-contract security system.",
    summary:
      "A security-focused AI system for analyzing smart contracts, reasoning over vulnerabilities, and supporting bug-bounty workflows.",
    status: "Prototype",
    categories: ["AI", "Blockchain", "Backend"],
    role: "Backend and AI engineer",
    technologies: ["NestJS", "Python", "RAG", "Solidity", "Security"],
    problem:
      "Smart-contract review is slow, specialized, and difficult to scale across fast-moving teams.",
    solution:
      "Designed an AI-assisted workflow that ingests contract context, highlights likely risk areas, and supports security triage.",
    decisions: [
      "Treated AI output as review support, not final authority.",
      "Kept vulnerability reasoning attached to source context.",
      "Focused the product around triage and bounty workflows.",
    ],
    links: {
      github: "https://github.com/7maylord/ares",
      live: "https://ares-x.vercel.app/",
    },
  },
  {
    slug: "paytroix",
    name: "PayTroix",
    tagline: "Web3 payroll and benefits infrastructure.",
    summary:
      "A payroll product for teams, startups, and DAOs that combines employee payments, benefits, and financial workflows.",
    status: "Live",
    categories: ["Full Stack", "Blockchain", "Fintech"],
    role: "Full-stack and smart-contract engineer",
    technologies: ["Next.js", "FastAPI", "Supabase", "Solidity", "TypeScript"],
    problem:
      "Crypto-native teams need payroll tools that feel operationally serious instead of stitched together from wallets and spreadsheets.",
    solution:
      "Built a payroll workflow around team management, payment operations, and smart-contract-backed finance features.",
    decisions: [
      "Kept team and payroll workflows visible to non-protocol users.",
      "Used a web dashboard as the control plane for blockchain operations.",
      "Balanced transparent payment rails with familiar HR-style workflows.",
    ],
    links: {
      github: "https://github.com/7maylord/Paytroix",
      live: "https://paytroix.vercel.app/",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
