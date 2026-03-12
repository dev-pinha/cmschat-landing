import { authors } from "@/data/posts";
import { User } from "lucide-react";

export default function AuthorBio({ authorKey }: { authorKey: string }) {
  const author = authors[authorKey];

  if (!author) return null;

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 flex items-start gap-5">
      <div className="shrink-0 w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
        <User className="h-6 w-6 text-emerald-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{author.name}</p>
        <p className="text-xs text-emerald-400 mb-2">{author.role}</p>
        <p className="text-sm text-zinc-400 leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
}
