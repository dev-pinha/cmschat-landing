import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { PostContent } from "@/data/posts";

export default function RelatedPosts({ posts }: { posts: PostContent[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
          >
            <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
              {post.category}
            </span>
            <h4 className="text-sm font-semibold text-white mt-2 mb-2 leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                <Calendar className="h-3 w-3" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 group-hover:gap-2 transition-all duration-200">
                Read
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
