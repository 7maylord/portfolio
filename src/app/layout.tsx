import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Menu } from "lucide-react";
import "./globals.css";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";
import { SurveyToggle } from "./survey-toggle";
import { SurveyLayer } from "./survey-layer";

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
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeInit = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t;if(localStorage.getItem("survey")==="on")document.documentElement.dataset.survey="on";}catch(e){}`;

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <div className="sheet-bg" aria-hidden="true" />
        <span className="regmark tl" aria-hidden="true" />
        <span className="regmark tr" aria-hidden="true" />
        <span className="regmark bl" aria-hidden="true" />
        <span className="regmark br" aria-hidden="true" />
        <SurveyLayer />

        <header className="header">
          <nav className="container nav" aria-label="Primary navigation">
            <Link className="brand" href="/">
              A. Adenigba · BH-01
            </Link>
            <div className="nav-links">
              {navLinks.map((l) => (
                <Link href={l.href} key={l.href}>
                  {l.label}
                </Link>
              ))}
              <a
                href={profile.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Read Alfred Adenigba's blog on Medium"
              >
                Blog
              </a>
              <Link href="/contact">Contact</Link>
              <SurveyToggle />
              <ThemeToggle />
            </div>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu">
                <Menu size={16} />
                Menu
              </summary>
              <div className="mobile-menu-links">
                {navLinks.map((l) => (
                  <Link href={l.href} key={l.href}>
                    {l.label}
                  </Link>
                ))}
                <a
                  href={profile.medium}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Read Alfred Adenigba's blog on Medium"
                >
                  Blog
                </a>
                <Link href="/contact">Contact</Link>
                <SurveyToggle />
                <ThemeToggle />
              </div>
            </details>
          </nav>
        </header>

        <main id="main-content">{children}</main>

        <footer className="footer">
          <div className="container">
            <span>© 2026 Alfred Adenigba · @maylord</span>
            <span>Site Investigation · Rev 2026.07</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
