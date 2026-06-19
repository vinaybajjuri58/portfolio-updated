import Link from "next/link";

const LINKS = [
  {
    title: "Skills resource",
    description: "The open agent skills ecosystem",
    url: "https://www.skills.sh/",
    icon: "📄",
    tag: "TOOL",
  },
  {
    title: "Prompt Engineering guide from Google",
    description: "Comprehensive whitepaper on prompt engineering techniques",
    url: "https://www.kaggle.com/whitepaper-prompt-engineering",
    icon: "📄",
    tag: "GUIDE",
  },
  {
    title: "Prompt Engineering guide from Anthropic",
    description: "Official Anthropic guide for building effective prompts with Claude",
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    icon: "📄",
    tag: "GUIDE",
  },
  {
    title: "We Investigated AI Psychosis. What We Found Will Shock You",
    description: "More Perfect Union — documentary on AI psychosis",
    url: "https://www.youtube.com/watch?v=zkGk_A4noxI",
    icon: "▶",
    tag: "VIDEO",
  },
  {
    title: "We Investigated AI Psychosis (It's Worse Than You Think)",
    description: "Aevy TV",
    url: "https://www.youtube.com/watch?v=0zKZz9PQsf8",
    icon: "▶",
    tag: "VIDEO",
  },
];

const TAG_COLORS: Record<string, string> = {
  TOOL: "text-emerald-400",
  GUIDE: "text-blue-400",
  VIDEO: "text-amber-400",
};

export default function VinAiPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-zinc-800">
        <nav className="max-w-[480px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-mono font-bold tracking-widest text-zinc-300">
            @vin.ai_
          </span>
          <Link
            href="/"
            className="text-sm font-mono px-4 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition-all duration-200"
          >
            ← Portfolio
          </Link>
        </nav>
      </header>

      <main className="max-w-[480px] mx-auto px-6 py-12">

        {/* ── Profile ─────────────────────────────────────────────────────── */}
        <section className="mb-10 flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-white">Vinay Bajjuri</h1>
          <p className="mt-1 text-sm font-mono text-zinc-500">@vin.ai_</p>
          <p className="mt-2 text-sm text-zinc-400 max-w-xs leading-relaxed">
            Gen AI Experiments | Business Enthusiast
          </p>
        </section>

        {/* ── Links ───────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-px"
            >
              <span className="flex-shrink-0 text-lg">{link.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-medium text-white leading-snug">{link.title}</p>
                  <span className={`text-[10px] font-mono ${TAG_COLORS[link.tag] ?? "text-zinc-500"} flex-shrink-0`}>
                    {link.tag}
                  </span>
                </div>
                {link.description && (
                  <p className="mt-0.5 text-xs text-zinc-500">{link.description}</p>
                )}
              </div>
              <svg
                className="h-4 w-4 flex-shrink-0 text-zinc-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="mt-12 pb-6 text-center">
          <p className="text-xs text-zinc-700">
            Built by{" "}
            <Link href="/" className="text-zinc-600 hover:text-white transition-colors">
              Vinay Bajjuri
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
