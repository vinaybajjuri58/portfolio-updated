export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/3 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-3">06. Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Always open to interesting conversations — whether it&apos;s a project, a collaboration,
          or just talking tech. Feel free to reach out.
        </p>

        <a
          href="mailto:vinaybajjuri58@gmail.com"
          className="inline-block px-8 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-medium text-sm transition-all duration-200 mb-10"
        >
          Say Hello ↗
        </a>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { label: "vinaybajjuri58@gmail.com", href: "mailto:vinaybajjuri58@gmail.com" },
            { label: "github.com/vinaybajjuri58", href: "https://github.com/vinaybajjuri58" },
            { label: "linkedin.com/in/vinaybajjuri", href: "https://www.linkedin.com/in/vinaybajjuri" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-base font-mono text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-xs font-mono text-zinc-700">
            Designed & Built by{" "}
            <span className="text-zinc-600">Bajjuri Vinay Kumar</span>
            {" "}·{" "}
            <span className="text-zinc-700">{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
