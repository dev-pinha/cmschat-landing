"use client";

import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ChevronDown, CheckCircle2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions";

const inputStyles =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors";

const roles = ["Agency Owner", "Developer", "Freelancer", "Other"] as const;

export default function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);
  const [showInviteCode, setShowInviteCode] = useState(false);

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        <h3 className="text-xl font-semibold text-white">
          {state.hasInvite ? "You're on the priority list!" : "You're on the waitlist!"}
        </h3>
        <p className="text-sm text-zinc-400">
          We&apos;ll be in touch soon. Keep an eye on your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      action={formAction}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email <span className="text-emerald-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@agency.com"
          className={inputStyles}
        />
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Company name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Agency (optional)"
          className={inputStyles}
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Role
        </label>
        <select id="role" name="role" className={`${inputStyles} appearance-none`}>
          <option value="" className="bg-zinc-900">
            Select your role…
          </option>
          {roles.map((role) => (
            <option key={role} value={role} className="bg-zinc-900">
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Invite Code Toggle */}
      <div>
        <button
          type="button"
          onClick={() => setShowInviteCode((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
        >
          <motion.span
            animate={{ rotate: showInviteCode ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
          Have an invite code?
        </button>

        <AnimatePresence>
          {showInviteCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3">
                <input
                  name="inviteCode"
                  type="text"
                  placeholder="Enter invite code"
                  className={inputStyles}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error */}
      <AnimatePresence>
        {state?.error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-red-400"
          >
            {state.error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Joining…
          </>
        ) : (
          "Join the Waitlist"
        )}
      </button>
    </motion.form>
  );
}
