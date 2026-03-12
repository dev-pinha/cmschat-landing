"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Globe, MessageSquare, Wrench } from "lucide-react";

interface ToolCardProps {
  action: string;
  file: string;
}

function ToolCard({ action, file }: ToolCardProps) {
  return (
    <div className="border border-white/10 rounded-lg bg-[#0F0F15] px-3 py-2 my-2 text-xs flex items-center gap-2">
      <Wrench className="h-3 w-3 text-emerald-400 shrink-0" />
      <span className="text-white/50 font-mono">{action}</span>
      <span className="text-white/30">-</span>
      <span className="text-white/70 font-mono truncate">{file}</span>
      <Check className="h-3.5 w-3.5 text-emerald-400 ml-auto shrink-0" />
    </div>
  );
}

function DeployBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
      <Globe className="h-3 w-3" />
      {label}
    </div>
  );
}

type Message =
  | {
      type: "client";
      text: string;
    }
  | {
      type: "ai";
      text: string;
      tool?: ToolCardProps;
      badge?: string;
    };

const messages: Message[] = [
  {
    type: "client",
    text: "Can you update the hero image to the new photo from the photoshoot?",
  },
  {
    type: "ai",
    text: "I'll update the hero image right away. Let me resize it to 1920\u00d71080, convert to WebP format, and optimize for web\u2026",
    tool: { action: "edit_file", file: "src/app/page.tsx" },
  },
  {
    type: "ai",
    text: "Done! The hero image has been updated, compressed from 4.2 MB to 186 KB, and deployed to preview.",
    badge: "Deployed to preview",
  },
  {
    type: "client",
    text: "Perfect! Also change the phone number in the footer to +49 123 456789",
  },
  {
    type: "ai",
    text: "Updated! The footer contact number has been changed and is live.",
    tool: { action: "edit_file", file: "src/components/Footer.tsx" },
  },
];

export default function ChatDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto">
      {/* Outer glow effects */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent blur-sm pointer-events-none" />
      <div className="absolute -inset-4 rounded-3xl bg-emerald-500/5 blur-2xl pointer-events-none" />

      {/* Main container */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-emerald-500/5">
        {/* Top bar */}
        <div className="h-12 border-b border-white/10 bg-[#0F0F11] flex items-center px-4 gap-3">
          <MessageSquare className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-white/90 tracking-tight">
            Acme Agency
          </span>
          <span className="flex items-center gap-1.5 ml-auto text-xs text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Connected
          </span>
        </div>

        {/* Gradient overlay at top of chat area */}
        <div className="absolute top-12 left-0 right-0 h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Chat messages */}
        <div className="p-4 sm:p-6 space-y-4 min-h-[380px]">
          {messages.map((msg, i) => {
            const delay = 0.15 + i * 0.2;

            if (msg.type === "client") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="flex justify-end"
                >
                  <div className="ml-auto max-w-[80%] bg-emerald-600/20 border border-emerald-500/30 rounded-2xl rounded-br-md px-4 py-3 text-sm text-white/90 leading-relaxed">
                    {msg.text}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="flex justify-start"
              >
                <div className="mr-auto max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 text-sm text-white/80 leading-relaxed">
                  {msg.text}
                  {msg.tool && (
                    <ToolCard
                      action={msg.tool.action}
                      file={msg.tool.file}
                    />
                  )}
                  {msg.badge && <DeployBadge label={msg.badge} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom input bar (decorative) */}
        <div className="border-t border-white/10 bg-[#0F0F11] px-4 py-3 flex items-center gap-3">
          <div className="flex-1 h-9 rounded-lg bg-white/5 border border-white/10 px-3 flex items-center">
            <span className="text-xs text-white/25">
              Type a message&hellip;
            </span>
          </div>
          <div className="h-9 w-9 rounded-lg bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <svg
              className="h-4 w-4 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
