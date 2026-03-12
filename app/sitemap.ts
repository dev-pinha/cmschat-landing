import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const BASE_URL = "https://cmschat.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
