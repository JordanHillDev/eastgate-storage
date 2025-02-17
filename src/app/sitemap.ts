import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.eastgatestoragesevierville.com/";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}
