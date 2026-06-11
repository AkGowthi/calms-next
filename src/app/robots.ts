import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"], // Prevent indexing of post-conversion pages
    },
    sitemap: "https://calmsinternational.com/sitemap.xml",
  };
}
