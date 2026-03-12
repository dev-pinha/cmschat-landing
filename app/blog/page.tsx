import type { Metadata } from "next";
import { posts, getAllCategories } from "@/data/posts";
import BlogIndex from "./BlogIndex";

export const metadata: Metadata = {
  title: "Blog | cmschat.ai — AI-Powered CMS Insights for Web Agencies",
  description:
    "Actionable insights on AI automation, client management, and scaling web agency operations. Learn how to reduce revision cycles, automate change requests, and grow your agency.",
  openGraph: {
    title: "Blog | cmschat.ai",
    description:
      "Actionable insights on AI automation, client management, and scaling web agency operations.",
    url: "https://cmschat.ai/blog",
    siteName: "cmschat.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | cmschat.ai",
    description:
      "Actionable insights on AI automation, client management, and scaling web agency operations.",
  },
  alternates: {
    canonical: "https://cmschat.ai/blog",
  },
};

export default function BlogPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-[#07130F] text-white antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#07130F]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight">
            cmschat<span className="text-emerald-400">.ai</span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/blog"
              className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              Blog
            </a>
            <a
              href="/#waitlist"
              className="rounded-lg bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              Request Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            The cmschat<span className="text-emerald-400">.ai</span> Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Insights on AI automation, client management, and scaling web agency operations.
          </p>
        </div>
      </section>

      {/* Blog Index (Client Component for search/filter) */}
      <BlogIndex posts={posts} categories={categories} />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold tracking-tight">
              cmschat<span className="text-emerald-400">.ai</span>
            </span>
            <a href="/blog" className="text-xs text-zinc-500 hover:text-zinc-300 transition">
              Blog
            </a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-6xl text-center md:text-left">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} cmschat.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
