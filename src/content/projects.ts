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
  preview?: string;
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
  {
    slug: "twinos",
    name: "TwinOS",
    tagline: "Business digital twin platform for SMB decision simulation.",
    summary:
      "A multi-tenant SaaS product that helps small businesses model operations, run what-if scenarios, and explore counterfactual plans before acting.",
    status: "Hackathon",
    categories: ["Full Stack", "AI", "Data"],
    role: "Full-stack engineer",
    technologies: ["Next.js", "TypeScript", "AWS Aurora", "DynamoDB", "Vercel"],
    problem:
      "SMB owners often make pricing, hiring, inventory, and marketing decisions with limited forecasting tools.",
    solution:
      "Built a digital-twin workflow around baseline business metrics, deterministic simulations, forecast caching, and optimization runs.",
    decisions: [
      "Used Aurora as the relational source of truth for tenant and business data.",
      "Used DynamoDB for high-volume forecast caches and optimization telemetry.",
      "Kept simulations deterministic so recommendations are explainable and testable.",
    ],
    links: {
      github: "https://github.com/7maylord/twinos",
      live: "https://twinos-tx.vercel.app/",
    },
  },
  {
    slug: "maya",
    name: "Maya",
    tagline: "Pre-sign crypto risk analysis agent for safer transactions.",
    summary:
      "An OKX.AI agent service provider that analyzes wallets, tokens, transactions, approvals, and contracts before users sign.",
    status: "Prototype",
    categories: ["AI", "Backend", "Blockchain", "Security"],
    role: "Backend and AI engineer",
    technologies: ["NestJS", "Python", "FastAPI", "Slither", "x402"],
    problem:
      "Wallet users often sign approvals, swaps, and contract interactions without understanding honeypot, rug-pull, or malicious calldata risk.",
    solution:
      "Built paid agent tools that combine on-chain risk checks, static analysis, and LLM reasoning into plain-English risk reports.",
    decisions: [
      "Split the public API from the internal Python analyzer service.",
      "Used fail-safe risk handling so failed scans are never treated as safe.",
      "Gated tools with x402 pay-per-call settlement on X Layer.",
    ],
    links: {
      github: "https://github.com/7maylord/maya",
      live: "https://okx.ai/agents/5521",
    },
  },
  {
    slug: "meridian",
    name: "Meridian",
    tagline: "Autonomous prediction markets for non-English financial news.",
    summary:
      "A prediction-market product focused on turning multilingual financial news into market intelligence and autonomous market creation.",
    status: "Prototype",
    categories: ["AI", "Blockchain", "Fintech"],
    role: "Full-stack and smart-contract engineer",
    technologies: [
      "Solidity",
      "TypeScript",
      "Next.js",
      "AI",
      "Prediction Markets",
    ],
    problem:
      "Important financial signals often appear first in local-language sources that global markets do not price quickly.",
    solution:
      "Built an autonomous workflow for monitoring non-English news, surfacing market signals, and supporting prediction-market flows.",
    decisions: [
      "Focused the product around language coverage as the market edge.",
      "Used blockchain rails for transparent market settlement.",
      "Kept AI output tied to source-driven financial events.",
    ],
    links: {
      github: "https://github.com/7maylord/meridian",
      live: "https://meridian-x.vercel.app",
    },
  },
  {
    slug: "payfurt",
    name: "Payfurt",
    tagline: "Confidential payroll protocol built on Stellar Soroban.",
    summary:
      "A payroll protocol exploring confidential compensation workflows and team payment operations on Stellar Soroban.",
    status: "Prototype",
    categories: ["Blockchain", "Fintech", "Backend"],
    role: "Full-stack and smart-contract engineer",
    technologies: ["TypeScript", "Soroban", "Stellar", "Next.js", "Payroll"],
    problem:
      "On-chain payroll needs transparency for settlement without exposing sensitive compensation details.",
    solution:
      "Built a Soroban-based payroll flow that frames confidential payroll operations through a familiar web dashboard.",
    decisions: [
      "Kept payroll actions understandable for operators rather than protocol specialists.",
      "Used Stellar Soroban for programmable payment workflows.",
      "Separated payroll product UX from underlying chain mechanics.",
    ],
    links: {
      github: "https://github.com/7maylord/payfurt",
      live: "https://payfurt.vercel.app",
    },
  },
  {
    slug: "erebus",
    name: "Erebus",
    tagline: "Privacy-preserving payment pool for AI agents.",
    summary:
      "A Stellar and x402 payment pool that lets AI agents fund a shared pool, pay for API access, and queue private payouts without linking payer and payee on-chain.",
    status: "Prototype",
    categories: ["AI", "Blockchain", "Fintech", "Privacy"],
    role: "Full-stack and payments engineer",
    technologies: ["TypeScript", "Stellar", "Soroban", "x402", "USDC"],
    problem:
      "Standard x402 payments can expose direct on-chain links between agent payers and payees.",
    solution:
      "Built a shared Stellar payment pool where agents deposit USDC, queue signed payout intents, and the pool batches outgoing transfers from a common address.",
    decisions: [
      "Used pool-funded balances to avoid direct Agent-to-Payee payment trails.",
      "Credited deposits automatically while retaining a small pool fee.",
      "Queued private payout intents and batched transfers on a fixed interval.",
    ],
    links: {
      github: "https://github.com/7maylord/erebus",
      live: "https://erebus-x.vercel.app",
    },
  },
  {
    slug: "bitraise",
    name: "BitRaise",
    tagline: "Web3 fundraising experience for campaign-backed donations.",
    summary:
      "A fundraising product for creating donation campaigns, collecting contributions, and presenting transparent campaign progress.",
    status: "Prototype",
    categories: ["Full Stack", "Blockchain", "Fintech"],
    role: "Full-stack engineer",
    technologies: ["TypeScript", "Next.js", "Web3", "Campaigns", "Vercel"],
    problem:
      "Fundraising campaigns need lightweight creation flows and clear contribution visibility.",
    solution:
      "Built a campaign-oriented web app for creating, presenting, and funding donation initiatives.",
    decisions: [
      "Prioritized a simple campaign creation and discovery flow.",
      "Made campaign progress visible at a glance.",
      "Kept the interface familiar for non-crypto donors.",
    ],
    links: {
      github: "https://github.com/7maylord/bit-raise",
      live: "https://bit-raise.vercel.app",
    },
  },
  {
    slug: "colorsnap",
    name: "ColorSnap",
    tagline: "On-chain color-matching game built around quick rounds.",
    summary:
      "A decentralized game where players match colored bottles to a target configuration and earn points.",
    status: "Hackathon",
    categories: ["Blockchain", "Game", "Smart Contracts"],
    role: "Smart-contract and frontend engineer",
    technologies: ["Solidity", "TypeScript", "Next.js", "Game UI", "Web3"],
    problem:
      "On-chain games often feel slow or overly technical for casual players.",
    solution:
      "Built a simple visual matching loop that keeps the gameplay understandable while using on-chain scoring primitives.",
    decisions: [
      "Centered the game around a quick color-recognition mechanic.",
      "Kept the UI visual-first so users understand the target state quickly.",
      "Used smart contracts for score and game-state integrity.",
    ],
    links: {
      github: "https://github.com/7maylord/colorsnap",
      live: "https://colorsnaps.vercel.app",
    },
  },
  {
    slug: "colorstark",
    name: "ColorStark",
    tagline: "StarkNet color-matching game for the Cairo bootcamp.",
    summary:
      "A StarkNet game where players match colored bottles to a target configuration, built for Starknet Africa Cairo Bootcamp IV.",
    status: "Hackathon",
    categories: ["Blockchain", "Game", "Starknet"],
    role: "Frontend and Cairo engineer",
    technologies: ["TypeScript", "Cairo", "Starknet", "Next.js", "Gaming"],
    problem:
      "Cairo learning projects need approachable gameplay loops that still exercise real on-chain interactions.",
    solution:
      "Built a StarkNet game around color matching, scoring, and a friendly web interface for bootcamp users.",
    decisions: [
      "Used a simple puzzle mechanic to keep the chain interaction approachable.",
      "Focused on StarkNet/Cairo primitives without overcomplicating the UI.",
      "Kept the game loop short enough for repeated play.",
    ],
    links: {
      github: "https://github.com/7maylord/colorstark",
      live: "https://colorstark.vercel.app",
    },
  },
];

const previewSlugs = new Set([
  "urlchop",
  "afromeet",
  "ares",
  "paytroix",
  "twinos",
  "maya",
  "meridian",
  "payfurt",
  "erebus",
  "bitraise",
  "colorsnap",
  "colorstark",
]);

projects.forEach((project) => {
  if (previewSlugs.has(project.slug)) {
    project.preview = `/project-previews/${project.slug}.png`;
  }
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Maps a project onto the geotechnical drawing metaphor: a logged depth plus a
// soil stratum + hatch pattern derived from its primary category. Purely
// presentational — the underlying project data is untouched.
type Stratum = { label: string; hatch: string };

const strataByCategory: Record<string, Stratum> = {
  "Full Stack": { label: "Fill", hatch: "h-fill" },
  Backend: { label: "Rock", hatch: "h-rock" },
  API: { label: "Rock", hatch: "h-rock" },
  AI: { label: "Sand", hatch: "h-sand" },
  Blockchain: { label: "Bedrock", hatch: "h-rock" },
  "Smart Contracts": { label: "Bedrock", hatch: "h-rock" },
  Starknet: { label: "Bedrock", hatch: "h-rock" },
  Fintech: { label: "Clay", hatch: "h-clay" },
  Data: { label: "Clay", hatch: "h-clay" },
  Security: { label: "Sand", hatch: "h-sand" },
  Privacy: { label: "Clay", hatch: "h-clay" },
  Game: { label: "Fill", hatch: "h-fill" },
};

const defaultStratum: Stratum = { label: "Fill", hatch: "h-fill" };

export function coreSample(project: Project, index: number) {
  const stratum = strataByCategory[project.categories[0]] ?? defaultStratum;
  return {
    depth: `-${(1.5 * (index + 1)).toFixed(1)}m`,
    sample: `S-${String(index + 1).padStart(2, "0")}`,
    ...stratum,
  };
}
