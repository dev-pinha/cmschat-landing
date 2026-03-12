"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Dummy submit — replace with real endpoint
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 via-[#0B1A12] to-[#07130F] p-8 md:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            <h3 className="text-xl font-semibold text-white">You are on the list.</h3>
            <p className="text-sm text-zinc-400">
              We will send you our best content on agency growth and AI automation. No spam.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-emerald-400" />
              <h3 className="text-lg font-semibold text-white">Get agency insights weekly</h3>
            </div>
            <p className="text-sm text-zinc-400 mb-5">
              Join 2,000+ agency owners getting actionable tips on AI automation, client management,
              and scaling operations.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@agency.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors text-sm"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm shrink-0"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[11px] text-zinc-600 mt-3">
              Unsubscribe anytime. No spam, ever.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
