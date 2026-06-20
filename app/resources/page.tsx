import Link from "next/link";

const INTERNAL_LINKS = [
  {
    title: "Voice Agents — Complete Blueprint",
    description:
      "End-to-end reference covering voice pipelines, outbound calling, tool use, memory, observability, voice cloning, and real cost breakdowns for every stack.",
    href: "/resources/voice-agents",
    icon: "🎙️",
    tag: "BLUEPRINT",
    accent: "from-violet-500/50 to-transparent",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

const LINKS = [
  {
    title: "Skills.sh — Agent Skills Ecosystem",
    description:
      "An open registry of reusable agent skills. Browse, share, and compose capabilities across AI agents without rebuilding from scratch.",
    url: "https://www.skills.sh/",
    icon: "🛠️",
    tag: "TOOL",
    accent: "from-emerald-500/50 to-transparent",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Prompt Engineering — Google Whitepaper",
    description:
      "Google's comprehensive Kaggle whitepaper covering zero-shot, few-shot, chain-of-thought, and advanced prompting techniques with worked examples.",
    url: "https://www.kaggle.com/whitepaper-prompt-engineering",
    icon: "📄",
    tag: "GUIDE",
    accent: "from-blue-500/50 to-transparent",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "Prompt Engineering — Anthropic Docs",
    description:
      "Anthropic's official guide to building effective prompts with Claude — covering clarity, context, output formatting, and iterative refinement.",
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    icon: "📄",
    tag: "GUIDE",
    accent: "from-blue-500/50 to-transparent",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "AI Psychosis — More Perfect Union",
    description:
      "An investigative documentary exploring how AI chatbots are influencing vulnerable users — mental health risks, manipulation patterns, and what companies aren't telling you.",
    url: "https://www.youtube.com/watch?v=zkGk_A4noxI",
    icon: "▶",
    tag: "VIDEO",
    accent: "from-amber-500/50 to-transparent",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    title: "AI Psychosis — Aevy TV",
    description:
      "A second deep-dive on AI-induced psychosis cases, covering real incidents where users became dangerously attached to or manipulated by LLM companions.",
    url: "https://www.youtube.com/watch?v=0zKZz9PQsf8",
    icon: "▶",
    tag: "VIDEO",
    accent: "from-amber-500/50 to-transparent",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    title: "MOAT — Y Combinator",
    description:
      "Y Combinator breaks down the most defensible advantages AI companies can build — from proprietary data and workflow lock-in to community and fine-tuned models.",
    url: "https://www.youtube.com/watch?v=bxBzsSsqQAM",
    icon: "▶",
    tag: "VIDEO",
    accent: "from-amber-500/50 to-transparent",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    title: "MOAT — 5 Ways to Get Rich in the AI Era",
    description:
      "A breakdown of the five clearest paths to wealth creation in the current AI wave — who is capturing value, where incumbents are vulnerable, and what individuals can act on now.",
    url: "https://www.youtube.com/watch?v=RJFX4fQpxbA",
    icon: "▶",
    tag: "VIDEO",
    accent: "from-amber-500/50 to-transparent",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

export default function VinAiPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-zinc-800">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
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

      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Profile */}
        <section className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-white">Vinay Bajjuri</h1>
          <p className="mt-1 text-sm font-mono text-zinc-500">@vin.ai_</p>
          <p className="mt-2 text-base text-zinc-300 max-w-xs leading-relaxed">
            Gen AI Experiments · Business Enthusiast · Building at the intersection of AI &amp; product
          </p>
        </section>

        {/* Section label */}
        <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-6 text-center">
          Curated Resources
        </p>

        {/* Cards grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Internal pages */}
          {INTERNAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`h-px w-full bg-gradient-to-r ${link.accent}`} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{link.icon}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${link.tagColor}`}>
                    {link.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-zinc-300 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed flex-1">{link.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span>Open</span>
                  <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/* External links */}
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`h-px w-full bg-gradient-to-r ${link.accent}`} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{link.icon}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${link.tagColor}`}>
                    {link.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-zinc-300 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed flex-1">{link.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span>Open</span>
                  <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-14 pb-6 text-center">
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
