const interests = [
  {
    emoji: "🤖",
    title: "GenAI for Business",
    description:
      "Fascinated by how different types of businesses — from retail to finance to sports — can integrate Generative AI to improve key metrics, automate processes, and unlock new capabilities.",
  },
  {
    emoji: "🥋",
    title: "Martial Arts",
    description:
      "I practice Boxing and hold a White Belt in Brazilian Jiu-Jitsu. BJJ even inspired one of my AI projects — BJJ Analyst, a video analysis tool for training rolls.",
  },
  {
    emoji: "📈",
    title: "Investing & Trading",
    description:
      "Actively studying markets, equity analysis, and trading strategies. Building mental models around compounding, risk, and decision-making under uncertainty.",
  },
  {
    emoji: "⚙️",
    title: "Building AI POCs",
    description:
      "I love taking a real-world problem, finding where AI can add value, and shipping a working prototype — fast. Each POC is a learning loop.",
  },
];

const pocs = [
  {
    title: "DesiQuant",
    desc: "AI-powered forensic accounting and equity analysis for Indian markets",
    link: "https://desiquant.com/",
    tag: "Live",
  },
  {
    title: "BJJ Analyst",
    desc: "Video analysis for BJJ training rolls using Gemini vision API",
    link: "https://bjj-analyst.vercel.app/",
    tag: "Live",
  },
  {
    title: "Video Editing Tool",
    desc: "Auto captions + viral timestamp generator for short-form creators",
    link: "https://editing-tool-one.vercel.app/",
    tag: "Live",
  },
  {
    title: "More POCs",
    desc: "Continuously building and experimenting with new ideas",
    tag: "Ongoing",
  },
];

export default function Explore() {
  return (
    <section id="explore" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">04. Explore</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Things I Like <span className="gradient-text">Exploring</span>
        </h2>
        <p className="text-zinc-600 text-sm font-mono mb-12">
          Beyond the job — what keeps me thinking
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {interests.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-all duration-300 group"
            >
              <span className="text-3xl block mb-3">{item.emoji}</span>
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-sm">$</span> AI-Assisted POCs
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {pocs.map((poc) => (
              <div
                key={poc.title}
                className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">{poc.title}</span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                        poc.tag === "Live"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : poc.tag === "WIP"
                          ? "bg-zinc-700 border-zinc-600 text-zinc-400"
                          : "bg-zinc-800 border-zinc-700 text-zinc-500"
                      }`}
                    >
                      {poc.tag}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600">{poc.desc}</p>
                </div>
                {poc.link && (
                  <a
                    href={poc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors text-sm flex-shrink-0"
                  >
                    ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
