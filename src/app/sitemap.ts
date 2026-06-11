import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calmsinternational.com";

  // List of static routes
  const routes = [
    "",
    "/about",
    "/solutions",
    "/solutions/vims",
    "/solutions/tams",
    "/solutions/ims",
    "/solutions/gts",
    "/new-pricing",
    "/pricing",
    "/contact",
    "/book-free-demo",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
