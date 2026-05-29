const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "AI / GenAI",
    icon: "🤖",
    skills: ["LLMs", "RAG Pipelines", "Gemini API", "OpenAI API", "Prompt Engineering", "AI Agents", "Vision AI"],
  },
  {
    category: "Backend & Tools",
    icon: "⚙️",
    skills: ["Python", "Node.js", "REST APIs", "FFmpeg", "Git", "Vercel", "npm"],
  },
  {
    category: "Domains",
    icon: "🏗️",
    skills: ["CRM Systems", "E-Commerce", "Short-form Video", "Video Analysis", "Equity Research"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">05. Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Tech <span className="gradient-text">Stack</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-sm font-bold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-wrap gap-6 justify-around">
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Web Apps", value: "10+" },
            { label: "AI Projects", value: "5+" },
            { label: "Availability", value: "Remote" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs font-mono text-zinc-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
