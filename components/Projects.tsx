"use client";

const projects = [
  {
    title: "DesiQuant",
    accent: "from-emerald-500/60 to-transparent",
    emoji: "📊",
    description:
      "An AI-powered financial research platform for Indian equities — bringing institutional-grade forensic accounting analysis to retail investors. Detects accounting anomalies, red flags, and growth signals so you can see through the numbers.",
    bullets: [
      "Forensic accounting AI — detects unusual receivables, cash flow divergence, and aggressive revenue recognition",
      "Structured analysis of annual reports with growth trigger identification",
      "IPO quantitative analysis for pre-IPO financial window-dressing detection (coming soon)",
    ],
    tags: ["GenAI", "Equity Analysis", "Indian Markets", "Forensic Accounting"],
    live: "https://desiquant.com/",
  },
  {
    title: "BJJ Analyst",
    accent: "from-blue-500/60 to-transparent",
    emoji: "🥋",
    description:
      "A GenAI-powered video analysis tool for Brazilian Jiu-Jitsu. Input a training roll video and it samples 1 frame per second, analyses each frame with a vision LLM, and produces a complete breakdown of the match — positions, transitions, and opportunities.",
    bullets: [
      "Collects partner details before analysis for personalised reports",
      "1 FPS frame extraction pipeline fed into Gemini vision API",
      "Full match analysis with positional breakdowns and insights",
    ],
    tags: ["Next.js", "Gemini API", "Vision AI", "Video Analysis"],
    live: "https://bjj-analyst.vercel.app/",
  },
  {
    title: "Video Editing Tool",
    accent: "from-purple-500/60 to-transparent",
    emoji: "🎬",
    description:
      "A GenAI-first tool built for short-form content creators. Paste a YouTube URL and it automatically identifies viral-worthy timestamps as clip suggestions. Also generates captions and overlays them directly on the video.",
    bullets: [
      "Viral shorts timestamp generator from YouTube URLs",
      "Auto caption generation with video overlay via FFmpeg",
      "Built for the creator economy — zero manual editing needed",
    ],
    tags: ["Next.js", "OpenAI API", "FFmpeg", "Short-form Video"],
    live: "https://editing-tool-one.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">02. Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Things I&apos;ve <span className="gradient-text">Built</span>
        </h2>
        <p className="text-zinc-500 text-base font-mono mb-12">
          Live, deployed GenAI applications
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className={`h-px w-full bg-gradient-to-r ${p.accent}`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-base text-zinc-400 leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                      <span className="text-zinc-400 mt-0.5 flex-shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg border border-zinc-700 text-zinc-400 hover:border-white hover:text-white transition-all duration-200"
                  >
                    <span>↗</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
