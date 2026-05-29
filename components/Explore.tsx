const interests = [
  {
    emoji: "🏗️",
    title: "Architecture & System Design",
    description:
      "Exploring software architecture patterns — from microservices to event-driven systems — with a focus on building scalable, performant, and accessible web applications that hold up under real-world load.",
  },
  {
    emoji: "🔐",
    title: "Security & OWASP",
    description:
      "Studying OWASP vulnerabilities and modern application security practices. Interested in applying GenAI to the security space — from threat detection and code auditing to intelligent security tooling.",
  },
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


export default function Explore() {
  return (
    <section id="explore" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">04. Explore</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Things I Like <span className="gradient-text">Exploring</span>
        </h2>
        <p className="text-zinc-400 text-base font-mono mb-12">
          Beyond the job — what keeps me thinking
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xl mb-4">
                {item.emoji}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
