import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/privacy-policy", priority: 0.5 },
  { path: "/terms", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date("2026-05-24"),
    changeFrequency: route.path === "" ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
