import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Menu } from "lucide-react";
import "./globals.css";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  url: "https://olumideadenigba.vercel.app",
  sameAs: [profile.github, profile.linkedin, profile.x, profile.medium],
  knowsAbout: [
    "Full-stack engineering",
    "Backend systems",
    "Rust",
    "AI agents",
    "Blockchain",
    "Payment infrastructure",
  ],
};

const themeScript = `
try {
  var theme = localStorage.getItem("theme");
  if (theme === "light") document.documentElement.dataset.theme = "light";
} catch {}
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://olumideadenigba.vercel.app"),
  title: {
    default:
      "Alfred Olumide Adenigba — Full Stack, Rust, AI & Blockchain Engineer",
    template: "%s — Alfred Olumide Adenigba",
  },
  description:
    "Portfolio of Alfred Olumide Adenigba, a software engineer building backend systems, web applications, AI agents, payment infrastructure, and blockchain products.",
  openGraph: {
    title: "Alfred Olumide Adenigba — Software Engineer",
    description:
      "Full Stack, Rust, AI and Blockchain Software Engineer based in Lagos.",
    url: "/",
    siteName: "Alfred Olumide Adenigba",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="header">
          <nav className="container nav" aria-label="Primary navigation">
            <Link className="brand" href="/">
              Alfred Adenigba
            </Link>
            <div className="nav-links">
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <a href={profile.medium} target="_blank" rel="noreferrer">
                Blog
              </a>
              <Link href="/contact">Contact</Link>
              <ThemeToggle />
            </div>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu">
                <Menu size={18} />
                Menu
              </summary>
              <div className="mobile-menu-links">
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                <Link href="/resume">Resume</Link>
                <a href={profile.medium} target="_blank" rel="noreferrer">
                  Blog
                </a>
                <Link href="/contact">Contact</Link>
                <ThemeToggle />
              </div>
            </details>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">© 2026 Maylord.</div>
        </footer>
      </body>
    </html>
  );
}
