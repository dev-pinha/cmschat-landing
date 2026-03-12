"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostContent } from "@/data/posts";

export default function PostCard({ post, index = 0 }: { post: PostContent; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-lg hover:shadow-emerald-500/5"
      >
        {/* Hero Image Area */}
        <div className="relative h-48 bg-gradient-to-br from-emerald-900/30 via-emerald-800/10 to-transparent flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
          <span className="relative text-emerald-400/60 text-sm font-medium tracking-wider uppercase">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-emerald-400 transition-colors duration-200">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read more */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 group-hover:gap-2.5 transition-all duration-200">
            Read article
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
