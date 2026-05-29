"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Explore", href: "#explore" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-zinc-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-sm font-mono font-bold tracking-widest uppercase">
          <span className="text-zinc-400">&gt;</span>{" "}
          <span className="gradient-text">vinay</span>
          <span className="text-zinc-500">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-mono"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:vinaybajjuri58@gmail.com"
              className="text-sm font-mono px-4 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-mono text-zinc-500 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:vinaybajjuri58@gmail.com" className="block mt-2 py-2 text-sm font-mono text-zinc-300">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
