import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const baseUrl = "https://olumideadenigba.vercel.app";
const lastModified = new Date("2026-07-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/about",
    "/resume",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
