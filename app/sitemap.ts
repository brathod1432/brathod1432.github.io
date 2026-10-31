import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/projects";
import { LAST_MODIFIED } from "@/data/build-meta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(LAST_MODIFIED),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
