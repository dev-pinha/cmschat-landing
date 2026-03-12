"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import type { PostContent } from "@/data/posts";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import ShareButtons from "@/components/blog/ShareButtons";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface ArticleContentProps {
  post: PostContent;
  relatedPosts: PostContent[];
}

export default function ArticleContent({ post, relatedPosts }: ArticleContentProps) {
  const headings = useMemo(
    () =>
      post.sections.map((s) => ({
        id: slugify(s.heading),
        text: s.heading,
      })),
    [post.sections]
  );

  const url = `https://cmschat.ai/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-[#07130F] text-white antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#07130F]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            cmschat<span className="text-emerald-400">.ai</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Blog
            </Link>
            <a
              href="/#waitlist"
              className="rounded-lg bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              Request Access
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-zinc-300 transition">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-zinc-400 truncate max-w-[200px]">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="relative overflow-hidden py-12 md:py-16 px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl"
        >
          <span className="inline-block text-xs font-medium text-emerald-400 uppercase tracking-wider mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <div className="ml-auto">
              <ShareButtons url={url} title={post.title} />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Article Body */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl flex gap-10">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-4xl"
          >
            {/* Sections */}
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2
                  id={slugify(section.heading)}
                  className="text-2xl md:text-3xl font-bold text-white mb-4 scroll-mt-24"
                >
                  {section.heading}
                </h2>
                <div className="prose-custom">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-zinc-300 leading-[1.8] mb-4 text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-12 mb-10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
                    >
                      <h3 className="text-base font-semibold text-white mb-2">
                        {item.question}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Divider */}
            <hr className="border-white/5 my-10" />

            {/* Author Bio */}
            <AuthorBio authorKey={post.author} />

            {/* Newsletter CTA */}
            <div className="mt-10">
              <NewsletterCTA />
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Back to Blog */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </motion.article>

          {/* Sidebar — TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold tracking-tight">
              cmschat<span className="text-emerald-400">.ai</span>
            </span>
            <Link href="/blog" className="text-xs text-zinc-500 hover:text-zinc-300 transition">
              Blog
            </Link>
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
