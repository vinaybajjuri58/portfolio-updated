export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">01. About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Who I <span className="gradient-text">Am</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-zinc-300 text-lg leading-relaxed">
            <p>
              I&apos;m a Software Engineer with <span className="text-white font-semibold">4+ years of experience</span> building
              scalable web applications. My primary focus has been frontend-heavy full-stack development — crafting
              fast, clean, and maintainable products using{" "}
              <span className="text-white">React.js</span>,{" "}
              <span className="text-white">Next.js</span>, and{" "}
              <span className="text-white">Vue.js</span>.
            </p>
            <p>
              Beyond the day job, I&apos;m deeply curious about how{" "}
              <span className="text-white font-semibold">Generative AI</span> can transform
              real businesses — improving metrics, automating workflows, and unlocking new product possibilities.
              I turn that curiosity into working tools and POCs.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me on the mats — I practice{" "}
              <span className="text-white font-semibold">Boxing</span> and I&apos;m a white belt in{" "}
              <span className="text-white font-semibold">Brazilian Jiu-Jitsu</span> (which inspired one of my
              AI projects). I also spend time studying{" "}
              <span className="text-white font-semibold">markets and investing</span>.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
              {[
                { label: "Location", value: "India (Remote-first)", icon: "📍" },
                { label: "Experience", value: "4+ Years", icon: "💼" },
                { label: "Education", value: "B.Tech CSE · Vardhaman College · 2021", icon: "🎓" },
                { label: "Availability", value: "Open to US Remote Roles", icon: "🟢" },
                { label: "Interests", value: "GenAI, Martial Arts, Markets", icon: "⚡" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg w-6 flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="block text-xs font-mono text-zinc-500 uppercase tracking-wider">{item.label}</span>
                    <span className="text-base text-zinc-300">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/vinaybajjuri58"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-mono border border-zinc-800 rounded-lg text-zinc-500 hover:border-zinc-400 hover:text-white transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vinaybajjuri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-mono border border-zinc-800 rounded-lg text-zinc-500 hover:border-zinc-400 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <a
                href="mailto:vinaybajjuri58@gmail.com"
                className="flex-1 py-2.5 text-center text-sm font-mono border border-zinc-800 rounded-lg text-zinc-500 hover:border-zinc-400 hover:text-white transition-all"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
