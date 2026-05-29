const jobs = [
  {
    company: "Altir",
    role: "Senior Software Engineer",
    duration: "Oct 2025 – Present",
    current: true,
    bullets: [
      "Promoted to Senior Software Engineer based on consistent delivery and ownership",
      "Leading frontend architecture decisions and mentoring within the team",
      "Driving technical quality and scalability across the product suite",
    ],
    tags: ["React.js", "Next.js", "Architecture", "Leadership"],
  },
  {
    company: "Altir",
    role: "Software Engineer",
    duration: "May 2023 – Oct 2025",
    current: false,
    bullets: [
      "Built multiple applications from scratch using React.js and Vue.js",
      "Developed a complete CRM and customer-based application end-to-end",
      "Designed and built a reusable custom component library used across products",
      "Owned the entire Sales module — Requests, Orders, Invoices, and Shipments",
    ],
    tags: ["React.js", "Vue.js", "CRM", "TypeScript"],
  },
  {
    company: "Ajio (Reliance Retail)",
    role: "Software Engineer",
    duration: "Dec 2021 – May 2023",
    current: false,
    bullets: [
      "Owned the Landing Page and Product Description Page for one of India's largest fashion e-commerce platforms",
      "Shipped key features: Product Rating Flow, Impressions tracking, and a Custom Video Player",
      "Built reusable UI components adopted extensively across the codebase",
      "Recognised with the Business Excellence Award for outstanding performance",
    ],
    tags: ["React.js", "JavaScript", "E-Commerce", "Performance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">02. Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Where I&apos;ve <span className="gradient-text">Worked</span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 via-zinc-800 to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div key={i} className="relative md:pl-10">
                <div className={`hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#080808] ${job.current ? "border-white" : "border-zinc-600"}`} />

                <div className={`border rounded-xl p-6 transition-all duration-300 group ${job.current ? "bg-zinc-900 border-zinc-700 hover:border-zinc-500" : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-400 font-mono text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-600 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700 whitespace-nowrap">
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-500">
                        <span className="text-zinc-400 mt-1 flex-shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
