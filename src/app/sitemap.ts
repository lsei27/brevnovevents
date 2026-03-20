import type { MetadataRoute } from "next";

const BASE = "https://brevnovevents.cz";

const routes = [
  { cs: "/", en: "/en", priority: 1.0, changeFrequency: "monthly" as const },
  { cs: "/firemni-eventy", en: "/en/corporate-events", priority: 0.9, changeFrequency: "monthly" as const },
  { cs: "/svatba-v-klastere", en: "/en/wedding-venue", priority: 0.8, changeFrequency: "monthly" as const },
  { cs: "/gdpr", en: "/en/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => [
    {
      url: `${BASE}${route.cs}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          cs: `${BASE}${route.cs}`,
          en: `${BASE}${route.en}`,
          "x-default": `${BASE}${route.en}`,
        },
      },
    },
    {
      url: `${BASE}${route.en}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          cs: `${BASE}${route.cs}`,
          en: `${BASE}${route.en}`,
          "x-default": `${BASE}${route.en}`,
        },
      },
    },
  ]);
}
