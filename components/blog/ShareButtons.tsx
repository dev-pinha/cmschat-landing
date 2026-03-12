"use client";

import { useState } from "react";
import { Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const buttons = [
    {
      label: "Share on Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share on LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-zinc-500 mr-1">Share:</span>
      {buttons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={btn.label}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <btn.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <LinkIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
