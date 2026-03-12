import {
  AlertTriangle,
  Shield,
  Clock,
  GitBranch,
  MessageSquare,
  ShieldCheck,
  Check,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Zap,
  Image as ImageIcon,
  Building,
  History
} from "lucide-react";
import ChatDemo from "@/components/marketing/ChatDemo";
import WaitlistForm from "@/components/marketing/WaitlistForm";
import Link from "next/link";

const comparisons = [
  {
    badText: "Client sends email, waits 3 days for a headline change",
    goodText: "Client chats, sees the change in minutes"
  },
  {
    badText: "Client can't use the CMS — too many buttons, fields, and jargon",
    goodText: "Client just types what they want in plain language"
  },
  {
    badText: "Client has no idea what happened to their request",
    goodText: "Client sees status in real-time — pending, live, or needs review"
  },
  {
    badText: "Agency bills 1 hour for a 2-minute fix — client resents it",
    goodText: "Small changes cost nothing — AI handles them instantly"
  },
  {
    badText: "Client uploads a huge photo, site slows down",
    goodText: "Images auto-optimized — cropped, compressed, converted"
  },
  {
    badText: "Nobody knows who changed what — things break silently",
    goodText: "Every change tracked in Git — full history, one-click rollback"
  }
];

const valueProps = [
  {
    icon: MessageSquare,
    title: "Your clients just type what they need.",
    description: "No training. No dashboards to learn. They describe the change in chat, see a preview, and approve it. That's it."
  },
  {
    icon: Zap,
    title: "Changes go live in minutes, not days.",
    description: "Simple updates — text, images, copy — are handled by AI instantly. No more waiting in a dev queue for a typo fix."
  },
  {
    icon: ShieldCheck,
    title: "Your clients stay in control.",
    description: "They see exactly what will change before it goes live. They approve it. Nothing ships without their say-so."
  },
  {
    icon: GitBranch,
    title: "Complex requests don't get lost.",
    description: "When something needs a human, it escalates to your team automatically — with full context. No more 'can you re-explain what you meant?'"
  },
  {
    icon: ImageIcon,
    title: "Images just work.",
    description: "Clients upload whatever they have. cmschat handles crop, resize, compression, and format. No more back-and-forth about file sizes."
  },
  {
    icon: History,
    title: "Everything is reversible.",
    description: "Every change is a Git commit. Something wrong? Roll it back in one click. Clients feel safe experimenting."
  }
];

const planFeatures = [
  "Generous monthly AI token allowance",
  "Connect any Git repo",
  "Approval workflows & history",
  "Automatic image optimization",
  "Slack & Email support",
];

export default function MarketingPage() {
  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden bg-[#07130F] text-white antialiased scroll-smooth">
      {/* ── Navigation Bar ─────────────────────────────────────────────── */}
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
              href="#waitlist"
              className="rounded-lg bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              Request Access
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6">
        {/* Radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="flex-1 text-left">
            {/* Social Proof Badge */}
            <div className="mb-8 flex items-center gap-3">
               <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07130F]" src="https://i.pravatar.cc/100?img=11" alt="User avatar"/>
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07130F]" src="https://i.pravatar.cc/100?img=33" alt="User avatar"/>
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07130F]" src="https://i.pravatar.cc/100?img=47" alt="User avatar"/>
               </div>
               <div className="text-sm font-medium text-zinc-400">
                  Trusted by <span className="text-white font-bold">200+</span> web agencies
               </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-[72px] leading-[1.1] pb-4">
              Update your website. <span className="text-emerald-400">Just ask.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-[1.3rem] text-white leading-[1.4] font-medium">
              Your clients chat what they want changed. AI does it. You approve. Done.
            </p>

            {/* Hook */}
            <p className="mt-4 max-w-xl text-lg text-zinc-400 leading-relaxed font-normal">
              Your clients shouldn't need a developer to fix a typo &mdash; and your developers shouldn't waste their day doing it.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-black transition hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
              >
                Start free trial ↗
              </a>
              <a
                href="#demo"
                className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5 flex items-center gap-2"
              >
                Watch 2-min demo ↗
              </a>
            </div>
          </div>

          {/* Right Column - Demo */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative z-10">
             <ChatDemo />
          </div>
        </div>
      </section>

      {/* ── Comparisons Section ────────────────────────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl lg:text-[56px] leading-tight max-w-4xl mx-auto">
            Your clients get speed.<br />Your team gets freedom.
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-zinc-400 mb-16 px-4">
            They ask. It ships. You sleep. Stop making clients wait for things AI can do now.
          </p>

          <div className="rounded-xl border border-white/10 bg-[#0F1E16] overflow-hidden shadow-2xl">
             {/* Header Row */}
             <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center gap-3 text-red-500 font-bold uppercase tracking-wider text-[13px]">
                   <ThumbsDown className="w-5 h-5 fill-red-500" />
                   Web Design without cmschat
                </div>
                <div className="p-6 md:p-8 flex items-center justify-center gap-3 text-emerald-500 font-bold uppercase tracking-wider text-[13px]">
                   <ThumbsUp className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                   Web Design with cmschat
                </div>
             </div>
             
             {/* Comparison Rows */}
             <div className="p-6 md:p-8 bg-[#0B150F]">
               <div className="space-y-4">
                 {comparisons.map((row, i) => (
                   <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Bad Column */}
                      <div className="rounded-md border border-red-900/40 bg-[#351415] p-5 flex items-start gap-4">
                        <ThumbsDown className="w-6 h-6 shrink-0 text-red-500 fill-red-500 mt-0.5" />
                        <div>
                          <div className="font-bold text-white mb-1.5 text-sm">{row.badText.split('—')[0]}</div>
                          <div className="text-red-100/70 text-[13px] leading-relaxed">{row.badText.split('—')[1] || row.badText}</div>
                        </div>
                      </div>
                      
                      {/* Good Column */}
                      <div className="rounded-md border border-emerald-900/40 bg-[#0F3524] p-5 flex items-start gap-4">
                        <ThumbsUp className="w-6 h-6 shrink-0 text-emerald-400 fill-emerald-400 mt-0.5" />
                        <div>
                          <div className="font-bold text-white mb-1.5 text-sm">{row.goodText.split('—')[0]}</div>
                          <div className="text-emerald-100/70 text-[13px] leading-relaxed">{row.goodText.split('—')[1] || row.goodText}</div>
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:py-32 bg-[#050B08]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
            Give your clients the CMS they'll actually use
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div key={index} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition duration-300">
                  <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-4">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{prop.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
             <a
               href="#waitlist"
               className="inline-flex rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-black transition hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] items-center gap-2"
             >
               Book a free demo now ↗
             </a>
          </div>
        </div>
      </section>


      {/* ── Pricing Preview ────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-lg">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Simple, flat pricing</h2>
            <p className="mt-4 text-zinc-400">
              Just $47 per site. Setup your margins, sell it for whatever you want.
            </p>
          </div>

          <div className="relative rounded-2xl border border-emerald-500/50 bg-[#0F1E16] p-8 shadow-2xl shadow-emerald-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
              All Inclusive
            </div>
            
            <h3 className="text-lg font-semibold mt-2">Agency Standard</h3>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold">$47</span>
              <span className="text-zinc-500 font-medium tracking-wide">/site/mo</span>
            </div>

            <ul className="mt-8 space-y-4">
              {planFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-zinc-300 font-medium"
                >
                  <Check className="h-5 w-5 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="mt-10 block w-full rounded-xl bg-emerald-500 px-6 py-4 text-center text-[15px] font-bold text-black transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Start Free Trial
            </a>
            
            <p className="mt-5 text-center text-xs text-emerald-400/80 font-medium">
              *Add-ons like White-labeling, SSO, APIs, and extra AI tokens available via dashboard.
            </p>
          </div>
          
        </div>
      </section>

      {/* ── Request Access / Waitlist ──────────────────────────────────── */}
      <section id="waitlist" className="relative py-24 px-6 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent"
        />

        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold">Get early access</h2>
          <p className="mt-4 text-zinc-400">
            Join 200+ agencies already on the waitlist.
          </p>

          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
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
            &copy; 2026 cmschat.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
