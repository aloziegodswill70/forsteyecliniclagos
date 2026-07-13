import { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { blogs } from "@/data/blogs";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/conditions",
    "/branches",
    "/blog",
    "/book-eye-appointment",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const seoPages = [];

  for (const service of services) {
    for (const location of locations) {
      seoPages.push({
        url: `${baseUrl}/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  return [
    ...staticPages,
    ...blogPages,
    ...seoPages,
  ];
}