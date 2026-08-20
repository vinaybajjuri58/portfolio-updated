"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "GenAI Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glows — subtle white */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl pulse-slow pointer-events-none" style={{ animationDelay: "2.5s" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 flex flex-col items-center text-center md:items-start md:text-left">
        <p className="animate-fadeup font-mono text-zinc-500 text-sm mb-4 tracking-widest uppercase">
          <span className="opacity-60">&gt;_</span> Hello, World
        </p>

        <h1 className="animate-fadeup delay-1 text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-none">
          <span className="gradient-text">Bajjuri</span>{" "}
          Vinay Kumar
        </h1>

        <div className="animate-fadeup delay-2 h-10 flex items-center gap-1 mb-6">
          <span className="text-2xl md:text-3xl font-mono text-zinc-200">
            {displayed}
          </span>
          <span className="text-2xl md:text-3xl text-zinc-200 cursor-blink">|</span>
        </div>

        <p className="animate-fadeup delay-3 max-w-xl text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
          Software Engineer with{" "}
          <span className="text-white font-semibold">4+ years</span> building scalable web applications.
          Deeply interested in how{" "}
          <span className="text-white font-semibold">GenAI</span> can transform real businesses — and I build things to prove it.
        </p>

        <div className="animate-fadeup delay-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-medium text-sm transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white font-medium text-sm transition-all duration-200"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/vinaybajjuri58"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white font-medium text-sm transition-all duration-200"
          >
            GitHub
          </a>
        </div>

        {/* <div className="animate-fadeup delay-5 mt-10 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm font-mono text-zinc-400">
            Open to AI  opportunities
          </span>
        </div> */}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className="text-xs font-mono text-zinc-600">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
