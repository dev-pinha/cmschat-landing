"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
}

export default function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      aria-label="Table of contents"
      className="sticky top-24"
    >
      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-300 mb-4">
          <List className="h-4 w-4 text-emerald-400" />
          On this page
        </h4>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block text-[13px] leading-relaxed py-1.5 px-3 rounded-md transition-all duration-200 ${
                  activeId === heading.id
                    ? "text-emerald-400 bg-emerald-500/10 font-medium"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
