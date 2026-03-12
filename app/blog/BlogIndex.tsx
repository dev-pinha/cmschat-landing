"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import type { PostContent } from "@/data/posts";

interface BlogIndexProps {
  posts: PostContent[];
  categories: string[];
}

export default function BlogIndex({ posts, categories }: BlogIndexProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, activeCategory, searchQuery]);

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        {/* Search + Filter Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-9 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                activeCategory === null
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-zinc-500 text-lg">No articles found.</p>
              <p className="text-zinc-600 text-sm mt-2">Try a different search or category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
