export const profile = {
  name: "Alfred Olumide Adenigba",
  title: "Full Stack, Rust, AI and Blockchain Software Engineer",
  location: "Lagos, Nigeria",
  email: "olumideadenigba@gmail.com",
  github: "https://github.com/7maylord",
  linkedin: "https://www.linkedin.com/in/alfred-olumide-adenigba/",
  x: "https://x.com/0xMaylord",
  medium: "https://maylord.medium.com/",

  resumes: [
    {
      label: "Master résumé",
      note: "Full engineering history across backend, Rust, AI, and blockchain.",
      file: "/Alfred_Olumide_Adenigba_Resume.pdf",
    },
    {
      label: "Full-Stack résumé",
      note: "Focused for full-stack and web application roles.",
      file: "/Alfred_Olumide_Adenigba_Full_Stack_Resume.pdf",
    },
  ],
};

export const stackGroups = [
  ["Core", ["TypeScript", "Rust", "JavaScript", "Solidity", "Cairo"]],
  ["Backend", ["NestJS", "Node.js", "Express", "Axum", "REST APIs", "JWT"]],
  ["Frontend", ["Next.js", "React", "Tailwind CSS", "Responsive UI"]],
  [
    "Data & Infra",
    ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel"],
  ],
  [
    "Blockchain",
    ["Foundry", "Hardhat", "Clarity", "Soroban", "Stylus", "ink!"],
  ],
] as const;
